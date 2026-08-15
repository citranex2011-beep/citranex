import { cn } from "@/lib/utils"
import { socialLinks } from "@/data/site"

/** Ícones de marca desenhados em SVG (não disponíveis nesta versão do lucide). */
function Instagram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function Linkedin({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95C21.4 8.75 22 11 22 14.1V21h-4v-6.1c0-1.45-.03-3.3-2-3.3s-2.3 1.57-2.3 3.2V21h-4V9Z" />
    </svg>
  )
}

/** Ícone do Behance desenhado em SVG. */
function BehanceIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M8.8 10.2c.5-.3.8-.9.8-1.6C9.6 6.7 8.2 6 6.4 6H2v11.9h4.6c1.9 0 3.6-.9 3.6-3 0-1.3-.6-2.3-1.4-2.7Zm-4.4-2.3h2c.7 0 1.3.2 1.3 1s-.5 1.1-1.2 1.1H4.4V7.9Zm2.2 8H4.4v-2.7h2.3c.9 0 1.4.4 1.4 1.3 0 1-.7 1.4-1.5 1.4ZM21.9 8.8h-4.6V7.4h4.6v1.4Zm.1 4.6c0-2.6-1.5-4.4-4-4.4s-4.2 1.9-4.2 4.5 1.6 4.4 4.2 4.4c2 0 3.4-1 3.8-2.7h-2c-.2.5-.7.8-1.6.8-1.1 0-1.7-.6-1.8-1.7h5.5c0-.3.1-.5.1-.9Zm-5.6-.8c.1-1 .7-1.6 1.7-1.6s1.5.6 1.6 1.6h-3.3Z" />
    </svg>
  )
}

const iconMap = {
  instagram: Instagram,
  linkedin: Linkedin,
  behance: BehanceIcon,
} as const

export function SocialLinks({
  className,
  iconClassName = "h-5 w-5",
}: {
  className?: string
  iconClassName?: string
}) {
  return (
    <ul className={cn("flex items-center gap-3", className)}>
      {socialLinks.map((social) => {
        const Icon = iconMap[social.icon]
        return (
          <li key={social.name}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="group inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all duration-300 hover:border-brand-purple/60 hover:text-brand-lilac hover:shadow-[0_0_24px_-6px_rgba(122,60,255,0.55)]"
            >
              <Icon className={cn(iconClassName, "transition-transform duration-300 group-hover:scale-110")} />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
