'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ExternalLink, MapPin } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-max">

          {/* Profile Card - Col 1, Row span 2 */}
          <div className="md:col-span-1 md:row-span-2 border border-gray-200 rounded-lg p-6 space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
              <Image
                src="/images/profile-transparent.png"
                alt="Adeline Dela Cruz"
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-black">Adeline Dela Cruz</h1>
              <div className="flex items-center gap-2 text-gray-600 text-xs mt-2">
                <MapPin className="w-3 h-3" />
                <span>Remote, Worldwide</span>
              </div>
            </div>
          </div>

          {/* About Card - Col 3, Row 1 */}
          <div className="md:col-span-3 border border-gray-200 rounded-lg p-6 space-y-3">
            <h2 className="text-lg font-bold text-black">About</h2>
            <p className="text-xs text-gray-700 leading-relaxed">
              I&apos;m a web designer and SEO specialist focused on building fast, user-friendly websites and optimizing for search engines. I help businesses grow their online presence through strategic design and marketing.
            </p>
            <p className="text-xs text-gray-700 leading-relaxed">
              Experienced in WordPress development, technical SEO, and digital marketing strategies. I work with startups and businesses to create solutions that drive measurable results.
            </p>
          </div>

          {/* CTA Card - Col 3, Row 2 */}
          <div className="md:col-span-3 border border-gray-200 rounded-lg p-6 space-y-2">
            <a href="https://calendly.com/dlcrzad/build-rank" target="_blank" rel="noopener noreferrer" className="block">
              <Button className="bg-black hover:bg-gray-800 text-white w-full text-xs h-8">Schedule a Call</Button>
            </a>
            <a href="mailto:dlcrzad@gmail.com" className="block">
              <Button variant="outline" className="border-gray-300 w-full text-xs h-8">Send Email</Button>
            </a>
            <Link href="/blog" className="block">
              <Button variant="outline" className="border-gray-300 w-full text-xs h-8">Read my blog</Button>
            </Link>
          </div>

          {/* Tech Stack - Col 2, Row 3 */}
          <div className="md:col-span-2 border border-gray-200 rounded-lg p-6 space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-black">Tech Stack</h2>
              <Link href="/tech-stack" className="text-xs text-gray-600 hover:text-black flex items-center gap-1">
                View All <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
            <div className="space-y-2">
              <div>
                <h3 className="text-xs font-semibold text-black mb-1.5">Frontend</h3>
                <div className="flex flex-wrap gap-1">
                  {['React', 'Next.js', 'Tailwind CSS'].map(tech => (
                    <span key={tech} className="px-2 py-1 text-xs rounded bg-gray-50 text-gray-700 border border-gray-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xs font-semibold text-black mb-1.5">Backend</h3>
                <div className="flex flex-wrap gap-1">
                  {['PHP', 'Node.js', 'Python'].map(tech => (
                    <span key={tech} className="px-2 py-1 text-xs rounded bg-gray-50 text-gray-700 border border-gray-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Projects - Col 2, Row 3 */}
          <div className="md:col-span-2 border border-gray-200 rounded-lg p-6 space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-black">Recent Projects</h2>
              <Link href="/projects" className="text-xs text-gray-600 hover:text-black flex items-center gap-1">
                View All <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
            <div className="space-y-2">
              {[
                { title: 'Avos Inc', desc: 'Corporate website with portfolio' },
                { title: 'Lemon Drop Campers', desc: 'Travel affiliate website' }
              ].map(proj => (
                <div key={proj.title} className="py-2 border-b border-gray-100 last:border-b-0">
                  <p className="text-xs font-semibold text-black">{proj.title}</p>
                  <p className="text-xs text-gray-600">{proj.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Timeline - Col 1, Row span 3 */}
          <div className="md:col-span-1 md:row-span-3 border border-gray-200 rounded-lg p-6 space-y-4">
            <h2 className="text-lg font-bold text-black">Experience</h2>
            <div className="space-y-3">
              {[
                { title: 'Web Designer & SEO', company: 'Avos Inc', year: '2026' },
                { title: 'SEO Specialist', company: 'Freelance', year: '2024' },
              ].map((exp, i) => (
                <div key={i} className="relative pl-5">
                  <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full border-2 border-gray-400 bg-white"></div>
                  <h3 className="text-xs font-semibold text-black">{exp.title}</h3>
                  <p className="text-xs text-gray-600">{exp.company}</p>
                  <p className="text-[10px] font-mono text-gray-500">{exp.year}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications - Col 2, Row 4 */}
          <div className="md:col-span-2 border border-gray-200 rounded-lg p-6 space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-black">Certifications</h2>
              <Link href="/certifications" className="text-xs text-gray-600 hover:text-black flex items-center gap-1">
                View All <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
            <div className="space-y-2">
              {[
                { title: 'SEO Certification', issuer: 'Google' },
                { title: 'WordPress Developer', issuer: 'Udemy' }
              ].map(cert => (
                <div key={cert.title} className="py-2 border-b border-gray-100 last:border-b-0">
                  <p className="text-xs font-semibold text-black">{cert.title}</p>
                  <p className="text-xs text-gray-600">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Recommendations - Col 1, Row 4 */}
          <div className="md:col-span-1 border border-gray-200 rounded-lg p-6 space-y-3">
            <h2 className="text-lg font-bold text-black">Recommendations</h2>
            <div className="space-y-3">
              {[
                { quote: 'Professional and reliable.', author: 'John Doe' },
                { quote: 'Excellent SEO knowledge.', author: 'Jane Smith' }
              ].map((rec, i) => (
                <div key={i} className="py-2 border-b border-gray-100 last:border-b-0">
                  <p className="text-xs italic text-gray-700">"{rec.quote}"</p>
                  <p className="text-xs font-semibold text-black mt-1">{rec.author}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Articles - Col 2, Row 4 */}
          <div className="md:col-span-2 border border-gray-200 rounded-lg p-6 space-y-3">
            <h2 className="text-lg font-bold text-black">Recent Articles</h2>
            <div className="space-y-2">
              {['SEO Strategies for 2024', '10 Ways to Speed Up WordPress'].map(article => (
                <Link key={article} href="/blog" className="block py-2 border-b border-gray-100 last:border-b-0 hover:text-blue-600">
                  <p className="text-xs font-semibold text-black">{article}</p>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
