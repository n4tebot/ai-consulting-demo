'use client'

import React from 'react'
import ChatWidget from '@/app/components/ChatWidget'

export default function DentalPage() {
  const handleBookAppointment = () => {
    alert('Booking system would open here! Call (214) 555-0123 to schedule.')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Welcoming Header */}
      <header className="bg-gradient-to-r from-blue-50 to-teal-50 border-b border-blue-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">🦷</span>
              </div>
              <div>
                <h1 className="font-serif text-xl font-semibold text-gray-900">Valley Creek Dental Care</h1>
                <p className="text-sm text-gray-600">McKinney, TX</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold text-blue-600">(214) 555-0123</p>
              <p className="text-sm text-gray-600">Call Today</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-teal-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
                Your Smile, Our Passion
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Comprehensive dental care for the whole family. From routine cleanings to complete 
                smile makeovers, we're here to keep your teeth healthy and beautiful.
              </p>
              <button
                onClick={handleBookAppointment}
                className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-colors hover-lift"
              >
                Book Your Appointment
              </button>
            </div>
            <div className="animate-slide-in-right">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
                <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-4">Now Accepting New Patients</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-center">
                    <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-600 text-sm">✓</span>
                    </span>
                    Same-day appointments available
                  </div>
                  <div className="flex items-center">
                    <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-600 text-sm">✓</span>
                    </span>
                    Most insurance plans accepted
                  </div>
                  <div className="flex items-center">
                    <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-600 text-sm">✓</span>
                    </span>
                    Gentle, pain-free procedures
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Why Choose Valley Creek Dental Care?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by thousands of families in McKinney and surrounding areas
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in-up-delay-1">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3">Licensed & Certified</h3>
              <p className="text-gray-600">Board-certified dentists with advanced training and continuous education.</p>
            </div>
            
            <div className="text-center animate-fade-in-up-delay-2">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3">Modern Technology</h3>
              <p className="text-gray-600">State-of-the-art equipment including digital X-rays and 3D imaging.</p>
            </div>
            
            <div className="text-center animate-fade-in-up-delay-3">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💙</span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3">Gentle Care</h3>
              <p className="text-gray-600">Comfortable, pain-free procedures with sedation options available.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Comprehensive Dental Services
            </h2>
            <p className="text-xl text-gray-600">Quality dental care using the latest technology and techniques</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'General Cleanings', description: 'Professional cleanings and preventive care', price: 'From $120' },
              { name: 'Cosmetic Dentistry', description: 'Whitening, veneers, and smile makeovers', price: 'Starting at $300' },
              { name: 'Dental Implants', description: 'Permanent tooth replacement solutions', price: 'From $2,500' },
              { name: 'Emergency Care', description: 'Same-day appointments for urgent issues', price: 'Call for pricing' },
              { name: 'Family Dentistry', description: 'Comprehensive care for all ages', price: 'Insurance accepted' },
              { name: 'Orthodontics', description: 'Braces and Invisalign treatment', price: 'From $3,500' }
            ].map((service, index) => (
              <div 
                key={service.name} 
                className={`bg-white p-6 rounded-lg hover-lift animate-fade-in-up-delay-${index % 3 + 1}`}
              >
                <h3 className="font-serif text-lg font-semibold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-3">{service.description}</p>
                <p className="text-blue-600 font-semibold">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Meet Our Team
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Dr. Sarah Smith', role: 'Lead Dentist', initials: 'SS' },
              { name: 'Dr. Michael Johnson', role: 'Oral Surgeon', initials: 'MJ' },
              { name: 'Lisa Rodriguez', role: 'Dental Hygienist', initials: 'LR' }
            ].map((member, index) => (
              <div key={member.name} className={`text-center animate-fade-in-up-delay-${index + 1}`}>
                <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-serif font-semibold text-blue-600">{member.initials}</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="animate-fade-in-up">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-900 mb-8">
              What Our Patients Say
            </h2>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border border-blue-100">
              <div className="text-6xl text-blue-200 mb-4">"</div>
              <p className="text-xl text-gray-700 mb-6 italic">
                Dr. Smith and her team made my dental implant procedure completely painless. 
                The results look amazing and I can eat all my favorite foods again!
              </p>
              <div>
                <p className="font-semibold text-gray-900">Sarah Johnson</p>
                <p className="text-gray-600">Patient since 2019 • McKinney, TX</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance & Payment */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-slide-in-left">
              <h2 className="font-serif text-3xl font-semibold text-gray-900 mb-6">
                Insurance & Payment Options
              </h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-600 text-sm">✓</span>
                  </span>
                  <span>Most major insurance plans accepted</span>
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-600 text-sm">✓</span>
                  </span>
                  <span>Flexible payment plans available</span>
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-600 text-sm">✓</span>
                  </span>
                  <span>CareCredit financing accepted</span>
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-600 text-sm">✓</span>
                  </span>
                  <span>Senior and family discounts</span>
                </div>
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <h2 className="font-serif text-3xl font-semibold text-gray-900 mb-6">
                Contact Us Today
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-blue-600 text-lg">(214) 555-0123</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-700">123 Dental Way<br />McKinney, TX 75070</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Hours</p>
                    <div className="text-gray-700">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 3:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-serif text-xl font-semibold mb-4">Valley Creek Dental Care</h3>
              <p className="text-gray-400">Your smile is our priority. Quality dental care for the whole family.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Contact Info</h4>
              <div className="text-gray-400 space-y-1">
                <p>(214) 555-0123</p>
                <p>info@valleycreekdental.com</p>
                <p>123 Dental Way, McKinney, TX 75070</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Credentials</h4>
              <div className="text-gray-400 space-y-1">
                <p>American Dental Association Member</p>
                <p>Texas Dental Association Certified</p>
                <p>Board Certified Dentists</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Valley Creek Dental Care. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <ChatWidget
        businessName="Valley Creek Dental"
        businessType="dental"
      />
    </div>
  )
}