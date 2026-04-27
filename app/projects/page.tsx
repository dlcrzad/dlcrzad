'use client'

import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ArrowLeft, ExternalLink } from 'lucide-react'

export default function ProjectsPage() {
  const projects = [
    {
      title: 'Avos Inc',
      description: 'Corporate website with portfolio showcase and SEO optimization.',
      url: 'avosinc.com',
    },
    {
      title: 'Lemon Drop Campers',
      description: 'Travel affiliate website with comprehensive guides and itineraries.',
      url: '#',
    },
    {
      title: 'Rays Ukulele',
      description: 'E-commerce website for musical instrument shop.',
      url: '#',
    },
    {
      title: 'Western Sport Floors',
      description: 'Sports facility flooring services website.',
      url: '#',
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
        <h1 className="text-3xl font-bold text-black mb-12">Recent Projects</h1>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              className="block border border-gray-200 rounded p-6 hover:border-gray-400 hover:shadow-sm transition-all group"
            >
              <h3 className="font-bold text-black mb-2 group-hover:text-blue-600 transition-colors text-sm">
                {project.title}
              </h3>
              <p className="text-gray-600 text-xs">{project.description}</p>
              {project.url !== '#' && (
                <div className="flex items-center gap-1 mt-4 text-blue-600 text-xs">
                  Visit <ExternalLink className="w-3 h-3" />
                </div>
              )}
            </a>
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
