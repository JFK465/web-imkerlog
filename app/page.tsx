import { HeroSection } from "@/components/marketing/sections/HeroSection"
import { ProblemStatement } from "@/components/marketing/sections/ProblemStatement"
import { ValueProposition } from "@/components/marketing/sections/ValueProposition"
import { FeaturesSection } from "@/components/marketing/sections/FeaturesSection"
import { TrustElements } from "@/components/marketing/sections/TrustElements"
import { FAQSection } from "@/components/marketing/sections/FAQSection"
import { CTASection } from "@/components/marketing/sections/CTASection"
import { FAQSchema } from "@/components/seo/StructuredData"
import { faqData } from "@/lib/faq-data"

export default function HomePage() {
  return (
    <>
      <FAQSchema items={faqData.map(faq => ({ question: faq.question, answer: faq.answer }))} />

      <HeroSection
        produktName="Imker-Logbuch Pro"
        hauptVorteil="Alles am Bienenstand im Griff – vom Smartphone aus"
        primarerCTA="Kostenlos Beta testen"
      />

      <ProblemStatement
        taglicheFrustration="Sie stehen am Bienenstand mit klebrigen Fingern. Ein Volk schwärmt gleich aus. Sie wollen nur schnell notieren, was Sie gesehen haben. Aber wo ist bloß das Bestandsbuch?"
        problemDetails={[
          "Das Bestandsbuch ist unvollständig – und das kann bei einer Kontrolle teuer werden",
          "Honig-Chargen lassen sich nicht zurückverfolgen – Kunden fragen nach",
          "Wichtige Termine wie die Varroa-Kontrolle geraten in Vergessenheit",
          "Alles liegt verstreut: Zettel, Excel, verschiedene Apps",
        ]}
        auswirkung="Zeit, die Sie am Bienenstand verbringen sollten, verbringen Sie mit Suchen und Organisieren."
        zeitVerlust="2-3 Stunden pro Woche"
      />

      <ValueProposition
        differenzierer="Mobile-first mit Sprach- und Button-Eingabe für den Bienenstand"
        magicMoment="Sie scannen den QR-Code am Stock, tippen kurz, und alles ist dokumentiert – auch mit Bienenstichen an den Fingern."
        alternative="Papier, Excel und disparate Notizen"
      />

      <FeaturesSection />

      <TrustElements />

      <FAQSection faqs={faqData} />

      <CTASection
        problem="Zeit am Bienenstand statt am Schreibtisch verbringen"
        zeitstempel="Beta läuft – jetzt beitreten"
      />
    </>
  )
}
