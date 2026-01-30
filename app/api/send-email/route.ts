import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Configure your email service (lazy initialization)
let transporter: nodemailer.Transporter | null = null

const getTransporter = () => {
  if (!transporter) {
    const emailFrom = process.env.EMAIL_FROM
    const emailPassword = process.env.EMAIL_PASSWORD

    if (!emailFrom || !emailPassword) {
      throw new Error('Email configuration is missing. Please set EMAIL_FROM and EMAIL_PASSWORD in environment variables.')
    }

    transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailFrom,
        pass: emailPassword,
      },
    })
  }
  return transporter
}

// Email validation helper
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Sanitize HTML to prevent injection
const sanitizeInput = (input: string): string => {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

// Validate environment variables
const validateEnv = () => {
  const emailFrom = process.env.EMAIL_FROM
  const emailPassword = process.env.EMAIL_PASSWORD

  if (!emailFrom || !emailPassword) {
    throw new Error('Email configuration is missing. Please set EMAIL_FROM and EMAIL_PASSWORD in environment variables.')
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate input
    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Sanitize inputs to prevent HTML injection
    const sanitizedName = sanitizeInput(name.trim())
    const sanitizedSubject = sanitizeInput(subject.trim())
    const sanitizedMessage = sanitizeInput(message.trim())

    // Email to you
    const mailToYou = {
      from: process.env.EMAIL_FROM,
      to: 'dlcrzad@gmail.com',
      subject: `New Contact Form Submission: ${sanitizedSubject}`,
      html: `
        <h2>New Message from Your Website</h2>
        <p><strong>Name:</strong> ${sanitizedName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${sanitizedSubject}</p>
        <h3>Message:</h3>
        <p>${sanitizedMessage.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>This message was sent from your contact form.</em></p>
      `,
    }

    // Confirmation email to client
    const mailToClient = {
      from: process.env.EMAIL_FROM,
      to: email,
      subject: 'We received your message!',
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Hi ${sanitizedName},</p>
        <p>I've received your message and will get back to you within 24 hours.</p>
        <h3>Your Message Summary:</h3>
        <p><strong>Subject:</strong> ${sanitizedSubject}</p>
        <p><strong>Message:</strong></p>
        <p>${sanitizedMessage.replace(/\n/g, '<br>')}</p>
        <hr>
        <p>Best regards,<br>Adeline Dela Cruz</p>
      `,
    }

    // Get transporter and send both emails
    try {
      const emailTransporter = getTransporter()
      await emailTransporter.sendMail(mailToYou)
      await emailTransporter.sendMail(mailToClient)
    } catch (transporterError) {
      console.error('Transporter error:', transporterError)
      return NextResponse.json(
        { error: 'Email service is not properly configured. Please contact the administrator.' },
        { status: 503 }
      )
    }

    return NextResponse.json(
      { success: true, message: 'Email sent successfully!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Email error:', error)
    const errorMessage = error instanceof Error ? error.message : 'Failed to send email'
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
}
