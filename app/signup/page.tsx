"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, ArrowRight, ArrowLeft, Loader2 } from "lucide-react"
import Link from "next/link"

interface FormData {
  name: string
  email: string
  rolle: string
  imkereiName: string
  bienenstoecke: string
  newsletter: boolean
  datenschutz: boolean
}

export default function SignupPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    rolle: "",
    imkereiName: "",
    bienenstoecke: "",
    newsletter: true,
    datenschutz: false,
  })

  const updateFormData = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.datenschutz) {
      alert("Bitte stimmen Sie der Datenschutzerklärung zu.")
      return
    }

    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // In production, send to actual API
    console.log("Signup data:", formData)

    setIsLoading(false)
    setStep(4) // Success step
  }

  const steps = [
    { number: 1, title: "Kontakt" },
    { number: 2, title: "Über Sie" },
    { number: 3, title: "Bestätigen" },
  ]

  return (
    <div className="min-h-screen bg-background py-12 md:py-24">
      <div className="container px-4 md:px-6 max-w-lg mx-auto">
        {/* Progress Indicator */}
        {step < 4 && (
          <div className="mb-8">
            <div className="flex items-center justify-between">
              {steps.map((s) => (
                <div key={s.number} className="flex items-center">
                  <div
                    className={`h-10 w-10 rounded-full flex items-center justify-center font-medium ${
                      step >= s.number
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {step > s.number ? (
                      <CheckCircle2 className="h-5 w-5" />
                    ) : (
                      s.number
                    )}
                  </div>
                  {s.number < steps.length && (
                    <div
                      className={`h-1 w-12 md:w-24 mx-2 ${
                        step > s.number ? "bg-primary" : "bg-muted"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-2">
              Schritt {step} von {steps.length}
            </p>
          </div>
        )}

        {/* Step 1: Contact */}
        {step === 1 && (
          <Card>
            <CardHeader>
              <CardTitle>Willkommen bei Imker-Logbuch Pro</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Ihr Name</Label>
                <Input
                  id="name"
                  placeholder="Max Mustermann"
                  value={formData.name}
                  onChange={(e) => updateFormData("name", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-Mail-Adresse</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="max@imkerei.de"
                  value={formData.email}
                  onChange={(e) => updateFormData("email", e.target.value)}
                />
              </div>
              <Button
                className="w-full"
                onClick={() => setStep(2)}
                disabled={!formData.name || !formData.email}
              >
                Weiter
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                Ihre Daten werden vertraulich behandelt. Keine Spam-Mails.
              </p>
            </CardContent>
          </Card>
        )}

        {/* Step 2: About */}
        {step === 2 && (
          <Card>
            <CardHeader>
              <CardTitle>Erzählen Sie uns mehr</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="imkereiName">Name Ihrer Imkerei (optional)</Label>
                <Input
                  id="imkereiName"
                  placeholder="z.B. Honig von der Wiese"
                  value={formData.imkereiName}
                  onChange={(e) =>
                    updateFormData("imkereiName", e.target.value)
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bienenstoecke">Anzahl Ihrer Völker</Label>
                <Input
                  id="bienenstoecke"
                  type="number"
                  placeholder="z.B. 5"
                  value={formData.bienenstoecke}
                  onChange={(e) =>
                    updateFormData("bienenstoecke", e.target.value)
                  }
                />
              </div>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => setStep(1)}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Zurück
                </Button>
                <Button className="flex-1" onClick={() => setStep(3)}>
                  Weiter
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Confirm */}
        {step === 3 && (
          <Card>
            <CardHeader>
              <CardTitle>Fast geschafft!</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted rounded-lg p-4 space-y-2">
                <p className="text-sm">
                  <strong>Name:</strong> {formData.name}
                </p>
                <p className="text-sm">
                  <strong>E-Mail:</strong> {formData.email}
                </p>
                {formData.imkereiName && (
                  <p className="text-sm">
                    <strong>Imkerei:</strong> {formData.imkereiName}
                  </p>
                )}
                {formData.bienenstoecke && (
                  <p className="text-sm">
                    <strong>Völker:</strong> {formData.bienenstoecke}
                  </p>
                )}
              </div>

              <div className="space-y-3">
                <label className="flex items-start gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={formData.newsletter}
                    onChange={(e) =>
                      updateFormData("newsletter", e.target.checked)
                    }
                    className="mt-1"
                  />
                  <span className="text-muted-foreground">
                    Ich möchte über Updates und neue Funktionen informiert
                    werden.
                  </span>
                </label>
                <label className="flex items-start gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={formData.datenschutz}
                    onChange={(e) =>
                      updateFormData("datenschutz", e.target.checked)
                    }
                    className="mt-1"
                    required
                  />
                  <span className="text-muted-foreground">
                    Ich stimme der Verarbeitung meiner Daten gemäß der{" "}
                    <Link href="/datenschutz" className="underline">
                      Datenschutzerklärung
                    </Link>{" "}
                    zu. *
                  </span>
                </label>
              </div>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => setStep(2)}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Zurück
                </Button>
                <Button
                  className="flex-1"
                  onClick={handleSubmit}
                  disabled={isLoading || !formData.datenschutz}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Wird gesendet...
                    </>
                  ) : (
                    "Anmeldung absenden"
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 4: Success */}
        {step === 4 && (
          <Card className="text-center">
            <CardContent className="pt-8 pb-8">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="h-10 w-10 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4">
                Sie sind dabei, {formData.name.split(" ")[0]}!
              </h2>
              <p className="text-muted-foreground mb-6">
                Vielen Dank für Ihr Interesse an Imker-Logbuch Pro.
              </p>
              <div className="bg-muted rounded-lg p-4 text-left mb-6">
                <p className="text-sm font-medium mb-2">Was passiert jetzt?</p>
                <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
                  <li>Sie erhalten eine Bestätigungs-E-Mail</li>
                  <li>Wir melden uns persönlich bei Ihnen</li>
                  <li>Beta-Zugang erhalten Sie sofort</li>
                </ol>
              </div>
              <Button asChild>
                <Link href="/">Zurück zur Startseite</Link>
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
