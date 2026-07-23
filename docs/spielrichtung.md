# Super Deutsch Party V2: Spielrichtung

## Leitidee

Ein lokales Party-Brettspiel fuer Grundschulkinder, bei dem Deutschaufgaben wie kurze, klare Microgames wirken: schnell verstehen, sofort handeln, direkt Feedback bekommen. Das Spiel soll die Klebensfrei-Arbeiten als eigene Welt nutzen, nicht als austauschbare Dekoration.

## Inspirationen

- WarioWare: sehr kurze Aufgaben mit einem klaren Verb pro Runde, sofortige Erfolgserkennung, wechselnde Mechaniken.
- Mario Party: Brettspiel-Spannung, Wuerfel, Felder, Ueberraschungen, Belohnungen und gemeinsames Lachen.
- Khan Academy Kids / Duolingo ABC: freundliche Figuren, sichere Lernumgebung, kleinschrittige Aufgaben, motivierende Rueckmeldung.

## Umsetzung im bestehenden Stack

- Vanilla JS und Vite bleiben bestehen.
- `GameController` bleibt Quelle der Spielregeln.
- Renderer und Minigames liefern Animation, Sound, Partikel und Eingabe.
- Assets laufen ueber `asset-manifest.js` mit stabilen IDs.
- Textlastige UI bleibt DOM-basiert, damit Kinder die Aufgaben gut lesen koennen.

## Klebensfrei-Welt

Aktuell integriert:

- Zora als Zebra-Figur
- Nuba als Wolken-Figur
- Mira als Einhorn-ABC-Figur
- Leo als Dschungelbegleiter
- Suedamerika-Karte als Board-/Story-Requisite
- Klebensfrei-Blitzreise als echtes Minigame mit Zora-, Nuba-, Mira- und Leo-Varianten

Naechste gute Varianten:

- Zora-Muster ausbauen: Woerter auf Zebra-Streifen ziehen statt nur tippen.
- Nuba-Leiseflug ausbauen: Silben-Wolken per Swipe einsammeln.
- Mira-ABC-Zauber ausbauen: Buchstaben in die richtige Reihenfolge bringen.
- Leo-Dschungelspur ausbauen: Lesespuren als kleine Kartenroute verfolgen.
- Reisekarte: Auf Feldern kurze Ortsschilder lesen und die richtige Aussage waehlen.

## Spielgefuehl-Regeln

- Jede Aufgabe braucht eine sichtbare Handlung: tippen, ziehen, sortieren, finden, fangen, reparieren.
- Jede richtige Antwort bekommt Sound, Bewegung und kurze Belohnung.
- Fehler bleiben weich, aber eindeutig.
- Persistente UI darf das Board nicht ueberdecken.
- Kinder sollen in wenigen Sekunden wissen, was sie tun sollen.
