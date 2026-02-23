import { NextResponse } from "next/server"
import { z } from "zod"

const betaSchema = z.object({
  firma: z.string().optional(),
  name: z.string().min(2, "Name ist erforderlich"),
  email: z.string().email("Gültige E-Mail erforderlich"),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const data = betaSchema.parse(body)

    console.log("Beta-Registrierung:", data)

    // TODO: Email-Service / CRM integrieren
    // Hier könnten Sie z.B. einen Newsletter-Service wie Mailchimp,
    // eine Datenbank oder ein CRM-System integrieren

    return NextResponse.json({ success: true })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ errors: error.errors }, { status: 400 })
    }
    return NextResponse.json({ error: "Interner Fehler" }, { status: 500 })
  }
}
