"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Mail, PhoneCall, Send, Leaf, Sprout } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    setErrors({});

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    // Custom Validation
    const newErrors: Record<string, string> = {};
    if (!data.name?.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(data.name)) {
      newErrors.name = "Name should only contain letters and spaces";
    }

    if (!data.phone?.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(data.phone)) {
      newErrors.phone = "Please enter exactly 10 digits";
    }

    if (!data.email?.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!data.message?.trim()) {
      newErrors.message = "Message is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setStatus("idle");
      return;
    }

    try {
      // 1. Call internal API to sync with Google Sheets & backend handlers
      const apiRes = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const apiResult = await apiRes.json().catch(() => ({}));
      if (!apiRes.ok) {
        throw new Error(apiResult.error || "Failed to submit message to server.");
      }

      // 2. Also send notification to owner via EmailJS (if configured)
      if (
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      ) {
        try {
          const emailRes = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
              template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
              user_id: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
              template_params: data,
            }),
          });

          if (!emailRes.ok) {
            console.warn("EmailJS notification failed:", await emailRes.text());
          }
        } catch (emailErr) {
          console.warn("EmailJS notification error:", emailErr);
        }
      }

      setStatus("success");
      form.reset();
    } catch (error: any) {
      console.error("Error submitting form:", error);
      setStatus("error");
      setErrorMessage(error.message);
    }
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-gradient-to-b from-[#FFF0F5] to-white">
      <div className="w-full px-4 md:px-8 lg:px-12 max-w-[1400px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT SIDE: Text and Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col justify-center"
          >
            <motion.div variants={itemVariants}>
              <p className="uppercase tracking-[3px] text-pink-500 text-sm font-semibold flex items-center gap-2">
                Let's Connect
                <Heart className="w-4 h-4" />
              </p>
              <h2 className="heading text-3xl sm:text-4xl lg:text-6xl font-bold text-[#2D1B1B] mt-4 leading-tight">
                Have a Project in <span className="text-pink-400 font-serif italic">Mind?</span>
              </h2>
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-pink-300 to-pink-500 mt-5"></div>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-lg">
                I'd love to hear about your ideas. Whether you're launching a new brand, growing your business online, or looking for creative marketing solutions, I'm here to help bring your vision to life.
              </p>
            </motion.div>

            {/* Contact Info Pills */}
            <motion.div variants={itemVariants} className="flex flex-col gap-4 mt-10 max-w-md">
              {/* Email */}
              <a href="mailto:identbyharshika@gmail.com" className="group flex items-center gap-4 p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-pink-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(236,127,158,0.15)] hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition-colors duration-300 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-0.5">Email</p>
                  <p className="text-base font-bold text-[#2D1B1B]">identbyharshika@gmail.com</p>
                </div>
              </a>

              {/* Phone */}
              <a href="tel:+919954733307" className="group flex items-center gap-4 p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-pink-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(236,127,158,0.15)] hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition-colors duration-300 shrink-0">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-0.5">Phone</p>
                  <p className="text-base font-bold text-[#2D1B1B]">+91 99547 33307</p>
                </div>
              </a>

              {/* Instagram */}
              <a href="https://instagram.com/identora_byharshika" target="_blank" rel="noreferrer" className="group flex items-center gap-4 p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-pink-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(236,127,158,0.15)] hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition-colors duration-300 shrink-0">
                  <i className="bi bi-instagram text-2xl"></i>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-0.5">Instagram</p>
                  <p className="text-base font-bold text-[#2D1B1B]">@identora_byharshika</p>
                </div>
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white/60 backdrop-blur-xl border border-pink-100 p-6 sm:p-8 lg:p-10 rounded-[30px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden">
              {/* Decorative Blur */}
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-pink-200 rounded-full blur-3xl opacity-40 pointer-events-none"></div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-purple-100 rounded-full blur-3xl opacity-40 pointer-events-none"></div>

              <form onSubmit={handleSubmit} noValidate className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="text-sm font-bold text-[#2D1B1B] ml-1 mb-2 block">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      className={`w-full bg-white/80 px-5 py-3.5 rounded-xl border ${errors.name ? 'border-red-400 focus:border-red-400 focus:ring-red-100/50' : 'border-pink-50 focus:border-pink-300 focus:ring-pink-100/50'} focus:ring-4 outline-none transition-all placeholder:text-gray-400 text-gray-700`}
                    />
                    {errors.name && <p className="text-red-500 text-xs font-medium mt-1.5 ml-1">{errors.name}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="text-sm font-bold text-[#2D1B1B] ml-1 mb-2 block">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="9876543210"
                      className={`w-full bg-white/80 px-5 py-3.5 rounded-xl border ${errors.phone ? 'border-red-400 focus:border-red-400 focus:ring-red-100/50' : 'border-pink-50 focus:border-pink-300 focus:ring-pink-100/50'} focus:ring-4 outline-none transition-all placeholder:text-gray-400 text-gray-700`}
                    />
                    {errors.phone && <p className="text-red-500 text-xs font-medium mt-1.5 ml-1">{errors.phone}</p>}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="text-sm font-bold text-[#2D1B1B] ml-1 mb-2 block">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    className={`w-full bg-white/80 px-5 py-3.5 rounded-xl border ${errors.email ? 'border-red-400 focus:border-red-400 focus:ring-red-100/50' : 'border-pink-50 focus:border-pink-300 focus:ring-pink-100/50'} focus:ring-4 outline-none transition-all placeholder:text-gray-400 text-gray-700`}
                  />
                  {errors.email && <p className="text-red-500 text-xs font-medium mt-1.5 ml-1">{errors.email}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="text-sm font-bold text-[#2D1B1B] ml-1 mb-2 block">Your Message</label>
                  <textarea
                    rows={4}
                    name="message"
                    placeholder="Tell me about your project..."
                    className={`w-full bg-white/80 px-5 py-3.5 rounded-xl border ${errors.message ? 'border-red-400 focus:border-red-400 focus:ring-red-100/50' : 'border-pink-50 focus:border-pink-300 focus:ring-pink-100/50'} focus:ring-4 outline-none transition-all resize-none placeholder:text-gray-400 text-gray-700`}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-xs font-medium mt-1.5 ml-1">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-pink-500 to-pink-400 text-white font-semibold text-lg flex items-center justify-center gap-2 group hover:shadow-[0_8px_25px_rgba(236,72,153,0.3)] hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span>{status === "loading" ? "Sending..." : "Send Message"}</span>
                  {status !== "loading" && <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />}
                </button>

                {status === "success" && (
                  <p className="text-green-600 text-center font-medium mt-4">Thank you! Your message has been sent.</p>
                )}
                {status === "error" && (
                  <p className="text-red-500 text-center font-medium mt-4">{errorMessage || "Something went wrong. Please try again."}</p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Leaves Background */}
      <div className="absolute left-0 bottom-10 hidden xl:block opacity-10 pointer-events-none">
        <Leaf className="w-32 h-32 text-pink-400" />
      </div>
      <div className="absolute right-0 top-10 hidden xl:block opacity-10 pointer-events-none">
        <Sprout className="w-32 h-32 text-pink-400" />
      </div>
    </section>
  );
}
