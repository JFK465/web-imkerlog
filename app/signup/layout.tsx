import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kostenlos anmelden: Beta-Zugang sichern",
  description:
    "Jetzt kostenlos fuer die Beta von Imker-Logbuch Pro anmelden. Digitale Bienenverwaltung, rechtskonformes Bestandsbuch und QR-Code-Dokumentation testen.",
  alternates: { canonical: "/signup" },
};

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
