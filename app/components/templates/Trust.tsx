'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface TrustFeature {
  title: string
  description: string
  icon: string
  highlight?: boolean
}

interface TrustProps {
  title: string
  subtitle?: string
  features: TrustFeature[]
  badges?: string[]
  stats?: {
    label: string
    value: string
  }[]
}

export default function Trust({ 
  title, 
  subtitle, 
  features, 
  badges = [],
  stats = []
}: TrustProps) {
  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            {title}
          </motion.h2>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              {subtitle}
            </motion.p>
          )}
        </div>

        {/* Stats Section */}
        {stats.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`text-center p-6 rounded-2xl ${
                feature.highlight 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'bg-white shadow-md border border-gray-100'
              }`}
            >
              <div className={`text-4xl mb-4 ${
                feature.highlight ? 'filter brightness-125' : ''
              }`}>
                {feature.icon}
              </div>
              <h3 className={`text-xl font-semibold mb-3 ${
                feature.highlight ? 'text-white' : 'text-gray-900'
              }`}>
                {feature.title}
              </h3>
              <p className={`leading-relaxed ${
                feature.highlight ? 'text-blue-100' : 'text-gray-600'
              }`}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        {badges.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center items-center gap-6"
          >
            {badges.map((badge, index) => (
              <div
                key={badge}
                className="bg-white rounded-lg px-6 py-3 shadow-md border border-gray-200 flex items-center"
              >
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium text-gray-700">{badge}</span>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}