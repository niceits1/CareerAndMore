import { motion } from 'framer-motion';
import { Users, Target, Award, Globe } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: Users, label: 'Jahre Erfahrung', value: '15+' },
    { icon: Target, label: 'Erfolgreiche Vermittlungen', value: '500+' },
    { icon: Award, label: 'Zufriedene Kunden', value: '200+' },
    { icon: Globe, label: 'Branchen abgedeckt', value: '25+' }
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
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Content */}
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Unseren Fokus legen wir auf die Beratung von{' '}
              <span className="gradient-text">mittelständischen und großen namhaften Industrieunternehmen</span>
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              Als erfahrenes Beratungsunternehmen verstehen wir die komplexen 
              Herausforderungen der modernen Personalberatung. Wir kombinieren 
              tiefgreifendes Branchenwissen mit innovativen Ansätzen, um 
              maßgeschneiderte Lösungen für unsere Kunden zu entwickeln.
            </p>

            <p className="text-lg text-gray-600 mb-8">
              Ob Sie eine Stelle suchen oder bieten – Career & More bietet das 
              Branchen-Netzwerk für Ihren Erfolg. Wir verbinden Talente mit 
              Unternehmen und schaffen langfristige Partnerschaften.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">Individuelle Beratung</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">Langjährige Branchenerfahrung</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">Umfangreiches Netzwerk</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">Nachhaltige Erfolge</span>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Image Placeholder */}
            <motion.div
              className="mt-8 aspect-video bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Industrie-Expertise</h3>
                  <p className="text-sm opacity-90">Mittelstand & Großunternehmen</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
