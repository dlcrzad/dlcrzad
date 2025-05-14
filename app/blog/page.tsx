import Link from "next/link"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar } from "lucide-react"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="container-sm px-5 md:px-6 py-12">
        <Link href="/">
          <Button variant="ghost" size="sm" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>

        <h1 className="text-2xl font-medium mb-8">Blog</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Blog Post 1 */}
          <div className="border rounded-lg overflow-hidden">
            <div className="h-48 bg-card relative">
              <Image
                src="/placeholder.svg?height=200&width=400&text=SEO+Strategies"
                alt="SEO Strategies for 2024"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <Link href="/blog/seo-strategies-2024">
                <h2 className="text-xl font-medium hover:underline mb-2">SEO Strategies That Actually Work in 2024</h2>
              </Link>
              <p className="text-sm text-muted-foreground mb-4">
                Discover the most effective SEO techniques that are driving real results in 2024, from content
                optimization to technical SEO improvements.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="badge">SEO</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>May 5, 2024</span>
                </div>
                <Link href="/blog/seo-strategies-2024">
                  <Button variant="outline" size="sm">
                    Read Article
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="border rounded-lg overflow-hidden">
            <div className="h-48 bg-card relative">
              <Image
                src="/placeholder.svg?height=200&width=400&text=WordPress+Performance"
                alt="WordPress Performance Tips"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <Link href="/blog/wordpress-speed-optimization">
                <h2 className="text-xl font-medium hover:underline mb-2">10 Ways to Speed Up Your WordPress Website</h2>
              </Link>
              <p className="text-sm text-muted-foreground mb-4">
                Learn practical techniques to optimize your WordPress site's performance and improve user experience
                with these proven speed optimization tips.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="badge">WordPress</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>April 22, 2024</span>
                </div>
                <Link href="/blog/wordpress-speed-optimization">
                  <Button variant="outline" size="sm">
                    Read Article
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="border rounded-lg overflow-hidden">
            <div className="h-48 bg-card relative">
              <Image
                src="/placeholder.svg?height=200&width=400&text=Web+Design+Trends"
                alt="Web Design Trends"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <Link href="/blog/web-design-trends-2024">
                <h2 className="text-xl font-medium hover:underline mb-2">Web Design Trends to Watch in 2024</h2>
              </Link>
              <p className="text-sm text-muted-foreground mb-4">
                Stay ahead of the curve with these emerging web design trends that are shaping the digital landscape in
                2024.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="badge">Web Design</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>April 10, 2024</span>
                </div>
                <Link href="/blog/web-design-trends-2024">
                  <Button variant="outline" size="sm">
                    Read Article
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Blog Post 4 */}
          <div className="border rounded-lg overflow-hidden">
            <div className="h-48 bg-card relative">
              <Image
                src="/placeholder.svg?height=200&width=400&text=Google+Analytics+4"
                alt="Google Analytics 4"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <Link href="/blog/mastering-google-analytics-4">
                <h2 className="text-xl font-medium hover:underline mb-2">
                  Mastering Google Analytics 4 for Your Website
                </h2>
              </Link>
              <p className="text-sm text-muted-foreground mb-4">
                A comprehensive guide to setting up and getting the most out of Google Analytics 4.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="badge">Analytics</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>March 28, 2024</span>
                </div>
                <Link href="/blog/mastering-google-analytics-4">
                  <Button variant="outline" size="sm">
                    Read Article
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Blog Post 5 */}
          <div className="border rounded-lg overflow-hidden">
            <div className="h-48 bg-card relative">
              <Image
                src="/placeholder.svg?height=200&width=400&text=Content+Marketing"
                alt="Content Marketing"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <Link href="/blog/content-marketing-small-business">
                <h2 className="text-xl font-medium hover:underline mb-2">
                  The Ultimate Guide to Content Marketing for Small Businesses
                </h2>
              </Link>
              <p className="text-sm text-muted-foreground mb-4">
                Learn how to create and implement an effective content marketing strategy that drives traffic.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="badge">Content</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>March 15, 2024</span>
                </div>
                <Link href="/blog/content-marketing-small-business">
                  <Button variant="outline" size="sm">
                    Read Article
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
