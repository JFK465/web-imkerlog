import { Shield, Server, Lock, Eye } from "lucide-react"

interface TrustElementsProps {
  sicherheitsStandard?: string
  geldZurueck?: string
  supportZeit?: string
  kundenSeit?: string
  datenschutz?: string
}

export function TrustElements({
  sicherheitsStandard = "Verschlüsselte Datenübertragung",
  supportZeit = "Per E-Mail, Antwort innerhalb von 24 Stunden",
  datenschutz = "DSGVO-konform, Server in Deutschland",
}: TrustElementsProps) {
  const trustItems = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: sicherheitsStandard,
      description: "SSL/TLS-Verschlüsselung für alle Daten",
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: datenschutz,
      description: "Ihre Daten bleiben in Deutschland",
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Ihre Daten gehören Ihnen",
      description: "Jederzeit exportierbar, jederzeit löschbar",
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: supportZeit,
      description: "Wir lesen und beantworten jede Nachricht",
    },
  ]

  return (
    <section className="py-12 md:py-16 border-t">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-2"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                {item.icon}
              </div>
              <h3 className="font-semibold text-sm md:text-base">{item.title}</h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
