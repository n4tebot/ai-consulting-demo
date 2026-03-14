'use client'

import React from 'react'

interface ContactInfo {
  phone: string
  email: string
  address: string
  hours: {
    weekdays: string
    saturday?: string
    sunday?: string
    emergency?: string
  }
  socialMedia?: {
    facebook?: string
    instagram?: string
    twitter?: string
  }
}

interface ContactProps {
  businessName: string
  contactInfo: ContactInfo
  showMap?: boolean
  emergencyService?: boolean
}

export default function Contact({ 
  businessName, 
  contactInfo, 
  showMap = true, 
  emergencyService = false 
}: ContactProps) {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 animate-fade-in-up">
              Get in Touch
            </h2>

            {emergencyService && (
              <div className="bg-red-600 rounded-xl p-6 mb-8 animate-fade-in-up-delay-1">
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <span className="w-3 h-3 bg-red-400 rounded-full mr-3 animate-pulse"></span>
                  Emergency Service
                </h3>
                <p className="text-red-100 mb-3">Available 24/7 for urgent repairs</p>
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="inline-flex items-center text-lg font-bold text-white hover:text-red-200 transition-colors"
                >
                  📞 {contactInfo.phone}
                </a>
              </div>
            )}

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start animate-fade-in-up-delay-2">
                <div className="w-6 h-6 text-blue-400 mr-4 flex-shrink-0 mt-1">
                  📞
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <a 
                    href={`tel:${contactInfo.phone}`}
                    className="text-gray-300 hover:text-white transition-colors text-lg"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start animate-fade-in-up-delay-3">
                <div className="w-6 h-6 text-blue-400 mr-4 flex-shrink-0 mt-1">
                  ✉️
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start animate-fade-in-up-delay-4">
                <div className="w-6 h-6 text-blue-400 mr-4 flex-shrink-0 mt-1">
                  📍
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p className="text-gray-300">{contactInfo.address}</p>
                </div>
              </motion.div>

              {/* Hours */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-start"
              >
                <div className="w-6 h-6 text-blue-400 mr-4 flex-shrink-0 mt-1">
                  🕒
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Hours</h3>
                  <div className="space-y-1 text-gray-300">
                    <p><span className="font-medium">Mon-Fri:</span> {contactInfo.hours.weekdays}</p>
                    {contactInfo.hours.saturday && (
                      <p><span className="font-medium">Saturday:</span> {contactInfo.hours.saturday}</p>
                    )}
                    {contactInfo.hours.sunday && (
                      <p><span className="font-medium">Sunday:</span> {contactInfo.hours.sunday}</p>
                    )}
                    {contactInfo.hours.emergency && (
                      <p className="text-red-300 font-medium">{contactInfo.hours.emergency}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Social Media */}
            {contactInfo.socialMedia && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-8"
              >
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {contactInfo.socialMedia.facebook && (
                    <a href={contactInfo.socialMedia.facebook} className="text-gray-300 hover:text-white transition-colors">
                      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">📘</div>
                    </a>
                  )}
                  {contactInfo.socialMedia.instagram && (
                    <a href={contactInfo.socialMedia.instagram} className="text-gray-300 hover:text-white transition-colors">
                      <div className="w-10 h-10 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">📷</div>
                    </a>
                  )}
                  {contactInfo.socialMedia.twitter && (
                    <a href={contactInfo.socialMedia.twitter} className="text-gray-300 hover:text-white transition-colors">
                      <div className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center">🐦</div>
                    </a>
                  )}
                </div>
              </motion.div>
            )}
          </div>

          {/* Map Placeholder */}
          {showMap && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:pl-8"
            >
              <div className="bg-gray-800 rounded-2xl p-8 h-96 flex items-center justify-center border border-gray-700">
                <div className="text-center">
                  <div className="text-6xl mb-4">🗺️</div>
                  <h3 className="text-xl font-semibold mb-2">Find Us in McKinney</h3>
                  <p className="text-gray-400 mb-4">
                    Serving all of Collin County and surrounding areas
                  </p>
                  <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition-colors">
                    Get Directions
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="border-t border-gray-700 mt-16 pt-8 text-center"
        >
          <p className="text-gray-400">
            © 2024 {businessName}. All rights reserved. | Licensed & Insured
          </p>
        </motion.div>
      </div>
    </section>
  )
}