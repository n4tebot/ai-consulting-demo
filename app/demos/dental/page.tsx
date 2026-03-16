'use client'

import React from 'react'
import Link from 'next/link'
import ChatWidget from '@/app/components/ChatWidget'
import { motion } from 'framer-motion'

export default function DentalPage() {
  const handleBookAppointment = () => {
    alert('Booking system would open here! Call (469) 325-1034 to schedule.')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Back to Home */}
      <Link href="/" className="fixed top-4 left-4 z-50 bg-white/90 backdrop-blur-sm text-gray-700 hover:text-gray-900 px-4 py-2 rounded-full shadow-md text-sm font-medium flex items-center gap-2 transition-colors">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
        Liow Digital
      </Link>
      {/* 1. Sticky Nav */}
      <nav className="sticky top-0 z-40 bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🦷</span>
              <h1 className="font-serif text-xl font-semibold text-gray-900">Valley Creek Dental Care</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-lg font-semibold text-teal-600">(469) 325-1034</span>
              <button
                onClick={handleBookAppointment}
                className="bg-teal-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-teal-600 transition-colors"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* 2. Split Hero - LEFT: text, RIGHT: decorative element */}
      <section className="bg-gradient-to-r from-teal-50 to-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT: Headlines + CTA */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2 
                className="font-serif text-5xl font-semibold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Your Smile, Our Passion
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-700 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Comprehensive dental care for the whole family in McKinney. From routine cleanings to complete smile makeovers.
              </motion.p>
              <motion.button
                onClick={handleBookAppointment}
                className="bg-teal-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-600 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ y: -3, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Your Visit
              </motion.button>
            </motion.div>
            {/* RIGHT: Large decorative shape */}
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="w-80 h-80 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
              >
                <span className="text-8xl text-white">😊</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Horizontal Scrolling Service Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 
            className="font-serif text-3xl font-semibold text-gray-900 mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.h2>
          <div className="overflow-x-auto">
            <div className="flex gap-6 pb-4 min-w-max">
              {[
                { icon: '🦷', name: 'General', desc: 'Cleanings & preventive care' },
                { icon: '✨', name: 'Cosmetic', desc: 'Whitening & smile makeovers' },
                { icon: '🔧', name: 'Implants', desc: 'Permanent tooth replacement' },
                { icon: '⚡', name: 'Whitening', desc: 'Professional teeth whitening' },
                { icon: '🚨', name: 'Emergency', desc: 'Same-day urgent care' },
                { icon: '👶', name: 'Pediatric', desc: 'Gentle care for children' }
              ].map((service, index) => (
                <motion.div 
                  key={service.name} 
                  className="bg-white border border-gray-200 rounded-lg p-6 w-64 flex-shrink-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -3, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
                >
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <h3 className="font-serif text-lg font-semibold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-3">{service.desc}</p>
                  <span className="text-teal-600 font-medium text-sm">Learn More →</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Full-Width Banner */}
      <section className="bg-teal-600 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold mb-2">New Patient Special: $79 Exam & X-Rays</h3>
          <p className="text-teal-100 mb-4">Comprehensive exam, digital X-rays, and treatment plan</p>
          <button
            onClick={handleBookAppointment}
            className="bg-white text-teal-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            Claim Special Offer
          </button>
        </div>
      </section>

      {/* 5. Two-Column "Why Choose Us" */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT: Numbered list */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2 
                className="font-serif text-3xl font-semibold text-gray-900 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Why Choose Us
              </motion.h2>
              <div className="space-y-6">
                {[
                  { num: '1', title: 'Same-Day Appointments', desc: 'We fit you into our schedule when you need us most' },
                  { num: '2', title: 'Gentle & Caring Team', desc: 'Our experienced staff prioritizes your comfort' },
                  { num: '3', title: 'Modern Technology', desc: 'Digital X-rays and advanced treatment options' },
                  { num: '4', title: 'Insurance Accepted', desc: 'We work with most major insurance plans' }
                ].map((item, index) => (
                  <motion.div 
                    key={item.num} 
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                  >
                    <div className="w-10 h-10 bg-teal-500 text-white rounded-full flex items-center justify-center font-semibold">
                      {item.num}
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            {/* RIGHT: Placeholder image area */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-teal-100 to-slate-100 rounded-2xl h-80 flex items-center justify-center">
                <span className="text-6xl">🏥</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Testimonial Carousel */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl font-semibold text-gray-900 mb-12">What Our Patients Say</h2>
          <motion.div 
            className="bg-slate-50 rounded-2xl p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-6xl text-teal-200 mb-4">"</div>
            <p className="text-xl text-gray-700 mb-6 italic leading-relaxed">
              Dr. Smith and her team made my dental implant procedure completely painless. The results look amazing and I can eat all my favorite foods again!
            </p>
            <div className="text-yellow-400 text-xl mb-3">★★★★★</div>
            <p className="font-semibold text-gray-900">Sarah Johnson</p>
            <p className="text-gray-600">McKinney, TX</p>
          </motion.div>
        </div>
      </section>

      {/* 7. Insurance Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl font-semibold text-gray-900 mb-8">We Accept Most Insurance</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {['Aetna', 'BlueCross BlueShield', 'Cigna', 'Delta Dental', 'MetLife', 'United Healthcare', 'Humana', 'Guardian'].map((insurer, index) => (
              <motion.div 
                key={insurer} 
                className="bg-white rounded-lg p-4 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -3, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
              >
                <p className="font-medium text-gray-700">{insurer}</p>
              </motion.div>
            ))}
          </div>
          <p className="mt-6 text-gray-600">Plus many more! Call us to verify your coverage.</p>
        </div>
      </section>

      {/* 8. Contact Footer - 3 columns */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Location/Map */}
            <div>
              <h3 className="font-serif text-xl font-semibold mb-4">📍 Location</h3>
              <div className="text-gray-300 space-y-2">
                <p>123 Dental Way</p>
                <p>McKinney, TX 75070</p>
                <p className="text-teal-400">Get Directions →</p>
              </div>
            </div>
            {/* Hours */}
            <div>
              <h3 className="font-serif text-xl font-semibold mb-4">🕒 Hours</h3>
              <div className="text-gray-300 space-y-2">
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 3:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
            {/* Contact */}
            <div>
              <h3 className="font-serif text-xl font-semibold mb-4">📞 Contact</h3>
              <div className="text-gray-300 space-y-2">
                <p className="text-teal-400 text-lg font-semibold">(469) 325-1034</p>
                <p>info@valleycreekdental.com</p>
                <button
                  onClick={handleBookAppointment}
                  className="bg-teal-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-teal-600 transition-colors mt-3"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Valley Creek Dental Care. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <ChatWidget
        businessName="Valley Creek Dental"
        businessType="dental"
        themeColor="#0D9488"
      />
    </div>
  )
}