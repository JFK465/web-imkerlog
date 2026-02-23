"use client"

import { useState } from "react"
import Link from "next/link"
import { Breadcrumbs } from "@/components/layout/Breadcrumbs"
import { WebPageSchema, FAQSchema } from "@/components/seo/StructuredData"
import { Check, QrCode, FileText, Bug, Cloud, Tag, Shield, Zap, Users, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const features = [
  {
    icon: QrCode,
    title: "QR-Code am Stock",
    description: "Jeder Bienenstock erhält einen QR-Code. Einfach scannen und dokumentieren.",
  },
  {
    icon: FileText,
    title: "Digitales Bestandsbuch",
    description: "Rechtskonform gemäß Tierseuchenrecht. Alle Pflichteintragungen automatisch.",
  },
  {
    icon: Bug,
    title: "Varroa-Prognose",
    description: "Dokumentieren Sie Befall und erhalten Sie Behandlungsvorhersagen.",
  },
  {
    icon: Tag,
    title: "Honig-Chargen",
    description: "Volle Rückverfolgbarkeit vom Stock bis zum Glas.",
  },
  {
    icon: Cloud,
    title: "Wetter-Integration",
    description: "Wetterdaten direkt am Bienenstand für bessere Planung.",
  },
  {
    icon: Users,
    title: "Mehrbenutzer",
    description: "Teilen Sie den Zugang mit Familienmitgliedern oder Mitarbeitern.",
  },
]

const faqItems = [
  {
    question: "Ist die Software kostenlos?",
    answer: "Ja, während der Beta-Phase ist Imker-Logbuch Pro komplett kostenlos. Nach der Beta werden wir transparente Preise anbieten.",
  },
  {
    question: "Muss ich etwas installieren?",
    answer: "Nein, Imker-Logbuch Pro ist eine Cloud-Anwendung. Sie benötigen nur einen Browser und können sofort starten.",
  },
  {
    question: "Sind meine Daten sicher?",
    answer: "Ja, alle Daten werden auf Servern in Deutschland gespeichert. Wir achten streng auf DSGVO-Konformität.",
  },
  {
    question: "Kann ich die App offline nutzen?",
    answer: "Ja, die wichtigsten Funktionen funktionieren auch offline. Daten werden synchronisiert, sobald Sie wieder online sind.",
  },
]

export function BienenverwaltungSoftwareClient() {
  const [formData, setFormData] = useState({
    firma: "",
    name: "",
    email: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setSubmitted(true)
    setLoading(false)
  }

  return (
    <>
      <WebPageSchema
        title="Bienenverwaltung Software – Imker-Logbuch Pro"
        description="Die professionelle Bienenverwaltung Software für Hobby-Imker und Direktvermarkter."
        path="/bienenverwaltung-software"
      />
      <FAQSchema items={faqItems} />
      <Breadcrumbs items={[{ name: "Bienenverwaltung Software", href: "/bienenverwaltung-software" }]} />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-amber-50 via-orange-50 to-yellow-50 py-16 md:py-28">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-800 mb-6">
              <Sparkles className="h-4 w-4 animate-pulse" />
              Beta-Phase – Jetzt kostenlos testen
            </div>
            <h1 className="font-heading text-4xl font-extrabold tracking-tight text-earth-900 sm:text-5xl lg:text-6xl">
              Bienenverwaltung
              <span className="block gradient-text">Software</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-earth-600">
              Die professionelle Lösung für Hobby-Imker und Direktvermarkter.
              Dokumentieren Sie alles am Bienenstand – vom Smartphone aus.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-earth-600">
              <span className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-amber-600" />
                DSGVO-konform
              </span>
              <span className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-amber-600" />
                Keine Installation
              </span>
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-amber-600" />
                Made in Germany
              </span>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="gradient-honey text-white shadow-warm hover:shadow-glow text-lg px-8"
              >
                <Link href="/signup">
                  Kostenlos Beta-Zugang sichern
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-honey-300 text-earth-700 hover:bg-honey-50 text-lg px-8"
              >
                <Link href="#module">Module ansehen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-center font-heading text-3xl font-bold text-earth-900 mb-12">
            Das Problem
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-red-100 bg-red-50 p-6">
              <div className="text-3xl mb-4">📋</div>
              <h3 className="font-semibold text-red-900">Unvollständiges Bestandsbuch</h3>
              <p className="mt-2 text-sm text-red-700">
                Papierbestände gehen verloren. Bei Kontrollen fehlen wichtige Einträge.
              </p>
            </div>
            <div className="rounded-xl border border-red-100 bg-red-50 p-6">
              <div className="text-3xl mb-4">🔍</div>
              <h3 className="font-semibold text-red-900">Keine Rückverfolgung</h3>
              <p className="mt-2 text-sm text-red-700">
                Honig-Chargen lassen sich nicht zuordnen. Kunden fragen nach der Herkunft.
              </p>
            </div>
            <div className="rounded-xl border border-red-100 bg-red-50 p-6">
              <div className="text-3xl mb-4">⏰</div>
              <h3 className="font-semibold text-red-900">Zeitverlust</h3>
              <p className="mt-2 text-sm text-red-700">
                2-3 Stunden pro Woche für Suchen und Organisieren statt am Bienenstand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="module" className="py-16 md:py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-center font-heading text-3xl font-bold text-earth-900 mb-4">
            Die Lösung: Imker-Logbuch Pro
          </h2>
          <p className="text-center text-earth-600 mb-12 max-w-2xl mx-auto">
            Alles was Sie für die professionelle Bienenverwaltung brauchen – in einer App.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-xl bg-white p-6 shadow-sm border border-honey-100"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100 mb-4">
                  <feature.icon className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="font-semibold text-earth-900">{feature.title}</h3>
                <p className="mt-2 text-sm text-earth-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-earth-900">
            Starten Sie jetzt – kostenlos und unverbindlich
          </h2>
          <p className="mt-4 text-earth-600">
            Sichern Sie sich jetzt Ihren Beta-Zugang und profitieren Sie von allen Funktionen.
          </p>

          <div className="mt-8" id="beta-anmeldung">
            {submitted ? (
              <div className="rounded-xl bg-green-50 p-8 text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-4">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-green-900">
                  Willkommen bei Imker-Logbuch Pro!
                </h3>
                <p className="mt-2 text-green-700">
                  Wir haben Ihnen eine Bestätigungs-E-Mail gesendet.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-xl border border-honey-200 bg-white p-8 text-left shadow-sm">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="firma" className="text-earth-700">Firma</Label>
                    <Input
                      id="firma"
                      type="text"
                      value={formData.firma}
                      onChange={(e) => setFormData({ ...formData, firma: e.target.value })}
                      className="mt-1.5 border-honey-200 focus:border-amber-500"
                      placeholder="Ihre Imkerei (optional)"
                    />
                  </div>
                  <div>
                    <Label htmlFor="name" className="text-earth-700">Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mt-1.5 border-honey-200 focus:border-amber-500"
                      placeholder="Ihr Name"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <Label htmlFor="email" className="text-earth-700">E-Mail *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-1.5 border-honey-200 focus:border-amber-500"
                    placeholder="ihre@email.de"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="mt-6 w-full gradient-honey text-white shadow-warm hover:shadow-glow"
                >
                  {loading ? "Wird gesendet..." : "Kostenlos registrieren"}
                </Button>
                <p className="mt-4 text-xs text-center text-earth-400">
                  Keine Verpflichtung. Sie können jederzeit kündigen.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Cross Links */}
      <section className="py-12 bg-honey-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-4 md:grid-cols-4">
            <Link href="/hobby-imker" className="rounded-lg bg-white p-4 text-center hover:shadow-md transition-shadow border border-honey-100">
              <span className="font-medium text-earth-800">Hobby-Imker</span>
            </Link>
            <Link href="/direktvermarkter" className="rounded-lg bg-white p-4 text-center hover:shadow-md transition-shadow border border-honey-100">
              <span className="font-medium text-earth-800">Direktvermarkter</span>
            </Link>
            <Link href="/wissen" className="rounded-lg bg-white p-4 text-center hover:shadow-md transition-shadow border border-honey-100">
              <span className="font-medium text-earth-800">Wissen</span>
            </Link>
            <Link href="/tools" className="rounded-lg bg-white p-4 text-center hover:shadow-md transition-shadow border border-honey-100">
              <span className="font-medium text-earth-800">Tools</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
