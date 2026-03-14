'use client'

import React from 'react'
import Link from 'next/link'

const templates = [
  {
    id: 'dental',
    title: 'Valley Creek Dental Care',
    subtitle: 'Dental Office Template',
    description: 'Professional dental practice website with services, testimonials, and appointment booking.',
    icon: '🦷',
    color: 'from-blue-500 to-cyan-500',
    href: '/dental',
    features: ['Service listings', 'Insurance information', 'Online booking', 'Patient testimonials']
  },
  {
    id: 'hvac',
    title: 'Harris Air Services',
    subtitle: 'HVAC Company Template',
    description: 'Emergency HVAC services with 24/7 availability, service areas, and urgent repair focus.',
    icon: '❄️',
    color: 'from-red-500 to-orange-500',
    href: '/hvac',
    features: ['24/7 emergency service', 'Service area map', 'Urgent repairs', 'Maintenance plans']
  },
  {
    id: 'medspa',
    title: 'Serenity Med Spa',
    subtitle: 'Med Spa / Wellness Template',
    description: 'Luxury wellness and beauty services with elegant design and treatment portfolios.',
    icon: '✨',
    color: 'from-pink-500 to-purple-500',
    href: '/medspa',
    features: ['Treatment galleries', 'Before/after photos', 'Luxury branding', 'Wellness services']
  },
  {
    id: 'law',
    title: 'Stone & Associates',
    subtitle: 'Law Firm Template',
    description: 'Professional legal services with practice areas, attorney profiles, and case results.',
    icon: '⚖️',
    color: 'from-blue-700 to-indigo-800',
    href: '/law',
    features: ['Practice areas', 'Attorney profiles', 'Case results', 'Free consultations']
  }
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-gray-900">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  AI Consulting Demo
                </span>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              McKinney, TX • AI Business Solutions
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 bg-blue-100 text-blue-800 border border-blue-200 animate-fade-in-up">
              🚀 Live Demo Templates
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-up-delay-1">
              AI-Powered Websites for
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Local Businesses
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed animate-fade-in-up-delay-2">
              Explore our production-ready website templates featuring integrated AI chatbots. 
              Each template is designed for a specific business type with realistic content and smart conversational AI.
            </p>

            <div className="text-center animate-fade-in-up-delay-3">
              <p className="text-lg text-gray-500 mb-2">Choose a template to explore:</p>
              <div className="flex flex-wrap justify-center gap-4">
                {templates.map((template) => (
                  <span key={template.id} className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700">
                    {template.icon} {template.title}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Template Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {templates.map((template, index) => (
              <div
                key={template.id}
                className={`animate-fade-in-up${index === 0 ? '-delay-1' : index === 1 ? '-delay-2' : '-delay-3'}`}
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <Link href={template.href}>
                  <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden cursor-pointer">
                    {/* Header */}
                    <div className={`bg-gradient-to-r ${template.color} p-6 text-white relative overflow-hidden`}>
                      <div className="relative z-10">
                        <div className="text-4xl mb-3">{template.icon}</div>
                        <h3 className="text-2xl font-bold mb-2">{template.title}</h3>
                        <p className="text-white/90 font-medium">{template.subtitle}</p>
                      </div>
                      {/* Background decoration */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {template.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-2 mb-6">
                        {template.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {feature}
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex items-center justify-between">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${template.color} text-white`}>
                          Live Demo
                        </span>
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
              What Makes These Templates Special?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up-delay-1">
              Each template includes an intelligent AI chatbot that understands your business and provides helpful responses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Smart AI Chatbot',
                description: 'Contextual responses based on business type, keywords, and customer intent. Handles appointments, pricing, hours, and emergencies.',
                icon: '🤖'
              },
              {
                title: 'Mobile Responsive',
                description: 'Beautiful design that works perfectly on all devices. Chat widget adapts to mobile with full-screen experience.',
                icon: '📱'
              },
              {
                title: 'Production Ready',
                description: 'Professional designs with realistic content, modern animations, and optimized performance for real businesses.',
                icon: '🚀'
              }
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="text-center p-6 rounded-2xl bg-gray-50 border border-gray-100 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                AI Consulting Demo
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Showcasing AI-powered websites for local businesses in McKinney, TX
            </p>
            <div className="flex justify-center space-x-8 text-sm text-gray-500">
              <span>Built with Next.js 16</span>
              <span>•</span>
              <span>Tailwind CSS</span>
              <span>•</span>
              <span>Framer Motion</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}