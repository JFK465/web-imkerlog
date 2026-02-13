interface ProblemStatementProps {
  uberschrift?: string
  taglicheFrustration?: string
  problemDetails?: string[]
  auswirkung?: string
  zeitVerlust?: string
}

export function ProblemStatement({
  uberschrift = "Kennen Sie das?",
  taglicheFrustration =
    "Sie stehen am Bienenstand mit klebrigen Fingern. Ein Volk schwärmt gleich aus. Sie wollen nur schnell notieren, was Sie gesehen haben. Aber wo ist bloß das Bestandsbuch? Und haben Sie die Medikamente vom letzten Jahr eingetragen?",
  problemDetails = [
    "Das Bestandsbuch ist unvollständig -- und das kann bei einer Kontrolle teuer werden",
    "Honig-Chargen lassen sich nicht zurückverfolgen -- Kunden fragen nach",
    "Wichtige Termine wie die Varroa-Kontrolle geraten in Vergessenheit",
    "Alles liegt verstreut: Zettel, Excel, verschiedene Apps",
  ],
  auswirkung =
    "Zeit, die Sie am Bienenstand verbringen sollten, verbringen Sie mit Suchen und Organisieren.",
  zeitVerlust = "2-3 Stunden pro Woche",
}: ProblemStatementProps) {
  return (
    <section id="problem" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {uberschrift}
            </h2>
          </div>

          {/* Main Problem Scenario */}
          <div className="bg-background rounded-xl p-6 md:p-8 shadow-lg mb-8">
            <p className="text-lg md:text-xl leading-relaxed">
              {taglicheFrustration}
            </p>
          </div>

          {/* Problem Details Grid */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {problemDetails.map((detail, index) => (
              <div
                key={index}
                className="flex items-start p-4 bg-background rounded-lg shadow-sm"
              >
                <div className="h-2 w-2 rounded-full bg-destructive mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-muted-foreground">{detail}</p>
              </div>
            ))}
          </div>

          {/* Impact Statement */}
          <div className="text-center p-6 bg-destructive/5 rounded-lg border border-destructive/20">
            <p className="text-lg font-medium text-foreground mb-2">
              {auswirkung}
            </p>
            <p className="text-sm text-muted-foreground">
              Das sind etwa {zeitVerlust} reine Verwaltungszeit.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
