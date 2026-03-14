'use client'

import React from 'react'
import Link from 'next/link'

export default function HomePage() {
  const templates = [
    {
      name: 'Dental Office',
      path: '/dental',
      description: 'Valley Creek Dental Care',
      color: 'bg-teal-500',
      textColor: 'text-white',
      icon: '🦷'
    },
    {
      name: 'HVAC Company',
      path: '/hvac',
      description: 'Harris Air Services',
      color: 'bg-orange-500',
      textColor: 'text-white',
      icon: '❄️'
    },
    {
      name: 'Med Spa',
      path: '/medspa',
      description: 'Serenity Med Spa',
      color: 'bg-amber-600',
      textColor: 'text-white',
      icon: '✨'
    },
    {
      name: 'Law Firm',
      path: '/law',
      description: 'Stone & Associates',
      color: 'bg-yellow-600',
      textColor: 'text-slate-900',
      icon: '⚖️'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-6 py-24 text-center">
        <div className="mb-16 animate-fade-in-up">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            AI Consulting Demo
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our production-ready website templates featuring integrated AI chatbots for professional businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {templates.map((template, index) => (
            <Link
              key={template.name}
              href={template.path}
              className={`${template.color} ${template.textColor} rounded-2xl p-8 hover-lift transition-all duration-300 hover:scale-105 animate-fade-in-up-delay-${index + 1}`}
            >
              <div className="text-5xl mb-4">{template.icon}</div>
              <h2 className="font-serif text-2xl font-bold mb-2">{template.name}</h2>
              <p className="opacity-90">{template.description}</p>
            </Link>
          ))}
        </div>

        <div className="mt-16 animate-fade-in-up-delay-4">
          <p className="text-gray-500 text-sm">
            Built with Next.js, TypeScript, and Tailwind CSS • Each template features unique layouts and AI chat integration
          </p>
        </div>
      </div>
    </div>
  )
}