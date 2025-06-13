"use client"

import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileNav } from "@/components/mobile-nav"

export function SiteHeader() {
  return (
    <header className="py-6 border-b border-border">
      <div className="container-sm flex justify-between items-center">
        <Link href="/" className="font-medium">
          Build & Rank
        </Link>
        <div className="flex items-center gap-2">
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-muted-foreground hover:text-foreground text-sm">
              Home
            </Link>
            <Link href="/experience" className="text-muted-foreground hover:text-foreground text-sm">
              Experience
            </Link>
            <Link href="/certifications" className="text-muted-foreground hover:text-foreground text-sm">
              Certifications
            </Link>
            <Link href="/projects" className="text-muted-foreground hover:text-foreground text-sm">
              Projects
            </Link>
            <Link href="/blog" className="text-muted-foreground hover:text-foreground text-sm">
              Blog
            </Link>
            <Link href="/contact" className="text-muted-foreground hover:text-foreground text-sm">
              Contact
            </Link>
          </nav>
          <ThemeToggle />
          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}
