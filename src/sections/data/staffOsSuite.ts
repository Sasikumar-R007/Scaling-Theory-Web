import staffOsSuiteP1 from '@/assests/p1.png'
import staffOsSuiteP2 from '@/assests/p2.png'
import staffOsSuiteP3 from '@/assests/p3.png'

export interface StaffOsSuiteCard {
  id: string
  title: string
  description: string
  image: string
  imageAlt: string
  gradientClass: string
  previewChromeClass: string
}

export interface StaffOsSuiteFeature {
  id: string
  label: string
}

export const STAFFOS_SUITE_CARDS: StaffOsSuiteCard[] = [
  {
    id: 'recruitment-dashboard',
    title: 'Recruitment Excellence Dashboard',
    description:
      'End-to-end visibility into hiring speed, quality, and business impact across the recruitment team.',
    image: staffOsSuiteP1,
    imageAlt: 'Recruitment excellence dashboard with interview drop rate and quality metrics',
    gradientClass: 'staffos-suite-card-1',
    previewChromeClass: 'staffos-suite-chrome-1',
  },
  {
    id: 'talent-pipeline',
    title: 'Talent Pipeline Command Center',
    description:
      'Follow candidate movement through every recruitment stage and discover opportunities to accelerate hiring.',
    image: staffOsSuiteP2,
    imageAlt: 'Talent pipeline command center with candidate journey kanban board',
    gradientClass: 'staffos-suite-card-2',
    previewChromeClass: 'staffos-suite-chrome-2',
  },
  {
    id: 'jd-management',
    title: 'Recruitment Request & JD Management',
    description:
      'Manage intake roles, centralized assignments, and job requirements from a single recruitment workspace.',
    image: staffOsSuiteP3,
    imageAlt: 'Recruitment request and job description management library',
    gradientClass: 'staffos-suite-card-3',
    previewChromeClass: 'staffos-suite-chrome-3',
  },
]

export const STAFFOS_SUITE_FEATURES: StaffOsSuiteFeature[] = [
  { id: 'lifecycle', label: 'FREE ATS for complete hiring lifecycle' },
  { id: 'visibility', label: 'Complete visibility at every stage' },
  { id: 'tat', label: 'Dynamic TAT for every pipeline' },
  { id: 'analytics', label: 'Real-time reports & analytics' },
  { id: 'security', label: 'Enterprise-level security & compliance' },
  { id: 'communication', label: 'Seamless communication with candidates' },
  { id: 'centralized', label: 'Centralized hiring operation' },
]
