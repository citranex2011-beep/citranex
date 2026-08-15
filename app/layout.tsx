import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import { Raleway, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
})

const SITE_URL = "https://citranex.com.br"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Citranex | Tecnologia, Design e Estratégia",
  description:
    "Soluções em tecnologia, design, criação de sites, mídias sociais, identidade visual e estratégia para transformar marcas e negócios.",
  generator: "v0.app",
  applicationName: "Citranex",
  keywords: [
    "Citranex",
    "tecnologia",
    "design",
    "estratégia",
    "criação de sites",
    "mídias sociais",
    "landing pages",
    "identidade visual",
  ],
  authors: [{ name: "Citranex" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Citranex",
    title: "Citranex | Tecnologia, Design e Estratégia",
    description:
      "Tecnologia que conecta. Soluções que transformam. Criação de sites, mídias sociais, landing pages e identidade visual.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Citranex | Tecnologia, Design e Estratégia",
    description:
      "Tecnologia que conecta. Soluções que transformam.",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0D0D14",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`dark ${raleway.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-background font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
