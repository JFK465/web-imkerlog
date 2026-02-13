import { siteConfig } from "@/lib/seo-config"

export const metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung von Imker-Logbuch Pro",
}

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen py-12 md:py-24">
      <div className="container px-4 md:px-6 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Datenschutzerklärung</h1>

        <div className="prose prose-lg max-w-none space-y-6">
          <section>
            <h2>1. Datenschutz auf einen Blick</h2>
            <h3>Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber,
              was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere
              Website besuchen.
            </p>
          </section>

          <section>
            <h2>2. Datenerfassung auf unserer Website</h2>
            <h3>Wer ist verantwortlich?</h3>
            <p>
              <strong>{siteConfig.companyName}</strong>
              <br />
              E-Mail: {siteConfig.email}
            </p>
          </section>

          <section>
            <h2>3. Ihre Rechte</h2>
            <p>Sie haben jederzeit das Recht:</p>
            <ul>
              <li>Auskunft über Ihre gespeicherten Daten zu erhalten</li>
              <li>Ihre Daten berichtigen zu lassen</li>
              <li>Ihrer Daten löschen zu lassen</li>
              <li>Der Datenverarbeitung zu widersprechen</li>
            </ul>
          </section>

          <section>
            <h2>4. Server-Log-Dateien</h2>
            <p>
              Der Provider der Seiten erhebt und speichert automatisch
              Informationen in so genannten Server-Log-Dateien, die Ihr
              Browser automatisch an uns übermittelt.
            </p>
          </section>

          <section>
            <h2>5. Kontaktformular</h2>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen,
              werden Ihre Angaben aus dem Anfrageformular inklusive der
              von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung
              der Anfrage und für den Fall von Anschlussfragen bei uns
              gespeichert.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
