"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ArrowRight, Search } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function BlogPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

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

  const blogPosts = [
    {
      title: "SEO Strategies That Actually Work in 2024",
      excerpt:
        "Discover the latest SEO techniques and strategies that are driving real results in 2024. From technical SEO to content optimization.",
      image: "/images/seo-strategies.png",
      category: "SEO",
      readTime: "8 min read",
      date: "December 15, 2024",
      slug: "seo-strategies-2024",
      tags: ["SEO", "Digital Marketing", "Google", "Content Strategy"],
    },
    {
      title: "10 Ways to Speed Up Your WordPress Website",
      excerpt:
        "Learn proven techniques to optimize your WordPress site for lightning-fast loading speeds and better user experience.",
      image: "/images/10-ways-to-speed-up-wordpress-website.png",
      category: "Web Development",
      readTime: "6 min read",
      date: "December 10, 2024",
      slug: "wordpress-speed-optimization",
      tags: ["WordPress", "Performance", "Web Development", "Optimization"],
    },
    {
      title: "The Future of Web Design: Trends for 2024",
      excerpt:
        "Explore the latest web design trends that are shaping the digital landscape and how to implement them in your projects.",
      image: "/modern-web-design-trends-2024.jpg",
      category: "Design",
      readTime: "5 min read",
      date: "December 5, 2024",
      slug: "web-design-trends-2024",
      tags: ["Web Design", "UI/UX", "Trends", "User Experience"],
    },
    {
      title: "Building Responsive Websites with Tailwind CSS",
      excerpt:
        "A comprehensive guide to creating beautiful, responsive websites using Tailwind CSS framework and best practices.",
      image: "/tailwind-responsive-design.png",
      category: "Web Development",
      readTime: "10 min read",
      date: "November 28, 2024",
      slug: "tailwind-css-responsive-design",
      tags: ["Tailwind CSS", "Responsive Design", "CSS", "Frontend"],
    },
    {
      title: "Local SEO: Dominating Your Local Market",
      excerpt:
        "Master local SEO strategies to help your business rank higher in local search results and attract more customers.",
      image: "/local-seo-business-marketing.jpg",
      category: "SEO",
      readTime: "7 min read",
      date: "November 20, 2024",
      slug: "local-seo-strategies",
      tags: ["Local SEO", "Business Marketing", "Google My Business", "Local Search"],
    },
    {
      title: "React vs Next.js: Which Should You Choose?",
      excerpt:
        "Compare React and Next.js to understand which framework is best suited for your next web development project.",
      image: "/react-vs-nextjs-comparison.jpg",
      category: "Web Development",
      readTime: "9 min read",
      date: "November 15, 2024",
      slug: "react-vs-nextjs-comparison",
      tags: ["React", "Next.js", "JavaScript", "Framework Comparison"],
    },
  ]

  const categories = ["All", "SEO", "Web Development", "Design", "Digital Marketing"]

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  return (
    <div className="min-h-screen bg-soft-black">
      <SiteHeader />

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className={`text-4xl md:text-6xl font-bold text-white mb-6 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
          >
            Web Development &<span className="text-warm-yellow block">SEO Insights</span>
          </h1>
          <p
            className={`text-xl text-gray-300 max-w-3xl mx-auto mb-8 ${isVisible ? "animate-fade-in animate-delay-200" : "opacity-0"}`}
          >
            Stay updated with the latest trends, tips, and strategies in web development and SEO. Learn from real-world
            experiences and industry best practices.
          </p>

          {/* Search Bar */}
          <div className={`max-w-md mx-auto relative ${isVisible ? "animate-fade-in animate-delay-300" : "opacity-0"}`}>
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-charcoal border-warm-yellow/30 text-white placeholder-gray-400 focus:border-warm-yellow"
            />
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {filteredPosts.length > 0 && (
        <section className="py-10 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8 fade-in-up">Featured Article</h2>
            <Card className="bg-charcoal border-warm-yellow/20 hover:border-warm-yellow/50 transition-all duration-300 hover-lift fade-in-up group overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <Image
                    src={filteredPosts[0].image || "/placeholder.svg"}
                    alt={filteredPosts[0].title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge variant="outline" className="border-warm-yellow/30 text-warm-yellow">
                      {filteredPosts[0].category}
                    </Badge>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Calendar className="h-4 w-4" />
                      <span>{filteredPosts[0].date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Clock className="h-4 w-4" />
                      <span>{filteredPosts[0].readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-warm-yellow transition-colors">
                    {filteredPosts[0].title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{filteredPosts[0].excerpt}</p>
                  <Link href={`/blog/${filteredPosts[0].slug}`}>
                    <Button className="bg-warm-yellow hover:bg-warm-yellow/90 text-black w-fit">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 fade-in-up">Latest Articles</h2>
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.slice(1).map((post, index) => (
                <Card
                  key={index}
                  className={`bg-charcoal border-warm-yellow/20 hover:border-warm-yellow/50 transition-all duration-300 hover-lift fade-in-up animate-delay-${(index + 1) * 100} group overflow-hidden`}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="outline" className="border-warm-yellow/30 text-warm-yellow bg-soft-black/80">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-2 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <CardTitle className="text-white group-hover:text-warm-yellow transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-gray-300">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag, idx) => (
                        <Badge key={idx} variant="outline" className="border-warm-yellow/20 text-gray-400 text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <Button
                        variant="outline"
                        className="border-warm-yellow/30 text-warm-yellow hover:bg-warm-yellow hover:text-black w-full transition-all duration-300 bg-transparent"
                      >
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No articles found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-6 bg-charcoal">
        <div className="max-w-4xl mx-auto text-center fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Stay Updated</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to get the latest articles, tips, and insights delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-soft-black border-warm-yellow/30 text-white placeholder-gray-400 focus:border-warm-yellow"
            />
            <Button className="bg-warm-yellow hover:bg-warm-yellow/90 text-black px-8 py-2 font-medium hover-lift">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
