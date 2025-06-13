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
                  <span className="text-sm text-muted-foreground">2023-2024</span>
                </div>
                <div>
                  <h3 className="font-medium">Web Designer - Tech VA</h3>
                  <p className="text-sm text-muted-foreground mb-2">Prairie Giraffe</p>
                  <ul className="list-inside text-sm text-muted-foreground space-y-1">
                    <li>Crafted 10+ visually appealing WordPress websites with user-friendly design</li>
                    <li>Proven track record in translating client visions into creative web solutions</li>
                    <li>Optimized productivity through streamlined email management</li>
                    <li>Implemented responsive designs and interactive features to enhance user experiences</li>
                    <li>Monitored SEO rankings and revised website content to improve search engine performance</li>
                  </ul>
                </div>
              </div>

              {/* Experience Item 2 */}
              <div className="flex gap-8">
                <div className="w-24 flex-shrink-0 text-right">
                  <span className="text-sm text-muted-foreground">2024</span>
                </div>
                <div>
                  <h3 className="font-medium">Junior Operations Manager</h3>
                  <p className="text-sm text-muted-foreground mb-2">Prairie Giraffe</p>
                  <ul className="list-inside text-sm text-muted-foreground space-y-1">
                    <li>Key role in day-to-day business management, overseeing projects</li>
                    <li>Ensured stakeholder communication and managed client satisfaction</li>
                    <li>Contributed to web design, SEO, and Google Ads campaigns</li>
                    <li>Implemented efficient processes with AI tools</li>
                    <li>Maintained accountability for high-priority tasks</li>
                  </ul>
                </div>
              </div>

              {/* Experience Item 3 */}
              <div className="flex gap-8">
                <div className="w-24 flex-shrink-0 text-right">
                  <span className="text-sm text-muted-foreground">2019-2020</span>
                </div>
                <div>
                  <h3 className="font-medium">Admin Assistant - Engineering Office</h3>
                  <p className="text-sm text-muted-foreground mb-2">Municipality of Angadanan</p>
                  <ul className="list-inside text-sm text-muted-foreground space-y-1">
                    <li>Tech-savvy in Microsoft Office, Google Suite, and diverse software</li>
                    <li>Ensured accurate data entry and improved workflow efficiency</li>
                    <li>Provided essential administrative support in documentation and organization</li>
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
              {/* Web Development Skills */}
              <div>
                <h3 className="text-base font-medium mb-4">Web Development</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "WordPress CMS",
                    "BricksBuilder",
                    "Automatic CSS",
                    "Divi Theme",
                    "Elementor",
                    "Webflow",
                    "HTML/CSS",
                    "Basic JavaScript",
                  ].map((skill) => (
                    <span key={skill} className="border rounded-md px-3 py-1.5 text-sm text-muted-foreground">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Digital Marketing Skills */}
              <div>
                <h3 className="text-base font-medium mb-4">Digital Marketing</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "SEO",
                    "Google Ads",
                    "Search Console",
                    "Content Writing",
                    "Social Media",
                    "Email Marketing",
                    "Analytics",
                  ].map((skill) => (
                    <span key={skill} className="border rounded-md px-3 py-1.5 text-sm text-muted-foreground">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Soft Skills */}
              <div>
                <h3 className="text-base font-medium mb-4">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Communication",
                    "Time Management",
                    "Problem Solving",
                    "Attention to Detail",
                    "Teamwork",
                    "Adaptability",
                    "Client Relations",
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
