import { MainLayout } from '@/layouts'
import {
  BackgroundVerificationSection,
  ClientCompaniesSection,
  ContactSection,
  HeroSection,
  ImpactStatsSection,
  OurExpertiseSection,
  StaffOsSuiteSection,
  TestimonialsSection,
  WhyStaffOsSection,
} from '@/sections'

export default function HomePage() {
  return (
    <MainLayout>
      <HeroSection />
      <ClientCompaniesSection />
      <OurExpertiseSection />
      <ImpactStatsSection />
      <StaffOsSuiteSection />
      <BackgroundVerificationSection />
      <WhyStaffOsSection />
      <TestimonialsSection />
      <ContactSection />
    </MainLayout>
  )
}
