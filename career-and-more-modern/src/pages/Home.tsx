import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import ServicesGrid from '@/components/ServicesGrid';
import AboutSection from '@/components/AboutSection';
import TeamPreview from '@/components/TeamPreview';
import ContactSection from '@/components/ContactSection';
import { services, teamMembers } from '@/data/company';

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

      {/* Services Overview - Asymmetrisches Layout */}
      <motion.section
        className="section-padding relative bg-beige-50 overflow-hidden"
        variants={itemVariants}
      >
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-100/15 rounded-full blur-3xl"></div>

        <div className="container-custom relative z-10">
          {/* Asymmetrischer Header */}
          <motion.div
            className="mb-20 lg:mb-24"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-end">
              <div className="lg:col-span-3">
                <h2 className="text-4xl lg:text-6xl font-bold text-secondary-900 mb-6 leading-tight">
                  Unsere <span className="gradient-text">Services</span>
                </h2>
              </div>
              <div className="lg:col-span-2 lg:text-right">
                <p className="text-lg lg:text-xl text-secondary-700 leading-relaxed">
                  Von Direct Search bis Management-Beratung - wir bieten umfassende 
                  Personal- und Unternehmensberatung für Ihren Erfolg.
                </p>
              </div>
            </div>
          </motion.div>

          <ServicesGrid services={services.slice(0, 6)} />

          <motion.div
            className="text-center mt-16"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Link
              to="/services"
              className="btn-primary inline-flex items-center space-x-2 group"
            >
              <span>Alle Services entdecken</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <AboutSection />

      {/* Team Preview - Asymmetrisches Layout */}
      <motion.section
        className="section-padding relative bg-white overflow-hidden"
        variants={itemVariants}
      >
        {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary-100/30 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3"></div>

        <div className="container-custom relative z-10">
          {/* Asymmetrischer Header */}
          <motion.div
            className="mb-20 lg:mb-24"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
              <div className="lg:col-span-2">
                <h2 className="text-4xl lg:text-6xl font-bold text-secondary-900 mb-6 leading-tight">
                  Unser <span className="gradient-text-reverse">Expertenteam</span>
                </h2>
              </div>
              <div className="lg:col-span-3">
                <p className="text-lg lg:text-xl text-secondary-700 leading-relaxed">
                  Erfahrene Berater mit tiefem Branchenverständnis und 
                  langjähriger Expertise in der Personalberatung.
                </p>
              </div>
            </div>
          </motion.div>

          <TeamPreview members={teamMembers} />

          <motion.div
            className="text-center mt-16"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Link
              to="/team"
              className="btn-secondary inline-flex items-center space-x-2 group"
            >
              <span>Team kennenlernen</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section - Mit Hintergrund und Tiefe */}
      <motion.section
        className="section-padding relative overflow-hidden"
        variants={itemVariants}
      >
        {/* Gradient Background mit Tiefe */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl"></div>
        
        {/* Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        ></div>

        <div className="container-custom relative z-10">
          <motion.div
            className="text-center text-white max-w-4xl mx-auto"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
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
              <Link
                to="/services"
                className="glass-effect text-white border-white/30 hover:bg-white/10 inline-flex items-center justify-center px-10 py-4 text-lg font-semibold transition-all duration-300"
              >
                <span>Services entdecken</span>
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
