import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, CheckCircle, ArrowLeft, Search, Users, TrendingUp, BarChart3, Building2 } from 'lucide-react';
import { serviceCategories } from '@/data/company';

const iconMap: Record<string, any> = {
  Search,
  Users,
  TrendingUp,
  BarChart3,
  Building2,
  ArrowRight,
};

const ServicesCategory = () => {
  const location = useLocation();
  
  // Extrahiere die Kategorie-ID aus der URL
  const pathParts = location.pathname.split('/').filter(part => part.length > 0);
  const categoryId = pathParts[pathParts.length - 1]; // Nimm den letzten Teil der URL
  
  const categoryData = serviceCategories.find(c => c.id === categoryId);

  if (!categoryData) {
    return (
      <div className="pt-20 section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold text-secondary-900 mb-4">Kategorie nicht gefunden</h1>
          <p className="text-xl text-secondary-600 mb-8">Die angeforderte Kategorie konnte nicht gefunden werden.</p>
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
        className="bg-beige-50 py-4"
        variants={itemVariants}
      >
        <div className="container-custom">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-secondary-600 hover:text-primary-600 transition-colors">Home</Link>
            <span className="text-secondary-400">/</span>
            <Link to="/services" className="text-secondary-600 hover:text-primary-600 transition-colors">Services</Link>
            <span className="text-secondary-400">/</span>
            <span className="text-secondary-900 font-medium">{categoryData.title}</span>
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
          <div className="max-w-4xl mx-auto">
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Zurück zu den Services</span>
            </Link>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-secondary-900 mb-6 leading-tight">
              {categoryData.title}
            </h1>
            <p className="text-xl lg:text-2xl text-secondary-700 leading-relaxed mb-12">
              {categoryData.description}
            </p>
          </div>
        </div>
      </motion.section>

      {/* Services Grid */}
      <motion.section
        className="section-padding relative bg-beige-50 overflow-hidden"
        variants={itemVariants}
      >
        {/* Background Decoration */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-100/15 rounded-full blur-3xl"></div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryData.services.map((service, index) => (
              <motion.div
                key={service.id}
                className="card-elevated overflow-hidden group"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
              >
                <Link to={`/services/${service.id}`} className="block h-full">
                  <div className="p-8 h-full flex flex-col relative z-10">
                    {/* Icon */}
                    {(() => {
                      const IconComponent = iconMap[service.icon] || iconMap.Search;
                      return (
                        <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-50 rounded-2xl flex items-center justify-center mb-6 group-hover:from-primary-200 group-hover:to-primary-100 transition-all duration-300 shadow-soft">
                          <IconComponent className="w-10 h-10 text-primary-600" />
                        </div>
                      );
                    })()}

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-secondary-900 mb-4 group-hover:text-primary-600 transition-colors duration-300 leading-tight">
                      {service.title}
                    </h3>

                    <p className="text-secondary-700 mb-6 flex-grow leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features Preview */}
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 2).map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0" />
                          <span className="text-sm text-secondary-600">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center text-primary-600 font-semibold group-hover:text-primary-700 transition-colors duration-300 mt-auto">
                      <span className="mr-2">Mehr erfahren</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Process Section */}
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
              Unser <span className="gradient-text">Beratungsprozess</span>
            </h2>
            <p className="text-xl text-secondary-700 max-w-3xl mx-auto leading-relaxed">
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
                className="text-center card-elevated p-6"
                variants={itemVariants}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-medium">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
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

export default ServicesCategory;

