'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const allDemos = [
  '/demos/dental',
  '/demos/dental-2',
  '/demos/dental-3',
  '/demos/hvac',
  '/demos/hvac-2',
  '/demos/hvac-3',
  '/demos/medspa',
  '/demos/medspa-2',
  '/demos/medspa-3',
  '/demos/law',
  '/demos/law-2',
  '/demos/law-3',
]

export default function DemoNav() {
  const pathname = usePathname()
  const currentIndex = allDemos.indexOf(pathname)
  if (currentIndex === -1) return null

  const prevIndex = currentIndex === 0 ? allDemos.length - 1 : currentIndex - 1
  const nextIndex = currentIndex === allDemos.length - 1 ? 0 : currentIndex + 1

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center gap-2">
      {/* Back to Liow Digital */}
      <Link
        href="/"
        className="bg-white text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-4 py-2.5 rounded-full shadow-lg border border-gray-200 text-sm font-medium flex items-center gap-2 transition-all"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4" />
        </svg>
        Liow Digital
      </Link>

      {/* Template Switcher */}
      <div className="flex items-center gap-1 bg-white rounded-full shadow-lg border border-gray-200 px-1 py-1">
        <Link
          href={allDemos[prevIndex]}
          className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-600 hover:text-gray-900 transition-colors"
          title="Previous template"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <span className="text-xs text-gray-400 font-medium px-1 select-none">
          {currentIndex + 1}/{allDemos.length}
        </span>
        <Link
          href={allDemos[nextIndex]}
          className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-600 hover:text-gray-900 transition-colors"
          title="Next template"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  )
}
