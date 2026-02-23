# Upgrade Report: Imker-Logbuch Pro

> Audit am: 2026-02-23
> Projektverzeichnis: web-imkerlog/
> Aktuelle Seitenanzahl: 9
> Domain: imker-logbuch-pro.de

## Score

**5/20.5 Punkte (24%)** – ROT

Das Projekt befindet sich in einem fruhen Stadium und weist erhebliche Luecken zum Pipeline-Standard auf. Es fehlen grundlegende Seiten und Strukturen.

## Gap-Tabelle

| # | Kategorie | Status | Punkte | Details |
|---|-----------|--------|--------|---------|
| 1 | Core Pages | FEHLT | 0/2 | /preise, /funktionen, /kontakt komplett fehlend |
| 2 | Legal Pages | TEILWEISE | 1/2 | /datenschutz, /impressum vorhanden; /agb fehlt |
| 3 | Software Landing Page | FEHLT | 0/2 | /bienenverwaltung-software nicht vorhanden |
| 4 | Branchen-Seiten | FEHLT | 0/1 | Keine Branchen-Seiten vorhanden |
| 5 | Wissen-Seiten | FEHLT | 0/1 | Keine Wissen-Seiten unter /wissen |
| 6 | Blog System | OK | 1/1 | Blog mit 9 Artikeln, blog.ts, [slug]-Route vorhanden |
| 7 | Tool/Rechner | FEHLT | 0/0.5 | /weather und /harvest sind App-Demos, nicht unter /tools |
| 8 | Mega-Menu Navbar | TEILWEISE | 0.5/2 | Einfache Link-Liste ohne Dropdowns |
| 9 | Multi-Column Footer | OK | 1/1 | 4-Spalten + Newsletter vorhanden |
| 10 | Breadcrumbs | FEHLT | 0/1 | Keine Breadcrumbs-Komponente vorhanden |
| 11 | StructuredData | TEILWEISE | 1/2 | Organization, SoftwareApplication, FAQ, Article vorhanden; WebSite Schema fehlt |
| 12 | Sitemap | TEILWEISE | 1/2 | Nur 9 Seiten erfasst; /preise, /funktionen, /kontakt, /agb, /bienenverwaltung-software fehlen |
| 13 | Proxy (Middleware) | FEHLT | 0/0.5 | Keine proxy.ts oder middleware.ts vorhanden |
| 14 | SEO Metadata | OK | 2/2 | Alle geprueften Seiten haben Title, Description, Canonical, OG |
| 15 | Animations | OK | 0.5/0.5 | framer-motion vorhanden, wird in Sections verwendet |

## Detaillierte Analyse

### Vorhandene Seiten (9)
- `/` - Homepage mit allen SEO-Sections
- `/datenschutz` - Legal Page (teilweise SEO)
- `/impressum` - Legal Page
- `/signup` - App-Registrierung
- `/blog` - Blog-Index
- `/blog/[slug]` - Blog-Detail
- `/demo` - Demo-Preview
- `/weather` - Wetter-Widget (App-Funktion)
- `/harvest` - Ernte-Tracker (App-Funktion)

### Fehlende Kernseiten
- `/preise` - Preisseite fehlt komplett
- `/funktionen` - Funktionsuebersicht fehlt
- `/kontakt` - Kontaktseite fehlt
- `/agb` - AGB-Seite fehlt
- `/bienenverwaltung-software` - Dedicated Software Landing Page fehlt

### Fehlende Struktur
- Keine /wissen Sektion
- Keine Branchen-Seiten (z.B. /imkerei, /landwirtschaft)
- Kein /tools Verzeichnis fuer Rechner
- Keine Breadcrumbs-Komponente
- Keine Mega-Menu Navigation mit Dropdowns
- Kein Proxy fuer App-Subdomain-Redirect

## Empfohlene Upgrade-Reihenfolge

Priorisiert nach Impact (Hoch-gewichtete Kategorien zuerst):

1. **Core Pages (/preise, /funktionen, /kontakt)** – Hochprioritaet
   - Diese Seiten sind Pflicht fuer jeden SaaS-Marketingauftritt
   - Fuehrt zu: 2 Punkten
   - Aufwand: Mittel

2. **Legal Pages (/agb)** – Hochprioritaet
   - Fehlende AGB-Seite ergaenzen
   - Fuehrt zu: 1 Punkt
   - Aufwand: Niedrig

3. **Software Landing Page (/bienenverwaltung-software)** – Hochprioritaet
   - Dedicated SEO-optimierte Seite fuer Haupt-Keyword
   - Beta-Registrierungsformular mit API-Route
   - Fuehrt zu: 2 Punkten
   - Aufwand: Hoch

4. **Sitemap Update** – Hochprioritaet
   - Alle neuen Seiten in Sitemap aufnehmen
   - Korrekte Prioritaeten setzen
   - Fuehrt zu: 1 Punkt
   - Aufwand: Niedrig

5. **Mega-Menu Navbar** – Mittelprioritaet
   - Dropdown-Navigation mit Branchen, Wissen, Blog
   - Fuehrt zu: 1.5 Punkten
   - Aufwand: Mittel

6. **Breadcrumbs** – Mittelprioritaet
   - Breadcrumbs-Komponente erstellen
   - In alle Unterseiten einfuegen
   - Fuehrt zu: 1 Punkt
   - Aufwand: Mittel

7. **Wissen-Seiten** – Mittelprioritaet
   - /wissen Index + 3 Wissen-Artikel
   - Branchenspezifische Inhalte (z.B. Varroa-Behandlung, Honig-Qualitaet)
   - Fuehrt zu: 1 Punkt
   - Aufwand: Hoch

8. **Branchen-Seiten** – Mittelprioritaet
   - 3 Branchen-Seiten erstellen (z.B. Hobbyimker, Berufsimker, Direktvermarkter)
   - Fuehrt zu: 1 Punkt
   - Aufwand: Hoch

9. **Proxy (middleware)** – Niedrige Prioritaet
   - src/proxy.ts erstellen fuer App-Subdomain-Redirect
   - Fuehrt zu: 0.5 Punkt
   - Aufwand: Niedrig

## Vorhandene Staerken

1. **Blog System funktioniert** - 9 Blog-Artikel vorhanden, blog.ts Utility existiert, MDX wird genutzt
2. **StructuredData Komponenten** - JsonLd.tsx mit Organization, SoftwareApplication, FAQ, Article, Breadcrumb, HowTo Schemas
3. **SEO Metadata** - Alle Seiten haben grundlegende Metadata (Title, Description)
4. **Animations** - Framer Motion wird in Homepage-Sections verwendet
5. **Footer** - 4-Spalten Layout mit Newsletter-Section bereits vorhanden
6. **Design-System** - Eigenes Theme mit Honig-Farben (earth-*, honey-*) eingerichtet

## Naechste Schritte

1. Core Pages (/preise, /funktionen, /kontakt) ergaenzen
2. /agb Seite erstellen
3. /bienenverwaltung-software Seite erstellen
4. Sitemap mit neuen Seiten aktualisieren
5. Mega-Menu Navbar auf Dropdown umstellen

## Technische Hinweise

- Projekt nutzt Next.js (app directory im Root, nicht src/)
- Projekt nutzt Tailwind CSS mit Custom Color Palette (earth, honey)
- Blog nutzt eigene parseFrontmatter Funktion (nicht gray-matter)
- Framer Motion bereits installiert
- Keine shadcn/ui Komponenten im Einsatz
