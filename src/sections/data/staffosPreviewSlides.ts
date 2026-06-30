import staffosPreview01 from '@/assests/hero/prv01.png'
import staffosPreview02 from '@/assests/hero/prv02.jpeg'
import staffosPreview03 from '@/assests/hero/prv03.jpg'

export interface StaffOsPreviewSlide {
  id: string
  image: string
  imageAlt: string
  title: string
  description: string
}

export const STAFFOS_PREVIEW_SLIDES: StaffOsPreviewSlide[] = [
  {
    id: 'slide-01',
    image: staffosPreview01,
    imageAlt: 'Client-specific dashboard with real-time hiring insights',
    title: 'Client-specific dashboards with real-time hiring insights',
    description:
      'Track jobs, candidates, interviews, and hiring progress in one dashboard.',
  },
  {
    id: 'slide-02',
    image: staffosPreview02,
    imageAlt: 'StaffOS Nudge intelligence for modern hiring',
    title: 'Adaptive Nudge Intelligence for Modern Hiring',
    description:
      'From intelligent nudges to automated escalations, StaffOS Nudge keeps every hiring conversation moving forward.',
  },
  {
    id: 'slide-03',
    image: staffosPreview03,
    imageAlt: 'StaffOS Nudge automated hiring escalations',
    title: 'Adaptive Nudge Intelligence for Modern Hiring',
    description:
      'From intelligent nudges to automated escalations, StaffOS Nudge keeps every hiring conversation moving forward.',
  },
]

export const STAFFOS_PREVIEW_INTERVAL_MS = 5000
