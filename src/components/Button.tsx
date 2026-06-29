import {
  forwardRef,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type ReactNode,
} from 'react'
import { cn } from '@/utils'

const variants = {
  primary:
    'bg-cta text-primary-foreground hover:bg-cta-hover',
  secondary:
    'bg-surface-elevated text-foreground border border-border hover:bg-surface-overlay hover:border-border/80',
  ghost: 'text-muted hover:text-foreground hover:bg-surface-elevated/60',
  outline:
    'border border-border text-foreground hover:bg-surface-elevated hover:border-primary/40',
  link: 'text-primary hover:text-primary-hover underline-offset-4 hover:underline p-0 h-auto',
} as const

const sizes = {
  sm: 'h-9 px-4 text-sm gap-1.5',
  md: 'h-11 px-5 text-sm gap-2',
  lg: 'h-12 px-6 text-base gap-2',
  icon: 'h-10 w-10 p-0',
} as const

export type ButtonVariant = keyof typeof variants
export type ButtonSize = keyof typeof sizes

type BaseButtonProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  isLoading?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  className?: string
  children?: ReactNode
}

type ButtonAsButton = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined
  }

type ButtonAsAnchor = BaseButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
  }

export type ButtonProps = ButtonAsButton | ButtonAsAnchor

function getButtonClasses(
  variant: ButtonVariant,
  size: ButtonSize,
  className?: string,
) {
  return cn(
    'inline-flex items-center justify-center rounded-lg font-medium',
    'transition-all duration-200 ease-out',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
    'disabled:pointer-events-none disabled:opacity-50',
    variant !== 'link' && sizes[size],
    variants[variant],
    className,
  )
}

function ButtonContent({
  isLoading,
  leftIcon,
  rightIcon,
  children,
}: Pick<BaseButtonProps, 'isLoading' | 'leftIcon' | 'rightIcon' | 'children'>) {
  return (
    <>
      {isLoading ? (
        <span
          className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent"
          aria-hidden="true"
        />
      ) : (
        leftIcon
      )}
      {children}
      {!isLoading && rightIcon}
    </>
  )
}

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (props, ref) => {
    const {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      ...rest
    } = props

    const classes = getButtonClasses(variant, size, className)

    if ('href' in rest && rest.href) {
      const { href, ...anchorProps } = rest
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={classes}
          aria-busy={isLoading || undefined}
          {...anchorProps}
        >
          <ButtonContent
            isLoading={isLoading}
            leftIcon={leftIcon}
            rightIcon={rightIcon}
          >
            {children}
          </ButtonContent>
        </a>
      )
    }

    const { type = 'button', disabled, ...buttonProps } = rest as ButtonAsButton
    const isDisabled = disabled || isLoading

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={type}
        disabled={isDisabled}
        aria-busy={isLoading || undefined}
        className={classes}
        {...buttonProps}
      >
        <ButtonContent
          isLoading={isLoading}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
        >
          {children}
        </ButtonContent>
      </button>
    )
  },
)

Button.displayName = 'Button'

export default Button
