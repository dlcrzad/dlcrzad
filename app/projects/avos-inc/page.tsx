import Link from "next/link"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Calendar } from "lucide-react"

export default function AvosIncPage() {
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
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Avos Inc</h1>
            <div className="flex items-center text-sm text-muted-foreground mb-6">
              <Calendar className="h-4 w-4 mr-2" />
              <span>Completed in December 2023</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge>WordPress</Badge>
              <Badge>E-commerce</Badge>
              <Badge>Support Portal</Badge>
              <Badge>SEO</Badge>
            </div>
            <a
              href="https://avosinc.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary hover:underline"
            >
              Visit Website <ExternalLink className="ml-1 h-4 w-4" />
            </a>
          </div>

          <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
            <Image src="/images/avosinc.png" alt="Avos Inc Website" fill className="object-cover" />
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2>Project Overview</h2>
            <p>
              Avos Inc needed a comprehensive website that would serve as both a corporate presence and a customer
              support portal. The site needed to showcase their products while providing existing customers with easy
              access to support resources.
            </p>

            <h2>Challenge</h2>
            <p>
              The main challenge was creating a dual-purpose website that would effectively serve both potential
              customers and existing clients. The site needed to balance marketing content with technical support
              resources while maintaining a cohesive user experience.
            </p>

            <h2>Solution</h2>
            <p>
              I developed a WordPress website with distinct sections for marketing and support, unified by consistent
              branding and navigation. The site features:
            </p>
            <ul>
              <li>A clean, professional design that reflects the company's corporate identity</li>
              <li>A comprehensive product catalog with detailed specifications</li>
              <li>A password-protected customer support portal with documentation and resources</li>
              <li>A ticketing system for customer support requests</li>
              <li>Integration with their CRM system for lead management</li>
              <li>Mobile-responsive design for access on any device</li>
            </ul>

            <h2>Results</h2>
            <p>
              The new website has significantly improved Avos Inc's online presence and customer support capabilities.
              Key outcomes include:
            </p>
            <ul>
              <li>25% reduction in support call volume as customers utilize the online resources</li>
              <li>Improved customer satisfaction scores</li>
              <li>Increased lead generation through the product catalog</li>
              <li>Enhanced brand perception and credibility</li>
              <li>Streamlined support processes and reduced response times</li>
            </ul>

            <h2>Technologies Used</h2>
            <p>
              This project was built using WordPress with several specialized plugins to enhance functionality. The
              technology stack included:
            </p>
            <ul>
              <li>WordPress CMS</li>
              <li>Custom PHP development</li>
              <li>WooCommerce for product catalog</li>
              <li>BuddyPress for community features</li>
              <li>Custom user roles and permissions</li>
              <li>JavaScript for interactive elements</li>
              <li>Responsive design with CSS Grid and Flexbox</li>
              <li>Integration with Zendesk for ticketing</li>
            </ul>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
