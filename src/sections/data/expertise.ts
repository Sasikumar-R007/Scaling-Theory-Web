import {
  BarChart3,
  Box,
  Code2,
  Crown,
  Rocket,
  type LucideIcon,
} from 'lucide-react'

export type ExpertiseCardData = {
  id: string
  title: string
  description: string
  icon: LucideIcon
  gridArea: 'top-left' | 'bottom-left' | 'center' | 'top-right' | 'bottom-right'
}

export const EXPERTISE_HIGHLIGHTS = [
  'Deep Domain Expertise',
  'Startup Mindset',
  'Network of 200,000+ Talent',
  'Consultative Approach',
  'Long-Term Partnerships',
] as const

export const EXPERTISE_CARDS: ExpertiseCardData[] = [
  {
    id: 'engineering',
    title: 'Engineering Hiring',
    description:
      'High-performing engineers across frontend, backend, fullstack, mobile, DevOps and more.',
    icon: Code2,
    gridArea: 'top-left',
  },
  {
    id: 'go-to-market',
    title: 'Go-to-Market Hiring',
    description:
      'Sales, marketing, customer success and business development roles.',
    icon: Rocket,
    gridArea: 'bottom-left',
  },
  {
    id: 'data-ai',
    title: 'Data & AI Hiring',
    description:
      'Data scientists, analysts, ML engineers and AI specialists.',
    icon: BarChart3,
    gridArea: 'center',
  },
  {
    id: 'leadership',
    title: 'Leadership Hiring',
    description:
      'CXOs, VPs and senior leaders who drive growth and transformation.',
    icon: Crown,
    gridArea: 'top-right',
  },
  {
    id: 'product',
    title: 'Product Hiring',
    description:
      'Product managers, designers, product marketers and growth experts.',
    icon: Box,
    gridArea: 'bottom-right',
  },
]
