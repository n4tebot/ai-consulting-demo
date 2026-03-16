'use client'

import React from 'react'
import Link from 'next/link'
import ChatWidget from '@/app/components/ChatWidget'
import DemoNav from '@/app/components/DemoNav'
import { motion } from 'framer-motion'

export default function Dental2Page() {
  const handleBookAppointment = () => {
    alert('Booking system would open here! Call (469) 331-2200 to schedule.')
  }

  return (
    <div className="min-h-screen bg-[#F5F0EB] font-dm-sans">

      {/* Sticky Nav */}
      <nav className="sticky top-0 z-40 bg-white border-b border-[#2D2D2D]/10">
        <div className="max-w-6xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <h1 className="text-xl tracking-wide text-[#2D2D2D] font-light">McKinney Family Dentistry</h1>
            <div className="hidden md:flex items-center space-x-8 text-sm text-[#2D2D2D]/70">
              <a href="#services" className="hover:text-[#2D2D2D] transition-colors">Services</a>
              <a href="#about" className="hover:text-[#2D2D2D] transition-colors">About</a>
              <a href="#testimonials" className="hover:text-[#2D2D2D] transition-colors">Reviews</a>
              <a href="#contact" className="hover:text-[#2D2D2D] transition-colors">Contact</a>
            </div>
            <div className="flex items-center space-x-4">
              <span className="hidden sm:inline text-sm text-[#2D2D2D]/70">(469) 331-2200</span>
              <button
                onClick={handleBookAppointment}
                className="bg-[#A8B5A0] text-white px-5 py-2 text-sm tracking-wide hover:bg-[#95a48d] transition-colors"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-32 md:py-44">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.p
            className="text-sm tracking-[0.2em] uppercase text-[#A8B5A0] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Gentle Care for Every Smile
          </motion.p>
          <motion.h2
            className="text-4xl md:text-6xl font-light text-[#2D2D2D] mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Dentistry rooted in
            <br />
            trust and compassion
          </motion.h2>
          <motion.p
            className="text-lg text-[#2D2D2D]/60 mb-12 max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We believe dental visits should feel calm, unhurried, and personal. Our McKinney practice is built around your comfort and long-term health.
          </motion.p>
          <motion.button
            onClick={handleBookAppointment}
            className="bg-[#2D2D2D] text-white px-8 py-4 text-sm tracking-wide hover:bg-[#1a1a1a] transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Schedule Your Visit
          </motion.button>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm tracking-[0.2em] uppercase text-[#A8B5A0] mb-4">What We Offer</p>
            <h3 className="text-3xl md:text-4xl font-light text-[#2D2D2D]">Our Services</h3>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0">
            {[
              { icon: '🪥', title: 'General Dentistry', desc: 'Comprehensive exams, cleanings, fillings, and preventive care to keep your smile healthy for years to come.' },
              { icon: '✨', title: 'Cosmetic Dentistry', desc: 'Veneers, bonding, and smile makeovers designed to enhance your natural beauty with subtle, lasting results.' },
              { icon: '🦷', title: 'Dental Implants', desc: 'Permanent tooth replacement that looks, feels, and functions like your natural teeth. Restored confidence starts here.' },
              { icon: '🌟', title: 'Teeth Whitening', desc: 'Professional-grade whitening treatments that safely brighten your smile several shades in just one visit.' },
              { icon: '🏥', title: 'Emergency Care', desc: 'Same-day appointments for dental emergencies. When pain strikes, we are here to help — call us right away.' },
              { icon: '👶', title: 'Pediatric Dentistry', desc: 'Gentle, patient care for little ones. We make first dental visits fun and help build lifelong healthy habits.' },
            ].map((service, i) => (
              <motion.div
                key={service.title}
                className="border border-[#2D2D2D]/10 p-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <span className="text-2xl mb-4 block">{service.icon}</span>
                <h4 className="text-lg font-normal text-[#2D2D2D] mb-3">{service.title}</h4>
                <p className="text-sm text-[#2D2D2D]/60 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / Stats Bar */}
      <section id="about" className="py-20 bg-[#F5F0EB]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm tracking-[0.2em] uppercase text-[#A8B5A0] mb-4">Why Families Choose Us</p>
            <h3 className="text-3xl md:text-4xl font-light text-[#2D2D2D] mb-6">Built on relationships, not transactions</h3>
            <p className="text-[#2D2D2D]/60 max-w-2xl mx-auto leading-relaxed">
              Dr. Sarah McKinney founded this practice with one belief: that everyone deserves a dentist who listens. We take the time to understand your concerns, explain every option, and never rush your care.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-[#2D2D2D]/10 bg-white">
            {[
              { num: '15+', label: 'Years of Practice' },
              { num: '5,000+', label: 'Happy Patients' },
              { num: '4.9', label: 'Google Rating' },
              { num: '98%', label: 'Patient Retention' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className={`p-8 text-center ${i < 3 ? 'border-r border-[#2D2D2D]/10' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <p className="text-3xl font-light text-[#A8B5A0] mb-2">{stat.num}</p>
                <p className="text-xs tracking-[0.15em] uppercase text-[#2D2D2D]/50">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm tracking-[0.2em] uppercase text-[#A8B5A0] mb-4">Kind Words</p>
            <h3 className="text-3xl md:text-4xl font-light text-[#2D2D2D]">What our patients say</h3>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                quote: 'I have always dreaded going to the dentist, but McKinney Family Dentistry changed that completely. The team is so warm and patient. Dr. McKinney took the time to explain everything and never once made me feel rushed. I actually look forward to my visits now.',
                name: 'Rebecca Thornton',
                detail: 'Patient since 2019',
              },
              {
                quote: 'We bring our three kids here and they love it. The staff has a real gift with children — no tears, no anxiety. They make it fun while still being thorough. I cannot recommend them enough for families.',
                name: 'James & Lisa Park',
                detail: 'Patient since 2021',
              },
              {
                quote: 'After years of being self-conscious about my smile, Dr. McKinney gave me the confidence to show it off. The veneers look completely natural. The whole process was comfortable and the results exceeded my expectations.',
                name: 'David Castillo',
                detail: 'Patient since 2020',
              },
            ].map((t, i) => (
              <motion.div
                key={t.name}
                className="pt-8 border-t border-[#2D2D2D]/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <p className="text-[#2D2D2D]/70 leading-relaxed mb-8 text-sm">&ldquo;{t.quote}&rdquo;</p>
                <p className="text-[#2D2D2D] text-sm font-medium">{t.name}</p>
                <p className="text-xs text-[#2D2D2D]/40 mt-1">{t.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#2D2D2D]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.p
            className="text-sm tracking-[0.2em] uppercase text-[#A8B5A0] mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Get Started?
          </motion.p>
          <motion.h3
            className="text-3xl md:text-4xl font-light text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Your healthiest smile begins with a conversation
          </motion.h3>
          <motion.p
            className="text-white/50 mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            New patients are always welcome. We would love to learn about your dental goals and create a care plan tailored just for you.
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
              className="bg-[#A8B5A0] text-white px-8 py-4 text-sm tracking-wide hover:bg-[#95a48d] transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Book Appointment
            </motion.button>
            <motion.a
              href="tel:4693312200"
              className="border border-white/20 text-white px-8 py-4 text-sm tracking-wide hover:bg-white/5 transition-colors text-center"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Call (469) 331-2200
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-16 bg-white border-t border-[#2D2D2D]/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-lg font-light text-[#2D2D2D] mb-4">McKinney Family Dentistry</h4>
              <p className="text-sm text-[#2D2D2D]/50 leading-relaxed">
                Thoughtful, personalized dental care for patients of all ages in the McKinney community.
              </p>
            </div>
            <div>
              <h4 className="text-xs tracking-[0.15em] uppercase text-[#A8B5A0] mb-4">Location</h4>
              <p className="text-sm text-[#2D2D2D]/60 leading-relaxed">
                2150 W University Dr<br />
                McKinney, TX 75071
              </p>
              <p className="text-sm text-[#2D2D2D]/60 mt-3">(469) 331-2200</p>
            </div>
            <div>
              <h4 className="text-xs tracking-[0.15em] uppercase text-[#A8B5A0] mb-4">Hours</h4>
              <div className="text-sm text-[#2D2D2D]/60 space-y-1">
                <p>Mon – Thu: 8:00am – 5:00pm</p>
                <p>Fri: 8:00am – 2:00pm</p>
                <p>Sat: By appointment</p>
                <p>Sun: Closed</p>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-[#2D2D2D]/10 text-center">
            <p className="text-xs text-[#2D2D2D]/30">© 2026 McKinney Family Dentistry. All rights reserved. This is a demo website by Liow Digital.</p>
          </div>
        </div>
      </footer>

      <DemoNav />
      <ChatWidget businessName="McKinney Family Dentistry" businessType="dental" themeColor="#A8B5A0" />
    </div>
  )
}
