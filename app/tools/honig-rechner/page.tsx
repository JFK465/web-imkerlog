import type { Metadata } from "next"
import { siteConfig } from "@/lib/seo-config"
import { HonigRechnerClient } from "./HonigRechnerClient"

export const metadata: Metadata = {
  title: "Honig-Ernte-Rechner – Ertrag berechnen – Imker-Logbuch Pro",
  description: "Berechnen Sie Ihren voraussichtlichen Honig-Ertrag basierend auf Ihrer Völkerzahl.",
  alternates: {
    canonical: `${siteConfig.url}/tools/honig-rechner`,
  },
}

export default function HonigRechnerPage() {
  return <HonigRechnerClient />
}
