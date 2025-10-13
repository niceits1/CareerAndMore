import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';
import { TeamMember } from '@/types';

interface TeamPreviewProps {
  members: TeamMember[];
}

const TeamPreview = ({ members }: TeamPreviewProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
      {members.map((member) => (
        <motion.div
          key={member.id}
          className="group"
          variants={itemVariants}
        >
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
            {/* Image */}
            <div className="aspect-square bg-gradient-to-br from-primary-500 to-primary-700 relative overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                </div>
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
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
              <p className="text-gray-600 text-sm leading-relaxed">
                {member.description}
              </p>

              {member.email && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <a
                    href={`mailto:${member.email}`}
                    className="text-primary-600 hover:text-primary-700 text-sm font-medium flex items-center space-x-2 group"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Kontakt aufnehmen</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      ))}

      {/* CTA Card */}
      <motion.div
        className="group"
        variants={itemVariants}
      >
        <Link
          to="/team"
          className="block h-full bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
        >
          <div className="h-full flex flex-col items-center justify-center p-6 text-center text-white">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
              <ArrowRight className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Unser gesamtes Team
            </h3>
            <p className="text-sm opacity-90 mb-4">
              Lernen Sie alle unsere Experten kennen und erfahren Sie mehr über ihre Expertise.
            </p>
            <div className="flex items-center space-x-2 group-hover:translate-x-1 transition-transform duration-200">
              <span className="text-sm font-medium">Team entdecken</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default TeamPreview;
