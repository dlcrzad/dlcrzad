"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Mail,
  Star,
  ChevronDown,
  ExternalLink,
  Calendar,
  Award,
  Code,
  Palette,
  Search,
  TrendingUp,
} from "lucide-react"
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
    <div className="min-h-screen bg-soft-black">
      <SiteHeader />

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`space-y-8 ${isVisible ? "animate-slide-in-up" : "opacity-0"}`}>
            {/* Profile Image */}
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-warm-yellow shadow-2xl hover-lift glow-on-hover">
              <Image
                src="/images/profile-transparent.png"
                alt="Adeline Cruz - Web Developer & SEO Expert"
                width={128}
                height={128}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            {/* Main Content */}
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">Hi, I'm Adeline!</h1>
              <h2 className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                I help business owners manage and update their websites and make web design revisions.
                <br />
                <br />
                (And yes, I handle SEO & solve other tech related problems.)
              </h2>
              <p className="text-lg text-gray-400 pt-4">How can I help?</p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://calendly.com/dlcrzad/build-rank" target="_blank" rel="noopener noreferrer">
                <Button className="bg-warm-yellow hover:bg-warm-yellow/90 text-black px-8 py-3 rounded-full text-lg font-medium hover-lift glow-on-hover">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <Link href="/projects">
                <Button
                  variant="outline"
                  className="border-warm-yellow text-warm-yellow hover:bg-warm-yellow hover:text-black px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 bg-transparent"
                >
                  View My Work
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-warm-yellow">10+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-warm-yellow">2+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-warm-yellow">100%</div>
                <div className="text-sm text-gray-400">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Clients Say Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Clients Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take my word for it. Here's what my clients have to say about working with me.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Card className="bg-charcoal border-warm-yellow/20 hover:border-warm-yellow/50 transition-all duration-300 hover-lift fade-in-up">
              <CardHeader>
                <CardTitle className="text-white text-lg">
                  <a href="https://prairiegiraffe.com" target="_blank" rel="noopener noreferrer" className="hover:text-warm-yellow transition-colors">
                    Kellee Carroll
                  </a>
                </CardTitle>
                <CardDescription className="text-gray-400">Founder, Prairie Giraffe</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 italic">
                  "Adeline Dela Cruz is an outstanding Virtual Assistant who provided valuable support with web design, seo, administrative tasks, and email management. Her attention to detail, creativity, and organizational skills greatly enhanced my productivity. Adeline consistently delivered quality work and handled multiple responsibilities. I highly recommend her to anyone seeking a reliable and skilled VA. She is a true professional and will be a tremendous asset to any team."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-charcoal">
        <div className="max-w-4xl mx-auto text-center fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Grow Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's work together to create a powerful online presence that drives results. Schedule a free consultation
            to discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://calendly.com/dlcrzad/build-rank" target="_blank" rel="noopener noreferrer">
              <Button className="bg-warm-yellow hover:bg-warm-yellow/90 text-black px-8 py-4 rounded-full text-lg font-medium hover-lift glow-on-hover">
                Schedule Free Consultation
                <Calendar className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-warm-yellow text-warm-yellow hover:bg-warm-yellow hover:text-black px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 bg-transparent"
              >
                Send Message
                <Mail className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
