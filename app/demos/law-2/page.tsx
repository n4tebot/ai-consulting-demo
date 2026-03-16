'use client'

import React from 'react'
import Link from 'next/link'
import ChatWidget from '@/app/components/ChatWidget'
import { motion } from 'framer-motion'

const practiceAreas = [
  {
    title: 'Personal Injury',
    description: 'Aggressive representation for accident victims. We fight to secure the compensation you deserve for medical bills, lost wages, and pain and suffering.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    ),
  },
  {
    title: 'Family Law',
    description: 'Compassionate guidance through divorce, custody disputes, and adoption. We protect your family\'s interests with dignity and discretion.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4" /></svg>
    ),
  },
  {
    title: 'Business Litigation',
    description: 'Strategic counsel for complex commercial disputes. From breach of contract to partnership conflicts, we deliver results-driven litigation.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
    ),
  },
  {
    title: 'Estate Planning',
    description: 'Comprehensive wills, trusts, and estate administration. Protect your legacy and ensure your wishes are honored for generations to come.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
    ),
  },
  {
    title: 'Criminal Defense',
    description: 'Vigorous defense of your rights and freedom. Whether facing misdemeanor or felony charges, our attorneys stand with you at every stage.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>
    ),
  },
  {
    title: 'Real Estate Law',
    description: 'Expert guidance on property transactions, zoning issues, and real estate disputes. We protect your investment from contract to closing.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg>
    ),
  },
]

const testimonials = [
  {
    name: 'David Thornton',
    location: 'McKinney, TX',
    text: 'After my auto accident on US-75, Barrett & Associates secured a settlement that covered all my medical expenses and then some. Mr. Barrett personally handled my case and kept me informed at every step. I genuinely felt like a priority, not just a case number.',
    rating: 5,
  },
  {
    name: 'Sandra K. Mitchell',
    location: 'Allen, TX',
    text: 'Going through my divorce was the hardest time of my life, but the family law team at Barrett & Associates made it as smooth as possible. They fought hard for fair custody arrangements and I\'m grateful every day for their dedication to my children\'s wellbeing.',
    rating: 5,
  },
  {
    name: 'Robert & Jean Hawkins',
    location: 'Prosper, TX',
    text: 'We used Barrett & Associates for our estate planning and couldn\'t be more pleased. They took the time to understand our family situation and created a comprehensive trust that gives us real peace of mind. Truly a first-class firm.',
    rating: 5,
  },
]

const pillars = [
  { number: '40+', label: 'Years Combined Experience' },
  { number: '3,200+', label: 'Cases Resolved' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '$75M+', label: 'Recovered for Clients' },
]

export default function Law2Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Back to Home */}
      <Link href="/" className="fixed top-4 left-4 z-50 bg-white/90 backdrop-blur-sm text-gray-700 hover:text-gray-900 px-4 py-2 rounded-full shadow-md text-sm font-medium flex items-center gap-2 transition-colors">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
        Liow Digital
      </Link>

      {/* Sticky Nav */}
      <nav className="sticky top-0 z-40" style={{ backgroundColor: '#0C1B33' }}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="font-libre-baskerville text-xl font-bold text-white tracking-wide">
              Barrett <span style={{ color: '#C9A96E' }}>&</span> Associates
            </h1>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-300 hover:text-white text-sm tracking-wide transition-colors">Practice Areas</a>
              <a href="#trust" className="text-gray-300 hover:text-white text-sm tracking-wide transition-colors">Our Firm</a>
              <a href="#testimonials" className="text-gray-300 hover:text-white text-sm tracking-wide transition-colors">Testimonials</a>
              <a href="#contact" className="text-gray-300 hover:text-white text-sm tracking-wide transition-colors">Contact</a>
            </div>
            <motion.a
              href="tel:4696213300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white px-6 py-2 rounded text-sm font-semibold tracking-wide transition-colors"
              style={{ backgroundColor: '#C9A96E' }}
            >
              (469) 621-3300
            </motion.a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center relative" style={{ backgroundColor: '#0C1B33' }}>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-64 h-64 border border-white rounded-full" />
          <div className="absolute bottom-20 right-10 w-96 h-96 border border-white rounded-full" />
        </div>
        <div className="max-w-6xl mx-auto px-6 py-24 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <div className="w-20 h-0.5 mb-8" style={{ backgroundColor: '#C9A96E' }} />
              <p className="text-sm tracking-[0.3em] uppercase mb-4" style={{ color: '#C9A96E' }}>
                Attorneys at Law — McKinney, Texas
              </p>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-libre-baskerville text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
            >
              A Tradition of
              <br />
              <span style={{ color: '#C9A96E' }}>Justice & Integrity</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-xl text-gray-300 mb-10 leading-relaxed max-w-xl"
            >
              For over four decades, Barrett & Associates has provided distinguished legal counsel
              to individuals and businesses throughout North Texas.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 text-white font-semibold text-lg tracking-wide rounded transition-colors text-center"
                style={{ backgroundColor: '#C9A96E' }}
              >
                Schedule a Consultation
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 border-2 text-white font-semibold text-lg tracking-wide rounded transition-colors text-center"
                style={{ borderColor: '#C9A96E', color: '#C9A96E' }}
              >
                Our Practice Areas
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="w-16 h-0.5 mx-auto mb-6" style={{ backgroundColor: '#C9A96E' }} />
            <h2 className="font-libre-baskerville text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0C1B33' }}>
              Practice Areas
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive legal services backed by decades of courtroom experience and a commitment to excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white p-8 rounded shadow-sm"
                style={{ borderTop: '3px solid #C9A96E' }}
              >
                <div className="mb-4" style={{ color: '#C9A96E' }}>
                  {area.icon}
                </div>
                <h3 className="font-libre-baskerville text-xl font-bold mb-3" style={{ color: '#0C1B33' }}>
                  {area.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / Pillars Section */}
      <section id="trust" className="py-24" style={{ backgroundColor: '#0C1B33' }}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="w-16 h-0.5 mx-auto mb-6" style={{ backgroundColor: '#C9A96E' }} />
            <h2 className="font-libre-baskerville text-4xl md:text-5xl font-bold text-white mb-4">
              Pillars of Our Practice
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Our results speak for themselves. Barrett & Associates has built a legacy of trust
              through unwavering dedication to our clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="text-center"
              >
                <div className="w-px h-16 mx-auto mb-6" style={{ backgroundColor: '#C9A96E' }} />
                <div className="font-libre-baskerville text-4xl md:text-5xl font-bold mb-3" style={{ color: '#C9A96E' }}>
                  {pillar.number}
                </div>
                <p className="text-gray-400 tracking-wide text-sm uppercase">
                  {pillar.label}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20 max-w-3xl mx-auto text-center"
          >
            <p className="text-gray-300 text-lg leading-relaxed italic font-libre-baskerville">
              &ldquo;At Barrett & Associates, we believe that every client deserves the highest caliber
              of legal representation. We approach every case with the same rigor, integrity, and
              personal attention that has defined our firm for over four decades.&rdquo;
            </p>
            <p className="mt-6 text-sm tracking-wide uppercase" style={{ color: '#C9A96E' }}>
              — William J. Barrett, Founding Partner
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="w-16 h-0.5 mx-auto mb-6" style={{ backgroundColor: '#C9A96E' }} />
            <h2 className="font-libre-baskerville text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0C1B33' }}>
              Client Testimonials
            </h2>
            <p className="text-gray-600 text-lg">
              Hear from the individuals and families we&apos;ve had the privilege to represent.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white p-8 rounded shadow-sm"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" style={{ color: '#C9A96E' }} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 text-sm italic" style={{ color: '#0C1B33' }}>
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div>
                  <p className="font-bold text-sm" style={{ color: '#0C1B33' }}>{testimonial.name}</p>
                  <p className="text-gray-500 text-xs">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24" style={{ backgroundColor: '#0C1B33' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-0.5 mx-auto mb-8" style={{ backgroundColor: '#C9A96E' }} />
            <h2 className="font-libre-baskerville text-4xl md:text-5xl font-bold text-white mb-6">
              Your Case Deserves
              <br />
              <span style={{ color: '#C9A96E' }}>Distinguished Counsel</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
              Contact Barrett & Associates today for a confidential consultation.
              Let us put our decades of experience to work for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:4696213300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 text-white font-semibold text-lg rounded tracking-wide transition-colors"
                style={{ backgroundColor: '#C9A96E' }}
              >
                Call (469) 621-3300
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 border-2 font-semibold text-lg rounded tracking-wide transition-colors"
                style={{ borderColor: '#C9A96E', color: '#C9A96E' }}
                onClick={() => alert('Consultation request form would open here.')}
              >
                Request Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#0C1B33' }} className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-10">
            {/* Firm Info */}
            <div className="md:col-span-1">
              <h3 className="font-libre-baskerville text-xl font-bold text-white mb-4">
                Barrett <span style={{ color: '#C9A96E' }}>&</span> Associates
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Providing distinguished legal counsel to North Texas since 1984.
              </p>
            </div>

            {/* Practice Areas */}
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider mb-4" style={{ color: '#C9A96E' }}>
                Practice Areas
              </h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                {practiceAreas.map((area) => (
                  <li key={area.title}>
                    <a href="#services" className="hover:text-white transition-colors">{area.title}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Office Hours */}
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider mb-4" style={{ color: '#C9A96E' }}>
                Office Hours
              </h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Monday - Friday</li>
                <li>8:30 AM - 5:30 PM</li>
                <li className="pt-2">Evening & Weekend</li>
                <li>By Appointment</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider mb-4" style={{ color: '#C9A96E' }}>
                Contact
              </h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>6800 Weiskopf Ave, Suite 200</li>
                <li>McKinney, TX 75070</li>
                <li className="pt-2">
                  <a href="tel:4696213300" className="hover:text-white transition-colors">(469) 621-3300</a>
                </li>
                <li>
                  <a href="mailto:info@barrettlaw.com" className="hover:text-white transition-colors">info@barrettlaw.com</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 text-center">
            <p className="text-gray-500 text-xs">
              &copy; {new Date().getFullYear()} Barrett & Associates. All rights reserved. |
              The information on this website is for general information purposes only and does not constitute legal advice.
            </p>
          </div>
        </div>
      </footer>

      <ChatWidget businessName="Barrett & Associates" businessType="law" themeColor="#C9A96E" />
    </div>
  )
}
