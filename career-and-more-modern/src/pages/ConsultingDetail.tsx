import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, ArrowRight } from 'lucide-react';

const ConsultingDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  const consultingServices = {
    'management-beratung': {
      title: 'Management-Beratung',
      description: 'Strategische Beratung für Führungskräfte und Managementteams zur Optimierung der Unternehmensführung und nachhaltigen Erfolgssicherung.',
      features: [
        'Strategische Planung und Entwicklung',
        'Führungskräfte-Coaching und -Entwicklung',
        'Organisationsstruktur-Optimierung',
        'Change Management und Transformation',
        'Performance Management Systeme',
        'Team-Entwicklung und Teambuilding'
      ],
      process: [
        {
          step: 'Analyse',
          description: 'Umfassende Analyse der aktuellen Führungsstrukturen und Herausforderungen'
        },
        {
          step: 'Strategie',
          description: 'Entwicklung einer maßgeschneiderten Managementstrategie'
        },
        {
          step: 'Umsetzung',
          description: 'Begleitete Implementierung der neuen Strukturen und Prozesse'
        },
        {
          step: 'Monitoring',
          description: 'Kontinuierliche Überwachung und Optimierung der Ergebnisse'
        }
      ]
    },
    'strategisches-personalmanagement': {
      title: 'Strategisches Personal-Management',
      description: 'Entwicklung und Umsetzung nachhaltiger Personalstrategien für langfristigen Unternehmenserfolg und optimale Talententwicklung.',
      features: [
        'Personalstrategie-Entwicklung und -Umsetzung',
        'Talent-Management-Systeme',
        'Performance Management und Zielvereinbarungen',
        'HR-Prozessoptimierung und -Digitalisierung',
        'Employer Branding und Talentgewinnung',
        'Nachfolgeplanung und Talent-Pipeline'
      ],
      process: [
        {
          step: 'Assessment',
          description: 'Analyse der aktuellen HR-Struktur und Personalstrategie'
        },
        {
          step: 'Konzept',
          description: 'Entwicklung einer zukunftsfähigen Personalstrategie'
        },
        {
          step: 'Implementierung',
          description: 'Schrittweise Umsetzung der neuen HR-Prozesse'
        },
        {
          step: 'Evaluation',
          description: 'Messung des Erfolgs und kontinuierliche Verbesserung'
        }
      ]
    },
    'unternehmens-nachfolge': {
      title: 'Unternehmens-Nachfolge',
      description: 'Professionelle Begleitung bei der Unternehmensnachfolge und Generationswechsel für eine erfolgreiche Zukunftssicherung.',
      features: [
        'Nachfolgeplanung und -strategie',
        'Kandidatenauswahl und -bewertung',
        'Übergangsmanagement und Coaching',
        'Rechtliche und steuerliche Beratung',
        'Finanzierungsberatung',
        'Nachfolge-Coaching und -Mentoring'
      ],
      process: [
        {
          step: 'Vorbereitung',
          description: 'Umfassende Vorbereitung des Nachfolgeprozesses'
        },
        {
          step: 'Suche',
          description: 'Systematische Suche und Bewertung von Nachfolgekandidaten'
        },
        {
          step: 'Übergang',
          description: 'Begleitung des Übergangsprozesses und Wissenstransfer'
        },
        {
          step: 'Nachbetreuung',
          description: 'Langfristige Begleitung und Unterstützung'
        }
      ]
    }
  };

  const service = consultingServices[id as keyof typeof consultingServices];

  if (!service) {
    return (
      <div className="pt-20 section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Consulting Service nicht gefunden</h1>
          <p className="text-xl text-gray-600 mb-8">Der angeforderte Consulting Service konnte nicht gefunden werden.</p>
          <Link to="/consulting" className="btn-primary">
            Zurück zu den Consulting Services
          </Link>
        </div>
      </div>
    );
  }

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
      {/* Breadcrumb */}
      <motion.div
        className="bg-gray-50 py-4"
        variants={itemVariants}
      >
        <div className="container-custom">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-600 hover:text-primary-600">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/consulting" className="text-gray-600 hover:text-primary-600">Consulting</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">{service.title}</span>
          </nav>
        </div>
      </motion.div>

      {/* Hero Section */}
      <motion.section
        className="section-padding bg-gradient-to-br from-gray-50 to-white"
        variants={itemVariants}
      >
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              to="/consulting"
              className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Zurück zu Consulting</span>
            </Link>
            
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
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
                Unsere Leistungen
              </h2>
              <p className="text-xl text-gray-600">
                Umfassende Beratung und Unterstützung in diesem Bereich
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {service.features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3"
                  variants={itemVariants}
                >
                  <CheckCircle className="w-6 h-6 text-primary-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 font-medium">{feature}</p>
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
                Unser Beratungsprozess
              </h2>
              <p className="text-xl text-gray-600">
                Strukturiert und transparent zum nachhaltigen Erfolg
              </p>
            </motion.div>

            <motion.div
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {service.process.map((step, index) => (
                <motion.div
                  key={step.step}
                  className="flex items-center space-x-6"
                  variants={itemVariants}
                >
                  <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-6 flex-grow">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {step.step}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
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
              Interessiert an {service.title}?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Lassen Sie uns über Ihre spezifischen Anforderungen sprechen 
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

export default ConsultingDetail;
