import type { Metadata } from "next"
import { PricingSection } from "@/components/marketing/sections/PricingSection"
import { CTASection } from "@/components/marketing/sections/CTASection"
import { FAQSection } from "@/components/marketing/sections/FAQSection"
import { Breadcrumbs } from "@/components/layout/Breadcrumbs"
import { WebPageSchema, ProductSchema } from "@/components/seo/StructuredData"
import { siteConfig } from "@/lib/seo-config"
import { faqData } from "@/lib/faq-data"

export const metadata: Metadata = {
  title: "Preise – Imker-Logbuch Pro",
  description: "Transparente Preise für Imker-Software. Kostenlos starten mit der Beta-Phase. Alle Funktionen inklusive.",
  alternates: {
    canonical: `${siteConfig.url}/preise`,
  },
  openGraph: {
    title: "Preise – Imker-Logbuch Pro",
    description: "Transparente Preise für Imker-Software. Kostenlos starten mit der Beta-Phase.",
    url: `${siteConfig.url}/preise`,
    type: "website",
    locale: "de_DE",
    siteName: "Imker-Logbuch Pro",
  },
  twitter: {
    card: "summary_large_image",
    title: "Preise – Imker-Logbuch Pro",
    description: "Transparente Preise für Imker-Software. Kostenlos starten mit der Beta-Phase.",
  },
}

export default function PreisePage() {
  return (
    <>
      <WebPageSchema
        title="Preise – Imker-Logbuch Pro"
        description="Transparente Preise für Imker-Software. Kostenlos starten mit der Beta-Phase."
        path="/preise"
      />
      <ProductSchema
        name="Imker-Logbuch Pro"
        description="Bienenverwaltung Software für Hobby-Imker und Direktvermarkter"
        price="0"
      />
      <Breadcrumbs items={[{ name: "Preise", href: "/preise" }]} />

      <section className="bg-gradient-to-b from-amber-50 via-orange-50 to-yellow-50 pb-0 pt-16 md:pt-20">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <h1 className="font-heading text-4xl font-extrabold tracking-tight text-earth-900 sm:text-5xl">
            Faire Preise für Imker
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-earth-600">
            Keine versteckten Kosten, keine langen Vertragslaufzeiten.
            Starten Sie kostenlos mit der Beta-Phase.
          </p>
        </div>
      </section>

      <PricingSection />

      <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-center font-heading text-2xl font-bold text-earth-900">
            Was kostet die Imkerei ohne digitale Lösung?
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-center">
              <p className="text-2xl font-bold text-red-700">Viel Zeit</p>
              <p className="mt-2 text-sm text-red-600">Papierkram & Suchen</p>
            </div>
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 text-center">
              <p className="text-2xl font-bold text-amber-700">Rechtsrisiken</p>
              <p className="mt-2 text-sm text-amber-600">Unvollständiges Bestandsbuch</p>
            </div>
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 text-center">
              <p className="text-2xl font-bold text-amber-700">0 €</p>
              <p className="mt-2 text-sm text-amber-600">Imker-Logbuch Pro Beta</p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqData} />

      <CTASection
        problem="Zeit am Bienenstand statt am Schreibtisch"
        zeitstempel="Beta läuft – jetzt beitreten"
      />
    </>
  )
}
