import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  STAFFOS_PREVIEW_INTERVAL_MS,
  STAFFOS_PREVIEW_SLIDES,
} from '@/sections/data/staffosPreviewSlides'
import { STAFFOS_URL } from '@/utils'

const textVariants = {
  enter: { opacity: 0, y: 10 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
}

const imageVariants = {
  enter: { opacity: 0, y: 28 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 28 },
}

const slideTransition = { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }

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
    <article className="bg-gradient-staffos-card grid h-[180px] w-full max-w-[520px] grid-cols-[minmax(0,47%)_minmax(0,53%)] grid-rows-[auto_minmax(0,1fr)] overflow-hidden rounded-xl sm:h-[200px] sm:max-w-[480px]">
      <div className="col-span-2 shrink-0 overflow-hidden px-5 pt-4 pb-2 sm:px-6 sm:pt-5">
        <AnimatePresence mode="wait">
          <motion.h3
            key={`${slide.id}-title`}
            className="w-full text-xs font-semibold leading-snug text-foreground sm:text-[13px]"
            variants={textVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={slideTransition}
          >
            {slide.title}
          </motion.h3>
        </AnimatePresence>
      </div>

      <div className="flex min-h-0 flex-col justify-between px-5 pb-4 pt-1.5 sm:px-6 sm:pb-5 sm:pt-2">
        <AnimatePresence mode="wait">
          <motion.p
            key={`${slide.id}-desc`}
            className="text-[10px] leading-relaxed text-foreground/75 sm:text-[11px]"
            variants={textVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={slideTransition}
          >
            {slide.description}
          </motion.p>
        </AnimatePresence>

        <a
          href={STAFFOS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex w-fit text-[10px] font-semibold text-foreground underline underline-offset-2 sm:mt-3 sm:text-[11px]"
        >
          View StaffOS
        </a>
      </div>

      <div className="relative min-h-0 overflow-hidden rounded-tl-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            className="absolute inset-0"
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={slideTransition}
          >
            <img
              src={slide.image}
              alt={slide.imageAlt}
              className="block h-full w-full rounded-tl-xl object-cover object-left-top"
              draggable={false}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </article>
  )
}
