import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"
import Link from "next/link"

interface ValuePropositionProps {
  produktName?: string
  differenzierer?: string
  konkretVorteile?: string[]
  magicMoment?: string
  ergebnisBild?: string
  alternative?: string
  zeitErsparnis?: string
  uberschrift?: string
}

export function ValueProposition({
  produktName = "Imker-Logbuch Pro",
  differenzierer = "Mobile-first mit Sprach- und Button-Eingabe für den Bienenstand",
  konkretVorteile = [
    "Automatisch rechtskonformes Bestandsbuch",
    "QR-Code-Scan am Bienenstock",
    "Wetterbasierte Varroa-Risikobewertung",
    "Chargenverfolgung für Honigverkauf",
  ],
  magicMoment =
    "Sie scannen den QR-Code am Stock, tippen kurz, und alles ist dokumentiert -- auch mit Bienenstichen an den Fingern.",
  alternative = "Papier, Excel und disparate Notizen",
  zeitErsparnis = "Deutlich weniger Aufwand",
  uberschrift = "Es geht auch anders.",
}: ValuePropositionProps) {
  return (
    <section id="loesung" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {uberschrift}
            </h2>
            <p className="text-xl text-muted-foreground">
              {alternative} war gestern.
            </p>
          </div>

          {/* Main Value Proposition */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">{differenzierer}</h3>
              <p className="text-lg text-muted-foreground">{magicMoment}</p>
              <ul className="space-y-3">
                {konkretVorteile.map((vorteil, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-3" />
                    <span>{vorteil}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-muted rounded-xl p-6 aspect-video flex items-center justify-center">
              <p className="text-muted-foreground text-center">
                [App-Screenshot: Bienenstock-Karte mit QR-Code]
              </p>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <Button size="lg" asChild>
              <Link href="/signup">Jetzt kostenlos Beta testen</Link>
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">
              {zeitErsparnis} -- versprochen.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
