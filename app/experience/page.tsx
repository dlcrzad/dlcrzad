'use client'

import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ArrowLeft } from 'lucide-react'

export default function ExperiencePage() {
  const experiences = [
    {
      title: 'Web Designer & SEO Specialist',
      company: 'Avos Inc',
      location: 'Portland, Oregon',
      year: '2024 - 2026',
    },
    {
      title: 'Web Designer',
      company: 'Freelance Projects',
      location: 'Remote',
      year: '2022 - 2024',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <main className="max-w-2xl mx-auto px-6 py-16">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-black mb-12 text-sm">
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>

        {/* Page Title */}
        <h1 className="text-3xl font-bold text-black mb-12">Experience</h1>

        {/* Experiences */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="pb-12 border-b border-gray-200 last:border-b-0">
              <div className="flex items-start justify-between mb-2">
                <h2 className="text-xl font-bold text-black">{exp.title}</h2>
                <span className="text-sm text-gray-500">{exp.year}</span>
              </div>
              <p className="text-gray-600 font-medium">{exp.company}</p>
              <p className="text-gray-500 text-sm">{exp.location}</p>
            </div>
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
