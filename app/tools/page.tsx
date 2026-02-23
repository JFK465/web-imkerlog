import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumbs } from "@/components/layout/Breadcrumbs"
import { WebPageSchema } from "@/components/seo/StructuredData"
import { siteConfig } from "@/lib/seo-config"
import { Calculator, Bug, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Tools & Rechner – Imker-Logbuch Pro",
  description: "Nützliche Tools und Rechner für Imker: Honig-Ernte-Rechner, Varroa-Prognose und mehr.",
  alternates: {
    canonical: `${siteConfig.url}/tools`,
  },
  openGraph: {
    title: "Tools & Rechner – Imker-Logbuch Pro",
    description: "Nützliche Tools und Rechner für Imker.",
    url: `${siteConfig.url}/tools`,
  },
}

const tools = [
  {
    title: "Honig-Ernte-Rechner",
    description: "Berechnen Sie Ihren voraussichtlichen Honig-Ertrag basierend auf Ihrer Völkerzahl.",
    href: "/tools/honig-rechner",
    icon: Calculator,
  },
]

export default function ToolsPage() {
  return (
    <>
      <WebPageSchema
        title="Tools & Rechner – Imker-Logbuch Pro"
        description="Nützliche Tools und Rechner für Imker: Honig-Ernte-Rechner, Varroa-Prognose und mehr."
        path="/tools"
      />
      <Breadcrumbs items={[{ name: "Tools", href: "/tools" }]} />

      <section className="bg-gradient-to-b from-amber-50 via-orange-50 to-yellow-50 py-16 md:py-20">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <Calculator className="mx-auto h-12 w-12 text-amber-500" />
          <h1 className="font-heading text-4xl font-extrabold tracking-tight text-earth-900 sm:text-5xl mt-6">
            Tools & Rechner
          </h1>
          <p className="mt-6 text-lg text-earth-600">
            Nützliche Werkzeuge für Imker – von der Erntekalkulation bis zur Varroa-Prognose.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool, index) => (
              <Link
                key={index}
                href={tool.href}
                className="group rounded-xl border border-honey-100 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-honey-200"
              >
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-amber-100 group-hover:bg-amber-200 transition-colors">
                    <tool.icon className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-earth-900 group-hover:text-amber-700 transition-colors flex items-center gap-2">
                      {tool.title}
                      <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h2>
                    <p className="mt-2 text-sm text-earth-600">{tool.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-heading text-2xl font-bold text-earth-900">
            Mehr Tools coming soon
          </h2>
          <p className="mt-4 text-earth-600">
            Wir arbeiten kontinuierlich an neuen nützlichen Tools für Imker.
            Haben Sie Ideen? Schreiben Sie uns!
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center rounded-lg border border-honey-200 bg-white px-8 py-3 mt-8 text-sm font-semibold text-earth-700 hover:bg-honey-50 transition-colors"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </>
  )
}
