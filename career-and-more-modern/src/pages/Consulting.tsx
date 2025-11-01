import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Consulting = () => {
  const consultingServices = [
    {
      id: 'management-beratung',
      title: 'Management-Beratung',
      description: 'Strategische Beratung für Führungskräfte und Managementteams zur Optimierung der Unternehmensführung.',
      features: [
        'Strategische Planung und Entwicklung',
        'Führungskräfte-Coaching',
        'Organisationsstruktur-Optimierung',
        'Change Management'
      ]
    },
    {
      id: 'strategisches-personalmanagement',
      title: 'Strategisches Personal-Management',
      description: 'Entwicklung und Umsetzung nachhaltiger Personalstrategien für langfristigen Unternehmenserfolg.',
      features: [
        'Personalstrategie-Entwicklung',
        'Talent-Management-Systeme',
        'Performance Management',
        'HR-Prozessoptimierung'
      ]
    },
    {
      id: 'unternehmens-nachfolge',
      title: 'Unternehmens-Nachfolge',
      description: 'Professionelle Begleitung bei der Unternehmensnachfolge und Generationswechsel.',
      features: [
        'Nachfolgeplanung',
        'Kandidatenauswahl und -bewertung',
        'Übergangsmanagement',
        'Nachfolge-Coaching'
      ]
    }
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
              <span className="gradient-text">Consulting</span> Services
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Strategische Beratung für nachhaltigen Unternehmenserfolg. 
              Wir unterstützen Sie bei komplexen Herausforderungen und 
              wichtigen Entscheidungen in Ihrem Unternehmen.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Consulting Services */}
      <motion.section
        className="section-padding"
        variants={itemVariants}
      >
        <div className="container-custom">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {consultingServices.map((service) => (
              <motion.div
                key={service.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-6 h-full flex flex-col"
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 flex-grow">
                  {service.description}
                </p>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to={`/consulting/${service.id}`}
                  className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium group"
                >
                  <span>Mehr erfahren</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
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
              Warum <span className="gradient-text">career & more</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unsere Consulting-Expertise basiert auf langjähriger Erfahrung 
              und tiefem Branchenverständnis.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: 'Branchenexpertise',
                description: 'Tiefes Verständnis für die Herausforderungen der Industrie'
              },
              {
                title: 'Individuelle Lösungen',
                description: 'Maßgeschneiderte Konzepte für Ihr Unternehmen'
              },
              {
                title: 'Nachhaltige Ergebnisse',
                description: 'Langfristige Erfolge durch nachhaltige Strategien'
              },
              {
                title: 'Persönliche Betreuung',
                description: 'Direkter Ansprechpartner und kontinuierliche Begleitung'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-primary-600 font-bold text-xl">
                    {index + 1}
                  </span>
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section
        className="section-padding"
        variants={itemVariants}
      >
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Unser <span className="gradient-text">Beratungsprozess</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strukturiert, transparent und erfolgsorientiert - so arbeiten wir 
              mit Ihnen zusammen.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                step: '01',
                title: 'Kennenlernen',
                description: 'Wir lernen Ihr Unternehmen und Ihre Ziele kennen, um die beste Beratung zu gewährleisten.'
              },
              {
                step: '02',
                title: 'Strategie',
                description: 'Entwicklung einer maßgeschneiderten Strategie, die zu Ihrem Unternehmen passt.'
              },
              {
                step: '03',
                title: 'Umsetzung',
                description: 'Begleitete Implementierung mit professioneller Unterstützung in jedem Schritt.'
              },
              {
                step: '04',
                title: 'Optimierung',
                description: 'Kontinuierliche Überwachung und Optimierung für nachhaltigen Erfolg.'
              }
            ].map((step) => (
              <motion.div
                key={step.step}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {step.step}
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm text-center">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
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
              Bereit für strategische Beratung?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Lassen Sie uns über Ihre strategischen Herausforderungen sprechen 
              und gemeinsam die beste Lösung entwickeln.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary-500 hover:bg-gray-50 font-medium px-8 py-3 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl inline-flex items-center justify-center space-x-2"
              >
                <span>Kostenloses Beratungsgespräch</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+499141877990"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-500 font-medium px-8 py-3 rounded-lg transition-colors duration-200"
              >
                09141/877990
              </a>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Consulting;


