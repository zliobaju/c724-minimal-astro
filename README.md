# connect724 minimale Website

Website erstellen mit **Astro** [(https://astro.build)](https://astro.build) Web-Framework.

## 🔨 Anfang

Um zu beginnen - Abhängigkeiten installieren:

```bash
npm install
```

Live Lokal Entwicklung:

```bash
npm run dev
```

Die Firmenadresse auf der Website ist zeitabhängig und ändert sich zu bestimmten Zeiten. Das Datum kann in der Datei `.env` geändert werden.

```
PUBLIC_CHANGE_DATE="2025-01-25 03:00:00"
```

## 🚀 Ende

> (optional) Live Lokal Produktion Vorschau:
> ```bash
> npm run build && npm run preview
> ```

Nach dem Vornehmen von Änderungen zur Vorbereitung der 🚀 Produktion:

```bash
npm run build
```

Der Produktionsbefehl exportiert alle Ressourcen in `./dist` Ordner. <br/>
Einfach alle Inhalte auf den Webserver kopieren.