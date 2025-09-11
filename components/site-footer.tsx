import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-soft-black border-t border-warm-yellow/20 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Build & Rank</h3>
            <p className="text-gray-400">
              Creating powerful digital experiences that drive business growth and success.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:dlcrzad@gmail.com" className="text-gray-400 hover:text-warm-yellow transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="tel:+1234567890" className="text-gray-400 hover:text-warm-yellow transition-colors">
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/web-development"
                  className="text-gray-400 hover:text-warm-yellow transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/seo" className="text-gray-400 hover:text-warm-yellow transition-colors">
                  SEO Optimization
                </Link>
              </li>
              <li>
                <Link href="/services/design" className="text-gray-400 hover:text-warm-yellow transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/services/marketing" className="text-gray-400 hover:text-warm-yellow transition-colors">
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-warm-yellow transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-warm-yellow transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-warm-yellow transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-warm-yellow transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Info</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <span>dlcrzad@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>Remote Worldwide</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-warm-yellow/20 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2024 Build & Rank. All rights reserved. Built with passion and precision.</p>
        </div>
      </div>
    </footer>
  )
}
