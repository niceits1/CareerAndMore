import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, MapPin, Clock, Briefcase } from 'lucide-react';

const Career = () => {
  const services = [
    {
      title: 'Aktuelle Stellenangebote',
      description: 'Entdecken Sie aktuelle Jobmöglichkeiten und interessante Positionen in verschiedenen Branchen.',
      href: '/career/jobs',
      icon: Briefcase
    },
    {
      title: 'Direktbewerbung',
      description: 'Bewerben Sie sich direkt bei uns und werden Sie Teil unseres Expertenteams.',
      href: '/career/application',
      icon: ArrowRight
    },
    {
      title: 'Employee Branding',
      description: 'Stärken Sie Ihre persönliche Marke und optimieren Sie Ihre Karrierechancen.',
      href: '/career/employee-branding',
      icon: CheckCircle
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
              <span className="gradient-text">Karriere</span> bei career & more
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Entdecken Sie spannende Karrieremöglichkeiten und entwickeln Sie 
              sich beruflich weiter. Wir unterstützen Sie bei Ihrem nächsten 
              Karriereschritt.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Services */}
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
              Unsere <span className="gradient-text">Karriereservices</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Von Stellenangeboten bis hin zur persönlichen Karriereentwicklung 
              - wir bieten umfassende Unterstützung für Ihre berufliche Zukunft.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  className="group"
                  variants={itemVariants}
                >
                  <Link
                    to={service.href}
                    className="block h-full bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-6 group-hover:border-primary-200"
                  >
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors duration-200">
                      <IconComponent className="w-6 h-6 text-primary-600" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>

                    <div className="flex items-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors duration-200">
                      <span className="mr-2">Mehr erfahren</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Why Work With Us */}
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
              Warum mit <span className="gradient-text">uns arbeiten</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wir bieten Ihnen eine spannende Arbeitsumgebung mit 
              vielfältigen Entwicklungsmöglichkeiten.
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
                icon: MapPin,
                title: 'Standort',
                description: 'Zentral gelegen in Weißenburg mit guter Anbindung'
              },
              {
                icon: Clock,
                title: 'Flexibilität',
                description: 'Flexible Arbeitszeiten und moderne Arbeitsmodelle'
              },
              {
                icon: Briefcase,
                title: 'Entwicklung',
                description: 'Kontinuierliche Weiterbildung und Karriereentwicklung'
              },
              {
                icon: CheckCircle,
                title: 'Teamwork',
                description: 'Kollegiales Arbeitsklima und starkes Teamgefühl'
              }
            ].map((item) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className="text-center"
                  variants={itemVariants}
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Current Openings Preview */}
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
              Aktuelle <span className="gradient-text">Stellenangebote</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Entdecken Sie spannende Jobmöglichkeiten und werden Sie Teil unseres Teams.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Job Overview Card */}
            <motion.div
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
              variants={itemVariants}
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Aktuelle Stellen
              </h3>
              <p className="text-gray-600 mb-4">
                9 offene Positionen in verschiedenen technischen Bereichen
              </p>
              <Link
                to="/career/jobs"
                className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center space-x-1"
              >
                <span>Alle Stellen ansehen</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Application Process Card */}
            <motion.div
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
              variants={itemVariants}
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Einfache Bewerbung
              </h3>
              <p className="text-gray-600 mb-4">
                Bewerben Sie sich direkt online mit unserem benutzerfreundlichen Formular
              </p>
              <Link
                to="/career/application"
                className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center space-x-1"
              >
                <span>Jetzt bewerben</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Employee Branding Card */}
            <motion.div
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
              variants={itemVariants}
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <ArrowRight className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Employee Branding
              </h3>
              <p className="text-gray-600 mb-4">
                Stärken Sie Ihre persönliche Marke und optimieren Sie Ihre Karrierechancen
              </p>
              <Link
                to="/career/employee-branding"
                className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center space-x-1"
              >
                <span>Mehr erfahren</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
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
              Starten Sie Ihre Karriere bei uns
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Bewerben Sie sich noch heute und werden Sie Teil unseres 
              erfolgreichen Teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/career/application"
                className="bg-white text-primary-500 hover:bg-gray-50 font-medium px-8 py-3 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl inline-flex items-center justify-center space-x-2"
              >
                <span>Jetzt bewerben</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="mailto:info@careerandmore.de"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-500 font-medium px-8 py-3 rounded-lg transition-colors duration-200"
              >
                Initiativbewerbung
              </a>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Career;
