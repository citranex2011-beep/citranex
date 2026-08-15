import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { whatsappLink } from "@/data/site"

/** Botão que abre o WhatsApp configurado em data/site.ts. */
export function WhatsAppButton({
  children,
  className,
  variant = "solid",
}: {
  children: React.ReactNode
  className?: string
  variant?: "solid" | "outline"
}) {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-300",
        variant === "solid" &&
          "bg-gradient-brand text-white shadow-[0_0_30px_-8px_rgba(122,60,255,0.6)] hover:shadow-[0_0_44px_-6px_rgba(58,125,255,0.75)] hover:brightness-110",
        variant === "outline" &&
          "border border-border text-foreground hover:border-brand-purple/60 hover:text-brand-lilac",
        className,
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  )
}
