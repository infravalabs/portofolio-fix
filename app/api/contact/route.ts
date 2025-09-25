import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message }: ContactFormData = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: { rejectUnauthorized: false },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: `[Contact Form] ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}`,
      html: `
        <table style="width:100%; background-color:#f4f4f4; padding:20px; font-family:Arial,sans-serif;">
          <tr>
            <td align="center">
              <table style="max-width:600px; background:#ffffff; border-radius:8px; padding:20px; border:1px solid #e0e0e0;">
                <tr>
                  <td style="border-bottom:1px solid #e0e0e0; padding-bottom:10px;">
                    <h2 style="margin:0; color:#222; font-size:20px; font-weight:600;">New Contact Form Submission</h2>
                  </td>
                </tr>
                <tr>
                  <td style="padding:15px 0;">
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Subject:</strong> ${subject}</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p style="font-weight:600;">Message:</p>
                    <pre style="padding:12px; background:#fafafa; border:1px solid #ddd; border-radius:6px;">${message.trim()}</pre>
                  </td>
                </tr>
                <tr>
                  <td style="padding-top:20px; border-top:1px solid #e0e0e0; text-align:center; font-size:12px; color:#888;">
                    <p style="margin:0;">This message was sent from your website contact form.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>`,
    });

    return NextResponse.json({ success: true, message: "Email Sent Successfully" });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ success: false, message: "Failed to Send Email" }, { status: 500 });
  }
}
