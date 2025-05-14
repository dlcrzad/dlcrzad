"use client"

import type React from "react"
import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, PhoneCall, Mail, MapPin, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // In a real implementation, you would send the form data to your email service
    // This is a simulation for the demo
    // The actual implementation would use a server action or API route

    try {
      // Example of what the server action would look like:
      // const result = await sendEmail({
      //   to: "dlcrzad@gmail.com",
      //   from: formState.email,
      //   subject: formState.subject,
      //   message: `Name: ${formState.name}\nEmail: ${formState.email}\nMessage: ${formState.message}`
      // });

      // For now, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      console.error("Error sending email:", error)
      setIsSubmitting(false)
      // In a real implementation, you would handle the error here
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="container-sm py-12">
        <Link href="/">
          <Button variant="ghost" size="sm" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>

        <h1 className="text-2xl font-medium mb-8">Contact</h1>

        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border rounded-lg p-6">
              <PhoneCall className="h-5 w-5 mb-3 text-muted-foreground" />
              <h3 className="font-medium mb-1">Phone</h3>
              <p className="text-sm text-muted-foreground">+63 927 955 5276</p>
            </div>

            <div className="border rounded-lg p-6">
              <Mail className="h-5 w-5 mb-3 text-muted-foreground" />
              <h3 className="font-medium mb-1">Email</h3>
              <p className="text-sm text-muted-foreground">dlcrzad@gmail.com</p>
            </div>

            <div className="border rounded-lg p-6">
              <MapPin className="h-5 w-5 mb-3 text-muted-foreground" />
              <h3 className="font-medium mb-1">Location</h3>
              <p className="text-sm text-muted-foreground">Angadanan, Isabela, Philippines</p>
            </div>
          </div>

          <div className="border rounded-lg p-6">
            <h2 className="text-lg font-medium mb-6">Send a Message</h2>

            {isSubmitted ? (
              <div className="flex flex-col items-center py-8">
                <CheckCircle className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-medium mb-2">Message Sent!</h3>
                <p className="text-muted-foreground text-center max-w-md mb-6">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <Button onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="hidden" name="recipient" value="dlcrzad@gmail.com" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={6}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
