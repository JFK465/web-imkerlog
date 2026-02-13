import Link from "next/link"
import { FOOTER_LINKS, SOCIAL_LINKS } from "@/lib/constants"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Imker-Logbuch Pro</h3>
            <p className="text-sm text-muted-foreground">
              Smarte Verwaltung für Hobby-Imker und Direktvermarkter.
              Rechtskonform, mobil, einfach.
            </p>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Produkt</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.produkt.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Unternehmen</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.unternehmen.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Updates erhalten</h4>
            <p className="text-sm text-muted-foreground">
              Wir informieren Sie, wenn die Beta startet.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="E-Mail-Adresse"
                aria-label="E-Mail für Newsletter"
              />
              <Button type="submit">OK</Button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Imker-Logbuch Pro. Alle Rechte
              vorbehalten.
            </p>
            <div className="flex gap-4">
              {FOOTER_LINKS.rechtliches.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
