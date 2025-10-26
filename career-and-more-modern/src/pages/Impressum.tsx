import { motion } from 'framer-motion';
import { companyInfo } from '@/data/company';

const Impressum = () => {
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
              <span className="gradient-text">Impressum</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Angaben gemäß § 5 TMG
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
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Unternehmensdaten</h2>
                
                <div className="space-y-4 mb-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Firmenname</h3>
                    <p className="text-gray-700">{companyInfo.legal.companyName}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Anschrift</h3>
                    <p className="text-gray-700">{companyInfo.legal.address}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Kontakt</h3>
                    <p className="text-gray-700">
                      Telefon: <a href={`tel:${companyInfo.legal.phone}`} className="text-primary-600 hover:text-primary-700">{companyInfo.legal.phone}</a><br />
                      E-Mail: <a href={`mailto:${companyInfo.legal.email}`} className="text-primary-600 hover:text-primary-700">{companyInfo.legal.email}</a>
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Vertreten durch</h3>
                    <p className="text-gray-700">{companyInfo.legal.manager}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Registereintrag</h3>
                    <p className="text-gray-700">
                      Eingetragen im Handelsregister<br />
                      Registergericht: {companyInfo.legal.register}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Umsatzsteuer-ID</h3>
                    <p className="text-gray-700">
                      Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                      {companyInfo.legal.taxId}
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Urheberrechtliche Hinweise</h2>
                <p className="text-gray-700 mb-4">
                  Verwendetes Bildmaterial von pixabay.de und design-wie.de
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Information gemäß § 36 VSBG</h2>
                <p className="text-gray-700 mb-4">
                  Nach § 36 VSBG (Verbraucherstreitbeilegungsgesetz – über alternative Streitbeilegung in Verbrauchersachen) erklärt der Betreiber dieser Website:
                </p>
                <p className="text-gray-700 mb-4">
                  Weder bereit noch verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Haftung für Inhalte</h2>
                <p className="text-gray-700 mb-4">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
                <p className="text-gray-700 mb-4">
                  Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Haftung für Links</h2>
                <p className="text-gray-700 mb-4">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                </p>
                <p className="text-gray-700 mb-4">
                  Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Urheberrecht</h2>
                <p className="text-gray-700 mb-4">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                </p>
                <p className="text-gray-700 mb-4">
                  Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Impressum;


