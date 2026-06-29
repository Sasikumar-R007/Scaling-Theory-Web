import { useEffect, useState } from 'react'

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3)
}

export function useCountUp(
  target: number,
  enabled: boolean,
  durationMs = 2200,
) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!enabled) return

    let frameId = 0
    const start = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1)
      const next = Math.round(easeOutCubic(progress) * target)
      setValue(next)

      if (progress < 1) {
        frameId = requestAnimationFrame(tick)
      }
    }

    frameId = requestAnimationFrame(tick)

    return () => cancelAnimationFrame(frameId)
  }, [durationMs, enabled, target])

  return value
}
