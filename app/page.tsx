import Image from "next/image"
import Link from "next/link"
import { MapPin, Send, ArrowRight, ExternalLink, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="container-sm px-5 md:px-6">
        {/* Hero Section */}
        <section className="py-12 md:py-16 flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/3">
            <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto md:mx-0">
              <Image
                src="/images/profile-transparent.png"
                alt="Adeline Dela Cruz"
                fill
                className="object-cover rounded-full"
                priority
              />
            </div>
          </div>
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-medium mb-2">Adeline Dela Cruz</h1>
            <div className="flex items-center justify-center md:justify-start text-muted-foreground mb-4">
              <MapPin className="h-4 w-4 mr-2" />
              <span className="text-sm">Angadanan, Isabela, Philippines</span>
            </div>
            <p className="text-lg mb-6">WordPress & SEO Specialist | Web Designer</p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <a href="https://calendly.com/dlcrzad/build-rank" target="_blank" rel="noopener noreferrer">
                <Button variant="default" size="sm" className="rounded-md">
                  Schedule a Call
                </Button>
              </a>
              <Link href="/contact">
                <Button variant="outline" size="sm" className="rounded-md">
                  <Send className="mr-2 h-4 w-4" /> Send Email
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section">
          <div className="section-header">
            <h2 className="section-title">About</h2>
          </div>
          <div className="space-y-4 text-muted-foreground">
            <p>
              I'm a WordPress & SEO Specialist and Web Designer with experience in creating visually striking,
              user-centric websites. I specialize in WordPress development, SEO optimization, and digital marketing.
            </p>
            <p>
              I've worked with various clients to maintain and manage websites, optimize SEO to boost organic traffic,
              handle Google Ads campaigns, and provide ongoing updates and content management to keep websites accurate
              and user-friendly.
            </p>
            <p>
              With a background in Civil Engineering and a passion for web development, I bring a unique perspective to
              my projects, focusing on both technical functionality and aesthetic design.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="section">
          <div className="section-header">
            <h2 className="section-title">Experience</h2>
            <Link href="/experience" className="view-all">
              View All <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="space-y-8">
            {/* Experience Item 1 */}
            <div className="flex gap-8">
              <div className="w-20 flex-shrink-0 text-right">
                <span className="text-sm text-muted-foreground">2023-2024</span>
              </div>
              <div>
                <h3 className="font-medium">Web Designer - Tech VA</h3>
                <p className="text-sm text-muted-foreground mb-2">Prairie Giraffe</p>
                <p className="text-sm text-muted-foreground">
                  Crafted 10+ visually appealing WordPress websites with user-friendly design. Optimized SEO and
                  implemented responsive designs.
                </p>
              </div>
            </div>

            {/* Experience Item 2 */}
            <div className="flex gap-8">
              <div className="w-20 flex-shrink-0 text-right">
                <span className="text-sm text-muted-foreground">2024</span>
              </div>
              <div>
                <h3 className="font-medium">Junior Operations Manager</h3>
                <p className="text-sm text-muted-foreground mb-2">Prairie Giraffe</p>
                <p className="text-sm text-muted-foreground">
                  Key role in day-to-day business management, overseeing projects and ensuring stakeholder
                  communication.
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="flex gap-8">
              <div className="w-20 flex-shrink-0 text-right">
                <span className="text-sm text-muted-foreground">2020-2024</span>
              </div>
              <div>
                <h3 className="font-medium">Bachelor of Science in Civil Engineering</h3>
                <p className="text-sm text-muted-foreground">University of La Salette, Santiago City, Isabela</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section">
          <div className="section-header">
            <h2 className="section-title">Recent Projects</h2>
            <Link href="/projects" className="view-all">
              View All <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

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
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="section">
          <div className="section-header">
            <h2 className="section-title">Recent Blog Posts</h2>
            <Link href="/blog" className="view-all">
              View All <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

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
                  <h3 className="font-medium hover:underline mb-2">SEO Strategies That Actually Work in 2024</h3>
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
                  <h3 className="font-medium hover:underline mb-2">10 Ways to Speed Up Your WordPress Website</h3>
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
          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="tech-stack" className="section">
          <div className="section-header">
            <h2 className="section-title">Tech Stack</h2>
            <Link href="/tech-stack" className="view-all">
              View All <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium mb-3">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                <span className="tech-badge">WordPress</span>
                <span className="tech-badge">HTML</span>
                <span className="tech-badge">CSS</span>
                <span className="tech-badge">JavaScript</span>
                <span className="tech-badge">BricksBuilder</span>
                <span className="tech-badge">Elementor</span>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-3">Digital Marketing</h3>
              <div className="flex flex-wrap gap-2">
                <span className="tech-badge">SEO</span>
                <span className="tech-badge">Google Ads</span>
                <span className="tech-badge">Content Writing</span>
                <span className="tech-badge">Analytics</span>
                <span className="tech-badge">Social Media</span>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-3">Tools</h3>
              <div className="flex flex-wrap gap-2">
                <span className="tech-badge">Google Analytics</span>
                <span className="tech-badge">Search Console</span>
                <span className="tech-badge">Canva</span>
                <span className="tech-badge">Figma</span>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section id="testimonials" className="section">
          <div className="section-header">
            <h2 className="section-title">Testimonials</h2>
          </div>

          <div className="border rounded-lg p-6">
            <p className="text-muted-foreground mb-6">
              Adeline Dela Cruz is an outstanding Virtual Assistant who provided valuable support with web design,
              digital marketing, content writing, administrative tasks, and email management. Her attention to detail,
              creativity, and organizational skills greatly enhanced my productivity. Adeline consistently delivered
              quality work and handled multiple responsibilities. I highly recommend her to anyone seeking a reliable
              and skilled VA. She is a true professional and will be a tremendous asset to any team.
            </p>
            <div>
              <p className="font-medium">Kellee Carroll</p>
              <p className="text-sm text-muted-foreground">Owner, Prairie Giraffe LLC</p>
            </div>
          </div>
        </section>

        {/* Beyond Web Design Section */}
        <section id="beyond" className="section">
          <div className="section-header">
            <h2 className="section-title">Beyond Web Design</h2>
          </div>

          <div className="text-muted-foreground space-y-4">
            <p>
              When I'm not designing websites, I focus on personal growth and exploring new interests. I enjoy reading,
              meditating, and developing my career skills.
            </p>
            <p>
              I'm passionate about cooking, fitness, and following developments in stocks and cryptocurrency. These
              diverse interests help me maintain a balanced perspective and bring fresh ideas to my work.
            </p>
          </div>
        </section>

        {/* Connect Section */}
        <section id="connect" className="section">
          <div className="section-header">
            <h2 className="section-title">Connect</h2>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-sm font-medium mb-1">Email</p>
              <p className="text-muted-foreground">dlcrzad@gmail.com</p>
            </div>

            <div>
              <p className="text-sm font-medium mb-2">Let's Talk</p>
              <div className="flex flex-wrap gap-3">
                <a href="https://calendly.com/dlcrzad/build-rank" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="rounded-md">
                    Schedule a Call
                  </Button>
                </a>
                <Link href="/contact">
                  <Button variant="outline" size="sm" className="rounded-md">
                    Contact Form
                  </Button>
                </Link>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium mb-2">Resume</p>
              <a
                href="https://drive.google.com/file/d/1H7MKGFDvkgvRl4weVbKkz0qJJ3xee2rO/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="sm" className="rounded-md">
                  View Resume
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
