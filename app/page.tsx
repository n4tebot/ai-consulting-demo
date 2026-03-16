'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.33, 1, 0.68, 1] as const }
  })
}

const plans = [
  {
    name: 'Starter',
    setup: '$1,500',
    monthly: '$200/mo',
    description: 'Perfect for new businesses getting online',
    features: [
      'Custom 5-page website',
      'Mobile-responsive design',
      'Basic SEO setup',
      'Contact form integration',
      'Google Business optimization',
      '1 round of revisions/month',
    ],
    accent: 'border-blue-400',
    badge: null,
  },
  {
    name: 'Growth',
    setup: '$3,000',
    monthly: '$350/mo',
    description: 'For businesses ready to scale with AI',
    features: [
      'Everything in Starter',
      'AI chatbot integration',
      'Appointment booking system',
      'Advanced SEO & analytics',
      'Social media integration',
      'Priority support',
      '3 revisions/month',
    ],
    accent: 'border-blue-500',
    badge: 'Most Popular',
  },
  {
    name: 'Premium',
    setup: '$5,000',
    monthly: '$600/mo',
    description: 'Full-service AI-powered digital presence',
    features: [
      'Everything in Growth',
      'Custom AI automation workflows',
      'CRM integration',
      'Lead scoring & nurturing',
      'Monthly performance reports',
      'Dedicated account manager',
      'Unlimited revisions',
    ],
    accent: 'border-blue-600',
    badge: null,
  },
]

const demos = [
  { name: 'Dental Office', path: '/demos/dental', icon: '🦷', color: 'from-teal-500 to-teal-600' },
  { name: 'HVAC Company', path: '/demos/hvac', icon: '❄️', color: 'from-orange-500 to-orange-600' },
  { name: 'Med Spa', path: '/demos/medspa', icon: '✨', color: 'from-amber-500 to-amber-600' },
  { name: 'Law Firm', path: '/demos/law', icon: '⚖️', color: 'from-yellow-500 to-yellow-600' },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-xl font-bold text-white tracking-tight">Liow Digital</span>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm text-slate-300 hover:text-white transition-colors">Services</a>
            <a href="#demos" className="text-sm text-slate-300 hover:text-white transition-colors">Demos</a>
            <a href="#about" className="text-sm text-slate-300 hover:text-white transition-colors">About</a>
            <a href="#contact" className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-5 py-2 rounded-lg transition-colors">Get Started</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative bg-slate-900 pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent" />
        <div className="relative max-w-6xl mx-auto px-6">
          <motion.div
            className="max-w-3xl"
            initial="hidden"
            animate="visible"
          >
            <motion.div
              custom={0}
              variants={fadeUp}
              className="inline-block bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6"
            >
              Serving McKinney, TX & surrounding areas
            </motion.div>
            <motion.h1
              custom={1}
              variants={fadeUp}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
            >
              AI-Powered Websites for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Local Businesses
              </span>
            </motion.h1>
            <motion.p
              custom={2}
              variants={fadeUp}
              className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl"
            >
              Transform your business with modern web design, AI chatbots, and smart automation. We help McKinney-area businesses attract more customers and save time.
            </motion.p>
            <motion.div
              custom={3}
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#contact" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg text-center transition-colors">
                Get a Free Consultation
              </a>
              <a href="#demos" className="border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white font-semibold px-8 py-4 rounded-lg text-center transition-colors">
                View Demo Sites
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-slate-50 border-y border-slate-200 py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { stat: 'AI-Powered', desc: 'Smart Chatbots' },
              { stat: '24/7', desc: 'Lead Capture' },
              { stat: 'Mobile-First', desc: 'Responsive Design' },
              { stat: 'SEO', desc: 'Optimized' },
            ].map((item) => (
              <div key={item.stat}>
                <div className="text-xl font-bold text-slate-900">{item.stat}</div>
                <div className="text-sm text-slate-500">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services / Pricing */}
      <section id="services" className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Choose the plan that fits your business. Every plan includes a custom-designed website and ongoing support.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                className={`relative bg-white border-2 ${plan.badge ? plan.accent : 'border-slate-200'} rounded-2xl p-8 ${plan.badge ? 'shadow-lg scale-[1.02]' : 'shadow-sm'}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs font-bold px-4 py-1.5 rounded-full">
                    {plan.badge}
                  </div>
                )}
                <h3 className="text-xl font-bold text-slate-900 mb-1">{plan.name}</h3>
                <p className="text-sm text-slate-500 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-slate-900">{plan.setup}</span>
                  <span className="text-slate-500 text-sm ml-1">setup</span>
                  <div className="text-slate-500 text-sm mt-1">then {plan.monthly}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-slate-600">
                      <svg className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`block text-center font-semibold py-3 rounded-lg transition-colors ${
                    plan.badge
                      ? 'bg-blue-500 hover:bg-blue-600 text-white'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demos */}
      <section id="demos" className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              See It in Action
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Browse our live demo sites. Each one is fully designed with an integrated AI chatbot — just like what we&apos;ll build for your business.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {demos.map((demo, index) => (
              <motion.div
                key={demo.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={demo.path}
                  className={`block bg-gradient-to-br ${demo.color} text-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow`}
                >
                  <div className="text-4xl mb-4">{demo.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{demo.name}</h3>
                  <p className="text-white/80 text-sm">View live demo &rarr;</p>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/demos" className="text-blue-500 hover:text-blue-600 font-medium text-sm transition-colors">
              View all demos &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-full aspect-square max-w-md mx-auto bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">NL</div>
                  <div className="text-slate-400 text-sm">Nathan Liow</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Built by a Developer Who Gets It
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  I&apos;m Nathan Liow — a Computer Science student at UT Austin, raised right here in McKinney, TX. I&apos;ve seen firsthand how local businesses struggle with outdated websites and missed leads.
                </p>
                <p>
                  Liow Digital was born to fix that. I combine modern web development with AI tools — chatbots that answer questions 24/7, automation that saves you hours, and designs that actually convert visitors into customers.
                </p>
                <p>
                  Every site I build is fast, mobile-friendly, and designed specifically for your industry. No cookie-cutter templates — real solutions for real businesses.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="py-20 md:py-28 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Grow Your Business?
            </h2>
            <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
              Let&apos;s talk about how an AI-powered website can help you attract more customers and save time. Free consultation, no pressure.
            </p>
          </motion.div>

          <motion.div
            className="bg-slate-800 rounded-2xl p-8 md:p-12 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="tel"
                placeholder="Phone number"
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <textarea
                placeholder="Tell me about your business..."
                rows={3}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
            <p className="text-slate-500 text-sm mt-4">
              Or email me directly at{' '}
              <a href="mailto:nathan@liowdigital.com" className="text-blue-400 hover:text-blue-300">
                nathan@liowdigital.com
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-slate-400 text-sm">
              &copy; {new Date().getFullYear()} Liow Digital. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <a href="mailto:nathan@liowdigital.com" className="text-slate-400 hover:text-white text-sm transition-colors">
                nathan@liowdigital.com
              </a>
              <span className="text-slate-700">|</span>
              <span className="text-slate-400 text-sm">McKinney, TX</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
