"use client";

import { useState } from "react";
import Link from "next/link";
import { FAQSchema } from "@/components/seo/StructuredData";
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  Gift,
  Users,
  Headphones,
  Rocket,
  CreditCard,
  Tag,
  MessageSquare,
  QrCode,
  FileText,
  Bug,
  Lock,
  Server,
  FileCheck,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: QrCode,
    title: "QR-Code am Stock",
    description:
      "Jeder Bienenstock erhält einen QR-Code. Einfach scannen und dokumentieren – direkt am Bienenstand.",
  },
  {
    icon: FileText,
    title: "Digitales Bestandsbuch",
    description:
      "Rechtskonform gemäß Tierseuchenrecht. Alle Pflichteintragungen automatisch erfasst.",
  },
  {
    icon: Bug,
    title: "Varroa-Prognose",
    description:
      "Dokumentiere Befall und erhalte Behandlungsvorhersagen basierend auf Wetter und Befallsdaten.",
  },
];

const faqItems = [
  {
    question: "Ist die Software kostenlos?",
    answer:
      "Ja, während der Beta-Phase ist BienenManager komplett kostenlos. Nach der Beta bieten wir transparente Preise an.",
  },
  {
    question: "Muss ich etwas installieren?",
    answer:
      "Nein, BienenManager ist eine Cloud-Anwendung. Du benötigst nur einen Browser und kannst sofort starten.",
  },
  {
    question: "Sind meine Daten sicher?",
    answer:
      "Ja, alle Daten werden auf Servern in Deutschland gespeichert. Wir achten streng auf DSGVO-Konformität.",
  },
  {
    question: "Kann ich die App offline nutzen?",
    answer:
      "Die wichtigsten Funktionen funktionieren auch offline. Daten werden synchronisiert, sobald du wieder online bist.",
  },
];

export function BienenverwaltungSoftwareClient() {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    privacy: false,
    newsletter: true,
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.privacy) {
      setErrorMessage("Bitte stimme der Datenschutzerklärung zu.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    const nameParts = formData.name.trim().split(" ");
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";

    try {
      const response = await fetch("/api/beta", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email: formData.email,
          company: formData.company,
          newsletter: formData.newsletter,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Ein Fehler ist aufgetreten");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Verbindungsfehler. Bitte versuche es erneut.");
    }
  };

  const handleReset = () => {
    setStatus("idle");
    setFormData({
      company: "",
      name: "",
      email: "",
      privacy: false,
      newsletter: true,
    });
    setErrorMessage("");
  };

  if (status === "success") {
    return (
      <main className="min-h-screen bg-gradient-to-br from-amber-900 via-orange-900 to-amber-900">
        <FAQSchema items={faqItems} />
        <div className="py-24 px-6 min-h-screen flex items-center">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mb-8 shadow-lg shadow-green-500/30">
              <CheckCircle2 className="w-14 h-14 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Willkommen bei BienenManager!
            </h2>
            <p className="text-xl text-amber-100 mb-10">
              Deine Anfrage ist bei uns eingegangen. Wir melden uns per E-Mail,
              sobald dein Beta-Zugang bereit ist.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-10 text-left border border-white/10">
              <h3 className="font-semibold text-white mb-4">
                Was passiert als Nächstes?
              </h3>
              <ul className="space-y-3 text-amber-100">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Du erhältst eine E-Mail mit deinen Zugangsdaten</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Persönliches Onboarding durch unser Team</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Voller Zugang zu allen Beta-Features</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                size="lg"
                onClick={handleReset}
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                Weitere Person registrieren
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-white text-amber-900 hover:bg-amber-50"
              >
                <Link href="/wissen/bestandsbuch">
                  Bestandsbuch-Guide lesen
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <FAQSchema items={faqItems} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-900 via-orange-900 to-amber-900 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 honeycomb-pattern opacity-20" />

        <div className="relative mx-auto max-w-6xl px-6">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-amber-500/25">
              <Rocket className="w-4 h-4" />
              BETA-PHASE – Kostenlos testen
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center max-w-4xl mx-auto leading-tight">
            Dein digitales Imker-Logbuch für
            <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
              {" "}
              erfolgreiche Bienenzucht
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-amber-100 text-center max-w-3xl mx-auto mt-6">
            Werde Beta-Tester und erhalte lebenslang 50% Rabatt. Gestalte aktiv
            die Entwicklung mit und profitiere von allen Features – komplett
            kostenlos während der Beta-Phase.
          </p>

          {/* Benefits Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center border border-white/10 hover:bg-white/15 transition-colors">
              <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Tag className="w-6 h-6 text-amber-300" />
              </div>
              <p className="font-semibold text-white">50% Lifetime-Rabatt</p>
              <p className="text-sm text-amber-200 mt-1">Nach der Beta-Phase</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center border border-white/10 hover:bg-white/15 transition-colors">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Gift className="w-6 h-6 text-green-400" />
              </div>
              <p className="font-semibold text-white">Kostenlos testen</p>
              <p className="text-sm text-amber-200 mt-1">Während der Beta</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center border border-white/10 hover:bg-white/15 transition-colors">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-yellow-300" />
              </div>
              <p className="font-semibold text-white">Direkter Einfluss</p>
              <p className="text-sm text-amber-200 mt-1">Auf die Entwicklung</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center border border-white/10 hover:bg-white/15 transition-colors">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Headphones className="w-6 h-6 text-orange-300" />
              </div>
              <p className="font-semibold text-white">Premium Support</p>
              <p className="text-sm text-amber-200 mt-1">
                Persönliche Betreuung
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 flex justify-center">
            <Button
              asChild
              size="lg"
              className="gradient-honey text-white shadow-warm hover:shadow-glow text-lg px-8"
            >
              <a href="#beta-anmeldung">
                Jetzt Beta-Zugang sichern
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-earth-900 mb-4">
              Was du mit BienenManager machen kannst
            </h2>
            <p className="text-lg text-earth-600 max-w-2xl mx-auto">
              Stockkarten digitalisieren, Bestandsbuch führen,
              Varroa-Behandlungen planen – alles vom Smartphone aus.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-xl bg-amber-50 p-6 hover:shadow-lg transition-shadow border border-honey-100"
              >
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="font-semibold text-earth-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-earth-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-honey-300 text-earth-700 hover:bg-honey-50"
            >
              <Link
                href="/funktionen"
                className="inline-flex items-center gap-2"
              >
                Alle Features ansehen
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Beta Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-earth-900 mb-4">
              Warum jetzt Beta-Tester werden?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardContent className="pt-6">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <CreditCard className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-earth-900 mb-2">
                  100% Kostenlos
                </h3>
                <p className="text-earth-600">
                  Alle Features kostenlos während der Beta-Phase. Keine
                  Kreditkarte erforderlich.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardContent className="pt-6">
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                  <Tag className="w-7 h-7 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-earth-900 mb-2">
                  Lebenslang 50% Rabatt
                </h3>
                <p className="text-earth-600">
                  Als Beta-Tester erhältst du dauerhaft 50% Rabatt auf alle
                  künftigen Tarife.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardContent className="pt-6">
                <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                  <MessageSquare className="w-7 h-7 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-earth-900 mb-2">
                  Direkter Einfluss
                </h3>
                <p className="text-earth-600">
                  Deine Feature-Wünsche und dein Feedback fließen direkt in die
                  Produktentwicklung ein.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardContent className="pt-6">
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <Headphones className="w-7 h-7 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-earth-900 mb-2">
                  Premium Support
                </h3>
                <p className="text-earth-600">
                  Persönliche Betreuung beim Onboarding und schneller Support
                  bei Fragen.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section id="beta-anmeldung" className="py-20 px-6 bg-white scroll-mt-20">
        <div className="mx-auto max-w-xl">
          <Card className="border-0 shadow-2xl">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-2xl">Beta-Zugang anfordern</CardTitle>
              <CardDescription className="text-base">
                Fülle das Formular aus und starte kostenlos. Wir melden uns
                innerhalb von 24 Stunden mit deinen Zugangsdaten.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="company">Imkerei / Firma *</Label>
                  <Input
                    id="company"
                    placeholder="z.B. Imkerei Sonnental"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        company: e.target.value,
                      }))
                    }
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="name">Dein Name *</Label>
                  <Input
                    id="name"
                    placeholder="Max Mustermann"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-Mail *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="deine@email.de"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    required
                    className="h-12"
                  />
                </div>

                {/* Trust Points */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2 text-sm text-earth-600">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>Keine Kreditkarte erforderlich</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-earth-600">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>Lebenslang 50% Rabatt als Beta-Tester</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-earth-600">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>DSGVO-konforme Datenspeicherung in Deutschland</span>
                  </div>
                </div>

                {/* Privacy Checkbox */}
                <div className="flex items-start gap-3 pt-2">
                  <Checkbox
                    id="privacy"
                    checked={formData.privacy}
                    onCheckedChange={(checked) =>
                      setFormData((prev) => ({
                        ...prev,
                        privacy: checked as boolean,
                      }))
                    }
                    className="mt-1"
                  />
                  <label
                    htmlFor="privacy"
                    className="text-sm text-earth-600 cursor-pointer"
                  >
                    Ich stimme der{" "}
                    <Link
                      href="/datenschutz"
                      className="text-amber-600 hover:underline"
                    >
                      Datenschutzerklärung
                    </Link>{" "}
                    zu. *
                  </label>
                </div>

                {/* Newsletter Opt-in */}
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="newsletter"
                    checked={formData.newsletter}
                    onCheckedChange={(checked) =>
                      setFormData((prev) => ({
                        ...prev,
                        newsletter: checked as boolean,
                      }))
                    }
                    className="mt-1"
                  />
                  <label
                    htmlFor="newsletter"
                    className="text-sm text-earth-600 cursor-pointer"
                  >
                    Ich möchte Imkerei-Tipps und Produkt-Updates per E-Mail
                    erhalten (jederzeit abbestellbar).
                  </label>
                </div>

                {/* Error Message */}
                {status === "error" && (
                  <div className="p-4 bg-red-50 text-red-700 rounded-lg text-sm">
                    {errorMessage}
                  </div>
                )}

                {/* Submit */}
                <Button
                  type="submit"
                  className="w-full h-14 text-lg font-semibold gradient-honey text-white shadow-warm hover:shadow-glow"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    "Wird gesendet..."
                  ) : (
                    <>
                      Jetzt kostenlos Beta-Zugang anfordern
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Newsletter Fallback Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="mx-auto max-w-2xl text-center">
          <Sparkles className="w-8 h-8 text-amber-200 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-3">
            Noch nicht bereit? Bleib auf dem Laufenden!
          </h2>
          <p className="text-amber-100 mb-6">
            Monatlich: Imkerei-Tipps, Produktneuheiten und Beta-Updates direkt
            in dein Postfach.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <Input
              type="email"
              placeholder="deine@email.de"
              className="h-12 bg-white/10 border-white/20 text-white placeholder:text-amber-200"
            />
            <Button variant="secondary" className="h-12 px-8 whitespace-nowrap">
              Anmelden
            </Button>
          </form>
          <p className="text-xs text-amber-200 mt-4">
            Kostenlos. Jederzeit abbestellbar. DSGVO-konform.
          </p>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-16 px-6 bg-amber-50">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-earth-500 uppercase tracking-wider flex items-center justify-center gap-2">
              <Shield className="w-4 h-4 text-amber-500" />
              Vertrauenswürdig & sicher
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-earth-900 mb-2">DSGVO-konform</h3>
              <p className="text-sm text-earth-600">
                Deutsche Server &bull; EU-Rechenzentrum &bull; SSL-verschlüsselt
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileCheck className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="font-bold text-earth-900 mb-2">
                Rechtskonform entwickelt
              </h3>
              <p className="text-sm text-earth-600">
                Tierseuchenrecht &bull; Bestandsbuch-Pflicht &bull; LMIV-konform
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Server className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-bold text-earth-900 mb-2">
                Deutsche Infrastruktur
              </h3>
              <p className="text-sm text-earth-600">
                99.9% Uptime &bull; Automatische Backups &bull; Made in Germany
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
