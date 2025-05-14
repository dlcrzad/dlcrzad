import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function TechStackPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="container-sm py-12">
        <Link href="/">
          <Button variant="ghost" size="sm" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>

        <h1 className="text-2xl font-medium mb-8">Tech Stack</h1>

        <div className="space-y-12">
          {/* Web Development */}
          <section>
            <h2 className="text-lg font-medium mb-6">Web Development</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-medium mb-3">Content Management Systems</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="tech-badge">WordPress</span>
                  <span className="tech-badge">Webflow</span>
                  <span className="tech-badge">Shopify</span>
                  <span className="tech-badge">Squarespace</span>
                  <span className="tech-badge">Wix</span>
                </div>
              </div>

              <div>
                <h3 className="text-base font-medium mb-3">WordPress Page Builders</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="tech-badge">BricksBuilder</span>
                  <span className="tech-badge">Elementor</span>
                  <span className="tech-badge">Divi</span>
                  <span className="tech-badge">Gutenberg</span>
                  <span className="tech-badge">Beaver Builder</span>
                  <span className="tech-badge">Oxygen</span>
                </div>
              </div>

              <div>
                <h3 className="text-base font-medium mb-3">WordPress Plugins</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="tech-badge">WooCommerce</span>
                  <span className="tech-badge">Yoast SEO</span>
                  <span className="tech-badge">Rank Math</span>
                  <span className="tech-badge">Automatic CSS</span>
                  <span className="tech-badge">WP Rocket</span>
                  <span className="tech-badge">Gravity Forms</span>
                  <span className="tech-badge">Contact Form 7</span>
                  <span className="tech-badge">Wordfence</span>
                  <span className="tech-badge">UpdraftPlus</span>
                </div>
              </div>

              <div>
                <h3 className="text-base font-medium mb-3">Frontend Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="tech-badge">HTML5</span>
                  <span className="tech-badge">CSS3</span>
                  <span className="tech-badge">JavaScript</span>
                  <span className="tech-badge">Responsive Design</span>
                  <span className="tech-badge">Flexbox</span>
                  <span className="tech-badge">CSS Grid</span>
                </div>
              </div>
            </div>
          </section>

          {/* Digital Marketing */}
          <section>
            <h2 className="text-lg font-medium mb-6">Digital Marketing</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-medium mb-3">SEO</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="tech-badge">Keyword Research</span>
                  <span className="tech-badge">On-Page SEO</span>
                  <span className="tech-badge">Technical SEO</span>
                  <span className="tech-badge">Local SEO</span>
                  <span className="tech-badge">Content Optimization</span>
                  <span className="tech-badge">Link Building</span>
                </div>
              </div>

              <div>
                <h3 className="text-base font-medium mb-3">Analytics & Reporting</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="tech-badge">Google Analytics</span>
                  <span className="tech-badge">Google Search Console</span>
                  <span className="tech-badge">Google Tag Manager</span>
                  <span className="tech-badge">Ahrefs</span>
                  <span className="tech-badge">SEMrush</span>
                  <span className="tech-badge">Moz</span>
                </div>
              </div>

              <div>
                <h3 className="text-base font-medium mb-3">Advertising</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="tech-badge">Google Ads</span>
                  <span className="tech-badge">Facebook Ads</span>
                  <span className="tech-badge">Instagram Ads</span>
                  <span className="tech-badge">LinkedIn Ads</span>
                  <span className="tech-badge">Display Advertising</span>
                  <span className="tech-badge">Remarketing</span>
                </div>
              </div>

              <div>
                <h3 className="text-base font-medium mb-3">Content Marketing</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="tech-badge">Blog Writing</span>
                  <span className="tech-badge">Copywriting</span>
                  <span className="tech-badge">Email Marketing</span>
                  <span className="tech-badge">Social Media Content</span>
                  <span className="tech-badge">Content Strategy</span>
                </div>
              </div>
            </div>
          </section>

          {/* Tools & Software */}
          <section>
            <h2 className="text-lg font-medium mb-6">Tools & Software</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-medium mb-3">Productivity</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="tech-badge">Microsoft Office</span>
                  <span className="tech-badge">Google Workspace</span>
                  <span className="tech-badge">Slack</span>
                  <span className="tech-badge">Asana</span>
                  <span className="tech-badge">Trello</span>
                  <span className="tech-badge">ClickUp</span>
                  <span className="tech-badge">Notion</span>
                </div>
              </div>

              <div>
                <h3 className="text-base font-medium mb-3">Design</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="tech-badge">Canva</span>
                  <span className="tech-badge">Figma</span>
                  <span className="tech-badge">Adobe Photoshop</span>
                  <span className="tech-badge">Adobe Illustrator</span>
                </div>
              </div>

              <div>
                <h3 className="text-base font-medium mb-3">AI Tools</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="tech-badge">ChatGPT</span>
                  <span className="tech-badge">Midjourney</span>
                  <span className="tech-badge">Jasper</span>
                  <span className="tech-badge">Copy.ai</span>
                  <span className="tech-badge">Grammarly</span>
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
