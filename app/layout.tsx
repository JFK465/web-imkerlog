import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/marketing/Footer"
import { WebSiteSchema, OrganizationSchema, SoftwareApplicationSchema } from "@/components/seo/StructuredData"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://imker-logbuch-pro.de"),
  title: {
    default: "Imker-Logbuch Pro: Bienenverwaltung Software - Jetzt kostenlos testen",
    template: "%s | Imker-Logbuch Pro",
  },
  description:
    "Die Bienenverwaltung Software fuer Hobby-Imker und Direktvermarkter. QR-Codes, rechtskonformes Bestandsbuch, Varroa-Prognose. Jetzt kostenlos testen!",
  keywords: [
    "Bienenverwaltung Software",
    "Imker App",
    "Bestandsbuch digital",
    "Honig Chargenverfolgung",
    "Varroa Kontrolle",
    "Imkerei Digitalisierung",
  ],
  authors: [{ name: "Imker-Logbuch Pro Team" }],
  creator: "Imker-Logbuch Pro",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://imker-logbuch-pro.de",
    title: "Imker-Logbuch Pro: Bienenverwaltung Software - Jetzt kostenlos testen",
    description:
      "Die Bienenverwaltung Software fuer Hobby-Imker und Direktvermarkter. QR-Codes, rechtskonformes Bestandsbuch, Varroa-Prognose. Jetzt kostenlos testen!",
    siteName: "Imker-Logbuch Pro",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Imker-Logbuch Pro - Bienenverwaltung Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Imker-Logbuch Pro: Bienenverwaltung Software - Jetzt kostenlos testen",
    description:
      "Die Bienenverwaltung Software fuer Hobby-Imker und Direktvermarkter. QR-Codes, rechtskonformes Bestandsbuch, Varroa-Prognose.",
    images: ["/og.png"],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <head>
        <WebSiteSchema />
        <OrganizationSchema />
        <SoftwareApplicationSchema />
      </head>
      <body className={`${inter.variable} ${playfair.variable} ${inter.className}`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
