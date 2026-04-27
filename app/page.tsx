'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ExternalLink, MapPin } from 'lucide-react'

export default function HomePage() {
  const experiences = [
    {
      title: 'Web Designer & SEO Specialist',
      company: 'Avos Inc',
      location: 'Portland, Oregon',
      year: '2026',
    },
    {
      title: 'SEO & Digital Marketing Specialist',
      company: 'Freelance',
      location: 'Remote',
      year: '2024',
    },
  ]

  const techStack = {
    frontend: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
    backend: ['Node.js', 'Python', 'PHP', 'PostgreSQL', 'MongoDB'],
    devops: ['AWS', 'Docker', 'GitHub Actions'],
  }

  const projects = [
    {
      title: 'Avos Inc',
      description: 'Corporate website with portfolio showcase',
    },
    {
      title: 'Lemon Drop Campers',
      description: 'E-commerce platform for RV rentals',
    },
    {
      title: 'Rays Ukulele',
      description: 'Musical instrument e-commerce store',
    },
    {
      title: 'Western Sport Floors',
      description: 'Sports facility flooring services website',
    },
  ]

  const certifications = [
    { title: 'SEO Certification', issuer: 'Google' },
    { title: 'WordPress Developer', issuer: 'Udemy' },
    { title: 'Digital Marketing', issuer: 'HubSpot' },
  ]

  const recommendations = [
    {
      quote: 'Professional, reliable, and always delivers quality work on time.',
      author: 'John Doe',
      title: 'Marketing Director',
    },
    {
      quote: 'Excellent web developer with strong SEO knowledge and attention to detail.',
      author: 'Jane Smith',
      title: 'Business Owner',
    },
  ]

  const galleries = [
    '/images/avosinc.png',
    '/images/goldenbiotechnologies.png',
    '/images/mcweldingservicellc.png',
    '/images/westernsportsfloor.png',
    '/images/profile-transparent.png',
  ]

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <section className="mb-20 pb-20 border-b border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column */}
            <div className="lg:col-span-2">
              {/* Profile */}
              <div className="flex gap-6 mb-12">
                <div className="w-28 h-28 flex-shrink-0 rounded-lg overflow-hidden">
                  <Image
                    src="/images/profile-transparent.png"
                    alt="Profile"
                    width={112}
                    height={112}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h1 className="text-3xl font-bold text-black mb-1">Build & Rank</h1>
                  <div className="flex items-center gap-2 text-gray-600 text-sm mb-3">
                    <MapPin className="w-4 h-4" />
                    <span>Remote, Worldwide</span>
                  </div>
                  <p className="text-gray-700 font-medium mb-4">Web Designer | SEO Specialist | Digital Marketer</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge className="bg-blue-100 text-blue-700 border-0">Web Development</Badge>
                    <Badge className="bg-green-100 text-green-700 border-0">SEO Expert</Badge>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 mb-12">
                <a href="https://calendly.com/dlcrzad/build-rank" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-black text-white hover:bg-gray-800">Schedule a Call</Button>
                </a>
                <a href="mailto:dlcrzad@gmail.com">
                  <Button variant="outline" className="border-gray-300">Send Email</Button>
                </a>
                <Link href="/blog">
                  <Button variant="outline" className="border-gray-300">Read my blog</Button>
                </Link>
              </div>

              {/* About Section */}
              <section className="mb-16 pb-16 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-black mb-4">About</h2>
                <div className="text-gray-700 space-y-4 text-sm leading-relaxed">
                  <p>
                    I&apos;m a web designer and SEO specialist with expertise in building modern web applications,
                    optimizing for search engines, and creating digital marketing strategies. I work with businesses
                    to improve their online presence and drive meaningful results.
                  </p>
                  <p>
                    I&apos;ve helped startups and small businesses grow their digital footprint through strategic
                    SEO implementation, website design, and content optimization. I&apos;m passionate about sharing
                    knowledge and staying current with industry trends.
                  </p>
                  <p>
                    My focus is on creating user-friendly websites that perform well in search results and convert
                    visitors into customers. I combine technical expertise with creative design to deliver
                    comprehensive digital solutions.
                  </p>
                </div>
              </section>

              {/* Tech Stack */}
              <section className="mb-16 pb-16 border-b border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-black">Tech Stack</h2>
                  <Link href="/tech-stack" className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1">
                    View All <ExternalLink className="w-3 h-3" />
                  </Link>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-black mb-3 text-sm">Frontend</h3>
                    <div className="flex flex-wrap gap-2">
                      {techStack.frontend.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-gray-100 text-gray-700 border-0">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-black mb-3 text-sm">Backend</h3>
                    <div className="flex flex-wrap gap-2">
                      {techStack.backend.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-gray-100 text-gray-700 border-0">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-black mb-3 text-sm">DevOps & Cloud</h3>
                    <div className="flex flex-wrap gap-2">
                      {techStack.devops.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-gray-100 text-gray-700 border-0">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Recent Projects */}
              <section className="mb-16 pb-16 border-b border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-black">Recent Projects</h2>
                  <Link href="/projects" className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1">
                    View All <ExternalLink className="w-3 h-3" />
                  </Link>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {projects.map((project, index) => (
                    <div key={index} className="border border-gray-200 rounded p-6 hover:border-gray-400 hover:shadow-sm transition-all">
                      <h3 className="font-bold text-black mb-2 text-sm hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-xs">{project.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Recent Certifications */}
              <section className="mb-16">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-black">Recent Certifications</h2>
                  <Link href="/certifications" className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1">
                    View All <ExternalLink className="w-3 h-3" />
                  </Link>
                </div>

                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="py-3 border-b border-gray-200 last:border-b-0">
                      <p className="font-semibold text-black text-sm">{cert.title}</p>
                      <p className="text-gray-600 text-xs">{cert.issuer}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Gallery */}
              <section>
                <h2 className="text-2xl font-bold text-black mb-6">Gallery</h2>
                <div className="grid grid-cols-5 gap-4">
                  {galleries.map((img, index) => (
                    <div key={index} className="aspect-square rounded overflow-hidden bg-gray-100">
                      <Image
                        src={img}
                        alt={`Gallery ${index + 1}`}
                        width={150}
                        height={150}
                        className="w-full h-full object-cover hover:scale-110 transition-transform"
                      />
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-1">
              {/* Experience */}
              <section className="mb-12 sticky top-20">
                <h2 className="text-xl font-bold text-black mb-6">Experience</h2>
                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <div key={index}>
                      <div className="flex items-start justify-between mb-1">
                        <h3 className="font-bold text-black text-xs">{exp.title}</h3>
                        <span className="text-gray-500 text-xs whitespace-nowrap ml-2">{exp.year}</span>
                      </div>
                      <p className="text-gray-600 text-xs font-medium">{exp.company}</p>
                      <p className="text-gray-500 text-xs">{exp.location}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Recommendations */}
              <section className="border-t pt-12">
                <h2 className="text-xl font-bold text-black mb-6">Recommendations</h2>
                <div className="space-y-8">
                  {recommendations.map((rec, index) => (
                    <div key={index} className="border-b pb-8 last:border-b-0">
                      <blockquote className="text-gray-700 text-xs italic mb-3 leading-relaxed">
                        "{rec.quote}"
                      </blockquote>
                      <p className="font-semibold text-black text-xs">{rec.author}</p>
                      <p className="text-gray-600 text-xs">{rec.title}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
