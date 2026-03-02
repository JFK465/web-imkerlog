import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/marketing/Footer";
import {
  WebSiteSchema,
  OrganizationSchema,
  SoftwareApplicationSchema,
} from "@/components/seo/StructuredData";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bienen-manager.de"),
  title: {
    default:
      "BienenManager – Dein digitales Imker-Logbuch für erfolgreiche Bienenzucht",
    template: "%s | BienenManager",
  },
  description:
    "Dein digitales Imker-Logbuch für erfolgreiche Bienenzucht. QR-Codes am Bienenstock, rechtskonformes Bestandsbuch, Varroa-Prognose. Jetzt kostenlos testen!",
  keywords: [
    "Bienenverwaltung Software",
    "Imker App",
    "Bestandsbuch digital",
    "Honig Chargenverfolgung",
    "Varroa Kontrolle",
    "Imkerei Digitalisierung",
  ],
  authors: [{ name: "BienenManager Team" }],
  creator: "BienenManager",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://bienen-manager.de",
    title:
      "BienenManager: Dein digitales Imker-Logbuch - Jetzt kostenlos testen",
    description:
      "Dein digitales Imker-Logbuch für erfolgreiche Bienenzucht. QR-Codes am Bienenstock, rechtskonformes Bestandsbuch, Varroa-Prognose. Jetzt kostenlos testen!",
    siteName: "BienenManager",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "BienenManager - Dein digitales Imker-Logbuch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "BienenManager: Dein digitales Imker-Logbuch - Jetzt kostenlos testen",
    description:
      "Dein digitales Imker-Logbuch für erfolgreiche Bienenzucht. QR-Codes am Bienenstock, rechtskonformes Bestandsbuch, Varroa-Prognose.",
    images: ["/og.png"],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <WebSiteSchema />
        <OrganizationSchema />
        <SoftwareApplicationSchema />
      </head>
      <body
        className={`${dmSans.variable} ${jetbrainsMono.variable} ${dmSans.className}`}
      >
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
