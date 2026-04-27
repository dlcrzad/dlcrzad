'use client'

import Image from 'next/image'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ArrowLeft } from 'lucide-react'

export default function SEOStrategies2024() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <main className="max-w-3xl mx-auto px-6 py-16">
        <Link href="/blog" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8">
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        <article className="prose prose-sm max-w-none">
          <h1 className="text-3xl font-bold text-black mb-4">SEO Strategies That Actually Work in 2024</h1>
          
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-8 pb-8 border-b border-gray-200">
            <span>December 15, 2024</span>
            <span>8 min read</span>
          </div>

          <div className="mb-8 rounded overflow-hidden">
            <Image
              src="/images/seo-strategies.png"
              alt="SEO Strategies"
              width={800}
              height={450}
              className="w-full h-auto"
            />
          </div>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              The SEO landscape continues to evolve rapidly. Here are the most impactful strategies delivering real results in 2024.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-black mt-8 mb-3">1. AI-Optimized Content Strategy</h2>
              <p>
                With Google's AI algorithms becoming more sophisticated, content quality has never been more important. The focus has shifted from keyword density to semantic relevance and user intent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mt-8 mb-3">2. Core Web Vitals Optimization</h2>
              <p>
                Page experience continues to be a crucial ranking factor. The three Core Web Vitals metrics are non-negotiable for SEO success in 2024.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mt-8 mb-3">3. Local SEO Dominance</h2>
              <p>
                Local search has become increasingly important, especially for service-based businesses. Optimize your Google Business Profile and collect customer reviews consistently.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mt-8 mb-3">Conclusion</h2>
              <p>
                SEO in 2024 is about creating genuine value for users while ensuring technical excellence. Implement these strategies consistently and be prepared to adapt as the landscape evolves.
              </p>
            </section>
          </div>
        </article>
      </main>

      <SiteFooter />
    </div>
  )
}
