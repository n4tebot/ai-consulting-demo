'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const categories = [
  {
    name: 'Dental',
    icon: '🦷',
    templates: [
      {
        name: 'Valley Creek Dental Care',
        path: '/demos/dental',
        description: 'Full-service dental practice with teal accents and classic layout.',
        color: 'bg-teal-500',
        textColor: 'text-white',
      },
      {
        name: 'McKinney Family Dentistry',
        path: '/demos/dental-2',
        description: 'Minimalist Scandinavian design with warm beige and sage tones.',
        color: 'bg-[#A8B5A0]',
        textColor: 'text-white',
      },
      {
        name: 'Bright Smiles Dental',
        path: '/demos/dental-3',
        description: 'Bold and friendly with bright teal, rounded corners, and playful energy.',
        color: 'bg-cyan-600',
        textColor: 'text-white',
      },
    ],
  },
  {
    name: 'HVAC',
    icon: '❄️',
    templates: [
      {
        name: 'Harris Air Services',
        path: '/demos/hvac',
        description: 'Emergency HVAC repair with orange accents and 24/7 service.',
        color: 'bg-orange-500',
        textColor: 'text-white',
      },
      {
        name: 'ProAir Mechanical',
        path: '/demos/hvac-2',
        description: 'Industrial rugged design with dark charcoal and yellow accents.',
        color: 'bg-[#1C1C1C]',
        textColor: 'text-amber-400',
      },
      {
        name: 'Comfort Zone HVAC',
        path: '/demos/hvac-3',
        description: 'Clean corporate style with navy blue and professional trust badges.',
        color: 'bg-[#1E3A5F]',
        textColor: 'text-white',
      },
    ],
  },
  {
    name: 'Med Spa',
    icon: '✨',
    templates: [
      {
        name: 'Serenity Med Spa',
        path: '/demos/medspa',
        description: 'Luxury med spa with treatment menus and consultation booking.',
        color: 'bg-amber-600',
        textColor: 'text-white',
      },
      {
        name: 'Lumière Aesthetics',
        path: '/demos/medspa-2',
        description: 'Luxury editorial with black and cream, magazine-style layout.',
        color: 'bg-black',
        textColor: 'text-[#FFFBF0]',
      },
      {
        name: 'Glow Med Spa & Wellness',
        path: '/demos/medspa-3',
        description: 'Modern wellness with soft pink, rounded cards, and gentle animations.',
        color: 'bg-rose-600',
        textColor: 'text-white',
      },
    ],
  },
  {
    name: 'Law Firm',
    icon: '⚖️',
    templates: [
      {
        name: 'Stone & Associates',
        path: '/demos/law',
        description: 'Professional law firm with case evaluation and client intake.',
        color: 'bg-yellow-600',
        textColor: 'text-slate-900',
      },
      {
        name: 'Barrett & Associates',
        path: '/demos/law-2',
        description: 'Classic authority with deep navy and gold accents, traditional feel.',
        color: 'bg-[#0C1B33]',
        textColor: 'text-[#C9A96E]',
      },
      {
        name: 'Greenfield Law Group',
        path: '/demos/law-3',
        description: 'Modern boutique firm with forest green and geometric sans-serif.',
        color: 'bg-[#1B4332]',
        textColor: 'text-white',
      },
    ],
  },
]

export default function DemosPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back to Home */}
      <div className="max-w-6xl mx-auto px-6 pt-8">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          Back to Liow Digital
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Demo Templates
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Explore our production-ready website templates featuring integrated AI chatbots. Each industry has 3 unique design variations.
          </motion.p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-16">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + catIndex * 0.15 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h2 className="font-serif text-2xl font-bold text-gray-900">{category.name}</h2>
                <div className="flex-1 h-px bg-gray-200 ml-4" />
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {category.templates.map((template, index) => (
                  <motion.div
                    key={template.path}
                    whileHover={{ scale: 1.03, y: -4 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Link
                      href={template.path}
                      className={`${template.color} ${template.textColor} rounded-2xl p-6 block transition-shadow duration-300 hover:shadow-xl h-full`}
                    >
                      <h3 className="text-lg font-bold mb-2">{template.name}</h3>
                      <p className="opacity-80 text-sm leading-relaxed">{template.description}</p>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mt-16 text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          Built with Next.js, TypeScript, and Tailwind CSS — Each template features unique layouts and AI chat integration
        </motion.p>
      </div>
    </div>
  )
}
