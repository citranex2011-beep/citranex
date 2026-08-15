import { ArrowRight, MessageSquareHeart, MonitorSmartphone, Rocket, Printer, Gem } from "lucide-react"
import type { ServiceIcon } from "@/data/site"

const iconMap: Record<ServiceIcon, typeof Rocket> = {
  social: MessageSquareHeart,
  sites: MonitorSmartphone,
  landing: Rocket,
  print: Printer,
  identity: Gem,
}

export function ServiceCard({
  title,
  description,
  icon,
}: {
  title: string
  description: string
  icon: ServiceIcon
}) {
  const Icon = iconMap[icon]
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-purple/50 hover:shadow-[0_0_44px_-14px_rgba(122,60,255,0.55)]">
      {/* Glow interno no hover */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-purple/0 blur-2xl transition-colors duration-500 group-hover:bg-brand-purple/20" />

      <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-border text-brand-lilac transition-colors duration-300 group-hover:border-brand-purple/50">
        <Icon className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
      </span>

      <h3 className="mt-6 text-sm font-bold uppercase tracking-[0.14em] text-foreground">
        {title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>

      <span className="mt-6 inline-flex text-brand-lilac">
        <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
      </span>
    </article>
  )
}
