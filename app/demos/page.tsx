'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function DemosPage() {
  const templates = [
    {
      name: 'Dental Office',
      path: '/demos/dental',
      description: 'Valley Creek Dental Care — Full-service dental practice with appointment booking and patient info.',
      color: 'bg-teal-500',
      textColor: 'text-white',
      icon: '🦷'
    },
    {
      name: 'HVAC Company',
      path: '/demos/hvac',
      description: 'Harris Air Services — Emergency HVAC repair with 24/7 service and online scheduling.',
      color: 'bg-orange-500',
      textColor: 'text-white',
      icon: '❄️'
    },
    {
      name: 'Med Spa',
      path: '/demos/medspa',
      description: 'Serenity Med Spa — Luxury med spa with treatment menus and consultation booking.',
      color: 'bg-amber-600',
      textColor: 'text-white',
      icon: '✨'
    },
    {
      name: 'Law Firm',
      path: '/demos/law',
      description: 'Stone & Associates — Professional law firm with case evaluation and client intake.',
      color: 'bg-yellow-600',
      textColor: 'text-slate-900',
      icon: '⚖️'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Back to Home */}
      <div className="max-w-6xl mx-auto px-6 pt-8">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          Back to Liow Digital
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
        <motion.div
          className="mb-16"
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
            Explore our production-ready website templates featuring integrated AI chatbots. Each demo showcases a fully designed site for a different industry.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {templates.map((template, index) => (
            <motion.div
              key={template.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={template.path}
                className={`${template.color} ${template.textColor} rounded-2xl p-8 block transition-shadow duration-300 hover:shadow-xl text-left`}
              >
                <div className="text-5xl mb-4">{template.icon}</div>
                <h2 className="font-serif text-2xl font-bold mb-3">{template.name}</h2>
                <p className="opacity-90 text-sm leading-relaxed">{template.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mt-16 text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          Built with Next.js, TypeScript, and Tailwind CSS — Each template features unique layouts and AI chat integration
        </motion.p>
      </div>
    </div>
  )
}
