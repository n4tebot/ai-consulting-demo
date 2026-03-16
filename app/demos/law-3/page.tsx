'use client'

import React from 'react'
import Link from 'next/link'
import ChatWidget from '@/app/components/ChatWidget'
import { motion } from 'framer-motion'

const practiceAreas = [
  {
    title: 'Startup Law',
    description: 'From entity formation to Series A funding, we guide founders through every legal milestone. We understand the pace of innovation and structure agreements that protect your vision.',
  },
  {
    title: 'Employment Law',
    description: 'Comprehensive employment counsel for growing businesses. We draft policies, resolve disputes, and ensure compliance so you can focus on building your team.',
  },
  {
    title: 'Intellectual Property',
    description: 'Protect your innovations, brand, and creative works. Our IP attorneys handle trademarks, patents, copyrights, and trade secret strategies tailored to your business.',
  },
  {
    title: 'Contract Disputes',
    description: 'When agreements break down, we step in. Our litigation team resolves contract disputes efficiently through negotiation, mediation, or courtroom advocacy.',
  },
  {
    title: 'Business Formation',
    description: 'Choose the right structure for your venture. We handle LLCs, corporations, partnerships, and joint ventures with an eye toward tax efficiency and liability protection.',
  },
  {
    title: 'Mergers & Acquisitions',
    description: 'Strategic legal guidance for buying, selling, or merging businesses. We manage due diligence, negotiations, and closing to maximize value and minimize risk.',
  },
]

const testimonials = [
  {
    name: 'Priya Ramanathan',
    role: 'CEO, NovaTech Solutions',
    text: 'Greenfield Law Group has been instrumental in our growth from a two-person startup to a 50-employee company. They handled our Series A documents, employee agreements, and IP portfolio. Having a legal team that truly understands the tech landscape in North Texas is invaluable.',
  },
  {
    name: 'Marcus Delgado',
    role: 'Partner, Delgado Ventures',
    text: 'When we needed counsel for a complex acquisition in the Frisco corridor, Greenfield delivered. Their M&A team was thorough, responsive, and strategic. They identified issues in due diligence that saved us significant exposure. I recommend them without hesitation.',
  },
  {
    name: 'Lauren Chen-Watkins',
    role: 'Founder, Bloomfield Interiors',
    text: 'As a small business owner, I was nervous about the legal side of things. The Greenfield team made everything approachable and clear. They helped me with my LLC formation, contractor agreements, and trademark registration. Fair pricing and genuinely great people.',
  },
]

const stats = [
  { value: '500+', label: 'Businesses Served' },
  { value: '12', label: 'Attorneys on Staff' },
  { value: '98%', label: 'Client Retention Rate' },
  { value: '15+', label: 'Years of Experience' },
]

export default function Law3Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Back to Home */}
      <Link href="/" className="fixed top-4 left-4 z-50 bg-white/90 backdrop-blur-sm text-gray-700 hover:text-gray-900 px-4 py-2 rounded-full shadow-md text-sm font-medium flex items-center gap-2 transition-colors">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
        Liow Digital
      </Link>

      {/* Sticky Nav */}
      <nav className="sticky top-0 z-40 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="font-space-grotesk text-xl font-bold" style={{ color: '#1B4332' }}>
              Greenfield <span className="font-light">Law Group</span>
            </h1>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors">Services</a>
              <a href="#about" className="text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors">About</a>
              <a href="#testimonials" className="text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors">Testimonials</a>
              <a href="#contact" className="text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors">Contact</a>
            </div>
            <motion.a
              href="tel:9725554700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white px-6 py-2 rounded-full text-sm font-medium transition-colors"
              style={{ backgroundColor: '#1B4332' }}
            >
              (972) 555-4700
            </motion.a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center bg-white relative overflow-hidden">
        {/* Geometric background accents */}
        <div className="absolute top-0 right-0 w-1/2 h-full" style={{ backgroundColor: '#F0FDF4' }} />
        <div className="absolute top-40 right-20 w-72 h-72 border-2 rounded-full opacity-20" style={{ borderColor: '#1B4332' }} />
        <div className="absolute bottom-20 right-40 w-48 h-48 border-2 rounded-full opacity-10" style={{ borderColor: '#1B4332' }} />

        <div className="max-w-6xl mx-auto px-6 py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-sm font-medium tracking-widest uppercase mb-6"
                style={{ color: '#1B4332' }}
              >
                Modern Legal Solutions
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="font-space-grotesk text-5xl md:text-6xl font-bold leading-tight mb-8"
                style={{ color: '#111827' }}
              >
                Legal counsel
                <br />
                built for
                <br />
                <span style={{ color: '#1B4332' }}>modern business.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-gray-500 text-lg mb-10 leading-relaxed max-w-md"
              >
                Greenfield Law Group partners with startups, entrepreneurs, and established businesses across North Texas to deliver clear, strategic legal guidance.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 text-white font-medium rounded-full text-center transition-colors"
                  style={{ backgroundColor: '#1B4332' }}
                >
                  Book a Consultation
                </motion.a>
                <motion.a
                  href="#services"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 font-medium rounded-full text-center transition-colors"
                  style={{ borderColor: '#1B4332', color: '#1B4332' }}
                >
                  Explore Services
                </motion.a>
              </motion.div>
            </div>

            {/* Right side visual element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden md:flex flex-col items-center justify-center"
            >
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 rounded-2xl" style={{ backgroundColor: '#1B4332' }} />
                <div className="absolute inset-4 rounded-2xl" style={{ backgroundColor: '#F0FDF4' }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-16 h-16 mx-auto mb-4" style={{ color: '#1B4332' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                    <p className="font-space-grotesk font-bold text-2xl" style={{ color: '#1B4332' }}>Est. 2011</p>
                    <p className="text-gray-500 text-sm mt-1">Frisco, Texas</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24" style={{ backgroundColor: '#F0FDF4' }}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="text-sm font-medium tracking-widest uppercase mb-3" style={{ color: '#1B4332' }}>
              What We Do
            </p>
            <h2 className="font-space-grotesk text-4xl md:text-5xl font-bold" style={{ color: '#111827' }}>
              Practice Areas
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white p-8 rounded-lg"
                style={{ borderLeft: '3px solid #1B4332' }}
              >
                <h3 className="font-space-grotesk text-lg font-bold mb-3" style={{ color: '#111827' }}>
                  {area.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / Stats Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-medium tracking-widest uppercase mb-3" style={{ color: '#1B4332' }}>
                About Our Firm
              </p>
              <h2 className="font-space-grotesk text-4xl font-bold mb-6" style={{ color: '#111827' }}>
                Legal expertise that scales with your business.
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Greenfield Law Group was founded on a simple idea: businesses deserve legal counsel that
                speaks their language. We combine deep legal expertise with a practical, business-first
                approach that helps clients make confident decisions.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Based in Frisco and serving clients throughout the Dallas-Fort Worth metroplex, our
                team of twelve attorneys brings diverse experience spanning corporate law, litigation,
                intellectual property, and employment matters.
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-3 text-white font-medium rounded-full transition-colors"
                style={{ backgroundColor: '#1B4332' }}
              >
                Meet Our Team
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="p-6 rounded-lg"
                    style={{ backgroundColor: '#F0FDF4' }}
                  >
                    <div className="font-space-grotesk text-3xl font-bold mb-1" style={{ color: '#1B4332' }}>
                      {stat.value}
                    </div>
                    <p className="text-gray-500 text-sm">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24" style={{ backgroundColor: '#F0FDF4' }}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="text-sm font-medium tracking-widest uppercase mb-3" style={{ color: '#1B4332' }}>
              Client Stories
            </p>
            <h2 className="font-space-grotesk text-4xl md:text-5xl font-bold" style={{ color: '#111827' }}>
              What our clients say
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white p-8 rounded-lg"
              >
                <div className="text-5xl font-bold leading-none mb-4" style={{ color: '#1B4332' }}>
                  &ldquo;
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                  {testimonial.text}
                </p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-bold text-sm" style={{ color: '#111827' }}>{testimonial.name}</p>
                  <p className="text-gray-400 text-xs">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium tracking-widest uppercase mb-4" style={{ color: '#1B4332' }}>
              Get Started
            </p>
            <h2 className="font-space-grotesk text-4xl md:text-5xl font-bold mb-6" style={{ color: '#111827' }}>
              Ready to move forward?
            </h2>
            <p className="text-gray-500 text-lg mb-10 max-w-xl mx-auto">
              Schedule a consultation with Greenfield Law Group. We offer both in-person and
              virtual meetings to fit your schedule.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:9725554700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 text-white font-medium text-lg rounded-full transition-colors"
                style={{ backgroundColor: '#1B4332' }}
              >
                Call (972) 555-4700
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 border-2 font-medium text-lg rounded-full transition-colors"
                style={{ borderColor: '#1B4332', color: '#1B4332' }}
                onClick={() => alert('Virtual consultation booking would open here.')}
              >
                Book Virtual Meeting
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#1B4332' }}>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-10">
            {/* Firm Info */}
            <div className="md:col-span-1">
              <h3 className="font-space-grotesk text-xl font-bold text-white mb-4">
                Greenfield <span className="font-light">Law Group</span>
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Modern legal counsel for forward-thinking businesses in the Dallas-Fort Worth metroplex.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-medium text-sm uppercase tracking-wider text-white mb-4">
                Services
              </h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                {practiceAreas.map((area) => (
                  <li key={area.title}>
                    <a href="#services" className="hover:text-white transition-colors">{area.title}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h4 className="font-medium text-sm uppercase tracking-wider text-white mb-4">
                Hours
              </h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>Monday - Friday</li>
                <li>9:00 AM - 6:00 PM</li>
                <li className="pt-2">Virtual Consultations</li>
                <li>Available by Request</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-medium text-sm uppercase tracking-wider text-white mb-4">
                Contact
              </h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>2700 Dallas Pkwy, Suite 150</li>
                <li>Frisco, TX 75034</li>
                <li className="pt-2">
                  <a href="tel:9725554700" className="hover:text-white transition-colors">(972) 555-4700</a>
                </li>
                <li>
                  <a href="mailto:hello@greenfieldlaw.com" className="hover:text-white transition-colors">hello@greenfieldlaw.com</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-xs">
              &copy; {new Date().getFullYear()} Greenfield Law Group. All rights reserved. |
              This website does not constitute legal advice. Past results do not guarantee future outcomes.
            </p>
          </div>
        </div>
      </footer>

      <ChatWidget businessName="Greenfield Law Group" businessType="law" themeColor="#1B4332" />
    </div>
  )
}
