import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import ServicesGrid from '@/components/ServicesGrid';
import { services } from '@/data/company';

const Services = () => {
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

  const benefits = [
    'Individuelle Beratung auf höchstem Niveau',
    'Langjährige Branchenerfahrung und Expertise',
    'Umfangreiches Netzwerk in der Industrie',
    'Nachhaltige und messbare Ergebnisse',
    'Diskrete und vertrauensvolle Zusammenarbeit',
    'Transparente Kommunikation und Reporting'
  ];

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
              Unsere <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Von Direct Search bis Management-Beratung - wir bieten umfassende 
              Personal- und Unternehmensberatung für Ihren Erfolg. Alle Services 
              sind individuell auf Ihre Bedürfnisse zugeschnitten.
            </p>
            
            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium text-left">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Services Grid */}
      <motion.section
        className="section-padding"
        variants={itemVariants}
      >
        <div className="container-custom">
          <ServicesGrid services={services} />
        </div>
      </motion.section>

      {/* Process Section */}
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
                title: 'Analyse',
                description: 'Wir analysieren Ihre Anforderungen und Herausforderungen im Detail.'
              },
              {
                step: '02',
                title: 'Strategie',
                description: 'Gemeinsam entwickeln wir eine maßgeschneiderte Strategie.'
              },
              {
                step: '03',
                title: 'Umsetzung',
                description: 'Wir setzen die Strategie professionell und effizient um.'
              },
              {
                step: '04',
                title: 'Erfolg',
                description: 'Wir begleiten Sie bis zum nachhaltigen Erfolg.'
              }
            ].map((step) => (
              <motion.div
                key={step.step}
                className="text-center"
                variants={itemVariants}
              >
                <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Industries Section */}
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
              Unsere <span className="gradient-text">Branchenexpertise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wir haben langjährige Erfahrung in verschiedenen Industriebereichen 
              und verstehen die spezifischen Anforderungen jeder Branche.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              'Maschinenbau',
              'Automotive',
              'Chemie',
              'IT & Software',
              'Energie',
              'Pharma'
            ].map((industry) => (
              <motion.div
                key={industry}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-6 text-center group"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-primary-200 transition-colors duration-200">
                  <span className="text-primary-600 font-bold text-sm">
                    {industry.charAt(0)}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">
                  {industry}
                </h3>
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
              Bereit für den nächsten Schritt?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Lassen Sie uns über Ihre Herausforderungen sprechen und gemeinsam 
              die beste Lösung für Ihr Unternehmen finden.
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

export default Services;
