import { MotionEnhancements } from "./motion-enhancements";
import { AwwwardsCursor } from "./components/awwwards-cursor";
import { ScrollHUD } from "./components/scroll-hud";
import { InteractiveHeroCanvas } from "./components/interactive-canvas";
import { Marquee } from "./components/marquee";
import { ProjectShowcase } from "./components/project-showcase";

const cvUrl =
  "https://portfolio-alvin.vercel.app/Frontend_Web%20Developer_Alvin%20Irwanto.pdf";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "WordPress",
  "React",
  "Figma",
  "Tailwind CSS",
  "Next.js",
  "GitHub",
  "Framer Motion",
  "MongoDB",
  "TanStack",
];

const experience = [
  {
    company: "Lawencon Internasional",
    role: "Front-end Web Developer",
    dates: "March 2024 — Present",
    url: "https://lawencon.com/",
    highlights: [
      "Built website interfaces from UI/UX designs.",
      "Connected frontend applications to backend services through APIs.",
      "Created Dockerfiles for deployment.",
      "Maintained and updated existing client websites.",
    ],
  },
  {
    company: "MX Indonesia",
    role: "Full-Stack Web Developer",
    dates: "January 2023 — December 2023",
    url: "https://mxindonesia.com/",
    highlights: [
      "Built website interfaces from UI/UX designs and connected them to backend APIs.",
      "Developed backend features with Next.js, Prisma, MySQL, Axios, Zustand, and React Hook Form.",
      "Deployed websites to virtual machines with Docker and maintained existing client sites.",
      "Managed a small creative team of frontend developers, a designer, and a content writer.",
    ],
  },
  {
    company: "MX Indonesia",
    role: "Web Developer Intern",
    dates: "April 2022 — December 2022",
    url: "https://mxindonesia.com/",
    highlights: [
      "Built WordPress websites from UI/UX designs and maintained existing client sites.",
      "Created websites with React.js and Node.js.",
      "Deployed websites to virtual machines with Docker.",
      "Learned and applied current web technologies during the internship.",
    ],
  },
  {
    company: "UMB Library",
    role: "Data Entry Intern",
    dates: "January 2022 — June 2022",
    url: "https://lib.mercubuana.ac.id/id",
    highlights: [
      "Entered student thesis files into the library system according to its requirements.",
      "Helped maintain library books.",
      "Created a Python program to semi-automate data entry.",
    ],
  },
  {
    company: "Jakarta Creative Hub",
    role: "Web Developer Intern",
    dates: "November 2019 — November 2020",
    url: "https://jakartacreativehub.jakarta.go.id/",
    highlights: [
      "Worked with a designer to plan the website’s visual direction.",
      "Built the website with WordPress and deployed it to the server.",
    ],
  },
];

const certifications = [
  {
    name: "Belajar Dasar Pemrograman Web",
    dates: "13 June 2022 — 13 June 2025",
    url: "https://www.dicoding.com/certificates/JLX1GW02NZ72",
  },
  {
    name: "Belajar Dasar Pemrograman JavaScript",
    dates: "28 June 2022 — 28 June 2025",
    url: "https://www.dicoding.com/certificates/0LZ0161RRP65",
  },
  {
    name: "Belajar Membuat Front-End Web untuk Pemula",
    dates: "21 July 2022 — 21 July 2025",
    url: "https://www.dicoding.com/certificates/6RPND7VDRZ2M",
  },
  {
    name: "Belajar Membuat Aplikasi Web dengan React",
    dates: "06 August 2022 — 06 August 2025",
    url: "https://www.dicoding.com/certificates/L4PQ4Y964XO1",
  },
];

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <div className="section-label" data-reveal>
      <span className="section-number" aria-hidden="true">{number}</span>
      <h2>{children}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <AwwwardsCursor />
      <ScrollHUD />
      <MotionEnhancements />

      {/* 1. Navbar: exact original layout */}
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Alvin Irwanto, home">
          <span className="wordmark-mark" aria-hidden="true">AI</span>
          <span className="wordmark-name">Alvin<br />Irwanto</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="cv-link" href={cvUrl} target="_blank" rel="noreferrer">
          <span>Download CV</span><small>PDF</small>
        </a>
      </header>

      <main id="top">
        {/* Hero Section */}
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-left">
            <div className="hero-intro" data-intro>
              <p className="eyebrow">Frontend web developer</p>
              <h2>I build for the web.</h2>
              <p>Interfaces shaped around useful details, clear design, and performance.</p>
            </div>
            <div className="hero-count" data-intro>
              <strong>14</strong>
              <span>projects in this portfolio</span>
            </div>
            <div className="hero-left-bottom">
              <p>Based in<br /><strong>Tangerang, Indonesia</strong></p>
              <a href="#about" className="text-link">Scroll to explore</a>
            </div>
          </div>

          <div className="hero-center">
            <div className="hero-center-meta">
              <span>Personal portfolio · 2026</span>
            </div>
            <InteractiveHeroCanvas />
            <div className="hero-name" data-intro>
              <h1 id="hero-title">Alvin<br />Irwanto<span>.</span></h1>
              <p>Frontend Web Developer <span>·</span> UI/UX Design</p>
            </div>
            <span className="hero-center-index" aria-hidden="true">01</span>
          </div>

          <aside className="hero-feature" aria-label="Featured project">
            <div className="feature-nav">
              <span>Selected work</span>
              <span>01 / 14</span>
            </div>
            <div className="feature-art" data-intro aria-hidden="true">
              <span className="feature-art-mark">MX</span>
              <span className="feature-art-ring" />
              <span className="feature-art-dot" />
            </div>
            <div className="feature-copy" data-intro>
              <p className="eyebrow">Website / Product</p>
              <h2>Portfolio Website<br />MX Solution</h2>
              <p>Product information, articles, client assessment, and administration.</p>
              <a href="https://mxindonesia.com/" target="_blank" rel="noreferrer" className="text-link">Visit MX Indonesia</a>
            </div>
          </aside>
        </section>

        {/* Kinetic Marquee Ticker */}
        <Marquee speed={32} />

        {/* Section 01: About */}
        <section className="content-section about-section page-grid" id="about">
          <SectionLabel number="01">About</SectionLabel>
          <div className="section-content about-content">
            <p className="section-lede" data-reveal>I enjoy a challenge and learning something new, especially in web development.</p>
            <div className="about-details" data-reveal>
              <p>I’ve worked across a co-working space, a university, and a startup. My focus is building websites that look considered and perform well for the people who use them.</p>
              <div>
                <h3>Technologies I work with</h3>
                <ul className="skill-list">
                  {skills.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Section 02: Experience - Original timeline structure so it NEVER disappears */}
        <section className="content-section experience-section page-grid" id="experience">
          <SectionLabel number="02">Experience</SectionLabel>
          <div className="section-content">
            <p className="section-lede experience-intro" data-reveal>Learning by building has shaped my work in frontend development, full-stack projects, and web operations.</p>
            <div className="timeline">
              {experience.map((job, index) => (
                <article className="timeline-item" data-reveal key={`${job.company}-${job.role}`}>
                  <div className="timeline-index" aria-hidden="true">0{index + 1}</div>
                  <div className="timeline-main">
                    <div className="job-heading">
                      <div>
                        <h3>{job.role}</h3>
                        <a className="company-link" href={job.url} target="_blank" rel="noreferrer">{job.company}</a>
                      </div>
                      <p className="date-range">{job.dates}</p>
                    </div>
                    <ul className="detail-list">
                      {job.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
            <div className="certifications" data-reveal>
              <h3>Certifications</h3>
              <ul>
                {certifications.map((cert) => (
                  <li data-reveal key={cert.name}>
                    <a href={cert.url} target="_blank" rel="noreferrer">{cert.name}</a>
                    <span>{cert.dates}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 2. Section 03: Selected Work with robust Grid / Index view */}
        <section className="content-section work-section page-grid" id="work">
          <SectionLabel number="03">Selected work</SectionLabel>
          <div className="section-content">
            <p className="section-lede work-intro" data-reveal>Web applications and websites built with teams across business, education, and creative work.</p>
            <ProjectShowcase />
          </div>
        </section>

        {/* 1. Section 04: Contact - exact original layout */}
        <section className="contact-section page-grid" id="contact">
          <SectionLabel number="04">Contact</SectionLabel>
          <div className="section-content contact-content">
            <p className="section-lede" data-reveal>Have a project in mind?</p>
            <div className="contact-bottom" data-reveal>
              <p>I’m looking forward to starting a great project with you.</p>
              <a className="contact-cta" href="https://www.linkedin.com/in/alvin-irwanto/" target="_blank" rel="noreferrer">Get in touch on LinkedIn</a>
            </div>
            <div className="contact-meta" data-reveal>
              <p>Kunciran Indah, Pinang<br />Kota Tangerang, Banten 15144<br />Indonesia</p>
              <div className="social-links" aria-label="Social links">
                <a href="https://github.com/alvinirwanto" target="_blank" rel="noreferrer">GitHub</a>
                <a href="https://www.instagram.com/alvinirwanto/" target="_blank" rel="noreferrer">Instagram</a>
                <a href="https://www.linkedin.com/in/alvin-irwanto/" target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="wordmark" href="#top"><span className="wordmark-mark" aria-hidden="true">AI</span><span className="wordmark-name">Alvin<br />Irwanto</span></a>
        <p>Alvin Irwanto. All rights reserved.</p>
        <a href="#top">Back to top</a>
      </footer>
    </>
  );
}
