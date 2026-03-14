'use client'

import React from 'react'
import ChatWidget from '@/app/components/ChatWidget'

export default function LawPage() {
  const handleFreeConsultation = () => {
    alert('Consultation booking would open here! Call (214) 555-0189 for your free consultation.')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Professional Header */}
      <header className="bg-slate-900 text-white border-b border-yellow-600">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-yellow-600 rounded flex items-center justify-center">
                <span className="text-white text-xl font-bold">⚖️</span>
              </div>
              <div>
                <h1 className="font-source-serif text-2xl font-semibold">Stone & Associates</h1>
                <p className="text-gray-300 text-sm">Attorneys at Law</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-yellow-400 text-lg font-semibold">(214) 555-0189</p>
              <p className="text-gray-300 text-sm">Free Consultation</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-800 to-slate-900 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="font-source-serif text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight">
                Protecting What Matters Most
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                For over 20 years, Stone & Associates has provided trusted legal counsel to individuals, 
                families, and businesses throughout North Texas. When you need experienced representation, 
                we're here to fight for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleFreeConsultation}
                  className="bg-yellow-600 text-white px-8 py-4 rounded font-semibold text-lg hover:bg-yellow-700 transition-colors hover-lift"
                >
                  Free Consultation
                </button>
                <a 
                  href="tel:214-555-0189"
                  className="border-2 border-yellow-600 text-yellow-600 px-8 py-4 rounded font-semibold text-lg hover:bg-yellow-600 hover:text-white transition-colors"
                >
                  Call (214) 555-0189
                </a>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <div className="bg-white/10 backdrop-blur rounded-lg p-8 border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-6">Why Choose Our Firm?</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-yellow-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <div>
                      <p className="font-semibold text-white">Proven Track Record</p>
                      <p className="text-gray-300 text-sm">$50M+ recovered for our clients</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-yellow-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <div>
                      <p className="font-semibold text-white">Experienced Team</p>
                      <p className="text-gray-300 text-sm">20+ years serving North Texas</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-yellow-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <div>
                      <p className="font-semibold text-white">Personal Attention</p>
                      <p className="text-gray-300 text-sm">Direct access to your attorney</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-source-serif text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Practice Areas
            </h2>
            <p className="text-xl text-gray-600">Comprehensive legal services across multiple areas of law</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center hover-lift animate-fade-in-up-delay-1">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="font-source-serif text-xl font-semibold text-gray-900 mb-3">Personal Injury</h3>
              <p className="text-gray-600 text-sm">Car accidents, slip & fall, medical malpractice, wrongful death</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center hover-lift animate-fade-in-up-delay-2">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍👩‍👧‍👦</span>
              </div>
              <h3 className="font-source-serif text-xl font-semibold text-gray-900 mb-3">Family Law</h3>
              <p className="text-gray-600 text-sm">Divorce, custody, adoption, child support, prenuptials</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center hover-lift animate-fade-in-up-delay-3">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="font-source-serif text-xl font-semibold text-gray-900 mb-3">Business Law</h3>
              <p className="text-gray-600 text-sm">Contract disputes, business formation, employment law</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center hover-lift animate-fade-in-up-delay-4">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="font-source-serif text-xl font-semibold text-gray-900 mb-3">Criminal Defense</h3>
              <p className="text-gray-600 text-sm">DWI, drug charges, white collar crimes, misdemeanors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results/Stats Bar */}
      <section className="py-12 bg-yellow-600">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div className="animate-fade-in-up-delay-1">
              <div className="text-3xl font-bold">$50M+</div>
              <div className="text-sm font-medium">Recovered for Clients</div>
            </div>
            <div className="animate-fade-in-up-delay-2">
              <div className="text-3xl font-bold">500+</div>
              <div className="text-sm font-medium">Cases Won</div>
            </div>
            <div className="animate-fade-in-up-delay-3">
              <div className="text-3xl font-bold">20+</div>
              <div className="text-sm font-medium">Years Experience</div>
            </div>
            <div className="animate-fade-in-up-delay-4">
              <div className="text-3xl font-bold">98%</div>
              <div className="text-sm font-medium">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Attorney Profiles */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-source-serif text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Meet Our Attorneys
            </h2>
            <p className="text-xl text-gray-600">Experienced legal professionals dedicated to your success</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center animate-fade-in-up-delay-1">
              <div className="w-48 h-48 bg-slate-100 rounded mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl font-source-serif font-semibold text-slate-600">JS</span>
              </div>
              <h3 className="font-source-serif text-xl font-semibold text-gray-900 mb-2">James Stone</h3>
              <p className="text-yellow-600 font-semibold mb-3">Senior Partner & Founder</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Over 25 years of experience in personal injury and family law. Board certified 
                trial attorney with a proven track record of successful outcomes.
              </p>
              <div className="text-gray-500 text-sm space-y-1">
                <p>• J.D., SMU Dedman School of Law</p>
                <p>• Texas State Bar Board Certified</p>
                <p>• Super Lawyers Rising Star</p>
              </div>
            </div>

            <div className="text-center animate-fade-in-up-delay-2">
              <div className="w-48 h-48 bg-slate-100 rounded mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl font-source-serif font-semibold text-slate-600">MR</span>
              </div>
              <h3 className="font-source-serif text-xl font-semibold text-gray-900 mb-2">Maria Rodriguez</h3>
              <p className="text-yellow-600 font-semibold mb-3">Partner, Business Law</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Specializes in business law and commercial litigation. Former corporate counsel 
                with extensive experience in contract negotiations and business disputes.
              </p>
              <div className="text-gray-500 text-sm space-y-1">
                <p>• J.D., University of Texas School of Law</p>
                <p>• Texas State Bar Certified</p>
                <p>• AV Rated by Martindale-Hubbell</p>
              </div>
            </div>

            <div className="text-center animate-fade-in-up-delay-3">
              <div className="w-48 h-48 bg-slate-100 rounded mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl font-source-serif font-semibold text-slate-600">DW</span>
              </div>
              <h3 className="font-source-serif text-xl font-semibold text-gray-900 mb-2">David Williams</h3>
              <p className="text-yellow-600 font-semibold mb-3">Associate, Criminal Defense</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Former prosecutor with deep understanding of criminal law. Aggressive advocate 
                for clients facing serious criminal charges.
              </p>
              <div className="text-gray-500 text-sm space-y-1">
                <p>• J.D., Baylor Law School</p>
                <p>• Former Dallas County Prosecutor</p>
                <p>• Criminal Defense Specialist</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-source-serif text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Client Testimonials
            </h2>
            <p className="text-xl text-gray-600">Real experiences from clients we've helped</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 animate-fade-in-up-delay-1">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-500 mr-3">
                  <span>★★★★★</span>
                </div>
                <span className="text-sm text-gray-500 bg-blue-100 px-2 py-1 rounded">Personal Injury</span>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed italic">
                "After my car accident, I thought I was going to be stuck with massive medical bills. 
                James and his team fought hard and got me a settlement that covered everything and more. 
                Professional and caring throughout the entire process."
              </p>
              <div>
                <p className="font-semibold text-gray-900">Robert Chen</p>
                <p className="text-gray-600 text-sm">McKinney, TX</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 animate-fade-in-up-delay-2">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-500 mr-3">
                  <span>★★★★★</span>
                </div>
                <span className="text-sm text-gray-500 bg-green-100 px-2 py-1 rounded">Family Law</span>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed italic">
                "Maria helped me through a difficult divorce with compassion and expertise. 
                She protected my interests and made sure I got fair custody arrangements. 
                I couldn't have asked for better representation."
              </p>
              <div>
                <p className="font-semibold text-gray-900">Jennifer Martinez</p>
                <p className="text-gray-600 text-sm">Plano, TX</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Stone & Associates */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="font-source-serif text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                Why Choose Stone & Associates?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-yellow-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Personalized Attention</h4>
                    <p className="text-gray-600">Every client gets direct access to their attorney, not just paralegals.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-yellow-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Proven Results</h4>
                    <p className="text-gray-600">Over $50 million recovered for our clients in settlements and verdicts.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-yellow-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">No Upfront Fees</h4>
                    <p className="text-gray-600">We work on contingency for personal injury cases - you pay nothing unless we win.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-yellow-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-xs font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Local Expertise</h4>
                    <p className="text-gray-600">Deep knowledge of Texas law and local court systems throughout North Texas.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <div className="bg-slate-900 rounded-lg p-8 text-white">
                <h3 className="font-source-serif text-2xl font-semibold mb-6">Schedule Your Free Consultation</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="w-6 h-6 bg-yellow-600 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span>30-minute consultation at no cost</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-6 h-6 bg-yellow-600 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span>Case evaluation and legal options</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-6 h-6 bg-yellow-600 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span>No obligation to hire</span>
                  </div>
                  <div className="pt-4">
                    <button
                      onClick={handleFreeConsultation}
                      className="w-full bg-yellow-600 text-white px-8 py-3 rounded font-semibold hover:bg-yellow-700 transition-colors"
                    >
                      Schedule Free Consultation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-slide-in-left">
              <h2 className="font-source-serif text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                Contact Our Office
              </h2>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Phone</h4>
                  <p className="text-yellow-600 text-xl font-semibold">(214) 555-0189</p>
                  <p className="text-gray-600 text-sm">24-hour emergency line for urgent legal matters</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Address</h4>
                  <p className="text-gray-700">
                    321 Legal Plaza<br />
                    Suite 450<br />
                    McKinney, TX 75070
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Office Hours</h4>
                  <div className="text-gray-700 space-y-1">
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: By appointment only</p>
                    <p>Sunday: Emergency consultations</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
                <h3 className="font-source-serif text-xl font-semibold text-gray-900 mb-6">
                  Get a Free Case Review
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <div className="h-10 bg-gray-100 rounded border border-gray-200"></div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <div className="h-10 bg-gray-100 rounded border border-gray-200"></div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <div className="h-10 bg-gray-100 rounded border border-gray-200"></div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Legal Matter</label>
                    <div className="h-24 bg-gray-100 rounded border border-gray-200"></div>
                  </div>
                  <button
                    onClick={handleFreeConsultation}
                    className="w-full bg-yellow-600 text-white py-3 rounded font-semibold hover:bg-yellow-700 transition-colors"
                  >
                    Submit for Free Review
                  </button>
                  <p className="text-xs text-gray-500 text-center">
                    Confidential and secure. No obligation to hire.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="font-source-serif text-2xl font-semibold mb-4">Stone & Associates</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Experienced legal representation you can trust. Protecting what matters most 
                to individuals, families, and businesses throughout North Texas.
              </p>
              <p className="text-yellow-400 font-semibold">(214) 555-0189</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Practice Areas</h4>
              <div className="text-gray-400 space-y-2 text-sm">
                <p>Personal Injury</p>
                <p>Family Law</p>
                <p>Business Law</p>
                <p>Criminal Defense</p>
                <p>Estate Planning</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="text-gray-400 space-y-2 text-sm">
                <p>321 Legal Plaza, Suite 450</p>
                <p>McKinney, TX 75070</p>
                <p>info@stonelaw.com</p>
                <p>Monday - Friday: 8AM - 6PM</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm">
              <p className="text-gray-400 text-center md:text-left">
                &copy; 2025 Stone & Associates. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0 text-gray-400">
                <span>Licensed in Texas</span>
                <span>•</span>
                <span>AV Rated</span>
                <span>•</span>
                <span>Super Lawyers</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <ChatWidget
        businessName="Stone & Associates"
        businessType="law"
      />
    </div>
  )
}