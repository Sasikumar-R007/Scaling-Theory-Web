import { motion, type Variants } from 'framer-motion'
import { Check } from 'lucide-react'
import Section from '@/components/Section'
import StaffOsTrademark from '@/components/StaffOsTrademark'
import {
  STAFFOS_BENEFIT_ITEMS,
  TRADITIONAL_HIRING_ITEMS,
} from '@/sections/data/whyStaffOsComparison'

const fadeUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  },
})

const headingTextClass =
  'font-heading text-base font-bold leading-snug sm:text-lg lg:text-xl'

export default function WhyStaffOsSection() {
  return (
    <Section
      id="why-us"
      spacing="none"
      fullHeight={false}
      className="bg-background py-12 sm:py-14 lg:py-16"
    >
      <motion.div
        className="mx-auto flex max-w-2xl flex-col items-center gap-2 text-center sm:gap-2.5"
        variants={fadeUp(0)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <h2 className={`${headingTextClass} text-foreground`}>
          Why Companies Move to StaffOS
          <StaffOsTrademark className="text-[0.38em]" />
        </h2>
        <p className={`text-gradient-why-staffos-tagline ${headingTextClass}`}>
          Better decisions. Lower cost. Faster hires.
        </p>
      </motion.div>

      <motion.div
        className="relative mx-auto mt-8 max-w-2xl sm:mt-10 lg:mt-12"
        variants={fadeUp(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex flex-col-reverse gap-4 lg:block lg:min-h-[380px]">
          <div
            className="why-traditional-card relative z-10 rounded-2xl px-5 py-6 sm:px-6 sm:py-7 lg:absolute lg:top-8 lg:left-0 lg:w-[50%]"
            aria-labelledby="traditional-hiring-heading"
          >
            <h3
              id="traditional-hiring-heading"
              className="font-heading text-base font-bold text-foreground sm:text-lg"
            >
              Traditional Hiring
            </h3>
            <ul className="mt-4 space-y-4.5 sm:space-y-5">
              {TRADITIONAL_HIRING_ITEMS.map((item) => (
                <li
                  key={item}
                  className="text-xs leading-snug text-foreground/75 sm:text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="why-staffos-card relative z-20 rounded-2xl px-5 py-6 shadow-2xl sm:px-6 sm:py-7 lg:absolute lg:top-0 lg:right-0 lg:w-[54%]"
            aria-labelledby="staffos-comparison-heading"
          >
            <h3
              id="staffos-comparison-heading"
              className="font-heading text-base font-bold text-foreground sm:text-lg"
            >
              Scaling Theory + StaffOS
              <StaffOsTrademark className="text-[0.5em] text-white" />
            </h3>
            <ul className="mt-4 space-y-4.5 sm:space-y-5">
              {STAFFOS_BENEFIT_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span
                    className="mt-0.5 inline-flex size-[18px] shrink-0 items-center justify-center rounded-[4px] bg-[#22c55e] sm:size-5"
                    aria-hidden="true"
                  >
                    <Check
                      className="size-2.5 stroke-[3] text-white sm:size-3"
                      strokeWidth={3}
                    />
                  </span>
                  <span className="text-xs leading-snug text-foreground sm:text-sm">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}
