import { motion, type Variants } from 'framer-motion'
import {
  BarChart3,
  Eye,
  GitBranch,
  LayoutGrid,
  MessageCircle,
  Shield,
  Timer,
  type LucideIcon,
} from 'lucide-react'
import Section from '@/components/Section'
import StaffOsTrademark from '@/components/StaffOsTrademark'
import { cn } from '@/utils'
import {
  STAFFOS_SUITE_CARDS,
  STAFFOS_SUITE_FEATURES,
} from '@/sections/data/staffOsSuite'

const fadeUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  },
})

const FEATURE_ICONS: Record<string, LucideIcon> = {
  lifecycle: GitBranch,
  visibility: Eye,
  tat: Timer,
  analytics: BarChart3,
  security: Shield,
  communication: MessageCircle,
  centralized: LayoutGrid,
}

function SuiteFeatureGradientDefs() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true">
      <defs>
        <linearGradient id="suite-feature-gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7F97EE" />
          <stop offset="100%" stopColor="#5F4ECB" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function SuitePreviewFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="staffos-suite-preview absolute right-0 bottom-0 z-[2] w-[96%] max-w-none translate-x-[3%] translate-y-[5%] sm:w-[94%] sm:translate-x-[4%] md:w-[92%] lg:translate-x-[6%] lg:translate-y-[7%]">
      <div className="overflow-hidden rounded-tl-2xl bg-[#f6f2ea] shadow-[0_16px_44px_rgba(0,0,0,0.32)]">
        <div
          className="flex items-center gap-1.5 px-3 py-2 sm:px-3.5 sm:py-2.5"
          aria-hidden="true"
        >
          <span className="size-2 rounded-full bg-[#d4d0c8] sm:size-2.5" />
          <span className="size-2 rounded-full bg-[#d4d0c8] sm:size-2.5" />
          <span className="size-2 rounded-full bg-[#d4d0c8] sm:size-2.5" />
        </div>
        <img
          src={src}
          alt={alt}
          className="block w-full object-cover object-left-top"
          loading="lazy"
        />
      </div>
    </div>
  )
}

export default function StaffOsSuiteSection() {
  return (
    <Section
      id="staffos"
      spacing="none"
      fullHeight={false}
      className="bg-background py-12 sm:py-14 lg:py-16"
    >
      <SuiteFeatureGradientDefs />

      <motion.div
        className="mx-auto max-w-3xl text-center"
        variants={fadeUp(0)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
      >
        <p className="text-[10px] font-medium tracking-[0.22em] text-muted uppercase sm:text-[11px]">
          Powering Every Hire
        </p>
        <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:mt-4 sm:text-4xl lg:text-[2.5rem]">
          StaffOS
          <StaffOsTrademark className="text-[0.42em]" />
        </h2>
        <p className="mt-2 font-heading text-base font-bold text-foreground sm:text-lg lg:text-xl">
          The Complete Hiring Operating System Suite
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-xs leading-relaxed text-muted sm:mt-4 sm:text-sm">
          StaffOS brings everyone into one place for quick and quality hiring.
          Our clients get more than a tool alone — they get a complete ecosystem.
        </p>
      </motion.div>

      <motion.div
        className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-6"
        variants={fadeUp(0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {STAFFOS_SUITE_CARDS.map((card) => (
          <article
            key={card.id}
            className={cn(
              'staffos-suite-card relative min-h-[420px] overflow-hidden rounded-2xl sm:min-h-[400px] md:min-h-[380px] lg:min-h-[360px]',
              card.gradientClass,
            )}
          >
            <div className="relative z-10 max-w-[85%] px-4 pt-5 sm:max-w-[78%] sm:px-5 sm:pt-6">
              <h3 className="font-heading text-sm font-bold leading-snug text-foreground sm:text-base">
                {card.title}
              </h3>
              <p className="mt-2 text-[11px] leading-relaxed text-foreground/90 sm:text-xs">
                {card.description}
              </p>
            </div>

            <SuitePreviewFrame src={card.image} alt={card.imageAlt} />
          </article>
        ))}
      </motion.div>

      <motion.ul
        className="mx-auto mt-8 flex max-w-7xl flex-wrap items-center justify-center gap-x-5 gap-y-3 sm:mt-10 sm:gap-x-7 lg:gap-x-8"
        variants={fadeUp(0.14)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        role="list"
      >
        {STAFFOS_SUITE_FEATURES.map((feature) => {
          const Icon = FEATURE_ICONS[feature.id] ?? GitBranch

          return (
            <li
              key={feature.id}
              className="inline-flex items-center gap-2 text-[10px] text-muted sm:text-[11px]"
            >
              <Icon
                className="suite-feature-icon-gradient size-3.5 shrink-0 sm:size-4"
                strokeWidth={1.75}
                aria-hidden="true"
              />
              <span>{feature.label}</span>
            </li>
          )
        })}
      </motion.ul>
    </Section>
  )
}
