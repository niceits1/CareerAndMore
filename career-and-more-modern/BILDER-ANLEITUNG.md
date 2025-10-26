# Bilder-Anleitung für Netlify

## Übersicht
Die Website ist so konfiguriert, dass sie die folgenden Bilder für die Team-Mitglieder erwartet:

### Erforderliche Bilder
Platzieren Sie die folgenden Bilder im Ordner `public/images/team/`:

1. **claudia-hartmann.jpg** - Bild für Claudia Hartmann
2. **karl-heinz-mohr.jpg** - Bild für Karl-Heinz Mohr  
3. **oliver-pickl.jpg** - Bild für Oliver Pickl

### Aktuelle Bilder
Die folgenden Bilder sind bereits im `public/images/team/` Ordner vorhanden:
- ✅ claudia-hartmann.jpg
- ✅ karl-heinz-mohr.jpg
- ✅ oliver-pickl.jpg

### So fügen Sie neue Bilder hinzu:

#### Option 1: Lokale Bilder verwenden
1. Kopieren Sie Ihre Bilder in den `pictures/` Ordner
2. Benennen Sie sie um zu:
   - `claudia-hartmann.jpg`
   - `karl-heinz-mohr.jpg`
   - `oliver-pickl.jpg`
3. Kopieren Sie sie dann in den `public/images/team/` Ordner

#### Option 2: Direkt in public/images/team/
1. Kopieren Sie Ihre Bilder direkt in den `public/images/team/` Ordner
2. Stellen Sie sicher, dass die Dateinamen exakt sind:
   - `claudia-hartmann.jpg`
   - `karl-heinz-mohr.jpg`
   - `oliver-pickl.jpg`

### Für Netlify Deployment
Wenn Sie die Website auf Netlify deployen:

1. **Stellen Sie sicher, dass die Bilder im `public/images/team/` Ordner sind**
2. **Die Bilder werden automatisch mit der Website hochgeladen**
3. **Die URLs sind dann:**
   - `https://ihre-domain.netlify.app/images/team/claudia-hartmann.jpg`
   - `https://ihre-domain.netlify.app/images/team/karl-heinz-mohr.jpg`
   - `https://ihre-domain.netlify.app/images/team/oliver-pickl.jpg`

### Fallback-Verhalten
Falls ein Bild nicht geladen werden kann, wird automatisch ein Gradient mit den Initialen der Person angezeigt. Das bedeutet, dass die Website auch ohne Bilder funktioniert.

### Empfohlene Bildgrößen
- **Format:** JPG oder PNG
- **Größe:** Quadratisch (z.B. 400x400px oder 600x600px)
- **Qualität:** Hochauflösend für beste Darstellung

### Animationen
Alle bestehenden Animationen bleiben erhalten:
- ✅ Hover-Effekte auf den Team-Karten
- ✅ Scroll-Animationen beim Laden der Seite
- ✅ Smooth Transitions zwischen Seiten
- ✅ Scroll-to-top Funktionalität beim Seitenwechsel


