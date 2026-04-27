"use client"

import { useEffect } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ExternalLink, Award, Calendar } from "lucide-react"

export default function Certifications() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate")
        }
      })
    }, observerOptions)

    const animatedElements = document.querySelectorAll(".fade-in-up, .fade-in-left, .fade-in-right, .scale-in")
    animatedElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const certifications = [
    {
      title: "Google Analytics Individual Qualification",
      issuer: "Google",
      date: "2023",
      description:
        "Demonstrates proficiency in Google Analytics including planning and principles, implementation and data collection, configuration and administration, and conversion and attribution.",
      skills: ["Google Analytics", "Data Analysis", "Conversion Tracking", "Reporting"],
      credentialUrl: "#",
    },
    {
      title: "Google Ads Search Certification",
      issuer: "Google",
      date: "2023",
      description:
        "Covers basic and advanced concepts of Search advertising, including best practices for creating, managing, measuring, and optimizing Search ad campaigns.",
      skills: ["Google Ads", "Search Advertising", "Keyword Research", "Campaign Optimization"],
      credentialUrl: "#",
    },
    {
      title: "Google Ads Display Certification",
      issuer: "Google",
      date: "2023",
      description:
        "Demonstrates knowledge of how to create, manage, and optimize Display campaigns that drive results across the Google Display Network.",
      skills: ["Display Advertising", "Audience Targeting", "Creative Optimization", "Remarketing"],
      credentialUrl: "#",
    },
    {
      title: "SEO Fundamentals Course",
      issuer: "SEMrush Academy",
      date: "2022",
      description:
        "Comprehensive course covering SEO basics, keyword research, on-page optimization, technical SEO, and link building strategies.",
      skills: ["SEO Strategy", "Keyword Research", "On-Page SEO", "Technical SEO"],
      credentialUrl: "#",
    },
    {
      title: "Content Marketing Certification",
      issuer: "HubSpot Academy",
      date: "2022",
      description:
        "Covers content marketing strategy, content creation, content promotion, and measuring content marketing success.",
      skills: ["Content Strategy", "Content Creation", "Content Promotion", "Analytics"],
      credentialUrl: "#",
    },
    {
      title: "WordPress Development Fundamentals",
      issuer: "WordPress.org",
      date: "2021",
      description:
        "Comprehensive training on WordPress development including themes, plugins, customization, and best practices.",
      skills: ["WordPress Development", "PHP", "Theme Customization", "Plugin Development"],
      credentialUrl: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <main className="py-20">
        {/* Hero Section */}
        <section className="border-b border-gray-200 py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl font-bold text-black mb-4 fade-in-up">Certifications</h1>
            <p className="text-lg text-gray-600 max-w-2xl fade-in-up">
              Professional certifications and continuous learning in WordPress development, SEO, and digital marketing.
            </p>
          </div>
        </section>

        {/* Certifications Grid */}
        <section className="py-16 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-6">
            <div className="space-y-8">
              {certifications.map((cert, index) => (
                <div key={index} className="pb-8 border-b border-gray-200 last:border-b-0 last:pb-0 fade-in-up">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-black">{cert.title}</h3>
                      <p className="text-gray-600">{cert.issuer}</p>
                    </div>
                    <span className="text-sm text-gray-500">{cert.date}</span>
                  </div>

                  <p className="text-gray-600 mb-4">{cert.description}</p>

                  <div>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, i) => (
                        <span key={i} className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-black mb-12 fade-in-up text-center">Continuous Learning</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center fade-in-up p-6 border border-gray-200 rounded-lg">
                <div className="text-4xl font-bold text-black mb-2">6+</div>
                <p className="text-black font-medium mb-1">Certifications</p>
                <p className="text-gray-600 text-sm">Professional certifications earned</p>
              </div>

              <div className="text-center fade-in-up p-6 border border-gray-200 rounded-lg">
                <div className="text-4xl font-bold text-black mb-2">50+</div>
                <p className="text-black font-medium mb-1">Hours</p>
                <p className="text-gray-600 text-sm">Of professional training completed</p>
              </div>

              <div className="text-center fade-in-up p-6 border border-gray-200 rounded-lg">
                <div className="text-4xl font-bold text-black mb-2">2024</div>
                <p className="text-black font-medium mb-1">Latest Update</p>
                <p className="text-gray-600 text-sm">Most recent certification earned</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
