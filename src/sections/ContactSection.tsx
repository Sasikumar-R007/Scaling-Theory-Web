import { motion, type Variants } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'
import Section from '@/components/Section'
import ContactForm from '@/sections/ContactForm'
import { CONTACT_EMAIL, CONTACT_PHONE } from '@/utils/contactForm'

const fadeUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  },
})

export default function ContactSection() {
  return (
    <Section
      id="contact"
      spacing="none"
      fullHeight={false}
      className="bg-background py-14 sm:py-16 lg:py-20"
    >
      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
        <motion.div
          className="flex flex-col gap-5 sm:gap-6"
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-gradient-lets-talk text-[11px] font-semibold tracking-[0.22em] uppercase sm:text-xs">
            Let&apos;s Talk
          </p>

          <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            Discuss Your Hiring Needs With Us
          </h2>

          <p className="max-w-md text-xs leading-relaxed text-muted sm:text-sm">
            Need help hiring exceptional talent or want to see StaffOS in action?
            Share your requirements and our team will reach out with a tailored
            hiring solution.
          </p>

          <div className="mt-2 flex flex-col gap-5">
            <div>
              <div className="mb-1.5 flex items-center gap-2 text-muted">
                <Mail className="size-3.5" aria-hidden="true" />
                <span className="text-[11px] sm:text-xs">Email</span>
              </div>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-sm text-foreground transition-opacity hover:opacity-80 sm:text-base"
              >
                {CONTACT_EMAIL}
              </a>
            </div>

            <div>
              <div className="mb-1.5 flex items-center gap-2 text-muted">
                <Phone className="size-3.5" aria-hidden="true" />
                <span className="text-[11px] sm:text-xs">Phone Number</span>
              </div>
              <a
                href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`}
                className="text-sm text-foreground transition-opacity hover:opacity-80 sm:text-base"
              >
                {CONTACT_PHONE}
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </Section>
  )
}
