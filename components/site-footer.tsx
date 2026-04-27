import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-black">Build & Rank</h3>
            <p className="text-gray-600 text-sm">
              Creating powerful digital experiences that drive business growth.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:dlcrzad@gmail.com" className="text-gray-600 hover:text-black transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="tel:+1234567890" className="text-gray-600 hover:text-black transition-colors">
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-black">Pages</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/experience" className="text-gray-600 hover:text-black text-sm transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-600 hover:text-black text-sm transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-black text-sm transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-black text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-black">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/certifications" className="text-gray-600 hover:text-black text-sm transition-colors">
                  Certifications
                </Link>
              </li>
              <li>
                <Link href="/tech-stack" className="text-gray-600 hover:text-black text-sm transition-colors">
                  Tech Stack
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-black">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <Mail className="h-4 w-4" />
                <span>dlcrzad@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <MapPin className="h-4 w-4" />
                <span>Remote Worldwide</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-600 text-sm">© 2024 Build & Rank. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
