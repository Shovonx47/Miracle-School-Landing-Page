"use client";
import { motion } from "framer-motion";
import { FaGraduationCap, FaUsers, FaTrophy, FaBook } from "react-icons/fa";

export default function KeyFeaturesSection() {
  const features = [
    {
      icon: <FaGraduationCap className="w-8 h-8" />,
      title: "Academic Excellence",
      description: "Consistently achieving outstanding results in HSC examinations"
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Expert Faculty",
      description: "Dedicated teachers with extensive experience in their fields"
    },
    {
      icon: <FaTrophy className="w-8 h-8" />,
      title: "Extra-curricular",
      description: "Wide range of activities for holistic development"
    },
    {
      icon: <FaBook className="w-8 h-8" />,
      title: "Modern Facilities",
      description: "Well-equipped labs, library, and smart classrooms"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Why Choose Notre Dame?
        </motion.h2>
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="text-red-600 mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 