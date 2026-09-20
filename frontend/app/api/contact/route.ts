import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import validate from "deep-email-validator";
import fs from "fs/promises";
import path from "path";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);

  if (!body || !body.name || !body.email || !body.phone || !body.message) {
    return NextResponse.json(
      { error: "Name, email, phone, and message are required." },
      { status: 400 }
    );
  }

  const { name, email, phone, message } = body;

  const nameRegex = /^[A-Za-z\s]+$/;
  if (!nameRegex.test(name)) {
    return NextResponse.json(
      { error: "Name should only contain letters and spaces." },
      { status: 400 }
    );
  }

  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phone)) {
    return NextResponse.json(
      { error: "Phone number must be exactly 10 digits." },
      { status: 400 }
    );
  }

  // 1. Verify if the email actually exists
  try {
    const validationRes = await validate({
      email: email,
      validateRegex: true,
      validateMx: true,
      validateTypo: true,
      validateDisposable: true,
      validateSMTP: false, // SMTP check is often blocked by ISPs / serverless, MX check is enough
    });

    if (!validationRes.valid) {
      console.warn("Email validation details:", validationRes.validators);
      if (validationRes.validators.regex?.valid === false) {
        return NextResponse.json(
          { error: "Please enter a valid email address." },
          { status: 400 }
        );
      }
      if (validationRes.validators.disposable?.valid === false) {
        return NextResponse.json(
          { error: "Disposable email addresses are not accepted." },
          { status: 400 }
        );
      }
      if (validationRes.validators.mx?.valid === false) {
        console.warn("MX check failed for domain, allowing submission since regex format is valid.");
      }
    }
  } catch (validationErr) {
    console.warn("Email validation lookup timed out or failed (continuing):", validationErr);
  }

  try {
    // 2. Save to CSV (Safe for Vercel Serverless where root filesystem is read-only)
    try {
      const csvLine = `"${name.replace(/"/g, '""')}","${email}","${phone}","${message.replace(/"/g, '""').replace(/\n/g, " ")}","${new Date().toISOString()}"\n`;
      const tmpDir = process.env.VERCEL ? "/tmp" : process.cwd();
      const csvPath = path.join(tmpDir, "contacts.csv");

      try {
        await fs.access(csvPath);
      } catch {
        await fs.writeFile(csvPath, "Name,Email,Phone,Message,Date\n");
      }
      await fs.appendFile(csvPath, csvLine);
    } catch (csvError) {
      console.warn("CSV backup skipped (read-only filesystem or access error):", csvError);
    }

    // 3. Sync to Google Sheets
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL?.trim().replace(/^["']|["']$/g, "");
    const rawKey = process.env.GOOGLE_PRIVATE_KEY?.trim();
    const sheetId = process.env.GOOGLE_SHEET_ID?.trim().replace(/^["']|["']$/g, "");

    let sheetSaved = false;

    if (clientEmail && rawKey && sheetId) {
      try {
        // Strip accidental outer quotes from Vercel/env and parse literal \n to actual newlines
        const cleanedKey = rawKey
          .replace(/^["']|["']$/g, "")
          .replace(/\\n/g, "\n");

        const serviceAccountAuth = new JWT({
          email: clientEmail,
          key: cleanedKey,
          scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        });

        const doc = new GoogleSpreadsheet(sheetId, serviceAccountAuth);
        await doc.loadInfo(); 
        const sheet = doc.sheetsByIndex[0];

        // Ensure headers exist on the sheet before adding rows if it's empty
        try {
          await sheet.loadHeaderRow();
        } catch {
          try {
            await sheet.setHeaderRow(["Name", "Email", "Phone", "Message", "Date"]);
          } catch (headerErr) {
            console.warn("Could not set header row:", headerErr);
          }
        }

        await sheet.addRow({
          Name: name,
          Email: email,
          Phone: phone,
          Message: message,
          Date: new Date().toISOString(),
        });

        sheetSaved = true;
        console.log("Successfully saved contact to Google Sheets");
      } catch (sheetError) {
        console.error("Google Sheets Sync failed:", sheetError);
      }
    } else {
      console.warn("Google Sheets Sync skipped: missing environment variables", {
        hasEmail: Boolean(clientEmail),
        hasKey: Boolean(rawKey),
        hasSheetId: Boolean(sheetId),
      });
    }

    // 4. Send a confirmation email to the USER using Nodemailer (if configured)
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        const mailOptions = {
          from: `"Identora" <${process.env.EMAIL_USER}>`,
          to: email,
          subject: `Thank you for reaching out, ${name}!`,
          html: `
            <div style="font-family: sans-serif; padding: 20px; color: #333;">
              <h2 style="color: #EC4899;">Hello ${name},</h2>
              <p>Thank you for getting in touch! We have received your message and will get back to you as soon as possible.</p>
              <hr style="border: 1px solid #fce7f3; margin: 20px 0;" />
              <p><strong>A copy of your message:</strong></p>
              <p style="white-space: pre-wrap;">${message}</p>
              <br/>
              <p>Best regards,</p>
              <p><strong>Identora Team</strong></p>
            </div>
          `,
        };

        await transporter.sendMail(mailOptions);
      } catch (mailError) {
        console.error("Nodemailer failed to send auto-reply:", mailError);
      }
    }

    return NextResponse.json({
      ok: true,
      message: "Form processed successfully",
      sheetSaved,
    });
  } catch (error) {
    console.error("Error processing form:", error);
    return NextResponse.json(
      { error: "Something went wrong while processing your request. Please try again." },
      { status: 500 }
    );
  }
}
