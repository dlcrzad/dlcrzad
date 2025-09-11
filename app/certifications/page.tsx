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
    <div className="min-h-screen bg-black text-white font-sans">
      <SiteHeader />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-black">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold text-white mb-4 fade-in-up">Certifications</h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto fade-in-up animate-delay-100">
              Professional certifications and continuous learning in WordPress development, SEO, and digital marketing.
            </p>
          </div>
        </section>

        {/* Certifications Grid */}
        <section className="py-20 bg-black">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className={`bg-black rounded-lg p-8 border border-golden-yellow hover:border-golden-yellow/80 transition-all hover-lift glow-on-hover fade-in-up animate-delay-${
                    ((index % 2) + 1) * 100
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-golden-yellow/20 rounded-lg flex items-center justify-center hover:bg-golden-yellow/30 transition-colors duration-300">
                        <Award className="h-6 w-6 text-golden-yellow" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
                        <p className="text-golden-yellow font-medium">{cert.issuer}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-400">
                      <Calendar className="h-4 w-4" />
                      <span>{cert.date}</span>
                    </div>
                  </div>

                  <p className="text-gray-400 mb-4">{cert.description}</p>

                  <div className="mb-4">
                    <h4 className="text-white font-medium mb-2">Skills Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 bg-golden-yellow/20 text-golden-yellow rounded-full border border-golden-yellow/30 hover:bg-golden-yellow/30 transition-colors duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={cert.credentialUrl}
                    className="text-golden-yellow hover:text-golden-yellow/80 flex items-center gap-1 text-sm font-medium transition-colors duration-300"
                  >
                    View Credential <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-black">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-16 fade-in-up">Continuous Learning</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-black rounded-lg p-6 border border-golden-yellow hover:border-golden-yellow/80 transition-all hover-lift fade-in-up">
                <div className="text-3xl font-bold text-golden-yellow mb-2">6+</div>
                <p className="text-white font-medium mb-1">Certifications</p>
                <p className="text-gray-400 text-sm">Professional certifications earned</p>
              </div>

              <div className="bg-black rounded-lg p-6 border border-golden-yellow hover:border-golden-yellow/80 transition-all hover-lift fade-in-up animate-delay-100">
                <div className="text-3xl font-bold text-golden-yellow mb-2">50+</div>
                <p className="text-white font-medium mb-1">Hours</p>
                <p className="text-gray-400 text-sm">Of professional training completed</p>
              </div>

              <div className="bg-black rounded-lg p-6 border border-golden-yellow hover:border-golden-yellow/80 transition-all hover-lift fade-in-up animate-delay-200">
                <div className="text-3xl font-bold text-golden-yellow mb-2">2024</div>
                <p className="text-white font-medium mb-1">Latest Update</p>
                <p className="text-gray-400 text-sm">Most recent certification earned</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
