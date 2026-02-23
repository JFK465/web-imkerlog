import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumbs } from "@/components/layout/Breadcrumbs"
import { WebPageSchema } from "@/components/seo/StructuredData"
import { siteConfig } from "@/lib/seo-config"
import { Check, QrCode, FileText, Bug, Cloud, Tag, Calendar, BarChart3 } from "lucide-react"

export const metadata: Metadata = {
  title: "Funktionen – Imker-Logbuch Pro",
  description: "Alle Funktionen der Bienenverwaltung-Software im Überblick. Von Stockkarten bis Varroa-Prognose.",
  alternates: {
    canonical: `${siteConfig.url}/funktionen`,
  },
  openGraph: {
    title: "Funktionen – Imker-Logbuch Pro",
    description: "Alle Funktionen der Bienenverwaltung-Software im Überblick.",
    url: `${siteConfig.url}/funktionen`,
  },
}

const features = [
  {
    icon: QrCode,
    title: "QR-Code am Bienenstock",
    description: "Jeder Stock erhält einen QR-Code. Scannen, tippen, fertig – auch mit Bienenstichen an den Fingern.",
  },
  {
    icon: FileText,
    title: "Digitales Bestandsbuch",
    description: "Rechtskonform gemäß Tierseuchenrecht. Alle Pflichteintragungen automatisch erfasst und exportierbar.",
  },
  {
    icon: Bug,
    title: "Varroa-Kontrolle & Prognose",
    description: "Dokumentieren Sie Varroa-Befall und erhalten Sie Prognosen für die Behandlung.",
  },
  {
    icon: Tag,
    title: "Honig Chargenverfolgung",
    description: "Volle Rückverfolgbarkeit Ihrer Honigchargen – vom Bienenstock bis zum Glas.",
  },
  {
    icon: Cloud,
    title: "Wetter-Integration",
    description: "Wetterdaten direkt am Bienenstand. Planen Sie Arbeiten wetterabhängig.",
  },
  {
    icon: Calendar,
    title: "Termin-Erinnerungen",
    description: "Automatische Erinnerungen für Varroa-Kontrollen, Fütterung und andere wichtige Termine.",
  },
  {
    icon: BarChart3,
    title: "Statistiken & Analysen",
    description: "Übersichtliche Auswertungen Ihrer Imkerei: Erträge, Völkerstärke, Behandlungserfolg und mehr.",
  },
]

export default function FunktionenPage() {
  return (
    <>
      <WebPageSchema
        title="Funktionen – Imker-Logbuch Pro"
        description="Alle Funktionen der Bienenverwaltung-Software im Überblick."
        path="/funktionen"
      />
      <Breadcrumbs items={[{ name: "Funktionen", href: "/funktionen" }]} />

      <section className="bg-gradient-to-b from-amber-50 via-orange-50 to-yellow-50 py-16 md:py-20">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <h1 className="font-heading text-4xl font-extrabold tracking-tight text-earth-900 sm:text-5xl">
            Alle Funktionen im Überblick
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-earth-600">
            Alles was Sie für die professionelle Bienenverwaltung brauchen – in einer App.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group rounded-xl border border-honey-100 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-honey-200"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-amber-100 to-orange-100">
                  <feature.icon className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-earth-900">{feature.title}</h3>
                <p className="mt-2 text-sm text-earth-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-center font-heading text-2xl font-bold text-earth-900 mb-8">
            Darum lohn sich Imker-Logbuch Pro
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-sm">
              <Check className="h-6 w-6 shrink-0 text-amber-500" />
              <div>
                <h3 className="font-semibold text-earth-900">Rechtssicher</h3>
                <p className="mt-1 text-sm text-earth-600">Bestandsbuch entspricht den gesetzlichen Anforderungen</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-sm">
              <Check className="h-6 w-6 shrink-0 text-amber-500" />
              <div>
                <h3 className="font-semibold text-earth-900">Mobile-first</h3>
                <p className="mt-1 text-sm text-earth-600">Bedienung mit einer Hand am Bienenstand</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-sm">
              <Check className="h-6 w-6 shrink-0 text-amber-500" />
              <div>
                <h3 className="font-semibold text-earth-900">Offline-fähig</h3>
                <p className="mt-1 text-sm text-earth-600">Funktioniert auch ohne Internet am Bienenstand</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-sm">
              <Check className="h-6 w-6 shrink-0 text-amber-500" />
              <div>
                <h3 className="font-semibold text-earth-900">Datensicher</h3>
                <p className="mt-1 text-sm text-earth-600">Server in Deutschland, DSGVO-konform</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-heading text-2xl font-bold text-earth-900">
            Bereit, Ihre Imkerei zu digitalisieren?
          </h2>
          <p className="mt-4 text-earth-600">
            Testen Sie alle Funktionen kostenlos während der Beta-Phase.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-warm hover:shadow-glow transition-all"
            >
              Kostenlos starten
            </Link>
            <Link
              href="/bienenverwaltung-software"
              className="inline-flex items-center justify-center rounded-lg border border-honey-200 bg-white px-6 py-3 text-sm font-semibold text-earth-700 hover:bg-honey-50 transition-colors"
            >
              Mehr erfahren
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
