/**
 * StaffOS preview carousel slides.
 *
 * Image naming convention (place in src/assests/products/):
 *   staffos-preview-01.png
 *   staffos-preview-02.png
 *   staffos-preview-03.png
 *
 * Currently using pr1.png for all slides until additional assets are added.
 */
import staffosPreview01 from '@/assests/products/pr1.png'

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
    imageAlt: 'StaffOS kanban dashboard with candidate pipeline columns',
    title: 'Client-specific dashboards with real-time hiring insights',
    description:
      'Track jobs, candidates, interviews, and hiring progress in one dashboard.',
  },
  {
    id: 'slide-02',
    image: staffosPreview01,
    imageAlt: 'StaffOS hiring pipeline overview',
    title: 'End-to-end visibility across every hiring stage',
    description:
      'Monitor recruiter activity, interview progress, and closure rates in real time.',
  },
  {
    id: 'slide-03',
    image: staffosPreview01,
    imageAlt: 'StaffOS candidate tracking board',
    title: 'One dashboard for your entire recruitment workflow',
    description:
      'From sourcing to offer — manage candidates, teams, and metrics without switching tools.',
  },
]

export const STAFFOS_PREVIEW_INTERVAL_MS = 5000
