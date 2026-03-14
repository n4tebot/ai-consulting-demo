'use client'

import React from 'react'
import ChatWidget from '@/app/components/ChatWidget'

export default function LawPage() {
  const handleFreeConsultation = () => {
    alert('Free consultation booking! Call (469) 325-1034 to schedule.')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Dark Navy Nav Bar */}
      <nav className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="font-serif text-xl font-bold text-white">Stone & Associates</h1>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#practice-areas" className="text-gray-300 hover:text-white">Practice Areas</a>
              <a href="#attorney" className="text-gray-300 hover:text-white">Attorney</a>
              <a href="#results" className="text-gray-300 hover:text-white">Results</a>
              <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
            </div>
            <button
              onClick={handleFreeConsultation}
              className="bg-yellow-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-yellow-700 transition-colors"
            >
              Free Consultation
            </button>
          </div>
        </div>
      </nav>

      {/* 2. Full-Viewport Hero - Dark navy, left-aligned text */}
      <section className="min-h-screen bg-slate-900 text-white flex items-center">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <h2 className="font-serif text-6xl md:text-7xl font-bold mb-6 leading-tight animate-slide-in-left">
              Fighting for What's Right.
            </h2>
            <p className="text-2xl text-gray-300 mb-8 animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
              McKinney's premier litigation firm.
            </p>
            <button
              onClick={handleFreeConsultation}
              className="bg-yellow-600 text-white px-10 py-5 rounded-lg font-bold text-xl hover:bg-yellow-700 transition-colors animate-slide-in-left"
              style={{ animationDelay: '0.6s' }}
            >
              Get Your Free Case Review
            </button>
          </div>
        </div>
      </section>

      {/* 3. How It Works - 3-step horizontal flow */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-bold text-center text-gray-900 mb-16">How It Works</h2>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="text-center animate-fade-in-up">
              <div className="w-20 h-20 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-6">
                1
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Contact Us</h3>
              <p className="text-gray-700 leading-relaxed">
                Call or fill out our form for a free consultation. We'll review your case and explain your options with no obligation.
              </p>
            </div>

            {/* Arrow 1 */}
            <div className="hidden md:block absolute top-10 left-1/3 transform -translate-x-1/2">
              <div className="text-yellow-600 text-3xl">→</div>
            </div>

            {/* Step 2 */}
            <div className="text-center animate-fade-in-up-delay-1">
              <div className="w-20 h-20 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-6">
                2
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">We Investigate</h3>
              <p className="text-gray-700 leading-relaxed">
                Our experienced team thoroughly investigates your case, gathering evidence and building a strong foundation for your claim.
              </p>
            </div>

            {/* Arrow 2 */}
            <div className="hidden md:block absolute top-10 right-1/3 transform translate-x-1/2">
              <div className="text-yellow-600 text-3xl">→</div>
            </div>

            {/* Step 3 */}
            <div className="text-center animate-fade-in-up-delay-2">
              <div className="w-20 h-20 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-6">
                3
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">We Fight for You</h3>
              <p className="text-gray-700 leading-relaxed">
                We aggressively pursue maximum compensation through negotiation or trial, keeping you informed every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Results Bar */}
      <section className="bg-yellow-600 text-slate-900 py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center font-bold">
            <div className="animate-fade-in-up">
              <div className="text-3xl mb-2">$50M+</div>
              <p className="text-lg">Recovered</p>
            </div>
            <div className="animate-fade-in-up-delay-1">
              <div className="text-3xl mb-2">500+</div>
              <p className="text-lg">Cases Won</p>
            </div>
            <div className="animate-fade-in-up-delay-2">
              <div className="text-3xl mb-2">98%</div>
              <p className="text-lg">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Practice Areas - 2x3 grid with large text */}
      <section className="py-20 bg-gray-50" id="practice-areas">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-bold text-center text-gray-900 mb-16">Practice Areas</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Personal Injury',
              'Family Law',
              'Business Litigation',
              'Criminal Defense',
              'Estate Planning',
              'Real Estate'
            ].map((area, index) => (
              <div key={area} className={`border-2 border-gray-300 rounded-lg p-8 text-center hover:border-yellow-600 transition-colors animate-fade-in-up-delay-${index % 3 + 1}`}>
                <h3 className="font-serif text-2xl font-bold text-gray-900">{area}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Lead Attorney Section - Two columns */}
      <section className="py-20 bg-white" id="attorney">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT: Bio */}
            <div className="animate-slide-in-left">
              <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">Michael J. Stone</h2>
              <p className="text-xl text-yellow-600 mb-6 font-semibold">Managing Partner • Board Certified • 25+ Years Experience</p>
              
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  Michael Stone founded Stone & Associates with a simple mission: provide aggressive, effective legal representation 
                  for clients facing life's most challenging legal issues. With over 25 years of experience in Texas courts, 
                  Michael has built a reputation for securing maximum results for his clients.
                </p>
                <p>
                  He is Board Certified in Personal Injury Trial Law by the Texas Board of Legal Specialization and has been 
                  recognized as a Super Lawyer for 10 consecutive years. Michael's track record includes numerous multi-million 
                  dollar settlements and verdicts in complex litigation matters.
                </p>
                <p>
                  "Every case matters. Every client deserves our absolute best effort. That's not just our motto—it's our guarantee."
                </p>
              </div>
            </div>
            
            {/* RIGHT: Photo placeholder */}
            <div className="animate-slide-in-right">
              <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-slate-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl text-white font-serif font-bold">MS</span>
                  </div>
                  <p className="text-gray-600 font-semibold">Michael J. Stone</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Testimonials - Dark background */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl font-bold mb-12">Client Results</h2>
          
          <div className="animate-fade-in-up">
            <div className="text-6xl text-yellow-600 mb-6">"</div>
            <p className="font-serif text-2xl italic leading-relaxed mb-8">
              Michael Stone fought tirelessly for our family after a devastating car accident. His expertise and dedication resulted in a $2.3 million settlement that secured our future. We can't thank him enough.
            </p>
            <div>
              <p className="font-semibold text-lg">T.R.</p>
              <p className="text-gray-400">Personal Injury Client • McKinney</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CTA Section with Intake Form */}
      <section className="py-20 bg-gray-50" id="contact">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">Every Case Matters. Yours Included.</h2>
            <p className="text-xl text-gray-700">Get your free case evaluation today</p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg animate-fade-in-up">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
                    placeholder="(469) 555-0123"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Case Type</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600">
                  <option>Select case type</option>
                  <option>Personal Injury</option>
                  <option>Family Law</option>
                  <option>Business Litigation</option>
                  <option>Criminal Defense</option>
                  <option>Estate Planning</option>
                  <option>Real Estate</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Brief Description</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
                  placeholder="Tell us about your case..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                onClick={handleFreeConsultation}
                className="w-full bg-yellow-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-yellow-700 transition-colors"
              >
                Get My Free Consultation
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 9. Professional Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Practice Areas Links */}
            <div>
              <h3 className="font-serif text-lg font-bold mb-4">Practice Areas</h3>
              <div className="space-y-2 text-gray-300">
                <p>Personal Injury</p>
                <p>Family Law</p>
                <p>Business Litigation</p>
                <p>Criminal Defense</p>
              </div>
            </div>
            
            {/* Contact Info */}
            <div>
              <h3 className="font-serif text-lg font-bold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-300">
                <p className="text-yellow-400 font-semibold">(469) 325-1034</p>
                <p>info@stoneandassociates.com</p>
                <p>123 Justice Way<br />McKinney, TX 75070</p>
              </div>
            </div>
            
            {/* Office Hours */}
            <div>
              <h3 className="font-serif text-lg font-bold mb-4">Office Hours</h3>
              <div className="space-y-2 text-gray-300">
                <p>Monday - Friday<br />8:00 AM - 6:00 PM</p>
                <p>Saturday<br />By Appointment</p>
                <p>Emergency<br />24/7 Available</p>
              </div>
            </div>
            
            {/* CTA */}
            <div>
              <h3 className="font-serif text-lg font-bold mb-4">Get Help Now</h3>
              <button
                onClick={handleFreeConsultation}
                className="bg-yellow-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-yellow-700 transition-colors w-full"
              >
                Free Consultation
              </button>
            </div>
          </div>
          
          {/* Disclaimer */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-gray-400 text-sm">
            <p className="mb-4">
              <strong>Disclaimer:</strong> The information on this website is for general information purposes only. 
              Nothing on this site should be taken as legal advice for any individual case or situation. 
              This information is not intended to create, and receipt or viewing does not constitute, an attorney-client relationship.
            </p>
            <p className="text-center">&copy; 2025 Stone & Associates. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <ChatWidget
        businessName="Stone & Associates"
        businessType="law"
        themeColor="#D4A853"
      />
    </div>
  )
}