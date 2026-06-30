import { motion, type Variants } from 'framer-motion'
import heroDashboard from '@/assests/hero/hero-dashboard.png'
import Section from '@/components/Section'
import HeroCtaButtons from '@/sections/HeroCtaButtons'
import StaffOsPreviewCard from '@/sections/StaffOsPreviewCard'

const fadeUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  },
})

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.7, ease: 'easeOut', staggerChildren: 0.08 },
  },
}

export default function HeroSection() {
  return (
    <Section
      id="overview"
      spacing="none"
      fullHeight={false}
      contained={false}
      className="relative overflow-hidden bg-background pt-2 pb-0 sm:pt-3 lg:pt-4"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl px-3 sm:px-4">
        <motion.div
          className="flex w-full min-h-0 flex-col lg:min-h-[calc(100vh-6.5rem)]"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
        <div className="relative z-10 grid flex-1 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-stretch lg:gap-4 xl:gap-8">
          <div className="flex flex-col justify-center gap-3.5 sm:gap-4 lg:-mt-8 lg:justify-start lg:pt-25 xl:-mt-12">
            <motion.div className="space-y-0.5" variants={fadeUp(0)}>
              <h1 className="font-heading text-[1.5rem] font-bold leading-[1.12] tracking-tight sm:text-[1.9rem] lg:text-[2.2rem] xl:text-[2.4rem]">
                Fast Staffing. Full Visibility.
              </h1>
              <p className="font-heading text-[1.5rem] font-bold leading-[1.12] tracking-tight text-brand-yellow sm:text-[1.9rem] lg:text-[2.2rem] xl:text-[2.4rem]">
                Pay Only for Results.
              </p>
            </motion.div>

            <motion.h2
              className="font-heading text-xs font-bold leading-tight sm:text-sm lg:text-base lg:whitespace-nowrap"
              variants={fadeUp(0.08)}
            >
              <span className="text-gradient-hero-tagline">
                No ATS Fees. No BGV Costs. Only Successful Hires.
              </span>
            </motion.h2>

            <motion.p
              className="max-w-lg text-xs leading-relaxed sm:text-[13px]"
              variants={fadeUp(0.16)}
            >
              <span className="text-muted">
                Powered by expert recruiters and StaffOS.{' '}
              </span>
              <span className="text-foreground">
                Track every candidate and hiring stage in real time with free
                ATS access
              </span>
              <span className="text-muted">
                {' '}
                and complimentary background verification.
              </span>
            </motion.p>

            <motion.div variants={fadeUp(0.24)}>
              <HeroCtaButtons />
            </motion.div>

            <motion.div variants={fadeUp(0.32)} className="mt-1 w-full lg:mt-2">
              <StaffOsPreviewCard />
            </motion.div>
          </div>

          <div className="hidden lg:block" aria-hidden="true" />
        </div>

        <motion.div
          className="relative mx-auto mt-6 w-full max-w-[min(100%,440px)] sm:mt-8 lg:pointer-events-none lg:absolute lg:right-0 lg:bottom-0 lg:mt-0 lg:max-w-[56%] xl:max-w-[54%]"
          variants={fadeUp(0.12)}
        >
          <div className="relative w-full lg:min-h-[420px] xl:min-h-[480px]">
            <div
              className="hero-image-glow pointer-events-none absolute -right-6 -bottom-4 z-0 h-[115%] w-[120%] opacity-95 blur-2xl"
              aria-hidden="true"
            />

            <img
              src={heroDashboard}
              alt="StaffOS dashboard showing candidate pipeline, interview metrics, and team overview"
              className="relative z-10 h-full w-full object-contain object-bottom object-center lg:scale-[1.08] lg:object-right-bottom xl:scale-[1.12]"
              width={800}
              height={620}
              fetchPriority="high"
            />
          </div>
        </motion.div>
        </motion.div>
      </div>
    </Section>
  )
}
