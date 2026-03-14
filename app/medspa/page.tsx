'use client'

import React from 'react'
import ChatWidget from '@/app/components/ChatWidget'

export default function MedSpaPage() {
  const handleBookConsultation = () => {
    alert('Consultation booking would open here! Call (214) 555-0156 to schedule.')
  }

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Elegant Header */}
      <header className="bg-white border-b border-rose-100">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-300 to-pink-400 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">✨</span>
              </div>
              <div>
                <h1 className="font-serif text-2xl font-semibold text-gray-900">Serenity Med Spa</h1>
                <p className="text-gray-600 text-sm">Luxury Aesthetic Treatments</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-rose-600 text-lg font-medium">(214) 555-0156</p>
              <p className="text-gray-600 text-sm">Book Your Consultation</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-stone-50 py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="animate-fade-in-up">
              <h2 className="font-serif text-5xl md:text-6xl font-medium text-gray-900 mb-8 leading-tight">
                Reveal Your
                <br />
                <span className="text-rose-500">Natural Beauty</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed font-light">
                Experience luxury aesthetic treatments in our serene McKinney sanctuary. 
                Where science meets artistry for naturally beautiful results.
              </p>
              <button
                onClick={handleBookConsultation}
                className="bg-rose-500 text-white px-12 py-4 rounded-full font-medium text-lg hover:bg-rose-600 transition-colors hover-lift shadow-lg"
              >
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Treatments */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-serif text-4xl font-medium text-gray-900 mb-6">
              Featured Treatments
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 font-light">
              Carefully curated services designed to enhance your natural radiance
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in-up-delay-1">
              <div className="bg-gradient-to-b from-stone-50 to-white rounded-3xl p-8 border border-stone-100 hover-lift">
                <div className="w-20 h-20 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">💉</span>
                </div>
                <h3 className="font-serif text-2xl font-medium text-gray-900 mb-3">Injectables</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Botox, dermal fillers, and advanced neurotoxins for natural-looking rejuvenation.
                </p>
                <p className="text-rose-600 font-medium">Starting at $12/unit</p>
              </div>
            </div>

            <div className="text-center animate-fade-in-up-delay-2">
              <div className="bg-gradient-to-b from-stone-50 to-white rounded-3xl p-8 border border-stone-100 hover-lift">
                <div className="w-20 h-20 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">✨</span>
                </div>
                <h3 className="font-serif text-2xl font-medium text-gray-900 mb-3">Skin Rejuvenation</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  HydraFacials, chemical peels, and laser treatments for glowing, youthful skin.
                </p>
                <p className="text-rose-600 font-medium">From $85</p>
              </div>
            </div>

            <div className="text-center animate-fade-in-up-delay-3">
              <div className="bg-gradient-to-b from-stone-50 to-white rounded-3xl p-8 border border-stone-100 hover-lift">
                <div className="w-20 h-20 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🧘‍♀️</span>
                </div>
                <h3 className="font-serif text-2xl font-medium text-gray-900 mb-3">Body Wellness</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  CoolSculpting, body contouring, and wellness treatments for total body confidence.
                </p>
                <p className="text-rose-600 font-medium">Custom packages</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Serenity Experience */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="animate-fade-in-up">
            <h2 className="font-serif text-4xl font-medium text-gray-900 mb-8">
              The Serenity Experience
            </h2>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 leading-relaxed font-light">
              At Serenity Med Spa, we believe true beauty radiates from within. Our philosophy centers on 
              enhancing your natural features while nurturing your overall well-being. Every treatment is 
              carefully customized to your unique needs, delivered in an atmosphere of pure tranquility.
            </p>
          </div>
        </div>
      </section>

      {/* Treatment Menu */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-serif text-4xl font-medium text-gray-900 mb-6">
              Treatment Menu
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-slide-in-left">
              <h3 className="font-serif text-2xl font-medium text-gray-900 mb-6 pb-3 border-b border-rose-100">
                Injectables
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2">
                  <div>
                    <p className="font-medium text-gray-900">Botox Cosmetic</p>
                    <p className="text-gray-600 text-sm">Forehead, crow's feet, frown lines</p>
                  </div>
                  <span className="text-rose-600 font-medium">$12/unit</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <div>
                    <p className="font-medium text-gray-900">Dermal Fillers</p>
                    <p className="text-gray-600 text-sm">Lips, cheeks, under-eye</p>
                  </div>
                  <span className="text-rose-600 font-medium">From $650</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <div>
                    <p className="font-medium text-gray-900">Dysport</p>
                    <p className="text-gray-600 text-sm">Advanced neurotoxin treatment</p>
                  </div>
                  <span className="text-rose-600 font-medium">$10/unit</span>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <h3 className="font-serif text-2xl font-medium text-gray-900 mb-6 pb-3 border-b border-rose-100">
                Skin Treatments
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2">
                  <div>
                    <p className="font-medium text-gray-900">HydraFacial</p>
                    <p className="text-gray-600 text-sm">Deep cleansing and hydration</p>
                  </div>
                  <span className="text-rose-600 font-medium">$185</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <div>
                    <p className="font-medium text-gray-900">Chemical Peel</p>
                    <p className="text-gray-600 text-sm">Light to medium depth peels</p>
                  </div>
                  <span className="text-rose-600 font-medium">From $125</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <div>
                    <p className="font-medium text-gray-900">Laser Genesis</p>
                    <p className="text-gray-600 text-sm">Collagen stimulation therapy</p>
                  </div>
                  <span className="text-rose-600 font-medium">$250</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-serif text-4xl font-medium text-gray-900 mb-6">
              Beautiful Results
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 font-light">Real transformations from our clients</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-stone-100 animate-fade-in-up-delay-1">
              <div className="text-center">
                <h4 className="font-serif text-xl font-medium text-gray-900 mb-4">Lip Enhancement</h4>
                <div className="bg-gradient-to-r from-stone-100 to-rose-50 rounded-2xl p-12 mb-4">
                  <p className="text-gray-500 font-light">Before & After Photos</p>
                  <p className="text-gray-400 text-sm mt-2">[Professional results gallery would display here]</p>
                </div>
                <p className="text-gray-600 text-sm">1ml Restylane Kysse • Natural enhancement</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-stone-100 animate-fade-in-up-delay-2">
              <div className="text-center">
                <h4 className="font-serif text-xl font-medium text-gray-900 mb-4">Skin Rejuvenation</h4>
                <div className="bg-gradient-to-r from-stone-100 to-rose-50 rounded-2xl p-12 mb-4">
                  <p className="text-gray-500 font-light">Before & After Photos</p>
                  <p className="text-gray-400 text-sm mt-2">[Professional results gallery would display here]</p>
                </div>
                <p className="text-gray-600 text-sm">6-week HydraFacial series • Glowing complexion</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="animate-fade-in-up">
            <div className="text-6xl text-rose-200 mb-6 font-serif">"</div>
            <p className="text-2xl md:text-3xl font-light text-gray-700 mb-8 italic leading-relaxed">
              The team at Serenity makes me feel so comfortable and confident. 
              My Botox results look completely natural, and my skin has never looked better.
            </p>
            <div className="w-16 h-px bg-rose-300 mx-auto mb-6"></div>
            <div>
              <p className="font-serif text-lg font-medium text-gray-900">Jennifer Walsh</p>
              <p className="text-gray-600">McKinney, TX</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Dr. Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="font-serif text-4xl font-medium text-gray-900 mb-6">
                Meet Dr. Sarah Chen
              </h2>
              <div className="w-16 h-px bg-rose-300 mb-6"></div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Board-certified aesthetic physician with over 10 years of experience in cosmetic medicine. 
                Dr. Chen's artistic eye and gentle approach have helped thousands of clients achieve their 
                aesthetic goals naturally and safely.
              </p>
              <div className="space-y-2 text-gray-700">
                <p>• Board Certified in Aesthetic Medicine</p>
                <p>• Fellowship in Advanced Injection Techniques</p>
                <p>• Member, American Society of Aesthetic Medicine</p>
                <p>• 10+ Years Experience in Cosmetic Treatments</p>
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <div className="bg-white rounded-3xl p-8 border border-stone-100 text-center">
                <div className="w-40 h-40 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-6xl font-serif font-medium text-rose-500">SC</span>
                </div>
                <h3 className="font-serif text-xl font-medium text-gray-900 mb-2">Dr. Sarah Chen</h3>
                <p className="text-rose-600 font-medium mb-4">Medical Director & Founder</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  "My passion is helping each client feel confident and beautiful in their own skin. 
                  Every treatment is an opportunity to enhance natural beauty with artistry and precision."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="font-serif text-4xl font-medium text-gray-900 mb-6">
                Schedule Your Consultation
              </h2>
              <div className="w-16 h-px bg-rose-300 mb-6"></div>
              <p className="text-xl text-gray-700 mb-8 font-light">
                Begin your aesthetic journey with a complimentary consultation. 
                We'll discuss your goals and create a customized treatment plan just for you.
              </p>
              <button
                onClick={handleBookConsultation}
                className="bg-rose-500 text-white px-10 py-4 rounded-full font-medium text-lg hover:bg-rose-600 transition-colors hover-lift shadow-lg"
              >
                Book Free Consultation
              </button>
            </div>
            
            <div className="animate-slide-in-right">
              <div className="bg-stone-50 rounded-3xl p-8 border border-stone-100">
                <div className="space-y-6">
                  <div>
                    <p className="font-serif text-lg font-medium text-gray-900 mb-1">Phone</p>
                    <p className="text-rose-600 text-xl">(214) 555-0156</p>
                  </div>
                  <div>
                    <p className="font-serif text-lg font-medium text-gray-900 mb-1">Address</p>
                    <p className="text-gray-700">789 Wellness Way<br />McKinney, TX 75070</p>
                  </div>
                  <div>
                    <p className="font-serif text-lg font-medium text-gray-900 mb-1">Hours</p>
                    <div className="text-gray-700 space-y-1">
                      <p>Tuesday - Friday: 9:00 AM - 7:00 PM</p>
                      <p>Saturday: 9:00 AM - 5:00 PM</p>
                      <p>Sunday: 10:00 AM - 5:00 PM</p>
                      <p>Monday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-serif text-2xl font-medium mb-4">Serenity Med Spa</h3>
              <p className="text-gray-400 leading-relaxed">
                Where luxury meets wellness. Enhance your natural beauty with our expert aesthetic treatments 
                in the heart of McKinney.
              </p>
            </div>
            <div>
              <h4 className="font-serif text-lg font-medium mb-4">Contact</h4>
              <div className="text-gray-400 space-y-2">
                <p className="text-rose-400">(214) 555-0156</p>
                <p>hello@serenityspa.com</p>
                <p>789 Wellness Way<br />McKinney, TX 75070</p>
              </div>
            </div>
            <div>
              <h4 className="font-serif text-lg font-medium mb-4">Services</h4>
              <div className="text-gray-400 space-y-2">
                <p>Botox & Dermal Fillers</p>
                <p>HydraFacial & Chemical Peels</p>
                <p>Laser Treatments</p>
                <p>Body Contouring</p>
                <p>Wellness Therapies</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2025 Serenity Med Spa. All rights reserved. • Licensed Medical Practice
            </p>
          </div>
        </div>
      </footer>

      <ChatWidget
        businessName="Serenity Med Spa"
        businessType="medspa"
      />
    </div>
  )
}