import {
  Award,
  Clock,
  RefreshCcw,
  Star,
  Users,
  Waypoints,
  type LucideIcon,
} from 'lucide-react'

export interface ImpactStat {
  id: string
  value: number
  suffix: string
  label: string
  icon: LucideIcon
  formatWithCommas?: boolean
}

export const IMPACT_STATS: ImpactStat[] = [
  {
    id: 'hires',
    value: 700,
    suffix: '+',
    label: 'Successful hires',
    icon: Award,
  },
  {
    id: 'talent-network',
    value: 200000,
    suffix: '+',
    label: 'Talent Network',
    icon: Waypoints,
    formatWithCommas: true,
  },
  {
    id: 'repeat-partnerships',
    value: 90,
    suffix: '%',
    label: 'Repeat Client Partnerships',
    icon: RefreshCcw,
  },
  {
    id: 'candidates',
    value: 2500,
    suffix: '',
    label: 'candidates',
    icon: Clock,
  },
  {
    id: 'hires-yearly',
    value: 100,
    suffix: '+',
    label: 'Hires Every Year',
    icon: Users,
  },
  {
    id: 'expertise',
    value: 5,
    suffix: '+',
    label: 'Years of Expertise',
    icon: Star,
  },
]
