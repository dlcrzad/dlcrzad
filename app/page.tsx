'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, BriefcaseBusiness, Code2, FileText, FolderKanban, Github, Globe2, Menu, MessageCircle, Monitor, Moon, PanelsTopLeft, Sparkles, Users, X } from 'lucide-react'
import { useState } from 'react'

const nav = [
  { label: 'About', href: '#about', icon: Globe2 },
  { label: 'Writing', href: '#writing', icon: FileText },
  { label: 'Projects', href: '#projects', icon: FolderKanban },
  { label: 'Experience', href: '#experience', icon: BriefcaseBusiness },
  { label: 'Contact', href: '#contact', icon: MessageCircle },
]

const posts = [
  ['How I build websites that get found', 'A practical look at the design and SEO decisions behind a durable website.', 'Aug 2026'],
  ['The quiet power of a clear content system', 'Why good structure makes every page easier to write, ship, and grow.', 'Jul 2026'],
  ['Designing for the people behind the metric', 'A reminder that analytics are only useful when they lead to better experiences.', 'Jun 2026'],
]

const projects = [
  { name: 'Avos Inc', type: 'Brand site / SEO', description: 'A clear, conversion-minded home for a growing digital studio.', color: 'project-blue' },
  { name: 'Lemon Drop Campers', type: 'Travel / Editorial', description: 'A warm travel resource built for discovery and organic search.', color: 'project-orange' },
  { name: 'Dela Cruz Studio', type: 'Portfolio / Identity', description: 'A living notebook for experiments in web design and content.', color: 'project-lilac' },
]

const experience = [
  ['2026 — now', 'Web Designer & SEO Specialist', 'Avos Inc'],
  ['2024 — 2026', 'Independent Web Designer', 'Freelance'],
  ['2022 — 2024', 'Content & Search Strategist', 'Remote teams'],
]

const stack = ['WordPress', 'Webflow', 'Figma', 'SEO', 'Google Analytics', 'HTML / CSS', 'Content strategy', 'Email marketing']

export default function HomePage() {
  const [mobileOpen, setMobileOpen] = useState(false)
  return (
    <div className="portfolio-shell">
      <aside className="site-sidebar">
        <Link href="#about" className="brand-mark">Adeline Dela Cruz</Link>
        <p className="brand-caption">Web designer & search strategist</p>
        <nav className="sidebar-nav" aria-label="Main navigation">
          {nav.map(({ label, href, icon: Icon }) => <a key={href} href={href}><Icon />{label}</a>)}
        </nav>
        <div className="sidebar-rule" />
        <div className="sidebar-links">
          <a href="mailto:dlcrzad@gmail.com">Email <ArrowUpRight /></a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight /></a>
          <a href="https://github.com" target="_blank" rel="noreferrer">GitHub <ArrowUpRight /></a>
        </div>
        <div className="sidebar-bottom">
          <span className="status-dot" /> Available for select projects
          <span className="copyright">© 2026 / Isabela, PH</span>
        </div>
      </aside>

      <header className="mobile-header">
        <Link href="#about" className="brand-mark">Adeline / DC</Link>
        <button className="menu-button" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? 'Close menu' : 'Open menu'}>{mobileOpen ? <X /> : <Menu />}</button>
        {mobileOpen && <nav className="mobile-nav">{nav.map(({ label, href }) => <a key={href} href={href} onClick={() => setMobileOpen(false)}>{label}</a>)}</nav>}
      </header>

      <main className="portfolio-main">
        <section id="about" className="hero-section section-block">
          <div className="hero-copy">
            <p className="eyebrow">01 / Hello there</p>
            <h1>Websites with<br /><em>something to say.</em></h1>
            <p className="hero-intro">I&apos;m Adeline — a web designer and SEO specialist helping thoughtful businesses become easier to find, understand, and remember.</p>
            <div className="hero-actions"><a className="text-link" href="mailto:dlcrzad@gmail.com">Let&apos;s work together <ArrowUpRight /></a><a className="text-link muted-link" href="#writing">Read the notes <ArrowUpRight /></a></div>
          </div>
          <div className="portrait-frame"><Image src="/images/profile-transparent.png" alt="Portrait of Adeline Dela Cruz" fill sizes="(max-width: 768px) 80vw, 320px" className="portrait" priority /></div>
          <div className="hero-note">A small independent practice<br />for a more considered web.</div>
        </section>

        <section className="stats-row" aria-label="Career highlights"><div><strong>06+</strong><span>years creating</span></div><div><strong>32</strong><span>sites shipped</span></div><div><strong>∞</strong><span>things to learn</span></div></section>

        <section id="writing" className="section-block content-section"><SectionHeading number="02" title="Writing" link="View all notes" href="/blog" /><div className="post-list">{posts.map(([title, desc, date]) => <Link className="post-row" href="/blog" key={title}><div><h3>{title}</h3><p>{desc}</p></div><time>{date}</time><ArrowUpRight /></Link>)}</div></section>

        <section id="projects" className="section-block content-section"><SectionHeading number="03" title="Selected projects" link="View archive" href="/projects" /><div className="project-grid">{projects.map((project, i) => <article className={`project-card ${project.color}`} key={project.name}><div className="project-art"><span>0{i + 1}</span><PanelsTopLeft /></div><div className="project-meta"><p>{project.type}</p><h3>{project.name}</h3><span>{project.description}</span></div><ArrowUpRight className="project-arrow" /></article>)}</div></section>

        <section id="experience" className="section-block content-section"><SectionHeading number="04" title="Experience" link="My stack" href="#stack" /><div className="experience-list">{experience.map(([year, title, company]) => <div className="experience-row" key={title}><time>{year}</time><h3>{title}</h3><p>{company}</p></div>)}</div><div id="stack" className="stack-wrap"><p className="label">Tools I use</p><div className="stack-list">{stack.map(item => <span key={item}>{item}</span>)}</div></div></section>

        <section className="section-block content-section split-section"><div><SectionHeading number="05" title="Kind words" link="More recommendations" href="#contact" /><blockquote>“Adeline brings a rare mix of taste, patience, and practical thinking. The work always feels like it belongs.”<cite>— A former collaborator</cite></blockquote></div><div className="principles"><p className="label">The approach</p><p>Good work starts with listening. Then comes the structure, the details, and the care to make it last.</p></div></section>

        <section id="contact" className="contact-section"><Sparkles /><p className="eyebrow">06 / Have a good one</p><h2>Have a project<br /><em>in mind?</em></h2><a className="contact-email" href="mailto:dlcrzad@gmail.com">dlcrzad@gmail.com <ArrowUpRight /></a></section>
        <footer className="site-footer"><span>Adeline Dela Cruz</span><span>Built with care / 2026</span><span><Github /> <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a></span></footer>
      </main>
    </div>
  )
}

function SectionHeading({ number, title, link, href }: { number: string; title: string; link: string; href: string }) { return <div className="section-heading"><div><span>{number}</span><h2>{title}</h2></div><a href={href}>{link} <ArrowUpRight /></a></div> }
