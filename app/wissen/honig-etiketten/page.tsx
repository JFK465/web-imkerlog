import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumbs } from "@/components/layout/Breadcrumbs"
import { WebPageSchema } from "@/components/seo/StructuredData"
import { siteConfig } from "@/lib/seo-config"
import { Tag, Check, AlertCircle, Info } from "lucide-react"

export const metadata: Metadata = {
  title: "Honig-Etikett – Pflichtangaben und Gestaltung",
  description: "Welche Angaben müssen auf das Honig-Etikett? Rechtliche Anforderungen und praktische Tipps.",
  alternates: {
    canonical: `${siteConfig.url}/wissen/honig-etiketten`,
  },
}

export default function HonigEtikettenPage() {
  return (
    <>
      <WebPageSchema
        title="Honig-Etikett – Pflichtangaben und Gestaltung"
        description="Welche Angaben müssen auf das Honig-Etikett? Rechtliche Anforderungen und praktische Tipps."
        path="/wissen/honig-etiketten"
      />
      <Breadcrumbs items={[
        { name: "Wissen", href: "/wissen" },
        { name: "Honig-Kennzeichnung", href: "/wissen/honig-etiketten" }
      ]} />

      <section className="bg-gradient-to-b from-amber-50 via-orange-50 to-yellow-50 py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="flex items-center gap-2 text-sm text-amber-700 mb-4">
            <Tag className="h-4 w-4" />
            Rechtliches Wissen
          </div>
          <h1 className="font-heading text-3xl font-extrabold tracking-tight text-earth-900 sm:text-4xl">
            Honig-Etikett gestalten
          </h1>
          <p className="mt-4 text-lg text-earth-600">
            Welche Angaben müssen auf das Honig-Etikett? Hier finden Sie alle
            rechtlichen Anforderungen für die Kennzeichnung.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="prose prose-stone prose-amber max-w-none">
            <h2>Pflichtangaben für Honig</h2>
            <p>
              Die Kennzeichnung von Honig ist in der <strong>Lebensmittelinformations-Verordnung (LMIV)</strong>
              und der <strong>Honigverordnung</strong> geregelt. Folgende Angaben sind zwingend erforderlich:
            </p>

            <h3>1. Verkehrsbezeichnung</h3>
            <p>
              Es muss eindeutig "Honig" oder eine zulässige Bezeichnung wie
              "Blütenhonig", "Waldhonig" oder "Honigtauhonig" angegeben werden.
            </p>

            <h3>2. Füllmenge</h3>
            <p>
              Die Netto-Füllmenge muss in ml oder g angegeben werden, z.B. "500 g".
              Ab 2024 gelten neue Regelungen.
            </p>

            <h3>3. Mindesthaltbarkeitsdatum (MHD)</h3>
            <p>
              Mindestens "Mindestens haltbar bis Ende:" gefolgt von Monat und Jahr.
              Bei Honig beträgt das MHD in der Regel 2-3 Jahre.
            </p>

            <h3>4. Name und Anschrift</h3>
            <p>
              Der Name oder die Firma des Herstellers/Abfüllers und die Anschrift
              müssen angegeben werden.
            </p>

            <h3>5. Ursprungsland</h3>
            <p>
              "Herkunft: Deutschland" oder das tatsächliche Ursprungsland muss
              angegeben werden. Bei Mischungen: "EU"/"Nicht-EU" oder Länder.
            </p>

            <h3>6. Chargennummer</h3>
            <p>
              Die Chargennummer dient der Rückverfolgbarkeit. Sie muss auf dem
              Etikett oder der Verpackung angebracht sein.
            </p>

            <h3>7. Zutatenverzeichnis (bei Mischungen)</h3>
            <p>
              Bei Honig mit Zusätzen (z.B. Nüssen) müssen alle Zutaten aufgelistet werden.
            </p>

            <h2>Empfohlene Angaben</h2>
            <p>Folgende Angaben sind nicht verpflichtend, aber empfehlenswert:</p>
            <ul>
              <li>Erntejahr</li>
              <li>Honigsorten (falls zutreffend)</li>
              <li>Imkerei-Name und Logo</li>
              <li>Internetseite</li>
              <li>Aufbewahrungshinweise</li>
            </ul>

            <h2>Allergenkennzeichnung</h2>
            <p>
              Honig selbst enthält keine deklarationspflichtigen Allergene.
              Bei Produkten mit Honigzusätzen ist jedoch Vorsicht geboten.
            </p>
          </div>
        </div>
      </section>

      {/* Imker-Logbuch Pro Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="rounded-xl bg-white p-8 shadow-sm">
            <h2 className="font-heading text-xl font-bold text-earth-900 mb-4">
              Imker-Logbuch Pro: Etiketten-Generator
            </h2>
            <p className="text-earth-600 mb-6">
              Erstellen Sie rechtskonforme Etiketten mit allen Pflichtangaben –
              inklusive Chargennummern und Rückverfolgbarkeit.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-amber-500 mt-0.5" />
                <span className="text-earth-700">Automatische Chargennummern</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-amber-500 mt-0.5" />
                <span className="text-earth-700">Alle Pflichtangaben integriert</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-amber-500 mt-0.5" />
                <span className="text-earth-700">Druckfertige Vorlagen</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-amber-500 mt-0.5" />
                <span className="text-earth-700">Rückverfolgbarkeit aus dem Bestandsbuch</span>
              </li>
            </ul>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3 mt-6 text-sm font-semibold text-white shadow-warm hover:shadow-glow transition-all"
            >
              Kostenlos starten
            </Link>
          </div>
        </div>
      </section>

      {/* Related Topics */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="font-heading text-xl font-bold text-earth-900 mb-6">
            Verwandte Themen
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/direktvermarkter"
              className="rounded-lg border border-honey-100 p-4 hover:border-honey-200 hover:bg-honey-50 transition-colors"
            >
              <div className="font-medium text-earth-800">Direktvermarktung</div>
              <div className="text-sm text-earth-500 mt-1">Honig verkaufen mit System</div>
            </Link>
            <Link
              href="/wissen/bestandsbuch"
              className="rounded-lg border border-honey-100 p-4 hover:border-honey-200 hover:bg-honey-50 transition-colors"
            >
              <div className="font-medium text-earth-800">Bestandsbuch-Pflicht</div>
              <div className="text-sm text-earth-500 mt-1">Dokumentationspflichten für Imker</div>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
