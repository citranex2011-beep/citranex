import { Search, Lightbulb, Pencil, Code, Rocket } from "lucide-react"
import { SectionLabel } from "@/components/ui/section-title"
import { Reveal } from "@/components/ui/reveal"
import { processSteps, type ProcessIcon } from "@/data/site"

const iconMap: Record<ProcessIcon, typeof Search> = {
  search: Search,
  bulb: Lightbulb,
  pencil: Pencil,
  code: Code,
  rocket: Rocket,
}

export function Process() {
  return (
    <section id="processo" className="relative overflow-hidden border-t border-border py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-64 -translate-y-1/2 bg-dot-grid opacity-30 mask-fade-radial" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionLabel centered>Nosso Processo</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-balance font-sans text-3xl font-bold leading-tight sm:text-4xl">
              Do planejamento à entrega, tudo com{" "}
              <span className="text-gradient-brand">propósito.</span>
            </h2>
          </Reveal>
        </div>

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Linha conectora — horizontal no desktop, vertical no mobile */}
          <div
            className="absolute left-[27px] top-4 bottom-4 w-px bg-gradient-to-b from-brand-purple via-brand-blue to-brand-cyan opacity-40 lg:left-0 lg:right-0 lg:top-7 lg:bottom-auto lg:h-px lg:w-full lg:bg-gradient-to-r"
            aria-hidden="true"
          />

          <ol className="grid gap-10 lg:grid-cols-5 lg:gap-6">
            {processSteps.map((step, i) => {
              const Icon = iconMap[step.icon]
              return (
                <Reveal key={step.step} as="li" delay={i * 90} className="relative flex gap-5 lg:flex-col lg:gap-0 lg:text-center">
                  {/* Nó / ícone */}
                  <div className="relative z-10 shrink-0 lg:mx-auto">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full border border-brand-purple/40 bg-background text-brand-lilac shadow-[0_0_28px_-10px_rgba(122,60,255,0.7)]">
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>

                  <div className="lg:mt-6">
                    <p className="font-mono text-xs font-semibold tracking-[0.2em] text-brand-lilac">
                      {step.step}
                    </p>
                    <h3 className="mt-1 text-base font-bold text-foreground">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground lg:mx-auto lg:max-w-[15rem]">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
