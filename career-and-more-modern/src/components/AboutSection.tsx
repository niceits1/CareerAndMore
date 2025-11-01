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
    <section className="section-padding relative bg-white overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-100/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-50/20 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>

      <div className="container-custom relative z-10">
        {/* Asymmetrisches Layout */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Content - Offset links, nimmt 7 Spalten */}
          <motion.div variants={itemVariants} className="lg:col-span-7 lg:col-start-1">
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-8 leading-tight">
              Unseren Fokus legen wir auf die Beratung von{' '}
              <span className="gradient-text">mittelständischen und großen namhaften Industrieunternehmen</span>
            </h2>

            <p className="text-lg lg:text-xl text-secondary-700 mb-6 leading-relaxed">
              Als erfahrenes Beratungsunternehmen verstehen wir die komplexen 
              Herausforderungen der modernen Personalberatung. Wir kombinieren 
              tiefgreifendes Branchenwissen mit innovativen Ansätzen, um 
              maßgeschneiderte Lösungen für unsere Kunden zu entwickeln.
            </p>

            <p className="text-lg lg:text-xl text-secondary-700 mb-10 leading-relaxed">
              Ob Sie eine Stelle suchen oder bieten – career & more bietet das 
              Branchen-Netzwerk für Ihren Erfolg. Wir verbinden Talente mit 
              Unternehmen und schaffen langfristige Partnerschaften.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Individuelle Beratung',
                'Langjährige Branchenerfahrung',
                'Umfangreiches Netzwerk',
                'Nachhaltige Erfolge'
              ].map((item, index) => (
                <motion.div
                  key={item}
                  className="flex items-center space-x-3 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-3 h-3 bg-primary-600 rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-secondary-700 font-medium group-hover:text-primary-600 transition-colors duration-300">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats - Offset rechts, nimmt 5 Spalten */}
          <motion.div variants={itemVariants} className="lg:col-span-5 lg:col-start-8">
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    className="card-elevated rounded-2xl p-6 text-center relative overflow-hidden group"
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, type: "spring" }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    {/* Gradient Background on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-600/0 group-hover:from-primary-500/5 group-hover:to-primary-600/5 transition-all duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:from-primary-200 group-hover:to-primary-100 transition-all duration-300 shadow-soft">
                        <IconComponent className="w-7 h-7 text-primary-600" />
                      </div>
                      <div className="text-4xl font-bold text-primary-700 mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-secondary-600 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Image Placeholder mit verbessertem Design */}
            <motion.div
              className="relative aspect-video rounded-2xl shadow-large overflow-hidden group"
              initial={{ opacity: 0, y: 30, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring" }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-transparent to-transparent"></div>
              
              {/* Decorative Elements */}
              <div className="absolute bottom-4 left-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
              
              <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center text-white">
                <motion.div 
                  className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/20 shadow-large"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Users className="w-10 h-10 text-white/90" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-2 text-white">Industrie-Expertise</h3>
                <p className="text-sm text-white/90">Mittelstand & Großunternehmen</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;


