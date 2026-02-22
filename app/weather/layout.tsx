import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Wetter & Varroa-Prognose für Imker",
  description:
    "Aktuelle Wetterdaten und Varroa-Risikobewertung für Ihren Bienenstand. Behandlungszeitpunkt optimieren mit lokaler Wettervorhersage.",
  alternates: { canonical: "/weather" },
}

export default function WeatherLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
