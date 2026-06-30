import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? 'vikna@scalingtheory.com'
const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL ?? 'Scaling Theory <onboarding@resend.dev>'

interface ContactBody {
  name?: string
  email?: string
  phone?: string
  content?: string
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function isValidPhone(value: string) {
  const digits = value.replace(/\D/g, '')
  return digits.length >= 8 && digits.length <= 15
}

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  if (request.method !== 'POST') {
    return response
      .status(405)
      .json({ ok: false, message: 'Method not allowed' })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return response.status(503).json({
      ok: false,
      message:
        'Contact form is not configured yet. Please email vikna@scalingtheory.com directly.',
    })
  }

  const body = (request.body ?? {}) as ContactBody
  const name = body.name?.trim() ?? ''
  const email = body.email?.trim() ?? ''
  const phone = body.phone?.trim() ?? ''
  const content = body.content?.trim() ?? ''

  if (!name || !email || !phone || !content) {
    return response.status(400).json({
      ok: false,
      message: 'Please fill in your name, email, phone number, and message.',
    })
  }

  if (!isValidEmail(email)) {
    return response.status(400).json({
      ok: false,
      message: 'Please enter a valid email address.',
    })
  }

  if (!isValidPhone(phone)) {
    return response.status(400).json({
      ok: false,
      message: 'Please enter a valid phone number.',
    })
  }

  if (
    name.length > 120 ||
    email.length > 254 ||
    phone.length > 24 ||
    content.length > 5000
  ) {
    return response.status(400).json({
      ok: false,
      message: 'Your message is too long. Please shorten it and try again.',
    })
  }

  const resend = new Resend(apiKey)
  const subject = `Scaling Theory — message from ${name}`

  const html = `
    <h2>New contact form message</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(content).replace(/\n/g, '<br />')}</p>
  `

  const text = [
    'New contact form message',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    '',
    'Message:',
    content,
  ].join('\n')

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email,
      subject,
      html,
      text,
    })

    if (error) {
      console.error('Resend error:', error)
      return response.status(502).json({
        ok: false,
        message:
          'Unable to send your message right now. Please email vikna@scalingtheory.com directly.',
      })
    }

    return response.status(200).json({
      ok: true,
      message: 'Thank you! Your message has been sent. We will be in touch soon.',
    })
  } catch (err) {
    console.error('Contact API error:', err)
    return response.status(500).json({
      ok: false,
      message:
        'Something went wrong. Please try again or email vikna@scalingtheory.com directly.',
    })
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}
