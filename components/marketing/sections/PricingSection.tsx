"use client"

import Link from "next/link"
import { Check, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const tiers = [
  {
    name: "Starter",
    price: "0",
    description: "Perfekt für Einsteiger",
    features: [
      "Bis 5 Völker verwalten",
      "Basis Stockkarten",
      "QR-Code Generierung",
      "Bestandsbuch-Export",
      "E-Mail Support",
    ],
    cta: "Kostenlos starten",
    href: "/signup",
  },
  {
    name: "Profi",
    price: "9",
    description: "Für ambitionierte Imker",
    features: [
      "Unbegrenzte Völker",
      "Erweiterte Analysen",
      "Chargenverfolgung Honig",
      "Varroa-Prognose",
      "Wetter-Integration",
      "Prioritäts-Support",
    ],
    cta: "Kostenlos starten",
    href: "/signup",
    highlighted: true,
  },
  {
    name: "Betrieb",
    price: "29",
    description: "Für gewerbliche Imkereien",
    features: [
      "Alles aus Profi",
      "Mehrbenutzer-Zugang",
      "API-Zugang",
      "Individuelle Berichte",
      "Dedizierter Ansprechpartner",
      "Onboarding & Schulung",
    ],
    cta: "Kontakt aufnehmen",
    href: "/kontakt",
  },
]

export function PricingSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border p-8 ${
                tier.highlighted
                  ? "border-amber-300 bg-gradient-to-b from-amber-50 to-orange-50 shadow-lg shadow-amber-100"
                  : "border-honey-100 bg-white"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-1 text-sm font-medium text-white shadow-sm">
                    <Sparkles className="h-4 w-4" />
                    Beliebt
                  </span>
                </div>
              )}

              <div className="text-center">
                <h3 className="text-lg font-semibold text-earth-900">{tier.name}</h3>
                <p className="mt-2 text-sm text-earth-500">{tier.description}</p>
              </div>

              <div className="mt-6 text-center">
                <span className="text-4xl font-bold text-earth-900">{tier.price === "0" ? "Kostenlos" : `${tier.price}€`}</span>
                {tier.price !== "0" && <span className="text-earth-500">/Monat</span>}
              </div>

              <ul className="mt-8 space-y-4">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 shrink-0 text-amber-500" />
                    <span className="text-sm text-earth-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={`mt-8 w-full ${
                  tier.highlighted
                    ? "gradient-honey text-white shadow-warm hover:shadow-glow"
                    : "bg-earth-100 text-earth-800 hover:bg-earth-200"
                }`}
              >
                <Link href={tier.href}>{tier.cta}</Link>
              </Button>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-earth-500">
          Alle Preise inkl. MwSt. 14 Tage kostenlos testen, jederzeit kündbar.
        </p>
      </div>
    </section>
  )
}
