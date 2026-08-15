import { SectionLabel } from "@/components/ui/section-title"
import { Reveal } from "@/components/ui/reveal"
import { PortfolioCard } from "@/components/ui/portfolio-card"
import { projects } from "@/data/site"

export function Portfolio() {
  return (
    <section id="portfolio" className="relative border-t border-border py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <SectionLabel>Portfólio</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-balance font-sans text-3xl font-bold leading-tight sm:text-4xl">
              Ideias que ganham <span className="text-gradient-brand">forma e resultado.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={(i % 3) * 80}>
              <PortfolioCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
