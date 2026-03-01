import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { WebPageSchema } from "@/components/seo/StructuredData";
import { BienenverwaltungSoftwareClient } from "./BienenverwaltungSoftwareClient";

export const metadata: Metadata = {
  title: "Bienenverwaltung Software fuer Imker",
  description:
    "Die professionelle Bienenverwaltung Software fuer Hobby-Imker und Direktvermarkter. QR-Codes, rechtskonformes Bestandsbuch und Varroa-Prognose inklusive.",
  alternates: {
    canonical: `${siteConfig.url}/bienenverwaltung-software`,
  },
  openGraph: {
    title: "Bienenverwaltung Software fuer Imker | Imker-Logbuch Pro",
    description:
      "Die professionelle Bienenverwaltung Software fuer Hobby-Imker und Direktvermarkter. QR-Codes, Bestandsbuch und Varroa-Prognose.",
    url: `${siteConfig.url}/bienenverwaltung-software`,
  },
};

export default function BienenverwaltungSoftwarePage() {
  return (
    <>
      <WebPageSchema
        title="Bienenverwaltung Software fuer Imker | Imker-Logbuch Pro"
        description="Die professionelle Bienenverwaltung Software fuer Hobby-Imker und Direktvermarkter."
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
