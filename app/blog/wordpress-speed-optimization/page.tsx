"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react"

export default function WordPressSpeedOptimization() {
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
                  <span>December 10, 2024</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>6 min read</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>Adeline Dela Cruz</span>
                </div>
              </div>
              <h1 className="text-4xl font-bold text-white mb-4 fade-in-up animate-delay-100">
                10 Ways to Speed Up Your WordPress Website
              </h1>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto fade-in-up animate-delay-200">
                Learn proven techniques to optimize your WordPress site's performance and improve user experience with
                these actionable tips that deliver real results.
              </p>
            </div>

            <div className="aspect-video bg-black rounded-lg overflow-hidden mb-8 border border-golden-yellow fade-in-up animate-delay-300">
              <Image
                src="/images/10-ways-to-speed-up-wordpress-website.png"
                alt="10 Ways to Speed Up Your WordPress Website"
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
                  Website speed is crucial for user experience and SEO rankings. A slow WordPress site can hurt your
                  search rankings, increase bounce rates, and reduce conversions. Here are 10 proven methods to
                  significantly improve your WordPress site's performance.
                </p>
              </div>

              <div className="fade-in-up animate-delay-100">
                <h2 className="text-2xl font-bold text-white mb-4">1. Choose Quality Web Hosting</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Your hosting provider is the foundation of your website's performance. Shared hosting might be cheap,
                  but it often leads to slow loading times. Consider these hosting options:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>Managed WordPress hosting (WP Engine, Kinsta, SiteGround)</li>
                  <li>VPS hosting for more control and resources</li>
                  <li>Cloud hosting for scalability (AWS, Google Cloud, DigitalOcean)</li>
                  <li>CDN integration for global content delivery</li>
                </ul>
              </div>

              <div className="fade-in-up animate-delay-200">
                <h2 className="text-2xl font-bold text-white mb-4">2. Install a Caching Plugin</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Caching plugins create static versions of your dynamic WordPress pages, dramatically reducing load
                  times for returning visitors.
                </p>
                <div className="bg-black border border-golden-yellow rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-golden-yellow mb-3">Recommended Caching Plugins:</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>
                      <strong>WP Rocket:</strong> Premium plugin with advanced features
                    </li>
                    <li>
                      <strong>W3 Total Cache:</strong> Comprehensive free caching solution
                    </li>
                    <li>
                      <strong>WP Super Cache:</strong> Simple and effective free option
                    </li>
                    <li>
                      <strong>LiteSpeed Cache:</strong> Great for LiteSpeed servers
                    </li>
                  </ul>
                </div>
              </div>

              <div className="fade-in-up animate-delay-300">
                <h2 className="text-2xl font-bold text-white mb-4">3. Optimize Images</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Large, unoptimized images are often the biggest culprit behind slow WordPress sites. Here's how to fix
                  this:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>Compress images before uploading (use tools like TinyPNG or Squoosh)</li>
                  <li>Use modern image formats (WebP, AVIF) when possible</li>
                  <li>Implement lazy loading for images below the fold</li>
                  <li>Choose appropriate image dimensions for your content</li>
                  <li>Use image optimization plugins like Smush or ShortPixel</li>
                </ul>
              </div>

              <div className="fade-in-up animate-delay-400">
                <h2 className="text-2xl font-bold text-white mb-4">4. Minify CSS, JavaScript, and HTML</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Minification removes unnecessary characters from your code without affecting functionality, reducing
                  file sizes and improving load times.
                </p>
                <div className="bg-black border border-golden-yellow rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-golden-yellow mb-3">Minification Tools:</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>Autoptimize plugin for automatic minification</li>
                    <li>WP Rocket's built-in minification features</li>
                    <li>Fast Velocity Minify for advanced users</li>
                    <li>Manual minification using online tools</li>
                  </ul>
                </div>
              </div>

              <div className="fade-in-up animate-delay-500">
                <h2 className="text-2xl font-bold text-white mb-4">5. Use a Content Delivery Network (CDN)</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  A CDN distributes your website's static content across multiple servers worldwide, reducing the
                  distance between your users and your content.
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>Cloudflare (free and premium options available)</li>
                  <li>MaxCDN (now StackPath) for enterprise solutions</li>
                  <li>Amazon CloudFront for AWS users</li>
                  <li>KeyCDN for budget-friendly options</li>
                </ul>
              </div>

              <div className="fade-in-up animate-delay-600">
                <h2 className="text-2xl font-bold text-white mb-4">6. Optimize Your Database</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Over time, your WordPress database accumulates unnecessary data that can slow down your site. Regular
                  cleanup is essential:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>Remove spam comments and post revisions</li>
                  <li>Delete unused plugins and themes</li>
                  <li>Clean up transient data and expired options</li>
                  <li>Use plugins like WP-Optimize or Advanced Database Cleaner</li>
                </ul>
              </div>

              <div className="fade-in-up animate-delay-700">
                <h2 className="text-2xl font-bold text-white mb-4">7. Limit Plugin Usage</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  While plugins add functionality, too many can slow down your site. Follow these best practices:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>Regularly audit your plugins and remove unused ones</li>
                  <li>Choose well-coded, regularly updated plugins</li>
                  <li>Avoid plugins that duplicate functionality</li>
                  <li>Test plugin impact on site speed before keeping them</li>
                </ul>
              </div>

              <div className="fade-in-up animate-delay-800">
                <h2 className="text-2xl font-bold text-white mb-4">8. Enable GZIP Compression</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  GZIP compression reduces the size of your website files before they're sent to browsers, significantly
                  improving load times.
                </p>
                <div className="bg-black border border-golden-yellow rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-golden-yellow mb-3">How to Enable GZIP:</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>Use caching plugins that include GZIP compression</li>
                    <li>Add GZIP rules to your .htaccess file</li>
                    <li>Enable compression through your hosting control panel</li>
                    <li>Use Cloudflare's automatic compression features</li>
                  </ul>
                </div>
              </div>

              <div className="fade-in-up animate-delay-900">
                <h2 className="text-2xl font-bold text-white mb-4">9. Optimize Your Theme</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Your WordPress theme significantly impacts site speed. Choose and optimize wisely:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>Use lightweight, well-coded themes</li>
                  <li>Avoid themes with excessive features you don't need</li>
                  <li>Remove unused CSS and JavaScript from your theme</li>
                  <li>Consider switching to a faster theme if necessary</li>
                </ul>
              </div>

              <div className="fade-in-up animate-delay-1000">
                <h2 className="text-2xl font-bold text-white mb-4">10. Monitor and Test Regularly</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Regular monitoring helps you catch performance issues before they impact your users:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>Use Google PageSpeed Insights for performance analysis</li>
                  <li>Test with GTmetrix for detailed performance reports</li>
                  <li>Monitor Core Web Vitals in Google Search Console</li>
                  <li>Set up uptime monitoring to catch downtime quickly</li>
                </ul>
              </div>

              <div className="fade-in-up animate-delay-1100">
                <h2 className="text-2xl font-bold text-white mb-4">Conclusion</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Implementing these 10 optimization techniques will significantly improve your WordPress site's speed
                  and user experience. Remember that website optimization is an ongoing process—regularly monitor your
                  site's performance and make adjustments as needed.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Start with the most impactful changes like hosting, caching, and image optimization, then gradually
                  implement the other techniques. Your users (and search engines) will thank you for the improved
                  performance!
                </p>
              </div>

              {/* Share Section */}
              <div className="border-t border-golden-yellow pt-8 mt-12 fade-in-up animate-delay-1200">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Found this helpful?</h3>
                    <p className="text-gray-400">
                      Share it with others who might benefit from these WordPress optimization tips.
                    </p>
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
                href="/blog/seo-strategies-2024"
                className="bg-black rounded-lg overflow-hidden border border-golden-yellow hover:border-golden-yellow/80 transition-all group hover-lift fade-in-up"
              >
                <div className="aspect-video bg-black overflow-hidden">
                  <Image
                    src="/images/seo-strategies.png"
                    alt="SEO Strategies That Actually Work in 2024"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-golden-yellow transition-colors duration-300">
                    SEO Strategies That Actually Work in 2024
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Discover the latest SEO techniques and strategies that are driving real results in 2024.
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
