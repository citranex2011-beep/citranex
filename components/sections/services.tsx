"use client"

import { useEffect, useRef, useState } from "react"
import { SectionLabel } from "@/components/ui/section-title"
import { Reveal } from "@/components/ui/reveal"
import { ServiceCard } from "@/components/ui/service-card"
import { services } from "@/data/site"

export function Services() {
  const [flippedId, setFlippedId] = useState<string | null>(null)
  const [discovering, setDiscovering] = useState(false)
  const hasDiscoveredRef = useRef(false)

  useEffect(() => {
    if (typeof window === "undefined") return
    if (!window.matchMedia("(pointer: coarse)").matches) return
    if (hasDiscoveredRef.current) return

    const node = document.getElementById("servicos")
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !hasDiscoveredRef.current) {
            hasDiscoveredRef.current = true
            setDiscovering(true)
            observer.disconnect()
            window.setTimeout(() => setDiscovering(false), 1300)
          }
        }
      },
      { threshold: 0.25 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="servicos" className="relative border-t border-border py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,2.2fr)] lg:gap-12">
          {/* Intro */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <SectionLabel>Serviços</SectionLabel>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-5 text-balance font-sans text-3xl font-bold leading-tight sm:text-4xl">
                Tudo o que sua marca precisa para{" "}
                <span className="text-gradient-brand">se destacar.</span>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
                Do digital ao impresso, criamos soluções completas, pensadas para
                gerar conexão, valor e resultados reais.
              </p>
            </Reveal>
          </div>

          {/* Cards */}
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 70}>
                <ServiceCard
                  {...service}
                  isFlipped={flippedId === service.title}
                  onToggle={() =>
                    setFlippedId((prev) =>
                      prev === service.title ? null : service.title,
                    )
                  }
                  discover={discovering && i === 0}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
