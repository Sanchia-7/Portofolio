import React, { useRef, useEffect } from 'react'
import { useTheme } from './ThemeContext'

const MouseTrail = () => {
  const canvasRef = useRef(null)
  const { theme } = useTheme()
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    let animationFrameId
    let mouseX = 0
    let mouseY = 0
    let particles = []
    let isClicking = false
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    window.addEventListener('resize', resizeCanvas)
    resizeCanvas()
    
    // Track mouse position
    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      
      // Add particles on mouse move
      addParticles(isClicking ? 8 : 3)
    }
    
    // Handle mouse clicks for burst effects
    const handleMouseDown = () => {
      isClicking = true
      createBurst(30) // Create a burst of particles on click
    }
    
    const handleMouseUp = () => {
      isClicking = false
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    
    // Particle class for mouse trail
    class TrailParticle {
      constructor(x = mouseX, y = mouseY, size = Math.random() * 15 + 5, speedMultiplier = 1) {
        this.x = x
        this.y = y
        this.size = size
        this.speedX = (Math.random() * 3 - 1.5) * speedMultiplier
        this.speedY = (Math.random() * 3 - 1.5) * speedMultiplier
        this.color = getRandomColor()
        this.opacity = 1
        this.decreaseRate = 0.01 + Math.random() * 0.03
      }
      
      update() {
        this.x += this.speedX
        this.y += this.speedY
        this.size -= 0.1
        this.opacity -= this.decreaseRate
      }
      
      draw() {
        if (!ctx) return
        ctx.globalAlpha = this.opacity
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.globalAlpha = 1
      }
    }
    
    // Generate random color
    const getRandomColor = () => {
      const colors = theme === 'dark' 
        ? ['#8b5cf6', '#a78bfa', '#c4b5fd', '#ddd6fe', '#7c3aed'] // Purple shades for dark mode
        : ['#7c3aed', '#8b5cf6', '#a78bfa', '#c4b5fd', '#ddd6fe'] // Purple shades for light mode
      
      return colors[Math.floor(Math.random() * colors.length)]
    }
    
    // Add particles
    const addParticles = (count) => {
      for (let i = 0; i < count; i++) {
        particles.push(new TrailParticle())
      }
    }
    
    // Create a burst of particles
    const createBurst = (count) => {
      for (let i = 0; i < count; i++) {
        particles.push(new TrailParticle(mouseX, mouseY, Math.random() * 20 + 10, 2))
      }
    }
    
    // Animation loop
    const animate = () => {
      if (!ctx) return
      
      // Clear canvas (no background fill)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()
        
        // Remove particles that are too small or transparent
        if (particles[i].size <= 0.2 || particles[i].opacity <= 0) {
          particles.splice(i, 1)
          i--
        }
      }
      
      animationFrameId = requestAnimationFrame(animate)
    }
    
    animate()
    
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      cancelAnimationFrame(animationFrameId)
    }
  }, [theme])
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 9999 }}
    />
  )
}

export default MouseTrail
