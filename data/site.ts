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
export const WHATSAPP_NUMBER = "5515974067945"

export const WHATSAPP_MESSAGE =
  "Olá! Vim pelo site da Citranex e gostaria de conversar sobre um projeto."

export const contact = {
  phoneLabel: "(15) 97406-7945",
  whatsappNumber: WHATSAPP_NUMBER,
  city: "Sorocaba - SP",
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
  { name: "Instagram", href: "https://www.instagram.com/citranex?igsi=MWprb3VucWcyNzI3cg==", icon: "instagram" as const },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/citranex/", icon: "linkedin" as const },
  { name: "Behance", href: "https://www.behance.net/citranedesign", icon: "behance" as const },
]

/* --------------------------- Navegação ----------------------------- */
export const navLinks = [
  { label: "INÍCIO", id: "inicio" },
  { label: "SERVIÇOS", id: "servicos" },
  { label: "SOBRE NÓS", id: "sobre" },
  { label: "PROCESSO", id: "processo" },
  { label: "CONTATO", id: "contato" },
]

/* ---------------------------- Serviços ----------------------------- */
export type ServiceIcon =
  | "social"
  | "sites"
  | "automation"
  | "software"
  | "print"
  | "identity"

export const services: {
  title: string
  description: string
  icon: ServiceIcon
}[] = [
  {
    title: "Criação de Sites",
    description:
      "Sites institucionais, blogs, e-commerce e landing pages. Responsivos e otimizados para uma experiência incrível.",
    icon: "sites",
  },
  {
    title: "Mídias Sociais",
    description:
      "Gestão estratégica de redes sociais, criação de conteúdo e campanhas que conectam sua marca ao seu público.",
    icon: "social",
  },
  {
    title: "Automação",
    description:
      "Automatizamos tarefas e integramos processos para reduzir trabalhos manuais, aumentar a produtividade e tornar sua operação mais eficiente.",
    icon: "automation",
  },
  {
    title: "Desenvolvimento de Software",
    description:
      "Criamos sistemas personalizados, seguros e escaláveis, desenvolvidos para atender às necessidades e impulsionar o crescimento do seu negócio.",
    icon: "software",
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
  { value: "+230", label: "projetos entregues", icon: "trending" as const },
  { value: "+50", label: "clientes atendidos", icon: "users" as const },
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

/* ------------------------- Links do footer ------------------------- */
export const footerServices = [
  "Criação de Sites",
  "Mídias Sociais",
  "Automação",
  "Desenvolvimento de Software",
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
