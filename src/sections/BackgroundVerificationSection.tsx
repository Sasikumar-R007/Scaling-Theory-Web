import { motion, type Variants } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'
import Section from '@/components/Section'
import {
  BGV_FEATURES,
  BGV_TRUST_AVATARS,
} from '@/sections/data/backgroundVerification'

const fadeUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  },
})

export default function BackgroundVerificationSection() {
  return (
    <Section
      id="staffos-verification"
      spacing="none"
      fullHeight={false}
      className="bg-background py-10 sm:py-12 lg:py-14"
    >
      <motion.div
        className="mx-auto max-w-6xl text-center"
        variants={fadeUp(0)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
      >
        <h2 className="font-heading text-xl font-bold leading-tight text-foreground sm:text-2xl lg:text-[1.75rem]">
          Free Background Verification for Every Hire
        </h2>
        <p className="mx-auto mt-3 max-w-3xl text-xs leading-relaxed text-muted sm:mt-4 sm:text-sm">
          We go beyond recruitment by providing free candidate background
          verification{' '}
          <span className="text-foreground">for every hire.</span>
        </p>
      </motion.div>

      <motion.ul
        className="mx-auto mt-8 grid max-w-6xl gap-3.5 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3"
        variants={fadeUp(0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {BGV_FEATURES.map((feature) => {
          const Icon = feature.icon

          return (
            <li
              key={feature.id}
              className="bgv-gradient-border bgv-feature-border"
            >
              <div className="bgv-feature-card flex items-center gap-3.5 px-4 py-4 sm:gap-4 sm:px-5 sm:py-4">
                <span className="bgv-gradient-border bgv-icon-border inline-flex shrink-0">
                  <span
                    className="bgv-icon-inner inline-flex size-9 items-center justify-center sm:size-10"
                    aria-hidden="true"
                  >
                    <Icon className="size-4 text-white sm:size-[18px]" />
                  </span>
                </span>
                <span className="text-left text-xs leading-snug text-foreground sm:text-sm">
                  {feature.label}
                </span>
              </div>
            </li>
          )
        })}
      </motion.ul>

      <motion.div
        className="bgv-cta-banner mx-auto mt-6 flex max-w-6xl flex-col overflow-hidden rounded-xl sm:mt-8 lg:flex-row"
        variants={fadeUp(0.14)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="bgv-cta-left flex max-w-xl items-start gap-3 px-5 py-5 sm:gap-3.5 sm:px-7 sm:py-6 lg:w-[48%] lg:shrink-0 lg:px-8">
          <ShieldCheck
            className="mt-0.5 size-5 shrink-0 text-[#2a2060] sm:size-6"
            aria-hidden="true"
          />
          <p className="text-left text-xs leading-relaxed text-[#2a2060] sm:text-sm">
            we do more then just recruitment. We offer free candidate background
            verification to help you hire with confidence.
          </p>
        </div>

        <div className="bgv-cta-right flex flex-1 items-center justify-between gap-4 px-5 py-5 sm:justify-end sm:gap-5 sm:px-7 sm:py-6 lg:px-8">
          <div className="flex items-center pl-1">
            {BGV_TRUST_AVATARS.map((avatar, index) => (
              <img
                key={avatar.id}
                src={avatar.src}
                alt={avatar.alt}
                className="relative size-9 rounded-full border-2 border-white object-cover sm:size-10"
                style={{ marginLeft: index === 0 ? 0 : -12 }}
              />
            ))}
            <span
              className="relative inline-flex size-9 items-center justify-center rounded-full border-2 border-white bg-white text-[11px] font-semibold text-[#2a2060] sm:size-10 sm:text-xs"
              style={{ marginLeft: -12 }}
              aria-hidden="true"
            >
              +2
            </span>
          </div>

          <p className="whitespace-nowrap text-right text-[11px] text-white sm:text-xs">
            Trusted by{' '}
            <span className="font-heading font-bold">100+ companies</span>
          </p>
        </div>
      </motion.div>
    </Section>
  )
}
