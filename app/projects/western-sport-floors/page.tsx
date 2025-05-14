import Link from "next/link"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Calendar } from "lucide-react"

export default function WesternSportFloorsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="container mx-auto px-6 md:px-12 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href="/#projects">
              <Button variant="ghost" size="sm" className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
              </Button>
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Western Sport Floors</h1>
            <div className="flex items-center text-sm text-muted-foreground mb-6">
              <Calendar className="h-4 w-4 mr-2" />
              <span>Completed in October 2023</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge>WordPress</Badge>
              <Badge>Bricks Builder</Badge>
              <Badge>Portfolio</Badge>
              <Badge>Local SEO</Badge>
            </div>
            <a
              href="https://westernsportfloors.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary hover:underline"
            >
              Visit Website <ExternalLink className="ml-1 h-4 w-4" />
            </a>
          </div>

          <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
            <Image
              src="/images/westernsportsfloor.png"
              alt="Western Sport Floors Website"
              fill
              className="object-cover"
            />
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2>Project Overview</h2>
            <p>
              Western Sport Floors needed a professional website to showcase their sports flooring installation and
              maintenance services. The goal was to create a visually appealing site that would highlight their
              portfolio of completed projects and generate leads from local businesses and schools.
            </p>

            <h2>Challenge</h2>
            <p>
              The main challenge was creating a website that would effectively showcase their work while appealing to a
              diverse client base including school administrators, gym owners, and facility managers. The site needed to
              balance visual appeal with clear information about their services and expertise.
            </p>

            <h2>Solution</h2>
            <p>
              I developed a WordPress website using Bricks Builder that emphasized high-quality images of their
              completed projects while providing clear information about their services. The site features:
            </p>
            <ul>
              <li>A visually striking design with large project images</li>
              <li>A comprehensive portfolio organized by project type</li>
              <li>Detailed service descriptions with clear calls-to-action</li>
              <li>Client testimonials to build trust and credibility</li>
              <li>Local SEO optimization to attract clients in their service area</li>
              <li>A user-friendly contact form for quote requests</li>
              <li>Mobile-responsive design for access on any device</li>
            </ul>

            <h2>Results</h2>
            <p>
              The new website has significantly improved Western Sport Floors' online presence and lead generation
              capabilities. Key outcomes include:
            </p>
            <ul>
              <li>40% increase in quote requests through the website</li>
              <li>Improved visibility in local search results</li>
              <li>Enhanced brand perception with a professional online presence</li>
              <li>Positive feedback from existing clients</li>
              <li>Expanded reach to new market segments</li>
            </ul>

            <h2>Technologies Used</h2>
            <p>
              This project was built using WordPress with Bricks Builder for flexible, visual design. The technology
              stack included:
            </p>
            <ul>
              <li>WordPress CMS</li>
              <li>Bricks Builder for visual design</li>
              <li>Custom CSS for unique styling elements</li>
              <li>JavaScript for interactive elements</li>
              <li>Responsive design techniques</li>
              <li>Schema markup for improved SEO</li>
              <li>Google Maps integration for service area visualization</li>
              <li>Contact Form 7 for lead capture</li>
            </ul>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
