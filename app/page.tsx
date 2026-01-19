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
                I create stunning WordPress websites,
              </h2>
              <h2 className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                (And yes, I handle SEO &amp; digital marketing too.)
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

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <ChevronDown className="h-8 w-8 text-warm-yellow animate-bounce-gentle" />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-charcoal">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Services That Drive Results</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From concept to launch, I provide comprehensive digital solutions that help your business thrive online.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="h-8 w-8" />,
                title: "Web Development",
                description:
                  "Custom websites built with modern technologies for optimal performance and user experience.",
                features: ["Responsive Design", "Fast Loading", "SEO Optimized", "Mobile First"],
              },
              {
                icon: <Search className="h-8 w-8" />,
                title: "SEO Optimization",
                description: "Comprehensive SEO strategies to improve your search rankings and drive organic traffic.",
                features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Content Strategy"],
              },
              {
                icon: <Palette className="h-8 w-8" />,
                title: "UI/UX Design",
                description:
                  "Beautiful, intuitive designs that convert visitors into customers and enhance user satisfaction.",
                features: ["User Research", "Wireframing", "Prototyping", "Visual Design"],
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "Digital Marketing",
                description: "Strategic marketing campaigns to increase your online visibility and grow your business.",
                features: ["Social Media", "Content Marketing", "PPC Campaigns", "Analytics"],
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Brand Identity",
                description: "Complete brand identity solutions including logos, color schemes, and brand guidelines.",
                features: ["Logo Design", "Brand Guidelines", "Color Palette", "Typography"],
              },
              {
                icon: <Calendar className="h-8 w-8" />,
                title: "Consultation",
                description:
                  "Expert advice and strategic planning to help you make informed decisions about your digital presence.",
                features: ["Strategy Planning", "Technical Audit", "Competitor Analysis", "Growth Planning"],
              },
            ].map((service, index) => (
              <Card
                key={index}
                className={`bg-soft-black border-warm-yellow/20 hover:border-warm-yellow/50 transition-all duration-300 hover-lift fade-in-up animate-delay-${(index + 1) * 100}`}
              >
                <CardHeader>
                  <div className="text-warm-yellow mb-4">{service.icon}</div>
                  <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-gray-300">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-400 text-sm flex items-center">
                        <div className="w-1.5 h-1.5 bg-warm-yellow rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Take a look at some of my recent work and see how I've helped businesses achieve their digital goals.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Avos Inc",
                description: "Modern corporate website with advanced SEO optimization and lead generation features.",
                image: "/images/avosinc.png",
                tags: ["Web Development", "SEO", "Lead Generation"],
                link: "/projects/avos-inc",
              },
              {
                title: "Golden Biotechnologies",
                description:
                  "Professional biotech company website with scientific content management and research showcase.",
                image: "/images/goldenbiotechnologies.png",
                tags: ["Corporate Website", "CMS", "Research Portal"],
                link: "/projects/golden-biotechnologies",
              },
              {
                title: "MC Welding Service",
                description: "Industrial service website with project gallery and customer testimonials.",
                image: "/images/mcweldingservicellc.png",
                tags: ["Service Website", "Portfolio", "Testimonials"],
                link: "/projects/mc-welding-service",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className={`bg-charcoal border-warm-yellow/20 hover:border-warm-yellow/50 transition-all duration-300 hover-lift fade-in-up animate-delay-${(index + 1) * 100} group overflow-hidden`}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Link
                    href={project.link}
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <Button className="bg-warm-yellow hover:bg-warm-yellow/90 text-black">
                      View Project
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <CardHeader>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <CardDescription className="text-gray-300">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="border-warm-yellow/30 text-warm-yellow">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12 fade-in-up">
            <Link href="/projects">
              <Button className="bg-warm-yellow hover:bg-warm-yellow/90 text-black px-8 py-3 rounded-full text-lg font-medium hover-lift">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 px-6 bg-charcoal">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About Me</h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  Hi, I'm Adeline Cruz, a Web Designer & SEO Specialist based in Angadanan, Isabela, Philippines. I help travel companies, tech startups, and wrought iron engineering firms build beautiful WordPress websites that rank and convert.
                </p>
                <p>
                  Since August 2022, I've been designing websites with WordPress, Bricks, and Elementor while managing comprehensive SEO strategies. My clients include Lemon Drop Campers, Avos Inc., and Golden Biotechnologies—companies that needed WordPress expertise and SEO-driven content strategy to compete online.
                </p>
                <p>
                  I specialize in on-page and technical SEO, WordPress optimization, and affiliate site management. From fixing non-indexed URLs to optimizing backend operations, I ensure your website performs flawlessly.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link href="/experience">
                  <Button className="bg-warm-yellow hover:bg-warm-yellow/90 text-black px-6 py-3 rounded-full font-medium hover-lift">
                    View Experience
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="border-warm-yellow text-warm-yellow hover:bg-warm-yellow hover:text-black px-6 py-3 rounded-full font-medium transition-all duration-300 bg-transparent"
                  >
                    Get In Touch
                  </Button>
                </Link>
              </div>
            </div>
            <div className="fade-in-right">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-soft-black p-6 rounded-2xl border border-warm-yellow/20 hover:border-warm-yellow/50 transition-all duration-300 hover-lift">
                  <div className="text-2xl font-bold text-warm-yellow mb-2">10+</div>
                  <div className="text-gray-300">Projects Completed</div>
                </div>
                <div className="bg-soft-black p-6 rounded-2xl border border-warm-yellow/20 hover:border-warm-yellow/50 transition-all duration-300 hover-lift">
                  <div className="text-2xl font-bold text-warm-yellow mb-2">2+</div>
                  <div className="text-gray-300">Years Experience</div>
                </div>
                <div className="bg-soft-black p-6 rounded-2xl border border-warm-yellow/20 hover:border-warm-yellow/50 transition-all duration-300 hover-lift">
                  <div className="text-2xl font-bold text-warm-yellow mb-2">100%</div>
                  <div className="text-gray-300">Client Satisfaction</div>
                </div>
                <div className="bg-soft-black p-6 rounded-2xl border border-warm-yellow/20 hover:border-warm-yellow/50 transition-all duration-300 hover-lift">
                  <div className="text-2xl font-bold text-warm-yellow mb-2">24/7</div>
                  <div className="text-gray-300">Support Available</div>
                </div>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO, Tech Startup",
                content:
                  "Adeline transformed our online presence completely. Our website traffic increased by 300% within 3 months of launch.",
                rating: 5,
                image: "/placeholder-user.jpg",
              },
              {
                name: "Michael Chen",
                role: "Marketing Director",
                content:
                  "The SEO work Adeline did for us was exceptional. We're now ranking #1 for our main keywords and seeing incredible growth.",
                rating: 5,
                image: "/placeholder-user.jpg",
              },
              {
                name: "Emily Rodriguez",
                role: "Small Business Owner",
                content:
                  "Professional, reliable, and results-driven. Adeline delivered exactly what we needed and more. Highly recommended!",
                rating: 5,
                image: "/placeholder-user.jpg",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className={`bg-charcoal border-warm-yellow/20 hover:border-warm-yellow/50 transition-all duration-300 hover-lift fade-in-up animate-delay-${(index + 1) * 100}`}
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-white text-lg">{testimonial.name}</CardTitle>
                      <CardDescription className="text-gray-400">{testimonial.role}</CardDescription>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-warm-yellow text-warm-yellow" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
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
