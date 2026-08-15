import { cn } from "@/lib/utils"

/**
 * Símbolo "C" da Citranex — recriação vetorial da referência de marca
 * (gradiente roxo -> azul -> ciano).
 *
 * NOTA: caso o arquivo oficial do símbolo seja disponibilizado, substitua
 * o conteúdo deste componente por um <img>/<Image> apontando para o asset.
 */
export function CitranexMark({
  className,
  idSuffix = "brand",
}: {
  className?: string
  idSuffix?: string
}) {
  const gid = `citranex-c-${idSuffix}`
  return (
    <svg
      viewBox="0 0 104 104"
      className={cn("h-8 w-8", className)}
      role="img"
      aria-label="Símbolo Citranex"
    >
      <defs>
        <linearGradient id={gid} x1="18" y1="12" x2="90" y2="94" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7A3CFF" />
          <stop offset="52%" stopColor="#3A7DFF" />
          <stop offset="100%" stopColor="#00E1FF" />
        </linearGradient>
      </defs>
      {/* Corpo em "C" com abertura à direita e recorte diagonal superior */}
      <path
        d="M84.6 24.4 L61.5 34.8 A28 28 0 1 0 72.8 70.7 L87.7 84.1 A48 48 0 1 1 84.6 24.4 Z"
        fill={`url(#${gid})`}
      />
    </svg>
  )
}

/**
 * Logotipo horizontal: símbolo + wordmark "CITRANEX".
 * Usa a fonte da interface (Raleway) com tracking largo, conforme a marca.
 */
export function Logo({
  className,
  wordmark = true,
  idSuffix = "header",
}: {
  className?: string
  wordmark?: boolean
  idSuffix?: string
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5 select-none", className)}>
      <CitranexMark idSuffix={idSuffix} className="h-8 w-8 shrink-0" />
      {wordmark && (
        <span className="font-sans text-lg font-bold tracking-[0.35em] text-foreground">
          CITRANE<span className="text-gradient-brand">X</span>
        </span>
      )}
    </span>
  )
}
