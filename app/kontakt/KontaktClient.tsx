"use client"

import { useState } from "react"
import Link from "next/link"
import { Breadcrumbs } from "@/components/layout/Breadcrumbs"
import { WebPageSchema } from "@/components/seo/StructuredData"
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function KontaktClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    betreff: "",
    nachricht: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setSubmitted(true)
    setLoading(false)
  }

  return (
    <>
      <WebPageSchema
        title="Kontakt – Imker-Logbuch Pro"
        description="Kontaktieren Sie uns für Fragen zur Bienenverwaltung-Software."
        path="/kontakt"
      />
      <Breadcrumbs items={[{ name: "Kontakt", href: "/kontakt" }]} />

      <section className="bg-gradient-to-b from-amber-50 via-orange-50 to-yellow-50 py-16 md:py-20">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <h1 className="font-heading text-4xl font-extrabold tracking-tight text-earth-900 sm:text-5xl">
            Kontakt
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-earth-600">
            Haben Sie Fragen zur Software oder möchten Sie mehr erfahren?
            Wir freuen uns auf Ihre Nachricht.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-earth-900">
                So erreichen Sie uns
              </h2>
              <p className="mt-4 text-earth-600">
                Wir sind per E-Mail, telefonisch oder über das Kontaktformular für Sie erreichbar.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-100">
                    <Mail className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-earth-900">E-Mail</h3>
                    <a
                      href="mailto:kontakt@imker-logbuch-pro.de"
                      className="mt-1 block text-sm text-earth-600 hover:text-amber-600"
                    >
                      kontakt@imker-logbuch-pro.de
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-100">
                    <Phone className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-earth-900">Telefon</h3>
                    <a
                      href="tel:+49123456789"
                      className="mt-1 block text-sm text-earth-600 hover:text-amber-600"
                    >
                      +49 (0) 123 456 789
                    </a>
                    <p className="text-xs text-earth-400 mt-1">Mo-Fr 9-17 Uhr</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-100">
                    <MapPin className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-earth-900">Standort</h3>
                    <p className="mt-1 text-sm text-earth-600">
                      Imker-Logbuch Pro<br />
                      Musterstraße 123<br />
                      12345 Musterstadt
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 p-6">
                <h3 className="font-semibold text-earth-900">
                  Noch in der Beta-Phase?
                </h3>
                <p className="mt-2 text-sm text-earth-600">
                  Wir bieten aktuell kostenlosen Zugang für alle Imker während der Beta-Phase.
                  Registrieren Sie sich einfach und starten Sie sofort.
                </p>
                <Button
                  asChild
                  className="mt-4 gradient-honey text-white shadow-warm hover:shadow-glow"
                >
                  <Link href="/signup">Kostenlos registrieren</Link>
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-2xl border border-honey-100 bg-white p-8 shadow-sm">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <CheckCircle2 className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-earth-900">
                    Nachricht gesendet!
                  </h3>
                  <p className="mt-2 text-earth-600">
                    Vielen Dank für Ihre Nachricht. Wir melden uns in Kürze bei Ihnen.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6 border-honey-200 text-earth-700 hover:bg-honey-50"
                    onClick={() => setSubmitted(false)}
                  >
                    Neue Nachricht senden
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-earth-700">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="mt-1.5 border-honey-200 focus:border-amber-500 focus:ring-amber-500"
                      placeholder="Ihr Name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-earth-700">
                      E-Mail *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="mt-1.5 border-honey-200 focus:border-amber-500 focus:ring-amber-500"
                      placeholder="ihre@email.de"
                    />
                  </div>

                  <div>
                    <Label htmlFor="betreff" className="text-earth-700">
                      Betreff
                    </Label>
                    <Input
                      id="betreff"
                      type="text"
                      value={formData.betreff}
                      onChange={(e) =>
                        setFormData({ ...formData, betreff: e.target.value })
                      }
                      className="mt-1.5 border-honey-200 focus:border-amber-500 focus:ring-amber-500"
                      placeholder="Worum geht es?"
                    />
                  </div>

                  <div>
                    <Label htmlFor="nachricht" className="text-earth-700">
                      Nachricht *
                    </Label>
                    <textarea
                      id="nachricht"
                      required
                      rows={5}
                      value={formData.nachricht}
                      onChange={(e) =>
                        setFormData({ ...formData, nachricht: e.target.value })
                      }
                      className="mt-1.5 w-full rounded-lg border border-honey-200 px-3 py-2 text-sm focus:border-amber-500 focus:ring-amber-500"
                      placeholder="Ihre Nachricht an uns..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full gradient-honey text-white shadow-warm hover:shadow-glow"
                  >
                    {loading ? (
                      "Wird gesendet..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Nachricht senden
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-center text-earth-400">
                    Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
