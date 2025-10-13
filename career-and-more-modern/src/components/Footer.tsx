import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { companyInfo, contactInfo } from '@/data/company';

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
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">{companyInfo.name}</h3>
                <p className="text-sm text-gray-400">Personalberatung</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Ihr Partner für Direct Search, Personal- und Unternehmensberatung. 
              Wir unterstützen Sie bei der erfolgreichen Personalentwicklung und 
              Karriereplanung.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors duration-200"
              >
                <span className="text-xs font-bold">in</span>
              </a>
              <a
                href="https://xing.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors duration-200"
              >
                <span className="text-xs font-bold">x</span>
              </a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services/direct-search"
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                >
                  Direct Search
                </Link>
              </li>
              <li>
                <Link
                  to="/services/employer-branding"
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                >
                  Employer Branding
                </Link>
              </li>
              <li>
                <Link
                  to="/services/outplacement"
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                >
                  Outplacement
                </Link>
              </li>
              <li>
                <Link
                  to="/services/mediation"
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                >
                  Mediation
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-primary-400 hover:text-primary-300 transition-colors duration-200 font-medium"
                >
                  Alle Services →
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Consulting */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4">Consulting</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/consulting/management-beratung"
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                >
                  Management-Beratung
                </Link>
              </li>
              <li>
                <Link
                  to="/consulting/strategisches-personalmanagement"
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                >
                  Strategisches Personal-Management
                </Link>
              </li>
              <li>
                <Link
                  to="/consulting/unternehmens-nachfolge"
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                >
                  Unternehmens-Nachfolge
                </Link>
              </li>
              <li>
                <Link
                  to="/consulting"
                  className="text-primary-400 hover:text-primary-300 transition-colors duration-200 font-medium"
                >
                  Alle Consulting →
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    {contactInfo.address}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                >
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                >
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  {contactInfo.businessHours}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} {companyInfo.legal.companyName}. Alle Rechte vorbehalten.
          </p>
          <div className="flex space-x-6">
            <Link
              to="/impressum"
              className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm"
            >
              Impressum
            </Link>
            <Link
              to="/privacy"
              className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm"
            >
              Datenschutz
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
