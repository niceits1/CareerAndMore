import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, ArrowRight } from 'lucide-react';
import { services } from '@/data/company';

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const service = services.find(s => s.id === id);

  if (!service) {
    return (
      <div className="pt-20 section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service nicht gefunden</h1>
          <p className="text-xl text-gray-600 mb-8">Der angeforderte Service konnte nicht gefunden werden.</p>
          <Link to="/services" className="btn-primary">
            Zurück zu den Services
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
            <Link to="/services" className="text-gray-600 hover:text-primary-600">Services</Link>
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
              to="/services"
              className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Zurück zu den Services</span>
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
                Was wir für Sie tun
              </h2>
              <p className="text-xl text-gray-600">
                Unsere umfassenden Leistungen in diesem Bereich
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
                Unser Vorgehen
              </h2>
              <p className="text-xl text-gray-600">
                Strukturiert und transparent zum Erfolg
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  step: '01',
                  title: 'Analyse',
                  description: 'Wir analysieren Ihre spezifischen Anforderungen und Herausforderungen.'
                },
                {
                  step: '02',
                  title: 'Konzept',
                  description: 'Entwicklung eines maßgeschneiderten Konzepts für Ihr Unternehmen.'
                },
                {
                  step: '03',
                  title: 'Umsetzung',
                  description: 'Professionelle Umsetzung mit höchsten Qualitätsstandards.'
                },
                {
                  step: '04',
                  title: 'Erfolg',
                  description: 'Begleitung bis zum nachhaltigen Erfolg und kontinuierliche Optimierung.'
                }
              ].map((step) => (
                <motion.div
                  key={step.step}
                  className="bg-white rounded-xl shadow-lg p-6 text-center"
                  variants={itemVariants}
                >
                  <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {step.description}
                  </p>
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

export default ServiceDetail;
