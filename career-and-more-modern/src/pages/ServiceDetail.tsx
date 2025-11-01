import { motion } from 'framer-motion';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, ArrowRight } from 'lucide-react';
import { services, serviceCategories } from '@/data/company';

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  // Prüfe ob es eine Kategorie-ID ist
  const categoryIds = serviceCategories.map(c => c.id);
  if (id && categoryIds.includes(id)) {
    return <Navigate to={`/services/${id}`} replace />;
  }
  
  const service = services.find(s => s.id === id);

  if (!service) {
    return (
      <div className="pt-20 section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold text-secondary-900 mb-4">Service nicht gefunden</h1>
          <p className="text-xl text-secondary-600 mb-8">
            Der angeforderte Service konnte nicht gefunden werden.
          </p>
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
            {service.category && (
              <>
                <span className="text-secondary-400">/</span>
                <Link 
                  to={`/services/${service.category}`} 
                  className="text-secondary-600 hover:text-primary-600 transition-colors"
                >
                  {service.category === 'recruiting' ? 'Recruiting & Talent Management' : 
                   service.category === 'entwicklung' ? 'Personalentwicklung' : 
                   'Organisationsberatung'}
                </Link>
              </>
            )}
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
              to={service.category ? `/services/${service.category}` : "/services"}
              className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Zurück {service.category ? 'zur Kategorie' : 'zu den Services'}</span>
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
                Was wir für Sie tun
              </h2>
              <p className="text-xl text-secondary-700 leading-relaxed">
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
                  className="flex items-start space-x-3 card-elevated p-6"
                  variants={itemVariants}
                >
                  <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                  <p className="text-secondary-700 font-medium leading-relaxed">{feature}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Process Section */}
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
                Unser <span className="gradient-text">Vorgehen</span>
              </h2>
              <p className="text-xl text-secondary-700 leading-relaxed">
                Strukturiert und transparent zum Erfolg
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
                  className="card-elevated p-6 text-center"
                  variants={itemVariants}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-medium">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-secondary-600 text-sm leading-relaxed">
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

export default ServiceDetail;
