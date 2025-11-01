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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Layer mit halbtransparentem Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-700 to-primary-900"></div>
        
        {/* Abstract Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-300 rounded-full blur-3xl"></div>
        </div>

        {/* Halbtransparenter Overlay für Textlesbarkeit */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-900/70 to-primary-900/50"></div>
        
        {/* Subtile Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>

      <div className="container-custom section-padding relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Content - Asymmetrisch links, nimmt 3 Spalten */}
          <motion.div 
            className="lg:col-span-3 layer-depth-2"
            variants={itemVariants}
          >
            <motion.div
              className="inline-flex items-center px-5 py-2.5 glass-effect rounded-full text-sm font-medium mb-8 text-white border-white/20"
              initial={{ opacity: 0, scale: 0.9, x: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <span className="w-2 h-2 bg-white/60 rounded-full mr-3"></span>
              Ihr Partner für Direct Search
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] text-balance">
              Herzlich Willkommen bei{' '}
              <span className="text-white/95">
                {companyInfo.name}
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-white/90 mb-10 leading-relaxed max-w-2xl">
              Unsere Kernkompetenz ist das unabhängige und erfolgreiche Recruiting von 
              High Potentials – immer individuell abgestimmt auf Ihre spezifischen 
              Bedürfnisse und angepasst an die jeweilige Position in Ihrem Unternehmen.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  className="flex items-center space-x-3 group"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                >
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/15 transition-colors border border-white/20">
                    <CheckCircle className="w-5 h-5 text-white/80 flex-shrink-0" />
                  </div>
                  <span className="text-white font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-white text-primary-600 hover:bg-white/90 font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-large hover:shadow-xl inline-flex items-center justify-center space-x-2 group"
              >
                <span>Kostenlose Beratung</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/services"
                className="glass-effect text-white border-white/30 hover:bg-white/10 inline-flex items-center justify-center space-x-2 font-medium px-8 py-4 rounded-lg transition-all duration-300"
              >
                <span>Services entdecken</span>
              </Link>
            </div>
          </motion.div>

          {/* Visual - Asymmetrisch rechts, nimmt 2 Spalten, offset */}
          <motion.div
            className="lg:col-span-2 relative lg:mt-20 layer-depth-1"
            variants={itemVariants}
          >
            <div className="relative perspective-1000">
              {/* Main Card mit Tiefe */}
              <motion.div 
                className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-large"
                initial={{ opacity: 0, rotateY: 15, scale: 0.9 }}
                animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                whileHover={{ scale: 1.02, rotateY: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-primary-800/30 backdrop-blur-sm"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-transparent to-transparent"></div>
                
                {/* Content auf Card */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center text-white">
                  <motion.div 
                    className="w-28 h-28 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/20 shadow-large"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Users className="w-14 h-14 text-white/90" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2 text-white">Personalberatung</h3>
                  <p className="text-lg text-white/90">Erfolg durch Expertise</p>
                </div>
              </motion.div>

              {/* Floating Cards mit Tiefe - Asymmetrisch positioniert */}
              <motion.div
                className="absolute -top-8 -right-8 glass-effect rounded-2xl shadow-large p-5 border-white/20 w-44"
                initial={{ opacity: 0, y: 30, rotate: -8, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, rotate: -8, scale: 1 }}
                transition={{ delay: 0.9, type: "spring", stiffness: 200 }}
                whileHover={{ rotate: -5, scale: 1.05, y: -5 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-medium">
                    <CheckCircle className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-secondary-900 text-lg">15+</p>
                    <p className="text-sm text-secondary-600">Jahre Erfahrung</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-12 -left-8 glass-effect rounded-2xl shadow-large p-5 border-white/20 w-52"
                initial={{ opacity: 0, y: 30, rotate: 8, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, rotate: 8, scale: 1 }}
                transition={{ delay: 1.1, type: "spring", stiffness: 200 }}
                whileHover={{ rotate: 5, scale: 1.05, y: -5 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center shadow-medium">
                    <ArrowRight className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-secondary-900 text-lg">500+</p>
                    <p className="text-sm text-secondary-600">Erfolgreiche Vermittlungen</p>
                  </div>
                </div>
              </motion.div>

              {/* Subtile Background Elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-400/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-300/10 rounded-full blur-3xl"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Eleganter */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
      >
        <div className="w-6 h-12 border-2 border-white/40 rounded-full flex justify-center p-1.5 backdrop-blur-sm bg-white/5">
          <motion.div
            className="w-1.5 h-4 bg-white rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
