import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BienenManager",
    short_name: "BienenManager",
    description: "Dein digitales Imker-Logbuch für erfolgreiche Bienenzucht",
    start_url: "/",
    display: "standalone",
    background_color: "#F9F5F0",
    theme_color: "#C87B14",
  };
}
