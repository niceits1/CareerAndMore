import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
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

    </motion.div>
  );
};

export default TeamPreview;


