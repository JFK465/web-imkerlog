import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { WebPageSchema } from "@/components/seo/StructuredData";
import { KontaktClient } from "./KontaktClient";

export const metadata: Metadata = {
  title: "Kontakt: Fragen zur Bienenverwaltung",
  description:
    "Kontaktieren Sie das Imker-Logbuch Pro Team bei Fragen zur Bienenverwaltung-Software. Wir beraten Sie gerne zur Digitalisierung Ihrer Imkerei weiter.",
  alternates: {
    canonical: `${siteConfig.url}/kontakt`,
  },
  openGraph: {
    title: "Kontakt: Fragen zur Bienenverwaltung | Imker-Logbuch Pro",
    description:
      "Kontaktieren Sie das Imker-Logbuch Pro Team bei Fragen zur Bienenverwaltung-Software.",
    url: `${siteConfig.url}/kontakt`,
  },
};

export default function KontaktPage() {
  return (
    <>
      <WebPageSchema
        title="Kontakt – Imker-Logbuch Pro"
        description="Kontaktieren Sie das Imker-Logbuch Pro Team bei Fragen zur Bienenverwaltung-Software."
        path="/kontakt"
      />
      <Breadcrumbs items={[{ name: "Kontakt", href: "/kontakt" }]} />
      <KontaktClient />
    </>
  );
}
