import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST() {
  // const { to, subject, text } = await req.json();

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    secure: false,
    port: Number(process.env.SMTP_PORT),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: "Riya Kaushik <8c526c001@smtp-brevo.com>", // yahi hona chahiye, SMTP login se same
      to: "riyakaushik6410@gmail.com", // jise bhejna hai
      subject: "Invitation to our Event!",
      text: "You're invited to our event happening on XYZ.",
    });
    
    

  
    return NextResponse.json({ success: true, message: "Email sent!" });
  } catch (err) {
    console.error('Email send error: ', err);
    const errorMessage = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ success: false, error: `Failed to send email: ${errorMessage}` }, { status: 500 });
  }

}
