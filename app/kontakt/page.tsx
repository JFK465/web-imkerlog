import type { Metadata } from "next"
import { siteConfig } from "@/lib/seo-config"
import { KontaktClient } from "./KontaktClient"

export const metadata: Metadata = {
  title: "Kontakt – Imker-Logbuch Pro",
  description: "Kontaktieren Sie uns für Fragen zur Bienenverwaltung-Software. Wir freuen uns auf Ihre Nachricht.",
  alternates: {
    canonical: `${siteConfig.url}/kontakt`,
  },
  openGraph: {
    title: "Kontakt – Imker-Logbuch Pro",
    description: "Kontaktieren Sie uns für Fragen zur Bienenverwaltung-Software.",
    url: `${siteConfig.url}/kontakt`,
  },
}

export default function KontaktPage() {
  return <KontaktClient />
}
