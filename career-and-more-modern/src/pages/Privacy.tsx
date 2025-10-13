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
                  Die Erfassung und Verarbeitung Ihrer Daten erfolgt ausschließlich in Deutschland und unterliegt den strengen deutschen Datenschutzgesetzen.
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

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Hinweis zur verantwortlichen Stelle</h3>
                <p className="text-gray-700 mb-4">
                  Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                </p>
                <p className="text-gray-700 mb-4">
                  career & more GmbH<br />
                  Lettenweg 7<br />
                  91781 Weißenburg<br />
                  Deutschland
                </p>
                <p className="text-gray-700 mb-4">
                  Telefon: 09141/877990<br />
                  E-Mail: info@careerandmore.de
                </p>
                <p className="text-gray-700 mb-4">
                  Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Datenerfassung auf dieser Website</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Kontaktformular</h3>
                <p className="text-gray-700 mb-4">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
                <p className="text-gray-700 mb-4">
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.
                </p>
                <p className="text-gray-700 mb-4">
                  Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Anfrage per E-Mail, Telefon oder Telefax</h3>
                <p className="text-gray-700 mb-4">
                  Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Analyse-Tools und Tools von Drittanbietern</h2>
                <p className="text-gray-700 mb-4">
                  Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit sogenannten Analyseprogrammen.
                </p>
                <p className="text-gray-700 mb-4">
                  Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden Datenschutzerklärung.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Newsletter</h2>
                <p className="text-gray-700 mb-4">
                  Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, benötigen wir von Ihnen eine E-Mail-Adresse sowie Informationen, welche uns die Überprüfung gestatten, dass Sie der Inhaber der angegebenen E-Mail-Adresse sind und mit dem Empfang des Newsletters einverstanden sind.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Plugins und Tools</h2>
                <p className="text-gray-700 mb-4">
                  Diese Website nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts, die von Google bereitgestellt werden. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.
                </p>
                <p className="text-gray-700 mb-4">
                  Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu den Servern von Google aufnehmen. Hierdurch erlangt Google Kenntnis darüber, dass über Ihre IP-Adresse diese Website aufgerufen wurde. Die Nutzung von Google WebFonts erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse besteht in der einheitlichen Darstellung des Schriftbildes auf unserer Website.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">8. eRecht24 Safe Sharing</h2>
                <p className="text-gray-700 mb-4">
                  Diese Datenschutzerklärung wurde mit dem Datenschutzerklärungs-Generator der eRecht24 erstellt.
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
