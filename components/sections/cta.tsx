import { Reveal } from "@/components/ui/reveal"
import { WhatsAppButton } from "@/components/ui/whatsapp-button"

export function CTA() {
  return (
    <section id="contato" className="border-t border-border py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-brand p-8 sm:p-12 lg:p-14">
            {/* Elementos gráficos digitais sutis */}
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
              <div className="absolute right-8 top-6 h-24 w-24 bg-dot-grid opacity-25" />
              <div className="absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
              <svg className="absolute left-4 bottom-4 h-24 w-40 text-white/20" viewBox="0 0 160 96" fill="none">
                <path d="M0 20 H120 M20 48 H160 M0 76 H100" stroke="currentColor" strokeWidth="1" />
              </svg>
            </div>

            <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-xl">
                <h2 className="text-balance font-sans text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                  Pronto para transformar sua marca?
                </h2>
                <p className="mt-4 text-pretty text-sm leading-relaxed text-white/85 sm:text-base">
                  Fale com a Citranex e descubra como podemos levar seu negócio
                  para o próximo nível.
                </p>
              </div>

              <WhatsAppButton
                variant="outline"
                className="shrink-0 border-white/60 bg-white/10 text-white backdrop-blur hover:border-white hover:bg-white/20 hover:text-white"
              >
                Vamos conversar
              </WhatsAppButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
