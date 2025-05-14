import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Calendar, Award, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function CertificationsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="container mx-auto px-6 md:px-12 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Licenses & Certifications</h1>
          <p className="text-muted-foreground mb-12">
            Professional certifications and licenses that demonstrate my expertise and commitment to continuous
            learning.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Certification 1 */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Google Analytics Certification</h3>
                    <p className="text-muted-foreground mb-2">Google</p>
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Issued Jan 2024</span>
                      <span className="mx-2">•</span>
                      <span>No Expiration</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Comprehensive certification covering web analytics implementation, data collection, processing,
                      configuration, and reporting.
                    </p>
                    <a
                      href="#"
                      className="text-sm text-primary hover:underline inline-flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Credential <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Certification 2 */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">WordPress Development Fundamentals</h3>
                    <p className="text-muted-foreground mb-2">Udemy</p>
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Issued Nov 2023</span>
                      <span className="mx-2">•</span>
                      <span>No Expiration</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Comprehensive course covering WordPress theme development, plugin integration, and custom site
                      building techniques.
                    </p>
                    <a
                      href="#"
                      className="text-sm text-primary hover:underline inline-flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Credential <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Certification 3 */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">SEO Specialist Certification</h3>
                    <p className="text-muted-foreground mb-2">HubSpot Academy</p>
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Issued Sep 2023</span>
                      <span className="mx-2">•</span>
                      <span>Expires Sep 2025</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Certification covering on-page and technical SEO, keyword research, link building, and content
                      optimization strategies.
                    </p>
                    <a
                      href="#"
                      className="text-sm text-primary hover:underline inline-flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Credential <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Certification 4 */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Content Marketing Strategy</h3>
                    <p className="text-muted-foreground mb-2">Coursera</p>
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Issued Aug 2023</span>
                      <span className="mx-2">•</span>
                      <span>No Expiration</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Comprehensive course on developing effective content marketing strategies, audience targeting, and
                      content creation for digital platforms.
                    </p>
                    <a
                      href="#"
                      className="text-sm text-primary hover:underline inline-flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Credential <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Certification 5 */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Google Ads Fundamentals</h3>
                    <p className="text-muted-foreground mb-2">Google</p>
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Issued Oct 2023</span>
                      <span className="mx-2">•</span>
                      <span>Expires Oct 2024</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Certification covering Google Ads platform basics, campaign setup, optimization strategies, and
                      performance measurement.
                    </p>
                    <a
                      href="#"
                      className="text-sm text-primary hover:underline inline-flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Credential <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Certification 6 */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Responsive Web Design</h3>
                    <p className="text-muted-foreground mb-2">freeCodeCamp</p>
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Issued Jul 2023</span>
                      <span className="mx-2">•</span>
                      <span>No Expiration</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Certification covering HTML5, CSS3, responsive design principles, and accessibility best practices
                      for modern web development.
                    </p>
                    <a
                      href="#"
                      className="text-sm text-primary hover:underline inline-flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Credential <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Link href="/experience">
              <Button>View Experience</Button>
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
