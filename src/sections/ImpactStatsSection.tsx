import { useRef } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'
import { useCountUp } from '@/hooks/useCountUp'
import { IMPACT_STATS, type ImpactStat } from '@/sections/data/impactStats'

const LABEL_COLOR = '#A1A1A1'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

function formatCount(value: number, stat: ImpactStat) {
  if (stat.formatWithCommas) {
    return value.toLocaleString('en-US')
  }
  return String(value)
}

function ImpactStatItem({ stat, index }: { stat: ImpactStat; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.45 })
  const count = useCountUp(stat.value, isInView, 2200 + index * 120)
  const Icon = stat.icon

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center gap-2 text-center sm:gap-2.5"
      initial={{ opacity: 0, y: 12 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: 'easeOut' }}
    >
      <Icon
        className="size-4 sm:size-[18px]"
        style={{ color: LABEL_COLOR }}
        strokeWidth={1.75}
        aria-hidden="true"
      />
      <p className="font-heading text-2xl font-bold leading-none text-foreground tabular-nums sm:text-[1.75rem] lg:text-3xl">
        {formatCount(count, stat)}
        {stat.suffix}
      </p>
      <p
        className="whitespace-nowrap text-[10px] leading-none sm:text-[11px]"
        style={{ color: LABEL_COLOR }}
      >
        {stat.label}
      </p>
    </motion.div>
  )
}

export default function ImpactStatsSection() {
  return (
    <section
      id="impact"
      className="w-full border-y border-clients-band bg-black py-10 sm:py-12"
    >
      <motion.div
        className="mx-auto flex w-full max-w-[88rem] flex-col items-center gap-8 px-6 sm:gap-10 sm:px-10 lg:px-14 xl:px-16"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="text-center text-[10px] font-medium tracking-[0.22em] text-foreground uppercase sm:text-[11px]">
          Our Impact in Numbers
        </p>

        <div className="grid w-full grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-3 sm:gap-x-5 sm:gap-y-10 lg:grid-cols-6 lg:gap-x-4 xl:gap-x-8">
          {IMPACT_STATS.map((stat, index) => (
            <ImpactStatItem key={stat.id} stat={stat} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
