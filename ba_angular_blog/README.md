# Angular Blog Application

Eine moderne Blog-Anwendung entwickelt mit Angular für Performance-Vergleiche zwischen verschiedenen Frontend-Frameworks.

## Features

### Startseite (Blog-Übersicht)
- **Hero-Bild**: Vollbreite Hero-Sektion mit dynamischem Hintergrundbild
- **Responsive Grid**: Automatisch anpassendes Grid-Layout für alle Bildschirmgrößen
- **Blog-Karten**: Jede Karte zeigt Bild, Titel, Vorschau und "Weiterlesen"-Link
- **Lazy Loading**: Bilder werden mit Lazy Loading für optimale Performance geladen

### Detailseite (Einzelartikel)
- **Vollständiger Artikel**: Anzeige des kompletten Artikelinhalts mit Markdown-Formatierung
- **Kommentarsektion**: Anzeige aller vorhandenen Kommentare mit Autor und Text
- **Navigation**: "Zurück zur Startseite"-Link für einfache Navigation
- **404-Behandlung**: Benutzerfreundliche 404-Seite für nicht gefundene Artikel

### Design & UX
- **Moderne Farbpalette**: Blau-graue Farbpalette für professionelles Aussehen
- **Responsive Design**: Vollständig responsive für Desktop, Tablet und Mobile
- **System-Schriftarten**: Optimierte Lesbarkeit durch System-Schriftarten
- **Smooth Transitions**: Sanfte Übergänge und Hover-Effekte

## Technische Details

### Architektur
- **Angular 17**: Standalone Components mit moderner Angular-Architektur
- **TypeScript**: Vollständig typisierte Anwendung
- **HTTP Client**: Laden von JSON-Daten aus statischer Datei
- **Router**: Client-side Routing zwischen Übersicht und Detailseiten

### Performance-Features
- **21 Artikel**: Umfangreiche Datenmenge für realistische Performance-Tests
- **Externe Bilder**: Verwendung von Picsum für zufällige Bilder
- **Lazy Loading**: Optimierte Bildladung
- **Caching**: Service-basiertes Caching der Blog-Daten

### Datenstruktur
```typescript
interface BlogPost {
  id: number;
  title: string;
  cover: string;
  content: string; // Markdown-Format
  comments: Comment[];
}

interface Comment {
  id: number;
  author: string;
  text: string;
}
```

## Installation & Setup

### Voraussetzungen
- Node.js (Version 18 oder höher)
- npm oder yarn

### Installation
```bash
# Dependencies installieren
npm install

# Entwicklungsserver starten
npm start

# Build für Produktion
npm run build
```

### Entwicklung
```bash
# Entwicklungsserver mit Live Reload
ng serve

# Build mit Optimierungen
ng build --configuration production

# Tests ausführen
ng test
```

## Projektstruktur

```
src/
├── app/
│   ├── blog-overview/          # Blog-Übersichtsseite
│   ├── blog-detail/           # Blog-Detailseite
│   ├── services/
│   │   └── blog.service.ts    # Daten-Service
│   ├── app.component.*        # Haupt-App-Komponente
│   ├── app.routes.ts          # Routing-Konfiguration
│   └── app.config.ts          # App-Konfiguration
├── assets/
│   └── posts.json             # Blog-Daten (21 Artikel)
└── styles.css                 # Globale Styles
```

## Performance-Aspekte

Diese Anwendung ist speziell für Performance-Vergleiche konzipiert:

1. **Initiale Ladezeit**: 21 Artikel mit entsprechenden Bildern
2. **Navigation**: Client-side Routing zwischen Seiten
3. **Rendering**: Umfangreicher Textinhalt mit Markdown-Formatierung
4. **Bildressourcen**: Externe Bilder in verschiedenen Größen
5. **Responsive Layout**: Automatische Anpassung an Bildschirmgrößen

## Browser-Support

- Chrome (neueste Version)
- Firefox (neueste Version)
- Safari (neueste Version)
- Edge (neueste Version)

## Lizenz

Dieses Projekt dient zu Demonstrations- und Vergleichszwecken.
