import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  QrCode,
  FileText,
  CloudRain,
  Mic,
  Lock,
  Globe,
  Smartphone,
  TrendingUp,
} from "lucide-react"

interface Feature {
  icon: React.ReactNode
  name: string
  benefit: string
  painPoint: string
}

interface FeaturesSectionProps {
  uberschrift?: string
  unteruberschrift?: string
  features?: Feature[]
  kundenZitat?: string
  schmerzAufloesung?: string
}

const defaultFeatures: Feature[] = [
  {
    icon: <QrCode className="h-8 w-8" />,
    name: "Stockkarten-Digitalisierung",
    benefit:
      "Jeder Stock hat einen QR-Code. Scannen, dokumentieren, fertig.",
    painPoint:
      "Kein Zettelsuchen mehr. Mit Handschuhen und klebrigen Fingern bedienbar.",
  },
  {
    icon: <FileText className="h-8 w-8" />,
    name: "Rechtskonformes Bestandsbuch",
    benefit:
      "Automatisch generiert nach VO (EU) 2017/625. Bereit für die Behörden.",
    painPoint:
      "Schützt vor Bußgeldern bei Kontrollen. Immer aktuell und vollständig.",
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    name: "Ernte- & Chargenverfolgung",
    benefit:
      "Jede Honig-Charge ist rückverfolgbar. Von der Wabe bis zum Glas.",
    painPoint:
      "Professioneller Verkauf erfordert Nachvollziehbarkeit. Das liefern wir.",
  },
  {
    icon: <CloudRain className="h-8 w-8" />,
    name: "Varroa-Wetter-Integration",
    benefit:
      "Wetterdaten + Varroa-Risiko. Wissen Sie genau, wann behandelt werden muss.",
    painPoint:
      "Die richtige Behandlung zum richtigen Zeitpunkt -- nicht zu früh, nicht zu spät.",
  },
  {
    icon: <Mic className="h-8 w-8" />,
    name: "Spracheingabe",
    benefit: "Dokumentieren Sie, während Sie arbeiten. Ohne Hände.",
    painPoint:
      "Schnell und einfach am Bienenstand. Auch mit Helm und Handschuhen.",
  },
]

export function FeaturesSection({
  uberschrift = "Was Imker-Logbuch Pro für Sie tut",
  unteruberschrift = "Funktionen, die Ihren Alltag verändern",
  features = defaultFeatures,
  kundenZitat = "",
  schmerzAufloesung = "Alles im Griff, vom Smartphone aus",
}: FeaturesSectionProps) {
  return (
    <section id="funktionen" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{uberschrift}</h2>
          <p className="text-xl text-muted-foreground">{unteruberschrift}</p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary/50 transition-colors"
            >
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">{feature.benefit}</p>
                <p className="text-sm text-primary font-medium">
                  {feature.painPoint}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-lg font-medium text-foreground mb-2">
            {schmerzAufloesung}
          </p>
          <p className="text-muted-foreground">
            Alle Features funktionieren auch offline am Bienenstand.
          </p>
        </div>
      </div>
    </section>
  )
}
