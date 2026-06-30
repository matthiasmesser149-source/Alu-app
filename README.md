# ALU - App-Prototyp

Ein innovatives Vermittlungssystem für Aushilfen, Azubis und Gesellen, basierend auf einer interaktiven Google Maps Live-Ansicht.

## ✨ Kern-Features

*   **Live-Bounty-Board:** Jobs werden als farbige Live-Pins direkt auf der Google-Karte dargestellt (Gelb = Aushilfe, Grün = Azubi, Blau = Geselle).
*   **Diablo-III-Avatarsystem:** Nutzer leveln ihr Profil durch abgeschlossene Jobs auf. Höhere Level schalten epische visuelle Upgrades für den Avatar-Rahmen frei (bis hin zum legendären Level-4-Funkenflug).
*   **B2B-Behördensperre:** Integrierter Sicherheitsfilter im Backend, der kritische Infrastrukturen (wie Polizei oder Feuerwehr) vor unbefugtem Zugriff schützt.

## 📁 Projektstruktur

*   `/frontend`: Enthält die Benutzeroberfläche (`index.html`) inklusive Google Maps API-Anbindung und den Diablo-Rahmen-Styles.
*   `/backend`: Enthält den Express-Server (`server.js`) für die Live-Pin-Verteilung und den B2B-Schutzfilter.

## 🚀 Für Entwickler
1. `npm install` im Backend-Ordner ausführen.
2. Eigenen Google Maps API-Key in der `index.html` hinterlegen.
3. Server via `node server.js` starten (Port 3000).

