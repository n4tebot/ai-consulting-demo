'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Hero from '@/app/components/templates/Hero'
import Services from '@/app/components/templates/Services'
import Trust from '@/app/components/templates/Trust'
import Testimonials from '@/app/components/templates/Testimonials'
import Contact from '@/app/components/templates/Contact'
import ChatWidget from '@/app/components/ChatWidget'

const medSpaServices = [
  {
    title: 'Botox & Fillers',
    description: 'Smooth wrinkles and restore volume with FDA-approved injectables administered by licensed professionals.',
    icon: '✨',
    price: 'From $12/unit',
    features: ['Botox Cosmetic', 'Juvederm fillers', 'Lip enhancement', 'Consultation included']
  },
  {
    title: 'Laser Treatments',
    description: 'Advanced laser therapies for skin resurfacing, hair removal, and pigmentation correction.',
    icon: '💫',
    price: 'Starting at $150',
    features: ['IPL photofacial', 'Laser hair removal', 'Skin resurfacing', 'Age spot removal']
  },
  {
    title: 'Signature Facials',
    description: 'Customized facial treatments to address your unique skin concerns and enhance your natural glow.',
    icon: '🌸',
    price: 'From $85',
    features: ['HydraFacial MD', 'Chemical peels', 'Microdermabrasion', 'LED light therapy']
  },
  {
    title: 'Body Contouring',
    description: 'Non-invasive body sculpting treatments to reduce stubborn fat and tighten skin.',
    icon: '💪',
    price: 'Package pricing available',
    features: ['CoolSculpting', 'Radiofrequency', 'Body wraps', 'Skin tightening']
  },
  {
    title: 'Wellness Services',
    description: 'Holistic treatments to support your overall health and well-being from the inside out.',
    icon: '🧘‍♀️',
    price: 'Starting at $75',
    features: ['IV therapy', 'Vitamin injections', 'Hormone consultation', 'Weight management']
  },
  {
    title: 'Skincare Products',
    description: 'Professional-grade skincare products to maintain and enhance your treatment results at home.',
    icon: '🧴',
    price: 'Varies by product',
    features: ['Medical-grade products', 'Personalized regimens', 'Professional consultation', 'Ongoing support']
  }
]

const trustFeatures = [
  {
    title: 'Licensed Medical Professionals',
    description: 'All treatments performed by licensed nurses and supervised by board-certified physicians.',
    icon: '👩‍⚕️',
    highlight: true
  },
  {
    title: 'FDA-Approved Treatments',
    description: 'Only the safest, most effective treatments and products approved by the FDA.',
    icon: '🏥',
    highlight: false
  },
  {
    title: 'Personalized Care',
    description: 'Custom treatment plans designed specifically for your skin type and aesthetic goals.',
    icon: '💝',
    highlight: false
  }
]

const testimonials = [
  {
    name: 'Amanda Thompson',
    role: 'Regular client',
    content: 'The staff at Serenity Med Spa is incredible! My Botox results look so natural, and the facials have completely transformed my skin. I feel confident and beautiful.',
    rating: 5,
    location: 'McKinney, TX'
  },
  {
    name: 'Rachel Kim',
    role: 'First-time client',
    content: 'I was nervous about trying injectables, but they made me feel so comfortable. The consultation was thorough and the results exceeded my expectations!',
    rating: 5,
    location: 'Plano, TX'
  },
  {
    name: 'Susan Miller',
    role: 'Skincare client',
    content: 'The HydraFacial is amazing! My skin has never looked better. The team really knows what they\'re doing and the atmosphere is so relaxing and luxurious.',
    rating: 5,
    location: 'Frisco, TX'
  }
]

const contactInfo = {
  phone: '(214) 555-0123',
  email: 'hello@serenitymedspa.com',
  address: '789 Wellness Circle, McKinney, TX 75072',
  hours: {
    weekdays: 'Closed Monday',
    saturday: '9:00 AM - 7:00 PM',
    sunday: '10:00 AM - 5:00 PM'
  },
  socialMedia: {
    facebook: '#',
    instagram: '#'
  }
}

const trustBadges = [
  'Licensed Medical Facility',
  'Board-Certified Physician Oversight',
  'FDA-Approved Treatments Only',
  'Allergan Preferred Provider'
]

const trustStats = [
  { label: 'Years Experience', value: '8+' },
  { label: 'Happy Clients', value: '3,000+' },
  { label: 'Treatments Performed', value: '15,000+' },
  { label: 'Client Satisfaction', value: '98%' }
]

// Before & After Gallery Component
function BeforeAfterGallery() {
  const treatments = [
    { name: 'Botox Results', before: '😔', after: '😊' },
    { name: 'Skin Rejuvenation', before: '🌫️', after: '✨' },
    { name: 'Lip Enhancement', before: '😐', after: '💋' }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Amazing Transformations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            See the incredible results our clients achieve with our professional treatments
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <motion.div
              key={treatment.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg text-center"
            >
              <h3 className="text-xl font-semibold mb-6 text-gray-900">{treatment.name}</h3>
              
              <div className="flex items-center justify-center space-x-8 mb-6">
                <div className="text-center">
                  <div className="text-4xl mb-2">{treatment.before}</div>
                  <p className="text-sm text-gray-600 font-medium">Before</p>
                </div>
                
                <div className="text-2xl text-gray-400">→</div>
                
                <div className="text-center">
                  <div className="text-4xl mb-2">{treatment.after}</div>
                  <p className="text-sm text-gray-600 font-medium">After</p>
                </div>
              </div>

              <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-lg font-medium hover:from-pink-600 hover:to-purple-600 transition-all duration-200">
                View Details
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">*Individual results may vary. Photos shown with patient consent.</p>
          <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-200 shadow-lg">
            Schedule Your Consultation
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default function MedSpaPage() {
  const handleBookConsultation = () => {
    // In a real app, this would open a booking modal or redirect to scheduling
    alert('Consultation booking would open here! Call (214) 555-0123 to schedule your complimentary consultation.')
  }

  return (
    <main className="min-h-screen">
      {/* Custom Hero with Luxury Styling */}
      <section className="relative bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 py-20 md:py-32 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-pink-200/30 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-200/30 rounded-full blur-xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 bg-pink-100 text-pink-800 border border-pink-200"
            >
              ✨ Complimentary Consultations Available
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Enhance Your Natural Beauty
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
            >
              Discover the perfect balance of science and luxury at Serenity Med Spa. Our expert team provides personalized aesthetic treatments in a serene, spa-like environment.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <button
                onClick={handleBookConsultation}
                className="inline-flex items-center px-8 py-4 rounded-xl text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 transform hover:scale-105"
              >
                Book Free Consultation
                <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <Services
        title="Luxury Wellness & Beauty Services"
        subtitle="Personalized treatments designed to enhance your natural beauty and boost your confidence"
        services={medSpaServices}
        columns={3}
      />

      <BeforeAfterGallery />

      <Trust
        title="Why Choose Serenity Med Spa?"
        subtitle="Experience the perfect blend of medical expertise and luxury wellness"
        features={trustFeatures}
        badges={trustBadges}
        stats={trustStats}
      />

      <Testimonials
        title="Client Love Stories"
        subtitle="Hear from our beautiful clients about their transformative experiences"
        testimonials={testimonials}
      />

      <Contact
        businessName="Serenity Med Spa"
        contactInfo={contactInfo}
        showMap={true}
      />

      <ChatWidget
        businessName="Serenity Med Spa"
        businessType="medspa"
      />
    </main>
  )
}