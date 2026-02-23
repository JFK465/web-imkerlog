import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumbs } from "@/components/layout/Breadcrumbs"
import { WebPageSchema } from "@/components/seo/StructuredData"
import { siteConfig } from "@/lib/seo-config"
import { Bug, Check, AlertTriangle, Thermometer, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "Varroa-Monitoring – Erkennung, Behandlung und Vorbeugung",
  description: "Alles über die Varroa-Milbe: Wie Sie einen Befall erkennen,正确的 Behandlung durchführen und vorbeugen.",
  alternates: {
    canonical: `${siteConfig.url}/wissen/varroa`,
  },
}

export default function VarroaPage() {
  return (
    <>
      <WebPageSchema
        title="Varroa-Monitoring – Erkennung, Behandlung und Vorbeugung"
        description="Alles über die Varroa-Milbe: Wie Sie einen Befall erkennen, Behandlung durchführen und vorbeugen."
        path="/wissen/varroa"
      />
      <Breadcrumbs items={[
        { name: "Wissen", href: "/wissen" },
        { name: "Varroa-Monitoring", href: "/wissen/varroa" }
      ]} />

      <section className="bg-gradient-to-b from-amber-50 via-orange-50 to-yellow-50 py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="flex items-center gap-2 text-sm text-amber-700 mb-4">
            <Bug className="h-4 w-4" />
            Praxis-Wissen
          </div>
          <h1 className="font-heading text-3xl font-extrabold tracking-tight text-earth-900 sm:text-4xl">
            Varroa-Monitoring
          </h1>
          <p className="mt-4 text-lg text-earth-600">
            Die Varroa-Milbe ist der größte Feind unserer Honigbienen. Erfahren Sie,
            wie Sie einen Befall erkennen und behandeln.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="prose prose-stone prose-amber max-w-none">
            <h2>Was ist Varroa?</h2>
            <p>
              Die Varroa destructor ist eine Milbe, die sich von
              Bienenblut und Bienenpuppen ernährt. Sie gilt als eine der
              größten Bedrohungen für die Honigbiene weltweit und kann
              ganze Völker zum Zusammenbruch bringen.
            </p>

            <h2>Befall erkennen</h2>
            <p>Es gibt mehrere Methoden, einen Varroa-Befall festzustellen:</p>
            <ul>
              <li><strong>Schüttelprobe:</strong> 300 Bienen in Spiritus schütteln, Milben zählen</li>
              <li><strong>Windelprobe:</strong> Milben auf der Windel nach 3 Tagen zählen</li>
              <li><strong>Befallene Brut:</strong> Verfärbte, schließende Brut cells with visible mites</li>
              <li><strong>Stockwinden:</strong> Verfall des Volks im Spätsommer/Herbst</li>
            </ul>

            <h2>Schadschwelle</h2>
            <p>
              Die Schadschwelle liegt bei etwa <strong>3-5 Varroamilben pro Tag</strong>
              im Sommer (natürlicher Milbenfall). Bei Überschreitung sollte eine
              Behandlung erfolgen.
            </p>

            <h2>Behandlungsmethoden</h2>
            <p>Es gibt verschiedene zugelassene Behandlungsmethoden:</p>
            <ul>
              <li><strong>Oxalsäure:</strong> Tropfen oder Sprühen im Winter, wenn keine Brut</li>
              <li><strong>Ameisensäure:</strong> Verdunster, besonders im Sommer</li>
              <li><strong>Thymol:</strong> Langzeitbehandlung,部分地区 zugelassen</li>
              <li><strong>Wärmebehandlung:</strong> Brutwärmekammer, professionell</li>
            </ul>

            <h2>Vorbeugung</h2>
            <p>So beugen Sie einem starken Befall vor:</p>
            <ul>
              <li>Regelmäßige Kontrollen durchführen</li>
              <li>Schwache Völker frühzeitig behandeln</li>
              <li>Brutpause durch Königinnen-zucht</li>
              <li>Saubere Gerätschaften verwenden</li>
              <li>Keine Völker aus unbekannten Quellen zukaufen</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Imker-Logbuch Pro Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="rounded-xl bg-white p-8 shadow-sm">
            <h2 className="font-heading text-xl font-bold text-earth-900 mb-4">
              Imker-Logbuch Pro für Varroa-Dokumentation
            </h2>
            <p className="text-earth-600 mb-6">
              Dokumentieren Sie jeden Behandlungsschritt und behalten Sie den
              Überblick über den Befallsverlauf.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-amber-500 mt-0.5" />
                <span className="text-earth-700">Automatische Schadschwelle-Berechnung</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-amber-500 mt-0.5" />
                <span className="text-earth-700">Behandlungs-Erinnerungen</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-amber-500 mt-0.5" />
                <span className="text-earth-700">Langzeit-Statistiken</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-amber-500 mt-0.5" />
                <span className="text-earth-700">Windel-Protokoll</span>
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
              href="/wissen/bestandsbuch"
              className="rounded-lg border border-honey-100 p-4 hover:border-honey-200 hover:bg-honey-50 transition-colors"
            >
              <div className="font-medium text-earth-800">Bestandsbuch-Pflicht</div>
              <div className="text-sm text-earth-500 mt-1">Dokumentationspflichten für Imker</div>
            </Link>
            <Link
              href="/wissen/imker-kalender"
              className="rounded-lg border border-honey-100 p-4 hover:border-honey-200 hover:bg-honey-50 transition-colors"
            >
              <div className="font-medium text-earth-800">Imker-Kalender</div>
              <div className="text-sm text-earth-500 mt-1">Jahresplan für Imker</div>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
