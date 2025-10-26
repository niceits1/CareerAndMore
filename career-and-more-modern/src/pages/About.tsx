import { motion } from 'framer-motion';
import { Users, Target, Award, Globe } from 'lucide-react';
import AboutSection from '@/components/AboutSection';
import TeamPreview from '@/components/TeamPreview';
import { teamMembers } from '@/data/company';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Zielorientierung',
      description: 'Wir arbeiten mit klaren Zielen und messbaren Ergebnissen für unsere Kunden.'
    },
    {
      icon: Users,
      title: 'Partnerschaft',
      description: 'Langfristige Partnerschaften und vertrauensvolle Zusammenarbeit stehen im Mittelpunkt.'
    },
    {
      icon: Award,
      title: 'Exzellenz',
      description: 'Höchste Qualitätsstandards in allen unseren Beratungsleistungen.'
    },
    {
      icon: Globe,
      title: 'Innovation',
      description: 'Wir setzen auf moderne Methoden und innovative Ansätze in der Personalberatung.'
    }
  ];

  const milestones = [
    { year: '2016', title: 'Gründung', description: 'career & more wird gegründet' },
    { year: '2018', title: 'Erste Erfolge', description: '100+ erfolgreiche Vermittlungen' },
    { year: '2020', title: 'Expansion', description: 'Erweiterung der Servicepalette' },
    { year: '2023', title: 'Wachstum', description: '500+ erfolgreiche Projekte' }
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
              Wer wir sind
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              career & more ist Ihr kompetenter Partner für Direct Search, 
              Personal- und Unternehmensberatung. Seit unserer Gründung 2016 
              unterstützen wir mittelständische und große Industrieunternehmen 
              bei der erfolgreichen Personalentwicklung.
            </p>
          </div>
        </div>
      </motion.section>

      {/* About Content */}
      <AboutSection />

      {/* Values Section */}
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
              Unsere <span className="gradient-text">Werte</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Diese Grundsätze leiten uns in unserer täglichen Arbeit und 
              bilden das Fundament unserer Beratungsphilosophie.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.title}
                  className="text-center"
                  variants={itemVariants}
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Timeline Section */}
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
              Unsere <span className="gradient-text">Erfolgsgeschichte</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Von der Gründung bis heute - wichtige Meilensteine unserer Entwicklung.
            </p>
          </motion.div>

          <motion.div
            className="relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  variants={itemVariants}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                      <div className="text-2xl font-bold text-primary-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Team Section */}
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
              Lassen Sie uns zusammenarbeiten
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch 
              und erfahren Sie, wie wir Ihnen helfen können.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-primary-500 hover:bg-gray-50 font-medium px-8 py-3 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Kontakt aufnehmen
              </a>
              <a
                href="tel:+499141877990"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-500 font-medium px-8 py-3 rounded-lg transition-colors duration-200"
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

export default About;
