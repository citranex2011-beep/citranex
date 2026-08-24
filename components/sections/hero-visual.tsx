import { CitranexMark } from "@/components/ui/logo"

/**
 * Composição visual do Hero — símbolo "C" flutuante com halo, anéis
 * luminosos e pontos tecnológicos. Construída em CSS/SVG (sem imagens
 * genéricas), mantendo a identidade Citranex como elemento central.
 */
export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]" aria-hidden="true">
      {/* Grade de pontos ao fundo */}
      <div className="absolute left-2 top-6 h-24 w-24 bg-dot-grid opacity-60 sm:left-0" />

      {/* Linhas digitais laterais */}
      <svg
        className="absolute right-0 top-1/3 h-40 w-40 text-brand-purple/40"
        viewBox="0 0 160 160"
        fill="none"
      >
        <path d="M10 40 H90 M40 80 H150 M20 120 H120" stroke="currentColor" strokeWidth="1" />
        <circle cx="150" cy="40" r="2.5" fill="#00E1FF" />
        <circle cx="120" cy="120" r="2.5" fill="#3A7DFF" />
      </svg>

      {/* Halo / glow principal */}
      <div className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-purple/30 blur-[90px] animate-pulse-glow" />

      {/* Anéis luminosos girando */}
      <div className="absolute left-1/2 top-1/2 h-[86%] w-[86%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-blue/25 animate-spin-slow" />
      <div className="absolute left-1/2 top-1/2 h-[64%] w-[64%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-cyan/25 animate-ring-rotate" />

      {/* Símbolo flutuante */}
      <div className="absolute left-1/2 top-[42%] flex -translate-x-1/2 -translate-y-1/2 animate-float-slow">
        <div className="translate-y-0">
          <div className="relative">
            <div className="absolute inset-0 -z-10 scale-125 rounded-full bg-brand-blue/25 blur-2xl" />
            <CitranexMark
              className="h-[125px] w-auto drop-shadow-[0_18px_40px_rgba(122,60,255,0.55)] sm:h-[173px]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
