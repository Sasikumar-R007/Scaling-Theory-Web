import { motion, type Variants } from 'framer-motion'
import { CLIENT_COMPANIES } from '@/sections/data/clientCompanies'

const LABEL_COLOR = '#A1A1A1'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const marqueeTrack = [...CLIENT_COMPANIES, ...CLIENT_COMPANIES]

export default function ClientCompaniesSection() {
  return (
    <section
      id="clients"
      className="w-full border-y border-clients-band bg-black pt-8 pb-8 sm:pb-10"
    >
      <motion.div
        className="mx-auto flex w-full max-w-2xl flex-col items-center gap-6 px-8 sm:max-w-3xl sm:gap-7 sm:px-12 lg:max-w-4xl lg:px-16"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
      >
        <p
          className="text-center text-[10px] font-medium tracking-[0.22em] uppercase sm:text-[11px]"
          style={{ color: LABEL_COLOR }}
        >
          Trusted by fast-growing companies
        </p>

        <div
          className="relative w-full overflow-hidden"
          style={{
            maskImage:
              'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
          }}
        >
          <div className="animate-marquee flex w-max items-center gap-8 sm:gap-12">
            {marqueeTrack.map((company, index) => (
              <span
                key={`${company}-${index}`}
                className="font-heading shrink-0 text-sm font-semibold tracking-tight whitespace-nowrap text-foreground sm:text-base"
              >
                {company}
              </span>
            ))}
          </div>
        </div>

        <p
          className="text-center text-[10px] whitespace-nowrap sm:text-[11px]"
          style={{ color: LABEL_COLOR }}
        >
          We partner with startups and product companies across the globe to
          build exceptional teams.
        </p>
      </motion.div>
    </section>
  )
}
