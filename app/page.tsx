'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Github, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

const nav = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const projects = [
  {
    id: 'lemon-drop',
    name: 'Lemon Drop Campers',
    type: 'Campervan Website / SEO & Web Design',
    location: 'Hawaii, United States',
    role: 'Web Designer & SEO Specialist',
    dateRange: 'August 2025 – August 2026',
    description: 'A campervan rental affiliate website that I managed and redesigned, improving its structure, mobile experience, and SEO while building it into a comprehensive Hawaii camping guide through helpful campground guides, itineraries, and travel content.',
    website: 'https://lemondropcampers.com',
    skills: ['WordPress', 'Elementor', 'Neve', 'SEO', 'Content Strategy', 'Google Analytics', 'Web Design', 'Mobile Design', 'Performance Optimization'],
    imageUrl: 'https://jqnkglalztdgvjuz.public.blob.vercel-storage.com/Lemon%20Drop%20Campers%20Project%20of%20Ads.webp',
    color: 'project-orange',
  },
  {
    id: 'avos-inc',
    name: 'Avos Inc',
    type: 'Brand site / SEO',
    description: 'A clear, conversion-minded home for a growing digital studio.',
    color: 'project-blue',
  },
  {
    id: 'dela-cruz',
    name: 'Dela Cruz Studio',
    type: 'Portfolio / Identity',
    description: 'A living notebook for experiments in web design and content.',
    color: 'project-lilac',
  },
]

const experience = [
  ['2026 — now', 'Web Designer & SEO Specialist', 'Avos Inc'],
  ['2024 — 2026', 'Independent Web Designer', 'Freelance'],
  ['2022 — 2024', 'Content & Search Strategist', 'Remote teams'],
]
const stack = ['WordPress', 'Webflow', 'Figma', 'SEO', 'Google Analytics', 'HTML / CSS', 'Content strategy', 'Email marketing']

const posts = [
  ['How I build websites that get found', 'A practical look at the design and SEO decisions behind a durable website.', 'Aug 2026'],
  ['The quiet power of a clear content system', 'Why good structure makes every page easier to write, ship, and grow.', 'Jul 2026'],
  ['Designing for the people behind the metric', 'A reminder that analytics are only useful when they lead to better experiences.', 'Jun 2026'],
]

export default function HomePage() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeProject, setActiveProject] = useState<(typeof projects)[number] | null>(null)

  useEffect(() => {
    document.body.style.overflow = activeProject ? 'hidden' : ''
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveProject(null)
    }
    if (activeProject) window.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [activeProject])

  return (
    <div className="portfolio-shell">
      <aside className="site-sidebar">
        <Link href="#about" className="brand-mark">Adeline Dela Cruz</Link>
        <p className="brand-caption">Web designer & search strategist</p>
        <nav className="sidebar-nav" aria-label="Main navigation">
          {nav.map(({ label, href }) => <a key={href} href={href}>{label}</a>)}
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
            <div className="hero-actions"><a className="text-link" href="mailto:dlcrzad@gmail.com">Let&apos;s work together <ArrowUpRight /></a><a className="text-link muted-link" href="#projects">View the work <ArrowUpRight /></a></div>
          </div>
          <div className="portrait-frame"><Image src="/images/profile-transparent.png" alt="Portrait of Adeline Dela Cruz" fill sizes="(max-width: 768px) 80vw, 320px" className="portrait" priority /></div>
          <div className="hero-note">A small independent practice<br />for a more considered web.</div>
        </section>

        <section className="stats-row" aria-label="Career highlights"><div><strong>06+</strong><span>years creating</span></div><div><strong>32</strong><span>sites shipped</span></div><div><strong>∞</strong><span>things to learn</span></div></section>

        <section id="projects" className="section-block content-section"><SectionHeading number="02" title="Selected projects" link="Let&apos;s work" href="#contact" /><p className="section-intro">A few thoughtful websites, content systems, and search strategies built for real people and growing businesses.</p><div className="project-grid">{projects.map((project, i) => <button className={`project-card ${project.color}`} key={project.name} onClick={() => setActiveProject(project)} aria-label={`View ${project.name} project`}><div className="project-art">{project.id === 'lemon-drop' ? <Image src="/images/lemon-drop-featured.png" alt="Lemon Drop Campers website homepage" fill sizes="(max-width: 800px) 100vw, 240px" /> : <><span>0{i + 1}</span><ArrowUpRight /></>}</div><div className="project-meta"><p>{project.type}</p><h3>{project.name}</h3><span>{project.description}</span></div></button>)}</div></section>

        <section id="writing" className="section-block content-section landing-notes"><SectionHeading number="03" title="Notes from the studio" link="Read all" href="/blog" /><div className="post-list">{posts.map(([title, desc, date]) => <Link className="post-row" href="/blog" key={title}><div><h3>{title}</h3><p>{desc}</p></div><time>{date}</time><ArrowUpRight /></Link>)}</div></section>

        <section id="experience" className="section-block content-section archive-section"><SectionHeading number="04" title="Experience" link="My stack" href="#stack" /><div className="experience-list">{experience.map(([year, title, company]) => <div className="experience-row" key={title}><time>{year}</time><h3>{title}</h3><p>{company}</p></div>)}</div><div id="stack" className="stack-wrap"><p className="label">Tools I use</p><div className="stack-list">{stack.map(item => <span key={item}>{item}</span>)}</div></div></section>

        <section className="section-block content-section split-section archive-section"><div><SectionHeading number="05" title="Kind words" link="More recommendations" href="#contact" /><blockquote>“Adeline brings a rare mix of taste, patience, and practical thinking. The work always feels like it belongs.”<cite>— A former collaborator</cite></blockquote></div><div className="principles"><p className="label">The approach</p><p>Good work starts with listening. Then comes the structure, the details, and the care to make it last.</p></div></section>

        <section id="contact" className="contact-section"><p className="eyebrow">06 / Have a good one</p><h2>Have a project<br /><em>in mind?</em></h2><a className="contact-email" href="mailto:dlcrzad@gmail.com">dlcrzad@gmail.com <ArrowUpRight /></a></section>
        {activeProject && <div className="project-modal-backdrop" role="presentation" onClick={() => setActiveProject(null)}><section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" onClick={event => event.stopPropagation()}><button className="modal-close" onClick={() => setActiveProject(null)} aria-label="Close project details"><X /></button><div className="modal-copy"><p className="eyebrow">Project / {activeProject.type}</p><h2 id="project-modal-title">{activeProject.name}</h2>{activeProject.location && <div className="project-facts"><span>{activeProject.location}</span><span>{activeProject.role}</span><span>{activeProject.dateRange}</span></div>}<p className="modal-description">{activeProject.description}</p>{activeProject.skills && <div className="modal-skills">{activeProject.skills.map(skill => <span key={skill}>{skill}</span>)}</div>}{activeProject.website && <a className="modal-website" href={activeProject.website} target="_blank" rel="noreferrer">Visit lemondropcampers.com <ArrowUpRight /></a>}</div>{activeProject.imageUrl && <div className="project-gallery"><Image src={activeProject.imageUrl} alt={`${activeProject.name} project preview`} width={1600} height={2400} /></div>}</section></div>}
        <footer className="site-footer"><span>Adeline Dela Cruz</span><span>Built with care / 2026</span><span><Github /> <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a></span></footer>
      </main>
    </div>
  )
}

function SectionHeading({ number, title, link, href }: { number: string; title: string; link: string; href: string }) { return <div className="section-heading"><div><span>{number}</span><h2>{title}</h2></div><a href={href}>{link} <ArrowUpRight /></a></div> }
