import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Beta-Zugang: Imker-Logbuch Pro kostenlos testen",
  description:
    "Jetzt kostenlos für die Beta von Imker-Logbuch Pro anmelden. Digitale Bienenverwaltung, rechtskonformes Bestandsbuch, QR-Code-Dokumentation.",
  alternates: { canonical: "/signup" },
}

export default function SignupLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
