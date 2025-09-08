import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaProjectDiagram,
  FaGraduationCap,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { SiCplusplus, SiMongodb, SiExpress } from "react-icons/si";

// Skills Data
const skills = [
  { name: "C++", icon: <SiCplusplus className="text-blue-600 text-3xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-3xl" /> },
  { name: "React.js", icon: <FaReact className="text-blue-400 text-3xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-3xl" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-700 text-3xl" /> },
  { name: "SQL", icon: <FaDatabase className="text-indigo-600 text-3xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-3xl" /> },
];

// Timeline Data
const experiences = [
  {
    year: "2022",
    title: "Started B.Tech CSE",
    description: "Began my Computer Science journey at MAKAUT University.",
    icon: <FaGraduationCap className="text-blue-600 text-3xl" />,
  },
  {
    year: "2024",
    title: "DSA & Web Development",
    description: "Solved 200+ DSA problems & learned MERN stack fundamentals.",
    icon: <FaLaptopCode className="text-green-600 text-3xl" />,
  },
  {
    year: "2025",
    title: "Major Projects",
    description:
      "Built MERN Auth System & Blog Application with JWT, Cloudinary, and Tailwind.",
    icon: <FaProjectDiagram className="text-purple-600 text-3xl" />,
  },
  {
    year: "2025",
    title: "Internship / Full-time Role",
    description:
      "Aspiring to join as a Full Stack Developer and contribute to impactful projects.",
    icon: <MdWork className="text-red-600 text-3xl" />,
  },
];

const Experience = () => {
  return (
    <section
      id="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-20 bg-gradient-to-r from-gray-50 to-green-50"
    >
      {/* Skills Section First */}
      <motion.h3
        className="text-4xl font-bold text-center mb-12 text-green-600"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        My Key Skills
      </motion.h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center mb-20">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {skill.icon}
            <h4 className="mt-3 font-semibold">{skill.name}</h4>
          </motion.div>
        ))}
      </div>

      {/* Journey (Timeline) */}
      <motion.h2
        className="text-4xl font-bold text-center mb-12 text-green-600"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My Journey
      </motion.h2>

      <div className="relative border-l-4 border-green-500 ml-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="mb-10 ml-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <span className="absolute -left-7 flex items-center justify-center w-12 h-12 bg-white border-2 border-green-500 rounded-full shadow-lg">
              {exp.icon}
            </span>
            <h3 className="text-xl font-semibold text-gray-800">
              {exp.year} — {exp.title}
            </h3>
            <p className="text-gray-600">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
