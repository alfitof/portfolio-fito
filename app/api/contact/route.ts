import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Semua field wajib diisi." }, { status: 400 });
    }

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      subject: `[Portfolio] Pesan dari ${name}`,
      html: `
        <div style="font-family: monospace; background: #0a0a0a; color: #e4e4e7; padding: 32px; border-radius: 8px;">
          <h2 style="color: #fff; margin-bottom: 24px;">Pesan Baru dari Portfolio</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #27272a;">
              <td style="padding: 10px 0; color: #71717a; width: 100px;">Nama</td>
              <td style="padding: 10px 0; color: #e4e4e7;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #27272a;">
              <td style="padding: 10px 0; color: #71717a;">Email</td>
              <td style="padding: 10px 0; color: #e4e4e7;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #71717a; vertical-align: top;">Pesan</td>
              <td style="padding: 10px 0; color: #e4e4e7; line-height: 1.6;">${message.replace(/\n/g, "<br>")}</td>
            </tr>
          </table>
          <p style="margin-top: 32px; color: #3f3f46; font-size: 12px;">Dikirim dari portfolio alfitofebriansyah.dev</p>
        </div>
      `,
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Gagal mengirim pesan." }, { status: 500 });
  }
}