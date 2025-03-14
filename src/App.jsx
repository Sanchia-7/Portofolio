import React, { useState, useEffect } from "react";
import { ThemeProvider } from './components/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Projects from './components/Projects'
import Certificate from './components/Certificate'
import Experience from './components/Experience'
import Contact from './components/Contact'
import ParticleBackground from './components/ParticleBackground'
import Loader from './components/Loader'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a 5-second loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Cleanup if needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
    <ThemeProvider>
      <div className="relative min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <ParticleBackground />
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Projects />
        <Certificate />
        <Experience />
        <Contact />
        {/* <MouseTrail/> */}
      </div>
    </ThemeProvider>
    </>
      )}
      </>
  )
}

export default App