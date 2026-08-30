import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function TechStackPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <main className="max-w-2xl mx-auto px-6 py-16">
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
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded border border-gray-300">WordPress</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded border border-gray-300">Webflow</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded border border-gray-300">Shopify</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded border border-gray-300">Squarespace</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded border border-gray-300">Wix</span>
                </div>
              </div>

              <div>
                <h3 className="text-base font-medium mb-3">WordPress Page Builders</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded border border-gray-300">BricksBuilder</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded border border-gray-300">Elementor</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded border border-gray-300">Divi</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded border border-gray-300">Gutenberg</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded border border-gray-300">Beaver Builder</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded border border-gray-300">Oxygen</span>
                </div>
              </div>

              <div>
                <h3 className="text-base font-medium mb-3">WordPress Plugins</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded border border-gray-300">WooCommerce</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded border border-gray-300">Yoast SEO</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded border border-gray-300">Rank Math</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded border border-gray-300">Automatic CSS</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded border border-gray-300">WP Rocket</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded border border-gray-300">Gravity Forms</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded border border-gray-300">Contact Form 7</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded border border-gray-300">Wordfence</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded border border-gray-300">UpdraftPlus</span>
                </div>
              </div>

              <div>
                <h3 className="text-base font-medium mb-3">Frontend Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded border border-gray-300">HTML5</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded border border-gray-300">CSS3</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded border border-gray-300">JavaScript</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded border border-gray-300">Responsive Design</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded border border-gray-300">Flexbox</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded border border-gray-300">CSS Grid</span>
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
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded border border-gray-300">Keyword Research</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded border border-gray-300">On-Page SEO</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded border border-gray-300">Technical SEO</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded border border-gray-300">Local SEO</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded border border-gray-300">Content Optimization</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded border border-gray-300">Link Building</span>
                </div>
              </div>

              <div>
                <h3 className="text-base font-medium mb-3">Analytics & Reporting</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded border border-gray-300">Google Analytics</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded border border-gray-300">Google Search Console</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded border border-gray-300">Google Tag Manager</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded border border-gray-300">Ahrefs</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded border border-gray-300">SEMrush</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded border border-gray-300">Moz</span>
                </div>
              </div>

              <div>
                <h3 className="text-base font-medium mb-3">Advertising</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded border border-gray-300">Google Ads</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded border border-gray-300">Facebook Ads</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded border border-gray-300">Instagram Ads</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded border border-gray-300">LinkedIn Ads</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded border border-gray-300">Display Advertising</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded border border-gray-300">Remarketing</span>
                </div>
              </div>

              <div>
                <h3 className="text-base font-medium mb-3">Content Marketing</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded border border-gray-300">Blog Writing</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded border border-gray-300">Copywriting</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded border border-gray-300">Email Marketing</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded border border-gray-300">Social Media Content</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded border border-gray-300">Content Strategy</span>
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
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded border border-gray-300">Microsoft Office</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded border border-gray-300">Google Workspace</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded border border-gray-300">Slack</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded border border-gray-300">Asana</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded border border-gray-300">Trello</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded border border-gray-300">ClickUp</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded border border-gray-300">Notion</span>
                </div>
              </div>

              <div>
                <h3 className="text-base font-medium mb-3">Design</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded border border-gray-300">Canva</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded border border-gray-300">Figma</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded border border-gray-300">Adobe Photoshop</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded border border-gray-300">Adobe Illustrator</span>
                </div>
              </div>

              <div>
                <h3 className="text-base font-medium mb-3">AI Tools</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded border border-gray-300">ChatGPT</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded border border-gray-300">Midjourney</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded border border-gray-300">Jasper</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded border border-gray-300">Copy.ai</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded border border-gray-300">Grammarly</span>
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
