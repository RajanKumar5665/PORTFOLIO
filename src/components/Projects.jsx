import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "MERN Auth Application",
    image: "/projects/mern-auth.png",
    description:
      "A full-stack authentication app using MongoDB, Express, React, and Node.js.",
    url: "https://your-mern-auth-app.com",
  },
  {
    id: 2,
    title: "Blog Application",
    image: "/projects/blog-app.png",
    description:
      "A blogging platform with CRUD functionality, JWT auth, and rich text editor.",
    url: "https://your-blog-app.com",
  },
  {
    id: 3,
    title: "Portfolio Website",
    image: "/projects/portfolio.png",
    description:
      "My personal portfolio website built with React and Tailwind CSS.",
    url: "https://yourportfolio.com",
  },
  {
    id: 4,
    title: "Ongoing Project 1",
    image: "/projects/ongoing1.png",
    description: "Currently in development. Stay tuned!",
    url: "#",
  },
  {
    id: 5,
    title: "Ongoing Project 2",
    image: "/projects/gharfix.jpg",
    description: "Currently in development. Stay tuned!",
    url: "#",
  },
];

const Projects = () => {
  return (
    <section id="Projects" className="py-20 bg-gray-50">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-20">
        {/* Heading */}
        <motion.h1
          className="text-4xl font-bold mb-12 text-center text-green-600"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
           Projects
        </motion.h1>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative bg-white rounded-lg shadow-lg overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              onClick={() =>
                project.url !== "#" && window.open(project.url, "_blank")
              }
            >
              {/* Project Image */}
              <div className="relative h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-4">
                  <p className="text-white text-sm">{project.description}</p>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-green-600 transition">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
