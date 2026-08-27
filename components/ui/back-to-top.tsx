"use client"

import { useEffect, useState } from "react"
import { ChevronUp } from "lucide-react"

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const onClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Voltar ao topo"
      className={`fixed right-[max(0.5rem,calc(0.5rem+env(safe-area-inset-right)))] bottom-[max(6rem,calc(6rem+env(safe-area-inset-bottom)))] z-40 inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:scale-[1.05] hover:border-brand-purple/60 hover:text-brand-lilac hover:shadow-[0_0_24px_-8px_rgba(122,60,255,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-safe:hover:scale-[1.05] ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
      }`}
    >
      <ChevronUp className="h-4 w-4" />
    </button>
  )
}
