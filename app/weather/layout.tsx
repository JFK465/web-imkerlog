import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wetter & Varroa-Prognose für Imker",
  description:
    "Aktuelle Wetterdaten und Varroa-Risikobewertung fuer Ihren Bienenstand. Optimieren Sie den Behandlungszeitpunkt mit lokaler Wettervorhersage und Prognosen.",
  alternates: { canonical: "/weather" },
};

export default function WeatherLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
