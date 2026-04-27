'use client'

import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ArrowLeft } from 'lucide-react'

export default function CertificationsPage() {
  const certifications = [
    {
      title: 'SEO Certification',
      issuer: 'Google',
      date: '2024',
    },
    {
      title: 'WordPress Developer Certification',
      issuer: 'Udemy',
      date: '2023',
    },
    {
      title: 'Digital Marketing Professional',
      issuer: 'HubSpot',
      date: '2023',
    },
    {
      title: 'Google Analytics Certification',
      issuer: 'Google',
      date: '2022',
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
        <h1 className="text-3xl font-bold text-black mb-12">Recent Certifications</h1>

        {/* Certifications List */}
        <div className="space-y-4">
          {certifications.map((cert, index) => (
            <div key={index} className="py-4 border-b border-gray-200 last:border-b-0">
              <p className="font-semibold text-black text-sm">{cert.title}</p>
              <p className="text-gray-600 text-xs">{cert.issuer}</p>
              <p className="text-gray-500 text-xs">{cert.date}</p>
            </div>
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
