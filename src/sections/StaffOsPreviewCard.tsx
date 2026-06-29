import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  STAFFOS_PREVIEW_INTERVAL_MS,
  STAFFOS_PREVIEW_SLIDES,
} from '@/sections/data/staffosPreviewSlides'
import { STAFFOS_URL } from '@/utils'

const textVariants = {
  enter: { opacity: 0, y: -18 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
}

const imageVariants = {
  enter: { opacity: 0, y: -22 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 22 },
}

const slideTransition = { duration: 0.55, ease: 'easeInOut' as const }

export default function StaffOsPreviewCard() {
  const [activeIndex, setActiveIndex] = useState(0)
  const slide = STAFFOS_PREVIEW_SLIDES[activeIndex]

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % STAFFOS_PREVIEW_SLIDES.length)
    }, STAFFOS_PREVIEW_INTERVAL_MS)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <article
      className="bg-gradient-staffos-card relative h-[196px] w-full max-w-[520px] overflow-hidden rounded-xl sm:h-[218px] sm:max-w-[480px]"
    >
      <div className="relative z-10 flex h-full w-[46%] flex-col justify-between p-5 sm:w-[44%] sm:p-6">
        <div className="min-h-[72px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              className="space-y-1.5"
              variants={textVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={slideTransition}
            >
              <h3 className="text-[11px] font-semibold leading-snug text-foreground sm:text-xs">
                {slide.title}
              </h3>
              <p className="text-[10px] leading-relaxed text-foreground/75 sm:text-[11px]">
                {slide.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <a
          href={STAFFOS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit text-[10px] font-semibold text-foreground underline underline-offset-2 sm:text-[11px]"
        >
          View StaffOS
        </a>
      </div>

      <div className="pointer-events-none absolute right-0 bottom-0 h-[80%] w-[64%] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={slide.id}
            src={slide.image}
            alt={slide.imageAlt}
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={slideTransition}
            className="absolute right-0 bottom-0 h-full w-full rounded-tl-xl object-cover object-left-top shadow-xl"
          />
        </AnimatePresence>
      </div>
    </article>
  )
}
