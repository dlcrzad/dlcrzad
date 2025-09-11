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
      title: "Senior Web Developer & SEO Specialist",
      company: "Freelance",
      location: "Remote",
      period: "2020 - Present",
      description:
        "Leading web development and SEO optimization projects for diverse clients, delivering custom solutions that drive business growth and online visibility.",
      achievements: [
        "Increased client website traffic by an average of 250%",
        "Delivered 50+ successful web development projects",
        "Achieved #1 Google rankings for 80% of targeted keywords",
        "Maintained 100% client satisfaction rate",
      ],
      technologies: ["React", "Next.js", "WordPress", "SEO", "Google Analytics", "JavaScript", "PHP", "MySQL"],
    },
    {
      title: "Web Developer",
      company: "Digital Agency",
      location: "New York, NY",
      period: "2019 - 2020",
      description:
        "Developed responsive websites and web applications for clients across various industries, focusing on performance optimization and user experience.",
      achievements: [
        "Built 25+ responsive websites using modern frameworks",
        "Improved website loading speeds by 40% on average",
        "Collaborated with design teams to implement pixel-perfect UIs",
        "Mentored junior developers on best practices",
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "WordPress", "Photoshop", "Git", "Sass"],
    },
    {
      title: "Junior Web Developer",
      company: "Tech Startup",
      location: "San Francisco, CA",
      period: "2018 - 2019",
      description:
        "Started my professional journey developing web applications and learning modern development practices in a fast-paced startup environment.",
      achievements: [
        "Contributed to 3 major product releases",
        "Implemented responsive design principles",
        "Participated in agile development processes",
        "Gained expertise in version control and deployment",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery", "Git", "MySQL", "PHP"],
    },
  ]

  const skills = [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Sass"],
      icon: <Code className="h-5 w-5" />,
    },
    {
      category: "Backend",
      skills: ["Node.js", "PHP", "Python", "MySQL", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"],
      icon: <Code className="h-5 w-5" />,
    },
    {
      category: "SEO & Marketing",
      skills: [
        "Technical SEO",
        "Keyword Research",
        "Google Analytics",
        "Search Console",
        "Content Strategy",
        "Link Building",
      ],
      icon: <TrendingUp className="h-5 w-5" />,
    },
    {
      category: "Design",
      skills: ["UI/UX Design", "Figma", "Adobe Photoshop", "Wireframing", "Prototyping", "Responsive Design"],
      icon: <Palette className="h-5 w-5" />,
    },
    {
      category: "Tools & Others",
      skills: ["Git", "Docker", "AWS", "Vercel", "WordPress", "Shopify", "Google Ads", "Social Media"],
      icon: <Users className="h-5 w-5" />,
    },
  ]

  const certifications = [
    {
      title: "Google Analytics Certified",
      issuer: "Google",
      date: "2023",
      credentialId: "GA-123456789",
    },
    {
      title: "Google Ads Certified",
      issuer: "Google",
      date: "2023",
      credentialId: "GAD-987654321",
    },
    {
      title: "SEO Specialist Certification",
      issuer: "SEMrush",
      date: "2022",
      credentialId: "SEM-456789123",
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2022",
      credentialId: "META-789123456",
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
