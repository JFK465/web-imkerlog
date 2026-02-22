import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Imker-Logbuch Pro",
    short_name: "Imkerlog",
    description: "Smarte Verwaltung für Hobby-Imker und Direktvermarkter",
    start_url: "/",
    display: "standalone",
    background_color: "#F9F5F0",
    theme_color: "#F59E0B",
  }
}
