import Image from "next/image"
import { cn } from "@/lib/utils"

/**
 * Símbolo "C" da Citranex — usa o asset oficial em `public/logo-c.png`.
 *
 * Dimensões nativas: 515x448. O componente aceita `className` para
 * sobrescrever o tamanho padrão (`h-8 w-8`).
 */
export function CitranexMark({
  className,
}: {
  className?: string
}) {
  return (
    <Image
      src="/logo-c.png"
      alt="Símbolo Citranex"
      width={515}
      height={448}
      className={cn("h-8 w-auto shrink-0", className)}
      priority={false}
    />
  )
}

/**
 * Logotipo horizontal: símbolo "C" + wordmark "CITRANEX".
 * Usa os assets oficiais em `public/logo-c.png` e `public/logo-wordmark.png`.
 */
export function Logo({
  className,
  wordmark = true,
}: {
  className?: string
  wordmark?: boolean
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5 select-none", className)}>
      <CitranexMark />
      {wordmark && (
        <Image
          src="/logo-wordmark.png"
          alt="CITRANEX"
          width={1250}
          height={204}
          className="h-5 w-auto sm:h-6"
        />
      )}
    </span>
  )
}