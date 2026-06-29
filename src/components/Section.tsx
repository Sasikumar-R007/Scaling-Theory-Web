import { type ElementType, type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '@/utils'

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType
  id?: string
  contained?: boolean
  spacing?: 'sm' | 'md' | 'lg' | 'none'
  /** Occupies at least one full viewport height */
  fullHeight?: boolean
  header?: ReactNode
  children: ReactNode
}

const spacingMap = {
  none: '',
  sm: 'py-12 md:py-16',
  md: 'py-section md:py-20',
  lg: 'py-section-lg md:py-28',
} as const

export default function Section({
  as: Component = 'section',
  id,
  contained = true,
  spacing = 'md',
  fullHeight = true,
  header,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <Component
      id={id}
      className={cn(
        'relative w-full',
        fullHeight && 'min-h-screen',
        spacingMap[spacing],
        className,
      )}
      {...props}
    >
      {contained ? (
        <div className="mx-auto w-full max-w-7xl px-3 sm:px-4">
          {header && <div className="mb-10 md:mb-14">{header}</div>}
          {children}
        </div>
      ) : (
        <>
          {header && (
            <div className="mx-auto mb-10 w-full max-w-7xl px-3 sm:px-4 md:mb-14">
              {header}
            </div>
          )}
          {children}
        </>
      )}
    </Component>
  )
}
