import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Testimonial } from '@/types';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials = ({ testimonials }: TestimonialsProps) => {
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
      {testimonials.map((testimonial) => (
        <motion.div
          key={testimonial.id}
          className="group"
          variants={itemVariants}
        >
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-6 h-full flex flex-col">
            {/* Quote Icon */}
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors duration-200">
              <Quote className="w-6 h-6 text-primary-600" />
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-gray-700 mb-6 flex-grow italic leading-relaxed">
              "{testimonial.text}"
            </blockquote>

            {/* Author */}
            <div className="border-t border-gray-100 pt-4">
              <div className="font-semibold text-gray-900">
                {testimonial.author}
              </div>
              <div className="text-sm text-primary-600 font-medium">
                {testimonial.position}
              </div>
              <div className="text-sm text-gray-600">
                {testimonial.company}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Testimonials;


