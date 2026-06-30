import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useContactModal } from '@/context/ContactModalContext'
import ContactForm from '@/sections/ContactForm'

export default function ContactModal() {
  const { isOpen, closeContactModal } = useContactModal()

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="presentation"
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            aria-label="Close contact form"
            onClick={closeContactModal}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            className="relative z-10 w-full max-w-lg"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <div className="contact-form-card rounded-2xl p-5 sm:p-6">
              <div className="relative z-10 mb-4 flex items-start justify-between gap-4">
                <div>
                  <h2
                    id="contact-modal-title"
                    className="font-heading text-lg font-bold text-foreground sm:text-xl"
                  >
                    Let&apos;s Talk
                  </h2>
                  <p className="mt-1 text-xs text-muted sm:text-sm">
                    Share your hiring needs and we&apos;ll get back to you shortly.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={closeContactModal}
                  className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-white/10"
                  aria-label="Close"
                >
                  <X className="size-4" />
                </button>
              </div>

              <ContactForm bare onSuccess={closeContactModal} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
