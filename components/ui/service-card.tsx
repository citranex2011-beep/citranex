"use client"

import { useState } from "react"
import {
  MessageSquareHeart,
  MonitorSmartphone,
  Workflow,
  Code,
  Printer,
  Gem,
  Check,
} from "lucide-react"
import type { ServiceIcon } from "@/data/site"

const iconMap: Record<ServiceIcon, typeof MessageSquareHeart> = {
  social: MessageSquareHeart,
  sites: MonitorSmartphone,
  automation: Workflow,
  software: Code,
  print: Printer,
  identity: Gem,
}

export function ServiceCard({
  title,
  description,
  icon,
  benefits,
}: {
  title: string
  description: string
  icon: ServiceIcon
  benefits: string[]
}) {
  const Icon = iconMap[icon]
  const [flipped, setFlipped] = useState(false)

  return (
    <button
      type="button"
      onClick={() => setFlipped((f) => !f)}
      aria-pressed={flipped}
      aria-label={
        flipped
          ? `${title} — voltar para descrição`
          : `${title} — ver benefícios`
      }
      className="group relative flex w-full flex-col overflow-hidden rounded-xl border border-border bg-card text-left transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-purple/50 hover:shadow-[0_0_44px_-14px_rgba(122,60,255,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background [perspective:1200px]"
    >
      {/* Glow interno no hover */}
      <div className="pointer-events-none absolute -right-10 -top-10 z-0 h-32 w-32 rounded-full bg-brand-purple/0 blur-2xl transition-colors duration-500 group-hover:bg-brand-purple/20" />

      {/* Sweep/brilho diagonal no hover */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 -left-1/2 z-0 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[300%] motion-reduce:hidden"
      />

      {/* Wrapper 3D — gira no eixo Y para mostrar o verso */}
      <div
        className={`relative transition-transform duration-700 [transform-style:preserve-3d] motion-reduce:duration-0 ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        } group-hover:[transform:rotateY(180deg)]`}
      >
        {/* FRENTE (em fluxo, define a altura do card) */}
        <div className="relative z-10 flex flex-col p-6 [backface-visibility:hidden]">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-border text-brand-lilac transition-colors duration-300 group-hover:border-brand-purple/50">
            <Icon className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </span>
          <h3 className="mt-6 text-sm font-bold uppercase tracking-[0.14em] text-foreground">
            {title}
          </h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>

        {/* VERSO (absoluto, rotacionado 180deg para ficar de frente após o giro) */}
        <div className="absolute inset-0 z-20 flex items-center justify-center p-6 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="w-fit max-w-full">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-lilac">
              O que sua empresa ganha
            </p>
            <ul className="mt-3 flex flex-col gap-3">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </button>
  )
}
