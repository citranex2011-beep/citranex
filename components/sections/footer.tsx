import { Phone, Mail, MapPin } from "lucide-react"
import { Logo } from <citranex-logo></citranex-logo>
import { SocialLinks } from "@/components/ui/social-links"
import {
  navLinks,
  footerServices,
  contact,
  siteMeta,
  whatsappLink,
} from "@/data/site"

export function Footer() {
  return (
    <footer className="border-t border-border bg-[#0a0a12]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          {/* Marca */}
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-5 max-w-[16rem] text-[0.7rem] font-semibold uppercase leading-relaxed tracking-[0.18em] text-muted-foreground">
              {siteMeta.taglineUpper[0]}
              <br />
              {siteMeta.taglineUpper[1]}
            </p>
          </div>

          {/* Navegação */}
          <nav aria-label="Navegação do rodapé">
            <h3 className="text-xs font-bold uppercase tracking-[0.24em] text-brand-lilac">
              Navegação
            </h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-sm capitalize text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label.toLowerCase()}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Serviços */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.24em] text-brand-lilac">
              Serviços
            </h3>
            <ul className="mt-5 space-y-3">
              {footerServices.map((service) => (
                <li key={service}>
                  <a
                    href="#servicos"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.24em] text-brand-lilac">
              Contato
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition-colors hover:text-foreground"
                >
                  <Phone className="h-4 w-4 shrink-0 text-brand-lilac" />
                  {contact.phoneLabel}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-3 transition-colors hover:text-foreground"
                >
                  <Mail className="h-4 w-4 shrink-0 text-brand-lilac" />
                  {contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-brand-lilac" />
                {contact.city}
              </li>
            </ul>
          </div>

          {/* Redes */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.24em] text-brand-lilac">
              Siga-nos
            </h3>
            <SocialLinks className="mt-5" />
          </div>
        </div>

        <div className="mt-14 border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © {siteMeta.year} {siteMeta.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
