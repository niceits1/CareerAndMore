# Career & More - Moderne React Website

Eine vollständig neu entwickelte, moderne Website für Career & More - Personal- und Unternehmensberatung in Weißenburg.

## 🚀 Features

- **Modern React 18** mit TypeScript
- **Tailwind CSS** für professionelles Styling
- **Framer Motion** für flüssige Animationen
- **React Router** für Single Page Application
- **Responsive Design** für alle Geräte
- **SEO-optimiert** mit Meta-Tags
- **Performance-optimiert** mit Vite Build-Tool

## 📋 Inhalte

### Services
- Direct Search & Recruiting
- Employer Branding
- Personal-Entwicklung
- Management Audit
- Mediation
- Outplacement
- Organisations-Entwicklung

### Consulting
- Management-Beratung
- Strategisches Personal-Management
- Unternehmens-Nachfolge

### Team
- Oliver Pickl (Managing Director)
- Claudia Hartmann (Senior Recruiting Expert)
- Karl-Heinz Mohr (Recruiting Expert)

## 🛠️ Technologie-Stack

- **Frontend Framework:** React 18.2.0
- **Build Tool:** Vite 4.5.0
- **Styling:** Tailwind CSS 3.3.5
- **Animation:** Framer Motion 10.16.5
- **Routing:** React Router DOM 6.20.1
- **Icons:** Lucide React 0.294.0
- **Language:** TypeScript 5.2.2

## 🚀 Installation & Start

### Voraussetzungen
- Node.js (Version 16 oder höher)
- npm oder yarn

### Installation
```bash
# Dependencies installieren
npm install

# Entwicklungsserver starten
npm run dev

# Build für Produktion erstellen
npm run build

# Build-Vorschau starten
npm run preview
```

### Verfügbare Scripts
- `npm run dev` - Startet den Entwicklungsserver auf http://localhost:3000
- `npm run build` - Erstellt einen optimierten Build für Produktion
- `npm run preview` - Startet einen lokalen Server für den Build
- `npm run lint` - Führt ESLint aus

## 📁 Projektstruktur

```
career-and-more-modern/
├── public/
│   ├── images/
│   │   └── team/          # Team-Bilder
│   └── favicon.ico
├── src/
│   ├── components/        # Wiederverwendbare Komponenten
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   └── ...
│   ├── pages/            # Seiten-Komponenten
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   └── ...
│   ├── data/             # Statische Daten
│   │   └── company.ts
│   ├── types/            # TypeScript-Typen
│   │   └── index.ts
│   ├── App.tsx           # Haupt-App-Komponente
│   ├── main.tsx          # Einstiegspunkt
│   └── index.css         # Globale Styles
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Design & Branding

### Farben
- **Primary:** Grün (#058008) - Hauptfarbe für CTAs und Akzente
- **Secondary:** Grau-Töne für Text und Hintergründe
- **Gradient:** Moderne Farbverläufe für Highlights

### Typografie
- **Font:** Inter (Google Fonts)
- **Responsive:** Verschiedene Schriftgrößen für verschiedene Bildschirmgrößen

### Animationen
- **Fade-in:** Sanfte Einblendungen
- **Slide-up:** Aufwärts-Bewegungen
- **Hover-Effekte:** Interaktive Elemente
- **Scroll-Animationen:** Elemente erscheinen beim Scrollen

## 🌐 Deployment

### Netlify
1. Repository zu Netlify verknüpfen
2. Build-Befehl: `npm run build`
3. Publish-Directory: `dist`
4. Automatische Deployments bei Git-Pushes

### IONOS
1. Build lokal erstellen: `npm run build`
2. Inhalt des `dist`-Ordners hochladen
3. Domain konfigurieren

### Andere Hosting-Provider
- Build-Dateien aus dem `dist`-Ordner verwenden
- SPA-Routing konfigurieren (alle Routen zu index.html weiterleiten)

## 📱 Responsive Design

Die Website ist vollständig responsive und optimiert für:
- **Desktop:** 1024px+
- **Tablet:** 768px - 1023px
- **Mobile:** 320px - 767px

## 🔍 SEO & Performance

### SEO-Features
- Semantic HTML5
- Meta-Tags für jede Seite
- Strukturierte Daten (Schema.org)
- Sitemap-ready

### Performance-Optimierungen
- Code-Splitting
- Lazy Loading
- Optimierte Bilder
- Gzip-Kompression
- CDN-ready

## 📞 Kontakt & Support

**Career & More GmbH**
- Adresse: Lettenweg 7, 91781 Weißenburg
- Telefon: 09141/877990
- E-Mail: info@careerandmore.de
- Website: https://careerandmore.de

## 📄 Lizenz

Alle Inhalte und das Design sind Eigentum von Career & More GmbH. Die technische Implementierung steht unter der MIT-Lizenz.

---

**Entwickelt mit ❤️ für Career & More**
