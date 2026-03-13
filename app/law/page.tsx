'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Hero from '@/app/components/templates/Hero'
import Services from '@/app/components/templates/Services'
import Trust from '@/app/components/templates/Trust'
import Testimonials from '@/app/components/templates/Testimonials'
import Contact from '@/app/components/templates/Contact'
import ChatWidget from '@/app/components/ChatWidget'

const practiceAreas = [
  {
    title: 'Personal Injury',
    description: 'Aggressive representation for car accidents, slip & fall, medical malpractice, and wrongful death cases.',
    icon: '⚖️',
    price: 'No fee unless we win',
    features: ['Free consultation', 'No upfront costs', 'Maximum compensation', '24/7 availability']
  },
  {
    title: 'Family Law',
    description: 'Compassionate guidance through divorce, child custody, adoption, and other family legal matters.',
    icon: '👨‍👩‍👧‍👦',
    price: 'Competitive rates',
    features: ['Divorce proceedings', 'Child custody', 'Adoption services', 'Mediation available']
  },
  {
    title: 'Criminal Defense',
    description: 'Experienced criminal defense for DWI, drug charges, assault, theft, and other criminal matters.',
    icon: '🛡️',
    price: 'Payment plans available',
    features: ['24/7 emergency calls', 'Plea negotiations', 'Trial representation', 'Appeals process']
  },
  {
    title: 'Business Law',
    description: 'Comprehensive legal services for businesses including contracts, formation, and compliance.',
    icon: '🏢',
    price: 'Hourly & flat fee options',
    features: ['Business formation', 'Contract drafting', 'Employment law', 'Intellectual property']
  },
  {
    title: 'Estate Planning',
    description: 'Protect your family\'s future with wills, trusts, probate, and comprehensive estate planning.',
    icon: '📋',
    price: 'Packages starting at $500',
    features: ['Wills & trusts', 'Probate administration', 'Power of attorney', 'Estate tax planning']
  },
  {
    title: 'Real Estate Law',
    description: 'Full-service real estate legal support for purchases, sales, disputes, and transactions.',
    icon: '🏠',
    price: 'Flat fee closings',
    features: ['Purchase agreements', 'Title disputes', 'Commercial deals', 'Property litigation']
  }
]

const trustFeatures = [
  {
    title: 'Experienced Attorneys',
    description: 'Board-certified lawyers with decades of combined experience and proven track records.',
    icon: '🎓',
    highlight: true
  },
  {
    title: 'Personalized Service',
    description: 'Direct access to your attorney, not just paralegals. We treat every case with personal attention.',
    icon: '🤝',
    highlight: false
  },
  {
    title: 'Proven Results',
    description: 'Millions recovered for clients and thousands of successful cases across all practice areas.',
    icon: '🏆',
    highlight: false
  }
]

const testimonials = [
  {
    name: 'Michael Johnson',
    role: 'Personal Injury Client',
    content: 'After my car accident, Stone & Associates fought hard for me. They secured a settlement that exceeded my expectations and handled everything professionally.',
    rating: 5,
    location: 'McKinney, TX'
  },
  {
    name: 'Sarah Williams',
    role: 'Family Law Client',
    content: 'Going through divorce was difficult, but Mr. Stone made the process as smooth as possible. He protected my interests and my children. Highly recommended.',
    rating: 5,
    location: 'Plano, TX'
  },
  {
    name: 'David Chen',
    role: 'Business Client',
    content: 'They helped us set up our LLC and draft all our contracts. Professional, knowledgeable, and always available when we need them. Great business partners.',
    rating: 5,
    location: 'Frisco, TX'
  }
]

const contactInfo = {
  phone: '(214) 555-0123',
  email: 'contact@stoneassociateslaw.com',
  address: '101 Justice Plaza, McKinney, TX 75069',
  hours: {
    weekdays: '8:00 AM - 6:00 PM',
    saturday: '9:00 AM - 2:00 PM (by appointment)',
    sunday: 'Emergency calls only',
    emergency: '24/7 Emergency Criminal Defense Line'
  },
  socialMedia: {
    facebook: '#',
    twitter: '#'
  }
}

const trustBadges = [
  'Texas State Bar Certified',
  'AV Preeminent Rated (Martindale)',
  'Better Business Bureau A+ Rating',
  'Super Lawyers Recognition',
  'Board Certified Specialists'
]

const trustStats = [
  { label: 'Years Experience', value: '25+' },
  { label: 'Cases Won', value: '5,000+' },
  { label: 'Recovered for Clients', value: '$50M+' },
  { label: 'Client Rating', value: '4.9★' }
]

// Attorney Profiles Component
function AttorneyProfiles() {
  const attorneys = [
    {
      name: 'Robert Stone',
      title: 'Managing Partner',
      specialties: ['Personal Injury', 'Criminal Defense'],
      experience: '25+ years',
      education: 'UT Law School, J.D.',
      photo: '👨‍💼'
    },
    {
      name: 'Jennifer Martinez',
      title: 'Partner',
      specialties: ['Family Law', 'Estate Planning'],
      experience: '15+ years',
      education: 'SMU Law School, J.D.',
      photo: '👩‍💼'
    },
    {
      name: 'Michael Thompson',
      title: 'Associate',
      specialties: ['Business Law', 'Real Estate'],
      experience: '8+ years',
      education: 'Baylor Law School, J.D.',
      photo: '👨‍⚖️'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Meet Our Legal Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Experienced attorneys dedicated to protecting your rights and achieving the best possible outcome for your case
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {attorneys.map((attorney, index) => (
            <motion.div
              key={attorney.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg text-center"
            >
              <div className="text-6xl mb-6">{attorney.photo}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{attorney.name}</h3>
              <p className="text-blue-600 font-semibold mb-4">{attorney.title}</p>
              
              <div className="text-left space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Specialties:</h4>
                  <p className="text-gray-600">{attorney.specialties.join(', ')}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Experience:</h4>
                  <p className="text-gray-600">{attorney.experience}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Education:</h4>
                  <p className="text-gray-600">{attorney.education}</p>
                </div>
              </div>

              <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-xl font-medium transition-colors">
                Contact {attorney.name.split(' ')[0]}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Case Results Component
function CaseResults() {
  const results = [
    { type: 'Car Accident Settlement', amount: '$2.3M', description: 'Severe injury case with long-term care needs' },
    { type: 'Medical Malpractice', amount: '$1.8M', description: 'Surgical error resulting in permanent disability' },
    { type: 'Wrongful Death', amount: '$1.5M', description: 'Construction accident wrongful death case' },
    { type: 'Business Dispute', amount: '$800K', description: 'Contract breach and damages recovery' }
  ]

  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Proven Results
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Recent successful cases and recoveries for our clients
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((result, index) => (
            <motion.div
              key={result.type}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-blue-800 rounded-xl p-6 text-center"
            >
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">{result.amount}</h3>
              <h4 className="font-semibold mb-3">{result.type}</h4>
              <p className="text-sm text-blue-200">{result.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-blue-200 mb-4">*Past results do not guarantee future outcomes.</p>
          <button className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 px-8 py-3 rounded-xl font-bold transition-colors">
            Free Case Evaluation
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default function LawPage() {
  const handleFreeConsultation = () => {
    // In a real app, this would open a booking modal or redirect to scheduling
    alert('Free consultation booking would open here! Call (214) 555-0123 for your free case evaluation.')
  }

  return (
    <main className="min-h-screen">
      {/* Custom Hero with Professional Styling */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 py-20 md:py-32 overflow-hidden text-white">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-600/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-indigo-600/20 rounded-full blur-xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 bg-yellow-400 text-blue-900"
            >
              ⚖️ Free Consultation Available
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Protecting Your Rights,
              <br />
              <span className="text-yellow-400">Fighting for Justice</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed"
            >
              Experienced legal representation across Texas. From personal injury to family law, we fight tirelessly to achieve the best outcome for your case.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button
                onClick={handleFreeConsultation}
                className="inline-flex items-center px-8 py-4 rounded-xl text-lg font-semibold bg-yellow-400 text-blue-900 shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-yellow-300 transform hover:scale-105"
              >
                Get Free Consultation
                <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="inline-flex items-center px-8 py-4 rounded-xl text-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-blue-900 transition-all duration-200">
                Call (214) 555-0123
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <Services
        title="Practice Areas"
        subtitle="Comprehensive legal services across multiple areas of law with experienced representation"
        services={practiceAreas}
        columns={3}
      />

      <AttorneyProfiles />

      <CaseResults />

      <Trust
        title="Why Choose Stone & Associates?"
        subtitle="Trusted legal representation with a proven track record of success"
        features={trustFeatures}
        badges={trustBadges}
        stats={trustStats}
      />

      <Testimonials
        title="Client Success Stories"
        subtitle="Real results and testimonials from clients we've helped achieve justice"
        testimonials={testimonials}
      />

      <Contact
        businessName="Stone & Associates Law Firm"
        contactInfo={contactInfo}
        showMap={true}
        emergencyService={false}
      />

      <ChatWidget
        businessName="Stone & Associates"
        businessType="law"
      />
    </main>
  )
}