import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

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
    default: "Bienenverwaltung digital -- Imker-Logbuch Pro",
    template: "%s | Imker-Logbuch Pro",
  },
  description:
    "Smarte Verwaltung für Hobby-Imker und Direktvermarkter. Rechtskonform, mobil, einfach.",
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
    title: "Imker-Logbuch Pro -- Smarte Bienenverwaltung",
    description:
      "Smarte Verwaltung für Hobby-Imker und Direktvermarkter. Rechtskonform, mobil, einfach.",
    siteName: "Imker-Logbuch Pro",
  },
  twitter: {
    card: "summary_large_image",
    title: "Imker-Logbuch Pro -- Smarte Bienenverwaltung",
    description:
      "Smarte Verwaltung für Hobby-Imker und Direktvermarkter. Rechtskonform, mobil, einfach.",
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
      <body className={`${inter.variable} ${playfair.variable} ${inter.className}`}>
        {children}
      </body>
    </html>
  )
}
