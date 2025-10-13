import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Users, TrendingUp, Award, Phone, Mail } from 'lucide-react';

const CareerEmployeeBranding = () => {
  const services = [
    {
      icon: Target,
      title: 'Arbeitgeberimage stärken',
      description: 'Wir helfen Ihnen dabei, Ihr Unternehmen als attraktiven Arbeitgeber zu positionieren und bei Fach- und Führungskräften bekannt zu machen.'
    },
    {
      icon: Users,
      title: 'Talentakquise optimieren',
      description: 'Gemeinsam entwickeln wir Strategien, um die besten Kandidaten für Ihr Unternehmen zu gewinnen und zu begeistern.'
    },
    {
      icon: TrendingUp,
      title: 'Employer Brand entwickeln',
      description: 'Wir unterstützen Sie bei der Entwicklung einer starken Arbeitgebermarke, die authentisch und überzeugend wirkt.'
    },
    {
      icon: Award,
      title: 'Mitarbeiterbindung steigern',
      description: 'Durch gezielte Maßnahmen erhöhen wir die Zufriedenheit und Bindung Ihrer bestehenden Mitarbeiter.'
    }
  ];

  const benefits = [
    'Attraktive Positionierung als Arbeitgeber',
    'Erhöhte Bewerberqualität und -anzahl',
    'Reduzierte Recruiting-Kosten',
    'Verbesserte Mitarbeiterbindung',
    'Stärkung der Unternehmenskultur',
    'Wettbewerbsvorteil im Talentmarkt'
  ];

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
              <span className="gradient-text">Employee Branding</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Stärken Sie Ihr Arbeitgeberimage und werden Sie zum attraktivsten 
              Arbeitgeber in Ihrer Branche. Wir beraten Sie dabei, Fach- und 
              Führungskräfte für Ihr Unternehmen zu gewinnen.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Main Content Section */}
      <motion.section
        className="section-padding"
        variants={itemVariants}
      >
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <motion.div variants={itemVariants}>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Stärken Sie Ihr <span className="gradient-text">Arbeitgeberimage</span>
                </h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    Wir beraten Sie im Rahmen des Personalmarketings dahingehend, 
                    Ihr Arbeitgeberimage zu stärken. Fach- und Führungskräfte sind 
                    rar und die besten davon müssen den Weg zu Ihnen finden.
                  </p>
                  <p>
                    Die bestehende Belegschaft muss ebenso spüren, was Sie als 
                    Arbeitgeber so besonders macht. Gelingt Ihnen das, wird sich 
                    dieses positive Gefühl in eine entsprechende Leistungsbereitschaft 
                    wandeln.
                  </p>
                  <p>
                    Mit unserer langjährigen Erfahrung im Personalmarketing und 
                    Employer Branding helfen wir Ihnen dabei, eine starke 
                    Arbeitgebermarke aufzubauen, die authentisch und überzeugend 
                    wirkt.
                  </p>
                </div>
              </motion.div>

              {/* Image Placeholder */}
              <motion.div 
                className="relative"
                variants={itemVariants}
              >
                <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl h-96 flex items-center justify-center">
                  <div className="text-center">
                    <Users className="w-16 h-16 text-primary-600 mx-auto mb-4" />
                    <p className="text-primary-700 font-medium">
                      Employer Branding Services
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="section-padding bg-gray-50"
        variants={itemVariants}
      >
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Unsere <span className="gradient-text">Employer Branding Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wir bieten umfassende Beratung und Unterstützung bei der Entwicklung 
              Ihrer Arbeitgebermarke und der Optimierung Ihres Personalmarketings.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
                  variants={itemVariants}
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        className="section-padding"
        variants={itemVariants}
      >
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-16"
              variants={itemVariants}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Ihre <span className="gradient-text">Vorteile</span>
              </h2>
              <p className="text-xl text-gray-600">
                Durch professionelles Employer Branding erzielen Sie messbare 
                Verbesserungen in Ihrem Personalmarketing.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  variants={itemVariants}
                >
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section
        className="section-padding bg-gray-50"
        variants={itemVariants}
      >
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-16"
              variants={itemVariants}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Unser <span className="gradient-text">Beratungsprozess</span>
              </h2>
              <p className="text-xl text-gray-600">
                Wir begleiten Sie Schritt für Schritt bei der Entwicklung Ihrer 
                Arbeitgebermarke.
              </p>
            </motion.div>

            <motion.div
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  step: '01',
                  title: 'Analyse & Strategie',
                  description: 'Wir analysieren Ihre aktuelle Position als Arbeitgeber und entwickeln eine maßgeschneiderte Employer Branding-Strategie.'
                },
                {
                  step: '02',
                  title: 'Konzeptentwicklung',
                  description: 'Gemeinsam entwickeln wir Konzepte für Ihre Arbeitgebermarke, die authentisch und überzeugend sind.'
                },
                {
                  step: '03',
                  title: 'Umsetzung',
                  description: 'Wir unterstützen Sie bei der Umsetzung der Maßnahmen und begleiten Sie durch den gesamten Prozess.'
                },
                {
                  step: '04',
                  title: 'Optimierung',
                  description: 'Durch kontinuierliche Messung und Anpassung optimieren wir Ihre Employer Branding-Maßnahmen.'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-6"
                  variants={itemVariants}
                >
                  <div className="w-16 h-16 bg-primary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="section-padding bg-primary-500"
        variants={itemVariants}
      >
        <div className="container-custom">
          <motion.div
            className="text-center text-white"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold mb-4">
              Starten Sie Ihr Employer Branding
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Lassen Sie uns gemeinsam Ihr Unternehmen als attraktiven Arbeitgeber 
              positionieren und die besten Talente gewinnen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary-500 hover:bg-gray-50 font-medium px-8 py-3 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl inline-flex items-center justify-center space-x-2"
              >
                <span>Beratung anfragen</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+499141877990"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-500 font-medium px-8 py-3 rounded-lg transition-colors duration-200 inline-flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>09141 – 87 79 90</span>
              </a>
            </div>
            <div className="mt-6">
              <a
                href="mailto:info@careerandmore.de"
                className="text-white hover:text-gray-200 transition-colors duration-200 inline-flex items-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>info@careerandmore.de</span>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default CareerEmployeeBranding;
