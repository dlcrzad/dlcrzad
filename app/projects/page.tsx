"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Calendar } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function ProjectsPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [filter, setFilter] = useState("All")

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

  const projects = [
    {
      title: "Avos Inc",
      description:
        "Corporate website for premium wrought iron engineering company with portfolio showcase and SEO optimization.",
      image: "/images/avos-inc.webp",
      category: "Corporate",
      tags: ["Web Development", "SEO", "Portfolio"],
      liveUrl: "avosinc.com",
      year: "2024",
      client: "Avos Inc",
      duration: "3 months",
      results: [
        "Improved search visibility",
        "Enhanced portfolio showcase",
        "Better client inquiry system",
      ],
    },
    {
      title: "Lemon Drop Campers",
      description:
        "Travel and campervan affiliate website with comprehensive SEO strategy, campground guides, and itinerary content.",
      image: "/images/lemon-drop-campers.webp",
      category: "Travel",
      tags: ["SEO", "Content Strategy", "Affiliate"],
      liveUrl: "https://lemondropcampers.com",
      year: "2025",
      client: "Lemon Drop Campers",
      duration: "Ongoing",
      results: [
        "SEO-driven content strategy",
        "On-page optimization",
        "Internal linking improvements",
      ],
    },
    {
      title: "Ray's Ukulele Hawaii",
      description:
        "Ukulele shop website with product catalog, music education resources, and community engagement features.",
      image: "/images/rays-ukulele.webp",
      category: "E-commerce",
      tags: ["E-commerce", "Product Catalog", "SEO"],
      liveUrl: "https://raysukulele.com",
      year: "2025",
      client: "Ray's Ukulele Hawaii",
      duration: "2 months",
      results: [
        "Product visibility increase",
        "Enhanced user experience",
        "Community building",
      ],
    },
    {
      title: "Golden Biotechnologies",
      description:
        "Professional biotech company website with scientific content management and research showcase.",
      image: "/images/goldenbiotechnologies.png",
      category: "Healthcare",
      tags: ["Corporate Website", "CMS", "Research"],
      liveUrl: "https://goldenbiotechnologies.com",
      year: "2024-2025",
      client: "Golden Biotechnologies",
      duration: "4 months",
      results: [
        "Professional credibility",
        "Research showcase",
        "Stakeholder engagement",
      ],
    },
    {
      title: "GBT - EMEA",
      description:
        "European division website with multi-region support, localization, and regional content management.",
      image: "/images/gbt-emea.webp",
      category: "Corporate",
      tags: ["Localization", "Multi-region", "CMS"],
      liveUrl: "https://gbt-emea.com",
      year: "2024",
      client: "GBT - EMEA",
      duration: "3 months",
      results: [
        "Regional targeting",
        "Localization support",
        "Enhanced reach",
      ],
    },
    {
      title: "SoCal Biosys",
      description:
        "Biotech systems company website with technical documentation, product information, and industry credibility.",
      image: "/images/goldenbiotechnologies.png",
      category: "Healthcare",
      tags: ["Technical Documentation", "Product Info", "B2B"],
      liveUrl: "https://socalbiosys.com",
      year: "2024",
      client: "SoCal Biosys",
      duration: "3 months",
      results: [
        "Technical credibility",
        "Documentation showcase",
        "Lead generation",
      ],
    },
    {
      title: "MC Welding Service",
      description:
        "Industrial service website with project gallery, customer testimonials, and comprehensive service booking system.",
      image: "/images/mcweldingservicellc.png",
      category: "Industrial",
      tags: ["Service Website", "Portfolio", "Booking System"],
      liveUrl: "https://mcweldingservice.com",
      year: "2023",
      client: "MC Welding Service LLC",
      duration: "2 months",
      results: ["Service inquiry increase", "Portfolio showcase", "Customer trust"],
    },
    {
      title: "Western Sport Floors",
      description:
        "Sports flooring company website with product catalog, installation gallery, and quote request system.",
      image: "/images/westernsportsfloor.png",
      category: "Sports",
      tags: ["E-commerce", "Product Catalog", "Gallery"],
      liveUrl: "https://westernsportfloors.com",
      year: "2023",
      client: "Western Sport Floors",
      duration: "3 months",
      results: ["Quote request increase", "Product visibility", "Enhanced UX"],
    },
    {
      title: "Glenrock Energy",
      description:
        "Energy company website with sustainability focus, innovative energy solutions showcase, and technical resources.",
      image: "/images/glenrock-energy.webp",
      category: "Energy",
      tags: ["Corporate", "Sustainability", "Technical"],
      liveUrl: "https://glenrockenergy.com",
      year: "2023",
      client: "Glenrock Energy",
      duration: "3 months",
      results: [
        "Sustainability messaging",
        "Technical credibility",
        "B2B lead generation",
      ],
    },
    {
      title: "Extreme Precision",
      description:
        "Precision manufacturing company website showcasing technical expertise, quality standards, and industrial solutions.",
      image: "/images/extreme-precision.webp",
      category: "Manufacturing",
      tags: ["Industrial", "Manufacturing", "B2B"],
      liveUrl: "https://extremeprecision.com",
      year: "2023",
      client: "Extreme Precision",
      duration: "2 months",
      results: [
        "Technical showcase",
        "Quality emphasis",
        "Client inquiry growth",
      ],
    },
  ]

  const categories = ["All", "Corporate", "Healthcare", "Industrial", "Sports", "E-commerce"]

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

  return (
    <div className="min-h-screen bg-soft-black">
      <SiteHeader />

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className={`text-4xl md:text-6xl font-bold text-white mb-6 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
          >
            My Recent
            <span className="text-warm-yellow block">Projects</span>
          </h1>
          <p
            className={`text-xl text-gray-300 max-w-3xl mx-auto ${isVisible ? "animate-fade-in animate-delay-200" : "opacity-0"}`}
          >
            Explore a collection of websites and digital solutions I've created for clients across various industries.
            Each project showcases my commitment to quality, performance, and results.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 fade-in-up">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setFilter(category)}
                variant={filter === category ? "default" : "outline"}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  filter === category
                    ? "bg-warm-yellow text-black hover:bg-warm-yellow/90"
                    : "border-warm-yellow/30 text-warm-yellow hover:bg-warm-yellow hover:text-black"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={index}
                className={`bg-charcoal border-warm-yellow/20 hover:border-warm-yellow/50 transition-all duration-300 hover-lift fade-in-up animate-delay-${(index + 1) * 100} group overflow-hidden`}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <Button className="bg-warm-yellow hover:bg-warm-yellow/90 text-black">
                      View Live
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-white text-xl">{project.title}</CardTitle>
                      <CardDescription className="text-gray-300 mt-2">{project.description}</CardDescription>
                    </div>
                    <Badge variant="outline" className="border-warm-yellow/30 text-warm-yellow">
                      {project.year}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Client:</span>
                      <p className="text-white font-medium">{project.client}</p>
                    </div>
                    <div>
                      <span className="text-gray-400">Duration:</span>
                      <p className="text-white font-medium">{project.duration}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {project.results.map((result, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-start">
                          <div className="w-1.5 h-1.5 bg-warm-yellow rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="border-warm-yellow/30 text-warm-yellow text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-charcoal">
        <div className="max-w-4xl mx-auto text-center fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Schedule a consultation to discuss your project and see how I can
            help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://calendly.com/dlcrzad/build-rank" target="_blank" rel="noopener noreferrer">
              <Button className="bg-warm-yellow hover:bg-warm-yellow/90 text-black px-8 py-3 rounded-full font-medium hover-lift glow-on-hover">
                Schedule Consultation
                <Calendar className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-warm-yellow text-warm-yellow hover:bg-warm-yellow hover:text-black px-8 py-3 rounded-full font-medium transition-all duration-300 bg-transparent"
              >
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
