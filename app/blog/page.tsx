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
    <div className="min-h-screen bg-white">
      <SiteHeader />

      {/* Hero Section */}
      <section className="py-16 px-6 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-black mb-4">Blog</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Stay updated with the latest trends, tips, and strategies in web development and SEO.
          </p>

          {/* Search Bar */}
          <div className="mt-8 max-w-md relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white border border-gray-300 text-black placeholder-gray-400"
            />
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {filteredPosts.length > 0 && (
        <section className="py-16 px-6 border-b border-gray-200">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-black mb-8">Featured Article</h2>
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow group">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <Image
                    src={filteredPosts[0].image || "/placeholder.svg"}
                    alt={filteredPosts[0].title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge className="bg-blue-100 text-blue-700 border-0">{filteredPosts[0].category}</Badge>
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <Calendar className="h-4 w-4" />
                      <span>{filteredPosts[0].date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <Clock className="h-4 w-4" />
                      <span>{filteredPosts[0].readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4">
                    {filteredPosts[0].title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{filteredPosts[0].excerpt}</p>
                  <Link href={`/blog/${filteredPosts[0].slug}`}>
                    <Button className="bg-black hover:bg-gray-800 text-white w-fit">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 px-6 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-black mb-8">Latest Articles</h2>
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-8">
              {filteredPosts.slice(1).map((post, index) => (
                <Link key={index} href={`/blog/${post.slug}`}>
                  <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow group cursor-pointer h-full">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-blue-100 text-blue-700 border-0">{post.category}</Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-black mb-2 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-gray-100 text-gray-700 border-0 text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No articles found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-6 border-b border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-black mb-4">Stay Updated</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to get the latest articles delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white border border-gray-300 text-black placeholder-gray-400"
            />
            <Button className="bg-black hover:bg-gray-800 text-white px-8 py-2 font-medium">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
