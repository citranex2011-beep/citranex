import { ArrowRight, TrendingUp, Users, Target, Sparkles } from "lucide-react"
import { SectionLabel } from "@/components/ui/section-title"
import { Reveal } from "@/components/ui/reveal"
import { TechGlobe } from "@/components/sections/tech-globe"
import { stats } from "@/data/site"

const statIcons = {
  trending: TrendingUp,
  users: Users,
  target: Target,
  sparkles: Sparkles,
} as const

export function About() {
  return (
    <section id="sobre" className="relative overflow-hidden border-t border-border py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-purple/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr_1fr] lg:gap-8">
          {/* Texto */}
          <div>
            <Reveal>
              <SectionLabel>Sobre Nós</SectionLabel>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-5 text-balance font-sans text-3xl font-bold leading-tight sm:text-4xl">
                Tecnologia que <span className="text-gradient-brand">conecta.</span>
                <br />
                Soluções que <span className="text-gradient-brand">transformam.</span>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
                A Citranex é uma empresa de tecnologia, design e estratégia que
                acredita no poder das conexões. Unimos estratégia, criatividade e
                inovação para criar experiências digitais e visuais que geram
                resultados reais.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <a
                href="#processo"
                className="group mt-8 inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-foreground transition-all duration-300 hover:border-brand-purple/60 hover:text-brand-lilac"
              >
                Saiba mais sobre nós
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Reveal>
          </div>

          {/* Globo */}
          <Reveal delay={120} className="order-first lg:order-none">
            <TechGlobe />
          </Reveal>

          {/* Indicadores */}
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border">
            {stats.map((stat, i) => {
              const Icon = statIcons[stat.icon]
              return (
                <Reveal key={stat.label} delay={i * 80} className="bg-card">
                  <div className="flex h-full flex-col gap-3 p-5 sm:p-6">
                    <Icon className="h-5 w-5 text-brand-lilac" />
                    <p className="font-sans text-2xl font-extrabold text-gradient-brand sm:text-3xl">
                      {stat.value}
                    </p>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
