'use client'

import React from 'react'
import Link from 'next/link'
import ChatWidget from '@/app/components/ChatWidget'
import { motion } from 'framer-motion'

export default function Dental3Page() {
  const handleBookAppointment = () => {
    alert('Booking system would open here! Call (469) 337-8855 to schedule.')
  }

  return (
    <div className="min-h-screen bg-white font-poppins">
      {/* Back to Home */}
      <Link href="/" className="fixed top-4 left-4 z-50 bg-white/90 backdrop-blur-sm text-[#1E293B] hover:text-[#0891B2] px-4 py-2 rounded-full shadow-md text-sm font-medium flex items-center gap-2 transition-colors">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
        Liow Digital
      </Link>

      {/* Sticky Nav */}
      <nav className="sticky top-0 z-40 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">😁</span>
              <h1 className="text-xl font-bold text-[#1E293B]">Bright Smiles Dental</h1>
            </div>
            <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-[#1E293B]/70">
              <a href="#services" className="hover:text-[#0891B2] transition-colors">Services</a>
              <a href="#why-us" className="hover:text-[#0891B2] transition-colors">Why Us</a>
              <a href="#reviews" className="hover:text-[#0891B2] transition-colors">Reviews</a>
              <a href="#contact" className="hover:text-[#0891B2] transition-colors">Contact</a>
            </div>
            <div className="flex items-center space-x-3">
              <span className="hidden sm:inline text-sm font-semibold text-[#0891B2]">(469) 337-8855</span>
              <button
                onClick={handleBookAppointment}
                className="bg-[#0891B2] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#0e7490] transition-colors"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 md:py-28 bg-[#ECFEFF]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                className="inline-block bg-white text-[#0891B2] text-sm font-semibold px-4 py-2 rounded-full mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                🎉 Now Accepting New Patients!
              </motion.div>
              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E293B] mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                A smile you will love to show off 😄
              </motion.h2>
              <motion.p
                className="text-lg text-[#1E293B]/60 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                From your first visit, you will feel the difference. Modern technology, a friendly team, and a commitment to making dental care something you actually enjoy.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.button
                  onClick={handleBookAppointment}
                  className="bg-[#0891B2] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#0e7490] transition-colors"
                  whileHover={{ y: -3, boxShadow: '0 10px 30px rgba(8, 145, 178, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started Today
                </motion.button>
                <motion.a
                  href="tel:4693378855"
                  className="border-2 border-[#0891B2] text-[#0891B2] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#0891B2] hover:text-white transition-colors text-center"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Call Us
                </motion.a>
              </motion.div>
            </div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="bg-[#0891B2] rounded-2xl p-10 text-white text-center">
                <span className="text-7xl block mb-4">🦷</span>
                <p className="text-2xl font-bold mb-2">Bright Smiles Dental</p>
                <p className="text-white/80 mb-6">Where healthy smiles begin</p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-white/20 rounded-2xl p-4">
                    <p className="text-3xl font-bold">12+</p>
                    <p className="text-sm text-white/80">Years Serving Plano</p>
                  </div>
                  <div className="bg-white/20 rounded-2xl p-4">
                    <p className="text-3xl font-bold">4.9★</p>
                    <p className="text-sm text-white/80">Google Rating</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold text-[#0891B2] bg-[#ECFEFF] px-4 py-1.5 rounded-full">Our Services</span>
            <h3 className="text-3xl md:text-4xl font-bold text-[#1E293B] mt-6">Everything your smile needs</h3>
            <p className="text-[#1E293B]/60 mt-4 max-w-xl mx-auto">Comprehensive dental care under one roof, delivered with warmth and expertise.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🪥', title: 'General Dentistry', desc: 'Routine exams, professional cleanings, digital X-rays, and fillings. We catch problems early so your smile stays strong.' },
              { icon: '💎', title: 'Cosmetic Dentistry', desc: 'Porcelain veneers, dental bonding, and complete smile design. Show the world the smile you have always wanted.' },
              { icon: '🔩', title: 'Dental Implants', desc: 'State-of-the-art implant placement and restoration. A permanent solution that looks and feels completely natural.' },
              { icon: '⚡', title: 'Teeth Whitening', desc: 'In-office and take-home whitening options that deliver dramatic results safely. Walk out several shades brighter.' },
              { icon: '🚨', title: 'Emergency Care', desc: 'Toothache? Broken tooth? Do not wait. Call us for same-day emergency appointments — we will get you in fast.' },
              { icon: '🧸', title: 'Kids Dentistry', desc: 'Gentle, fun dental visits for children of all ages. We help kids build positive habits that last a lifetime.' },
            ].map((service, i) => (
              <motion.div
                key={service.title}
                className="bg-[#ECFEFF] rounded-2xl p-8 hover:bg-[#0891B2] hover:text-white group transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <span className="text-4xl block mb-4">{service.icon}</span>
                <h4 className="text-xl font-bold text-[#1E293B] group-hover:text-white mb-3 transition-colors">{service.title}</h4>
                <p className="text-[#1E293B]/60 group-hover:text-white/80 text-sm leading-relaxed transition-colors">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us / Trust */}
      <section id="why-us" className="py-20 bg-[#ECFEFF]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold text-[#0891B2] bg-white px-4 py-1.5 rounded-full">Why Bright Smiles?</span>
            <h3 className="text-3xl md:text-4xl font-bold text-[#1E293B] mt-6">What makes us different</h3>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Same-Day Appointments', desc: 'Need to be seen today? We keep slots open for urgent care so you never have to wait in pain.' },
              { num: '02', title: 'Modern Technology', desc: 'Digital X-rays, intraoral cameras, and laser dentistry for faster, more comfortable treatments.' },
              { num: '03', title: 'Flexible Payment', desc: 'We accept most insurance plans and offer flexible financing. Great dental care should be affordable.' },
              { num: '04', title: 'Comfort-First Approach', desc: 'Blankets, headphones, and a gentle touch. We go the extra mile to make your visit stress-free.' },
            ].map((item, i) => (
              <motion.div
                key={item.num}
                className="bg-white rounded-2xl p-8 border-l-4 border-[#0891B2]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <span className="text-4xl font-bold text-[#0891B2]/20">{item.num}</span>
                <h4 className="text-lg font-bold text-[#1E293B] mt-3 mb-2">{item.title}</h4>
                <p className="text-sm text-[#1E293B]/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold text-[#0891B2] bg-[#ECFEFF] px-4 py-1.5 rounded-full">Patient Love</span>
            <h3 className="text-3xl md:text-4xl font-bold text-[#1E293B] mt-6">Hear it from our patients</h3>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: 'I switched to Bright Smiles after a bad experience elsewhere and it was the best decision. Dr. Patel is incredibly skilled and the whole team genuinely cares. My kids actually ask to go to the dentist now!',
                name: 'Sarah Mitchell',
                rating: '★★★★★',
              },
              {
                quote: 'Got a dental implant here and the results are amazing. You honestly cannot tell the difference from my real teeth. The process was smoother than I expected and the team kept me comfortable throughout.',
                name: 'Marcus Johnson',
                rating: '★★★★★',
              },
              {
                quote: 'I came in for an emergency on a Friday afternoon with a cracked tooth and they fit me in within the hour. That kind of care is rare. They treated me like family, not just a patient number.',
                name: 'Jennifer Nguyen',
                rating: '★★★★★',
              },
            ].map((t, i) => (
              <motion.div
                key={t.name}
                className="relative bg-[#ECFEFF] rounded-2xl p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                {/* Speech bubble tail */}
                <div className="absolute -bottom-3 left-10 w-6 h-6 bg-[#ECFEFF] rotate-45 rounded-sm"></div>
                <p className="text-[#0891B2] text-lg mb-3">{t.rating}</p>
                <p className="text-[#1E293B]/70 leading-relaxed text-sm mb-6">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0891B2] flex items-center justify-center text-white font-bold text-sm">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <p className="font-semibold text-[#1E293B] text-sm">{t.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0891B2]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.span
            className="text-5xl block mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: 'spring' }}
          >
            🎉
          </motion.span>
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Ready for your brightest smile yet?
          </motion.h3>
          <motion.p
            className="text-white/70 mb-10 text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            New patient specials available! Book your first appointment and see why Plano families choose Bright Smiles.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.button
              onClick={handleBookAppointment}
              className="bg-white text-[#0891B2] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#ECFEFF] transition-colors"
              whileHover={{ y: -3, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)' }}
              whileTap={{ scale: 0.95 }}
            >
              Book My Appointment
            </motion.button>
            <motion.a
              href="tel:4693378855"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors text-center"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              (469) 337-8855
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-16 bg-[#0891B2] border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">😁</span>
                <h4 className="text-xl font-bold text-white">Bright Smiles Dental</h4>
              </div>
              <p className="text-white/60 leading-relaxed text-sm max-w-md">
                Your neighborhood dental practice in Plano, TX. We combine advanced technology with a warm, friendly atmosphere to make every visit a great experience.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Visit Us</h4>
              <div className="text-white/60 text-sm space-y-2">
                <p>8600 Preston Rd</p>
                <p>Plano, TX 75024</p>
                <p className="text-white font-semibold mt-3">(469) 337-8855</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Office Hours</h4>
              <div className="text-white/60 text-sm space-y-2">
                <p>Mon – Fri: 7:00am – 6:00pm</p>
                <p>Sat: 8:00am – 3:00pm</p>
                <p>Sun: Closed</p>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <p className="text-white/30 text-xs">© 2026 Bright Smiles Dental. All rights reserved. This is a demo website by Liow Digital.</p>
          </div>
        </div>
      </footer>

      <ChatWidget businessName="Bright Smiles Dental" businessType="dental" themeColor="#0891B2" />
    </div>
  )
}
