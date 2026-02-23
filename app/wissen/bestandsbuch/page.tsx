import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumbs } from "@/components/layout/Breadcrumbs"
import { WebPageSchema } from "@/components/seo/StructuredData"
import { siteConfig } from "@/lib/seo-config"
import { FileText, Check, AlertCircle, Calendar, ClipboardList } from "lucide-react"

export const metadata: Metadata = {
  title: "Bestandsbuch-Pflicht für Imker – Was muss eingetragen werden?",
  description: "Welche Eintragungen sind im Bestandsbuch Pflicht? Alle rechtlichen Anforderungen für Imker in Deutschland.",
  alternates: {
    canonical: `${siteConfig.url}/wissen/bestandsbuch`,
  },
}

export default function BestandsbuchPage() {
  return (
    <>
      <WebPageSchema
        title="Bestandsbuch-Pflicht für Imker – Was muss eingetragen werden?"
        description="Welche Eintragungen sind im Bestandsbuch Pflicht? Alle rechtlichen Anforderungen für Imker in Deutschland."
        path="/wissen/bestandsbuch"
      />
      <Breadcrumbs items={[
        { name: "Wissen", href: "/wissen" },
        { name: "Bestandsbuch-Pflicht", href: "/wissen/bestandsbuch" }
      ]} />

      <section className="bg-gradient-to-b from-amber-50 via-orange-50 to-yellow-50 py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="flex items-center gap-2 text-sm text-amber-700 mb-4">
            <FileText className="h-4 w-4" />
            Rechtliches Wissen
          </div>
          <h1 className="font-heading text-3xl font-extrabold tracking-tight text-earth-900 sm:text-4xl">
            Bestandsbuch-Pflicht für Imker
          </h1>
          <p className="mt-4 text-lg text-earth-600">
            Was Sie als Imker über das Bestandsbuch wissen müssen und welche
            Eintragungen gesetzlich vorgeschrieben sind.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="prose prose-stone prose-amber max-w-none">
            <h2>Was ist die Bestandsbuch-Pflicht?</h2>
            <p>
              Jeder Imker in Deutschland ist verpflichtet, ein Bestandsbuch zu führen.
              Diese Pflicht ergibt sich aus der <strong>Tierseuchenverordnung (TierSeuchV)</strong>.
              Das Bestandsbuch dient der Seuchenprävention und ermöglicht bei einem
              Ausbruch die Nachverfolgung von Bienenbewegungen.
            </p>

            <h2>Pflichtangaben im Bestandsbuch</h2>
            <p>Folgende Angaben müssen Sie dokumentieren:</p>
            <ul>
              <li>Standort des Bienenstands (Adresse, GPS-Koordinaten)</li>
              <li>Anzahl der Völker (mindestens jährlich aktualisiert)</li>
              <li>Verkäufe und Schenkungen von Bienen</li>
              <li>Käufe und Geschenke von Bienen</li>
              <li>Verbringungen von Bienenständen</li>
              <li>Behandlungen gegen Varroa-Milben</li>
              <li>Verendete Bienen (auffällige Mengen)</li>
              <li>Datum der jeweiligen Eintragung</li>
            </ul>

            <h2>Aufbewahrungspflicht</h2>
            <p>
              Das Bestandsbuch muss <strong>mindestens drei Jahre</strong> aufbewahrt
              werden. Bei Seuchenverdacht kann die zuständige Behörde die Vorlage
              verlangen. Auch nach Auflösung der Imkerei gilt die Aufbewahrungspflicht.
            </p>

            <h2>Papier oder Digital?</h2>
            <p>
              Die TierSeuchV schreibt kein bestimmtes Format vor. Sie können Ihr
              Bestandsbuch handschriftlich in einem Ordner führen oder digital mit
              einer Software wie Imker-Logbuch Pro. Die digitale Variante bietet
              erhebliche Vorteile:
            </p>
            <ul>
              <li>Schnelle Durchsuchbarkeit</li>
              <li>Automatische Erinnerungen</li>
              <li> Einfacher Export für Behörden</li>
              <li>Kein Papierverlust</li>
              <li>Ortungsunabhängiger Zugriff</li>
            </ul>

            <h2>Was passiert bei Verstößen?</h2>
            <p>
              Bei fehlendem oder unvollständigem Bestandsbuch können Bußgelder
              verhängt werden. Im Worst-Fall kann dies auch den Verlust der
              Tierhaltungserlaubnis zur Folge haben.
            </p>
          </div>
        </div>
      </section>

      {/* Imker-Logbuch Pro Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="rounded-xl bg-white p-8 shadow-sm">
            <h2 className="font-heading text-xl font-bold text-earth-900 mb-4">
              Wie Imker-Logbuch Pro hilft
            </h2>
            <p className="text-earth-600 mb-6">
              Imker-Logbuch Pro macht die Bestandsbuch-Führung einfach und
              rechtskonform. Alle Pflichteintragungen werden automatisch erfasst
              und können jederzeit exportiert werden.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-amber-500 mt-0.5" />
                <span className="text-earth-700">Automatische Standort-Erfassung</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-amber-500 mt-0.5" />
                <span className="text-earth-700">Dokumentation aller Bienenbewegungen</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-amber-500 mt-0.5" />
                <span className="text-earth-700">Behandlungsnachweise für Varroa</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-amber-500 mt-0.5" />
                <span className="text-earth-700">Export für Behörden</span>
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
              href="/wissen/varroa"
              className="rounded-lg border border-honey-100 p-4 hover:border-honey-200 hover:bg-honey-50 transition-colors"
            >
              <div className="font-medium text-earth-800">Varroa-Monitoring</div>
              <div className="text-sm text-earth-500 mt-1">Behandlung und Dokumentation</div>
            </Link>
            <Link
              href="/wissen/honig-etiketten"
              className="rounded-lg border border-honey-100 p-4 hover:border-honey-200 hover:bg-honey-50 transition-colors"
            >
              <div className="font-medium text-earth-800">Honig-Kennzeichnung</div>
              <div className="text-sm text-earth-500 mt-1">Pflichtangaben auf dem Etikett</div>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
