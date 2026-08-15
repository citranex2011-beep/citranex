import { cn } from "@/lib/utils"

/** Pequeno rótulo de seção (ex.: "SERVIÇOS") com marcador gradiente. */
export function SectionLabel({
  children,
  className,
  centered = false,
}: {
  children: React.ReactNode
  className?: string
  centered?: boolean
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-lilac",
        centered && "justify-center",
        className,
      )}
    >
      <span className="h-px w-6 bg-gradient-brand" aria-hidden="true" />
      {children}
    </span>
  )
}
