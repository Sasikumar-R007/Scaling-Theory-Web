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

function SuitePreviewFrame({
  src,
  alt,
  chromeClass,
}: {
  src: string
  alt: string
  chromeClass: string
}) {
  return (
    <div className="staffos-suite-preview absolute right-0 bottom-0 z-[2] w-[98%] max-w-none translate-x-[4%] sm:w-[96%] sm:translate-x-[5%] md:w-[94%] lg:translate-x-[7%]">
      <div className="staffos-suite-preview-frame">
        <div
          className={cn('staffos-suite-preview-glass', chromeClass)}
          aria-hidden="true"
        >
          <div className="staffos-suite-window-chrome">
            <span className="staffos-suite-chrome-dot size-2 sm:size-2.5" />
            <span className="staffos-suite-chrome-dot size-2 sm:size-2.5" />
            <span className="staffos-suite-chrome-dot size-2 sm:size-2.5" />
          </div>
        </div>
        <div className="staffos-suite-preview-body">
          <img
            src={src}
            alt={alt}
            className="staffos-suite-preview-image"
            loading="lazy"
          />
        </div>
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
        <h2 className="mt-3 font-heading text-2xl font-bold text-foreground sm:mt-4 sm:text-4xl lg:text-[2.5rem]">
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
              'staffos-suite-card relative min-h-[430px] overflow-hidden rounded-2xl sm:min-h-[410px] md:min-h-[390px] lg:min-h-[370px]',
              card.gradientClass,
            )}
          >
            <div className="relative z-10 w-full px-4 pt-5 pb-[42%] sm:px-5 sm:pt-6 sm:pb-[40%]">
              <h3 className="w-full font-heading text-sm font-bold leading-snug text-foreground sm:text-base">
                {card.title}
              </h3>
              <p className="mt-2 w-full text-[11px] leading-relaxed text-foreground/90 sm:text-xs">
                {card.description}
              </p>
            </div>

            <SuitePreviewFrame
              src={card.image}
              alt={card.imageAlt}
              chromeClass={card.previewChromeClass}
            />
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
              className="inline-flex max-w-full items-center gap-2 text-center text-[10px] text-muted sm:text-[11px]"
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
