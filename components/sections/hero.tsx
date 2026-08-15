import { ArrowRight } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"
import { SocialLinks } from "@/components/ui/social-links"
import { HeroVisual } from "@/components/sections/hero-visual"

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      {/* Fundo tecnológico sutil */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-brand-purple/20 blur-[130px]" />
        <div className="absolute -right-32 top-40 h-96 w-96 rounded-full bg-brand-blue/15 blur-[140px]" />
        <div className="absolute inset-0 bg-dot-grid opacity-[0.4] mask-fade-b" />
      </div>

      <div className="mx-auto grid min-h-[92vh] max-w-7xl items-center gap-10 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-2 lg:gap-8 lg:pt-24">
        {/* Conteúdo */}
        <div className="order-2 lg:order-1">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-brand-lilac">
              Tecnologia que conecta.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-5 text-balance font-sans text-[2.7rem] font-extrabold uppercase leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
              Soluções que
              <br />
              <span className="text-gradient-brand">transformam.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
              Conectamos estratégia, criatividade e tecnologia para impulsionar
              marcas no digital e além dele.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8">
              <a
                href="#servicos"
                className="group inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-foreground transition-all duration-300 hover:border-brand-purple/60 hover:text-brand-lilac hover:shadow-[0_0_34px_-10px_rgba(122,60,255,0.6)]"
              >
                Conheça nossos serviços
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-12">
              <p className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                Nossas redes
              </p>
              <SocialLinks />
            </div>
          </Reveal>
        </div>

        {/* Elemento visual */}
        <div className="order-1 lg:order-2">
          <HeroVisual />
        </div>
      </div>
    </section>
  )
}
