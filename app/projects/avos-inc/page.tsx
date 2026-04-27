import Link from 'next/link'
import Image from 'next/image'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ArrowLeft } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function AvosIncPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <main className="max-w-3xl mx-auto px-6 py-16">
        <Link href="/projects" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8">
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>

        <article>
          <h1 className="text-3xl font-bold text-black mb-2">Avos Inc</h1>
          <p className="text-gray-600 mb-6">Completed in December 2023</p>

          <div className="flex flex-wrap gap-2 mb-8">
            <Badge className="bg-gray-100 text-gray-700 border-0">WordPress</Badge>
            <Badge className="bg-gray-100 text-gray-700 border-0">SEO</Badge>
            <Badge className="bg-gray-100 text-gray-700 border-0">Portfolio</Badge>
          </div>

          <div className="mb-8 rounded overflow-hidden">
            <Image
              src="/images/avosinc.png"
              alt="Avos Inc Website"
              width={800}
              height={400}
              className="w-full h-auto"
            />
          </div>

          <div className="prose prose-sm max-w-none text-gray-700 space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-black mt-8 mb-3">Project Overview</h2>
              <p>
                Avos Inc needed a corporate website that showcased their expertise in wrought iron engineering while optimizing for search visibility and customer inquiries.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mt-8 mb-3">Key Features</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Professional portfolio showcase</li>
                <li>SEO-optimized service pages</li>
                <li>Contact inquiry system</li>
                <li>Mobile-responsive design</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mt-8 mb-3">Results</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Improved search visibility through on-page SEO</li>
                <li>Enhanced portfolio showcase</li>
                <li>Better client inquiry system</li>
                <li>Responsive across all devices</li>
              </ul>
            </section>

            <div className="border-t border-gray-200 pt-8 mt-8">
              <a
                href="avosinc.com"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Visit Website →
              </a>
            </div>
          </div>
        </article>
      </main>

      <SiteFooter />
    </div>
  )
}
