export interface ContactFormData {
  name: string
  email: string
  phone: string
  content: string
}

export interface ContactFormResult {
  ok: boolean
  message: string
}

const RECEIVER_EMAIL = 'vikna@scalingtheory.com'

/**
 * Submits the contact form via the Vercel API route (/api/contact),
 * which sends email through Resend to CONTACT_TO_EMAIL.
 */
export async function submitContactForm(
  data: ContactFormData,
): Promise<ContactFormResult> {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone,
        content: data.content,
      }),
    })

    const payload = (await response.json().catch(() => null)) as {
      ok?: boolean
      message?: string
    } | null

    if (!response.ok || !payload?.ok) {
      return {
        ok: false,
        message:
          payload?.message ??
          'Unable to send your message. Please try again or email vikna@scalingtheory.com directly.',
      }
    }

    return {
      ok: true,
      message:
        payload.message ??
        'Thank you! Your message has been sent. We will be in touch soon.',
    }
  } catch {
    return {
      ok: false,
      message:
        'Something went wrong. Please try again or email vikna@scalingtheory.com directly.',
    }
  }
}

export const CONTACT_EMAIL = RECEIVER_EMAIL
export const CONTACT_PHONE = '+91 9900328009'
