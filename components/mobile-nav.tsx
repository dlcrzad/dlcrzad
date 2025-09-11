"use client"

import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-80">
        <div className="flex flex-col space-y-4 mt-8">
          <Link href="/" className="text-lg font-medium text-gray-900 hover:text-yellow-600">
            Home
          </Link>
          <Link href="/experience" className="text-lg font-medium text-gray-900 hover:text-yellow-600">
            Experience
          </Link>
          <Link href="/projects" className="text-lg font-medium text-gray-900 hover:text-yellow-600">
            Projects
          </Link>
          <Link href="/blog" className="text-lg font-medium text-gray-900 hover:text-yellow-600">
            Blog
          </Link>
          <Link href="/contact" className="text-lg font-medium text-gray-900 hover:text-yellow-600">
            Contact
          </Link>
          <div className="pt-4">
            <a href="https://calendly.com/dlcrzad/build-rank" target="_blank" rel="noopener noreferrer">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black w-full">Let's Connect</Button>
            </a>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
