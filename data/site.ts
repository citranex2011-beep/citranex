/**
 * =====================================================================
 *  CITRANEX — Arquivo central de conteúdo do site
 * ---------------------------------------------------------------------
 *  Altere textos, serviços, projetos, estatísticas, redes e contato
 *  APENAS aqui. Nenhum conteúdo deve ser escrito diretamente dentro
 *  dos componentes.
 * =====================================================================
 */

/* ----------------------------- Contato ----------------------------- */
// Número usado nos botões "FALE CONOSCO" e "VAMOS CONVERSAR".
// Formato internacional, apenas dígitos (ex.: 55 + DDD + número).
export const WHATSAPP_NUMBER = "5511945551234"

export const WHATSAPP_MESSAGE =
  "Olá! Vim pelo site da Citranex e gostaria de conversar sobre um projeto."

export const contact = {
  phoneLabel: "(11) 94555-1234",
  whatsappNumber: WHATSAPP_NUMBER,
  email: "contato@citranex.com.br",
  city: "São Paulo - SP",
}

/** Monta o link de WhatsApp com a mensagem pré-preenchida. */
export function whatsappLink(
  number: string = WHATSAPP_NUMBER,
  message: string = WHATSAPP_MESSAGE,
) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

/* ----------------------------- Redes ------------------------------- */
export const socialLinks = [
  { name: "Instagram", href: "https://instagram.com/citranex", icon: "instagram" as const },
  { name: "LinkedIn", href: "https://linkedin.com/company/citranex", icon: "linkedin" as const },
  { name: "Behance", href: "https://behance.net/citranex", icon: "behance" as const },
]

/* --------------------------- Navegação ----------------------------- */
export const navLinks = [
  { label: "INÍCIO", id: "inicio" },
  { label: "SOBRE NÓS", id: "sobre" },
  { label: "SERVIÇOS", id: "servicos" },
  { label: "PORTFÓLIO", id: "portfolio" },
  { label: "PROCESSO", id: "processo" },
  { label: "CONTATO", id: "contato" },
]

/* ---------------------------- Serviços ----------------------------- */
export type ServiceIcon =
  | "social"
  | "sites"
  | "landing"
  | "print"
  | "identity"

export const services: {
  title: string
  description: string
  icon: ServiceIcon
}[] = [
  {
    title: "Mídias Sociais",
    description:
      "Gestão estratégica de redes sociais, criação de conteúdo e campanhas que conectam sua marca ao seu público.",
    icon: "social",
  },
  {
    title: "Criação de Sites",
    description:
      "Sites institucionais, blogs e portais modernos, responsivos e otimizados para uma experiência incrível.",
    icon: "sites",
  },
  {
    title: "Landing Pages (LP)",
    description:
      "Páginas de alta conversão para campanhas, lançamentos e captação de leads com foco em resultados.",
    icon: "landing",
  },
  {
    title: "Criativos Impressos",
    description:
      "Materiais gráficos que comunicam com impacto: folders, cartões, banners, catálogos e muito mais.",
    icon: "print",
  },
  {
    title: "Identidade Visual",
    description:
      "Construímos marcas fortes e memoráveis com design estratégico e direção criativa completa.",
    icon: "identity",
  },
]

/* -------------------------- Estatísticas --------------------------- */
export const stats = [
  { value: "+120", label: "projetos entregues", icon: "trending" as const },
  { value: "+80", label: "clientes atendidos", icon: "users" as const },
  { value: "100%", label: "compromisso com resultados", icon: "target" as const },
  { value: "Soluções", label: "personalizadas para cada marca", icon: "sparkles" as const },
]

/* ---------------------------- Processo ----------------------------- */
export type ProcessIcon = "search" | "bulb" | "pencil" | "code" | "rocket"

export const processSteps: {
  step: string
  title: string
  description: string
  icon: ProcessIcon
}[] = [
  {
    step: "01",
    title: "Descoberta",
    description: "Entendemos seu negócio, seu público e seus objetivos.",
    icon: "search",
  },
  {
    step: "02",
    title: "Estratégia",
    description: "Desenvolvemos a estratégia certa para alcançar os melhores resultados.",
    icon: "bulb",
  },
  {
    step: "03",
    title: "Criação",
    description: "Transformamos ideias em designs e soluções criativas impactantes.",
    icon: "pencil",
  },
  {
    step: "04",
    title: "Desenvolvimento",
    description: "Colocamos tudo em prática com tecnologia, performance e qualidade.",
    icon: "code",
  },
  {
    step: "05",
    title: "Entrega e Suporte",
    description: "Entregamos, acompanhamos e estamos sempre prontos para evoluir junto.",
    icon: "rocket",
  },
]

/* ---------------------------- Portfólio ---------------------------- */
export type PortfolioCategory =
  | "Branding"
  | "Social Media"
  | "Websites"
  | "Tecnologia"
  | "Landing Pages"
  | "Design"

export type Project = {
  name: string
  category: PortfolioCategory
  description: string
  image: string
  link?: string
}

// Para substituir: troque nome, categoria, descrição, imagem e link.
export const projects: Project[] = [
  {
    name: "Projeto 01",
    category: "Branding",
    description: "Identidade visual completa e sistema de marca para lançamento.",
    image: "/portfolio/projeto-01.png",
    link: "#",
  },
  {
    name: "Projeto 02",
    category: "Websites",
    description: "Portal institucional responsivo com foco em performance.",
    image: "/portfolio/projeto-02.png",
    link: "#",
  },
  {
    name: "Projeto 03",
    category: "Social Media",
    description: "Gestão de conteúdo e campanhas para redes sociais.",
    image: "/portfolio/projeto-03.png",
    link: "#",
  },
  {
    name: "Projeto 04",
    category: "Landing Pages",
    description: "Página de alta conversão para captação de leads.",
    image: "/portfolio/projeto-04.png",
    link: "#",
  },
  {
    name: "Projeto 05",
    category: "Tecnologia",
    description: "Plataforma digital sob medida com integrações.",
    image: "/portfolio/projeto-05.png",
    link: "#",
  },
  {
    name: "Projeto 06",
    category: "Design",
    description: "Direção criativa e peças gráficas para campanha.",
    image: "/portfolio/projeto-06.png",
    link: "#",
  },
]

/* ------------------------- Links do footer ------------------------- */
export const footerServices = [
  "Mídias Sociais",
  "Criação de Sites",
  "Landing Pages",
  "Criativos Impressos",
  "Identidade Visual",
]

export const siteMeta = {
  name: "Citranex",
  tagline: "Tecnologia que conecta. Soluções que transformam.",
  taglineUpper: ["TECNOLOGIA QUE CONECTA.", "SOLUÇÕES QUE TRANSFORMAM."],
  url: "https://citranex.com.br",
  year: 2026,
}
