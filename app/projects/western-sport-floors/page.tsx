import Link from 'next/link'
import Image from 'next/image'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ArrowLeft } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function WesternSportFloorsPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <main className="max-w-3xl mx-auto px-6 py-16">
        <Link href="/projects" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8">
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>

        <article>
          <h1 className="text-3xl font-bold text-black mb-2">Western Sport Floors</h1>
          <p className="text-gray-600 mb-6">Completed in October 2023</p>

          <div className="flex flex-wrap gap-2 mb-8">
            <Badge className="bg-gray-100 text-gray-700 border-0">WordPress</Badge>
            <Badge className="bg-gray-100 text-gray-700 border-0">Bricks Builder</Badge>
            <Badge className="bg-gray-100 text-gray-700 border-0">Portfolio</Badge>
          </div>

          <div className="mb-8 rounded overflow-hidden">
            <Image
              src="/images/westernsportsfloor.png"
              alt="Western Sport Floors Website"
              width={800}
              height={400}
              className="w-full h-auto"
            />
          </div>

          <div className="prose prose-sm max-w-none text-gray-700 space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-black mt-8 mb-3">Project Overview</h2>
              <p>Modern sports flooring company website showcasing installation portfolio and services.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mt-8 mb-3">Key Features</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Portfolio gallery showcase</li>
                <li>Service descriptions</li>
                <li>Before/after galleries</li>
                <li>Responsive design with Bricks Builder</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mt-8 mb-3">Results</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Professional portfolio showcase</li>
                <li>Enhanced visual presentation</li>
                <li>Improved customer inquiries</li>
              </ul>
            </section>
          </div>
        </article>
      </main>

      <SiteFooter />
    </div>
  )
}
