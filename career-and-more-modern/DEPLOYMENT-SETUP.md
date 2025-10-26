# 🚀 GitHub Pages Deployment Setup - Anleitung

## ✅ Was bereits erledigt ist:

1. **GitHub Actions Workflow erstellt** ✅
   - Datei: `.github/workflows/deploy.yml`
   - Automatisches Build und Deploy bei jedem Push
   - Optimiert für React/Vite Projekte

2. **Lokaler Build getestet** ✅
   - `npm run build` funktioniert einwandfrei
   - `dist/` Verzeichnis ist vollständig mit allen Karriere-Seiten
   - Alle React-Komponenten sind enthalten

3. **Git-Repository bereit** ✅
   - Workflow ist committed
   - Bereit für Push zu GitHub

## 🔧 Nächste Schritte für Live-Deployment:

### **Schritt 1: GitHub Repository erstellen/verbinden**

#### Option A: Neues Repository erstellen
1. Gehen Sie zu https://github.com/new
2. Repository-Name: `career-and-more-modern`
3. Wählen Sie "Public" (für kostenlose GitHub Pages)
4. **WICHTIG:** Lassen Sie alle Checkboxen leer (kein README, keine .gitignore, keine Lizenz)
5. Klicken Sie "Create repository"

#### Option B: Bestehendes Repository verwenden
Falls Sie bereits ein Repository haben, notieren Sie die URL.

### **Schritt 2: Remote hinzufügen und pushen**

```bash
# Für neues Repository (ersetzen Sie USERNAME und REPO-NAME):
git remote add origin https://github.com/USERNAME/career-and-more-modern.git

# Für bestehendes Repository:
git remote add origin https://github.com/USERNAME/BESTEHENDES-REPO.git

# Pushen Sie das Projekt:
git push -u origin main
```

### **Schritt 3: GitHub Pages aktivieren**

1. Gehen Sie zu Ihrem Repository auf GitHub
2. Klicken Sie auf **"Settings"** (oben rechts)
3. Scrollen Sie runter zu **"Pages"** (linke Seitenleiste)
4. Unter **"Source"** wählen Sie **"GitHub Actions"**
5. Speichern Sie die Einstellungen

### **Schritt 4: Erste Deployment auslösen**

Nach dem Push wird automatisch das GitHub Actions Workflow gestartet:
1. Gehen Sie zu **"Actions"** Tab in Ihrem Repository
2. Sie sollten eine laufende "Deploy to GitHub Pages" Aktion sehen
3. Warten Sie 2-3 Minuten bis zum Abschluss

## 🌐 Ihre Website wird verfügbar sein unter:

**`https://USERNAME.github.io/career-and-more-modern`**

## 📋 Was das Workflow macht:

1. **Checkout** des Codes
2. **Node.js Setup** (Version 18)
3. **Dependencies installieren** (`npm ci`)
4. **Build ausführen** (`npm run build`)
5. **Upload** des `dist/` Verzeichnisses
6. **Deploy** zu GitHub Pages

## 🔍 Überprüfung nach Deployment:

- ✅ Website lädt ohne Fehler
- ✅ Alle Karriere-Seiten funktionieren (`/career`, `/career/jobs`, `/career/application`, `/career/employee-branding`)
- ✅ Navigation funktioniert
- ✅ Responsive Design funktioniert
- ✅ Keine 404-Fehler

## 🚨 Troubleshooting:

### Build schlägt fehl:
```bash
# Lokal testen:
npm run build
npm run preview
```

### Workflow schlägt fehl:
1. Prüfen Sie die "Actions" Tab auf Fehlerdetails
2. Meistens sind es fehlende Dependencies

### Website lädt nicht:
1. Warten Sie 5-10 Minuten (GitHub Pages braucht Zeit)
2. Prüfen Sie die GitHub Pages Settings
3. Prüfen Sie die Actions für Fehler

## 🎯 Nach erfolgreichem Deployment:

Ihre career & more Website ist dann live mit:
- ✅ Vollständigen Karriere-Seiten
- ✅ Bewerbungsformular
- ✅ Stellenangebote-Tabelle
- ✅ Employee Branding Seite
- ✅ Responsive Design
- ✅ Automatische Updates bei jedem Push

## 📞 Support:

Falls Probleme auftreten, prüfen Sie:
1. GitHub Actions Logs
2. Lokalen Build (`npm run build`)
3. Repository Permissions

**Viel Erfolg beim Deployment! 🚀**
