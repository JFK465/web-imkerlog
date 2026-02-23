import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumbs } from "@/components/layout/Breadcrumbs"
import { WebPageSchema, FAQSchema } from "@/components/seo/StructuredData"
import { siteConfig } from "@/lib/seo-config"
import { Check, QrCode, FileText, Bug, Calendar, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "Imker-Software für Hobby-Imker – Imker-Logbuch Pro",
  description: "Die perfekte Imker-Software für Hobby-Imker. Einfache Dokumentation, rechtlich konform, mobile Nutzung am Bienenstand.",
  alternates: {
    canonical: `${siteConfig.url}/hobby-imker`,
  },
  openGraph: {
    title: "Imker-Software für Hobby-Imker – Imker-Logbuch Pro",
    description: "Die perfekte Imker-Software für Hobby-Imker.",
    url: `${siteConfig.url}/hobby-imker`,
  },
}

const challenges = [
  {
    icon: FileText,
    title: "Bestandsbuch-Pflicht",
    description: "Als Imker sind Sie zur Führung eines Bestandsbuchs verpflichtet. Papier geht verloren – digital nicht.",
  },
  {
    icon: Bug,
    title: "Varroa-Monitoring",
    description: "Die Varroa-Milbe ist die größte Bedrohung. Dokumentieren Sie Befall und Behandlungserfolg.",
  },
  {
    icon: Calendar,
    title: "Termine vergessen",
    description: "Wann war die letzte Behandlung? Wann füttern? Automatische Erinnerungen helfen.",
  },
]

const benefits = [
  "Bis zu 5 Völker kostenlos verwalten",
  "QR-Codes zum Ausdrucken und Aufkleben",
  "Bestandsbuch-Export für Kontrollen",
  "Einfache Bedienung mit dem Smartphone",
  "Wettervorhersage für den Bienenstand",
]

const faqItems = [
  {
    question: "Brauche ich überhaupt eine Imker-Software?",
    answer: "Als Imker sind Sie zur Führung eines Bestandsbuchs verpflichtet. Eine digitale Lösung erleichtert dies enorm und schützt vor Bußgeldern.",
  },
  {
    question: "Kann ich die App auch offline nutzen?",
    answer: "Ja, die wichtigsten Funktionen funktionieren auch ohne Internetverbindung am Bienenstand.",
  },
  {
    question: "Wie viele Völker kann ich kostenlos verwalten?",
    answer: "Im Starter-Tarif können Sie bis zu 5 Völker kostenlos verwalten.",
  },
]

export default function HobbyImkerPage() {
  return (
    <>
      <WebPageSchema
        title="Imker-Software für Hobby-Imker – Imker-Logbuch Pro"
        description="Die perfekte Imker-Software für Hobby-Imker."
        path="/hobby-imker"
      />
      <FAQSchema items={faqItems} />
      <Breadcrumbs items={[{ name: "Hobby-Imker", href: "/hobby-imker" }]} />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-amber-50 via-orange-50 to-yellow-50 py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-800 mb-4">
                <Heart className="h-4 w-4" />
                Für Hobby-Imker
              </div>
              <h1 className="font-heading text-4xl font-extrabold tracking-tight text-earth-900 sm:text-5xl">
                Imker-Software für
                <span className="block gradient-text">Hobby-Imker</span>
              </h1>
              <p className="mt-6 text-lg text-earth-600">
                Die einfache Lösung für alle Hobby-Imker, die Zeit sparen und
                rechtlich auf der sicheren Seite sein wollen.
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
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center">
                      <QrCode className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-earth-900">Stock Nr. 3</div>
                      <div className="text-sm text-earth-500">Carnica - Nordseite</div>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-earth-500">Letzte Durchsicht</span>
                      <span className="text-earth-900">15.02.2026</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-earth-500">Volksstärke</span>
                      <span className="text-earth-900">Stark</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-earth-500">Varroa-Befall</span>
                      <span className="text-amber-600">Gering</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-center font-heading text-3xl font-bold text-earth-900 mb-12">
            Herausforderungen für Hobby-Imker
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {challenges.map((challenge, index) => (
              <div key={index} className="rounded-xl border border-honey-100 bg-white p-6">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100 mb-4">
                  <challenge.icon className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-earth-900">{challenge.title}</h3>
                <p className="mt-2 text-earth-600">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-earth-900">
            So hilft Imker-Logbuch Pro
          </h2>
          <p className="mt-4 text-earth-600 mb-12">
            Von der Dokumentation bis zur Varroa-Prognose – alles in einer App.
          </p>
          <div className="grid gap-4 md:grid-cols-2 text-left">
            <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
              <Check className="h-5 w-5 text-amber-500 mt-0.5" />
              <div>
                <h3 className="font-medium text-earth-900">QR-Code scannen</h3>
                <p className="text-sm text-earth-600">Schnell am Stock dokumentieren</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
              <Check className="h-5 w-5 text-amber-500 mt-0.5" />
              <div>
                <h3 className="font-medium text-earth-900">Automatische Erinnerungen</h3>
                <p className="text-sm text-earth-600">Nichts mehr vergessen</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
              <Check className="h-5 w-5 text-amber-500 mt-0.5" />
              <div>
                <h3 className="font-medium text-earth-900">Bestandsbuch-Export</h3>
                <p className="text-sm text-earth-600">Für Behördenkontrollen</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
              <Check className="h-5 w-5 text-amber-500 mt-0.5" />
              <div>
                <h3 className="font-medium text-earth-900">Wetter-Integration</h3>
                <p className="text-sm text-earth-600">Besser planen</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-heading text-2xl font-bold text-earth-900">
            Bereit für die digitale Imkerei?
          </h2>
          <p className="mt-4 text-earth-600">
            Starten Sie jetzt kostenlos mit der Beta-Phase.
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
