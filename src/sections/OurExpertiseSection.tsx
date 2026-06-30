import { motion, type Variants } from 'framer-motion'
import { Check } from 'lucide-react'
import expertiseVisual from '@/assests/exp1.jpg'
import LazyImage from '@/components/LazyImage'
import { cn } from '@/utils'
import {
  EXPERTISE_CARDS,
  EXPERTISE_HIGHLIGHTS,
  type ExpertiseCardData,
} from '@/sections/data/expertise'

const LABEL_COLOR = '#A1A1A1'
const CHECK_COLOR = '#5F4ECB'

const fadeUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  },
})

const DISPLAY_ORDER: ExpertiseCardData['gridArea'][] = [
  'top-left',
  'top-right',
  'center',
  'bottom-left',
  'bottom-right',
]

function getCard(area: ExpertiseCardData['gridArea']) {
  return EXPERTISE_CARDS.find((item) => item.gridArea === area)!
}

function ExpertiseCard({
  card,
  featured = false,
  className,
}: {
  card: ExpertiseCardData
  featured?: boolean
  className?: string
}) {
  const Icon = card.icon

  return (
    <article
      className={cn(
        'expertise-card flex flex-col overflow-hidden rounded-3xl bg-black',
        featured ? 'pt-4 px-4 pb-0 sm:pt-5 sm:px-5' : 'p-4 sm:p-5',
        className,
      )}
    >
      <Icon
        className="size-5 text-brand-yellow sm:size-[22px]"
        strokeWidth={1.75}
        aria-hidden="true"
      />
      <h3 className="text-gradient-footer mt-3 text-base font-bold leading-snug sm:mt-3.5 sm:text-lg">
        {card.title}
      </h3>
      <p className="mt-1.5 text-xs leading-relaxed text-muted sm:text-sm">
        {card.description}
      </p>

      {featured && (
        <div className="relative mt-auto w-[calc(100%+2rem)] -mx-4 sm:w-[calc(100%+2.5rem)] sm:-mx-5">
          <LazyImage
            src={expertiseVisual}
            alt="Data and AI hiring workflow with selective sourcing and fast replay insights"
            className="block h-auto w-full"
          />
        </div>
      )}
    </article>
  )
}

function ExpertiseSideColumn({
  topArea,
  bottomArea,
}: {
  topArea: ExpertiseCardData['gridArea']
  bottomArea: ExpertiseCardData['gridArea']
}) {
  return (
    <div className="flex min-h-0 flex-col gap-4 lg:gap-5">
      <ExpertiseCard card={getCard(topArea)} className="min-h-0 flex-1" />
      <ExpertiseCard card={getCard(bottomArea)} className="min-h-0 flex-1" />
    </div>
  )
}

export default function OurExpertiseSection() {
  return (
    <section
      id="expertise"
      className="w-full bg-background py-12 sm:py-14 lg:py-16"
    >
      <motion.div
        className="mx-auto flex w-full max-w-[88rem] flex-col items-center gap-8 px-6 sm:gap-10 sm:px-10 lg:px-14 xl:px-16"
        variants={fadeUp(0)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="flex max-w-3xl flex-col items-center gap-3 text-center sm:gap-4">
          <p
            className="text-[10px] font-medium tracking-[0.22em] uppercase sm:text-[11px]"
            style={{ color: LABEL_COLOR }}
          >
            Our Expertise
          </p>

          <h2 className="text-gradient-expertise-heading px-1 text-lg font-bold leading-tight tracking-tight sm:text-2xl lg:text-[1.75rem] xl:text-[2rem]">
            Talent Advisory & Hiring Expertise Across Functions
          </h2>
        </div>

        <div className="hidden w-full items-stretch gap-4 md:grid md:grid-cols-3 lg:gap-5">
          <ExpertiseSideColumn topArea="top-left" bottomArea="bottom-left" />
          <ExpertiseCard card={getCard('center')} featured className="h-full" />
          <ExpertiseSideColumn topArea="top-right" bottomArea="bottom-right" />
        </div>

        <div className="grid w-full grid-cols-1 gap-4 md:hidden">
          {DISPLAY_ORDER.map((area) => (
            <ExpertiseCard
              key={area}
              card={getCard(area)}
              featured={area === 'center'}
            />
          ))}
        </div>

        <ul className="flex w-full flex-wrap items-center justify-center gap-x-5 gap-y-3 sm:gap-x-7 lg:gap-x-8">
          {EXPERTISE_HIGHLIGHTS.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-center text-[10px] sm:text-[11px]"
              style={{ color: LABEL_COLOR }}
            >
              <Check
                className="size-3.5 shrink-0 sm:size-4"
                style={{ color: CHECK_COLOR }}
                strokeWidth={2.5}
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  )
}
