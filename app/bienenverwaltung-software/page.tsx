import type { Metadata } from "next"
import { siteConfig } from "@/lib/seo-config"
import { BienenverwaltungSoftwareClient } from "./BienenverwaltungSoftwareClient"

export const metadata: Metadata = {
  title: "Bienenverwaltung Software – Imker-Logbuch Pro",
  description: "Die professionelle Bienenverwaltung Software für Hobby-Imker und Direktvermarkter. QR-Codes, Bestandsbuch, Varroa-Prognose. Jetzt kostenlos testen.",
  alternates: {
    canonical: `${siteConfig.url}/bienenverwaltung-software`,
  },
  openGraph: {
    title: "Bienenverwaltung Software – Imker-Logbuch Pro",
    description: "Die professionelle Bienenverwaltung Software für Hobby-Imker und Direktvermarkter.",
    url: `${siteConfig.url}/bienenverwaltung-software`,
  },
}

export default function BienenverwaltungSoftwarePage() {
  return <BienenverwaltungSoftwareClient />
}
