import React from 'react'
import { motion } from 'framer-motion'

const Certificate = () => {
  const certificates = [
    {
      title: "Hackathon At Engineer - NITK 2024",
      issuer: "National Institute of Technology Karnataka (NITK)",
      link: "https://drive.google.com/file/d/12_oNpenAi4m6B5LBiwmL0DrmeNCt1_W8/view?usp=sharing",
      icon: "🦾",
    },
    {
      title: "Full Stack Web Development",
      issuer: "Zephyr Technologies",
      link: "https://drive.google.com/file/d/1cMF5XTa2DLRN8nngxQxZUlFRu1_eSAbX/view?pli=1",
      icon: "💻",
    },
    {
      title: "Artificial Intelligence for All",
      issuer: "IUCEE",
      link: "https://drive.google.com/file/d/1-4r8wizKplzW8pYDMJs9NdgqIYRSQkw5/view",
      icon: "🗃️",
    },
    {
      title: "Salesforce: Administrator Virtual Internship",
      issuer: "Salesforce & AICTE",
      link: "/",
      icon: "☁️",
    },
    {
        title: "Applied Linear Algebra for Machine Learning workshop",
        issuer: "MSIS, MAHE, Manipal",
        link: "https://drive.google.com/file/d/15miiwf5e6G6tULEMkvIHqY141gry3AzC/view",
        icon: "➕",
      },
  ]

  return (
    <section id="certificates" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-[#6A0DAD] dark:text-[#9B59B6]">Hackathons</span> & Certificates
          </h2>
          <div className="mt-4 w-20 h-1 bg-[#6A0DAD] dark:bg-[#9B59B6] mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * (index % 3) }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 border  rounded-lg overflow-hidden group-hover:border-[#6A0DAD] dark:group-hover:border-[#9B59B6]/50 transition-colors shadow-lg h-full">
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#6A0DAD]/10 dark:bg-[#9B59B6]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">{cert.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-lg text-[#6A0DAD] dark:text-[#9B59B6] font-semibold">{cert.title}</h4>
                      <p className="text-[#6A0DAD]/70 dark:text-[#C6DABF] text-sm">{cert.issuer}</p>
                    </div>
                  </div>
                  <div className="mt-auto pt-4">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center text-[#6A0DAD] dark:text-[#9B59B6] hover:underline"
                    >
                      View Certificate
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certificate
