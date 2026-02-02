"use client"

import { useState, useEffect } from "react"
import { Calendar, MapPin, ExternalLink, Award, Code, Palette, TrendingUp, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function ExperiencePage() {
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

  const experiences = [
    {
      title: "Web Designer & SEO Specialist",
      company: "Lemon Drop Campers and Ray's Ukulele Hawaii",
      location: "Hawaii, United States",
      period: "2025",
      description:
        "Managed and optimized a WordPress-based travel and campervan affiliate website. Developed SEO-driven content strategy including campground guides, itineraries, and evergreen travel resources.",
      achievements: [
        "Implemented on-page and technical SEO improvements including internal linking and indexing fixes",
        "Managed sitemap updates for better search indexing",
        "Tracked and optimized affiliate link performance using UTM parameters and Google Analytics 4",
        "Enhanced website performance and usability for better conversions",
      ],
      technologies: ["WordPress", "SEO", "Google Analytics", "UTM Tracking", "Content Strategy", "HTML/CSS"],
    },
    {
      title: "Web Designer & SEO Specialist (Part-Time)",
      company: "Avos Inc",
      location: "Portland, Oregon",
      period: "2024 - 2026",
      description:
        "Designed and updated corporate website with focus on usability, responsiveness, and visual consistency. Wrote and optimized service pages and web content using SEO best practices.",
      achievements: [
        "Improved search visibility through on-page SEO including keyword optimization and meta descriptions",
        "Implemented internal linking strategy to enhance site structure",
        "Enhanced website responsiveness and user experience across all devices",
        "Created SEO-optimized service pages and content",
      ],
      technologies: ["WordPress", "SEO", "Content Optimization", "HTML/CSS", "Web Design", "Google Search Console"],
    },
    {
      title: "WordPress & SEO Specialist (Part-Time)",
      company: "Golden Biotechnologies, GBT - EMEA, SoCal Biosys",
      location: "California, United States",
      period: "2024 - 2025",
      description:
        "Maintained and managed multiple WordPress websites, ensuring seamless performance and uptime. Addressed technical issues and managed domain transfers and hosting configurations.",
      achievements: [
        "Fixed non-indexed URLs and optimized backend operations for better performance",
        "Successfully transferred domains and configured hosting environments",
        "Ensured smooth website migrations with zero downtime",
        "Maintained 100% website uptime and reliability",
      ],
      technologies: ["WordPress", "Technical SEO", "Domain Management", "Hosting Configuration", "Website Optimization"],
    },
    {
      title: "Web Designer",
      company: "Prairie Giraffe",
      location: "Wyoming, United States",
      period: "2022 - 2024",
      description:
        "Tailored WordPress themes and plugins to create visually striking, user-centric websites. Collaborated closely with clients to translate their vision into creative and functional solutions.",
      achievements: [
        "Designed and developed 10+ appealing websites using WordPress, Bricks, CSS, and Frames",
        "Achieved 95% client satisfaction rate through quality work and excellent communication",
        "Implemented responsive designs and interactive features to enhance user experiences",
        "Managed ongoing website updates and functionality improvements",
      ],
      technologies: ["WordPress", "Bricks Builder", "Elementor", "CSS", "Frames", "Email Management", "Web Design"],
    },
  ]

  const skills = [
    {
      category: "Web Development",
      skills: ["WordPress", "Bricks Builder", "Elementor", "HTML", "CSS", "JavaScript", "Webflow", "Responsive Design"],
      icon: <Code className="h-5 w-5" />,
    },
    {
      category: "SEO & Digital Marketing",
      skills: [
        "On-Page SEO",
        "Technical SEO",
        "Google Search Console",
        "Google Analytics 4",
        "Keyword Research",
        "Content Strategy",
        "Google Ads",
        "UTM Tracking",
      ],
      icon: <TrendingUp className="h-5 w-5" />,
    },
    {
      category: "Design & Content",
      skills: ["UI/UX Design", "Canva", "Adobe Photoshop", "Visual Design", "Copywriting", "Content Creation"],
      icon: <Palette className="h-5 w-5" />,
    },
    {
      category: "Tools & Platforms",
      skills: ["Automatic CSS", "Divi Theme", "ChatGPT", "Google Suite", "Microsoft Office", "Slack", "Asana", "Trello"],
      icon: <Code className="h-5 w-5" />,
    },
    {
      category: "Productivity & Communication",
      skills: ["Email Management", "Project Management", "Calendar Management", "Calendly", "Gmail", "Tech Support"],
      icon: <Users className="h-5 w-5" />,
    },
  ]

  const certifications = [
    {
      title: "Facebook Marketing and Advertising",
      issuer: "Simplilearn",
      date: "2024",
      credentialId: "SIMPLI-2024-FB",
    },
    {
      title: "Bachelor of Science in Civil Engineering",
      issuer: "University of La Salette Santiago City",
      date: "2025",
      credentialId: "ULS-CE-2025",
    },
  ]

  return (
    <div className="min-h-screen bg-soft-black">
      <SiteHeader />

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className={`text-4xl md:text-6xl font-bold text-white mb-6 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
          >
            My Professional
            <span className="text-warm-yellow block">Experience</span>
          </h1>
          <p
            className={`text-xl text-gray-300 max-w-3xl mx-auto ${isVisible ? "animate-fade-in animate-delay-200" : "opacity-0"}`}
          >
            Over 5 years of experience in web development and SEO, helping businesses build powerful online presences
            that drive growth and success.
          </p>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center fade-in-up">Work Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className={`bg-charcoal border-warm-yellow/20 hover:border-warm-yellow/50 transition-all duration-300 hover-lift fade-in-up animate-delay-${(index + 1) * 100}`}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-white text-xl">{exp.title}</CardTitle>
                      <CardDescription className="text-warm-yellow font-medium text-lg">{exp.company}</CardDescription>
                    </div>
                    <div className="flex flex-col md:items-end gap-2">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-300 leading-relaxed">{exp.description}</p>

                  <div>
                    <h4 className="text-white font-semibold mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-gray-300 flex items-start">
                          <div className="w-2 h-2 bg-warm-yellow rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="border-warm-yellow/30 text-warm-yellow">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-charcoal">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center fade-in-up">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <Card
                key={index}
                className={`bg-soft-black border-warm-yellow/20 hover:border-warm-yellow/50 transition-all duration-300 hover-lift fade-in-up animate-delay-${(index + 1) * 100}`}
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="text-warm-yellow">{skillGroup.icon}</div>
                    <CardTitle className="text-white">{skillGroup.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill, idx) => (
                      <Badge key={idx} variant="outline" className="border-warm-yellow/30 text-warm-yellow text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center fade-in-up">Certifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className={`bg-charcoal border-warm-yellow/20 hover:border-warm-yellow/50 transition-all duration-300 hover-lift fade-in-up animate-delay-${(index + 1) * 100}`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <Award className="h-6 w-6 text-warm-yellow mt-1" />
                      <div>
                        <CardTitle className="text-white text-lg">{cert.title}</CardTitle>
                        <CardDescription className="text-gray-300">{cert.issuer}</CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline" className="border-warm-yellow/30 text-warm-yellow">
                      {cert.date}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-sm">Credential ID: {cert.credentialId}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-charcoal">
        <div className="max-w-4xl mx-auto text-center fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Let's Work Together</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Ready to bring your project to life? Let's discuss how my experience and skills can help you achieve your
            goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://calendly.com/dlcrzad/build-rank" target="_blank" rel="noopener noreferrer">
              <Button className="bg-warm-yellow hover:bg-warm-yellow/90 text-black px-8 py-3 rounded-full font-medium hover-lift glow-on-hover">
                Schedule Consultation
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href="/contact">
              <Button
                variant="outline"
                className="border-warm-yellow text-warm-yellow hover:bg-warm-yellow hover:text-black px-8 py-3 rounded-full font-medium transition-all duration-300 bg-transparent"
              >
                Contact Me
              </Button>
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
