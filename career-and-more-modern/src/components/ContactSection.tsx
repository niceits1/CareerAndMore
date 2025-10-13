import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { contactInfo } from '@/data/company';

const ContactSection = () => {
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

  const contactMethods = [
    {
      icon: MapPin,
      title: 'Besuchen Sie uns',
      description: 'Unser Büro in Weißenburg',
      details: contactInfo.address,
      action: 'Route planen',
      href: 'https://maps.google.com'
    },
    {
      icon: Phone,
      title: 'Rufen Sie uns an',
      description: 'Direkter Kontakt',
      details: contactInfo.phone,
      action: 'Anrufen',
      href: `tel:${contactInfo.phone}`
    },
    {
      icon: Mail,
      title: 'Schreiben Sie uns',
      description: 'Per E-Mail',
      details: contactInfo.email,
      action: 'E-Mail senden',
      href: `mailto:${contactInfo.email}`
    },
    {
      icon: Clock,
      title: 'Unsere Öffnungszeiten',
      description: 'Wann Sie uns erreichen',
      details: contactInfo.businessHours,
      action: 'Termin vereinbaren',
      href: '/contact'
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl font-bold text-gray-900 mb-4"
            variants={itemVariants}
          >
            Kontaktieren Sie uns{' '}
            <span className="gradient-text">heute</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Wir freuen uns darauf, von Ihnen zu hören und gemeinsam 
            die beste Lösung für Ihre Herausforderungen zu finden.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {contactMethods.map((method) => {
            const IconComponent = method.icon;
            return (
              <motion.div
                key={method.title}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-6 text-center group"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors duration-200">
                  <IconComponent className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {method.description}
                </p>
                <p className="text-gray-700 font-medium mb-4">
                  {method.details}
                </p>
                <a
                  href={method.href}
                  className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium text-sm group-hover:translate-x-1 transition-all duration-200"
                >
                  <span>{method.action}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="text-center"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Link
            to="/contact"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>Kontaktformular öffnen</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
