'use client'

import React from 'react'
import Hero from '@/app/components/templates/Hero'
import Services from '@/app/components/templates/Services'
import Trust from '@/app/components/templates/Trust'
import Testimonials from '@/app/components/templates/Testimonials'
import Contact from '@/app/components/templates/Contact'
import ChatWidget from '@/app/components/ChatWidget'

const hvacServices = [
  {
    title: 'AC Repair',
    description: 'Fast, reliable air conditioning repair service. We diagnose and fix all AC issues quickly to restore your comfort.',
    icon: '❄️',
    price: 'Service calls from $89',
    features: ['Same-day service', 'All brands serviced', 'Emergency repairs', 'Warranty included']
  },
  {
    title: 'Heating Repair',
    description: 'Keep your family warm with professional heating system repair and maintenance services.',
    icon: '🔥',
    price: 'Starting at $95',
    features: ['Furnace repair', 'Heat pump service', 'Ductwork repair', '24/7 emergency calls']
  },
  {
    title: 'System Installation',
    description: 'New HVAC system installation with energy-efficient units that save money on utility bills.',
    icon: '🏠',
    price: 'Free estimates',
    features: ['Energy Star certified', 'Professional installation', 'Manufacturer warranty', 'Financing available']
  },
  {
    title: 'Maintenance Plans',
    description: 'Preventive maintenance to extend system life and prevent costly breakdowns.',
    icon: '🔧',
    price: 'Plans from $120/year',
    features: ['Bi-annual tune-ups', 'Priority scheduling', 'Discount on repairs', 'Filter replacements']
  }
]

const trustFeatures = [
  {
    title: '24/7 Emergency Service',
    description: 'Available around the clock for urgent HVAC repairs when you need us most.',
    icon: '🚨',
    highlight: true
  },
  {
    title: 'Licensed & Insured',
    description: 'Fully licensed HVAC technicians with comprehensive insurance coverage.',
    icon: '🛡️',
    highlight: false
  },
  {
    title: 'Upfront Pricing',
    description: 'No hidden fees. You know the cost before we start any work.',
    icon: '💰',
    highlight: false
  },
  {
    title: 'Family Owned',
    description: 'Local family business serving North Texas for over 20 years.',
    icon: '🏡',
    highlight: false
  },
  {
    title: 'Satisfaction Guaranteed',
    description: 'We stand behind our work with a 100% satisfaction guarantee.',
    icon: '✅',
    highlight: false
  },
  {
    title: 'Fast Response',
    description: 'Average response time under 2 hours for emergency calls.',
    icon: '⚡',
    highlight: false
  }
]

const testimonials = [
  {
    name: 'Jennifer Martinez',
    role: 'Homeowner',
    content: 'Our AC went out on the hottest day of the year! Harris Air responded within an hour and had us cool again by evening. Outstanding service!',
    rating: 5,
    location: 'McKinney, TX'
  },
  {
    name: 'Tom Wilson',
    role: 'Business owner',
    content: 'They installed a new HVAC system in our office building. Professional, on time, and the system runs perfectly. Great value for the price.',
    rating: 5,
    location: 'Plano, TX'
  },
  {
    name: 'Lisa Chen',
    role: 'Residential customer',
    content: 'The maintenance plan has saved us so much money! Regular tune-ups caught a small issue before it became expensive. Highly recommend!',
    rating: 5,
    location: 'Allen, TX'
  }
]

const contactInfo = {
  phone: '(214) 555-0123',
  email: 'service@harrisairservices.com',
  address: '456 HVAC Boulevard, McKinney, TX 75071',
  hours: {
    weekdays: '7:00 AM - 7:00 PM',
    saturday: '8:00 AM - 5:00 PM',
    sunday: 'Emergency calls only',
    emergency: '24/7 Emergency Service Available'
  },
  socialMedia: {
    facebook: '#',
    twitter: '#'
  }
}

const trustBadges = [
  'NATE Certified Technicians',
  'Better Business Bureau A+ Rating',
  'Carrier Factory Authorized Dealer',
  'EPA Certified',
  'Fully Licensed & Insured'
]

const trustStats = [
  { label: 'Years in Business', value: '20+' },
  { label: 'Customers Served', value: '10,000+' },
  { label: 'Response Time', value: '<2 hrs' },
  { label: 'Customer Rating', value: '4.8★' }
]

// Service Area component
function ServiceArea() {
  const cities = [
    'McKinney', 'Plano', 'Allen', 'Frisco', 'Prosper', 'Celina', 
    'Little Elm', 'The Colony', 'Carrollton', 'Richardson'
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Areas</h2>
          <p className="text-xl text-gray-600">Proudly serving all of Collin County and beyond</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {cities.map((city, index) => (
            <div key={city} className="bg-blue-50 rounded-lg p-4 text-center border border-blue-100">
              <div className="text-blue-600 font-semibold">{city}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600">Don't see your city? <span className="text-blue-600 font-medium">Call us anyway!</span> We may still be able to help.</p>
        </div>
      </div>
    </section>
  )
}

export default function HVACPage() {
  const handleEmergencyCall = () => {
    // In a real app, this would immediately call or show emergency contact
    alert('Calling emergency line now: (214) 555-0123')
  }

  return (
    <main className="min-h-screen">
      <Hero
        title="AC Broken? We're Here 24/7!"
        subtitle="Fast, reliable HVAC repair and installation throughout McKinney and North Texas. Family-owned business with over 20 years of trusted service."
        ctaText="Call Now for Emergency Service"
        ctaAction={handleEmergencyCall}
        badge="🚨 24/7 Emergency Service Available"
        urgency={true}
      />

      <Services
        title="Complete HVAC Services"
        subtitle="From emergency repairs to new installations, we keep your home comfortable year-round"
        services={hvacServices}
        columns={2}
      />

      <Trust
        title="Why Choose Harris Air Services?"
        subtitle="Licensed, insured, and available when you need us most"
        features={trustFeatures}
        badges={trustBadges}
        stats={trustStats}
      />

      <ServiceArea />

      <Testimonials
        title="Trusted by Your Neighbors"
        subtitle="Real reviews from real customers throughout North Texas"
        testimonials={testimonials}
      />

      <Contact
        businessName="Harris Air Services"
        contactInfo={contactInfo}
        showMap={true}
        emergencyService={true}
      />

      <ChatWidget
        businessName="Harris Air Services"
        businessType="hvac"
      />
    </main>
  )
}