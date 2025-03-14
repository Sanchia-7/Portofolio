import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-8 relative inline-block">
            About Me
            <motion.span
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute bottom-0 left-0 h-1 bg-purple-600 dark:bg-purple-400"
            />
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-600 dark:text-gray-400 mb-6"
          >
            I am a passionate student pursuing a Bachelor of Engineering in Artificial Intelligence and Machine Learning at St. Joseph Engineering College. With a strong foundation in both technical skills and soft skills, I am dedicated to creating innovative solutions that make a positive impact.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-gray-600 dark:text-gray-400"
          >
            My interests span across web development, machine learning, and creating accessible technology solutions. I am particularly passionate about developing applications that bridge communication gaps and promote inclusivity, as demonstrated by my SignSerenade project.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default About