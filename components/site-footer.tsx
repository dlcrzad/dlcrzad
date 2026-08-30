import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-black">Speaking</h4>
            <ul className="space-y-2">
              <li>
                <p className="text-gray-600 hover:text-black text-xs transition-colors">Available for speaking at events</p>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-black">Social Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://linkedin.com" className="text-gray-600 hover:text-black text-xs transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com" className="text-gray-600 hover:text-black text-xs transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://instagram.com" className="text-gray-600 hover:text-black text-xs transition-colors">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-black">Email</h4>
            <div className="space-y-2">
              <p className="text-gray-600 text-xs">dlcrzad@gmail.com</p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-black">Let's Talk</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://calendly.com/dlcrzad/build-rank" className="text-gray-600 hover:text-black text-xs transition-colors">
                  Schedule a Call
                </a>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-black text-xs transition-colors">
                  Read my blog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 text-center">
          <p className="text-gray-600 text-xs">© 2026 Adeline Dela Cruz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
