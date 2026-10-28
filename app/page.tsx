import { MotionEnhancements } from "./motion-enhancements";

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

const featuredProjects = [
  {
    name: "Portal",
    description:
      "An integrated gateway to connected company applications. It manages authentication, password recovery, and role-based access to internal tools.",
    stack: ["React.js", "Tailwind CSS", "Zustand"],
  },
  {
    name: "Culture Activation Program",
    description:
      "An internal program supporting PNM’s business and culture initiatives across its branches, with dashboards, monthly reporting, approvals, and user and branch management.",
    stack: ["React.js", "Tailwind CSS", "Zustand"],
  },
  {
    name: "AO Onboarding",
    description:
      "A role-based application for monitoring internship activities, including attendance, activity logs, intern lists, dashboards, and user management.",
    stack: ["React.js", "Tailwind CSS", "Zustand"],
  },
  {
    name: "IFest",
    description:
      "An employee innovation program inviting PNM teams to develop ideas that improve competitiveness and efficiency in the ultra-micro industry and Indonesia’s digital ecosystem.",
    stack: ["React.js", "Tailwind CSS", "Zustand"],
  },
  {
    name: "EMS",
    description:
      "A web application for submitting, approving, and managing events, including preparation and accountability reporting.",
    stack: ["React.js", "Tailwind CSS", "Zustand"],
  },
  {
    name: "ITMS",
    description:
      "A promotion management application for candidate nominations, employee evaluations, and supervisor assessments within career development pathways.",
    stack: ["React.js", "Tailwind CSS", "Zustand"],
  },
  {
    name: "Kegiatan Simulasi Bisnis (PKM)",
    description:
      "A business process simulation application for tracking attendance, activities, work targets, and approvals for PKM employees.",
    stack: ["React.js", "Tailwind CSS", "Zustand"],
  },
  {
    name: "Beasiswa",
    description:
      "A scholarship application focused on managing employee, university, and registration-period master data.",
    stack: ["React.js", "Tailwind CSS", "Zustand"],
  },
  {
    name: "Pangkalan Data Universitas Mercu Buana",
    description:
      "A university data resource with authentication, role-based access, and embedded Power BI reporting.",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux"],
    url: "https://pd.mercubuana.ac.id/",
  },
  {
    name: "UMB Career & Alumni",
    description:
      "A university alumni website sharing job vacancies, events, and campus programs. Alvin contributed as a frontend developer.",
    stack: ["React.js", "React Bootstrap", "Material UI", "Axios", "React Hook Form"],
    url: "https://umbcan.mercubuana.ac.id/",
  },
  {
    name: "Portfolio Website MX Solution",
    description:
      "A product website for MX Solution, with product and collaboration information, articles, a client assessment, and an administration area.",
    stack: [
      "Next.js",
      "React.js",
      "Zustand",
      "Tailwind CSS",
      "Framer Motion",
      "React Hook Form",
      "Prisma",
      "MySQL",
    ],
    url: "https://mxindonesia.com/",
  },
];

const otherProjects = [
  {
    name: "Portfolio Website Jakarta Creative Hub",
    description:
      "A public website promoting Jakarta Creative Hub, its events, facilities, and articles.",
    stack: ["WordPress", "CSS"],
  },
  {
    name: "Furniture Website from Figma Design",
    description:
      "A frontend practice project recreating a furniture website design by AR Shakir.",
    stack: ["React.js", "Vite", "Tailwind CSS"],
  },
  {
    name: "YouTube Clone",
    description:
      "A YouTube-style application built to practice API integration and frontend development.",
    stack: ["React.js", "Vite", "RapidAPI", "Axios", "Tailwind CSS"],
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

function Stack({ items }: { items: string[] }) {
  return (
    <ul className="stack" aria-label="Technologies">
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}

export default function Home() {
  return (
    <>
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
        <MotionEnhancements />
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-left">
            <div className="hero-intro" data-intro>
              <p className="eyebrow">Frontend web developer</p>
              <h2>I build for the web.</h2>
              <p>Interfaces shaped around useful details, clear design, and performance.</p>
            </div>
            <div className="hero-count" data-intro>
              <strong>{featuredProjects.length + otherProjects.length}</strong>
              <span>projects in this portfolio</span>
            </div>
            <div className="hero-left-bottom">
              <p>Based in<br /><strong>Tangerang, Indonesia</strong></p>
              <a href="#about" className="text-link">Scroll to explore</a>
            </div>
          </div>

          <div className="hero-center">
            <div className="hero-center-meta"><span>Personal portfolio · 2026</span></div>
            <div className="hero-art" aria-hidden="true">
              <span className="hero-monogram">AI</span>
              <span className="hero-orbit hero-orbit-one" />
              <span className="hero-orbit hero-orbit-two" />
              <span className="hero-orange-dot" />
            </div>
            <div className="hero-name" data-intro>
              <h1 id="hero-title">Alvin<br />Irwanto<span>.</span></h1>
              <p>Frontend Web Developer <span>·</span> UI/UX Design</p>
            </div>
            <span className="hero-center-index" aria-hidden="true">01</span>
          </div>

          <aside className="hero-feature" aria-label="Featured project">
            <div className="feature-nav"><span>Selected work</span><span>{featuredProjects.length} / {featuredProjects.length + otherProjects.length}</span></div>
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

        <section className="content-section about-section page-grid" id="about">
          <SectionLabel number="01">About</SectionLabel>
          <div className="section-content about-content">
            <p className="section-lede" data-reveal>I enjoy a challenge and learning something new, especially in web development.</p>
            <div className="about-details" data-reveal>
              <p>I’ve worked across a co-working space, a university, and a startup. My focus is building websites that look considered and perform well for the people who use them.</p>
              <div>
                <h3>Technologies I work with</h3>
                <ul className="skill-list">
                  {skills.map((skill) => <li data-reveal key={skill}>{skill}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </section>

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

        <section className="content-section work-section page-grid" id="work">
          <SectionLabel number="03">Selected work</SectionLabel>
          <div className="section-content">
            <p className="section-lede work-intro" data-reveal>Web applications and websites built with teams across business, education, and creative work.</p>
            <div className="project-grid">
              {featuredProjects.map((project, index) => (
                <article className="project-card" data-reveal key={project.name}>
                  <div className="project-topline"><span>0{index + 1}</span></div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <Stack items={project.stack} />
                  {project.url && <a className="project-link" href={project.url} target="_blank" rel="noreferrer">Visit project</a>}
                </article>
              ))}
            </div>
            <div className="other-work">
              <h3 data-reveal>Other projects</h3>
              <div className="other-project-grid">
                {otherProjects.map((project) => (
                  <article className="other-project" data-reveal key={project.name}>
                    <h4>{project.name}</h4>
                    <p>{project.description}</p>
                    <Stack items={project.stack} />
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

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
