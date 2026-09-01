'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Github, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

const nav = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Testimonials', href: '#testimonials' },
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
    description: 'A brighter, more discoverable home for campervan adventures across Hawaii.',
    popupDescription: 'A campervan rental affiliate website that I managed and redesigned, improving its structure, mobile experience, and SEO while building it into a comprehensive Hawaii camping guide through helpful campground guides, itineraries, and travel content.',
    website: 'https://lemondropcampers.com',
    skills: ['WordPress', 'Elementor', 'Neve', 'SEO', 'Content Strategy', 'Google Analytics', 'Web Design', 'Mobile Design', 'Performance Optimization'],
    imageUrl: 'https://jqnkglalztdgvjuz.public.blob.vercel-storage.com/Lemon%20Drop%20Campers%20Project%20of%20Ads.webp',
    color: 'project-orange',
  },
  {
    id: 'avos-inc',
    name: 'Avos Inc',
    type: 'Metal Fabrication / Web Design & SEO',
    location: 'Portland, Oregon, United States · Remote',
    role: 'Website Design and SEO',
    dateRange: 'November 2024 – July 2026',
    description: 'Metal fabrication website shaped through WordPress, SEO, and content optimization.',
    popupDescription: 'A construction company website where I am responsible for website development, content updates, SEO, and ongoing website maintenance.',
    website: 'https://avosinc.com',
    skills: ['WordPress', 'Elementor', 'Security', 'Website Gallery', 'Mobile Design', 'Developer', 'HTML', 'SEO', 'Website Optimization'],
    imageUrl: 'https://jqnkglalztdgvjuz.public.blob.vercel-storage.com/Avos%20Inc%20Project%20of%20Ads.webp',
    color: 'project-blue',
  },
  {
    id: 'rays-ukulele',
    name: "Ray's Ukulele",
    type: 'Tutorial Website / SEO & Web Design',
    description: 'A welcoming ukulele learning site shaped for practice, discovery, and growth.',
    popupDescription: 'A ukulele tutorial website where I am responsible for website design and structure, blog writing, SEO, and keeping the website organized, engaging, and easy to navigate.',
    website: 'https://raysukulele.com',
    dateRange: 'October 2025 – September 2026',
    role: 'Web Designer & SEO Specialist',
    location: 'Remote',
    skills: ['WordPress', 'Web Design', 'SEO', 'Blog Writing', 'Content Structure', 'Mobile Design'],
    imageUrl: 'https://jqnkglalztdgvjuz.public.blob.vercel-storage.com/Rays%20Ukulele%20Project%20of%20Ads.webp',
    color: 'project-lilac',
  },
  {
    id: 'glenrock-energy',
    name: 'Glenrock Energy',
    type: 'Web Design / Prairie Giraffe',
    description: 'A focused company website designed for a carbon-management team.',
    popupDescription: 'A carbon-management company website created through web design work with Prairie Giraffe.',
    location: 'Wyoming, United States · Prairie Giraffe',
    role: 'Web Designer',
    dateRange: 'August 2023 – March 2024',
    website: 'https://glenrockenergy.com',
    dateRange: 'August 2023 – March 2024',
    role: 'Web Designer',
    skills: ['Web Design', 'WordPress', 'Content Structure', 'Mobile Design'],
    imageUrl: 'https://jqnkglalztdgvjuz.public.blob.vercel-storage.com/Glenrock%20Energy%20Project%20of%20Ads.webp',
    color: 'project-blue',
  },
  {
    id: 'extreme-precision',
    name: 'Extreme Precision',
    type: 'Web Updates & SEO / Prairie Giraffe',
    description: 'An industrial services website maintained through clear, useful updates.',
    popupDescription: 'An industrial service provider website where I added sections, edited content, and handled ongoing website updates with Prairie Giraffe.',
    location: 'Wyoming, United States · Prairie Giraffe',
    role: 'Web Updates and SEO',
    dateRange: 'August 2023 – March 2024',
    website: 'https://ep-industrial.com',
    dateRange: 'August 2023 – March 2024',
    role: 'Web Designer - Tech VA',
    skills: ['Bricks Builder', 'Web Updates', 'SEO', 'Content Editing', 'HTML', 'Website Optimization'],
    imageUrl: 'https://jqnkglalztdgvjuz.public.blob.vercel-storage.com/Extreme%20Precision%20PG%20Ads.webp',
    color: 'project-orange',
  },
  {
    id: 'black-rock',
    name: 'Black Rock MRI',
    type: 'Web Updates & SEO / Prairie Giraffe',
    description: 'A focused MRI service page built for a diagnostic imaging provider.',
    popupDescription: 'A diagnostic imaging website where I created the MRI page and handled website updates with Prairie Giraffe using Elementor.',
    location: 'Wyoming, United States · Prairie Giraffe',
    role: 'Web Updates and SEO',
    dateRange: 'August 2023 – March 2024',
    website: 'https://blackrockmri.com/mri',
    dateRange: 'August 2023 – March 2024',
    role: 'Web Designer - Tech VA',
    skills: ['Elementor', 'Web Updates', 'SEO', 'Page Creation', 'Content Editing', 'Mobile Design'],
    imageUrl: 'https://jqnkglalztdgvjuz.public.blob.vercel-storage.com/Black%20Rock%20MRI%20Page%20PG%20Ads.webp',
    color: 'project-lilac',
  },
  {
    id: 'mc-welding',
    name: 'MC Welding',
    type: 'Web Design & SEO / Prairie Giraffe',
    description: 'A practical service website for welding, machining, and fabrication.',
    popupDescription: 'A welding, machining, and fabrication services website where I created and published pages with Prairie Giraffe using Bricks Builder.',
    location: 'Wyoming, United States · Prairie Giraffe',
    role: 'Web Design and SEO',
    dateRange: 'August 2023 – March 2024',
    website: 'https://mcweldingservicellc.com',
    dateRange: 'August 2023 – March 2024',
    role: 'Web Designer - Tech VA',
    skills: ['Bricks Builder', 'Web Design', 'SEO', 'Page Creation', 'Content Editing', 'Mobile Design'],
    imageUrl: 'https://jqnkglalztdgvjuz.public.blob.vercel-storage.com/MC%20Welding%20Project%20of%20Ads.webp',
    color: 'project-blue',
  },
]

const experience = [
  { period: 'Aug 2025 — Aug 2026', title: 'WordPress Dev and SEO Specialist', company: 'Lemon Drop Campers', location: 'Hawaii, United States', details: 'Managed and optimized a WordPress-based travel and campervan affiliate website, developed SEO-driven content, improved technical SEO, and optimized affiliate performance.' },
  { period: 'Nov 2024 — Jul 2026', title: 'Website Design and SEO', company: 'Avos Inc', location: 'Portland, Oregon, United States', details: 'Designed and updated the website with a focus on usability, responsiveness, visual consistency, service content, and on-page SEO.' },
  { period: 'Aug 2023 — Mar 2024', title: 'Web Designer', company: 'Prairie Giraffe', location: 'Wyoming, United States', website: 'https://prairiegiraffe.com', details: 'Tailored WordPress themes and plugins, developed 10+ websites with WordPress, Bricks, CSS, and Frames, and translated client requirements into functional web solutions.' },
  { period: 'Jan 2024 — Feb 2024', title: 'Junior Operations Manager', company: 'Prairie Giraffe', location: 'Wyoming, United States', details: 'Supported operations, client communication, and internal systems for a distributed web team.' },
  { period: 'Dec 2019 — Mar 2020', title: 'Administrative Assistant', company: 'Local Government Unit of Angadanan', location: 'Isabela, Philippines', details: 'Supported administrative operations, records, and day-to-day office coordination.' },
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
  const [activeExperience, setActiveExperience] = useState<(typeof experience)[number] | null>(null)
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  useEffect(() => {
    document.body.style.overflow = activeProject || activeExperience ? 'hidden' : ''
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveProject(null)
        setActiveExperience(null)
      }
    }
    if (activeProject || activeExperience) window.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [activeProject, activeExperience])

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

        <section id="projects" className="section-block content-section"><SectionHeading number="02" title="Selected projects" link="Let&apos;s work" href="#contact" /><p className="section-intro">A few thoughtful websites, content systems, and search strategies built for real people and growing businesses.</p><div className="project-grid">{projects.map((project, i) => <button className={`project-card ${project.color}`} key={project.name} onClick={() => setActiveProject(project)} aria-label={`View ${project.name} project`}><div className="project-art">{project.imageUrl ? <Image src={project.imageUrl} alt={`${project.name} website preview`} fill sizes="(max-width: 800px) 100vw, 240px" /> : <><span>0{i + 1}</span><ArrowUpRight /></>}</div><div className="project-meta"><p>{project.type}</p><h3>{project.name}</h3><span>{project.description}</span></div></button>)}</div></section>

        <section id="writing" className="section-block content-section landing-notes"><SectionHeading number="03" title="Notes from the studio" link="Read all" href="/blog" /><div className="post-list">{posts.map(([title, desc, date]) => <Link className="post-row" href="/blog" key={title}><div><h3>{title}</h3><p>{desc}</p></div><time>{date}</time><ArrowUpRight /></Link>)}</div></section>

        <section id="experience" className="section-block content-section"><SectionHeading number="04" title="Experience" link="My stack" href="#stack" /><div className="experience-list">{experience.map((item) => <button className="experience-row" key={`${item.company}-${item.title}`} onClick={() => setActiveExperience(item)}><time>{item.period}</time><h3>{item.title}</h3><p>{item.company}</p></button>)}</div><div id="stack" className="stack-wrap"><p className="label">Tools I use</p><div className="stack-list">{stack.map(item => <span key={item}>{item}</span>)}</div></div></section>

        <section id="testimonials" className="section-block content-section testimonial-section"><SectionHeading number="05" title="Kind words" link="Let&apos;s work" href="#contact" /><blockquote>“Adeline Dela Cruz is an outstanding WordPress and SEO Specialist who provided valuable support with web design, administrative tasks, SEO, and email management. Her attention to detail, creativity, and organizational skills greatly enhanced my productivity. Adeline consistently delivered quality work and handled multiple responsibilities. I highly recommend her to anyone seeking a reliable and skilled website manager and seo specialist. She is a true professional and will be a tremendous asset to any team.”<cite>— Kellee, Founder of Prairie Giraffe<br />Technology advocate · Gillette, Wyoming</cite></blockquote></section>

        <section id="contact" className="contact-section"><p className="eyebrow">06 / Have a good one</p><h2>Have a project<br /><em>in mind?</em></h2><div className="contact-layout"><div><p className="contact-copy">Tell me a little about what you&apos;re building, improving, or trying to make easier to find.</p><a className="contact-email" href="mailto:dlcrzad@gmail.com">dlcrzad@gmail.com <ArrowUpRight /></a></div><form className="contact-form" aria-live="polite" onSubmit={async (event) => { event.preventDefault(); setFormState('sending'); const form = event.currentTarget; try { const response = await fetch('/api/send-email', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(Object.fromEntries(new FormData(form))) }); if (response.ok) { setFormState('sent'); form.reset() } else { const payload = await response.json().catch(() => null); console.error('[v0] Contact form error:', payload?.error ?? response.statusText); setFormState('error') } } catch (error) { console.error('[v0] Contact form request failed:', error); setFormState('error') } }}><label>Name<input name="name" required /></label><label>Email<input name="email" type="email" required /></label><label>Subject<input name="subject" required /></label><label>Message<textarea name="message" rows={5} required /></label><button type="submit" disabled={formState === 'sending'}>{formState === 'sending' ? 'Sending…' : formState === 'sent' ? 'Message sent' : 'Send message'} <ArrowUpRight /></button>{formState === 'error' && <p className="form-status error">Something went wrong. Please try again.</p>}{formState === 'sent' && <p className="form-status">Thanks — I&apos;ll be in touch soon.</p>}</form></div></section>
        {activeExperience && <div className="project-modal-backdrop" role="presentation" onClick={() => setActiveExperience(null)}><section className="project-modal experience-modal" role="dialog" aria-modal="true" aria-labelledby="experience-modal-title" onClick={event => event.stopPropagation()}><button className="modal-close" onClick={() => setActiveExperience(null)} aria-label="Close experience details"><X /></button><div className="modal-copy"><p className="eyebrow">Experience / {activeExperience.company}</p><h2 id="experience-modal-title">{activeExperience.title}</h2><div className="project-facts"><span>{activeExperience.location}</span><span>{activeExperience.period}</span></div><p className="modal-description">{activeExperience.details}</p>{activeExperience.website && <a className="modal-website" href={activeExperience.website} target="_blank" rel="noreferrer">Visit prairiegiraffe.com <ArrowUpRight /></a>}</div></section></div>}
        {activeProject && <div className="project-modal-backdrop" role="presentation" onClick={() => setActiveProject(null)}><section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" onClick={event => event.stopPropagation()}><button className="modal-close" onClick={() => setActiveProject(null)} aria-label="Close project details"><X /></button><div className="modal-copy"><p className="eyebrow">Project / {activeProject.type}</p><h2 id="project-modal-title">{activeProject.name}</h2>{activeProject.location && <div className="project-facts"><span>{activeProject.location}</span><span>{activeProject.role}</span><span>{activeProject.dateRange}</span></div>}<p className="modal-description">{activeProject.popupDescription ?? activeProject.description}</p>{activeProject.skills && <div className="modal-skills">{activeProject.skills.map(skill => <span key={skill}>{skill}</span>)}</div>}{activeProject.website && <a className="modal-website" href={activeProject.website} target="_blank" rel="noreferrer">Visit {activeProject.website.replace(/^https?:\/\//, '').replace(/\/$/, '')} <ArrowUpRight /></a>}</div>{activeProject.imageUrl && <div className="project-gallery"><Image src={activeProject.imageUrl} alt={`${activeProject.name} project preview`} width={1600} height={2400} /></div>}</section></div>}
        <footer className="site-footer"><span>Adeline Dela Cruz</span><span>Built with care / 2026</span><span><Github /> <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a></span></footer>
      </main>
    </div>
  )
}

function SectionHeading({ number, title, link, href }: { number: string; title: string; link: string; href: string }) { return <div className="section-heading"><div><span>{number}</span><h2>{title}</h2></div><a href={href}>{link} <ArrowUpRight /></a></div> }
