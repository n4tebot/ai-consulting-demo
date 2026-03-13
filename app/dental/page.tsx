'use client'

import React from 'react'
import Hero from '@/app/components/templates/Hero'
import Services from '@/app/components/templates/Services'
import Trust from '@/app/components/templates/Trust'
import Testimonials from '@/app/components/templates/Testimonials'
import Contact from '@/app/components/templates/Contact'
import ChatWidget from '@/app/components/ChatWidget'

const dentalServices = [
  {
    title: 'General Cleanings',
    description: 'Professional dental cleanings and preventive care to keep your smile healthy and bright.',
    icon: '🦷',
    price: 'From $120',
    features: ['Digital X-rays', 'Fluoride treatment', 'Oral health exam', 'Plaque removal']
  },
  {
    title: 'Cosmetic Dentistry',
    description: 'Transform your smile with professional whitening, veneers, and cosmetic procedures.',
    icon: '✨',
    price: 'Starting at $300',
    features: ['Teeth whitening', 'Porcelain veneers', 'Smile makeover', 'Bonding & contouring']
  },
  {
    title: 'Dental Implants',
    description: 'Permanent tooth replacement solutions that look and feel like natural teeth.',
    icon: '🔧',
    price: 'From $2,500',
    features: ['Titanium implants', 'Crown placement', 'Bone grafting', 'Full mouth restoration']
  },
  {
    title: 'Emergency Care',
    description: 'Same-day emergency appointments for dental pain, broken teeth, and urgent issues.',
    icon: '🚨',
    price: 'Call for pricing',
    features: ['Same-day appointments', 'Pain relief', '24/7 emergency line', 'Urgent repairs']
  },
  {
    title: 'Family Dentistry',
    description: 'Comprehensive dental care for patients of all ages, from children to seniors.',
    icon: '👨‍👩‍👧‍👦',
    price: 'Insurance accepted',
    features: ['Pediatric care', 'Senior dentistry', 'Preventive education', 'Family discounts']
  },
  {
    title: 'Orthodontics',
    description: 'Straighten your teeth with traditional braces or modern Invisalign clear aligners.',
    icon: '🦷',
    price: 'From $3,500',
    features: ['Traditional braces', 'Invisalign', 'Retainers', 'Progress monitoring']
  }
]

const trustFeatures = [
  {
    title: 'Licensed & Certified',
    description: 'Board-certified dentists with advanced training and continuous education.',
    icon: '🏆',
    highlight: true
  },
  {
    title: 'Modern Technology',
    description: 'State-of-the-art equipment including digital X-rays and 3D imaging.',
    icon: '💻',
    highlight: false
  },
  {
    title: 'Gentle Care',
    description: 'Comfortable, pain-free procedures with sedation options available.',
    icon: '💙',
    highlight: false
  }
]

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Patient since 2019',
    content: 'Dr. Smith and his team made my dental implant procedure completely painless. The results look amazing and I can eat all my favorite foods again!',
    rating: 5,
    location: 'McKinney, TX'
  },
  {
    name: 'Mike Rodriguez',
    role: 'Family patient',
    content: 'We\'ve been bringing our whole family here for cleanings. The staff is incredibly patient with our kids and always explains everything clearly.',
    rating: 5,
    location: 'Plano, TX'
  },
  {
    name: 'Emma Davis',
    role: 'Cosmetic patient',
    content: 'My teeth whitening results exceeded my expectations! The process was quick and now I smile with confidence. Highly recommend Valley Creek Dental.',
    rating: 5,
    location: 'Frisco, TX'
  }
]

const contactInfo = {
  phone: '(214) 555-0123',
  email: 'info@valleycreekdental.com',
  address: '123 Dental Way, McKinney, TX 75070',
  hours: {
    weekdays: '8:00 AM - 6:00 PM',
    saturday: '9:00 AM - 3:00 PM',
    sunday: 'Closed'
  },
  socialMedia: {
    facebook: '#',
    instagram: '#'
  }
}

const trustBadges = [
  'American Dental Association Member',
  'Texas Dental Association Certified',
  'Most Insurance Plans Accepted',
  'Financing Options Available'
]

const trustStats = [
  { label: 'Years Experience', value: '15+' },
  { label: 'Happy Patients', value: '5,000+' },
  { label: 'Procedures Performed', value: '20,000+' },
  { label: 'Google Rating', value: '4.9★' }
]

export default function DentalPage() {
  const handleBookAppointment = () => {
    // In a real app, this would open a booking modal or redirect to scheduling
    alert('Booking system would open here! Call (214) 555-0123 to schedule.')
  }

  return (
    <main className="min-h-screen">
      <Hero
        title="Your Smile is Our Priority"
        subtitle="Comprehensive dental care for the whole family in McKinney, TX. From routine cleanings to complete smile makeovers, we're here to keep your teeth healthy and beautiful."
        ctaText="Book Your Appointment"
        ctaAction={handleBookAppointment}
        badge="Now Accepting New Patients"
      />

      <Services
        title="Comprehensive Dental Services"
        subtitle="Quality dental care using the latest technology and techniques for optimal oral health"
        services={dentalServices}
        columns={3}
      />

      <Trust
        title="Why Choose Valley Creek Dental Care?"
        subtitle="Trusted by thousands of families in McKinney and surrounding areas"
        features={trustFeatures}
        badges={trustBadges}
        stats={trustStats}
      />

      <Testimonials
        title="What Our Patients Say"
        subtitle="Real reviews from real patients who trust us with their smiles"
        testimonials={testimonials}
      />

      <Contact
        businessName="Valley Creek Dental Care"
        contactInfo={contactInfo}
        showMap={true}
      />

      <ChatWidget
        businessName="Valley Creek Dental"
        businessType="dental"
      />
    </main>
  )
}