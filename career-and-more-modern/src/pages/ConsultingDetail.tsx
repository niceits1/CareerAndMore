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
        className="bg-beige-50 py-4"
        variants={itemVariants}
      >
        <div className="container-custom">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-secondary-600 hover:text-primary-600 transition-colors">Home</Link>
            <span className="text-secondary-400">/</span>
            <Link to="/consulting" className="text-secondary-600 hover:text-primary-600 transition-colors">Consulting</Link>
            <span className="text-secondary-400">/</span>
            <span className="text-secondary-900 font-medium">{service.title}</span>
          </nav>
        </div>
      </motion.div>

      {/* Hero Section */}
      <motion.section
        className="section-padding relative bg-white overflow-hidden"
        variants={itemVariants}
      >
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/20 rounded-full blur-3xl"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              to="/consulting"
              className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Zurück zu Consulting</span>
            </Link>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-secondary-900 mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-xl lg:text-2xl text-secondary-700 leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="section-padding relative bg-white overflow-hidden"
        variants={itemVariants}
      >
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-16"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
                Unsere <span className="gradient-text">Leistungen</span>
              </h2>
              <p className="text-xl text-secondary-700 leading-relaxed">
                Umfassende Beratung und Unterstützung in diesem Bereich
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3 card-elevated p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    y: -2,
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3
                    }}
                  >
                    <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                  </motion.div>
                  <p className="text-secondary-700 font-medium leading-relaxed">{feature}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section
        className="section-padding relative bg-beige-50 overflow-hidden"
        variants={itemVariants}
      >
        {/* Background Decoration */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-100/15 rounded-full blur-3xl"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-16"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
                Unser <span className="gradient-text">Beratungsprozess</span>
              </h2>
              <p className="text-xl text-secondary-700 leading-relaxed">
                Strukturiert und transparent zum nachhaltigen Erfolg
              </p>
            </motion.div>

            <div className="space-y-8">
              {service.process.map((step, index) => (
                <motion.div
                  key={step.step}
                  className="flex items-start space-x-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    x: 5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0 shadow-medium"
                    animate={{ 
                      scale: [1, 1.05, 1],
                      rotate: [0, 3, -3, 0]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                    whileHover={{
                      scale: 1.15,
                      rotate: 360,
                      transition: { duration: 0.5 }
                    }}
                  >
                    {index + 1}
                  </motion.div>
                  <motion.div 
                    className="card-elevated p-6 flex-grow"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    whileHover={{
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                      y: -2,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                      {step.step}
                    </h3>
                    <p className="text-secondary-600 leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="section-padding relative overflow-hidden"
        variants={itemVariants}
      >
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-300/20 rounded-full blur-3xl"></div>
        
        <div className="container-custom relative z-10">
          <motion.div
            className="text-center text-white max-w-4xl mx-auto"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              Interessiert an {service.title}?
            </h2>
            <p className="text-xl lg:text-2xl mb-12 text-white/90 leading-relaxed max-w-2xl mx-auto">
              Lassen Sie uns über Ihre spezifischen Anforderungen sprechen 
              und gemeinsam die beste Lösung entwickeln.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary-600 hover:bg-white/90 font-semibold px-10 py-4 text-lg rounded-lg transition-all duration-300 shadow-large hover:shadow-xl inline-flex items-center justify-center group"
              >
                <span>Kostenloses Beratungsgespräch</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <a
                href="tel:+499141877990"
                className="glass-effect text-white border-white/30 hover:bg-white/10 inline-flex items-center justify-center px-10 py-4 text-lg font-semibold transition-all duration-300"
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


