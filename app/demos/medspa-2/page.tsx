'use client'

import React from 'react'
import Link from 'next/link'
import ChatWidget from '@/app/components/ChatWidget'
import { motion } from 'framer-motion'

export default function MedSpa2Page() {
  const handleBookConsultation = () => {
    alert('Book your appointment! Call (469) 502-8800 to schedule.')
  }

  const services = [
    { name: 'Botox & Dysport', description: 'Precision wrinkle relaxation for a naturally refreshed appearance' },
    { name: 'Dermal Fillers', description: 'Restore volume and sculpt elegant facial contours' },
    { name: 'Laser Treatments', description: 'Advanced laser technology for skin resurfacing and renewal' },
    { name: 'Chemical Peels', description: 'Medical-grade peels tailored to reveal luminous skin' },
    { name: 'Microneedling', description: 'Collagen induction therapy for refined skin texture' },
    { name: 'Body Contouring', description: 'Non-invasive sculpting for a beautifully defined silhouette' },
  ]

  const testimonials = [
    {
      quote: 'The level of care at Lumière is unlike anything I have experienced. Every detail was considered, and my results look so natural that friends simply say I look refreshed and radiant.',
      name: 'Victoria Hargrove',
      location: 'Plano, TX',
    },
    {
      quote: 'I was nervous about fillers for the first time, but the team made me feel completely at ease. The artistry is remarkable — subtle, elegant, and exactly what I envisioned.',
      name: 'Catherine Nguyen',
      location: 'Frisco, TX',
    },
    {
      quote: 'From the moment I walked in, everything felt curated and intentional. My skin has never looked better after their laser treatment series. Truly a transformative experience.',
      name: 'Danielle Whitmore',
      location: 'Dallas, TX',
    },
  ]

  return (
    <div className="min-h-screen bg-[#FFFBF0] text-[#000000]">
      {/* Back to Home */}
      <Link
        href="/"
        className="fixed top-4 left-4 z-50 bg-white/90 backdrop-blur-sm text-[#6B6B6B] hover:text-[#000000] px-4 py-2 rounded-full shadow-md text-sm font-medium flex items-center gap-2 transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Liow Digital
      </Link>

      {/* Sticky Nav */}
      <nav className="sticky top-0 z-40 bg-[#FFFBF0]/95 backdrop-blur-sm border-b border-[#000000]/10">
        <div className="max-w-6xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="font-cormorant text-2xl md:text-3xl tracking-wide text-[#000000]"
            >
              Lumière Aesthetics
            </motion.h1>
            <div className="hidden md:flex items-center space-x-10">
              <a href="#services" className="text-xs tracking-widest uppercase text-[#6B6B6B] hover:text-[#000000] transition-colors">
                Services
              </a>
              <a href="#about" className="text-xs tracking-widest uppercase text-[#6B6B6B] hover:text-[#000000] transition-colors">
                About
              </a>
              <a href="#testimonials" className="text-xs tracking-widest uppercase text-[#6B6B6B] hover:text-[#000000] transition-colors">
                Testimonials
              </a>
              <a href="#contact" className="text-xs tracking-widest uppercase text-[#6B6B6B] hover:text-[#000000] transition-colors">
                Contact
              </a>
            </div>
            <a
              href="tel:4695028800"
              className="text-sm tracking-wide text-[#000000] border-b border-[#000000] pb-0.5 hover:text-[#6B6B6B] hover:border-[#6B6B6B] transition-colors"
            >
              (469) 502-8800
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-[90vh] bg-[#FFFBF0] flex items-center justify-center py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-widest uppercase text-[#6B6B6B] mb-8"
          >
            Plano&apos;s Premier Aesthetic Destination
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-cormorant text-6xl md:text-8xl text-[#000000] mb-8 leading-[0.95] tracking-tight"
          >
            The Art of
            <br />
            Refined Beauty
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-24 h-px bg-[#000000] mx-auto mb-8"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg text-[#6B6B6B] mb-14 leading-relaxed max-w-xl mx-auto font-light"
          >
            Where meticulous technique meets an unwavering commitment to natural elegance.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <motion.button
              onClick={handleBookConsultation}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              className="text-[#000000] text-sm tracking-widest uppercase border-b border-[#000000] pb-1 hover:text-[#6B6B6B] hover:border-[#6B6B6B] transition-colors"
            >
              Reserve a Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-28 bg-white" id="services">
        <div className="max-w-5xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-widest uppercase text-[#6B6B6B] mb-4 text-center"
          >
            Our Services
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-cormorant text-5xl md:text-6xl text-[#000000] mb-20 text-center tracking-tight"
          >
            Treatment Collection
          </motion.h2>

          <div className="border-t border-[#000000]/15">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-b border-[#000000]/15 py-10 md:py-12"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <h3 className="font-cormorant text-3xl md:text-4xl text-[#000000] tracking-tight">
                    {service.name}
                  </h3>
                  <p className="text-[#6B6B6B] text-sm md:text-base font-light max-w-md md:text-right leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-16"
          >
            <motion.button
              onClick={handleBookConsultation}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              className="text-[#000000] text-sm tracking-widest uppercase border-b border-[#000000] pb-1 hover:text-[#6B6B6B] hover:border-[#6B6B6B] transition-colors"
            >
              View Full Treatment Menu
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Trust / About Section - Magazine Two-Column */}
      <section className="py-28 bg-[#FFFBF0]" id="about">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-xs tracking-widest uppercase text-[#6B6B6B] mb-6">Our Philosophy</p>
              <h2 className="font-cormorant text-5xl md:text-6xl text-[#000000] leading-[1.05] mb-8 tracking-tight">
                Precision in Every Detail
              </h2>
              <div className="w-16 h-px bg-[#000000] mb-8" />
              <p className="text-[#6B6B6B] leading-relaxed font-light mb-6">
                At Lumière Aesthetics, we approach each treatment as an art form. Our board-certified practitioners
                combine years of advanced training with an aesthetic eye honed by thousands of successful procedures.
              </p>
              <p className="text-[#6B6B6B] leading-relaxed font-light">
                We believe in the power of subtlety — results that make people wonder what has changed,
                not what was done. Every consultation begins with listening, because understanding your vision
                is the foundation of exceptional outcomes.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="md:pt-16"
            >
              <div className="border-l-2 border-[#000000] pl-8 md:pl-12">
                <p className="font-cormorant text-3xl md:text-4xl text-[#000000] italic leading-snug mb-6">
                  &ldquo;True beauty is not about transformation — it is about revelation.
                  We simply illuminate what was always there.&rdquo;
                </p>
                <p className="text-xs tracking-widest uppercase text-[#6B6B6B]">
                  — Dr. Isabelle Laurent, Medical Director
                </p>
              </div>
              <div className="mt-16 space-y-8">
                <div>
                  <p className="font-cormorant text-4xl text-[#000000] mb-1">15+</p>
                  <p className="text-xs tracking-widest uppercase text-[#6B6B6B]">Years of Excellence</p>
                </div>
                <div>
                  <p className="font-cormorant text-4xl text-[#000000] mb-1">5,000+</p>
                  <p className="text-xs tracking-widest uppercase text-[#6B6B6B]">Treatments Performed</p>
                </div>
                <div>
                  <p className="font-cormorant text-4xl text-[#000000] mb-1">98%</p>
                  <p className="text-xs tracking-widest uppercase text-[#6B6B6B]">Client Satisfaction</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 bg-white" id="testimonials">
        <div className="max-w-5xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-widest uppercase text-[#6B6B6B] mb-4 text-center"
          >
            Client Reflections
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-cormorant text-5xl md:text-6xl text-[#000000] mb-20 text-center tracking-tight"
          >
            In Their Words
          </motion.h2>

          <div className="space-y-0">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="py-12 border-t border-[#000000]/15 last:border-b"
              >
                <div className="max-w-3xl mx-auto text-center">
                  <p className="font-cormorant text-2xl md:text-3xl text-[#000000] italic leading-relaxed mb-6">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <p className="text-xs tracking-widest uppercase text-[#6B6B6B]">
                    {testimonial.name} — {testimonial.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[#FFFBF0]" id="contact">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-widest uppercase text-[#6B6B6B] mb-6"
          >
            Begin Your Journey
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-cormorant text-5xl md:text-7xl text-[#000000] mb-8 tracking-tight leading-[0.95]"
          >
            Your Consultation Awaits
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-24 h-px bg-[#000000] mx-auto mb-8"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[#6B6B6B] text-lg font-light leading-relaxed mb-12 max-w-xl mx-auto"
          >
            Every transformation begins with a conversation. Schedule your private consultation
            to discuss your aesthetic goals with our expert team.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8"
          >
            <motion.button
              onClick={handleBookConsultation}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              className="bg-[#000000] text-[#FFFBF0] px-10 py-4 text-xs tracking-widest uppercase hover:bg-[#6B6B6B] transition-colors"
            >
              Book Consultation
            </motion.button>
            <a
              href="tel:4695028800"
              className="text-[#000000] text-sm tracking-widest uppercase border-b border-[#000000] pb-1 hover:text-[#6B6B6B] hover:border-[#6B6B6B] transition-colors"
            >
              (469) 502-8800
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#000000] text-[#FFFBF0] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-16 mb-16">
            <div>
              <h3 className="font-cormorant text-2xl mb-6 tracking-wide">Lumière Aesthetics</h3>
              <p className="text-[#FFFBF0]/60 text-sm font-light leading-relaxed">
                An elevated aesthetic experience in the heart of Plano.
                Where science meets artistry.
              </p>
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase text-[#FFFBF0]/40 mb-6">Visit</p>
              <p className="text-[#FFFBF0]/80 text-sm font-light leading-relaxed">
                5800 Legacy Dr, Suite 400
                <br />
                Plano, TX 75024
              </p>
              <p className="text-[#FFFBF0]/80 text-sm font-light mt-4">
                <a href="tel:4695028800" className="hover:text-[#FFFBF0] transition-colors">(469) 502-8800</a>
              </p>
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase text-[#FFFBF0]/40 mb-6">Hours</p>
              <div className="text-[#FFFBF0]/80 text-sm font-light space-y-2">
                <p>Tuesday – Saturday: 10:00 AM – 7:00 PM</p>
                <p>Sunday: By Appointment</p>
                <p>Monday: Closed</p>
              </div>
            </div>
          </div>
          <div className="border-t border-[#FFFBF0]/10 pt-8 flex flex-col md:flex-row items-center justify-between text-[#FFFBF0]/40 text-xs tracking-wide">
            <p>&copy; 2026 Lumière Aesthetics. All rights reserved.</p>
            <div className="flex items-center space-x-8 mt-4 md:mt-0">
              <a href="#" className="hover:text-[#FFFBF0]/80 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#FFFBF0]/80 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      <ChatWidget
        businessName="Lumière Aesthetics"
        businessType="medspa"
        themeColor="#000000"
      />
    </div>
  )
}