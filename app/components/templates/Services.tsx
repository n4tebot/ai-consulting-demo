'use client'

import React from 'react'

interface Service {
  title: string
  description: string
  icon: string
  price?: string
  features?: string[]
}

interface ServicesProps {
  title: string
  subtitle?: string
  services: Service[]
  columns?: 2 | 3 | 4
}

export default function Services({ 
  title, 
  subtitle, 
  services, 
  columns = 3 
}: ServicesProps) {
  const columnClasses = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4'
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            {title}
          </h2>
          {subtitle && (
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              {subtitle}
            </p>
          )}
        </div>

        <div className={`grid grid-cols-1 ${columnClasses[columns]} gap-8`}>
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-100 group hover:border-blue-200"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                {service.icon}
              </div>
              
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                {service.price && (
                  <span className="text-lg font-bold text-blue-600">
                    {service.price}
                  </span>
                )}
              </div>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>

              {service.features && (
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              )}

              <button className="mt-6 w-full bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 text-blue-700 py-3 px-4 rounded-xl font-medium transition-all duration-200 border border-blue-200 hover:border-blue-300">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}