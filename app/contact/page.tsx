"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Mail, Phone, MapPin, Send, Calendar } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <div className="min-h-screen bg-soft-black">
      <SiteHeader />

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className={`text-4xl md:text-6xl font-bold text-white mb-6 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
          >
            Let's Work
            <span className="text-warm-yellow block">Together</span>
          </h1>
          <p
            className={`text-xl text-gray-300 max-w-3xl mx-auto ${isVisible ? "animate-fade-in animate-delay-200" : "opacity-0"}`}
          >
            Ready to bring your project to life? I'd love to hear about your ideas and discuss how I can help you
            achieve your digital goals.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="fade-in-left">
              <Card className="bg-charcoal border-warm-yellow/20 hover:border-warm-yellow/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Send Me a Message</CardTitle>
                  <CardDescription className="text-gray-300">
                    Fill out the form below and I'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-white">
                          Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="bg-soft-black border-warm-yellow/30 text-white placeholder-gray-400 focus:border-warm-yellow"
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-white">
                          Email
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="bg-soft-black border-warm-yellow/30 text-white placeholder-gray-400 focus:border-warm-yellow"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-white">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="bg-soft-black border-warm-yellow/30 text-white placeholder-gray-400 focus:border-warm-yellow"
                        placeholder="What's this about?"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-white">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="bg-soft-black border-warm-yellow/30 text-white placeholder-gray-400 focus:border-warm-yellow resize-none"
                        placeholder="Tell me about your project..."
                      />
                    </div>
                    <Button
                      type="submit"
                      className="bg-warm-yellow hover:bg-warm-yellow/90 text-black px-8 py-3 rounded-full font-medium w-full hover-lift glow-on-hover"
                    >
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-8 fade-in-right">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Get In Touch</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  I'm always excited to work on new projects and help businesses grow their online presence. Whether you
                  need a new website, SEO optimization, or digital marketing strategy, I'm here to help.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="bg-soft-black border-warm-yellow/20 hover:border-warm-yellow/50 transition-all duration-300 hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="text-warm-yellow">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">Email</h3>
                        <p className="text-gray-300">dlcrzad@gmail.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-soft-black border-warm-yellow/20 hover:border-warm-yellow/50 transition-all duration-300 hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="text-warm-yellow">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">Phone</h3>
                        <p className="text-gray-300">+63 991 804 8306</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-soft-black border-warm-yellow/20 hover:border-warm-yellow/50 transition-all duration-300 hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="text-warm-yellow">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">Location</h3>
                        <p className="text-gray-300">Angadanan, Isabela, Philippines</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="pt-8">
                <h3 className="text-xl font-bold text-white mb-4">Prefer to Schedule a Call?</h3>
                <p className="text-gray-300 mb-6">
                  Book a free 30-minute consultation to discuss your project in detail.
                </p>
                <a href="https://calendly.com/dlcrzad/build-rank" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-warm-yellow hover:bg-warm-yellow/90 text-black px-8 py-3 rounded-full font-medium hover-lift glow-on-hover">
                    Schedule Consultation
                    <Calendar className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-charcoal">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center fade-in-up">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                question: "How long does a typical project take?",
                answer:
                  "Project timelines vary depending on complexity. A simple website typically takes 2-4 weeks, while more complex projects with custom features can take 6-12 weeks. I'll provide a detailed timeline during our initial consultation.",
              },
              {
                question: "Do you provide ongoing support after launch?",
                answer:
                  "Yes! I offer ongoing maintenance, updates, and support packages to ensure your website continues to perform optimally. This includes security updates, content changes, and technical support.",
              },
              {
                question: "What's included in your SEO services?",
                answer:
                  "My SEO services include keyword research, on-page optimization, technical SEO audits, content strategy, link building, and monthly reporting. I focus on sustainable, white-hat techniques that deliver long-term results.",
              },
              {
                question: "Can you work with my existing website?",
                answer:
                  "I can work with existing websites to improve performance, add new features, optimize for SEO, or redesign specific sections. I'll assess your current site and recommend the best approach.",
              },
              {
                question: "What are your payment terms?",
                answer:
                  "I typically work with a 50% deposit to start the project and 50% upon completion. For larger projects, we can arrange milestone-based payments. All payment terms are clearly outlined in the project contract.",
              },
            ].map((faq, index) => (
              <Card
                key={index}
                className={`bg-soft-black border-warm-yellow/20 hover:border-warm-yellow/50 transition-all duration-300 hover-lift fade-in-up animate-delay-${(index + 1) * 100}`}
              >
                <CardHeader>
                  <CardTitle className="text-white text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
