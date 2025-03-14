import React, { useRef, useState } from 'react'
import {motion, useInView } from 'framer-motion'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeTab, setActiveTab] = useState('technical')

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  }

  const barVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: { duration: 1, ease: "easeOut" },
    }),
  }

  const skillsData = {
    technical: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "Python", level: 85 },
      { name: "MySQL", level: 75 },
      { name: "Machine Learning", level: 70 },
    ],
    soft: [
      { name: "Time Management", level: 90 },
      { name: "Communication", level: 85 },
      { name: "Teamwork", level: 90 },
      { name: "Problem Solving", level: 85 },
      { name: "Critical Thinking", level: 80 },
    ],
    languages: [
      { name: "English", level: 95, proficiency: "Full Professional Proficiency" },
      { name: "Kannada", level: 70, proficiency: "Limited Working Proficiency" },
      { name: "Hindi", level: 65, proficiency: "Limited Working Proficiency" },
      { name: "Konkani", level: 60, proficiency: "Limited Working Proficiency" },
    ],
  }

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 relative inline-block">
            Skills
            <motion.span
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute bottom-0 left-0 h-1 bg-purple-600 dark:bg-purple-400"
            />
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my technical abilities, soft skills, and language proficiencies.
          </p>
        </motion.div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-2 mb-8">
            <button
              onClick={() => setActiveTab('technical')}
              className={`py-2 px-4 rounded-md transition-colors ${
                activeTab === 'technical'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              Technical
            </button>
            <button
              onClick={() => setActiveTab('soft')}
              className={`py-2 px-4 rounded-md transition-colors ${
                activeTab === 'soft'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              Soft Skills
            </button>
            <button
              onClick={() => setActiveTab('languages')}
              className={`py-2 px-4 rounded-md transition-colors ${
                activeTab === 'languages'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              Languages
            </button>
          </div>

          {activeTab === 'technical' && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-6"
            >
              {skillsData.technical.map((skill, index) => (
                <motion.div key={index} variants={itemVariants} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      custom={skill.level}
                      variants={barVariants}
                      className="h-full bg-purple-600 dark:bg-purple-500 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'soft' && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-6"
            >
              {skillsData.soft.map((skill, index) => (
                <motion.div key={index} variants={itemVariants} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      custom={skill.level}
                      variants={barVariants}
                      className="h-full bg-purple-600 dark:bg-purple-500 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'languages' && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-6"
            >
              {skillsData.languages.map((language, index) => (
                <motion.div key={index} variants={itemVariants} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{language.name}</span>
                    <span className="text-gray-600 dark:text-gray-400">{language.proficiency}</span>
                  </div>
                  <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      custom={language.level}
                      variants={barVariants}
                      className="h-full bg-purple-600 dark:bg-purple-500 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Skills