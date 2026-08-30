"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="text-lg font-bold text-black hover:opacity-70 transition-opacity">
          Adeline Dela Cruz
        </Link>
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-gray-600 hover:text-black transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="/experience"
              className="text-gray-600 hover:text-black transition-colors duration-300"
            >
              Experience
            </Link>
            <Link
              href="/projects"
              className="text-gray-600 hover:text-black transition-colors duration-300"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-black transition-colors duration-300"
            >
              Contact
            </Link>
          </nav>
          <a href="https://calendly.com/dlcrzad/build-rank" target="_blank" rel="noopener noreferrer">
            <Button className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded font-medium hidden md:inline-flex transition-all duration-300">
              Schedule Call
            </Button>
          </a>
          <button
            className="md:hidden text-gray-600 hover:text-black transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="px-6 py-4 space-y-4">
            <Link
              href="/"
              className="block text-gray-600 hover:text-black py-2 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/experience"
              className="block text-gray-600 hover:text-black py-2 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </Link>
            <Link
              href="/projects"
              className="block text-gray-600 hover:text-black py-2 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="block text-gray-600 hover:text-black py-2 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <a href="https://calendly.com/dlcrzad/build-rank" target="_blank" rel="noopener noreferrer">
              <Button className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded font-medium w-full transition-all duration-300">
                Schedule Call
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
