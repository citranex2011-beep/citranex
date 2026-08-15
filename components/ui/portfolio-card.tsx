import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import type { Project } from "@/data/site"

export function PortfolioCard({ project }: { project: Project }) {
  return (
    <a
      href={project.link ?? "#"}
      target={project.link && project.link !== "#" ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-brand-purple/50 hover:shadow-[0_0_50px_-16px_rgba(122,60,255,0.6)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={`${project.name} — ${project.category}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Overlay escuro no hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />

        {/* Conteúdo */}
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-brand-lilac">
              {project.category}
            </p>
            <h3 className="mt-1.5 text-lg font-bold text-foreground">{project.name}</h3>
            <p className="mt-1 max-h-0 overflow-hidden text-xs leading-relaxed text-muted-foreground opacity-0 transition-all duration-300 group-hover:max-h-20 group-hover:opacity-100">
              {project.description}
            </p>
          </div>
          <span className="inline-flex h-9 w-9 shrink-0 translate-y-1 items-center justify-center rounded-lg border border-brand-purple/40 bg-background/60 text-brand-lilac opacity-0 backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </a>
  )
}
