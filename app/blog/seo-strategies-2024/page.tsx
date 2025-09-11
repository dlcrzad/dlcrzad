"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react"

export default function SEOStrategies2024() {
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

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <SiteHeader />

      <main className="pt-24">
        {/* Back Button */}
        <section className="py-8 bg-black">
          <div className="max-w-4xl mx-auto px-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-golden-yellow hover:text-golden-yellow/80 transition-colors duration-300 fade-in-up"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </div>
        </section>

        {/* Article Header */}
        <section className="py-12 bg-black">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-6 text-sm text-gray-400 mb-4 fade-in-up">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>December 15, 2024</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>8 min read</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>Adeline Dela Cruz</span>
                </div>
              </div>
              <h1 className="text-4xl font-bold text-white mb-4 fade-in-up animate-delay-100">
                SEO Strategies That Actually Work in 2024
              </h1>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto fade-in-up animate-delay-200">
                Discover the latest SEO techniques and strategies that are driving real results in 2024. From technical
                SEO to content optimization, here's what's working now.
              </p>
            </div>

            <div className="aspect-video bg-black rounded-lg overflow-hidden mb-8 border border-golden-yellow fade-in-up animate-delay-300">
              <Image
                src="/images/seo-strategies.png"
                alt="SEO Strategies That Actually Work in 2024"
                width={800}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12 bg-black">
          <div className="max-w-4xl mx-auto px-6">
            <div className="prose prose-invert max-w-none">
              <div className="fade-in-up">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  The SEO landscape continues to evolve rapidly, and what worked last year might not be as effective
                  today. As we navigate through 2024, I've identified the most impactful SEO strategies that are
                  delivering real results for my clients. Here's what's working right now.
                </p>
              </div>

              <div className="fade-in-up animate-delay-100">
                <h2 className="text-2xl font-bold text-white mb-4">1. AI-Optimized Content Strategy</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  With Google's AI algorithms becoming more sophisticated, content quality has never been more
                  important. The focus has shifted from keyword density to semantic relevance and user intent. Here's
                  how to adapt:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>Create comprehensive, topic-focused content that covers user intent thoroughly</li>
                  <li>Use natural language processing to understand semantic relationships</li>
                  <li>Focus on E-A-T (Expertise, Authoritativeness, Trustworthiness) signals</li>
                  <li>Implement structured data to help AI understand your content context</li>
                </ul>
              </div>

              <div className="fade-in-up animate-delay-200">
                <h2 className="text-2xl font-bold text-white mb-4">2. Core Web Vitals Optimization</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Page experience continues to be a crucial ranking factor. The three Core Web Vitals metrics are
                  non-negotiable for SEO success in 2024:
                </p>
                <div className="bg-black border border-golden-yellow rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-golden-yellow mb-3">Key Metrics to Monitor:</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>
                      <strong>Largest Contentful Paint (LCP):</strong> Should occur within 2.5 seconds
                    </li>
                    <li>
                      <strong>First Input Delay (FID):</strong> Should be less than 100 milliseconds
                    </li>
                    <li>
                      <strong>Cumulative Layout Shift (CLS):</strong> Should be less than 0.1
                    </li>
                  </ul>
                </div>
              </div>

              <div className="fade-in-up animate-delay-300">
                <h2 className="text-2xl font-bold text-white mb-4">3. Local SEO Dominance</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Local search has become increasingly important, especially for service-based businesses. Here's how to
                  dominate local search results:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>Optimize Google Business Profile with complete, accurate information</li>
                  <li>Collect and respond to customer reviews consistently</li>
                  <li>Create location-specific landing pages for multi-location businesses</li>
                  <li>Build local citations and ensure NAP consistency across directories</li>
                </ul>
              </div>

              <div className="fade-in-up animate-delay-400">
                <h2 className="text-2xl font-bold text-white mb-4">4. Video Content Integration</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Video content is no longer optional—it's essential for SEO success. Search engines are prioritizing
                  multimedia content that engages users:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>Create video content that complements your written articles</li>
                  <li>Optimize video titles, descriptions, and thumbnails</li>
                  <li>Use video schema markup to help search engines understand your content</li>
                  <li>Host videos on your own domain when possible to keep users on your site</li>
                </ul>
              </div>

              <div className="fade-in-up animate-delay-500">
                <h2 className="text-2xl font-bold text-white mb-4">5. Featured Snippet Optimization</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Featured snippets continue to drive significant traffic. Here's how to optimize for position zero:
                </p>
                <div className="bg-black border border-golden-yellow rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-golden-yellow mb-3">Snippet Optimization Tips:</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>Structure content with clear headings and subheadings</li>
                    <li>Provide concise, direct answers to common questions</li>
                    <li>Use bullet points and numbered lists for step-by-step processes</li>
                    <li>Include relevant tables and comparison charts</li>
                  </ul>
                </div>
              </div>

              <div className="fade-in-up animate-delay-600">
                <h2 className="text-2xl font-bold text-white mb-4">Conclusion</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  SEO in 2024 is about creating genuine value for users while ensuring technical excellence. The
                  strategies that work best are those that align with Google's mission to provide the most relevant,
                  helpful results to searchers.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Remember, SEO is a long-term game. Implement these strategies consistently, monitor your results, and
                  be prepared to adapt as the landscape continues to evolve.
                </p>
              </div>

              {/* Share Section */}
              <div className="border-t border-golden-yellow pt-8 mt-12 fade-in-up animate-delay-700">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Found this helpful?</h3>
                    <p className="text-gray-400">Share it with others who might benefit from these SEO strategies.</p>
                  </div>
                  <button className="bg-golden-yellow hover:bg-golden-yellow/90 text-black px-4 py-2 rounded-full font-medium flex items-center gap-2 transition-all duration-300 hover-lift">
                    <Share2 className="h-4 w-4" />
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="py-20 bg-black">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-white mb-16 fade-in-up">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Link
                href="/blog/wordpress-speed-optimization"
                className="bg-black rounded-lg overflow-hidden border border-golden-yellow hover:border-golden-yellow/80 transition-all group hover-lift fade-in-up"
              >
                <div className="aspect-video bg-black overflow-hidden">
                  <Image
                    src="/images/10-ways-to-speed-up-wordpress-website.png"
                    alt="10 Ways to Speed Up Your WordPress Website"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-golden-yellow transition-colors duration-300">
                    10 Ways to Speed Up Your WordPress Website
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Learn proven techniques to optimize your WordPress site's performance and improve user experience.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
