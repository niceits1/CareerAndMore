import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import ServicesGrid from '@/components/ServicesGrid';
import AboutSection from '@/components/AboutSection';
import TeamPreview from '@/components/TeamPreview';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';
import { services, teamMembers, testimonials } from '@/data/company';

const Home = () => {

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
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <Hero />

      {/* Services Overview */}
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
              Unsere <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Von Direct Search bis Management-Beratung - wir bieten umfassende 
              Personal- und Unternehmensberatung für Ihren Erfolg.
            </p>
          </motion.div>

          <ServicesGrid services={services.slice(0, 6)} />

          <motion.div
            className="text-center mt-12"
            variants={itemVariants}
          >
            <Link
              to="/services"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Alle Services entdecken</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <AboutSection />

      {/* Team Preview */}
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
              Unser <span className="gradient-text">Expertenteam</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Erfahrene Berater mit tiefem Branchenverständnis und 
              langjähriger Expertise in der Personalberatung.
            </p>
          </motion.div>

          <TeamPreview members={teamMembers} />

          <motion.div
            className="text-center mt-12"
            variants={itemVariants}
          >
            <Link
              to="/team"
              className="btn-secondary inline-flex items-center space-x-2"
            >
              <span>Team kennenlernen</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials */}
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
              Was unsere <span className="gradient-text">Kunden sagen</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Erfolgreiche Projekte und zufriedene Kunden sind unser Antrieb.
            </p>
          </motion.div>

          <Testimonials testimonials={testimonials} />
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
              Bereit für den nächsten Schritt?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Lassen Sie uns über Ihre Herausforderungen sprechen und gemeinsam 
              die beste Lösung für Ihr Unternehmen finden.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary-500 hover:bg-gray-50 font-medium px-8 py-3 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Kostenloses Beratungsgespräch
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-500 font-medium px-8 py-3 rounded-lg transition-colors duration-200"
              >
                Services entdecken
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <ContactSection />
    </motion.div>
  );
};

export default Home;
