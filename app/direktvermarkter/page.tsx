import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumbs } from "@/components/layout/Breadcrumbs"
import { WebPageSchema, FAQSchema } from "@/components/seo/StructuredData"
import { siteConfig } from "@/lib/seo-config"
import { Check, Tag, Package, Leaf, Euro, ShoppingCart } from "lucide-react"

export const metadata: Metadata = {
  title: "Honig verkaufen – Software für Direktvermarkter – Imker-Logbuch Pro",
  description: "Die perfekte Lösung für Imker, die Honig direkt vermarkten. Chargenverfolgung, Etikettengenerator und mehr.",
  alternates: {
    canonical: `${siteConfig.url}/direktvermarkter`,
  },
  openGraph: {
    title: "Honig verkaufen – Software für Direktvermarkter – Imker-Logbuch Pro",
    description: "Die perfekte Lösung für Imker, die Honig direkt vermarkten.",
    url: `${siteConfig.url}/direktvermarkter`,
  },
}

const features = [
  {
    icon: Tag,
    title: "Chargenverfolgung",
    description: "Jede Honigcharge ist zurückverfolgbar – vom Bienenstock bis zum Glas.",
  },
  {
    icon: Package,
    title: "Etiketten-Generator",
    description: "Erstellen Sie rechtskonforme Etiketten mit allen Pflichtangaben.",
  },
  {
    icon: Leaf,
    title: "Qualitätssicherung",
    description: "Dokumentieren Sie Honigqualität und Lagerbedingungen.",
  },
  {
    icon: Euro,
    title: "Preiskalkulation",
    description: "Berechnen Sie Ihre Herstellungskosten und Margen.",
  },
]

const benefits = [
  "Rechtskonforme Etiketten erstellen",
  "Volle Rückverfolgbarkeit der Chargen",
  "Export für Lebensmittelkontrollen",
  "Weniger Food Waste durch bessere Planung",
]

const faqItems = [
  {
    question: "Welche Angaben müssen auf dem Honigetikett stehen?",
    answer: "Netto-Füllmenge, Mindesthaltbarkeitsdatum, Name/Adresse, Ursprungsland, Chargennummer und gegebenenfalls玄en Sie weitere Angaben hinzu.",
  },
  {
    question: "Kann ich meine Etiketten selbst drucken?",
    answer: "Ja, Imker-Logbuch Pro erstellt druckfertige Etiketten, die Sie selbst ausdrucken oder in Druckerei geben können.",
  },
  {
    question: "Wie lange muss ich die Chargen-Dokumentation aufbewahren?",
    answer: "Für Honig gilt eine Aufbewahrungspflicht von mindestens 2 Jahren nach dem Verkauf.",
  },
]

export default function DirektvermarkterPage() {
  return (
    <>
      <WebPageSchema
        title="Honig verkaufen – Software für Direktvermarkter – Imker-Logbuch Pro"
        description="Die perfekte Lösung für Imker, die Honig direkt vermarkten."
        path="/direktvermarkter"
      />
      <FAQSchema items={faqItems} />
      <Breadcrumbs items={[{ name: "Direktvermarkter", href: "/direktvermarkter" }]} />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-amber-50 via-orange-50 to-yellow-50 py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-800 mb-4">
                <ShoppingCart className="h-4 w-4" />
                Für Direktvermarkter
              </div>
              <h1 className="font-heading text-4xl font-extrabold tracking-tight text-earth-900 sm:text-5xl">
                Honig verkaufen mit
                <span className="block gradient-text">System</span>
              </h1>
              <p className="mt-6 text-lg text-earth-600">
                Die Komplettlösung für Imker, die ihren Honig selbst vermarkten.
                Von der Charge bis zum Etikett – alles dokumentiert.
              </p>
              <ul className="mt-8 space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-amber-500" />
                    <span className="text-earth-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex gap-4">
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-warm hover:shadow-glow transition-all"
                >
                  Kostenlos starten
                </Link>
                <Link
                  href="/funktionen"
                  className="inline-flex items-center justify-center rounded-lg border border-honey-200 bg-white px-6 py-3 text-sm font-semibold text-earth-700 hover:bg-honey-50 transition-colors"
                >
                  Alle Funktionen
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative rounded-2xl bg-gradient-to-br from-amber-200 to-orange-200 p-8">
                <div className="rounded-xl bg-white p-6 shadow-lg">
                  <div className="text-center border-b border-honey-100 pb-4 mb-4">
                    <div className="text-sm text-earth-500">Beispiel-Etikett</div>
                  </div>
                  <div className="border-2 border-amber-300 rounded-lg p-4">
                    <div className="text-center">
                      <div className="font-bold text-lg">Honig</div>
                      <div className="text-sm text-earth-600">500g</div>
                    </div>
                    <div className="mt-4 text-xs space-y-1">
                      <div className="flex justify-between">
                        <span>Chargen-Nr.:</span>
                        <span className="font-mono">CH-2026-001</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Ernte:</span>
                        <span>Juli 2025</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Herkunft:</span>
                        <span>Deutschland</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-center font-heading text-3xl font-bold text-earth-900 mb-12">
            Alles für die Direktvermarktung
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="rounded-xl border border-honey-100 bg-white p-6">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100 mb-4">
                  <feature.icon className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-earth-900">{feature.title}</h3>
                <p className="mt-2 text-sm text-earth-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-center font-heading text-3xl font-bold text-earth-900 mb-8">
            Rechtlich auf der sicheren Seite
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-earth-900 mb-2">LMIV-Konform</h3>
              <p className="text-sm text-earth-600">
                Alle Pflichtangaben für Honigetiketten werden automatisch generiert.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-earth-900 mb-2">Rückverfolgbarkeit</h3>
              <p className="text-sm text-earth-600">
                Vollständige Dokumentation jeder Charge für Lebensmittelkontrollen.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-earth-900 mb-2">Export-Funktion</h3>
              <p className="text-sm text-earth-600">
                Alle Daten lassen sich für Behörden exportieren.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-earth-900 mb-2">Archivierung</h3>
              <p className="text-sm text-earth-600">
                Automatische Aufbewahrung aller Dokumentationsdaten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-heading text-2xl font-bold text-earth-900">
            Starten Sie jetzt in die Direktvermarktung
          </h2>
          <p className="mt-4 text-earth-600">
            Nutzen Sie die Beta-Phase kostenlos und optimieren Sie Ihren Honigverkauf.
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
