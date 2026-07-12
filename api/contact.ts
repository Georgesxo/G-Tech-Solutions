import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const sanitize = (str: string) =>
  str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')

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
      subject: `${subject}`,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width" />
</head>
<body style="margin:0;padding:0;font-family:Arial,sans-serif;font-size:14px;color:#202124;line-height:1.6;background:#ffffff;">
  <div style="padding:8px 0;max-width:600px;">

    <p style="margin:0 0 18px;">Hi GTech Team,</p>

    <p style="margin:0 0 18px;">
      You have received a new enquiry from your website contact form.
      Here are the details:
    </p>

    <p style="margin:0 0 6px;">
      <strong>Name:</strong>&nbsp;&nbsp;${sanitize(name)}
    </p>

    <p style="margin:0 0 6px;">
      <strong>Email:</strong>&nbsp;&nbsp;
      <a href="mailto:${sanitize(email)}" style="color:#1a73e8;text-decoration:none;">
        ${sanitize(email)}
      </a>
    </p>

    <p style="margin:0 0 18px;">
      <strong>Subject:</strong>&nbsp;&nbsp;${sanitize(subject)}
    </p>

    <p style="margin:0 0 8px;"><strong>Message:</strong></p>

    <p style="margin:0 0 18px;padding-left:12px;border-left:3px solid #dadce0;white-space:pre-wrap;color:#444;">
      ${sanitize(message)}
    </p>

    <p style="margin:0 0 18px;">
      To reply to ${sanitize(name)}, click the <strong>Reply</strong> button —
      it will go directly to
      <a href="mailto:${sanitize(email)}" style="color:#1a73e8;text-decoration:none;">
        ${sanitize(email)}
      </a>.
    </p>

    <p style="margin:0;">
      Warm regards,<br />
      GTech Freelancers Website
    </p>

  </div>
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