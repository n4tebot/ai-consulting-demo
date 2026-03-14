import React from 'react'
import Link from 'next/link'

const templates = [
  {
    id: 'dental',
    title: 'Valley Creek Dental Care',
    subtitle: 'Dental Office',
    description: 'Warm, welcoming dental practice with comprehensive family care and modern treatments.',
    accentColor: '#0EA5E9',
    icon: '🦷',
    href: '/dental'
  },
  {
    id: 'hvac',
    title: 'Harris Air Services',
    subtitle: 'HVAC Company',
    description: 'Reliable heating and cooling services with 24/7 emergency support for McKinney.',
    accentColor: '#F97316',
    icon: '❄️',
    href: '/hvac'
  },
  {
    id: 'medspa',
    title: 'Serenity Med Spa',
    subtitle: 'Medical Spa',
    description: 'Luxurious aesthetic treatments and wellness services in an elegant, calming environment.',
    accentColor: '#EC4899',
    icon: '✨',
    href: '/medspa'
  },
  {
    id: 'law',
    title: 'Stone & Associates',
    subtitle: 'Law Firm',
    description: 'Professional legal representation with expertise across multiple practice areas.',
    accentColor: '#B8860B',
    icon: '⚖️',
    href: '/law'
  }
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simple header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-gray-900">
              AI Consulting Demo
            </h1>
            <p className="text-gray-600 mt-1">Live Website Templates</p>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Choose a Template
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Each template is designed to match authentic business websites 
            with integrated AI chat support.
          </p>
        </div>

        {/* Template grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {templates.map((template, index) => (
            <Link 
              key={template.id} 
              href={template.href}
              className={`group block animate-fade-in-up-delay-${index + 1}`}
            >
              <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover-lift">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl text-white"
                      style={{ backgroundColor: template.accentColor }}
                    >
                      {template.icon}
                    </div>
                    <svg 
                      className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {template.title}
                  </h3>
                  
                  <p className="text-gray-500 text-sm font-medium mb-3">
                    {template.subtitle}
                  </p>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {template.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Simple footer */}
      <footer className="border-t border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="text-center text-sm text-gray-500">
            <p>Built with Next.js & Tailwind CSS • AI Chat Integration</p>
          </div>
        </div>
      </footer>
    </div>
  )
}