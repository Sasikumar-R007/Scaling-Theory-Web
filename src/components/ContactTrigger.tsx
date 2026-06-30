import { type ButtonHTMLAttributes, type ReactNode } from 'react'
import { useContactModal } from '@/context/ContactModalContext'
import { cn } from '@/utils'

export interface ContactTriggerProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export default function ContactTrigger({
  children,
  className,
  onClick,
  type = 'button',
  ...props
}: ContactTriggerProps) {
  const { openContactModal } = useContactModal()

  return (
    <button
      type={type}
      className={cn('cursor-pointer', className)}
      {...props}
      onClick={(event) => {
        openContactModal()
        onClick?.(event)
      }}
    >
      {children}
    </button>
  )
}