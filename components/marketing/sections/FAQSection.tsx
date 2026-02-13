"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"

interface FAQ {
  question: string
  answer: string
}

interface FAQSectionProps {
  title?: string
  subtitle?: string
  faqs?: FAQ[]
}

const defaultFAQs: FAQ[] = [
  {
    question: "Was bedeutet 'Beta'?",
    answer:
      "Beta bedeutet, dass Imker-Logbuch Pro sich aktiv in Entwicklung befindet. Sie erhalten Zugang zu den bereits verfügbaren Funktionen und können das Produkt aktiv mitgestalten. Es kann noch Ecken und Kanten geben -- dafür ist Ihr Feedback umso wertvoller.",
  },
  {
    question: "Was kostet die Beta?",
    answer:
      "Die Beta ist komplett kostenlos. Wir informieren Sie rechtzeitig, bevor kostenpflichtige Pläne starten. Beta-Tester erhalten dauerhaft bessere Konditionen.",
  },
  {
    question: "Wie werden meine Daten geschützt?",
    answer:
      "Ihre Daten werden verschlüsselt übertragen und gespeichert. Wir sind DSGVO-konform mit Servern in Deutschland. Mehr Details finden Sie in unserer Datenschutzerklärung.",
  },
  {
    question: "Kann ich mich jederzeit abmelden?",
    answer:
      "Ja. Ein Klick genügt. Ihre Daten werden auf Wunsch vollständig gelöscht.",
  },
  {
    question: "Wann startet die Beta?",
    answer:
      "Die Beta ist jetzt gestartet. Melden Sie sich an, um sofort dabei zu sein.",
  },
  {
    question: "Wie kann ich Feedback geben?",
    answer:
      "Nutzen Sie unser Kontaktformular auf der Anmeldeseite oder schreiben Sie uns -- wir lesen und beantworten jede Nachricht persönlich.",
  },
]

export function FAQSection({
  title = "Häufige Fragen -- ehrlich beantwortet",
  subtitle = "",
  faqs = defaultFAQs,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6 max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          {subtitle && (
            <p className="text-xl text-muted-foreground">{subtitle}</p>
          )}
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-background rounded-lg border overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-muted-foreground" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-muted-foreground" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-4 pt-0 text-muted-foreground">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
