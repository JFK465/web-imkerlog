import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumbs } from "@/components/layout/Breadcrumbs"
import { WebPageSchema } from "@/components/seo/StructuredData"
import { siteConfig } from "@/lib/seo-config"
import { BookOpen, FileText, Bug, Tag, Calendar, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Wissen & Ratgeber – Imker-Logbuch Pro",
  description: "Wichtiges Wissen für Imker: Bestandsbuch-Pflicht, Varroa-Behandlung, Honig-Kennzeichnung und mehr.",
  alternates: {
    canonical: `${siteConfig.url}/wissen`,
  },
  openGraph: {
    title: "Wissen & Ratgeber – Imker-Logbuch Pro",
    description: "Wichtiges Wissen für Imker: Bestandsbuch-Pflicht, Varroa-Behandlung, Honig-Kennzeichnung und mehr.",
    url: `${siteConfig.url}/wissen`,
  },
}

const topics = [
  {
    title: "Bestandsbuch-Pflicht",
    description: "Was Sie als Imker über das Bestandsbuch wissen müssen. Rechtliche Anforderungen und Dokumentationspflichten.",
    href: "/wissen/bestandsbuch",
    icon: FileText,
  },
  {
    title: "Varroa-Monitoring",
    description: "Alles über die Varroa-Milbe: Erkennung, Behandlung und Vorbeugung.",
    href: "/wissen/varroa",
    icon: Bug,
  },
  {
    title: "Honig-Kennzeichnung",
    description: "Welche Angaben müssen auf das Honig-Etikett? Rechtliche Anforderungen an die Verpackung.",
    href: "/wissen/honig-etiketten",
    icon: Tag,
  },
  {
    title: "Imker-Kalender",
    description: "Jahresplan für Imker: Wann welche Arbeiten anstehen, von der Durchsicht bis zur Fütterung.",
    href: "/wissen/imker-kalender",
    icon: Calendar,
  },
]

export default function WissenPage() {
  return (
    <>
      <WebPageSchema
        title="Wissen & Ratgeber – Imker-Logbuch Pro"
        description="Wichtiges Wissen für Imker: Bestandsbuch-Pflicht, Varroa-Behandlung, Honig-Kennzeichnung und mehr."
        path="/wissen"
      />
      <Breadcrumbs items={[{ name: "Wissen", href: "/wissen" }]} />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-amber-50 via-orange-50 to-yellow-50 py-16 md:py-20">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <BookOpen className="mx-auto h-12 w-12 text-amber-500" />
          <h1 className="font-heading text-4xl font-extrabold tracking-tight text-earth-900 sm:text-5xl mt-6">
            Wissen & Ratgeber
          </h1>
          <p className="mt-6 text-lg text-earth-600">
            Alles was Sie als Imker wissen müssen – von rechtlichen Pflichten
            bis zu praktischen Tipps für den Bienenstand.
          </p>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-6 md:grid-cols-2">
            {topics.map((topic, index) => (
              <Link
                key={index}
                href={topic.href}
                className="group rounded-xl border border-honey-100 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-honey-200"
              >
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-amber-100 group-hover:bg-amber-200 transition-colors">
                    <topic.icon className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-earth-900 group-hover:text-amber-700 transition-colors flex items-center gap-2">
                      {topic.title}
                      <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h2>
                    <p className="mt-2 text-sm text-earth-600">{topic.description}</p>
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
            Digitale Unterstützung für Imker
          </h2>
          <p className="mt-4 text-earth-600">
            Nutzen Sie Imker-Logbuch Pro, um alle Dokumentationspflichten
            einfach und rechtskonform zu erfüllen.
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-3 mt-8 text-sm font-semibold text-white shadow-warm hover:shadow-glow transition-all"
          >
            Kostenlos starten
          </Link>
        </div>
      </section>
    </>
  )
}
