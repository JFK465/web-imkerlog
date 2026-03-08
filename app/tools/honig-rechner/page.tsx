import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";
import { WebPageSchema } from "@/components/seo/StructuredData";
import { HonigRechnerClient } from "./HonigRechnerClient";

export const metadata: Metadata = {
  title: "Honig-Ernte-Rechner: Ertrag berechnen",
  description:
    "Berechnen Sie Ihren voraussichtlichen Honig-Ertrag basierend auf Voelkerzahl, Standort und Saison. Kostenloser Ernte-Rechner von Imker-Logbuch Pro.",
  alternates: {
    canonical: `${siteConfig.url}/tools/honig-rechner`,
  },
};

export default function HonigRechnerPage() {
  return (
    <>
      <WebPageSchema
        title="Honig-Ernte-Rechner: Ertrag berechnen"
        description="Berechnen Sie Ihren voraussichtlichen Honig-Ertrag basierend auf Voelkerzahl, Standort und Saison."
        path="/tools/honig-rechner"
      />
      <HonigRechnerClient />
    </>
  );
}
