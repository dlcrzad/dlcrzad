import Link from 'next/link'
import Image from 'next/image'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ArrowLeft } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function GoldenBiotechnologiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <main className="max-w-3xl mx-auto px-6 py-16">
        <Link href="/projects" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8">
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>

        <article>
          <h1 className="text-3xl font-bold text-black mb-2">Golden Biotechnologies</h1>
          <p className="text-gray-600 mb-6">Completed in February 2024</p>

          <div className="flex flex-wrap gap-2 mb-8">
            <Badge className="bg-gray-100 text-gray-700 border-0">WordPress</Badge>
            <Badge className="bg-gray-100 text-gray-700 border-0">CMS</Badge>
            <Badge className="bg-gray-100 text-gray-700 border-0">Healthcare</Badge>
          </div>

          <div className="mb-8 rounded overflow-hidden">
            <Image
              src="/images/goldenbiotechnologies.png"
              alt="Golden Biotechnologies Website"
              width={800}
              height={400}
              className="w-full h-auto"
            />
          </div>

          <div className="prose prose-sm max-w-none text-gray-700 space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-black mt-8 mb-3">Project Overview</h2>
              <p>Professional biotech company website with scientific content management and research showcase.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mt-8 mb-3">Key Features</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Professional credibility design</li>
                <li>Research and publication showcase</li>
                <li>Team and expertise pages</li>
                <li>Mobile-responsive layout</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mt-8 mb-3">Results</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Enhanced professional presence</li>
                <li>Improved stakeholder engagement</li>
                <li>Better content organization</li>
              </ul>
            </section>
          </div>
        </article>
      </main>

      <SiteFooter />
    </div>
  )
}
