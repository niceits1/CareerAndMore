import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, TrendingUp, Building2 } from 'lucide-react';
import { serviceCategories } from '@/data/company';

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

  const categoryIcons = {
    recruiting: Users,
    entwicklung: TrendingUp,
    organisation: Building2
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
        className="section-padding relative bg-white overflow-hidden"
        variants={itemVariants}
      >
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/20 rounded-full blur-3xl"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-secondary-900 mb-6 leading-tight">
              Unsere <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl lg:text-2xl text-secondary-700 leading-relaxed mb-12">
              Von Direct Search bis Management-Beratung - wir bieten umfassende 
              Personal- und Unternehmensberatung für Ihren Erfolg. Alle Services 
              sind individuell auf Ihre Bedürfnisse zugeschnitten.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Categories Grid */}
      <motion.section
        className="section-padding relative bg-beige-50 overflow-hidden"
        variants={itemVariants}
      >
        {/* Background Decoration */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-100/15 rounded-full blur-3xl"></div>
        
        <div className="container-custom relative z-10">
          <motion.div
            className="text-center mb-16"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
              Unsere <span className="gradient-text">Servicebereiche</span>
            </h2>
            <p className="text-xl text-secondary-700 max-w-3xl mx-auto leading-relaxed">
              Entdecken Sie unsere drei Hauptbereiche mit individuellen Services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {serviceCategories.map((category, index) => {
              const IconComponent = categoryIcons[category.id as keyof typeof categoryIcons] || Users;
              return (
                <motion.div
                  key={category.id}
                  className="group"
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index}
                >
                  <Link
                    to={`/services/${category.id}`}
                    className="card-elevated block h-full overflow-hidden relative"
                  >
                    {/* Gradient Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-600/0 group-hover:from-primary-500/5 group-hover:to-primary-600/5 transition-all duration-500"></div>
                    
                    <div className="p-10 h-full flex flex-col relative z-10">
                      {/* Icon */}
                      <div className="w-24 h-24 bg-gradient-to-br from-primary-100 to-primary-50 rounded-2xl flex items-center justify-center mb-8 group-hover:from-primary-200 group-hover:to-primary-100 transition-all duration-300 shadow-soft group-hover:shadow-medium">
                        <IconComponent className="w-12 h-12 text-primary-600" />
                      </div>

                      {/* Content */}
                      <h3 className="text-3xl font-bold text-secondary-900 mb-4 group-hover:text-primary-600 transition-colors duration-300 leading-tight">
                        {category.title}
                      </h3>

                      <p className="text-secondary-700 mb-8 flex-grow leading-relaxed text-lg">
                        {category.description}
                      </p>

                      {/* Services Count & Preview */}
                      <div className="space-y-3 mb-8">
                        <div className="flex items-center justify-between text-sm text-secondary-600 mb-4">
                          <span className="font-medium">{category.services.length} Services</span>
                        </div>
                        {category.services.slice(0, 2).map((service) => (
                          <div key={service.id} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0" />
                            <span className="text-sm text-secondary-600">{service.title}</span>
                          </div>
                        ))}
                        {category.services.length > 2 && (
                          <div className="text-sm text-primary-600 font-medium">
                            + {category.services.length - 2} weitere
                          </div>
                        )}
                      </div>

                      {/* CTA */}
                      <div className="flex items-center text-primary-600 font-semibold group-hover:text-primary-700 transition-colors duration-300 mt-auto">
                        <span className="mr-2">Kategorie entdecken</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        className="section-padding relative bg-white overflow-hidden"
        variants={itemVariants}
      >
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
              Warum <span className="gradient-text">career & more</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              'Individuelle Beratung auf höchstem Niveau',
              'Langjährige Branchenerfahrung und Expertise',
              'Umfangreiches Netzwerk in der Industrie',
              'Nachhaltige und messbare Ergebnisse',
              'Diskrete und vertrauensvolle Zusammenarbeit',
              'Transparente Kommunikation und Reporting'
            ].map((benefit, index) => (
              <motion.div
                key={benefit}
                className="flex items-start space-x-3 card-elevated p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                <span className="text-secondary-700 font-medium">{benefit}</span>
              </motion.div>
            ))}
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
              Bereit für den nächsten Schritt?
            </h2>
            <p className="text-xl lg:text-2xl mb-12 text-white/90 leading-relaxed">
              Lassen Sie uns über Ihre Herausforderungen sprechen und gemeinsam 
              die beste Lösung für Ihr Unternehmen finden.
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

export default Services;
