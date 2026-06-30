import avatarOne from '@/assests/bgv/avatar-01.jpg'
import avatarTwo from '@/assests/bgv/avatar-02.jpeg'
import avatarThree from '@/assests/bgv/avatar-03.jpg'

export interface Testimonial {
  id: string
  quote: string
  name: string
  role: string
  company: string
  avatar?: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'mubarak-begum',
    quote:
      'ScalingTheory transformed our hiring process. With StaffOS, we gained complete visibility into every stage — from sourcing to offer. The team delivered exceptional talent faster than we ever thought possible.',
    name: 'Mubarak Begum',
    role: 'HR Head',
    company: 'Kristal.ai',
    avatar: avatarOne,
  },
  {
    id: 'sample-two',
    quote:
      'The partnership with ScalingTheory helped us scale our engineering team without the overhead of traditional recruiting. StaffOS dashboards gave our leadership real-time hiring insights.',
    name: 'Priya Sharma',
    role: 'VP of Talent',
    company: 'Pixis',
    avatar: avatarTwo,
  },
  {
    id: 'sample-three',
    quote:
      'We reduced time-to-hire significantly while maintaining quality. The recruiters understood our culture and delivered candidates who were genuinely the right fit.',
    name: 'Arjun Mehta',
    role: 'Founder',
    company: 'Whatfix',
    avatar: avatarThree,
  },
  {
    id: 'sample-four',
    quote:
      'StaffOS gave us a single source of truth for recruiting. Our hiring managers finally had clarity on pipeline health without chasing spreadsheets or email threads.',
    name: 'Neha Kapoor',
    role: 'Director of HR',
    company: 'Razorpay',
    avatar: avatarTwo,
  },
  {
    id: 'sample-five',
    quote:
      'ScalingTheory felt like an extension of our team. They moved quickly, communicated clearly, and helped us close critical roles ahead of our product launch.',
    name: 'Rahul Verma',
    role: 'CTO',
    company: 'CleverTap',
    avatar: avatarOne,
  },
  {
    id: 'sample-six',
    quote:
      'From sourcing to onboarding, the process was seamless. The quality of candidates and the transparency through StaffOS exceeded our expectations.',
    name: 'Ananya Iyer',
    role: 'People Operations Lead',
    company: 'Freshworks',
    avatar: avatarThree,
  },
]

export const TESTIMONIAL_AUTO_INTERVAL_MS = 5000
