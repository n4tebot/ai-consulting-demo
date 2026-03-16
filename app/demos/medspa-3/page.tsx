'use client'

import React from 'react'
import Link from 'next/link'
import ChatWidget from '@/app/components/ChatWidget'
import DemoNav from '@/app/components/DemoNav'
import { motion } from 'framer-motion'

export default function MedSpa3Page() {
  const handleBookConsultation = () => {
    alert('Book your appointment! Call (972) 555-9200 to schedule.')
  }

  const services = [
    {
      name: 'Facial Treatments',
      description: 'Customized facials and skin therapies for a healthy, radiant glow',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      name: 'Injectables',
      description: 'Expert Botox and filler treatments for naturally youthful results',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 2h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 8.172V3L8 2z" />
        </svg>
      ),
    },
    {
      name: 'Laser Hair Removal',
      description: 'Advanced laser technology for smooth, long-lasting hair reduction',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      name: 'Skin Rejuvenation',
      description: 'Restore your skin&apos;s natural vitality with our renewal treatments',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
    {
      name: 'Wellness IV Therapy',
      description: 'Vitamin-rich IV infusions to boost energy, immunity, and radiance',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      name: 'Body Sculpting',
      description: 'Non-invasive body contouring for a toned, confident appearance',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ]

  const testimonials = [
    {
      quote: 'The team at Glow made me feel so comfortable from the very first visit. My skin has completely transformed after their facial treatment series — I get compliments every single day!',
      name: 'Jessica Martinez',
      treatment: 'Facial Treatments',
    },
    {
      quote: 'I have been going to Glow for injectables for over a year now, and I would never trust anyone else. The results are always so natural, and the staff genuinely cares about how you feel.',
      name: 'Amanda Richardson',
      treatment: 'Injectables',
    },
    {
      quote: 'Their wellness IV therapy was exactly what I needed. I walked out feeling rejuvenated and energized. The whole spa has such a warm, welcoming energy — it is my happy place!',
      name: 'Priya Kapoor',
      treatment: 'Wellness IV Therapy',
    },
  ]

  return (
    <div className="min-h-screen bg-[#FDF2F8] font-outfit">

      {/* Sticky Nav */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="font-outfit text-xl md:text-2xl font-semibold text-[#374151]"
            >
              Glow <span className="text-[#E11D48]">Med Spa</span> & Wellness
            </motion.h1>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-sm text-[#374151] hover:text-[#E11D48] transition-colors font-medium">
                Services
              </a>
              <a href="#about" className="text-sm text-[#374151] hover:text-[#E11D48] transition-colors font-medium">
                About
              </a>
              <a href="#reviews" className="text-sm text-[#374151] hover:text-[#E11D48] transition-colors font-medium">
                Reviews
              </a>
              <a href="#contact" className="text-sm text-[#374151] hover:text-[#E11D48] transition-colors font-medium">
                Contact
              </a>
            </div>
            <motion.a
              href="tel:9725559200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#E11D48] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#BE123C] transition-colors"
            >
              (972) 555-9200
            </motion.a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-[#FDF2F8]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-white text-[#E11D48] text-sm font-semibold px-4 py-2 rounded-full mb-8"
            >
              Now Accepting New Clients in McKinney
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-5xl md:text-7xl font-bold text-[#374151] mb-6 leading-tight"
            >
              Your Journey to
              <br />
              <span className="text-[#E11D48]">Radiant Confidence</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-[#374151]/70 mb-10 leading-relaxed max-w-2xl mx-auto"
            >
              Experience personalized med spa treatments in a warm, welcoming environment.
              We are here to help you look and feel your absolute best.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.button
                onClick={handleBookConsultation}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#E11D48] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#BE123C] transition-colors w-full sm:w-auto"
              >
                Book Free Consultation
              </motion.button>
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#374151] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#374151] hover:text-white transition-colors w-full sm:w-auto text-center"
              >
                View Services
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-[#FDF2F8]" id="services">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-[#E11D48] font-semibold text-sm">What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#374151] mt-2">
              Our Services
            </h2>
            <p className="text-[#374151]/60 mt-4 max-w-xl mx-auto text-lg">
              From skin care to body wellness, we have treatments designed to help you glow inside and out.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-[#FDF2F8] rounded-xl flex items-center justify-center text-[#E11D48] mb-5">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#374151] mb-3">{service.name}</h3>
                <p className="text-[#374151]/60 leading-relaxed">{service.description}</p>
                <motion.button
                  onClick={handleBookConsultation}
                  whileHover={{ x: 4 }}
                  className="mt-5 text-[#E11D48] font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / About Section */}
      <section className="py-24 bg-white" id="about">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#E11D48] font-semibold text-sm">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#374151] mt-2 mb-6">
                Your Wellness Is Our Passion
              </h2>
              <p className="text-[#374151]/70 leading-relaxed mb-6 text-lg">
                At Glow Med Spa & Wellness, we combine the latest in aesthetic medicine with a genuine
                commitment to your comfort and well-being. Our experienced team takes the time to understand
                your unique goals and craft a personalized treatment plan just for you.
              </p>
              <p className="text-[#374151]/70 leading-relaxed mb-8 text-lg">
                We believe that everyone deserves to feel confident in their own skin. That is why we have
                created a space that feels less like a clinic and more like a retreat — a place where you can
                relax, recharge, and leave feeling your best.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="bg-[#FDF2F8] rounded-xl p-4 text-center"
                >
                  <p className="text-3xl font-bold text-[#E11D48]">10+</p>
                  <p className="text-[#374151]/60 text-sm mt-1">Years Open</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="bg-[#FDF2F8] rounded-xl p-4 text-center"
                >
                  <p className="text-3xl font-bold text-[#E11D48]">4.9</p>
                  <p className="text-[#374151]/60 text-sm mt-1">Star Rating</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="bg-[#FDF2F8] rounded-xl p-4 text-center"
                >
                  <p className="text-3xl font-bold text-[#E11D48]">3K+</p>
                  <p className="text-[#374151]/60 text-sm mt-1">Happy Clients</p>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {[
                { title: 'Personalized Care', text: 'Every treatment plan is tailored to your unique skin type, goals, and lifestyle.' },
                { title: 'Licensed Professionals', text: 'Our team includes board-certified practitioners with years of specialized training.' },
                { title: 'Warm & Welcoming', text: 'Step into a spa environment designed for comfort, relaxation, and peace of mind.' },
                { title: 'Proven Results', text: 'We use only FDA-approved treatments and the latest proven technologies.' },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="bg-[#FDF2F8] rounded-2xl p-6 flex gap-4 items-start"
                >
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-[#E11D48]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#374151] text-lg">{item.title}</h4>
                    <p className="text-[#374151]/60 mt-1">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#FDF2F8]" id="reviews">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-[#E11D48] font-semibold text-sm">Client Love</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#374151] mt-2">
              What Our Clients Say
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-8 shadow-sm"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#E11D48]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#374151]/80 leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="border-t border-[#FDF2F8] pt-4">
                  <p className="font-bold text-[#374151]">{testimonial.name}</p>
                  <p className="text-[#E11D48] text-sm font-medium">{testimonial.treatment}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white" id="contact">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[#E11D48] font-semibold text-sm">Ready to Glow?</span>
            <h2 className="text-4xl md:text-6xl font-bold text-[#374151] mt-2 mb-6">
              Start Your Glow-Up Today
            </h2>
            <p className="text-[#374151]/70 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Book your complimentary consultation and let our team create a customized plan to help you
              reach your beauty and wellness goals. Your best self is just an appointment away.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <motion.button
                onClick={handleBookConsultation}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#E11D48] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#BE123C] transition-colors w-full sm:w-auto"
              >
                Book Free Consultation
              </motion.button>
              <motion.a
                href="tel:9725559200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#374151] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#1F2937] transition-colors w-full sm:w-auto text-center"
              >
                Call (972) 555-9200
              </motion.a>
            </div>
            <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-[#FDF2F8] rounded-xl p-5 text-center">
                <svg className="w-6 h-6 text-[#E11D48] mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-[#374151] font-semibold text-sm">4100 Eldorado Pkwy</p>
                <p className="text-[#374151]/60 text-sm">McKinney, TX 75070</p>
              </div>
              <div className="bg-[#FDF2F8] rounded-xl p-5 text-center">
                <svg className="w-6 h-6 text-[#E11D48] mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-[#374151] font-semibold text-sm">Mon-Fri 9am-7pm</p>
                <p className="text-[#374151]/60 text-sm">Sat 9am-5pm</p>
              </div>
              <div className="bg-[#FDF2F8] rounded-xl p-5 text-center">
                <svg className="w-6 h-6 text-[#E11D48] mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p className="text-[#374151] font-semibold text-sm">(972) 555-9200</p>
                <p className="text-[#374151]/60 text-sm">Call or Text</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#374151] text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">
                Glow <span className="text-[#E11D48]">Med Spa</span> & Wellness
              </h3>
              <p className="text-white/60 leading-relaxed max-w-sm">
                McKinney&apos;s trusted destination for personalized aesthetic treatments and wellness services.
                Helping you look and feel your most confident.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white/90 mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#services" className="block text-white/60 hover:text-[#E11D48] transition-colors text-sm">Services</a>
                <a href="#about" className="block text-white/60 hover:text-[#E11D48] transition-colors text-sm">About Us</a>
                <a href="#reviews" className="block text-white/60 hover:text-[#E11D48] transition-colors text-sm">Reviews</a>
                <a href="#contact" className="block text-white/60 hover:text-[#E11D48] transition-colors text-sm">Contact</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-white/90 mb-4">Contact Info</h4>
              <div className="space-y-2 text-white/60 text-sm">
                <p>4100 Eldorado Pkwy</p>
                <p>McKinney, TX 75070</p>
                <p className="mt-3">
                  <a href="tel:9725559200" className="hover:text-[#E11D48] transition-colors">(972) 555-9200</a>
                </p>
                <p>
                  <a href="mailto:hello@glowmedspa.com" className="hover:text-[#E11D48] transition-colors">hello@glowmedspa.com</a>
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-white/40 text-sm">
            <p>&copy; 2026 Glow Med Spa & Wellness. All rights reserved.</p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white/70 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white/70 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      <DemoNav />
      <ChatWidget
        businessName="Glow Med Spa & Wellness"
        businessType="medspa"
        themeColor="#E11D48"
      />
    </div>
  )
}