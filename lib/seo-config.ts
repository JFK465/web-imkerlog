export const siteConfig = {
  name: "Imker-Logbuch Pro",
  description:
    "Smarte Verwaltung für Hobby-Imker und Direktvermarkter. Rechtskonform, mobil, einfach.",
  url: "https://imker-logbuch-pro.de",
  companyName: "Imker-Logbuch Pro",
  email: "kontakt@imker-logbuch-pro.de",
  twitterHandle: "",
}

export const betaConfig = {
  phase: "pre-launch" as const,
  betaStartDate: "2025-03-01",
  features: {
    available: ["Stockkarten-Digitalisierung"],
    inDevelopment: ["Rechtskonformes Bestandsbuch", "Ernte- & Chargenverfolgung"],
    planned: ["Varroa-Wetter-Integration", "Spracheingabe"],
  },
}

export function getRemainingPlaces(): number | null {
  return null
}
