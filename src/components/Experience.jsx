// import React, { useRef } from 'react'
// import { motion, useInView } from 'framer-motion'
// import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa'
// const Experience = () => {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, amount: 0.2 })
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   }
//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//   }
//   const experienceData = [
//     {
//       title: "Full Stack Web Development Internship",
//       company: "Zephyr Technologies & Solutions Pvt Ltd",
//       period: "10/2023 - 11/2023",
//       location: "Mangalore, India",
//       description: "Successfully designed and implemented a Web Music Player.",
//     },
//     {
//       title: "Salesforce: Administrator's Virtual Internship",
//       company: "Salesforce in partnership with AICTE",
//       period: "11/2023 - 12/2023",
//       location: "Mangalore, India",
//       description: "Time management, critical Thinking and problem solving.",
//     },
//   ]
//   return (
//     <section id="experience" className="py-20">
//       <div className="container mx-auto px-4">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0 }}
//           animate={isInView ? { opacity: 1 } : { opacity: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl font-bold mb-4 relative inline-block">
//             Experience
//             <motion.span
//               initial={{ width: 0 }}
//               animate={isInView ? { width: "100%" } : { width: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="absolute bottom-0 left-0 h-1 bg-purple-600 dark:bg-purple-400"
//             />
//           </h2>
//           <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//             My professional journey and internship experiences.
//           </p>
//         </motion.div>

//         <div className="max-w-3xl mx-auto">
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             animate={isInView ? "visible" : "hidden"}
//             className="space-y-8"
//           >
//             {experienceData.map((experience, index) => (
//               <motion.div key={index} variants={itemVariants}>
//                 <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-l-purple-600 dark:border-l-purple-500">
//                   <div className="flex items-start justify-between mb-4">
//                     <div>
//                       <h3 className="text-xl font-semibold">{experience.title}</h3>
//                       <p className="text-gray-600 dark:text-gray-400 mt-1">
//                         {experience.company}
//                       </p>
//                     </div>
//                     <span className="flex items-center gap-1 text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">
//                       <FaCalendar className="h-3 w-3" />
//                       {experience.period}
//                     </span>
//                   </div>
//                   <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500 mb-4">
//                     <FaMapMarkerAlt className="h-4 w-4" />
//                     <span>{experience.location}</span>
//                   </div>
//                   <p>{experience.description}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }
// export default Experience



import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa'

const Experience = () => {
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
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const experienceData = [
    {
      title: "Full Stack Web Development Internship",
      company: "Zephyr Technologies & Solutions Pvt Ltd",
      period: "10/2023 - 11/2023",
      location: "Mangalore, India",
      description: "Successfully designed and implemented a Web Music Player.",
      icon: "💻",
    },
    {
      title: "Salesforce: Administrator's Virtual Internship",
      company: "Salesforce in partnership with AICTE",
      period: "11/2023 - 12/2023",
      location: "Mangalore, India",
      description: "Time management, critical Thinking and problem solving.",
      icon: "🛠️",
    },
    {
      title: "VisionFlow Technologies Internship",
      company: "VisionFlow Technologies",
      period: "02/2025 - Present",
      location: "Moodbidre, India",
      description: "Worked with Web Development tools to provide insights for business decisions.",
      icon: "⚛️",
    },
  ]

  return (
    <section id="experience" className="py-20 ">
      <div className=" container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            My Experience
          </h2>
          <div className="mt-0 w-60 h-1 bg-[#6A0DAD] dark:bg-[#9B59B6] mx-auto"></div>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#6A0DAD]/20 dark:bg-[#9B59B6]/30 transform md:translate-x-px"></div>

          {experienceData.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row items-center md:items-start gap-8 mb-12 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
            >
              {/* Experience details */}
              <div className={`animate-wiggle w-full md:w-1/2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#6A0DAD] to-[#9B59B6]/70 dark:from-[#6A0DAD] dark:to-[#9B59B6]"></div>
                  <h4 className="text-xl text-[#6A0DAD] dark:text-[#9B59B6] font-semibold mb-2 ">{experience.title}</h4>
                  <p className="text-[#2E1A47]/70 dark:text-[#C6DABF] mb-2">{experience.company}</p>
                  <p className="text-sm text-[#2E1A47]/50 dark:text-[#C6DABF] mb-2">{experience.period}</p>
                  <p className="font-medium">{experience.description}</p>
                </div>
              </div>

              {/* Circular marker */}
              <div className="absolute left-0 md:left-1/2 w-10 h-10 bg-white dark:bg-[#2E1A47] border-2 border-[#6A0DAD] dark:border-[#9B59B6] rounded-full flex items-center justify-center transform -translate-x-1/2 z-10 transition-colors duration-300">
                <span className="text-lg">{experience.icon}</span>
              </div>

              <div className="w-full md:w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
