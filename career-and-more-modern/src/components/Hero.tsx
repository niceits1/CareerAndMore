import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users } from 'lucide-react';
import { companyInfo } from '@/data/company';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const features = [
    'Direct Search & Recruiting',
    'Personal- und Unternehmensberatung',
    'Strategische HR-Beratung',
    'Individuelle Lösungen'
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-700"></div>
      </div>

      <div className="container-custom section-padding relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Content */}
          <motion.div variants={itemVariants}>
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
              Ihr Partner für Direct Search
            </motion.div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Herzlich Willkommen bei{' '}
              <span className="gradient-text">{companyInfo.name}</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Unsere Kernkompetenz ist das unabhängige und erfolgreiche Recruiting von 
              High Potentials – immer individuell abgestimmt auf Ihre spezifischen 
              Bedürfnisse und angepasst an die jeweilige Position in Ihrem Unternehmen.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center space-x-2 group"
              >
                <span>Kostenlose Beratung</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                to="/services"
                className="btn-secondary inline-flex items-center space-x-2"
              >
                <span>Services entdecken</span>
              </Link>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            className="relative"
            variants={itemVariants}
          >
            <div className="relative">
              {/* Main Image Placeholder */}
              <div className="aspect-[4/5] bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl shadow-2xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-12 h-12" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Personalberatung</h3>
                    <p className="text-lg opacity-90">Erfolg durch Expertise</p>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <motion.div
                className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100"
                initial={{ opacity: 0, y: 20, rotate: -5 }}
                animate={{ opacity: 1, y: 0, rotate: -5 }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">15+ Jahre</p>
                    <p className="text-sm text-gray-600">Erfahrung</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100"
                initial={{ opacity: 0, y: 20, rotate: 5 }}
                animate={{ opacity: 1, y: 0, rotate: 5 }}
                transition={{ delay: 1.0 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">500+</p>
                    <p className="text-sm text-gray-600">Erfolgreiche Vermittlungen</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
