import { type ImgHTMLAttributes } from 'react'
import { cn } from '@/utils'

export interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  priority?: boolean
}

export default function LazyImage({
  priority = false,
  className,
  loading,
  decoding = 'async',
  fetchPriority,
  ...props
}: LazyImageProps) {
  return (
    <img
      {...props}
      className={cn(className)}
      loading={loading ?? (priority ? 'eager' : 'lazy')}
      decoding={decoding}
      fetchPriority={fetchPriority ?? (priority ? 'high' : undefined)}
    />
  )
}
