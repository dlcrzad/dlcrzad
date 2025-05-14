import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Calendar } from "lucide-react"

export default function GoldenBiotechnologiesPage() {
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
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Golden Biotechnologies</h1>
            <div className="flex items-center text-sm text-muted-foreground mb-6">
              <Calendar className="h-4 w-4 mr-2" />
              <span>Completed in February 2024</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge>WordPress</Badge>
              <Badge>CMS</Badge>
              <Badge>Lead Generation</Badge>
              <Badge>E-commerce</Badge>
              <Badge>SEO</Badge>
            </div>
            <a
              href="https://goldenbiotechnologies.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary hover:underline"
            >
              Visit Website <ExternalLink className="ml-1 h-4 w-4" />
            </a>
          </div>

          <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
            <Image
              src="/images/goldenbiotechnologies.png"
              alt="Golden Biotechnologies Website"
              fill
              className="object-cover"
            />
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2>Project Overview</h2>
            <p>
              Golden Biotechnologies Corporation required a professional website that would showcase their laboratory
              diagnostics products and services. The goal was to create a modern, user-friendly platform that would
              effectively communicate their brand values and facilitate lead generation.
            </p>

            <h2>Challenge</h2>
            <p>
              The main challenge was to create a website that would appeal to healthcare professionals and laboratory
              technicians while making complex product information accessible and easy to navigate. The site needed to
              balance technical information with an approachable design.
            </p>

            <h2>Solution</h2>
            <p>
              I developed a custom WordPress website with a clean, professional design that emphasized the company's
              commitment to quality and innovation. The site features:
            </p>
            <ul>
              <li>A modern, responsive design that works seamlessly across all devices</li>
              <li>An intuitive product catalog with detailed information and specifications</li>
              <li>Lead generation forms strategically placed throughout the site</li>
              <li>Integration with their inventory management system</li>
              <li>SEO optimization to improve visibility in search results</li>
              <li>Fast loading times and optimized performance</li>
            </ul>

            <h2>Results</h2>
            <p>
              The new website has significantly improved Golden Biotechnologies' online presence and lead generation
              capabilities. Key outcomes include:
            </p>
            <ul>
              <li>30% increase in online inquiries</li>
              <li>Improved user engagement with average session duration increasing by 45%</li>
              <li>Enhanced brand perception and credibility</li>
              <li>Streamlined product information management</li>
              <li>Improved search engine rankings for key industry terms</li>
            </ul>

            <h2>Technologies Used</h2>
            <p>
              This project was built using WordPress as the content management system, with custom theme development and
              several specialized plugins to enhance functionality. The technology stack included:
            </p>
            <ul>
              <li>WordPress CMS</li>
              <li>Custom PHP development</li>
              <li>Advanced Custom Fields for flexible content management</li>
              <li>WooCommerce for product catalog functionality</li>
              <li>Responsive design with CSS Grid and Flexbox</li>
              <li>JavaScript for interactive elements</li>
              <li>Google Analytics for performance tracking</li>
            </ul>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
