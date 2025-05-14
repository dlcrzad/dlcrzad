import Link from "next/link"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Calendar } from "lucide-react"

export default function MCWeldingServicePage() {
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
            <h1 className="text-3xl md:text-4xl font-bold mb-4">MC Welding Service</h1>
            <div className="flex items-center text-sm text-muted-foreground mb-6">
              <Calendar className="h-4 w-4 mr-2" />
              <span>Completed in November 2023</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge>WordPress</Badge>
              <Badge>Local SEO</Badge>
              <Badge>Service Business</Badge>
              <Badge>Mobile Optimization</Badge>
            </div>
            <a
              href="https://mcweldingservicellc.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary hover:underline"
            >
              Visit Website <ExternalLink className="ml-1 h-4 w-4" />
            </a>
          </div>

          <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
            <Image
              src="/images/mcweldingservicellc.png"
              alt="MC Welding Service Website"
              fill
              className="object-cover"
            />
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2>Project Overview</h2>
            <p>
              MC Welding Service needed a professional website to establish their online presence and attract local
              customers. As a small business specializing in welding services, they required a site that would highlight
              their expertise, showcase their work, and make it easy for potential customers to contact them.
            </p>

            <h2>Challenge</h2>
            <p>
              The main challenge was creating a website that would appeal to both residential and commercial clients
              while effectively communicating the technical expertise of the business. Additionally, the site needed
              strong local SEO to ensure visibility in their service area.
            </p>

            <h2>Solution</h2>
            <p>
              I developed a WordPress website that emphasized the company's professionalism and technical capabilities
              while making it easy for potential customers to understand their services and get in touch. The site
              features:
            </p>
            <ul>
              <li>A clean, industrial-inspired design that reflects the welding industry</li>
              <li>Clear service descriptions with accompanying images</li>
              <li>A portfolio of completed projects organized by category</li>
              <li>Prominent contact information and quote request form</li>
              <li>Customer testimonials to build trust</li>
              <li>Local SEO optimization including Google Business Profile integration</li>
              <li>Mobile-first design for customers searching on smartphones</li>
            </ul>

            <h2>Results</h2>
            <p>
              The new website has significantly improved MC Welding Service's online presence and lead generation
              capabilities. Key outcomes include:
            </p>
            <ul>
              <li>35% increase in phone inquiries attributed to the website</li>
              <li>Improved rankings in local search results</li>
              <li>Enhanced professional image in the local market</li>
              <li>Expanded customer base to include more commercial clients</li>
              <li>Positive feedback from existing customers</li>
            </ul>

            <h2>Technologies Used</h2>
            <p>
              This project was built using WordPress with a focus on performance and local SEO. The technology stack
              included:
            </p>
            <ul>
              <li>WordPress CMS</li>
              <li>Custom theme development</li>
              <li>Responsive design techniques</li>
              <li>Schema markup for local business</li>
              <li>Google Maps integration</li>
              <li>Contact Form 7 for lead capture</li>
              <li>Performance optimization for fast loading</li>
              <li>Local SEO plugins and configurations</li>
            </ul>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
