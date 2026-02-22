import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Imker-Logbuch Pro - Smarte Bienenverwaltung"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 30%, #FDE68A 60%, #F59E0B 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 700, color: "#1F170C", marginBottom: 16 }}>
          Imker-Logbuch Pro
        </div>
        <div style={{ fontSize: 32, color: "#4A3820", marginBottom: 40 }}>
          Smarte Bienenverwaltung
        </div>
        <div style={{ fontSize: 24, color: "#6E5430", maxWidth: 800, textAlign: "center" }}>
          Rechtskonform, mobil, einfach - für Hobby-Imker und Direktvermarkter
        </div>
      </div>
    ),
    { ...size }
  )
}
