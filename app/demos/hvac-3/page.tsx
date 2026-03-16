'use client'

import React from 'react'
import Link from 'next/link'
import ChatWidget from '@/app/components/ChatWidget'
import { motion } from 'framer-motion'

export default function HVAC3Page() {
  const handleCall = () => {
    alert('Call us at (972) 555-3400 to schedule your appointment!')
  }

  const handleSchedule = () => {
    alert('Online scheduling would open here! Call (972) 555-3400 to book.')
  }

  const services = [
    {
      icon: '❄️',
      title: 'AC Installation',
      description: 'Expert installation of energy-efficient cooling systems with manufacturer-backed warranties and guaranteed comfort.',
    },
    {
      icon: '🔥',
      title: 'Heating Repair',
      description: 'Prompt furnace and heat pump repairs by licensed technicians. Most issues resolved on the first visit.',
    },
    {
      icon: '🌬️',
      title: 'Air Quality',
      description: 'Whole-home air purification, filtration upgrades, and humidity control for healthier indoor environments.',
    },
    {
      icon: '📱',
      title: 'Smart Thermostats',
      description: 'Professional installation and setup of smart thermostats that reduce energy costs by up to 23%.',
    },
    {
      icon: '📋',
      title: 'Maintenance Plans',
      description: 'Comprehensive annual and bi-annual maintenance plans that keep your system running at peak efficiency.',
    },
    {
      icon: '💨',
      title: 'Duct Services',
      description: 'Duct cleaning, sealing, and repair to eliminate leaks and improve airflow throughout your home.',
    },
  ]

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      location: 'Frisco, TX',
      text: 'Comfort Zone replaced our entire HVAC system last spring. The crew was professional from the estimate through final inspection. Our energy bills are down 30% and the house has never been more comfortable.',
      rating: 5,
    },
    {
      name: 'James and Linda Patel',
      location: 'Plano, TX',
      text: 'We have been on their maintenance plan for three years now. They are always on time, thorough, and honest about what needs attention. It is refreshing to work with a company you can actually trust.',
      rating: 5,
    },
    {
      name: 'Marcus Thompson',
      location: 'McKinney, TX',
      text: 'Called on a Saturday morning when our heater stopped working. They had someone at our door by noon and it was fixed before dinner. Reasonable price and no pressure to buy things we did not need.',
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-white font-merriweather">
      {/* Back to Home */}
      <Link href="/" className="fixed top-4 left-4 z-50 bg-white/90 backdrop-blur-sm text-gray-700 hover:text-[#1E3A5F] px-4 py-2 rounded-full shadow-md text-sm font-medium flex items-center gap-2 transition-colors">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
        Liow Digital
      </Link>

      {/* Top Bar */}
      <div className="bg-[#1E3A5F] text-white py-2">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center text-sm">
          <p>Mon-Fri 8am-6pm | Sat 9am-4pm | 24/7 Emergency Line</p>
          <a href="tel:9725553400" className="font-semibold hover:text-blue-200 transition-colors">(972) 555-3400</a>
        </div>
      </div>

      {/* Sticky Nav */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#1E3A5F] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">CZ</span>
              </div>
              <div>
                <h1 className="font-bold text-xl text-[#1E3A5F]">Comfort Zone HVAC</h1>
                <p className="text-xs text-gray-500">Licensed &amp; Insured | TACLA #TX45210</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-600 hover:text-[#1E3A5F] text-sm font-medium transition-colors">Services</a>
              <a href="#about" className="text-gray-600 hover:text-[#1E3A5F] text-sm font-medium transition-colors">About</a>
              <a href="#testimonials" className="text-gray-600 hover:text-[#1E3A5F] text-sm font-medium transition-colors">Reviews</a>
              <a href="#contact" className="text-gray-600 hover:text-[#1E3A5F] text-sm font-medium transition-colors">Contact</a>
            </div>
            <motion.button
              onClick={handleSchedule}
              className="bg-[#1E3A5F] text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#2a4f7a] transition-colors"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Schedule Service
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-[#1E3A5F] font-semibold text-sm uppercase tracking-wider">Trusted HVAC Professionals in Frisco, TX</span>
              </motion.div>
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-[#1E3A5F] leading-tight mt-4 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                Your Comfort Is Our Business
              </motion.h2>
              <motion.p
                className="text-gray-600 text-lg mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                For over 20 years, Comfort Zone HVAC has provided reliable heating and cooling services to families and businesses across the DFW metroplex. We stand behind every job with a 100% satisfaction guarantee.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
              >
                <motion.button
                  onClick={handleSchedule}
                  className="bg-[#1E3A5F] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#2a4f7a] transition-colors shadow-lg"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Get a Free Estimate
                </motion.button>
                <motion.button
                  onClick={handleCall}
                  className="border-2 border-[#1E3A5F] text-[#1E3A5F] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#1E3A5F] hover:text-white transition-colors"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Call (972) 555-3400
                </motion.button>
              </motion.div>
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {['BBB A+ Rated', 'Licensed & Insured', '20+ Years Experience'].map((badge) => (
                  <span key={badge} className="bg-[#EFF6FF] text-[#1E3A5F] px-4 py-2 rounded-full text-sm font-medium border border-blue-200">
                    {badge}
                  </span>
                ))}
              </motion.div>
            </div>
            <motion.div
              className="bg-[#EFF6FF] rounded-2xl p-10 border border-blue-100"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="font-bold text-2xl text-[#1E3A5F] mb-6 text-center">Request a Free Quote</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input type="text" placeholder="Your full name" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1E3A5F] focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input type="tel" placeholder="(xxx) xxx-xxxx" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1E3A5F] focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
                  <select className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1E3A5F] focus:border-transparent">
                    <option>AC Installation</option>
                    <option>Heating Repair</option>
                    <option>Air Quality</option>
                    <option>Smart Thermostats</option>
                    <option>Maintenance Plan</option>
                    <option>Duct Services</option>
                    <option>Other</option>
                  </select>
                </div>
                <motion.button
                  onClick={handleSchedule}
                  className="w-full bg-[#1E3A5F] text-white px-6 py-4 rounded-lg font-semibold text-lg hover:bg-[#2a4f7a] transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Submit Request
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-24" id="services">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[#1E3A5F] font-semibold text-sm uppercase tracking-wider">What We Offer</span>
            <h2 className="text-4xl font-bold text-[#1E3A5F] mt-2">Our Services</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Comprehensive heating and cooling solutions backed by decades of experience and a commitment to quality workmanship.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <span className="text-4xl mb-4 block">{service.icon}</span>
                <h3 className="font-bold text-xl text-[#1E3A5F] mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / About Section */}
      <section className="bg-[#F8FAFC] py-24" id="about">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[#1E3A5F] font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-4xl font-bold text-[#1E3A5F] mt-2">A Company You Can Count On</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Comfort Zone HVAC was founded in 2004 with a straightforward mission: deliver honest, high-quality HVAC service at fair prices. What started as a two-person operation has grown into one of the most trusted names in North Texas heating and cooling.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Every technician on our team is NATE-certified and undergoes continuous training to stay current with the latest systems and technologies. We treat every home like it is our own.
              </p>
            </motion.div>
            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {[
                { number: '20+', label: 'Years in Business' },
                { number: '8,500+', label: 'Satisfied Customers' },
                { number: '4.9', label: 'Star Google Rating' },
                { number: '100%', label: 'Satisfaction Guarantee' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="text-3xl font-bold text-[#1E3A5F] mb-1">{stat.number}</div>
                  <p className="text-gray-500 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: 'BBB A+ Rating', subtitle: 'Accredited Business' },
              { title: 'Licensed & Insured', subtitle: 'TACLA #TX45210' },
              { title: 'NATE Certified', subtitle: 'All Technicians' },
              { title: '24/7 Emergency', subtitle: 'Always Available' },
            ].map((badge, index) => (
              <motion.div
                key={badge.title}
                className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -2, boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
              >
                <div className="w-12 h-12 bg-[#EFF6FF] rounded-full mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#1E3A5F]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <p className="font-bold text-[#1E3A5F] text-sm">{badge.title}</p>
                <p className="text-gray-400 text-xs mt-1">{badge.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-24" id="testimonials">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[#1E3A5F] font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-4xl font-bold text-[#1E3A5F] mt-2">What Our Customers Say</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                whileHover={{ y: -4, boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">&#9733;</span>
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-semibold text-[#1E3A5F]">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#EFF6FF] py-20" id="contact">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl font-bold text-[#1E3A5F] mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to Experience the Comfort Zone Difference?
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Schedule your free consultation today. No pressure, no hidden fees — just honest advice from experienced professionals.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.button
              onClick={handleSchedule}
              className="bg-[#1E3A5F] text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-[#2a4f7a] transition-colors shadow-lg"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Schedule Free Consultation
            </motion.button>
            <motion.a
              href="tel:9725553400"
              className="border-2 border-[#1E3A5F] text-[#1E3A5F] px-10 py-4 rounded-lg font-semibold text-lg hover:bg-[#1E3A5F] hover:text-white transition-colors inline-block"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              (972) 555-3400
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1E3A5F] text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-[#1E3A5F] font-bold text-lg">CZ</span>
                </div>
                <h3 className="font-bold text-lg">Comfort Zone HVAC</h3>
              </div>
              <p className="text-blue-200 text-sm leading-relaxed">
                Providing dependable heating and cooling solutions to North Texas families since 2004.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">Services</h4>
              <ul className="text-blue-200 space-y-2 text-sm">
                <li>AC Installation</li>
                <li>Heating Repair</li>
                <li>Air Quality</li>
                <li>Smart Thermostats</li>
                <li>Maintenance Plans</li>
                <li>Duct Services</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">Hours</h4>
              <div className="text-blue-200 space-y-2 text-sm">
                <p>Mon-Fri: 8am - 6pm</p>
                <p>Saturday: 9am - 4pm</p>
                <p>24/7 Emergency Line</p>
              </div>
              <h4 className="font-semibold text-white text-sm uppercase tracking-wider mt-6 mb-4">Credentials</h4>
              <div className="text-blue-200 space-y-2 text-sm">
                <p>TACLA #TX45210</p>
                <p>BBB A+ Accredited</p>
                <p>NATE Certified Staff</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">Contact</h4>
              <div className="text-blue-200 space-y-2 text-sm">
                <p className="text-white font-semibold text-base">(972) 555-3400</p>
                <p>info@comfortzonehvac.com</p>
                <p>3200 Legacy Dr</p>
                <p>Frisco, TX 75034</p>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-400/30 mt-12 pt-8 text-center text-blue-300 text-sm">
            <p>&copy; 2026 Comfort Zone HVAC. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <ChatWidget
        businessName="Comfort Zone HVAC"
        businessType="hvac"
        themeColor="#1E3A5F"
      />
    </div>
  )
}
