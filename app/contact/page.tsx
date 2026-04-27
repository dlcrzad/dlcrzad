'use client'

import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ArrowLeft, Mail, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ContactPage() {
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
        <h1 className="text-3xl font-bold text-black mb-6">Get In Touch</h1>

        <div className="space-y-12">
          {/* Contact Info */}
          <section>
            <p className="text-gray-700 mb-8 leading-relaxed">
              I'd love to hear from you. Whether you have a project in mind or want to discuss how I can help with
              your web design and SEO needs, feel free to reach out.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-600" />
                <div>
                  <p className="font-semibold text-black text-sm">Email</p>
                  <a href="mailto:dlcrzad@gmail.com" className="text-blue-600 hover:text-blue-700 text-sm">
                    dlcrzad@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-gray-600" />
                <div>
                  <p className="font-semibold text-black text-sm">Location</p>
                  <p className="text-gray-600 text-sm">Remote, Worldwide</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="border-t border-gray-200 pt-8">
            <h2 className="text-xl font-bold text-black mb-4">Schedule a Call</h2>
            <p className="text-gray-700 mb-6 text-sm leading-relaxed">
              Book a free consultation to discuss your project, goals, and how I can help you build and grow your
              online presence.
            </p>
            <a href="https://calendly.com/dlcrzad/build-rank" target="_blank" rel="noopener noreferrer">
              <Button className="bg-black text-white hover:bg-gray-800">Schedule a Call</Button>
            </a>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
