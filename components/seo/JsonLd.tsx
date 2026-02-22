interface JsonLdProps {
  data: Record<string, unknown>
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function OrganizationSchema({
  name,
  url,
  logo,
  sameAs = [],
}: {
  name: string
  url: string
  logo?: string
  sameAs?: string[]
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    logo,
    sameAs,
  }

  return <JsonLd data={schema} />
}

export function BetaSoftwareSchema({
  name,
  description,
  url,
  betaStartDate,
}: {
  name: string
  description: string
  url: string
  betaStartDate?: string
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    url,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
      availability: "https://schema.org/PreOrder",
      ...(betaStartDate && { validFrom: betaStartDate }),
      description: "Kostenloser Beta-Zugang",
    },
  }

  return <JsonLd data={schema} />
}

export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return <JsonLd data={schema} />
}

export function ArticleSchema({
  headline,
  datePublished,
  dateModified,
  author,
  description,
  url,
  image,
}: {
  headline: string
  datePublished: string
  dateModified?: string
  author: string
  description: string
  url: string
  image?: string
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    datePublished,
    ...(dateModified && { dateModified }),
    author: {
      "@type": "Person",
      name: author,
    },
    description,
    url,
    ...(image && { image }),
    publisher: {
      "@type": "Organization",
      name: "Imker-Logbuch Pro",
      url: "https://imker-logbuch-pro.de",
    },
  }

  return <JsonLd data={schema} />
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return <JsonLd data={schema} />
}

export function HowToSchema({
  name,
  description,
  steps,
}: {
  name: string
  description: string
  steps: { name: string; text: string }[]
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  }

  return <JsonLd data={schema} />
}
