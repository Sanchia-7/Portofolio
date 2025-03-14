import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from '/logo.png';

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [typedText, setTypedText] = useState("");
  const fullText = "I'm Sanchia Lara Dsouza";
  
  // Typing effect
  useEffect(() => {
    if (isLoading) {
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setTypedText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, 100);
      
      return () => clearInterval(typingInterval);
    }
  }, [isLoading]);
  
  // Set timeout to hide loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Floating animation for background particles
  const particles = Array.from({ length: 20 }).map((_, i) => (
    <motion.div
      key={i}
      className="absolute rounded-full bg-white/20"
      initial={{ 
        x: Math.random() * 100 - 50 + "%", 
        y: Math.random() * 100 - 50 + "%",
        opacity: Math.random() * 0.5 + 0.3,
        scale: Math.random() * 0.5 + 0.5
      }}
      animate={{ 
        x: [
          Math.random() * 100 - 50 + "%", 
          Math.random() * 100 - 50 + "%", 
          Math.random() * 100 - 50 + "%"
        ],
        y: [
          Math.random() * 100 - 50 + "%", 
          Math.random() * 100 - 50 + "%", 
          Math.random() * 100 - 50 + "%"
        ],
        opacity: [Math.random() * 0.3 + 0.2, Math.random() * 0.5 + 0.3, Math.random() * 0.3 + 0.2]
      }}
      transition={{ 
        duration: Math.random() * 10 + 15, 
        repeat: Infinity,
        ease: "linear" 
      }}
      style={{ 
        width: Math.random() * 50 + 10 + "px", 
        height: Math.random() * 50 + 10 + "px",
        filter: "blur(8px)"
      }}
    />
  ));
  
  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div 
            key="loader"
            className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
          >
            {/* Gradient background with animated overlay */}
            <motion.div 
              className="absolute inset-0 bg-gray-900"

            >
              {particles}
            </motion.div>
            
            <div className="relative z-10 flex flex-col items-center justify-center px-4">
              {/* Top text with bounce animation */}
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-white"
                initial={{ y: -100, opacity: 0 }}
                animate={{ 
                  y: 0, 
                  opacity: 1,
                  textShadow: [
                    "0 0 5px rgba(255,255,255,0.5)",
                    "0 0 20px rgba(255,255,255,0.8)",
                    "0 0 5px rgba(255,255,255,0.5)"
                  ]
                }}
                transition={{ 
                  type: "spring", 
                  damping: 12,
                  textShadow: { repeat: Infinity, duration: 2 }
                }}
              >
                Hi there,
              </motion.h1>
              
              {/* Logo with floating and rotating animation */}
              <motion.div
                className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 mb-8 rounded-full overflow-hidden"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ 
                  scale: 1, 
                  rotate: 0,
                  y: [0, -10, 0, -5, 0],
                  boxShadow: [
                    "0 0 0 3px rgba(255,255,255,0.3)",
                    "0 0 0 6px rgba(255,255,255,0.2)",
                    "0 0 0 3px rgba(255,255,255,0.3)"
                  ]
                }}
                transition={{ 
                  type: "spring", 
                  damping: 15,
                  y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
                  boxShadow: { repeat: Infinity, duration: 2 }
                }}
              >
                <div className="absolute inset-0 rounded-full overflow-hidden bg-white/10 backdrop-blur-sm" />
                <img 
                  src={logo || "/placeholder.svg"} 
                  alt="Logo" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Bottom text with typing animation */}
              <motion.div
                className="relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.p 
                  className="text-xl sm:text-2xl md:text-3xl font-semibold text-white"
                  animate={{ 
                    textShadow: [
                      "0 0 5px rgba(255,255,255,0.3)",
                      "0 0 10px rgba(255,255,255,0.6)",
                      "0 0 5px rgba(255,255,255,0.3)"
                    ]
                  }}
                  transition={{ 
                    textShadow: { repeat: Infinity, duration: 2, ease: "easeInOut" }
                  }}
                >
                  {typedText}
                  <motion.span 
                    className="inline-block w-0.5 h-6 sm:h-7 md:h-8 bg-white ml-1"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="content"
            className="portfolio-content w-full min-h-screen p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Main content after loading */}
            <h1 className="text-4xl font-bold">Welcome to My Portfolio!</h1>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Loader;
