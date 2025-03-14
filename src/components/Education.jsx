import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaGraduationCap, FaSchool } from 'react-icons/fa'

const Education = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const educationData = [
    {
      degree: "BE in Artificial Intelligence and Machine Learning",
      institution: "ST. Joseph Engineering College",
      period: "12/2021 - Present",
      achievement: "8.81 CGPA",
      icon: FaGraduationCap,
    },
    {
      degree: "Class XII (Karnataka State Board)",
      institution: "ST. Aloysius Pre-university College",
      period: "06/2020 - 07/2021",
      achievement: "Secured 86%",
      icon: FaSchool,
    },
    {
      degree: "Class X (Karnataka State Board)",
      institution: "ST. Mary's High School",
      period: "06/2018 - 03/2019",
      achievement: "Secured 91.68%",
      icon: FaSchool,
    },
  ]

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 relative inline-block">
            Education
            <motion.span
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute bottom-0 left-0 h-1 bg-purple-600 dark:bg-purple-400"
            />
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {educationData.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 h-full transition-all duration-300 hover:shadow-lg hover:border-purple-500/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{item.degree}</h3>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">{item.institution}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">{item.period}</p>
                  <p className="font-medium">{item.achievement}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Education