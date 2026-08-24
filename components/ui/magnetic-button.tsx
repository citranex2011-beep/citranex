"use client"

import { useEffect, useRef, type ElementType, type ReactNode } from "react"

export function MagneticButton({
  as: Tag = "button",
  className,
  children,
  href,
  target,
  rel,
  ...props
}: {
  as?: ElementType
  className?: string
  children?: ReactNode
  href?: string
  target?: string
  rel?: string
} & React.HTMLAttributes<HTMLElement>) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia("(pointer: coarse)").matches) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      el.style.transform = `translate(${x * 0.18}px, ${y * 0.25}px)`
    }
    const onLeave = () => {
      el.style.transform = ""
    }
    el.addEventListener("mousemove", onMove)
    el.addEventListener("mouseleave", onLeave)
    return () => {
      el.removeEventListener("mousemove", onMove)
      el.removeEventListener("mouseleave", onLeave)
      el.style.transform = ""
    }
  }, [])

  return (
    <Tag ref={ref} className={className} {...(href !== undefined ? { href } : {})} target={target} rel={rel} {...props}>
      {children}
    </Tag>
  )
}
