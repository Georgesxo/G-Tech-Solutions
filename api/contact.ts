import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
// Add this helper function at the top of the file, above the handler:
const sanitize = (str: string) =>
  str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')

// Then wrap every user input in the HTML template:
// Instead of ${name} use ${sanitize(name)}
// Instead of ${email} use ${sanitize(email)}
// Instead of ${subject} use ${sanitize(subject)}
// Instead of ${message} use ${sanitize(message)}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' })
  }

  const { name, email, subject, message } = req.body

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ ok: false, error: 'All fields are required.' })
  }

  try {
 const { data, error } = await resend.emails.send({
      from: 'GTech Contact Form <contact@gtechfreelancers.com>',
      to: ['gtechfreelancers@gmail.com'],
      replyTo: email,
      subject: `New Enquiry: ${subject} — from ${name}`,
      html: `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
  </head>
  <body style="margin:0;padding:0;background:#f4f4f5;font-family:'Segoe UI',Arial,sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 20px;">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0"
            style="background:#ffffff;border-radius:12px;overflow:hidden;
                   box-shadow:0 4px 24px rgba(0,0,0,0.08);max-width:600px;width:100%;">

            <!-- Header -->
            <tr>
              <td style="background:#0a0a0a;padding:32px 40px;">
                <h1 style="margin:0;color:#00d4aa;font-size:22px;font-weight:700;
                           letter-spacing:-0.5px;">
                  GTech Freelancers
                </h1>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:36px 40px;">

                <!-- Sender details -->
                <table width="100%" cellpadding="0" cellspacing="0"
                  style="background:#f8f9fa;border-radius:8px;
                         border:1px solid #eee;margin-bottom:28px;">
                  <tr>
                    <td style="padding:16px 20px;border-bottom:1px solid #eee;">
                      <span style="font-size:11px;font-weight:600;color:#999;
                                   text-transform:uppercase;letter-spacing:0.5px;">
                        From
                      </span>
                      <p style="margin:4px 0 0;color:#111;font-size:15px;font-weight:600;">
                        ${sanitize(name)}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:16px 20px;border-bottom:1px solid #eee;">
                      <span style="font-size:11px;font-weight:600;color:#999;
                                   text-transform:uppercase;letter-spacing:0.5px;">
                        Email
                      </span>
                      <p style="margin:4px 0 0;">
                        <a href="mailto:${sanitize(email)}"
                           style="color:#00d4aa;font-size:15px;text-decoration:none;">
                          ${sanitize(email)}
                        </a>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:16px 20px;">
                      <span style="font-size:11px;font-weight:600;color:#999;
                                   text-transform:uppercase;letter-spacing:0.5px;">
                        Subject
                      </span>
                      <p style="margin:4px 0 0;color:#111;font-size:15px;">
                        ${sanitize(subject)}
                      </p>
                    </td>
                  </tr>
                </table>

                <!-- Message -->
                <h3 style="margin:0 0 12px;font-size:13px;font-weight:600;
                           color:#999;text-transform:uppercase;letter-spacing:0.5px;">
                  Message
                </h3>
                <div style="background:#f8f9fa;border-left:3px solid #00d4aa;
                            border-radius:0 8px 8px 0;padding:20px 24px;">
                  <p style="margin:0;color:#333;font-size:15px;line-height:1.7;
                            white-space:pre-wrap;">${sanitize(message)}</p>
                </div>

                <!-- Reply CTA -->
                <div style="margin-top:32px;text-align:center;">
                  <a href="mailto:${sanitize(email)}?subject=Re: ${sanitize(subject)}"
                     style="display:inline-block;background:#00d4aa;color:#000;
                            font-weight:700;font-size:14px;padding:14px 32px;
                            border-radius:8px;text-decoration:none;
                            letter-spacing:0.3px;">
                    ↩ Reply to ${sanitize(name)}
                  </a>
                </div>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background:#f8f9fa;padding:20px 40px;
                         border-top:1px solid #eee;text-align:center;">
                <p style="margin:0;color:#aaa;font-size:12px;">
                  Sent via contact form at
                  <a href="https://gtechfreelancers.com"
                     style="color:#00d4aa;text-decoration:none;">
                    gtechfreelancers.com
                  </a>
                </p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>
`,
  })
 if (error) {
  console.error('[Resend error]', error)
  return res.status(500).json({ ok: false, error: error.message })
}

return res.json({ ok: true, id: data?.id })

  } catch (err) {
    console.error('[Resend error]', err)
    return res.status(500).json({ ok: false, error: 'Failed to send message. Please try again.' })
  }
}