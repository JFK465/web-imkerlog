import { siteConfig } from "@/lib/seo-config"

export const metadata = {
  title: "Impressum",
  description: "Impressum von Imker-Logbuch Pro",
}

export default function ImpressumPage() {
  return (
    <div className="min-h-screen py-12 md:py-24">
      <div className="container px-4 md:px-6 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Impressum</h1>

        <div className="prose prose-lg max-w-none">
          <h2>Angaben gemäß § 5 TMG</h2>
          <p>
            <strong>{siteConfig.companyName}</strong>
            <br />
            E-Mail: {siteConfig.email}
          </p>

          <h2>Haftung für Inhalte</h2>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
            auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
          </p>

          <h2>Haftung für Links</h2>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren
            Inhalte wir keinen Einfluss haben.
          </p>

          <h2>Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
            Seiten unterliegen dem deutschen Urheberrecht.
          </p>
        </div>
      </div>
    </div>
  )
}
