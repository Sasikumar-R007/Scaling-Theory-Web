import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  type LucideIcon,
} from 'lucide-react'
import logo from '@/assests/logos/logo.jpeg'
import LazyImage from '@/components/LazyImage'
import StaffOsTrademark from '@/components/StaffOsTrademark'
import { useContactModal } from '@/context/ContactModalContext'
import { cn, CONTACT_EMAIL, STAFFOS_URL } from '@/utils'

const MUTED = '#a1a1a1'

const recruitmentLinks = [
  { label: 'Engineering Hiring', href: '#engineering-hiring' },
  { label: 'Product Hiring', href: '#product-hiring' },
  { label: 'Data & AI Hiring', href: '#data-ai-hiring' },
  { label: 'Leadership Hiring', href: '#leadership-hiring' },
  { label: 'Go-to-Market Hiring', href: '#gtm-hiring' },
] as const

const staffOsLinks = [
  { label: 'Features', href: '#staffos' },
  { label: 'Benefits', href: '#why-us' },
  { label: 'Request Demo', href: '#contact', openContact: true },
  { label: 'Client Access', href: '#contact', openContact: true },
  { label: 'Visit StaffOS Website', href: STAFFOS_URL },
] as const

const companyLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Careers', href: '#careers' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact Us', href: '#contact', openContact: true },
] as const

type SocialLink =
  | { label: string; href: string; icon: LucideIcon }
  | { label: string; icon: LucideIcon }

const socialLinks: SocialLink[] = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/scaling-theory',
    icon: Linkedin,
  },
  { label: 'Twitter', href: 'https://x.com/ScalingTheory', icon: Twitter },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/scalingtheory',
    icon: Facebook,
  },
  { label: 'Instagram', icon: Instagram },
]

const FOOTER_PHONE = '+91 9900328009'
const FOOTER_ADDRESS =
  'Scaling Theory Technologies Private Limited, C-35, II Floor, Bharathiyar Street, Viswas Nagar Karumandapam, Trichy, TN, India, Pincode – 620001'

function FooterGradientDefs() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true">
      <defs>
        <linearGradient
          id="footer-accent-gradient"
          x1="0"
          y1="0"
          x2="0"
          y2="1"
        >
          <stop offset="0%" stopColor="#7F97EE" />
          <stop offset="100%" stopColor="#5F4ECB" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function FooterGradientIcon({
  icon: Icon,
  className,
}: {
  icon: LucideIcon
  className?: string
}) {
  return (
    <Icon
      className={cn('footer-icon-gradient size-4 shrink-0', className)}
      aria-hidden="true"
    />
  )
}

function FooterColumn({
  title,
  links,
  titleTrademark = false,
  titleHref,
}: {
  title: string
  links: readonly { label: string; href: string; openContact?: boolean }[]
  titleTrademark?: boolean
  titleHref?: string
}) {
  const { openContactModal } = useContactModal()

  const titleInner = (
    <>
      <span className="text-gradient-footer">{title}</span>
      {titleTrademark && (
        <StaffOsTrademark className="text-[0.5em] text-foreground" />
      )}
    </>
  )

  return (
    <div>
      {titleHref ? (
        <a
          href={titleHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-start text-sm font-semibold transition-opacity hover:opacity-85"
        >
          {titleInner}
        </a>
      ) : (
        <h3 className="inline-flex items-start text-sm font-semibold">
          {titleInner}
        </h3>
      )}
      <ul className="mt-4 space-y-2.5" role="list">
        {links.map((link) => (
          <li key={link.label}>
            {link.openContact ? (
              <button
                type="button"
                onClick={openContactModal}
                className="cursor-pointer text-left text-xs transition-opacity hover:opacity-80 sm:text-sm"
                style={{ color: MUTED }}
              >
                {link.label}
              </button>
            ) : (
              <a
                href={link.href}
                className="text-xs transition-opacity hover:opacity-80 sm:text-sm"
                style={{ color: MUTED }}
                {...(link.href.startsWith('http')
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
              >
                {link.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export interface FooterProps {
  className?: string
}

export default function Footer({ className }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={cn('relative bg-black', className)}>
      <FooterGradientDefs />

      <div className="mx-auto max-w-7xl px-3 py-12 sm:px-4 sm:py-14 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="/" className="inline-flex items-center gap-2.5">
              <LazyImage
                src={logo}
                alt="Scaling Theory"
                className="h-8 w-auto shrink-0 object-contain"
                width={32}
                height={32}
                priority
              />
              <span className="text-gradient-footer text-base font-semibold sm:text-lg">
                ScalingTheory
              </span>
            </a>

            <p
              className="mt-4 max-w-xs text-xs leading-relaxed sm:text-sm"
              style={{ color: MUTED }}
            >
              We help startups and product companies build exceptional teams
              with speed, accuracy and transparency.
            </p>

            <ul
              className="mt-5 flex items-center gap-2.5"
              role="list"
              aria-label="Social links"
            >
              {socialLinks.map((item) => {
                const Icon = item.icon
                const iconClass =
                  'inline-flex size-8 items-center justify-center rounded-lg border border-[#333333]'

                if ('href' in item) {
                  return (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(iconClass, 'transition-opacity hover:opacity-80')}
                        style={{ color: MUTED }}
                        aria-label={item.label}
                      >
                        <Icon className="size-3.5" aria-hidden="true" />
                      </a>
                    </li>
                  )
                }

                return (
                  <li key={item.label}>
                    <span
                      className={cn(iconClass, 'opacity-60')}
                      style={{ color: MUTED }}
                      aria-label={`${item.label} (coming soon)`}
                    >
                      <Icon className="size-3.5" aria-hidden="true" />
                    </span>
                  </li>
                )
              })}
            </ul>
          </div>

          <FooterColumn title="Recruitment Services" links={recruitmentLinks} />
          <FooterColumn
            title="StaffOS"
            links={staffOsLinks}
            titleTrademark
            titleHref={STAFFOS_URL}
          />
          <FooterColumn title="Company" links={companyLinks} />
        </div>

        <div className="mt-10 border-t border-[#1f1f1f] pt-8">
          <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:flex-wrap sm:items-center lg:gap-8">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 text-xs sm:text-sm"
              style={{ color: MUTED }}
            >
              <FooterGradientIcon icon={Mail} />
              {CONTACT_EMAIL}
            </a>

            <a
              href="tel:+919900328009"
              className="inline-flex items-center gap-2 text-xs sm:text-sm"
              style={{ color: MUTED }}
            >
              <FooterGradientIcon icon={Phone} />
              {FOOTER_PHONE}
            </a>

            <span
              className="inline-flex max-w-md items-start gap-2 text-xs leading-relaxed sm:text-sm"
              style={{ color: MUTED }}
            >
              <FooterGradientIcon icon={MapPin} className="mt-0.5" />
              {FOOTER_ADDRESS}
            </span>
          </div>
        </div>

        <div className="mt-8 border-t border-[#1f1f1f] pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="text-[11px] sm:text-xs" style={{ color: MUTED }}>
              &copy; {currentYear} ScalingTheory. All rights reserved.
            </p>

            <p className="text-gradient-footer text-[11px] font-semibold tracking-[0.18em] uppercase sm:text-xs">
              Sync · Hire · Repeat
            </p>

            <div className="flex items-center gap-4">
              <a
                href="#privacy"
                className="text-[11px] transition-opacity hover:opacity-80 sm:text-xs"
                style={{ color: MUTED }}
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-[11px] transition-opacity hover:opacity-80 sm:text-xs"
                style={{ color: MUTED }}
              >
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
