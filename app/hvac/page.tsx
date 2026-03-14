'use client'

import React from 'react'
import ChatWidget from '@/app/components/ChatWidget'

export default function HvacPage() {
  const handleScheduleService = () => {
    alert('Service scheduling would open here! Call (469) 325-1034 for immediate assistance.')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Emergency Strip */}
      <div className="bg-red-600 text-white py-2">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-bold">
            🚨 24/7 EMERGENCY SERVICE — CALL NOW: (469) 325-1034
          </p>
        </div>
      </div>

      {/* Header */}
      <header className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-2xl">❄️</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold">Harris Air Services</h1>
                <p className="text-gray-300 text-sm">Licensed • Insured • Family-Owned</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-orange-400 text-xl font-bold">(469) 325-1034</p>
              <p className="text-gray-300 text-sm">24/7 Emergency Service</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                McKinney's Trusted HVAC Experts Since 2008
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Fast, reliable heating and cooling services for your home and business. 
                Emergency repairs, installations, and maintenance you can count on.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleScheduleService}
                  className="bg-orange-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-colors hover-lift"
                >
                  Schedule Service Now
                </button>
                <a 
                  href="tel:469-325-1034"
                  className="border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-500 hover:text-white transition-colors"
                >
                  Call for Emergency
                </a>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Why Choose Harris Air?</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="text-gray-200">Licensed & insured technicians</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="text-gray-200">15+ years serving Collin County</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="text-gray-200">Upfront pricing, no surprises</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="text-gray-200">100% satisfaction guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-orange-500 py-4">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 text-white font-bold">
            <div className="text-center">
              <div className="text-2xl">15+</div>
              <div className="text-sm">Years in Business</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/30"></div>
            <div className="text-center">
              <div className="text-2xl">2,500+</div>
              <div className="text-sm">Happy Customers</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/30"></div>
            <div className="text-center">
              <div className="text-2xl">4.9★</div>
              <div className="text-sm">Google Reviews</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/30"></div>
            <div className="text-center">
              <div className="text-2xl">24/7</div>
              <div className="text-sm">Emergency Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete HVAC Services
            </h2>
            <p className="text-xl text-gray-600">Expert heating, cooling, and air quality solutions for your comfort</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 animate-fade-in-up-delay-1">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-2xl">🔧</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Emergency Repairs</h3>
                  <p className="text-gray-600 mb-4">
                    AC broken? Heater not working? We're available 24/7 for urgent HVAC emergencies. 
                    Fast response times and expert troubleshooting.
                  </p>
                  <p className="text-orange-600 font-semibold">Starting at $89 service call</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 animate-fade-in-up-delay-2">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-2xl">🏠</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">System Installation</h3>
                  <p className="text-gray-600 mb-4">
                    New home or system replacement? We install high-efficiency HVAC systems from 
                    top brands with professional installation and warranty.
                  </p>
                  <p className="text-orange-600 font-semibold">Free estimates available</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 animate-fade-in-up-delay-3">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-2xl">⚙️</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Maintenance Plans</h3>
                  <p className="text-gray-600 mb-4">
                    Keep your system running efficiently with our seasonal maintenance plans. 
                    Regular tune-ups prevent breakdowns and extend equipment life.
                  </p>
                  <p className="text-orange-600 font-semibold">Plans from $149/year</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 animate-fade-in-up-delay-4">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-2xl">💨</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Air Quality Solutions</h3>
                  <p className="text-gray-600 mb-4">
                    Improve your indoor air with duct cleaning, air purifiers, and humidity control systems. 
                    Breathe cleaner, healthier air year-round.
                  </p>
                  <p className="text-orange-600 font-semibold">Custom solutions available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Proudly Serving Collin County
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We provide reliable HVAC services throughout the McKinney area and surrounding communities.
              </p>
              
              <div className="grid grid-cols-2 gap-4 text-gray-700">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Primary Service Areas:</h4>
                  <ul className="space-y-1">
                    <li>• McKinney</li>
                    <li>• Plano</li>
                    <li>• Frisco</li>
                    <li>• Allen</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Also Serving:</h4>
                  <ul className="space-y-1">
                    <li>• Prosper</li>
                    <li>• Little Elm</li>
                    <li>• Celina</li>
                    <li>• Anna</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <div className="bg-gray-100 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Response Times</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Emergency Calls:</span>
                    <span className="font-bold text-orange-600">Within 2 Hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Same-Day Service:</span>
                    <span className="font-bold text-orange-600">Available Daily</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Scheduled Appointments:</span>
                    <span className="font-bold text-orange-600">Next Day</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 animate-fade-in-up-delay-1">
            <div className="flex items-start mb-4">
              <div className="flex text-orange-400 mr-4">
                <span>★★★★★</span>
              </div>
              <div className="text-sm text-gray-500">Google Review</div>
            </div>
            <p className="text-lg text-gray-700 mb-4 italic">
              "Our AC went out on the hottest day of the year. Harris Air had someone here within an hour! 
              Professional, friendly, and got us cool again fast. Definitely calling them for all our HVAC needs."
            </p>
            <div>
              <p className="font-bold text-gray-900">Mike Rodriguez</p>
              <p className="text-gray-600">McKinney Homeowner</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="bg-red-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AC Emergency? We're Here to Help!
          </h2>
          <p className="text-xl mb-6">
            Don't sweat it out. Our emergency technicians are standing by 24/7.
          </p>
          <a 
            href="tel:469-325-1034"
            className="inline-block bg-white text-red-600 px-12 py-4 rounded-lg font-bold text-xl hover:bg-gray-100 transition-colors animate-gentle-bounce"
          >
            Call (469) 325-1034
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Harris Air Services</h3>
              <p className="text-gray-400">McKinney's most trusted HVAC company. Family-owned and operated since 2008.</p>
            </div>
            <div>
              <h4 className="font-bold mb-3">Contact</h4>
              <div className="text-gray-400 space-y-1">
                <p className="text-orange-400 font-bold">(469) 325-1034</p>
                <p>info@harrisairservices.com</p>
                <p>456 Service Dr, McKinney, TX 75071</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-3">Service Hours</h4>
              <div className="text-gray-400 space-y-1">
                <p>Monday - Friday: 7:00 AM - 7:00 PM</p>
                <p>Saturday: 8:00 AM - 5:00 PM</p>
                <p>Sunday: Emergency Service Only</p>
                <p className="text-orange-400 font-bold">24/7 Emergency Service</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-center md:text-left">
                &copy; 2025 Harris Air Services. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0 text-gray-400">
                <span>License #TACLA123456</span>
                <span>•</span>
                <span>Insured & Bonded</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <ChatWidget
        businessName="Harris Air Services"
        businessType="hvac"
      />
    </div>
  )
}