import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { WebPageSchema } from "@/components/seo/StructuredData";
import { BienenverwaltungSoftwareClient } from "./BienenverwaltungSoftwareClient";

export const metadata: Metadata = {
  title: "Bienenverwaltung Software für Imker | BienenManager",
  description:
    "Die professionelle Bienenverwaltung Software für Hobby-Imker und Direktvermarkter. QR-Codes, rechtskonformes Bestandsbuch und Varroa-Prognose – jetzt kostenlos als Beta-Tester starten.",
  alternates: {
    canonical: `${siteConfig.url}/bienenverwaltung-software`,
  },
  openGraph: {
    title: "Bienenverwaltung Software für Imker | BienenManager",
    description:
      "Die professionelle Bienenverwaltung Software für Hobby-Imker und Direktvermarkter. Jetzt kostenlos als Beta-Tester starten.",
    url: `${siteConfig.url}/bienenverwaltung-software`,
  },
};

export default function BienenverwaltungSoftwarePage() {
  return (
    <>
      <WebPageSchema
        title="Bienenverwaltung Software für Imker | BienenManager"
        description="Die professionelle Bienenverwaltung Software für Hobby-Imker und Direktvermarkter."
        path="/bienenverwaltung-software"
      />
      <Breadcrumbs
        items={[
          {
            name: "Bienenverwaltung Software",
            href: "/bienenverwaltung-software",
          },
        ]}
      />
      <BienenverwaltungSoftwareClient />
    </>
  );
}
