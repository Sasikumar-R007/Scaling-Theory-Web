import {
  Briefcase,
  FileCheck,
  GraduationCap,
  IdCard,
  Scale,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react'
import avatarOne from '@/assests/bgv/avatar-01.jpg'
import avatarTwo from '@/assests/bgv/avatar-02.jpeg'
import avatarThree from '@/assests/bgv/avatar-03.jpg'

export interface BgvFeature {
  id: string
  label: string
  icon: LucideIcon
}

export interface BgvTrustAvatar {
  id: string
  alt: string
  src: string
}

export const BGV_FEATURES: BgvFeature[] = [
  { id: 'kyc', label: 'KYC Check - PAN & Aadhar', icon: IdCard },
  {
    id: 'police',
    label: 'Police Verification for Criminal Records',
    icon: ShieldCheck,
  },
  {
    id: 'employment',
    label: 'Employment Verification (Last 3 Employers)',
    icon: Briefcase,
  },
  { id: 'court', label: 'Court Record Check', icon: Scale },
  {
    id: 'education',
    label: 'Educations Verification (UG & PG Degrees)',
    icon: GraduationCap,
  },
  { id: 'documents', label: 'Basic document authentication', icon: FileCheck },
]

export const BGV_TRUST_AVATARS: BgvTrustAvatar[] = [
  {
    id: 'avatar-1',
    alt: 'Hiring manager portrait',
    src: avatarOne,
  },
  {
    id: 'avatar-2',
    alt: 'HR leader portrait',
    src: avatarTwo,
  },
  {
    id: 'avatar-3',
    alt: 'Recruiter portrait',
    src: avatarThree,
  },
]
