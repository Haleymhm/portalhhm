import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/schemas";
import { getResend } from "@/lib/resend";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body" },
      { status: 400 },
    );
  }

  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Validation failed",
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 422 },
    );
  }

  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";
  const resend = getResend();

  if (!resend || !to) {
    if (process.env.NODE_ENV !== "production") {
      console.log("[contact] (dev) email payload:", { to, from, ...parsed.data });
      return NextResponse.json({ ok: true, devMode: true });
    }
    return NextResponse.json(
      { error: "Email service is not configured" },
      { status: 503 },
    );
  }

  const { name, email, subject, message } = parsed.data;
  const html = `
    <h2>New contact message</h2>
    <p><strong>From:</strong> ${name} <${email}></p>
    <p><strong>Subject:</strong> ${subject}</p>
    <hr />
    <p style="white-space:pre-line">${message.replace(/</g, "<")}</p>
  `;

  try {
    await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] resend error", err);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 502 },
    );
  }
}
