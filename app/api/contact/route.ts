import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

export const runtime = "nodejs";

const contactSchema = z.object({
  name: z.string().trim().min(3).max(100),
  email: z.string().trim().email().max(200),
  subject: z.string().trim().min(5).max(200),
  message: z.string().trim().min(5).max(5000),
});

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid form data", issues: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error("Contact form: SMTP env vars are not configured");
    return NextResponse.json(
      { error: "Email service is not configured" },
      { status: 500 }
    );
  }

  const port = Number(SMTP_PORT ?? 465);
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const { name, email, subject, message } = parsed.data;

  try {
    await transporter.sendMail({
      // Send from the authenticated account (providers reject spoofed From),
      // and let "Reply" go straight to the visitor.
      from: `"Portfolio Contact" <${SMTP_USER}>`,
      to: CONTACT_TO || SMTP_USER,
      replyTo: `"${name.replace(/"/g, "")}" <${email}>`,
      subject: `[Portfolio] ${subject}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `<p><strong>From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(
        email
      )}&gt;</p><p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form: sendMail failed", err);
    return NextResponse.json({ error: "Failed to send message" }, { status: 502 });
  }
}
