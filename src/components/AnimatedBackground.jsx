import React from 'react'
import { motion } from 'framer-motion'

const AnimatedBackground = () => {
  // Generate random particles
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 10
  }))

  // Generate floating geometric shapes
  const shapes = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 60 + 40,
    delay: Math.random() * 3,
    duration: Math.random() * 20 + 15,
    rotation: Math.random() * 360
  }))

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800" />
      
      {/* Animated Gradient Overlay */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, #7c3aed 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, #3b82f6 0%, transparent 50%)",
            "radial-gradient(circle at 40% 80%, #ec4899 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, #7c3aed 0%, transparent 50%)"
          ]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      />

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-white rounded-full opacity-60"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [-20, -100, -20],
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Floating Geometric Shapes */}
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute border border-white/20 rounded-lg backdrop-blur-sm"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: `${shape.size}px`,
            height: `${shape.size}px`,
          }}
          animate={{
            rotate: [shape.rotation, shape.rotation + 360],
            y: [-50, 50, -50],
            x: [-20, 20, -20],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Moving Lines/Connections */}
      <svg className="absolute inset-0 w-full h-full">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.line
            key={i}
            x1={`${20 + i * 20}%`}
            y1="0%"
            x2={`${30 + i * 15}%`}
            y2="100%"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: 8 + i * 2,
              delay: i * 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>

      {/* Orbiting Elements */}
      <div className="absolute top-1/4 left-1/4">
        <motion.div
          className="relative w-32 h-32"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <motion.div 
            className="absolute top-0 left-1/2 w-2 h-2 bg-blue-400 rounded-full"
            style={{ transformOrigin: "0 64px" }}
          />
          <motion.div 
            className="absolute top-1/2 right-0 w-1 h-1 bg-purple-400 rounded-full"
            style={{ transformOrigin: "-64px 0" }}
          />
        </motion.div>
      </div>

      <div className="absolute bottom-1/3 right-1/4">
        <motion.div
          className="relative w-24 h-24"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <motion.div 
            className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-pink-400 rounded-full"
            style={{ transformOrigin: "0 48px" }}
          />
          <motion.div 
            className="absolute top-1/2 right-0 w-1 h-1 bg-cyan-400 rounded-full"
            style={{ transformOrigin: "-48px 0" }}
          />
        </motion.div>
      </div>

      {/* Pulsing Circles */}
      <motion.div
        className="absolute top-1/3 right-1/3 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
        animate={{
          scale: [1, 2, 1],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-1/2 left-1/3 w-3 h-3 bg-gradient-to-r from-pink-400 to-red-500 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.4, 0.9, 0.4]
        }}
        transition={{
          duration: 6,
          delay: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  )
}

export default AnimatedBackground