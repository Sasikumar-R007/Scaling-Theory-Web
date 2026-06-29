import { Play } from 'lucide-react'
import { cn } from '@/utils'

const pillFrame =
  'inline-flex h-[34px] w-[128px] rounded-full bg-[#333333] p-[3px]'

const pillInner =
  'flex h-full w-full items-center justify-center rounded-full text-[11px] font-semibold leading-none'

export default function HeroCtaButtons({ className }: { className?: string }) {
  return (
    <div className={cn('flex flex-wrap items-center gap-2', className)}>
      <span className={pillFrame}>
        <a href="#contact" className={cn(pillInner, 'bg-cta text-foreground')}>
          Talk to Us
        </a>
      </span>

      <span className={pillFrame}>
        <a
          href="#demo"
          className={cn(pillInner, 'gap-1.5 bg-foreground text-background')}
        >
          Demo Video
          <span className="inline-flex size-[16px] shrink-0 items-center justify-center rounded-full border border-[#d0d0d0] bg-white">
            <Play
              className="ml-px size-[7px] fill-[#e53935] text-[#e53935]"
              aria-hidden="true"
            />
          </span>
        </a>
      </span>
    </div>
  )
}
