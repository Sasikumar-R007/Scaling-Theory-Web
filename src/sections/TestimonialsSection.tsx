import { motion, type Variants } from 'framer-motion'
import Section from '@/components/Section'
import TestimonialCardStack from '@/sections/TestimonialCardStack'

const fadeUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  },
})

export default function TestimonialsSection() {
  return (
    <Section
      id="testimonials"
      spacing="none"
      fullHeight={false}
      className="bg-background py-8 sm:py-10"
    >
      <motion.div
        className="testimonials-panel relative overflow-hidden rounded-3xl px-5 py-6 sm:px-7 sm:py-8 lg:px-10 lg:py-9"
        variants={fadeUp(0)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <p
          className="pointer-events-none absolute bottom-1 left-3 font-sans text-[3.5rem] font-bold leading-none text-[#0a54ff]/10 select-none sm:text-[5rem] lg:left-6 lg:text-[5.5rem]"
          aria-hidden="true"
        >
          Feedback
        </p>

        <div className="relative z-10 grid items-start gap-6 lg:grid-cols-2 lg:gap-10">
          <motion.div
            className="flex flex-col gap-3 sm:gap-4"
            variants={fadeUp(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="font-heading text-xl font-bold leading-tight text-foreground sm:text-2xl lg:text-3xl">
              Trusted by Our Clients
            </h2>
            <p className="max-w-md text-xs leading-relaxed text-foreground/90 sm:text-sm">
              Discover how organizations have successfully scaled their hiring
              with ScalingTheory and StaffOS. Our clients share their
              experiences, outcomes, and the impact of our partnership.
            </p>
          </motion.div>

          <motion.div
            className="w-full"
            variants={fadeUp(0.16)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <TestimonialCardStack />
          </motion.div>
        </div>
      </motion.div>
    </Section>
  )
}
