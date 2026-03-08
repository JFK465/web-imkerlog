import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { WebPageSchema } from "@/components/seo/StructuredData";

const LabelGenerator = dynamic(
  () =>
    import("@/components/harvest/LabelGenerator").then((m) => ({
      default: m.LabelGenerator,
    })),
  { ssr: false },
);

export const metadata: Metadata = {
  title: "Honig-Ernte dokumentieren und Etiketten",
  description:
    "Dokumentieren Sie Ihre Honig-Ernte digital und generieren Sie professionelle Etiketten für Ihre Glaeser. Chargenverfolgung und LMIV-konforme Labels inklusive.",
  alternates: { canonical: "/harvest" },
};

export default function HarvestPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 py-20">
      <WebPageSchema
        title="Honig-Ernte dokumentieren und Etiketten erstellen"
        description="Dokumentieren Sie Ihre Honig-Ernte digital und generieren Sie professionelle Etiketten für Ihre Glaeser."
        path="/harvest"
      />
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-earth-800 mb-4">
            Honig-Ernte dokumentieren und Etiketten erstellen
          </h1>
          <p className="text-xl text-earth-500 max-w-2xl mx-auto">
            Dokumentieren Sie Ihre Honig-Ernte und generieren Sie professionelle
            Etiketten für Ihre Gläser.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <LabelGenerator />
        </div>
      </div>
    </main>
  );
}
