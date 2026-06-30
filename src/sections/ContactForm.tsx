import { useState, type FormEvent } from 'react'
import { cn } from '@/utils'
import { submitContactForm } from '@/utils/contactForm'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [content, setContent] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle',
  )
  const [feedback, setFeedback] = useState('')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('loading')
    setFeedback('')

    const result = await submitContactForm({ name, email, phone, content })

    if (result.ok) {
      setStatus('success')
      setFeedback(result.message)
      setName('')
      setEmail('')
      setPhone('')
      setContent('')
      return
    }

    setStatus('error')
    setFeedback(result.message)
  }

  return (
    <div className="contact-form-card relative rounded-2xl p-5 sm:p-6 lg:p-7">
      <form
        className="relative z-10 flex flex-col gap-4 sm:gap-5"
        onSubmit={handleSubmit}
        noValidate
      >
        <div>
          <label htmlFor="contact-name" className="contact-label">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="contact-input"
            disabled={status === 'loading'}
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="contact-label">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="contact-input"
            disabled={status === 'loading'}
          />
        </div>

        <div>
          <label htmlFor="contact-phone" className="contact-label">
            Phone Number
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            placeholder="+91 9900328009"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="contact-input"
            disabled={status === 'loading'}
          />
        </div>

        <div>
          <label htmlFor="contact-content" className="contact-label">
            Content
          </label>
          <textarea
            id="contact-content"
            name="content"
            required
            rows={5}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className={cn('contact-input min-h-[120px] resize-none')}
            disabled={status === 'loading'}
          />
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className={cn(
            'contact-submit transition-opacity disabled:cursor-not-allowed disabled:opacity-60',
          )}
        >
          {status === 'loading' ? 'Sending…' : 'Send To Us'}
        </button>

        {feedback && (
          <p
            role="status"
            aria-live="polite"
            className={cn(
              'text-center text-xs sm:text-sm',
              status === 'success' ? 'text-foreground' : 'text-muted',
            )}
          >
            {feedback}
          </p>
        )}
      </form>
    </div>
  )
}
