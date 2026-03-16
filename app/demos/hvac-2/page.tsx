'use client'

import React from 'react'
import Link from 'next/link'
import ChatWidget from '@/app/components/ChatWidget'
import { motion } from 'framer-motion'

export default function HVAC2Page() {
  const handleEmergencyCall = () => {
    alert('Emergency Service: Call (469) 445-7100 now!')
  }

  const handleScheduleService = () => {
    alert('Scheduling system would open here! Call (469) 445-7100 to schedule.')
  }

  const services = [
    {
      icon: '❄️',
      title: 'AC REPAIR',
      description: 'Fast diagnostics and repair for all makes and models. We get your system running right the first time.',
    },
    {
      icon: '🔥',
      title: 'HEATING SYSTEMS',
      description: 'Furnace and heat pump installation, repair, and replacement. Stay warm all winter long.',
    },
    {
      icon: '🏢',
      title: 'COMMERCIAL HVAC',
      description: 'Full-service commercial heating and cooling for offices, warehouses, and retail spaces.',
    },
    {
      icon: '💨',
      title: 'DUCT CLEANING',
      description: 'Professional duct cleaning to improve air quality and system efficiency in your home or business.',
    },
    {
      icon: '🔧',
      title: 'PREVENTIVE MAINTENANCE',
      description: 'Scheduled tune-ups that extend equipment life and prevent costly breakdowns.',
    },
    {
      icon: '🚨',
      title: 'EMERGENCY SERVICE',
      description: 'Round-the-clock emergency repairs. When your system fails, we answer the call — day or night.',
    },
  ]

  const testimonials = [
    {
      name: 'Carlos M.',
      location: 'McKinney, TX',
      text: 'Our commercial unit went down on the hottest day of the year. ProAir had a crew out within the hour and had us back up by end of day. These guys mean business.',
      rating: 5,
    },
    {
      name: 'Angela W.',
      location: 'Plano, TX',
      text: 'Had three other companies give me the runaround on my furnace issue. ProAir diagnosed it in 20 minutes and had it fixed that afternoon. Fair price, no upselling.',
      rating: 5,
    },
    {
      name: 'David R.',
      location: 'Frisco, TX',
      text: 'Signed up for their maintenance plan last year. My energy bills dropped noticeably and I haven\'t had a single issue since. Solid, dependable crew.',
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-[#1C1C1C] font-barlow-condensed">
      {/* Back to Home */}
      <Link href="/" className="fixed top-4 left-4 z-50 bg-[#1C1C1C]/90 backdrop-blur-sm text-gray-300 hover:text-[#F59E0B] px-4 py-2 rounded-full shadow-md text-sm font-medium flex items-center gap-2 transition-colors border border-gray-700">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
        Liow Digital
      </Link>

      {/* Emergency Bar */}
      <div className="bg-[#F59E0B] text-[#1C1C1C] py-3">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-bold uppercase tracking-wide text-sm">24/7 EMERGENCY HVAC SERVICE — CALL (469) 445-7100 NOW</p>
        </div>
      </div>

      {/* Sticky Nav */}
      <nav className="bg-[#1C1C1C] border-b border-gray-800 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#F59E0B] flex items-center justify-center">
                <span className="text-[#1C1C1C] font-black text-lg">P</span>
              </div>
              <div>
                <h1 className="font-black text-xl text-white uppercase tracking-wider">ProAir Mechanical</h1>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-400 hover:text-[#F59E0B] uppercase text-sm font-bold tracking-wider transition-colors">Services</a>
              <a href="#about" className="text-gray-400 hover:text-[#F59E0B] uppercase text-sm font-bold tracking-wider transition-colors">About</a>
              <a href="#testimonials" className="text-gray-400 hover:text-[#F59E0B] uppercase text-sm font-bold tracking-wider transition-colors">Reviews</a>
              <a href="#contact" className="text-gray-400 hover:text-[#F59E0B] uppercase text-sm font-bold tracking-wider transition-colors">Contact</a>
            </div>
            <a href="tel:4694457100" className="text-lg font-black text-[#F59E0B] tracking-wide">(469) 445-7100</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-[#1C1C1C] py-28 border-b-4 border-[#F59E0B]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#F59E0B] uppercase font-bold tracking-widest text-sm">McKinney&apos;s Industrial-Strength HVAC</span>
            </motion.div>
            <motion.h2
              className="font-black text-5xl md:text-7xl text-white uppercase leading-tight mt-4 mb-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              BUILT TOUGH.<br />
              <span className="text-[#F59E0B]">RUNS COLD.</span>
            </motion.h2>
            <motion.p
              className="text-gray-400 text-xl mb-10 max-w-xl"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Commercial and residential HVAC systems installed, repaired, and maintained by certified technicians who do the job right.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <motion.button
                onClick={handleScheduleService}
                className="bg-[#F59E0B] text-[#1C1C1C] px-10 py-5 font-black text-lg uppercase tracking-wider hover:bg-yellow-400 transition-colors"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Service
              </motion.button>
              <motion.button
                onClick={handleEmergencyCall}
                className="border-2 border-[#F59E0B] text-[#F59E0B] px-10 py-5 font-black text-lg uppercase tracking-wider hover:bg-[#F59E0B] hover:text-[#1C1C1C] transition-colors"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Emergency Call
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-[#111111] py-24" id="services">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-black text-4xl md:text-5xl text-white uppercase tracking-wide">What We Do</h2>
            <div className="w-24 h-1 bg-[#F59E0B] mx-auto mt-4"></div>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-[#1C1C1C] border-l-4 border-[#F59E0B] p-8 hover:bg-[#252525] transition-colors"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ x: 4 }}
              >
                <span className="text-4xl mb-4 block">{service.icon}</span>
                <h3 className="font-black text-xl text-[#F59E0B] uppercase tracking-wider mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / Stats Section */}
      <section className="bg-[#1C1C1C] py-20 border-y-4 border-[#F59E0B]" id="about">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-black text-4xl md:text-5xl text-white uppercase tracking-wide">The Numbers Don&apos;t Lie</h2>
            <div className="w-24 h-1 bg-[#F59E0B] mx-auto mt-4"></div>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '18+', label: 'YEARS IN BUSINESS' },
              { number: '5,000+', label: 'JOBS COMPLETED' },
              { number: '4.9', label: 'GOOGLE RATING' },
              { number: '24/7', label: 'EMERGENCY SERVICE' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-5xl md:text-6xl font-black text-[#F59E0B] mb-2">{stat.number}</div>
                <p className="text-gray-400 uppercase text-sm font-bold tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="mt-16 grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div>
              <h3 className="font-black text-3xl text-white uppercase mb-4">HEAVY-DUTY EXPERTISE</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                ProAir Mechanical was founded on a simple principle: do the job right, every time. Our NATE-certified technicians handle everything from residential AC repairs to full commercial HVAC buildouts across the DFW metroplex.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                We carry parts for all major brands in our trucks, so most repairs are completed on the first visit. No return trips, no excuses.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['NATE Certified', 'EPA Licensed', 'BBB A+ Rated', 'Fully Insured'].map((badge, index) => (
                <motion.div
                  key={badge}
                  className="bg-[#111111] border border-gray-800 p-6 text-center"
                  whileHover={{ borderColor: '#F59E0B' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <p className="text-white font-bold uppercase text-sm tracking-wider">{badge}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#111111] py-24" id="testimonials">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-black text-4xl md:text-5xl text-white uppercase tracking-wide">Straight From Our Customers</h2>
            <div className="w-24 h-1 bg-[#F59E0B] mx-auto mt-4"></div>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-[#1C1C1C] border border-gray-800 p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                whileHover={{ borderColor: '#F59E0B' }}
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-[#F59E0B] text-xl">&#9733;</span>
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="border-t border-gray-800 pt-4">
                  <p className="text-white font-bold uppercase tracking-wider">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#F59E0B] py-20" id="contact">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            className="font-black text-4xl md:text-5xl text-[#1C1C1C] uppercase mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            YOUR SYSTEM WON&apos;T FIX ITSELF
          </motion.h2>
          <motion.p
            className="text-[#1C1C1C]/80 text-xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Call ProAir Mechanical. We show up, we fix it, we guarantee it.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a href="tel:4694457100" className="text-4xl font-black text-[#1C1C1C]">(469) 445-7100</a>
            <motion.button
              onClick={handleScheduleService}
              className="bg-[#1C1C1C] text-[#F59E0B] px-10 py-5 font-black text-lg uppercase tracking-wider hover:bg-[#374151] transition-colors"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Online
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0A0A] text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-[#F59E0B] flex items-center justify-center">
                  <span className="text-[#1C1C1C] font-black text-lg">P</span>
                </div>
                <h3 className="font-black text-lg uppercase tracking-wider">ProAir Mechanical</h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Industrial-strength HVAC solutions for residential and commercial properties across the DFW metroplex.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-[#F59E0B] uppercase tracking-wider text-sm mb-4">Services</h4>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>AC Repair</li>
                <li>Heating Systems</li>
                <li>Commercial HVAC</li>
                <li>Duct Cleaning</li>
                <li>Preventive Maintenance</li>
                <li>Emergency Service</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#F59E0B] uppercase tracking-wider text-sm mb-4">Hours</h4>
              <div className="text-gray-400 space-y-2 text-sm">
                <p>Mon-Sat: 7am - 8pm</p>
                <p>Emergency: 24/7</p>
              </div>
              <h4 className="font-bold text-[#F59E0B] uppercase tracking-wider text-sm mt-6 mb-4">License</h4>
              <div className="text-gray-400 space-y-2 text-sm">
                <p>TACLA #TX98234</p>
                <p>Fully Insured & Bonded</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-[#F59E0B] uppercase tracking-wider text-sm mb-4">Contact</h4>
              <div className="text-gray-400 space-y-2 text-sm">
                <p className="text-[#F59E0B] font-bold text-base">(469) 445-7100</p>
                <p>info@proairmechanical.com</p>
                <p>1400 N Central Expy</p>
                <p>McKinney, TX 75070</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-600 text-sm">
            <p>&copy; 2026 ProAir Mechanical. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <ChatWidget
        businessName="ProAir Mechanical"
        businessType="hvac"
        themeColor="#F59E0B"
      />
    </div>
  )
}
