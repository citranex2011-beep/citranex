"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

export function ScrollIndicator() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY < 80)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 bottom-6 flex justify-center transition-opacity duration-500 motion-reduce:hidden ${
        visible ? "opacity-70 animate-bounce-slow" : "opacity-0"
      }`}
    >
      <ChevronDown className="h-6 w-6 text-white/70 drop-shadow-[0_0_12px_rgba(122,60,255,0.5)]" />
    </div>
  )
}
