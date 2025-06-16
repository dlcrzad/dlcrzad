import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="container-sm py-12">
        <Link href="/">
          <Button variant="ghost" size="sm" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>

        <h1 className="text-2xl font-medium mb-8">Experience</h1>

        <div className="space-y-12">
          <section>
            <h2 className="text-lg font-medium mb-6">Work Experience</h2>
            <div className="space-y-8">
              {/* Experience Item 1 */}
              <div className="flex gap-8">
                <div className="w-24 flex-shrink-0 text-right">
                  <span className="text-sm text-muted-foreground">2024</span>
                </div>
                <div>
                  <h3 className="font-medium">WordPress & SEO Specialist</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Freelance Projects (Capucelli, Golden Biotechnologies, Socal Biosys, Avos Inc.)
                  </p>
                  <ul className="list-inside text-sm text-muted-foreground space-y-1">
                    <li>Maintained and managed websites on WordPress, ensuring seamless performance and uptime</li>
                    <li>
                      Monitored and addressed technical issues, including fixing non-indexed URLs and optimizing backend
                      operations
                    </li>
                    <li>Managed SEO to boost organic traffic and improve search engine rankings for client websites</li>
                    <li>Handled Google Ads campaigns for e-commerce platforms, optimizing for conversions and ROI</li>
                    <li>Transferred domains, configured hosting, and ensured smooth website migrations</li>
                    <li>Provided ongoing updates and content management to keep websites accurate and user-friendly</li>
                  </ul>
                </div>
              </div>

              {/* Experience Item 2 */}
              <div className="flex gap-8">
                <div className="w-24 flex-shrink-0 text-right">
                  <span className="text-sm text-muted-foreground">2022-2024</span>
                </div>
                <div>
                  <h3 className="font-medium">Web Designer</h3>
                  <p className="text-sm text-muted-foreground mb-2">Prairie Giraffe, Wyoming, United States</p>
                  <ul className="list-inside text-sm text-muted-foreground space-y-1">
                    <li>Tailored WordPress themes and plugins to create visually striking, user-centric websites</li>
                    <li>Designed and developed 10+ appealing websites using WordPress, Bricks, CSS, and Frames</li>
                    <li>Implemented responsive designs and interactive features to enhance user experiences</li>
                    <li>Monitored SEO rankings and revised website content to improve search engine performance</li>
                    <li>
                      Collaborated with clients to understand requirements and translated vision into creative solutions
                    </li>
                    <li>
                      Achieved a 95% client satisfaction rate through tailored solutions and design thinking principles
                    </li>
                    <li>Utilized email management tools to streamline communication and optimize productivity</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-medium mb-6">Education</h2>
            <div className="flex gap-8">
              <div className="w-24 flex-shrink-0 text-right">
                <span className="text-sm text-muted-foreground">2020-2024</span>
              </div>
              <div>
                <h3 className="font-medium">Bachelor of Science in Civil Engineering</h3>
                <p className="text-sm text-muted-foreground mb-2">University of La Salette, Santiago City, Isabela</p>
                <p className="text-sm text-muted-foreground">
                  Completed coursework in structural engineering, project management, and technical design, developing
                  strong analytical and problem-solving skills that transfer well to web development and design.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-medium mb-6">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Web Development & Tools */}
              <div>
                <h3 className="text-base font-medium mb-4">Web Development & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "WordPress",
                    "BricksBuilder",
                    "Automatic CSS",
                    "Divi Theme",
                    "Elementor",
                    "Webflow",
                    "HTML/CSS",
                    "JavaScript",
                    "ChatGPT",
                  ].map((skill) => (
                    <span key={skill} className="border rounded-md px-3 py-1.5 text-sm text-muted-foreground">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Digital Marketing & SEO */}
              <div>
                <h3 className="text-base font-medium mb-4">Digital Marketing & SEO</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "SEO",
                    "Google Ads",
                    "Google Search Console",
                    "Digital Marketing",
                    "Copywriting",
                    "Content Writing",
                    "Tech Support",
                  ].map((skill) => (
                    <span key={skill} className="border rounded-md px-3 py-1.5 text-sm text-muted-foreground">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Productivity & Management */}
              <div>
                <h3 className="text-base font-medium mb-4">Productivity & Management</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Microsoft Office",
                    "Google Suite",
                    "Slack",
                    "Asana",
                    "Trello",
                    "Calendly",
                    "Gmail",
                    "Google Calendar",
                    "Canva",
                  ].map((skill) => (
                    <span key={skill} className="border rounded-md px-3 py-1.5 text-sm text-muted-foreground">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
