import type React from "react"
import type { Metadata } from "next"
import { DM_Sans, IBM_Plex_Mono } from "next/font/google"
import "./globals.css"

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" })
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "Adeline Dela Cruz — Web design & search strategy",
  description:
    "Adeline Dela Cruz is a web designer and SEO specialist creating thoughtful, discoverable websites.",
  generator: 'v0.dev',
  icons: {
    icon: "/images/profile-transparent.png",
    apple: "/images/profile-transparent.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${dmSans.variable} ${plexMono.variable} ${dmSans.className}`}>
        {children}
      </body>
    </html>
  )
}
