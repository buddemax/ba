# Vergleich der Performance von Single-Page-Applications – React, Angular und Vue

Bachelorarbeit von Max Budde (Wirtschaftsinformatik, HTW Berlin)

Berlin, 12.08.2025

Erstgutachter: Prof. Dr. Arif Wider • Zweitgutachter: Lucas Larisch

Dieses Repository enthält den vollständigen Quellcode, Messartefakte und die Dokumentation zur Bachelorarbeit „Vergleich der Performance von Single-Page-Applications – eine Analyse der Frameworks React, Angular und Vue“.

Die Arbeit untersucht die Performance-Eigenschaften der Frameworks React, Angular und Vue im klassischen Client‑Side‑Rendering (CSR) anhand dreier funktionsgleicher Prototypen (Blog‑Applikationen) und reproduzierbarer Messläufe mit Lighthouse.

Weitere Hintergrundinformationen und ausführliche Beschreibung der Methodik finden sich in `arbeit.txt`.

### Inhalte
- `ba_react_blog` – React 19.1.0 Prototyp (Blog)
- `ba_angular_blog` – Angular 19.2.0 Prototyp (Blog)
- `ba_vue_blog` – Vue 3.5.17 Prototyp (Blog)
- `docker-compose.yml` – Start aller drei Prototypen via Docker Compose
- `arbeit.txt` – Text der Bachelorarbeit

Jedes Unterprojekt enthält eine eigene `README.md` mit Details zum lokalen Start, Build und Docker‑Setup sowie einen Ordner `measurements` mit den Ergebnis‑PDFs und JSON‑Aggregationen.

## Schnellstart (Docker Compose)

Voraussetzungen: Docker Desktop (oder Docker Engine) mit Compose.

```bash
cd ba
docker compose up -d --build
```

Anwendungen nach dem Start:
- Angular: `http://localhost:3001`
- React: `http://localhost:3002`
- Vue: `http://localhost:3003`

Verwaltung:
```bash
# Logs anzeigen
docker compose logs -f

# Container stoppen und entfernen
docker compose down
```

Hinweis: Jede App wird als Production‑Build über Nginx ausgeliefert (mehrstufige Dockerfiles in den Unterordnern).

## Einzelne Projekte lokal starten

Bitte die jeweiligen Projekt‑READMEs lesen:

- React: `ba_react_blog/README.md`
- Angular: `ba_angular_blog/README.md`
- Vue: `ba_vue_blog/README.md`

Kurzüberblick der Dev‑Kommandos:
- React: `npm install` und `npm start` → `http://localhost:3000`
- Angular: `npm install` und `npm start` (oder `ng serve`) → `http://localhost:4200`
- Vue: `npm install` und `npm run dev` → `http://localhost:5173`

Empfohlene Umgebung (für Reproduzierbarkeit der Messungen):
- macOS 15.0 auf Apple M1 (8 GB RAM)
- Node.js 20.18.0, npm 10.8.2
- Google Chrome 138 (Lighthouse 12.6.0)

## Messdaten und Methodik

Die Messungen wurden in zwei Durchläufen je Framework durchgeführt und liegen in den Ordnern `ba_*/measurements` als PDFs und JSON vor:

- Erster Testlauf (10 Messläufe): FCP, LCP, Speed Index
- Zweiter Testlauf (10 Messläufe): TBT, CLS, INP

Die Prototypen sind funktionsgleich aufgebaut: Startseite mit Beitragsübersicht (inkl. Hero‑Bild und Überschrift), Detailseite mit vollständigem Beitrag und Kommentaren. Bilder werden über Picsum‑Placeholders geladen, um ein realitätsnahes Netzwerkmuster abzubilden.

Datenquellen der 50 Blog‑Einträge und 10 Kommentare (für Beitrag 1):
- React: `ba_react_blog/src/blogData.json`
- Angular: `ba_angular_blog/src/assets/posts.json`
- Vue: `ba_vue_blog/src/assets/posts.json`

Die Production‑Builds der Frameworks nutzen Minification, Tree‑Shaking und Code‑Splitting (framework‑typisch) und werden über Nginx bereitgestellt.

## Sicherheits‑ und Datenschutz‑Hinweise
- Die Prototypen sind rein statische Frontends ohne Backend und ohne Tracking.
- Externe Ressourcen: Platzhalter‑Bilder von `picsum.photos`.


## Ordnerstruktur (Ausschnitt)

```
ba/
├── ba_angular_blog/
│   └── measurements/        # Messartefakte Angular
├── ba_react_blog/
│   └── measurements/        # Messartefakte React
├── ba_vue_blog/
│   └── measurements/        # Messartefakte Vue
├── docker-compose.yml
├── arbeit.txt               # Vollständiger Text der Bachelorarbeit
└── README.md (dieses Dokument)
```