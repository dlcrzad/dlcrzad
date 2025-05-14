import Link from "next/link"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink } from "lucide-react"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="container-sm px-5 md:px-6 py-12">
        <Link href="/">
          <Button variant="ghost" size="sm" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>

        <h1 className="text-2xl font-medium mb-8">Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Project 1 */}
          <div className="border rounded-lg overflow-hidden">
            <div className="h-48 bg-card relative">
              <Image
                src="/images/goldenbiotechnologies.png"
                alt="Golden Biotechnologies Website"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium mb-2">Golden Biotechnologies</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Corporate website with content management system and lead generation
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="badge">WordPress</span>
                <span className="badge">CMS</span>
                <span className="badge">Lead Gen</span>
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://goldenbiotechnologies.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary hover:underline flex items-center"
                >
                  goldenbiotechnologies.com <ExternalLink className="h-3 w-3 ml-1" />
                </a>
                <Link href="/projects/golden-biotechnologies">
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="border rounded-lg overflow-hidden">
            <div className="h-48 bg-card relative">
              <Image src="/images/avosinc.png" alt="Avos Inc Website" fill className="object-cover" />
            </div>
            <div className="p-4">
              <h3 className="font-medium mb-2">Avos Inc</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Corporate website with product catalog and customer support portal
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="badge">WordPress</span>
                <span className="badge">E-commerce</span>
                <span className="badge">Support</span>
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://avosinc.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary hover:underline flex items-center"
                >
                  avosinc.com <ExternalLink className="h-3 w-3 ml-1" />
                </a>
                <Link href="/projects/avos-inc">
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="border rounded-lg overflow-hidden">
            <div className="h-48 bg-card relative">
              <Image
                src="/images/westernsportsfloor.png"
                alt="Western Sport Floors Website"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium mb-2">Western Sport Floors</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Service business website with portfolio and contact form
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="badge">WordPress</span>
                <span className="badge">Bricks</span>
                <span className="badge">Portfolio</span>
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://westernsportfloors.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary hover:underline flex items-center"
                >
                  westernsportfloors.com <ExternalLink className="h-3 w-3 ml-1" />
                </a>
                <Link href="/projects/western-sport-floors">
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div className="border rounded-lg overflow-hidden">
            <div className="h-48 bg-card relative">
              <Image
                src="/images/mcweldingservicellc.png"
                alt="MC Welding Service Website"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium mb-2">MC Welding Service</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Local business website with service listings and contact information
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="badge">WordPress</span>
                <span className="badge">Local SEO</span>
                <span className="badge">Services</span>
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://mcweldingservicellc.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary hover:underline flex items-center"
                >
                  mcweldingservicellc.com <ExternalLink className="h-3 w-3 ml-1" />
                </a>
                <Link href="/projects/mc-welding-service">
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
