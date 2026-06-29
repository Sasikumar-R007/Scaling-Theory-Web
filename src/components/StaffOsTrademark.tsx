import { cn } from '@/utils'

export default function StaffOsTrademark({
  className,
}: {
  className?: string
}) {
  return (
    <sup
      className={cn(
        'align-super ml-px text-[0.5em] font-normal leading-none',
        className,
      )}
      aria-label="trademark"
    >
      ™
    </sup>
  )
}
