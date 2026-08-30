'use client'

import Image from 'next/image'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ArrowLeft } from 'lucide-react'

export default function WordPressSpeedOptimization() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <main className="max-w-3xl mx-auto px-6 py-16">
        <Link href="/blog" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8">
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        <article className="prose prose-sm max-w-none">
          <h1 className="text-3xl font-bold text-black mb-4">10 Ways to Speed Up Your WordPress Website</h1>
          
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-8 pb-8 border-b border-gray-200">
            <span>December 10, 2024</span>
            <span>6 min read</span>
          </div>

          <div className="mb-8 rounded overflow-hidden">
            <Image
              src="/images/10-ways-to-speed-up-wordpress-website.png"
              alt="WordPress Speed Optimization"
              width={800}
              height={450}
              className="w-full h-auto"
            />
          </div>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Website speed is crucial for user experience and SEO rankings. Here are 10 proven techniques to optimize your WordPress site's performance.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-black mt-8 mb-3">1. Enable Caching</h2>
              <p>
                Implement browser caching and server-side caching to reduce load times significantly. Use plugins like WP Rocket or W3 Total Cache.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mt-8 mb-3">2. Optimize Images</h2>
              <p>
                Compress images without losing quality. Use modern formats like WebP and lazy load images to improve page performance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mt-8 mb-3">3. Minimize CSS and JavaScript</h2>
              <p>
                Reduce file sizes by minifying CSS and JavaScript files. Remove unused code and combine files when possible.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mt-8 mb-3">4. Use Content Delivery Network (CDN)</h2>
              <p>
                Distribute content across servers worldwide to serve content from locations closer to your visitors.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mt-8 mb-3">5. Upgrade Your Hosting</h2>
              <p>
                Choose a hosting provider with good performance. Consider managed WordPress hosting for better optimization.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mt-8 mb-3">Conclusion</h2>
              <p>
                Implementing these speed optimization techniques will significantly improve your WordPress site's performance and user experience. Start with the easiest wins and progressively implement more advanced optimizations.
              </p>
            </section>
          </div>
        </article>
      </main>

      <SiteFooter />
    </div>
  )
}
