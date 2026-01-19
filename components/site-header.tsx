"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-charcoal/95 backdrop-blur-sm border-b border-warm-yellow/30 animate-slide-up">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-white hover:text-warm-yellow transition-colors duration-300">
          Build & Rank
        </Link>
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-gray-300 hover:text-warm-yellow transition-colors duration-300 relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-warm-yellow transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/experience"
              className="text-gray-300 hover:text-warm-yellow transition-colors duration-300 relative group"
            >
              Experience
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-warm-yellow transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/projects"
              className="text-gray-300 hover:text-warm-yellow transition-colors duration-300 relative group"
            >
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-warm-yellow transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/contact"
              className="text-gray-300 hover:text-warm-yellow transition-colors duration-300 relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-warm-yellow transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
          <a href="https://calendly.com/dlcrzad/build-rank" target="_blank" rel="noopener noreferrer">
            <Button className="bg-warm-yellow hover:bg-warm-yellow/90 hover:shadow-lg text-black px-4 py-2 rounded-full font-medium hidden md:inline-flex transition-all duration-300 hover-lift">
              Let's Connect
            </Button>
          </a>
          <button
            className="md:hidden text-gray-300 hover:text-warm-yellow transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-charcoal/98 backdrop-blur-sm border-t border-warm-yellow/30 animate-slide-up">
          <nav className="px-6 py-4 space-y-4">
            <Link
              href="/"
              className="block text-gray-300 hover:text-warm-yellow py-2 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/experience"
              className="block text-gray-300 hover:text-warm-yellow py-2 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </Link>
            <Link
              href="/projects"
              className="block text-gray-300 hover:text-warm-yellow py-2 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="block text-gray-300 hover:text-warm-yellow py-2 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <a href="https://calendly.com/dlcrzad/build-rank" target="_blank" rel="noopener noreferrer">
              <Button className="bg-warm-yellow hover:bg-warm-yellow/90 hover:shadow-lg text-black px-4 py-2 rounded-full font-medium w-full transition-all duration-300">
                Let's Connect
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
