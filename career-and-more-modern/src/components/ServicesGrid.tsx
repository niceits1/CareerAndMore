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
      {services.map((service) => {
        const IconComponent = iconMap[service.icon] || iconMap.Search;
        
        return (
          <motion.div
            key={service.id}
            className="group"
            variants={itemVariants}
          >
            <Link
              to={`/services/${service.id}`}
              className="block h-full bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200 overflow-hidden"
            >
              <div className="p-6 h-full flex flex-col">
                {/* Icon */}
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors duration-200">
                  <IconComponent className="w-8 h-8 text-primary-600" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-4 flex-grow">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors duration-200">
                  <span className="mr-2">Mehr erfahren</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
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
