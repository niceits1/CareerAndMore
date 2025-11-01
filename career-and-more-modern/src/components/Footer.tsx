import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { companyInfo, contactInfo } from '@/data/company';
// @ts-ignore
import logoImage from '@/assets/logo_careerandmore-neu.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-300 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      ></div>

      <div className="container-custom section-padding relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16"
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative h-16 flex items-center justify-center">
                <img 
                  src={logoImage} 
                  alt="career & more Logo" 
                  className="h-full w-auto max-h-16 object-contain"
                  style={{ filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))' }}
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{companyInfo.name}</h3>
                <p className="text-sm text-white/70">Personalberatung</p>
              </div>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Ihr Partner für Direct Search, Personal- und Unternehmensberatung. 
              Wir unterstützen Sie bei der erfolgreichen Personalentwicklung und 
              Karriereplanung.
            </p>
            <div className="flex space-x-3">
              <motion.a
                href={contactInfo.linkedin || 'https://www.linkedin.com/company/career-more-gmbh'}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/30"
                title="LinkedIn"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-sm font-bold text-white">in</span>
              </motion.a>
              {contactInfo.xing && (
                <motion.a
                  href={contactInfo.xing}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/30"
                  title="XING"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-sm font-bold text-white">X</span>
                </motion.a>
              )}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-bold mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services/direct-search"
                  className="text-white/80 hover:text-white transition-all duration-300 flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-white/40 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span className="group-hover:translate-x-1 transition-transform inline-block">Direct Search</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/services/employer-branding"
                  className="text-white/80 hover:text-white transition-all duration-300 flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-white/40 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span className="group-hover:translate-x-1 transition-transform inline-block">Employer Branding</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/services/outplacement"
                  className="text-white/80 hover:text-white transition-all duration-300 flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-white/40 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span className="group-hover:translate-x-1 transition-transform inline-block">Outplacement</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/services/mediation"
                  className="text-white/80 hover:text-white transition-all duration-300 flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-white/40 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span className="group-hover:translate-x-1 transition-transform inline-block">Mediation</span>
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  to="/services"
                  className="text-white hover:text-white/90 transition-all duration-300 font-semibold flex items-center group"
                >
                  <span>Alle Services</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Consulting */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-bold mb-6 text-white">Consulting</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/consulting/management-beratung"
                  className="text-white/80 hover:text-white transition-all duration-300 flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-white/40 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span className="group-hover:translate-x-1 transition-transform inline-block">Management-Beratung</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/consulting/strategisches-personalmanagement"
                  className="text-white/80 hover:text-white transition-all duration-300 flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-white/40 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span className="group-hover:translate-x-1 transition-transform inline-block">Strategisches Personal-Management</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/consulting/unternehmens-nachfolge"
                  className="text-white/80 hover:text-white transition-all duration-300 flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-white/40 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span className="group-hover:translate-x-1 transition-transform inline-block">Unternehmens-Nachfolge</span>
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  to="/consulting"
                  className="text-white hover:text-white/90 transition-all duration-300 font-semibold flex items-center group"
                >
                  <span>Alle Consulting</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-bold mb-6 text-white">Kontakt</h4>
            <div className="space-y-4">
              <motion.div 
                className="flex items-start space-x-4 group"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white/15 transition-colors border border-white/20">
                  <MapPin className="w-5 h-5 text-white/70" />
                </div>
                <div>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {contactInfo.address}
                  </p>
                </div>
              </motion.div>
              <motion.a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center space-x-4 group"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white/15 transition-colors border border-white/20">
                  <Phone className="w-5 h-5 text-white/70" />
                </div>
                <span className="text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium">
                  {contactInfo.phone}
                </span>
              </motion.a>
              <motion.a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center space-x-4 group"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white/15 transition-colors border border-white/20">
                  <Mail className="w-5 h-5 text-white/70" />
                </div>
                <span className="text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium">
                  {contactInfo.email}
                </span>
              </motion.a>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-white/20">
                  <Clock className="w-5 h-5 text-white/70 mt-0.5" />
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  {contactInfo.businessHours}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-white/10 mt-16 pt-10"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
            <p className="text-white/60 text-sm">
              © {currentYear} {companyInfo.legal.companyName}. Alle Rechte vorbehalten.
            </p>
            <div className="flex space-x-8">
              <Link
                to="/impressum"
                className="text-white/60 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                Impressum
              </Link>
              <Link
                to="/privacy"
                className="text-white/60 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                Datenschutz
              </Link>
            </div>
          </div>
          
          {/* Dezent charity support */}
          <div className="text-center pt-6 border-t border-white/5">
            <p className="text-white/50 text-xs">
              Wir unterstützen{' '}
              <a 
                href="https://jeta-tier-und-mensch.de" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/70 hover:text-white transition-colors duration-200 font-medium"
              >
                JETA Tier und Mensch
              </a>
              {' '}bei ihrer Mission für Mensch, Tier und Natur
            </p>
          </div>
          
          {/* Website Developer Credit */}
          <div className="text-center pt-4">
            <p className="text-white/40 text-xs">
              Diese Website wurde von{' '}
              <a 
                href="https://pickl-it-solution.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/60 hover:text-white transition-colors duration-200 font-medium"
              >
                Pickl-IT-Solution
              </a>
              {' '}entwickelt
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
