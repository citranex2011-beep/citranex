"use client"

import { useEffect, useRef, useState } from "react"

const NUMBER_PATTERN = /^(\D*)(\d+(?:\.\d+)?)(.*)$/
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

function format(n: number, prefix: string, suffix: string, pad: number) {
  const rounded = Math.round(n).toString().padStart(pad, "0")
  return `${prefix}${rounded}${suffix}`
}

export function CountUp({
  value,
  duration = 3000,
  animate = true,
}: {
  value: string
  duration?: number
  animate?: boolean
}) {
  const match = value.match(NUMBER_PATTERN)
  const target = match ? parseFloat(match[2]) : null
  const prefix = match ? match[1] : ""
  const suffix = match ? match[3] : ""
  const pad = match ? match[2].length : 0

  const ref = useRef<HTMLSpanElement>(null)
  const startedRef = useRef(false)
  const initial = target === null || !animate ? value : format(0, prefix, suffix, pad)
  const [display, setDisplay] = useState(initial)

  useEffect(() => {
    if (target === null || !animate) return
    const el = ref.current
    if (!el) return

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduced) {
      setDisplay(format(target, prefix, suffix, pad))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true
            observer.disconnect()
            const start = performance.now()
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / duration)
              setDisplay(format(target * easeOutCubic(t), prefix, suffix, pad))
              if (t < 1) requestAnimationFrame(tick)
              else setDisplay(format(target, prefix, suffix, pad))
            }
            requestAnimationFrame(tick)
          }
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, animate, prefix, suffix, pad, duration])

  if (target === null) {
    return <>{value}</>
  }

  return <span ref={ref}>{display}</span>
}
