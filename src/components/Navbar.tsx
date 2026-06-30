import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import logo from '@/assests/logos/logo.jpeg'
import ContactTrigger from '@/components/ContactTrigger'
import LazyImage from '@/components/LazyImage'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { cn } from '@/utils'
import StaffOsTrademark from './StaffOsTrademark'
export interface NavLink {
  label: string
  href: string
  trademark?: boolean
}

export interface NavbarProps {
  links?: NavLink[]
  activeHref?: string
  ctaLabel?: string
  className?: string
}

const defaultLinks: NavLink[] = [
  { label: 'Overview', href: '#overview' },
  { label: 'StaffOS', href: '#staffos', trademark: true },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
]

function NavItem({
  link,
  isActive,
  onNavigate,
  className,
}: {
  link: NavLink
  isActive: boolean
  onNavigate?: () => void
  className?: string
}) {
  return (
    <a
      href={link.href}
      onClick={onNavigate}
      className={cn(
        'group relative inline-flex items-center py-1 text-[13px] font-medium transition-colors duration-200',
        !link.trademark &&
          (isActive ? 'text-foreground' : 'text-muted hover:text-foreground/90'),
        className,
      )}
      aria-current={isActive ? 'page' : undefined}
    >
      <span className="inline-flex items-start">
        {link.trademark ? (
          <span className="inline-flex items-start">
            <span className="text-gradient-staffos">{link.label}</span>
            <StaffOsTrademark className="text-[0.55em] text-foreground" />
          </span>
        ) : (
          link.label
        )}
      </span>
      {isActive && (
        <motion.span
          layoutId="navbar-active-indicator"
          className="absolute -bottom-1 left-0 h-px w-full bg-foreground"
          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
        />
      )}
    </a>
  )
}

export default function Navbar({
  links = defaultLinks,
  activeHref = '#overview',
  ctaLabel = 'Talk to Us',
  className,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const sectionHrefs = useMemo(() => links.map((link) => link.href), [links])
  const scrollActiveHref = useScrollSpy(sectionHrefs, activeHref)
  const [currentHref, setCurrentHref] = useState(activeHref)

  useEffect(() => {
    setCurrentHref(scrollActiveHref)
  }, [scrollActiveHref])

  useEffect(() => {
    const syncHash = () => {
      const hash = window.location.hash
      if (hash && links.some((link) => link.href === hash)) {
        setCurrentHref(hash)
      }
    }

    syncHash()
    window.addEventListener('hashchange', syncHash)
    return () => window.removeEventListener('hashchange', syncHash)
  }, [links])
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleNavigate = (href: string) => {
    setCurrentHref(href)
    setIsOpen(false)
  }

  const ctaClasses = cn(
    'relative z-10 shrink-0 rounded-[4px] bg-cta px-5 py-2',
    'text-[11px] font-semibold text-foreground',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
  )

  return (
    <>
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b border-border-subtle bg-background/95 py-3 backdrop-blur-md sm:py-3.5',
        className,
      )}
    >
      <nav
        className="relative mx-auto flex min-h-12 max-w-[1280px] items-center justify-between px-8 sm:px-12 lg:px-16 xl:px-20"
        aria-label="Main navigation"
      >
        <a
          href="/"
          className="relative z-10 flex shrink-0 items-center gap-2 transition-opacity hover:opacity-90"
        >
          <LazyImage
            src={logo}
            alt="Scaling Theory"
            className="h-8 w-auto shrink-0 object-contain"
            width={32}
            height={32}
            priority
          />
          <span className="text-sm font-medium tracking-tight text-brand-wordmark">
            ScalingTheory
          </span>
        </a>

        <ul
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 lg:flex xl:gap-8"
          role="list"
        >
          {links.map((link) => (
            <li key={link.href}>
              <NavItem
                link={link}
                isActive={currentHref === link.href}
                onNavigate={() => handleNavigate(link.href)}
              />
            </li>
          ))}
        </ul>

        <ContactTrigger
          className={cn(ctaClasses, 'hidden lg:inline-flex lg:items-center lg:justify-center')}
        >
          {ctaLabel}
        </ContactTrigger>

        <button
          type="button"
          className="relative z-10 inline-flex size-10 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-surface-elevated lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            className="border-t border-border-subtle bg-background lg:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <ul className="flex flex-col gap-1 px-8 py-4 sm:px-12" role="list">
              {links.map((link) => (
                <li key={link.href}>
                  <NavItem
                    link={link}
                    isActive={currentHref === link.href}
                    onNavigate={() => handleNavigate(link.href)}
                    className="w-full px-1 py-2.5"
                  />
                </li>
              ))}
            </ul>

            <div className="border-t border-border-subtle px-8 py-4 sm:px-12">
              <ContactTrigger
                onClick={() => setIsOpen(false)}
                className={cn(ctaClasses, 'flex w-full items-center justify-center py-2.5')}
              >
                {ctaLabel}
              </ContactTrigger>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
    <div className="h-[60px] shrink-0 sm:h-[64px]" aria-hidden="true" />
    </>
  )
}
