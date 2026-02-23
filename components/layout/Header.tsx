"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { NAV_LINKS } from "@/lib/constants"
import { Menu, X, ChevronDown, Hexagon, ExternalLink } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"

interface NavDropdown {
  label: string
  items: { name: string; href: string; description?: string }[]
}

const dropdowns: NavDropdown[] = [
  {
    label: "Produkt",
    items: [
      { name: "Funktionen", href: "/funktionen", description: "Alle Features im Überblick" },
      { name: "Preise", href: "/preise", description: "Kostenlos starten" },
      { name: "Bienenverwaltung-Software", href: "/bienenverwaltung-software", description: "Dedizierte Landing Page" },
    ],
  },
  {
    label: "Branchen",
    items: [
      { name: "Hobby-Imker", href: "/hobby-imker", description: "Für private Imker" },
      { name: "Direktvermarkter", href: "/direktvermarkter", description: "Honig verkaufen" },
      { name: "Imkereien", href: "/imkereien", description: "Gewerbliche Imkerei" },
    ],
  },
  {
    label: "Wissen",
    items: [
      { name: "Wissen & Ratgeber", href: "/wissen", description: "Alle Artikel" },
      { name: "Bestandsbuch-Pflicht", href: "/wissen/bestandsbuch", description: "Rechtliche Anforderungen" },
      { name: "Varroa-Monitoring", href: "/wissen/varroa", description: "Schädlingsbekämpfung" },
      { name: "Honig-Etiketten", href: "/wissen/honig-etiketten", description: "Kennzeichnungspflicht" },
      { name: "Blog", href: "/blog", description: "Aktuelle Artikel" },
    ],
  },
  {
    label: "Tools",
    items: [
      { name: "Honig-Ernte-Rechner", href: "/tools/honig-rechner", description: "Ertrag berechnen" },
      { name: "Varroa-Prognose", href: "/tools/varroa-prognose", description: "Befall einschätzen" },
    ],
  },
]

function DropdownMenu({ dropdown }: { dropdown: NavDropdown }) {
  const [open, setOpen] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setOpen(true)
  }

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  return (
    <div className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-earth-700 hover:text-honey-600 transition-colors">
        {dropdown.label}
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <>
          <div className="absolute left-0 right-0 h-2" />
          <div className="absolute left-0 top-full pt-2 w-64 z-50">
            <div className="bg-white rounded-lg shadow-lg border border-honey-100 p-2 animate-in fade-in slide-in-from-top-1 duration-150">
              {dropdown.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2.5 rounded-md text-sm hover:bg-honey-50 transition-colors"
                >
                  <span className="font-medium text-earth-800">{item.name}</span>
                  {item.description && (
                    <span className="block text-xs text-earth-500 mt-0.5">{item.description}</span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-honey-100"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-1">
          <Hexagon className="h-8 w-8 text-amber-500" />
          <span className="text-xl font-bold font-display text-earth-800">
            Imker-Logbuch
          </span>
          <span className="text-xl font-bold font-display gradient-text">
            Pro
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-2">
          {dropdowns.map((dropdown) => (
            <DropdownMenu key={dropdown.label} dropdown={dropdown} />
          ))}
          <Link href="/preise" className="px-3 py-2 text-sm font-medium text-earth-700 hover:text-honey-600 transition-colors">
            Preise
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="ghost" asChild className="text-earth-700 hover:text-honey-600 hover:bg-honey-50">
            <Link href="/demo">
              Demo
              <ExternalLink className="ml-2 h-3 w-3" />
            </Link>
          </Button>
          <Button
            asChild
            className="gradient-honey text-white shadow-warm hover:shadow-glow transition-all"
          >
            <Link href="/signup">Kostenlos starten</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-earth-700 hover:text-honey-600 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden border-t border-honey-100 bg-white/95 backdrop-blur-md"
          >
            <nav className="flex flex-col space-y-1 p-4">
              {dropdowns.map((dropdown) => (
                <div key={dropdown.label}>
                  <button
                    className="flex w-full items-center justify-between px-2 py-2 text-sm font-medium text-earth-700 hover:text-honey-600 transition-colors"
                    onClick={() => setMobileDropdownOpen(mobileDropdownOpen === dropdown.label ? null : dropdown.label)}
                  >
                    {dropdown.label}
                    <ChevronDown className={`h-4 w-4 transition-transform ${mobileDropdownOpen === dropdown.label ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {mobileDropdownOpen === dropdown.label && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="ml-4 overflow-hidden"
                      >
                        {dropdown.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-3 py-2 text-sm text-earth-600 hover:text-honey-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <Link
                href="/preise"
                className="px-2 py-2 text-sm font-medium text-earth-700 hover:text-honey-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Preise
              </Link>

              <div className="pt-2 flex flex-col gap-2">
                <Button variant="outline" asChild className="w-full border-honey-300 text-earth-700 hover:bg-honey-50">
                  <Link href="/demo" onClick={() => setIsOpen(false)}>
                    Demo ansehen
                  </Link>
                </Button>
                <Button
                  asChild
                  className="gradient-honey text-white shadow-warm hover:shadow-glow w-full"
                >
                  <Link href="/signup" onClick={() => setIsOpen(false)}>
                    Kostenlos starten
                  </Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
