'use client'

import React from 'react'
import Link from 'next/link'
import ChatWidget from '@/app/components/ChatWidget'
import { motion } from 'framer-motion'

export default function HVACPage() {
  const handleEmergencyCall = () => {
    alert('Emergency Service: Call (469) 325-1034 now!')
  }

  const handleScheduleService = () => {
    alert('Scheduling system would open here! Call (469) 325-1034 to schedule.')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Back to Home */}
      <Link href="/" className="fixed top-4 left-4 z-50 bg-white/90 backdrop-blur-sm text-gray-700 hover:text-gray-900 px-4 py-2 rounded-full shadow-md text-sm font-medium flex items-center gap-2 transition-colors">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
        Liow Digital
      </Link>
      {/* 1. Emergency Bar */}
      <div className="bg-orange-500 text-white py-3">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-semibold">🔥 AC Emergency? Call (469) 325-1034 — 24/7 Service</p>
        </div>
      </div>

      {/* 2. Nav Bar */}
      <nav className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">❄️</span>
              <h1 className="font-bold text-xl text-navy-900">Harris Air Services</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-navy-900">Services</a>
              <a href="#about" className="text-gray-700 hover:text-navy-900">About</a>
              <a href="#contact" className="text-gray-700 hover:text-navy-900">Contact</a>
            </div>
            <span className="text-lg font-bold text-orange-500">(469) 325-1034</span>
          </div>
        </div>
      </nav>

      {/* 3. Full-Width Hero - Dark navy, bold text, two CTAs */}
      <section className="bg-slate-800 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2 
            className="font-bold text-5xl md:text-6xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            McKinney's Most Trusted HVAC Company
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Family-Owned Since 2008
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.button
              onClick={handleScheduleService}
              className="bg-orange-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-colors"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Service
            </motion.button>
            <motion.button
              onClick={handleEmergencyCall}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-slate-800 transition-colors"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Call Now
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* 4. Trust Strip */}
      <section className="bg-gray-100 py-6">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { icon: '🛡️', text: 'Licensed & Insured' },
              { icon: '📅', text: '15+ Years' },
              { icon: '⭐', text: '5-Star Rated' },
              { icon: '👪', text: 'Family-Owned' }
            ].map((item, index) => (
              <motion.div 
                key={item.text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <p className="font-semibold text-gray-800">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Services - Alternating left-right layout */}
      <section className="py-20 bg-white" id="services">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-bold text-4xl text-center text-gray-900 mb-16">Our Services</h2>
          
          {/* Service 1 - Image left, text right */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl h-64 flex items-center justify-center">
                <span className="text-6xl text-white">❄️</span>
              </div>
            </div>
            <div className="">
              <h3 className="font-bold text-3xl text-gray-900 mb-4">AC Repair</h3>
              <p className="text-gray-700 text-lg mb-4">
                Fast, reliable air conditioning repairs. Our technicians are available 24/7 for emergency service. Same-day repairs guaranteed.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Emergency service available</li>
                <li>• All major brands serviced</li>
                <li>• Upfront pricing guarantee</li>
              </ul>
            </div>
          </div>

          {/* Service 2 - Text left, image right */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="lg:order-2 ">
              <div className="bg-gradient-to-br from-red-400 to-red-600 rounded-2xl h-64 flex items-center justify-center">
                <span className="text-6xl text-white">🔥</span>
              </div>
            </div>
            <div className="lg:order-1 ">
              <h3 className="font-bold text-3xl text-gray-900 mb-4">Heating</h3>
              <p className="text-gray-700 text-lg mb-4">
                Keep your family warm with professional heating services. Furnace repairs, maintenance, and installations by licensed technicians.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Furnace repair & replacement</li>
                <li>• Heat pump services</li>
                <li>• Energy efficiency upgrades</li>
              </ul>
            </div>
          </div>

          {/* Service 3 - Image left, text right */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="">
              <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-2xl h-64 flex items-center justify-center">
                <span className="text-6xl text-white">🏠</span>
              </div>
            </div>
            <div className="">
              <h3 className="font-bold text-3xl text-gray-900 mb-4">Installation</h3>
              <p className="text-gray-700 text-lg mb-4">
                Professional HVAC system installation. Free estimates on new systems. Energy-efficient options available with financing.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Free installation estimates</li>
                <li>• Energy-efficient systems</li>
                <li>• Financing options available</li>
              </ul>
            </div>
          </div>

          {/* Service 4 - Text left, image right */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2 ">
              <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl h-64 flex items-center justify-center">
                <span className="text-6xl text-white">🔧</span>
              </div>
            </div>
            <div className="lg:order-1 ">
              <h3 className="font-bold text-3xl text-gray-900 mb-4">Maintenance</h3>
              <p className="text-gray-700 text-lg mb-4">
                Regular maintenance keeps your system running efficiently. Annual service plans available to extend equipment life and reduce costs.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Annual maintenance plans</li>
                <li>• Filter replacement service</li>
                <li>• Priority service scheduling</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Big Stats Section */}
      <section className="bg-slate-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="">
              <div className="text-5xl font-bold text-orange-400 mb-2">2,500+</div>
              <p className="text-gray-300 text-lg">Homes Served</p>
            </div>
            <div className="">
              <div className="text-5xl font-bold text-orange-400 mb-2">4.9★</div>
              <p className="text-gray-300 text-lg">Google Rating</p>
            </div>
            <div className="">
              <div className="text-5xl font-bold text-orange-400 mb-2">24/7</div>
              <p className="text-gray-300 text-lg">Same-Day Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Testimonials - 3 cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-bold text-4xl text-center text-gray-900 mb-12">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                rating: '⭐⭐⭐⭐⭐',
                text: 'Harris Air came out same day when our AC died in the middle of summer. Professional, fair pricing, and got us cool again fast!',
                name: 'Mike T.',
                location: 'McKinney'
              },
              {
                rating: '⭐⭐⭐⭐⭐',
                text: 'Outstanding service! They installed our new furnace quickly and explained everything clearly. Highly recommend!',
                name: 'Jennifer L.',
                location: 'Allen'
              },
              {
                rating: '⭐⭐⭐⭐⭐',
                text: 'Family-owned and it shows. They care about their customers and stand behind their work. Won\'t use anyone else.',
                name: 'Robert K.',
                location: 'Plano'
              }
            ].map((testimonial, index) => (
              <div key={index} className={`bg-white rounded-lg p-6 shadow-sm ${index + 1}`}>
                <div className="text-yellow-400 text-lg mb-3">{testimonial.rating}</div>
                <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Service Area */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="font-bold text-4xl text-gray-900 mb-8">Serving McKinney & Surrounding Areas</h2>
          <div className="grid md:grid-cols-4 lg:grid-cols-7 gap-4">
            {['McKinney', 'Allen', 'Plano', 'Frisco', 'Prosper', 'Anna', 'Melissa'].map((city, index) => (
              <div key={city} className={`bg-gray-100 rounded-lg p-4 ${index % 3 + 1}`}>
                <p className="font-semibold text-gray-800">{city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Emergency CTA */}
      <section className="bg-slate-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-bold text-4xl mb-6">Don't Sweat It. Call Harris Air.</h2>
          <p className="text-xl text-gray-300 mb-8">Emergency HVAC service available 24/7</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <span className="text-3xl font-bold text-orange-400">(469) 325-1034</span>
            <button
              onClick={handleEmergencyCall}
              className="bg-orange-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-colors"
            >
              Call Now
            </button>
          </div>
        </div>
      </section>

      {/* 10. Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {/* License info */}
            <div>
              <h3 className="font-bold text-lg mb-4">Licensing</h3>
              <div className="text-gray-300 space-y-2 text-sm">
                <p>TACLA License #12345</p>
                <p>Insured & Bonded</p>
                <p>BBB A+ Rating</p>
              </div>
            </div>
            {/* Hours */}
            <div>
              <h3 className="font-bold text-lg mb-4">Hours</h3>
              <div className="text-gray-300 space-y-2 text-sm">
                <p>Mon-Fri: 7 AM - 7 PM</p>
                <p>Saturday: 8 AM - 5 PM</p>
                <p>Emergency: 24/7</p>
              </div>
            </div>
            {/* Contact */}
            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <div className="text-gray-300 space-y-2 text-sm">
                <p className="text-orange-400 font-semibold">(469) 325-1034</p>
                <p>info@harrisairservices.com</p>
                <p>McKinney, TX 75070</p>
              </div>
            </div>
            {/* CTA */}
            <div>
              <h3 className="font-bold text-lg mb-4">Get Service</h3>
              <button
                onClick={handleScheduleService}
                className="bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors w-full"
              >
                Schedule Service
              </button>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 Harris Air Services. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <ChatWidget
        businessName="Harris Air Services"
        businessType="hvac"
        themeColor="#F97316"
      />
    </div>
  )
}