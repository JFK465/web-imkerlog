"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Breadcrumbs } from "@/components/layout/Breadcrumbs"
import { WebPageSchema } from "@/components/seo/StructuredData"
import { Calculator, Info, ArrowRight, Check } from "lucide-react"

export function HonigRechnerClient() {
  const [volker, setVolker] = useState(5)
  const [durchschnitt, setDurchschnitt] = useState(30)
  const [standorte, setStandorte] = useState(1)

  const ergebnis = useMemo(() => {
    const gesamtErtrag = volker * durchschnitt * standorte
    return {
      gesamt: gesamtErtrag,
      glas500: Math.round(gesamtErtrag / 0.5),
      glas250: Math.round(gesamtErtrag / 0.25),
      glaser: Math.round(gesamtErtrag / 0.5) * 2.5,
    }
  }, [volker, durchschnitt, standorte])

  return (
    <>
      <WebPageSchema
        title="Honig-Ernte-Rechner – Ertrag berechnen – Imker-Logbuch Pro"
        description="Berechnen Sie Ihren voraussichtlichen Honig-Ertrag basierend auf Ihrer Völkerzahl."
        path="/tools/honig-rechner"
      />
      <Breadcrumbs items={[
        { name: "Tools", href: "/tools" },
        { name: "Honig-Ernte-Rechner", href: "/tools/honig-rechner" }
      ]} />

      <section className="bg-gradient-to-b from-amber-50 via-orange-50 to-yellow-50 py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="flex items-center gap-2 text-sm text-amber-700 mb-4">
            <Calculator className="h-4 w-4" />
            Tool
          </div>
          <h1 className="font-heading text-3xl font-extrabold tracking-tight text-earth-900 sm:text-4xl">
            Honig-Ernte-Rechner
          </h1>
          <p className="mt-4 text-lg text-earth-600">
            Berechnen Sie Ihren voraussichtlichen Honig-Ertrag basierend auf Ihrer Völkerzahl.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="rounded-2xl border border-honey-200 bg-white p-8 shadow-sm">
            <h2 className="font-heading text-lg font-semibold text-earth-900 mb-6">
              Ihre Daten
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-earth-700 mb-2">
                  Anzahl der Völker
                </label>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={volker}
                  onChange={(e) => setVolker(Number(e.target.value))}
                  className="w-full h-2 bg-honey-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between mt-2">
                  <span className="text-sm text-earth-500">1 Volk</span>
                  <span className="font-semibold text-earth-900">{volker} Völker</span>
                  <span className="text-sm text-earth-500">100 Völker</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-earth-700 mb-2">
                  Durchschnittsertrag pro Volk (kg)
                </label>
                <input
                  type="range"
                  min="5"
                  max="80"
                  value={durchschnitt}
                  onChange={(e) => setDurchschnitt(Number(e.target.value))}
                  className="w-full h-2 bg-honey-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between mt-2">
                  <span className="text-sm text-earth-500">5 kg</span>
                  <span className="font-semibold text-earth-900">{durchschnitt} kg</span>
                  <span className="text-sm text-earth-500">80 kg</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-earth-700 mb-2">
                  Anzahl der Standorte
                </label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={standorte}
                  onChange={(e) => setStandorte(Number(e.target.value))}
                  className="w-full h-2 bg-honey-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between mt-2">
                  <span className="text-sm text-earth-500">1 Standort</span>
                  <span className="font-semibold text-earth-900">{standorte} Standorte</span>
                  <span className="text-sm text-earth-500">10 Standorte</span>
                </div>
              </div>
            </div>

            {/* Ergebnis */}
            <div className="mt-8 p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl">
              <h3 className="font-heading text-lg font-semibold text-earth-900 mb-4">
                Voraussichtlicher Ertrag
              </h3>
              <div className="text-4xl font-bold text-amber-600 mb-4">
                {ergebnis.gesamt} kg
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="bg-white rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-earth-900">{ergebnis.glas500}</div>
                  <div className="text-xs text-earth-500">500g Gläser</div>
                </div>
                <div className="bg-white rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-earth-900">{ergebnis.glas250}</div>
                  <div className="text-xs text-earth-500">250g Gläser</div>
                </div>
                <div className="bg-white rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-earth-900">~{ergebnis.glaser.toFixed(1)} €</div>
                  <div className="text-xs text-earth-500">~Umsatz (2,50€/Gl)</div>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-start gap-2 text-sm text-earth-500">
              <Info className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <p>
                Dies ist eine grobe Schätzung. Der tatsächliche Ertrag hängt von vielen
                Faktoren ab: Wetter, Trachtangebot, Volksstärke, Varroa-Befall und mehr.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-heading text-xl font-bold text-earth-900">
            Möchten Sie Ihren Ertrag professionell dokumentieren?
          </h2>
          <p className="mt-4 text-earth-600">
            Mit Imker-Logbuch Pro können Sie alle Ernten dokumentieren und behalten
            den Überblick über Ihre Produktion.
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-3 mt-6 text-sm font-semibold text-white shadow-warm hover:shadow-glow transition-all"
          >
            Kostenlos starten
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
