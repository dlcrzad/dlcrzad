"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Mail, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".fade-in-up, .fade-in-left, .fade-in-right, .scale-in")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      {/* Hero Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className={`space-y-8 ${isVisible ? "animate-slide-in-up" : "opacity-0"}`}>
            {/* Profile Image */}
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-300 shadow-sm">
              <Image
                src="/images/profile-transparent.png"
                alt="Adeline Cruz - Web Developer & SEO Expert"
                width={96}
                height={96}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            {/* Main Content */}
            <div className="space-y-6">
              <h1 className="text-5xl font-bold text-black leading-tight">Hi, I'm Adeline</h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                I help business owners build and maintain their online presence through web design, development, and SEO optimization. I solve technical problems and drive measurable results.
              </p>

              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="https://calendly.com/dlcrzad/build-rank" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-black hover:bg-gray-800 text-white px-8 py-6 rounded font-medium text-base">
                    Schedule a Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <a href="mailto:dlcrzad@gmail.com">
                  <Button className="border border-gray-300 hover:bg-gray-50 text-black px-8 py-6 rounded font-medium text-base">
                    Send Email
                    <Mail className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <a href="https://github.com" className="text-gray-600 hover:text-black transition-colors">
                  <Github className="h-6 w-6" />
                </a>
                <a href="https://linkedin.com" className="text-gray-600 hover:text-black transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="fade-in-up">
            <h2 className="text-3xl font-bold text-black mb-12">Experience</h2>
            <div className="space-y-8">
              <div className="pb-8 border-b border-gray-200 last:border-b-0">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-black">Web Designer & SEO Specialist</h3>
                    <p className="text-gray-600">Avos Inc</p>
                  </div>
                  <span className="text-sm text-gray-500">2024 - Present</span>
                </div>
                <p className="text-gray-600 mt-2">Designed and updated corporate website with focus on usability and SEO optimization. Improved search visibility and user experience across all devices.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="fade-in-up">
            <h2 className="text-3xl font-bold text-black mb-12">Projects</h2>
            <div className="space-y-8">
              {[
                {
                  title: "Avos Inc",
                  description: "Corporate website with portfolio showcase and SEO optimization for premium engineering company.",
                  tags: ["Web Development", "SEO", "Portfolio"],
                },
                {
                  title: "Lemon Drop Campers",
                  description: "Travel affiliate website with comprehensive guides, itineraries, and SEO-optimized content.",
                  tags: ["SEO", "Content Strategy", "Affiliate"],
                },
                {
                  title: "Ray's Ukulele Hawaii",
                  description: "E-commerce website for ukulele shop with product catalog and music education resources.",
                  tags: ["E-commerce", "Product Catalog", "SEO"],
                },
              ].map((project, index) => (
                <div key={index} className="pb-8 border-b border-gray-200 last:border-b-0">
                  <h3 className="text-xl font-semibold text-black">{project.title}</h3>
                  <p className="text-gray-600 mt-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} className="bg-gray-100 text-gray-700 hover:bg-gray-200">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/projects">
              <Button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded font-medium">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="fade-in-up">
            <h2 className="text-3xl font-bold text-black mb-12">Tech Stack</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-black mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"].map((tech, i) => (
                    <Badge key={i} className="bg-gray-100 text-gray-700">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black mb-4">Tools & Services</h3>
                <div className="flex flex-wrap gap-2">
                  {["WordPress", "Vercel", "Git", "SEO Tools", "Google Analytics", "Figma"].map((tech, i) => (
                    <Badge key={i} className="bg-gray-100 text-gray-700">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 px-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="fade-in-up">
            <h2 className="text-3xl font-bold text-black mb-12">Latest Articles</h2>
            <div className="space-y-8">
              {[
                {
                  title: "SEO Strategies for 2024",
                  excerpt: "Explore the latest SEO best practices and strategies to improve your website's search visibility.",
                  date: "2024",
                },
                {
                  title: "10 Ways to Speed Up WordPress",
                  excerpt: "Essential tips to optimize your WordPress site performance and improve user experience.",
                  date: "2024",
                },
              ].map((article, index) => (
                <Link href="/blog" key={index}>
                  <div className="pb-8 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 -mx-4 px-4 py-4 rounded cursor-pointer transition-colors">
                    <h3 className="text-lg font-semibold text-black">{article.title}</h3>
                    <p className="text-gray-600 mt-2">{article.excerpt}</p>
                    <span className="text-sm text-gray-500 mt-4 block">{article.date}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center fade-in-up">
          <h2 className="text-3xl font-bold text-black mb-6">Ready to get started?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and how I can help you build and grow your online presence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://calendly.com/dlcrzad/build-rank" target="_blank" rel="noopener noreferrer">
              <Button className="bg-black hover:bg-gray-800 text-white px-8 py-6 rounded font-medium text-base">
                Schedule a Call
              </Button>
            </a>
            <a href="mailto:dlcrzad@gmail.com">
              <Button className="border border-gray-300 hover:bg-gray-50 text-black px-8 py-6 rounded font-medium text-base">
                Send Email
              </Button>
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
