import { motion } from 'framer-motion';
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { contactInfo } from '@/data/company';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

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
      title: 'Adresse',
      details: contactInfo.address,
      description: 'Besuchen Sie uns in unserem Büro'
    },
    {
      icon: Phone,
      title: 'Telefon',
      details: contactInfo.phone,
      description: 'Rufen Sie uns direkt an',
      href: `tel:${contactInfo.phone}`
    },
    {
      icon: Mail,
      title: 'E-Mail',
      details: contactInfo.email,
      description: 'Schreiben Sie uns eine Nachricht',
      href: `mailto:${contactInfo.email}`
    },
    {
      icon: Clock,
      title: 'Öffnungszeiten',
      details: contactInfo.businessHours,
      description: 'Wann Sie uns erreichen können'
    }
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
              <span className="gradient-text">Kontaktieren</span> Sie uns
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Wir freuen uns darauf, von Ihnen zu hören. Lassen Sie uns über 
              Ihre Herausforderungen sprechen und gemeinsam die beste Lösung finden.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Contact Methods */}
      <motion.section
        className="section-padding"
        variants={itemVariants}
      >
        <div className="container-custom">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {contactMethods.map((method) => {
              const IconComponent = method.icon;
              const content = (
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-6 text-center group">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors duration-200">
                    <IconComponent className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {method.description}
                  </p>
                  <p className="text-gray-700 font-medium">
                    {method.details}
                  </p>
                </div>
              );

              return (
                <motion.div key={method.title} variants={itemVariants}>
                  {method.href ? (
                    <a href={method.href} className="block">
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Form */}
      <motion.section
        className="section-padding bg-gray-50"
        variants={itemVariants}
      >
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              variants={itemVariants}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Senden Sie uns eine Nachricht
              </h2>
              <p className="text-xl text-gray-600">
                Füllen Sie das Formular aus und wir melden uns schnellstmöglich bei Ihnen.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
              variants={itemVariants}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Ihr Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                      placeholder="ihre.email@beispiel.de"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                      placeholder="+49 123 456789"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Unternehmen
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Ihr Unternehmen"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Betreff *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">Bitte wählen...</option>
                    <option value="direct-search">Direct Search</option>
                    <option value="employer-branding">Employer Branding</option>
                    <option value="personal-entwicklung">Personal-Entwicklung</option>
                    <option value="management-audit">Management Audit</option>
                    <option value="mediation">Mediation</option>
                    <option value="outplacement">Outplacement</option>
                    <option value="organisations-entwicklung">Organisations-Entwicklung</option>
                    <option value="management-beratung">Management-Beratung</option>
                    <option value="strategisches-personalmanagement">Strategisches Personal-Management</option>
                    <option value="unternehmens-nachfolge">Unternehmens-Nachfolge</option>
                    <option value="sonstiges">Sonstiges</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 resize-none"
                    placeholder="Beschreiben Sie Ihre Anfrage..."
                  />
                </div>

                <div className="flex items-center space-x-4">
                  <button
                    type="submit"
                    className="btn-primary inline-flex items-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Nachricht senden</span>
                  </button>
                  <p className="text-sm text-gray-600">
                    * Pflichtfelder
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Contact;
