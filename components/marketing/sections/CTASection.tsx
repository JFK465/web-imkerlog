import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"
import Link from "next/link"

interface CTASectionProps {
  problem?: string
  ctaText?: string
  inklusion?: string[]
  knappheit?: string
  zeitstempel?: string
  bonus?: string
}

export function CTASection({
  problem = "Zeit am Bienenstand statt am Schreibtisch verbringen",
  ctaText = "Jetzt kostenlos Beta testen",
  inklusion = [
    "Kostenloser Zugang während der Beta",
    "Einfluss auf die Produkt-Roadmap",
    "Persönliches Onboarding",
  ],
  zeitstempel = "Beta läuft -- jetzt beitreten",
  bonus = "Early-Adopter-Pricing nach der Beta",
}: CTASectionProps) {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {problem}
          </h2>

          <p className="text-xl mb-8 opacity-90">
            Hören Sie auf, Zeit mit Verwaltung zu verschwenden.
            Konzentrieren Sie sich auf das, was wirklich zählt: Ihre Bienen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/signup">
                {ctaText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* What's Included */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6">
            {inklusion.map((item, index) => (
              <div key={index} className="flex items-center text-sm">
                <Check className="h-4 w-4 mr-2" />
                {item}
              </div>
            ))}
          </div>

          {/* Time Stamp */}
          <p className="text-sm opacity-75">{zeitstempel}</p>

          {/* Bonus */}
          {bonus && (
            <p className="text-sm mt-4 opacity-90 font-medium">
              {bonus}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
