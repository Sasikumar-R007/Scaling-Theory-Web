import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { motion, type TargetAndTransition } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import LazyImage from '@/components/LazyImage'
import {
  TESTIMONIALS,
  TESTIMONIAL_AUTO_INTERVAL_MS,
  type Testimonial,
} from '@/sections/data/testimonials'

const VISIBLE_COUNT = 6
const SPRING = { type: 'spring' as const, stiffness: 280, damping: 28, mass: 0.9 }
const EXIT_EASE = [0.32, 0.72, 0, 1] as const

type StackSlot = {
  scale: number
  y: number
  x: number
  rotate: number
  opacity: number
  zIndex: number
}

function buildStackSlots(count: number): StackSlot[] {
  const frontYOffset = 32
  const layerStep = 8

  return Array.from({ length: count }, (_, index) => ({
    scale: 1,
    y: frontYOffset - index * layerStep,
    x: 0,
    rotate: 0,
    opacity: index === 0 ? 1 : Math.max(0.42, 0.88 - index * 0.12),
    zIndex: 70 - index * 10,
  }))
}

const EXIT_NEXT: TargetAndTransition = {
  scale: 0.98,
  y: 20,
  x: 160,
  rotate: 8,
  opacity: 0,
  zIndex: 80,
}

const EXIT_PREV: TargetAndTransition = {
  scale: 0.98,
  y: 20,
  x: -160,
  rotate: -8,
  opacity: 0,
  zIndex: 80,
}

function getInitials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function NavButton({
  direction,
  onClick,
  disabled,
}: {
  direction: 'prev' | 'next'
  onClick: () => void
  disabled: boolean
}) {
  const Icon = direction === 'prev' ? ChevronLeft : ChevronRight
  const label =
    direction === 'prev' ? 'Previous testimonial' : 'Next testimonial'

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="inline-flex size-8 items-center justify-center rounded-full border border-white/70 bg-white/55 text-[#2a4db8] shadow-sm backdrop-blur-sm transition-all hover:scale-105 hover:border-[#2a4db8]/50 hover:bg-white/80 disabled:opacity-50 sm:size-9"
      aria-label={label}
    >
      <Icon className="size-3.5 sm:size-4" />
    </button>
  )
}

function TestimonialCardContent({
  testimonial,
  interactive,
  isFront,
  onPrev,
  onNext,
  controlsDisabled,
}: {
  testimonial: Testimonial
  interactive?: boolean
  isFront?: boolean
  onPrev?: () => void
  onNext?: () => void
  controlsDisabled?: boolean
}) {
  return (
    <article
      className={`relative flex h-[184px] w-full flex-col gap-3 rounded-xl px-4 pt-4 pb-6 sm:h-[196px] sm:gap-3.5 sm:px-5 sm:pt-5 sm:pb-7 ${
        isFront ? 'testimonial-card-solid' : 'testimonial-card-glass'
      } ${interactive ? '' : 'pointer-events-none'}`}
    >
      <blockquote className="relative z-1 text-left text-sm leading-relaxed font-medium text-slate-800 sm:text-[15px]">
        {testimonial.quote}
      </blockquote>

      <footer className="relative z-1 flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          {testimonial.avatar ? (
            <LazyImage
              src={testimonial.avatar}
              alt=""
              className="size-9 shrink-0 rounded-full object-cover sm:size-10"
            />
          ) : (
            <span
              className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#e8eeff]/90 text-xs font-bold text-[#2a4db8] sm:size-10"
              aria-hidden="true"
            >
              {getInitials(testimonial.name)}
            </span>
          )}
          <cite className="min-w-0 not-italic">
            <p className="truncate text-sm font-bold text-[#1a1a1a]">
              {testimonial.name}
            </p>
            <p className="truncate text-xs text-[#2a4db8]">
              {testimonial.role}, {testimonial.company}
            </p>
          </cite>
        </div>

        {interactive && onPrev && onNext && (
          <div className="flex shrink-0 items-center gap-1.5">
            <NavButton
              direction="prev"
              onClick={onPrev}
              disabled={!!controlsDisabled}
            />
            <NavButton
              direction="next"
              onClick={onNext}
              disabled={!!controlsDisabled}
            />
          </div>
        )}
      </footer>
    </article>
  )
}

export default function TestimonialCardStack() {
  const count = TESTIMONIALS.length
  const stackDepth = Math.min(VISIBLE_COUNT, count)
  const stackSlots = useMemo(() => buildStackSlots(stackDepth), [stackDepth])

  const [order, setOrder] = useState(() =>
    TESTIMONIALS.map((_, index) => index),
  )
  const [phase, setPhase] = useState<'idle' | 'next' | 'prev'>('idle')
  const [exitingIndex, setExitingIndex] = useState<number | null>(null)
  const isAnimating = useRef(false)

  const finishShuffle = useCallback((direction: 'next' | 'prev') => {
    setOrder((prev) => {
      if (direction === 'next') {
        return [...prev.slice(1), prev[0]]
      }
      return [prev[prev.length - 1], ...prev.slice(0, -1)]
    })
    setExitingIndex(null)
    setPhase('idle')
    isAnimating.current = false
  }, [])

  const shuffle = useCallback(
    (direction: 'next' | 'prev') => {
      if (isAnimating.current || count < 2) return
      isAnimating.current = true
      setPhase(direction)
      setExitingIndex(order[0])

      window.setTimeout(() => finishShuffle(direction), 520)
    },
    [count, finishShuffle, order],
  )

  const goNext = useCallback(() => shuffle('next'), [shuffle])
  const goPrev = useCallback(() => shuffle('prev'), [shuffle])

  useEffect(() => {
    const timer = window.setInterval(goNext, TESTIMONIAL_AUTO_INTERVAL_MS)
    return () => window.clearInterval(timer)
  }, [goNext])

  const visibleStack = order.slice(0, stackDepth)
  const topPeek = stackDepth > 1 ? (stackDepth - 1) * 8 : 0

  const getCardMotion = (
    testimonialIndex: number,
    stackPosition: number,
  ): StackSlot => {
    const isExiting =
      phase !== 'idle' && exitingIndex === testimonialIndex && stackPosition === 0

    if (isExiting) {
      return phase === 'next' ? (EXIT_NEXT as StackSlot) : (EXIT_PREV as StackSlot)
    }

    if (phase === 'next' && stackPosition > 0) {
      return stackSlots[stackPosition - 1]
    }

    if (phase === 'prev') {
      if (stackPosition === stackDepth - 1) return stackSlots[0]
      if (stackPosition > 0) return stackSlots[stackDepth - stackPosition - 1]
    }

    return stackSlots[stackPosition] ?? stackSlots[stackSlots.length - 1]
  }

  return (
    <div
      className="relative mx-auto w-full max-w-md perspective-distant"
      style={{ minHeight: 248 + topPeek }}
    >
      <div
        className="relative"
        style={{
          height: 216 + topPeek,
          paddingTop: topPeek,
        }}
      >
        {visibleStack.map((testimonialIndex, stackPosition) => {
          const testimonial = TESTIMONIALS[testimonialIndex]
          const motionTarget = getCardMotion(testimonialIndex, stackPosition)
          const isFront = stackPosition === 0 && phase === 'idle'

          return (
            <motion.div
              key={testimonial.id}
              className="absolute inset-x-0 origin-top"
              initial={false}
              animate={motionTarget}
              transition={
                phase !== 'idle' && stackPosition === 0
                  ? { duration: 0.52, ease: EXIT_EASE }
                  : SPRING
              }
              style={{
                top: topPeek,
                zIndex: motionTarget.zIndex,
                transformStyle: 'preserve-3d',
              }}
            >
              <TestimonialCardContent
                testimonial={testimonial}
                interactive={isFront}
                isFront={stackPosition === 0}
                onPrev={goPrev}
                onNext={goNext}
                controlsDisabled={phase !== 'idle'}
              />
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
