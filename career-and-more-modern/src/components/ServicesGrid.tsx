import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Users, TrendingUp, BarChart3, Building2 } from 'lucide-react';
import { Service } from '@/types';

interface ServicesGridProps {
  services: Service[];
}

const iconMap: Record<string, any> = {
  Search,
  Users,
  TrendingUp,
  BarChart3,
  Building2,
  ArrowRight,
};

const ServicesGrid = ({ services }: ServicesGridProps) => {
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
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {services.map((service, index) => {
        const IconComponent = iconMap[service.icon] || iconMap.Search;
        
        return (
          <motion.div
            key={service.id}
            className="group"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
          >
            <Link
              to={`/services/${service.id}`}
              className="card-elevated block h-full overflow-hidden relative"
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-600/0 group-hover:from-primary-500/5 group-hover:to-primary-600/5 transition-all duration-500"></div>
              
              <div className="p-8 h-full flex flex-col relative z-10">
                {/* Icon mit verbessertem Design */}
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-50 rounded-2xl flex items-center justify-center mb-6 group-hover:from-primary-200 group-hover:to-primary-100 transition-all duration-300 shadow-soft group-hover:shadow-medium"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <IconComponent className="w-10 h-10 text-primary-600 group-hover:text-primary-700 transition-colors duration-300" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-secondary-900 mb-4 group-hover:text-primary-600 transition-colors duration-300 leading-tight">
                  {service.title}
                </h3>

                <p className="text-secondary-700 mb-6 flex-grow leading-relaxed">
                  {service.description}
                </p>

                {/* Features mit verbesserter Darstellung */}
                <div className="space-y-3 mb-8">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <motion.div 
                      key={idx} 
                      className="flex items-center space-x-3 group/item"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + idx * 0.05 }}
                    >
                      <div className="w-2 h-2 bg-primary-600 rounded-full flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300"></div>
                      <span className="text-sm text-secondary-600 group-hover/item:text-secondary-900 transition-colors duration-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA mit Animation */}
                <div className="flex items-center text-primary-600 font-semibold group-hover:text-primary-700 transition-colors duration-300 mt-auto">
                  <span className="mr-2">Mehr erfahren</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default ServicesGrid;
