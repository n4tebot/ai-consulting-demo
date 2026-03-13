'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface HeroProps {
  title: string
  subtitle: string
  ctaText: string
  ctaAction?: () => void
  backgroundImage?: string
  badge?: string
  urgency?: boolean
}

export default function Hero({ 
  title, 
  subtitle, 
  ctaText, 
  ctaAction, 
  backgroundImage,
  badge,
  urgency = false
}: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 md:py-32 overflow-hidden">
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-indigo-200/30 rounded-full blur-xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 ${
                urgency 
                  ? 'bg-red-100 text-red-800 border border-red-200' 
                  : 'bg-blue-100 text-blue-800 border border-blue-200'
              }`}
            >
              {urgency && <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>}
              {badge}
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <button
              onClick={ctaAction}
              className={`inline-flex items-center px-8 py-4 rounded-xl text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200 ${
                urgency
                  ? 'bg-red-600 hover:bg-red-700'
                  : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
              } transform hover:scale-105`}
            >
              {ctaText}
              <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}