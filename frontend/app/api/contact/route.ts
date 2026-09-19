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
  const validationRes = await validate({
    email: email,
    validateRegex: true,
    validateMx: true,
    validateTypo: true,
    validateDisposable: true,
    validateSMTP: false, // SMTP check is often blocked by local ISPs, MX check is enough
  });

  if (!validationRes.valid) {
    console.warn("Email validation failed:", validationRes.validators);
    return NextResponse.json(
      { error: "The email address provided does not appear to be valid or active. Please check and try again." },
      { status: 400 }
    );
  }

  try {
    // 2. Save to CSV Locally
    const csvLine = `"${name.replace(/"/g, '""')}","${email}","${phone}","${message.replace(/"/g, '""').replace(/\n/g, " ")}","${new Date().toISOString()}"\n`;
    const csvPath = path.join(process.cwd(), "contacts.csv");
    
    // Check if file exists, if not write headers
    try {
      await fs.access(csvPath);
    } catch {
      await fs.writeFile(csvPath, "Name,Email,Phone,Message,Date\n");
    }
    await fs.appendFile(csvPath, csvLine);

    // 3. Sync to Google Sheets
    if (process.env.GOOGLE_CLIENT_EMAIL && process.env.GOOGLE_PRIVATE_KEY && process.env.GOOGLE_SHEET_ID) {
      try {
        const serviceAccountAuth = new JWT({
          email: process.env.GOOGLE_CLIENT_EMAIL,
          key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
          scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        });

        const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, serviceAccountAuth);
        await doc.loadInfo(); 
        const sheet = doc.sheetsByIndex[0];
        
        // ensure headers exist on the sheet before adding rows if it's empty
        try {
          await sheet.setHeaderRow(["Name", "Email", "Phone", "Message", "Date"]);
        } catch (e) {
          // ignore if headers already set or can't be set
        }

        await sheet.addRow({
          Name: name,
          Email: email,
          Phone: phone,
          Message: message,
          Date: new Date().toISOString()
        });
      } catch (sheetError) {
        console.error("Google Sheets Sync failed:", sheetError);
      }
    }

    // 4. Send a confirmation email to the USER using Nodemailer
    // This requires EMAIL_USER and EMAIL_PASS to be set in .env.local
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
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
    }

    return NextResponse.json({ ok: true, message: "Email validated and auto-reply sent successfully" });
  } catch (error) {
    console.error("Error processing form:", error);
    return NextResponse.json(
      { error: "Something went wrong while processing your request. Please try again." },
      { status: 500 }
    );
  }
}
