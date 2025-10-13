import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, Send, User, Mail, MapPin, Phone, FileText } from 'lucide-react';

const CareerApplication = () => {
  const [formData, setFormData] = useState({
    position: '',
    firstName: '',
    lastName: '',
    email: '',
    zipCode: '',
    city: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const positions = [
    'Sachbearbeiter Qualitätssicherung mit Schwerpunkt: Messtechnik',
    'Hardware-Entwicklungsingenieur Elektrotechnik (a bis z)',
    'Software-Ingenieur im Bereich Embedded-Linux (a bis z)',
    'Entwicklungsingenieur für Steuerungssoftware (a bis z)',
    'Werkstatt - Techniker (a bis z)',
    'Servicetechniker (a bis z)',
    'Hardware-Ingenieur Elektrifizierung (a bis z)',
    'Project Manager Electronic Solutions (a bis z)',
    'Initiativ-Bewerbung (a bis z)'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
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

  if (isSubmitted) {
    return (
      <motion.div
        className="pt-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.section
          className="section-padding"
          variants={itemVariants}
        >
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="w-8 h-8 text-green-600" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                <span className="gradient-text">Bewerbung gesendet!</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Vielen Dank für Ihre Bewerbung! Wir haben Ihre Unterlagen erhalten 
                und werden uns schnellstmöglich bei Ihnen melden.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <span>Neue Bewerbung</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <a
                  href="mailto:info@careerandmore.de"
                  className="btn-secondary inline-flex items-center space-x-2"
                >
                  <span>Kontakt aufnehmen</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </motion.section>
      </motion.div>
    );
  }

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
              <span className="gradient-text">Bewerbung</span> bei Career & More
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Werden Sie Teil unseres Expertenteams! Füllen Sie das nachfolgende 
              Formular aus und wir melden uns schnellstmöglich bei Ihnen zurück.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Application Form */}
      <motion.section
        className="section-padding"
        variants={itemVariants}
      >
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
              variants={itemVariants}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Position Selection */}
                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                    <FileText className="w-4 h-4 inline mr-2" />
                    Stelle auswählen *
                  </label>
                  <select
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                  >
                    <option value="">--- Stelle auswählen ---</option>
                    {positions.map((position, index) => (
                      <option key={index} value={position}>
                        {position}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Vorname *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                      placeholder="Ihr Vorname"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Nachname *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                      placeholder="Ihr Nachname"
                    />
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    E-Mail-Adresse *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                    placeholder="ihre.email@beispiel.de"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-2">
                      <MapPin className="w-4 h-4 inline mr-2" />
                      PLZ *
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                      placeholder="12345"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                      <MapPin className="w-4 h-4 inline mr-2" />
                      Ort *
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                      placeholder="Ihr Wohnort"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Telefonnummer
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                    placeholder="+49 (0) 123 456 789"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    <FileText className="w-4 h-4 inline mr-2" />
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                    placeholder="Erzählen Sie uns etwas über sich, Ihre Motivation und Ihre Qualifikationen..."
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary inline-flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Wird gesendet...</span>
                      </>
                    ) : (
                      <>
                        <span>Bewerbung senden</span>
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Additional Information */}
      <motion.section
        className="section-padding bg-gray-50"
        variants={itemVariants}
      >
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Weitere Informationen
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Direkter Kontakt
                </h3>
                <p className="text-gray-600 mb-4">
                  Haben Sie Fragen zu unseren Stellenangeboten oder möchten Sie 
                  sich telefonisch beraten lassen?
                </p>
                <div className="space-y-2">
                  <p className="text-primary-600 font-medium">
                    📞 09141 – 87 79 90
                  </p>
                  <p className="text-primary-600 font-medium">
                    ✉️ info@careerandmore.de
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Bewerbungsprozess
                </h3>
                <p className="text-gray-600 mb-4">
                  Nach Eingang Ihrer Bewerbung erhalten Sie eine Bestätigung. 
                  Wir prüfen alle Unterlagen sorgfältig und melden uns innerhalb 
                  von 2-3 Werktagen bei Ihnen zurück.
                </p>
                <p className="text-sm text-gray-500">
                  * Pflichtfelder
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default CareerApplication;
