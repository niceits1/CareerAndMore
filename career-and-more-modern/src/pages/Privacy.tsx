import { motion } from 'framer-motion';

const Privacy = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      className="pt-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <motion.section
        className="section-padding bg-gradient-to-br from-gray-50 to-white"
        variants={itemVariants}
      >
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              <span className="gradient-text">Datenschutzerklärung</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Information über die Erhebung personenbezogener Daten
            </p>
          </div>
        </div>
      </motion.section>

      {/* Content */}
      <motion.section
        className="section-padding"
        variants={itemVariants}
      >
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
              variants={itemVariants}
            >
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Datenschutz auf einen Blick</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Allgemeine Hinweise</h3>
                <p className="text-gray-700 mb-4">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Datenerfassung auf dieser Website</h3>
                <p className="text-gray-700 mb-4">
                  <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Hosting</h2>
                <p className="text-gray-700 mb-4">
                  Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Netlify Inc.</strong><br />
                  44 Tehama Street<br />
                  San Francisco, CA 94105, USA<br />
                  <a href="https://www.netlify.com/privacy/" className="text-primary-600 hover:text-primary-700 underline" target="_blank" rel="noopener noreferrer">https://www.netlify.com/privacy/</a>
                </p>
                <p className="text-gray-700 mb-4">
                  Die Erfassung und Verarbeitung Ihrer Daten erfolgt ausschließlich in Deutschland und unterliegt den strengen deutschen Datenschutzgesetzen. Netlify hat sich dem EU-US Data Privacy Framework angeschlossen und gewährleistet angemessene Datenschutzstandards.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Allgemeine Hinweise und Pflichtinformationen</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Datenschutz</h3>
                <p className="text-gray-700 mb-4">
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                </p>
                <p className="text-gray-700 mb-4">
                  Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
                </p>
                <p className="text-gray-700 mb-4">
                  Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Benennung der verantwortlichen Stelle</h3>
                <p className="text-gray-700 mb-4">
                  Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                </p>
                <p className="text-gray-700 mb-4">
                  career & more GmbH<br />
                  Lettenweg 7<br />
                  91781 Weißenburg i. Bay.<br />
                  Deutschland
                </p>
                <p className="text-gray-700 mb-4">
                  Telefon: +49 (0) 9141 8 77 99 0<br />
                  E-Mail: info@careerandmore.de
                </p>
                <p className="text-gray-700 mb-4">
                  Die verantwortliche Stelle entscheidet allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, Kontaktdaten o. Ä.).
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
                <p className="text-gray-700 mb-4">
                  Nur mit Ihrer ausdrücklichen Einwilligung sind einige Vorgänge der Datenverarbeitung möglich. Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde</h3>
                <p className="text-gray-700 mb-4">
                  Als Betroffener steht Ihnen im Falle eines datenschutzrechtlichen Verstoßes ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde bezüglich datenschutzrechtlicher Fragen ist der Landesdatenschutzbeauftragte des Bundeslandes, in dem sich der Sitz unseres Unternehmens befindet. Der folgende Link stellt eine Liste der Datenschutzbeauftragten sowie deren Kontaktdaten bereit: <a href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html" className="text-primary-600 hover:text-primary-700 underline" target="_blank" rel="noopener noreferrer">https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html</a>.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Recht auf Datenübertragbarkeit</h3>
                <p className="text-gray-700 mb-4">
                  Ihnen steht das Recht zu, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an Dritte aushändigen zu lassen. Die Bereitstellung erfolgt in einem maschinenlesbaren Format. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Recht auf Auskunft, Berichtigung, Sperrung, Löschung</h3>
                <p className="text-gray-700 mb-4">
                  Sie haben jederzeit im Rahmen der geltenden gesetzlichen Bestimmungen das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, Herkunft der Daten, deren Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Diesbezüglich und auch zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit über die im Impressum aufgeführten Kontaktmöglichkeiten an uns wenden.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">SSL- bzw. TLS-Verschlüsselung</h3>
                <p className="text-gray-700 mb-4">
                  Aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, die Sie an uns als Seitenbetreiber senden, nutzt unsere Website eine SSL-bzw. TLS-Verschlüsselung. Damit sind Daten, die Sie über diese Website übermitteln, für Dritte nicht mitlesbar. Sie erkennen eine verschlüsselte Verbindung an der „https://" Adresszeile Ihres Browsers und am Schloss-Symbol in der Browserzeile.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Server-Log-Dateien</h2>
                <p className="text-gray-700 mb-4">
                  In Server-Log-Dateien erhebt und speichert der Provider der Website automatisch Informationen, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>Besuchte Seite auf unserer Domain</li>
                  <li>Datum und Uhrzeit der Serveranfrage</li>
                  <li>Browsertyp und Browserversion</li>
                  <li>Verwendetes Betriebssystem</li>
                  <li>Referrer URL</li>
                  <li>Hostname des zugreifenden Rechners</li>
                  <li>IP-Adresse</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  Es findet keine Zusammenführung dieser Daten mit anderen Datenquellen statt. Grundlage der Datenverarbeitung bildet Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Datenerfassung auf dieser Website</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Kontaktformular</h3>
                <p className="text-gray-700 mb-4">
                  Per Kontaktformular übermittelte Daten werden einschließlich Ihrer Kontaktdaten gespeichert, um Ihre Anfrage bearbeiten zu können oder um für Anschlussfragen bereitzustehen. Eine Weitergabe dieser Daten findet ohne Ihre Einwilligung nicht statt.
                </p>
                <p className="text-gray-700 mb-4">
                  Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
                </p>
                <p className="text-gray-700 mb-4">
                  Über das Kontaktformular übermittelte Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder keine Notwendigkeit der Datenspeicherung mehr besteht. Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Anfrage per E-Mail, Telefon oder Telefax</h3>
                <p className="text-gray-700 mb-4">
                  Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Cookies</h2>
                <p className="text-gray-700 mb-4">
                  Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert. Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
                </p>
                <p className="text-gray-700 mb-4">
                  Einige Cookies sind "Session-Cookies." Solche Cookies werden nach Ende Ihrer Browser-Sitzung von selbst gelöscht. Hingegen bleiben andere Cookies auf Ihrem Endgerät bestehen, bis Sie diese selbst löschen. Solche Cookies helfen uns, Sie bei Rückkehr auf unserer Website wiederzuerkennen.
                </p>
                <p className="text-gray-700 mb-4">
                  Mit einem modernen Webbrowser können Sie das Setzen von Cookies überwachen, einschränken oder unterbinden. Viele Webbrowser lassen sich so konfigurieren, dass Cookies mit dem Schließen des Programms von selbst gelöscht werden. Die Deaktivierung von Cookies kann eine eingeschränkte Funktionalität unserer Website zur Folge haben.
                </p>
                <p className="text-gray-700 mb-4">
                  Das Setzen von Cookies, die zur Ausübung elektronischer Kommunikationsvorgänge oder der Bereitstellung bestimmter, von Ihnen erwünschter Funktionen (z.B. Warenkorb) notwendig sind, erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Als Betreiber dieser Website haben wir ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien und reibungslosen Bereitstellung unserer Dienste. Sofern die Setzung anderer Cookies (z.B. für Analyse-Funktionen) erfolgt, werden diese in dieser Datenschutzerklärung separat behandelt.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Google Analytics (nur mit Einwilligung)</h2>
                <p className="text-gray-700 mb-4">
                  <strong>Wichtiger Hinweis:</strong> Google Analytics wird nur mit Ihrer ausdrücklichen Einwilligung verwendet. Ohne Ihre Einwilligung werden keine Analytics-Daten erfasst.
                </p>
                <p className="text-gray-700 mb-4">
                  Unsere Website verwendet Funktionen des Webanalysedienstes Google Analytics 4 (GA4). Anbieter des Webanalysedienstes ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland („Google").
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Rechtsgrundlage:</strong> Die Verarbeitung erfolgt ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können Ihre Einwilligung jederzeit über unser Cookie-Banner widerrufen.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Speicherdauer:</strong> Die Analytics-Daten werden für 14 Monate gespeichert und dann automatisch gelöscht.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Was wird erfasst?</h3>
                <p className="text-gray-700 mb-4">
                  Google Analytics erfasst anonymisierte Daten über Ihr Nutzungsverhalten auf unserer Website, wie:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>Besuchte Seiten und Verweildauer</li>
                  <li>Herkunft der Besucher (Land, Stadt)</li>
                  <li>Verwendete Geräte und Browser</li>
                  <li>Anonymisierte IP-Adresse</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">IP-Anonymisierung</h3>
                <p className="text-gray-700 mb-4">
                  Wir haben die IP-Anonymisierung aktiviert. Ihre IP-Adresse wird vor der Übertragung an Google gekürzt und anonymisiert. Eine Zuordnung zu Ihrer Person ist nicht möglich.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Widerruf der Einwilligung</h3>
                <p className="text-gray-700 mb-4">
                  Sie können Ihre Einwilligung jederzeit über unser Cookie-Banner widerrufen oder die Erfassung durch Google Analytics verhindern, indem Sie das Browser-Plugin herunterladen: <a href="https://tools.google.com/dlpage/gaoptout?hl=de" className="text-primary-600 hover:text-primary-700 underline" target="_blank" rel="noopener noreferrer">https://tools.google.com/dlpage/gaoptout?hl=de</a>.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Auftragsverarbeitung</h3>
                <p className="text-gray-700 mb-4">
                  Wir haben mit Google einen Vertrag zur Auftragsverarbeitung abgeschlossen. Google verarbeitet die Daten ausschließlich in unserem Auftrag und nach unseren Weisungen.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Weitere Informationen</h3>
                <p className="text-gray-700 mb-4">
                  Einzelheiten zum Umgang mit Nutzerdaten bei Google Analytics finden Sie in der Datenschutzerklärung von Google: <a href="https://policies.google.com/privacy" className="text-primary-600 hover:text-primary-700 underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a>.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Schriftarten (Web Fonts)</h2>
                <p className="text-gray-700 mb-4">
                  Diese Website nutzt zur einheitlichen Darstellung von Schriftarten die Inter-Font-Familie, die lokal auf unseren Servern gehostet wird. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Fonts von unserem Server, um Texte und Schriftarten korrekt anzuzeigen.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Datenschutzvorteil:</strong> Da die Schriftarten lokal gehostet werden, erfolgt keine Datenübertragung an externe Server. Ihre IP-Adresse wird nicht an Drittanbieter übertragen.
                </p>
                <p className="text-gray-700 mb-4">
                  Die Nutzung der lokalen Web Fonts erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse besteht in der einheitlichen Darstellung des Schriftbildes auf unserer Website ohne Datenschutzrisiken.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Bewerberdaten / Recruiting</h2>
                <p className="text-gray-700 mb-4">
                  Als Personalberatung verarbeiten wir Bewerberdaten im Rahmen unserer Recruiting-Tätigkeit. Diese Verarbeitung erfolgt gemäß Art. 88 DSGVO i. V. m. § 26 BDSG.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Verarbeitete Daten:</strong>
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>Persönliche Daten (Name, Kontaktdaten, Geburtsdatum)</li>
                  <li>Berufliche Qualifikationen und Erfahrungen</li>
                  <li>Bewerbungsunterlagen (Lebenslauf, Zeugnisse, Anschreiben)</li>
                  <li>Kommunikationsdaten (E-Mails, Telefonate, Termine)</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  <strong>Zweck der Verarbeitung:</strong> Durchführung des Bewerbungsverfahrens, Vermittlung von Stellen, Beratung von Kundenunternehmen.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Speicherdauer:</strong> Bewerberdaten werden für 6 Monate nach Abschluss des Bewerbungsverfahrens gespeichert, sofern keine längere Speicherung erforderlich ist.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Weitergabe:</strong> Daten werden nur an potenzielle Arbeitgeber weitergegeben, wenn Sie ausdrücklich zugestimmt haben.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">10. SSL/TLS-Verschlüsselung</h2>
                <p className="text-gray-700 mb-4">
                  Die Übertragung aller Formulardaten und E-Mail-Kommunikation erfolgt verschlüsselt über HTTPS/TLS. Dies gewährleistet, dass Ihre Daten vor dem Zugriff durch Dritte geschützt sind.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">11. Fragen an den Datenschutzbeauftragten</h2>
                <p className="text-gray-700 mb-4">
                  Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail an <a href="mailto:datenschutz@careerandmore.de" className="text-primary-600 hover:text-primary-700 underline">datenschutz@careerandmore.de</a>.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">12. Quellenangabe</h2>
                <p className="text-gray-700 mb-4">
                  Diese Datenschutzerklärung wurde mit dem Datenschutz-Konfigurator von <a href="https://mein-datenschutzbeauftragter.de" className="text-primary-600 hover:text-primary-700 underline" target="_blank" rel="noopener noreferrer">mein-datenschutzbeauftragter.de</a> erstellt und entsprechend den aktuellen DSGVO-Anforderungen angepasst.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Privacy;



