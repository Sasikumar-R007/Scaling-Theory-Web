import { forwardRef, type HTMLAttributes, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/utils'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'glass' | 'outline'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  hover?: boolean
  asMotion?: boolean
  children: ReactNode
}

const variantStyles = {
  default: 'bg-surface-elevated border border-border-subtle shadow-card',
  elevated: 'bg-surface-overlay border border-border shadow-card',
  glass: 'surface-glass border border-border-subtle',
  outline: 'bg-transparent border border-border',
} as const

const paddingStyles = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
} as const

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant = 'default',
      padding = 'md',
      hover = false,
      asMotion = false,
      children,
      ...props
    },
    ref,
  ) => {
    const classes = cn(
      'rounded-xl',
      variantStyles[variant],
      paddingStyles[padding],
      hover &&
        'transition-all duration-300 hover:border-primary/30 hover:shadow-glow hover:-translate-y-0.5',
      className,
    )

    if (asMotion) {
      return (
        <motion.div
          ref={ref}
          className={classes}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          {children}
        </motion.div>
      )
    }

    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    )
  },
)

Card.displayName = 'Card'

export default Card
