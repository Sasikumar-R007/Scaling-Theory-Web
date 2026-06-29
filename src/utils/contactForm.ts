export interface ContactFormData {
  name: string
  email: string
  content: string
}

export interface ContactFormResult {
  ok: boolean
  message: string
}

const RECEIVER_EMAIL = 'scalingtheory@gmail.com'

/**
 * Submits the contact form via Formspree (configured at deploy time).
 * Set VITE_FORMSPREE_FORM_ID in your environment — see .env.example.
 */
export async function submitContactForm(
  data: ContactFormData,
): Promise<ContactFormResult> {
  const formId = import.meta.env.VITE_FORMSPREE_FORM_ID

  if (!formId) {
    return {
      ok: false,
      message:
        'Contact form is not configured yet. Please email us directly at scalingtheory@gmail.com.',
    }
  }

  try {
    const response = await fetch(`https://formspree.io/f/${formId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        message: data.content,
        _replyto: data.email,
        _subject: `Scaling Theory — message from ${data.name}`,
      }),
    })

    const payload = (await response.json().catch(() => null)) as {
      error?: string
      errors?: { message: string }[]
    } | null

    if (!response.ok) {
      const detail =
        payload?.error ??
        payload?.errors?.[0]?.message ??
        'Unable to send your message. Please try again.'
      return { ok: false, message: detail }
    }

    return {
      ok: true,
      message: 'Thank you! Your message has been sent. We will be in touch soon.',
    }
  } catch {
    return {
      ok: false,
      message:
        'Something went wrong. Please try again or email scalingtheory@gmail.com directly.',
    }
  }
}

export const CONTACT_EMAIL = RECEIVER_EMAIL
export const CONTACT_PHONE = '+91 9900328009'
