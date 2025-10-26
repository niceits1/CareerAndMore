import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { teamMembers } from '@/data/company';

const Team = () => {
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
              Unser <span className="gradient-text">Team</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Lernen Sie unsere Experten kennen. Mit langjähriger Erfahrung 
              und tiefem Branchenverständnis unterstützen wir Sie bei der 
              erfolgreichen Personalentwicklung.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Team Members */}
      <motion.section
        className="section-padding"
        variants={itemVariants}
      >
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                {/* Image */}
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src={`/images/team/${member.id}.jpg`}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback zu Gradient falls Bild nicht existiert
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center absolute inset-0" style={{display: 'none'}}>
                    <div className="text-center text-white">
                      <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold">{member.name}</h3>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-4">
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {member.description}
                  </p>

                  {member.email && (
                    <div className="space-y-2">
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium text-sm group"
                      >
                        <Mail className="w-4 h-4" />
                        <span>E-Mail senden</span>
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
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
              Sprechen Sie mit unserem Team
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Wir freuen uns darauf, von Ihnen zu hören und gemeinsam 
              die beste Lösung für Ihre Herausforderungen zu finden.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@careerandmore.de"
                className="bg-white text-primary-500 hover:bg-gray-50 font-medium px-8 py-3 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                E-Mail senden
              </a>
              <a
                href="tel:+499141877990"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-500 font-medium px-8 py-3 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>09141/877990</span>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Team;


