import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowRight, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import MouseTrail from './MouseTrail'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 px-9 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="block">Hi, I'm</span>
              <span className="text-[#9B7CC1] dark:text-[#B59DD6]">Sanchia Lara Dsouza</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6">
              AI & ML Engineering Student
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
              Skilled in quickly adjusting to new challenges, effectively communicating, 
              utilizing analytical problem-solving abilities, and delivering high-quality 
              work with attention to detail.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact"
                className="hover:animate-bounce px-4 py-2 bg-[#9B7CC1] hover:bg-[#B59DD6] text-white rounded-md flex items-center transition-colors"
              >
                Contact Me <FaArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a 
                href="#projects"
                className="hover:animate-bounce px-4 py-2 border border-gray-300 dark:border-gray-700 hover:border-[#9B7CC1] dark:hover:border-[#B59DD6] rounded-md transition-colors"
              >
                View Projects
              </a>
            </div>
            <div className="flex gap-4 mt-8">
              <a 
                href="https://github.com/Sanchia-7" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub"
                className="hover:animate-bounce p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a 
                href="https://in.linkedin.com/in/sanchia-lara-dsouza" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                className="hover:animate-bounce p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:larasanchia733@gmail.com" 
                aria-label="Email"
                className="hover:animate-bounce p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <FaEnvelope className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-[#9B7CC1]/20 to-[#B59DD6]/5 rounded-full animate-pulse" />
              <div className="absolute inset-4 bg-gradient-to-tr from-[#9B7CC1]/30 to-[#B59DD6]/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="image.png"
                  alt="Sanchia Lara Dsouza"
                  className="h-full transform scale-110 hover:scale-125 transition-transform duration-300"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <MouseTrail/>
    </section>
  )
}

export default Hero
