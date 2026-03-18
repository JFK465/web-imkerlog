import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const betaRegistrationSchema = z.object({
  email: z.string().email("Ungültige E-Mail-Adresse"),
  firstName: z.string().min(1, "Vorname ist erforderlich"),
  lastName: z.string().optional().default(""),
  company: z.string().min(1, "Imkerei/Firma ist erforderlich"),
  newsletter: z.boolean().default(true),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = betaRegistrationSchema.parse(body);

    // Log registration (Loops-Integration kann mit /saas-loops nachgerüstet werden)
    console.log("[Beta-Registration]", {
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      company: data.company,
      newsletter: data.newsletter,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Beta-Registrierung erfolgreich",
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Ungültige Daten", details: error.errors },
        { status: 400 },
      );
    }

    console.error("Beta registration error:", error);
    return NextResponse.json(
      { error: "Interner Serverfehler" },
      { status: 500 },
    );
  }
}
