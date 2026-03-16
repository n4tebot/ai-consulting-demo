'use client'

import React from 'react'
import Link from 'next/link'
import ChatWidget from '@/app/components/ChatWidget'
import DemoNav from '@/app/components/DemoNav'
import { motion } from 'framer-motion'

export default function MedSpaPage() {
  const handleBookConsultation = () => {
    alert('Booking your consultation! Call (469) 325-1034 to schedule.')
  }

  return (
    <div className="min-h-screen bg-stone-50 font-light">
      {/* 1. Minimal Nav - Centered logo, hamburger-style nav */}
      <nav className="bg-stone-50 py-6 border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="hidden md:flex items-center space-x-8 text-sm tracking-wide">
              <a href="#treatments" className="text-stone-600 hover:text-stone-900">Treatments</a>
              <a href="#philosophy" className="text-stone-600 hover:text-stone-900">Philosophy</a>
            </div>
            <h1 className="font-source-serif text-2xl text-stone-900 mx-auto md:mx-0">Serenity Med Spa</h1>
            <div className="hidden md:flex items-center space-x-8 text-sm tracking-wide">
              <a href="#provider" className="text-stone-600 hover:text-stone-900">Provider</a>
              <a href="#contact" className="text-stone-600 hover:text-stone-900">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* 2. Full-Screen Hero - Editorial style, centered text only */}
      <section className="min-h-screen bg-stone-50 flex items-center justify-center py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="">
            <h2 className="font-source-serif text-6xl md:text-7xl text-stone-900 mb-8 leading-tight">
              Where Science Meets Beauty
            </h2>
            <div className="w-24 h-px bg-stone-400 mx-auto mb-8"></div>
            <p className="text-xl text-stone-700 mb-12 leading-relaxed max-w-2xl mx-auto">
              Discover the perfect harmony of advanced medical aesthetics and personalized care in the heart of McKinney.
            </p>
            <a
              href="#treatments"
              className="text-stone-900 text-lg tracking-wide border-b border-stone-900 pb-1 hover:border-amber-600 hover:text-amber-600 transition-colors"
            >
              Book Your Consultation
            </a>
          </div>
        </div>
      </section>

      {/* 3. Featured Treatments - 3 columns with pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-16 text-center">
            <div className="">
              <h3 className="font-source-serif text-2xl text-stone-900 mb-4">Botox</h3>
              <div className="w-12 h-px bg-stone-300 mx-auto mb-4"></div>
              <p className="text-stone-600">From $12/unit</p>
            </div>
            <div className="">
              <h3 className="font-source-serif text-2xl text-stone-900 mb-4">Dermal Fillers</h3>
              <div className="w-12 h-px bg-stone-300 mx-auto mb-4"></div>
              <p className="text-stone-600">From $650</p>
            </div>
            <div className="">
              <h3 className="font-source-serif text-2xl text-stone-900 mb-4">Chemical Peels</h3>
              <div className="w-12 h-px bg-stone-300 mx-auto mb-4"></div>
              <p className="text-stone-600">From $150</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Philosophy Section - Editorial paragraph */}
      <section className="py-24 bg-stone-50" id="philosophy">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center ">
            <p className="font-source-serif text-3xl text-stone-700 italic leading-relaxed">
              "At Serenity, we believe beauty is not about changing who you are—it's about revealing the most confident version of yourself. Every treatment is crafted with precision, care, and an unwavering commitment to natural-looking results."
            </p>
          </div>
        </div>
      </section>

      {/* 5. Treatment Menu - LEFT-aligned with categories */}
      <section className="py-20 bg-white" id="treatments">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-source-serif text-4xl text-stone-900 mb-16 text-center tracking-wide">Treatment Menu</h2>
          
          <div className="space-y-16">
            {/* Injectables Category */}
            <div className="">
              <h3 className="text-stone-900 text-sm tracking-[0.2em] mb-6 uppercase">Injectables</h3>
              <div className="w-full h-px bg-stone-200 mb-8"></div>
              <div className="space-y-6">
                {[
                  { name: 'Botox', price: 'from $12/unit' },
                  { name: 'Dermal Fillers', price: 'from $650' },
                  { name: 'Kybella', price: 'from $1,200' }
                ].map((item) => (
                  <div key={item.name} className="flex justify-between items-center">
                    <span className="text-stone-900 text-lg">{item.name}</span>
                    <span className="text-stone-600">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Skin Rejuvenation Category */}
            <div className="">
              <h3 className="text-stone-900 text-sm tracking-[0.2em] mb-6 uppercase">Skin Rejuvenation</h3>
              <div className="w-full h-px bg-stone-200 mb-8"></div>
              <div className="space-y-6">
                {[
                  { name: 'Chemical Peels', price: 'from $150' },
                  { name: 'Microneedling', price: 'from $300' },
                  { name: 'Laser Resurfacing', price: 'from $500' }
                ].map((item) => (
                  <div key={item.name} className="flex justify-between items-center">
                    <span className="text-stone-900 text-lg">{item.name}</span>
                    <span className="text-stone-600">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Body Treatments Category */}
            <div className="">
              <h3 className="text-stone-900 text-sm tracking-[0.2em] mb-6 uppercase">Body Treatments</h3>
              <div className="w-full h-px bg-stone-200 mb-8"></div>
              <div className="space-y-6">
                {[
                  { name: 'CoolSculpting', price: 'from $750' },
                  { name: 'Body Contouring', price: 'from $900' },
                  { name: 'Skin Tightening', price: 'from $400' }
                ].map((item) => (
                  <div key={item.name} className="flex justify-between items-center">
                    <span className="text-stone-900 text-lg">{item.name}</span>
                    <span className="text-stone-600">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Full-Width Quote - Client testimonial */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-24 h-px bg-stone-400 mx-auto mb-8"></div>
          <div className="">
            <p className="font-source-serif text-3xl text-stone-700 italic leading-relaxed mb-8">
              "The results exceeded every expectation. Dr. Chen's artistry and attention to detail is unmatched. I feel like the best version of myself."
            </p>
            <p className="text-stone-600">— Sarah M., McKinney</p>
          </div>
          <div className="w-24 h-px bg-stone-400 mx-auto mt-8"></div>
        </div>
      </section>

      {/* 7. Meet the Provider - Centered photo + bio */}
      <section className="py-20 bg-white" id="provider">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-source-serif text-4xl text-stone-900 mb-16 tracking-wide">Meet Dr. Lisa Chen</h2>
          
          <div className="">
            {/* Circular photo placeholder */}
            <div className="w-48 h-48 bg-gradient-to-br from-amber-100 to-stone-200 rounded-full mx-auto mb-8 flex items-center justify-center">
              <span className="text-4xl text-stone-600">👩‍⚕️</span>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <h3 className="font-source-serif text-2xl text-stone-900 mb-2">Lisa Chen, MD</h3>
              <p className="text-stone-600 mb-6">Board-Certified Dermatologist & Aesthetic Medicine Specialist</p>
              
              <p className="text-stone-700 leading-relaxed">
                Dr. Chen brings over 15 years of experience in dermatology and aesthetic medicine to Serenity Med Spa. 
                Trained at prestigious institutions including Johns Hopkins and UCLA, she specializes in natural-looking 
                results that enhance each patient's unique beauty. Her philosophy centers on subtle enhancements that 
                honor the individual's natural features while addressing their aesthetic goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Contact - Centered, minimal */}
      <section className="py-24 bg-stone-50" id="contact">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-source-serif text-4xl text-stone-900 mb-16 tracking-wide">Visit Us</h2>
          
          <div className="space-y-8 text-stone-700">
            <div className="">
              <p className="text-lg mb-2">123 Serenity Lane</p>
              <p className="text-lg">McKinney, Texas 75070</p>
            </div>
            
            <div className="">
              <p className="text-xl font-medium text-stone-900">(469) 325-1034</p>
              <p className="mt-2">info@serenitymeds.com</p>
            </div>
            
            <div className="">
              <h4 className="font-source-serif text-lg text-stone-900 mb-4">Hours</h4>
              <div className="space-y-2 text-stone-600">
                <p>Tuesday – Saturday: 9:00 AM – 7:00 PM</p>
                <p>Sunday: 10:00 AM – 5:00 PM</p>
                <p>Monday: Closed</p>
              </div>
            </div>
            
            <div className=" pt-8">
              <button
                onClick={handleBookConsultation}
                className="text-stone-900 text-lg tracking-wide border-b border-stone-900 pb-1 hover:border-amber-600 hover:text-amber-600 transition-colors"
              >
                Schedule Your Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Ultra minimal */}
      <footer className="bg-white py-12 border-t border-stone-200">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between text-stone-600 text-sm">
            <p>&copy; 2025 Serenity Med Spa</p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-stone-900 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-stone-900 transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>

      <DemoNav />
      <ChatWidget
        businessName="Serenity Med Spa"
        businessType="medspa"
        themeColor="#C9A87C"
      />
    </div>
  )
}