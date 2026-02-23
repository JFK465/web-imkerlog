import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumbs } from "@/components/layout/Breadcrumbs"
import { WebPageSchema, FAQSchema } from "@/components/seo/StructuredData"
import { siteConfig } from "@/lib/seo-config"
import { Check, Building2, Users, BarChart3, FileText, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Imkerei Software – Gewerbliche Imkereien – Imker-Logbuch Pro",
  description: "Die professionelle Software für gewerbliche Imkereien. Mehrbenutzer, API, individuelle Berichte.",
  alternates: {
    canonical: `${siteConfig.url}/imkereien`,
  },
  openGraph: {
    title: "Imkerei Software – Gewerbliche Imkereien – Imker-Logbuch Pro",
    description: "Die professionelle Software für gewerbliche Imkereien.",
    url: `${siteConfig.url}/imkereien`,
  },
}

const features = [
  {
    icon: Users,
    title: "Mehrbenutzer-Zugang",
    description: "Teilen Sie den Zugang mit Mitarbeitern und Familie. Verschiedene Berechtigungsstufen.",
  },
  {
    icon: BarChart3,
    title: "Erweiterte Analysen",
    description: "Umfangreiche Auswertungen und Statistiken für Ihre Imkerei.",
  },
  {
    icon: Building2,
    title: "Standort-Verwaltung",
    description: "Verwalten Sie mehrere Bienenstände an verschiedenen Orten zentral.",
  },
  {
    icon: FileText,
    title: "Individuelle Berichte",
    description: "Erstellen Sie maßgeschneiderte Berichte für Behörden und Partner.",
  },
]

const benefits = [
  "Unbegrenzte Völkerzahl",
  "Mehrbenutzer mit Berechtigungen",
  "API-Schnittstelle",
  "Dedizierter Support",
  "Onboarding und Schulung",
]

const faqItems = [
  {
    question: "Können mehrere Mitarbeiter gleichzeitig arbeiten?",
    answer: "Ja, der Betriebstarif ermöglicht unbegrenzte gleichzeitige Nutzer mit individuellen Berechtigungen.",
  },
  {
    question: "Gibt es eine Schnittstelle zu anderen Systemen?",
    answer: "Ja, im Betriebstarif ist eine REST-API enthalten, die Sie für Integrationen nutzen können.",
  },
  {
    question: "Bieten Sie Schulungen an?",
    answer: "Ja, im Betriebstarif ist ein Onboarding inklusive. Wir schulen Sie und Ihr Team.",
  },
]

export default function ImkereienPage() {
  return (
    <>
      <WebPageSchema
        title="Imkerei Software – Gewerbliche Imkereien – Imker-Logbuch Pro"
        description="Die professionelle Software für gewerbliche Imkereien."
        path="/imkereien"
      />
      <FAQSchema items={faqItems} />
      <Breadcrumbs items={[{ name: "Imkereien", href: "/imkereien" }]} />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-amber-50 via-orange-50 to-yellow-50 py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-800 mb-4">
                <Building2 className="h-4 w-4" />
                Für Imkereien
              </div>
              <h1 className="font-heading text-4xl font-extrabold tracking-tight text-earth-900 sm:text-5xl">
                Imkerei Software
                <span className="block gradient-text">für Profis</span>
              </h1>
              <p className="mt-6 text-lg text-earth-600">
                Die professionelle Lösung für gewerbliche Imkereien. Skalierbar,
                sicher und mit allen Funktionen für den professionellen Betrieb.
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
                  href="/kontakt"
                  className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-warm hover:shadow-glow transition-all"
                >
                  Kontakt aufnehmen
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
                  <div className="flex items-center gap-2 mb-4">
                    <Shield className="h-5 w-5 text-amber-600" />
                    <span className="font-semibold text-earth-900">Beispiel-Statistik</span>
                  </div>
                  <p className="text-xs text-earth-500 mb-4">So koennen Ihre Statistiken aussehen</p>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-earth-500">Aktive Voelker</span>
                        <span className="font-semibold text-earth-900">--</span>
                      </div>
                      <div className="h-2 bg-amber-100 rounded-full overflow-hidden">
                        <div className="h-full bg-amber-500 rounded-full" style={{ width: "0%" }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-earth-500">Honig-Ertrag</span>
                        <span className="font-semibold text-earth-900">-- kg</span>
                      </div>
                      <div className="h-2 bg-amber-100 rounded-full overflow-hidden">
                        <div className="h-full bg-amber-500 rounded-full" style={{ width: "0%" }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-earth-500">Behandlungs-Erfolg</span>
                        <span className="font-semibold text-earth-900">--%</span>
                      </div>
                      <div className="h-2 bg-amber-100 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: "0%" }} />
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
            Funktionen für gewerbliche Imkereien
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

      {/* Enterprise Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-center font-heading text-3xl font-bold text-earth-900 mb-8">
            Enterprise-Funktionen
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
              <Check className="h-5 w-5 text-amber-500 mt-0.5" />
              <div>
                <h3 className="font-medium text-earth-900">API-Zugang</h3>
                <p className="text-sm text-earth-600">REST-API für Integrationen</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
              <Check className="h-5 w-5 text-amber-500 mt-0.5" />
              <div>
                <h3 className="font-medium text-earth-900">Individuelle Berichte</h3>
                <p className="text-sm text-earth-600">Maßgeschneidert für Ihre Anforderungen</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
              <Check className="h-5 w-5 text-amber-500 mt-0.5" />
              <div>
                <h3 className="font-medium text-earth-900">Dedizierter Support</h3>
                <p className="text-sm text-earth-600">Persönlicher Ansprechpartner</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
              <Check className="h-5 w-5 text-amber-500 mt-0.5" />
              <div>
                <h3 className="font-medium text-earth-900">Onboarding & Schulung</h3>
                <p className="text-sm text-earth-600">Einführung für Ihr Team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-heading text-2xl font-bold text-earth-900">
            Interesse an der Betriebs-Version?
          </h2>
          <p className="mt-4 text-earth-600">
            Kontaktieren Sie uns für ein individuelles Angebot und eine Demo.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-3 mt-8 text-sm font-semibold text-white shadow-warm hover:shadow-glow transition-all"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </>
  )
}
