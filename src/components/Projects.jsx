// src/components/Projects.jsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const projectsData = [
    {
      title: "SignSerenade: Your Voice in Signs",
      description:
        "Creating an application to bridge communication barriers between deaf and hearing communities by real-time translation as well as a learning platform for sign language to promote inclusivity.",
      period: "10/2024 - Present",
      technologies: [
        "TensorFlow",
        "Python",
        "Mediapipe",
        "Ultralytics",
        "JavaScript",
        "HTML",
      ],
      link: "https://github.com/bryanjohn05/SignSerenade",
    },
    {
      title: "AttendEase: Attendance Management System",
      description:
        "Creating a smart attendance management system using QR codes to monitor and track attendance.",
      period: "03/2024",
      technologies: ["PHP", "HTML", "JavaScript", "MySQL"],
      link: "https://github.com/bryanjohn05/Attendance-Management-System",
    },
    {
      title: "Sanify: Web Music Player",
      description:
        "Create a web music player to consolidate album details for easy exploration and management of tracks and lyrics.",
      period: "11/2023",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/Sanchia-7/Web-Music-Player",
    },
    {
      title: "Plant Disease Detection",
      description:
        "Create a plant disease detection web app using machine learning to predict disease when an image of infected leaf is uploaded.",
      period: "07/2024",
      technologies: ["CNN", "Python", "Streamlit"],
      link: "https://github.com/Sanchia-7/Plant-Disease-Detection",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 relative inline-block">
            Projects
            <motion.span
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute bottom-0 left-0 h-1 bg-purple-600 dark:bg-purple-400"
            />
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills
            in web development, AI, and machine learning.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projectsData.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden h-full group">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">
                      {project.period}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <a
                      href={project.link}
                      className="flex items-center gap-2 px-3 py-1 border border-gray-300 dark:border-gray-700 rounded-md hover:border-purple-500 dark:hover:border-purple-500 transition-colors"
                    >
                      <FaGithub className="h-4 w-4" /> Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
