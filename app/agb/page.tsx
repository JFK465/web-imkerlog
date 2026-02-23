import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/layout/Breadcrumbs"
import { WebPageSchema } from "@/components/seo/StructuredData"
import { siteConfig } from "@/lib/seo-config"

export const metadata: Metadata = {
  title: "AGB – Imker-Logbuch Pro",
  description: "Allgemeine Geschäftsbedingungen der Imker-Logbuch Pro.",
  alternates: {
    canonical: `${siteConfig.url}/agb`,
  },
  openGraph: {
    title: "AGB – Imker-Logbuch Pro",
    description: "Allgemeine Geschäftsbedingungen der Imker-Logbuch Pro.",
    url: `${siteConfig.url}/agb`,
  },
}

export default function AGBPage() {
  return (
    <>
      <WebPageSchema
        title="AGB – Imker-Logbuch Pro"
        description="Allgemeine Geschäftsbedingungen der Imker-Logbuch Pro."
        path="/agb"
      />
      <Breadcrumbs items={[{ name: "AGB", href: "/agb" }]} />

      <section className="bg-gradient-to-b from-amber-50 via-orange-50 to-yellow-50 py-16 md:py-20">
        <div className="container mx-auto max-w-3xl px-4">
          <h1 className="font-heading text-4xl font-extrabold tracking-tight text-earth-900">
            Allgemeine Geschäftsbedingungen
          </h1>
          <p className="mt-4 text-earth-600">
            Imker-Logbuch Pro – Stand: Februar 2026
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="prose prose-stone prose-amber max-w-none">
            <h2>1. Geltungsbereich</h2>
            <p>
              Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen
              Imker-Logbuch Pro und seinen Kunden. Abweichende Bedingungen des Kunden werden nicht anerkannt.
            </p>

            <h2>2. Vertragsgegenstand</h2>
            <p>
              Imker-Logbuch Pro stellt eine Software-as-a-Service-Lösung zur digitalen
              Verwaltung von Bienenständen und Imkereien zur Verfügung. Die genauen
              Leistungen ergeben sich aus der jeweiligen Preisliste und Funktionsbeschreibung.
            </p>

            <h2>3. Vertragsschluss und Registrierung</h2>
            <p>
              Die Registrierung für die Beta-Phase erfolgt durch das Ausfüllen des
              Registrierungsformulars auf der Website. Der Vertrag kommt durch die
              Bestätigung der Registrierung durch Imker-Logbuch Pro zustande.
            </p>

            <h2>4. Leistungen und Verfügbarkeit</h2>
            <p>
              Imker-Logbuch Pro bemüht sich um eine möglichst ununterbrochene
              Verfügbarkeit der Software. Wartungsarbeiten können zu kurzzeitigen
              Unterbrechungen führen. During the Beta phase, all features are provided
              free of charge.
            </p>

            <h2>5. Nutzungsrechte</h2>
            <p>
              Der Kunde erhält ein einfaches, nicht übertragbares Recht zur Nutzung
              der Software während der Vertragslaufzeit. Eine Vervielfältigung oder
              Weitergabe der Software ist nicht gestattet.
            </p>

            <h2>6. Datenschutz</h2>
            <p>
              Die Erhebung und Verarbeitung personenbezogener Daten erfolgt gemäß
              unserer Datenschutzerklärung. Der Kunde ist für die Rechtmäßigkeit
              der von ihm eingepflegten Daten verantwortlich.
            </p>

            <h2>7. Haftung</h2>
            <p>
              Imker-Logbuch Pro haftet für Schäden nur bei vorsätzlicher oder
              grob fahrlässiger Pflichtverletzung. Die Haftung für leichte Fahrlässigkeit
              ist ausgeschlossen, außer bei Schäden an Leben, Körper oder Gesundheit.
            </p>

            <h2>8. Gewährleistung</h2>
            <p>
              Während der Beta-Phase wird die Software ohne Gewährleistung zur
              Verfügung gestellt. Die Beta-Phase dient der Erprobung und Weiterentwicklung
              der Software.
            </p>

            <h2>9. Vertragslaufzeit und Kündigung</h2>
            <p>
              Der Vertrag kann jederzeit ohne Einhaltung einer Frist gekündigt werden.
              Imker-Logbuch Pro behält sich vor, den Vertrag mit angemessener Frist zu beenden.
            </p>

            <h2>10. Schlussbestimmungen</h2>
            <p>
              Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand ist
              der Sitz von Imker-Logbuch Pro, sofern der Kunde Kaufmann ist.
              Sollte eine Bestimmung dieser AGB unwirksam sein, bleibt die Wirksamkeit
              der übrigen Bestimmungen unberührt.
            </p>

            <h2>Kontakt</h2>
            <p>
              Bei Fragen zu diesen AGB kontaktieren Sie uns unter:<br />
              <strong>Imker-Logbuch Pro</strong><br />
              E-Mail: kontakt@imker-logbuch-pro.de
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
