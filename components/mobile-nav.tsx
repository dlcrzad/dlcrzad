"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" type="button" onClick={() => setOpen(true)}>
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="flex flex-col">
        <nav className="flex flex-col gap-4 mt-8">
          <Link href="/" className="text-muted-foreground hover:text-foreground py-2" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link
            href="/experience"
            className="text-muted-foreground hover:text-foreground py-2"
            onClick={() => setOpen(false)}
          >
            Experience
          </Link>
          <Link
            href="/projects"
            className="text-muted-foreground hover:text-foreground py-2"
            onClick={() => setOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/blog"
            className="text-muted-foreground hover:text-foreground py-2"
            onClick={() => setOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-muted-foreground hover:text-foreground py-2"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/tech-stack"
            className="text-muted-foreground hover:text-foreground py-2"
            onClick={() => setOpen(false)}
          >
            Tech Stack
          </Link>
          <div className="mt-4">
            <ThemeToggle />
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
