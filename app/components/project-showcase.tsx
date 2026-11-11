"use client";

import React, { useState, useEffect } from "react";
import { soundManager } from "./sound-effects";

export interface ProjectItem {
  id: string;
  name: string;
  category: "Enterprise" | "Web Apps" | "Practice";
  categoryLabel: string;
  role: string;
  year: string;
  company?: string;
  description: string;
  details?: string;
  stack: string[];
  url?: string;
  featured?: boolean;
}

const ALL_PROJECTS: ProjectItem[] = [
  {
    id: "portal",
    name: "Portal Gateway",
    category: "Enterprise",
    categoryLabel: "Enterprise & Systems",
    role: "Front-end Web Developer",
    year: "2024",
    company: "Lawencon Internasional",
    description: "An integrated gateway to connected company applications with role-based access, SSO auth, and recovery workflows.",
    details: "Architected modern responsive UI components with React and Tailwind CSS. Implemented centralized authentication flows, JWT token lifecycle management, and dynamic navigation states backed by Zustand store.",
    stack: ["React.js", "Tailwind CSS", "Zustand", "REST APIs"],
    featured: true,
  },
  {
    id: "culture-activation",
    name: "Culture Activation Program",
    category: "Enterprise",
    categoryLabel: "Enterprise & Systems",
    role: "Front-end Web Developer",
    year: "2024",
    company: "PNM / Lawencon",
    description: "Internal portal supporting PNM's nationwide business and culture initiatives with reporting dashboards, approvals, and branch management.",
    details: "Built complex dashboard analytics, monthly progress submissions, multi-tier approval flows, and audit logs across hundreds of branches throughout Indonesia.",
    stack: ["React.js", "Tailwind CSS", "Zustand", "Axios"],
    featured: true,
  },
  {
    id: "ao-onboarding",
    name: "AO Onboarding System",
    category: "Enterprise",
    categoryLabel: "Enterprise & Systems",
    role: "Front-end Web Developer",
    year: "2024",
    company: "PNM / Lawencon",
    description: "Role-based system monitoring internship operations: geo-tagged attendance, activity journals, intern tracking, and supervisor reviews.",
    details: "Engineered real-time intern activity trackers, mentor review modules, attendance log validations, and responsive admin overview tables.",
    stack: ["React.js", "Tailwind CSS", "Zustand", "React Hook Form"],
    featured: true,
  },
  {
    id: "ifest",
    name: "IFest Innovation Hub",
    category: "Enterprise",
    categoryLabel: "Enterprise & Systems",
    role: "Front-end Web Developer",
    year: "2024",
    company: "PNM / Lawencon",
    description: "Employee innovation portal inviting teams to submit, judge, and develop digital ecosystem ideas for the ultra-micro sector.",
    details: "Developed proposal submission pipelines, voting mechanics, jury scorecards, and interactive stage progression dashboards.",
    stack: ["React.js", "Tailwind CSS", "Zustand", "REST APIs"],
  },
  {
    id: "ems",
    name: "EMS Event Management",
    category: "Enterprise",
    categoryLabel: "Enterprise & Systems",
    role: "Front-end Web Developer",
    year: "2024",
    company: "Lawencon Internasional",
    description: "Comprehensive corporate application for event proposal, budgetary approvals, logistics coordination, and accountability reports.",
    details: "Designed multi-step requisition wizards, dynamic expense breakdowns, attachment uploading, and exportable financial summary decks.",
    stack: ["React.js", "Tailwind CSS", "Zustand", "React Hook Form"],
  },
  {
    id: "itms",
    name: "ITMS Promotion System",
    category: "Enterprise",
    categoryLabel: "Enterprise & Systems",
    role: "Front-end Web Developer",
    year: "2024",
    company: "Lawencon Internasional",
    description: "Promotion & talent management application for candidate nominations, 360-degree evaluations, and supervisor pathway grading.",
    details: "Created intuitive rating matrices, candidate comparison views, promotion eligibility scoring, and confidential recommendation workflows.",
    stack: ["React.js", "Tailwind CSS", "Zustand", "REST APIs"],
  },
  {
    id: "pkm",
    name: "Simulasi Bisnis PKM",
    category: "Enterprise",
    categoryLabel: "Enterprise & Systems",
    role: "Front-end Web Developer",
    year: "2024",
    company: "Lawencon Internasional",
    description: "Business simulation tool tracking daily performance metrics, attendance, milestone achievements, and supervisor approvals.",
    details: "Designed interactive KPI trackers, milestone validation screens, and automated target calculations for training cohorts.",
    stack: ["React.js", "Tailwind CSS", "Zustand"],
  },
  {
    id: "beasiswa",
    name: "Beasiswa Master Data",
    category: "Enterprise",
    categoryLabel: "Enterprise & Systems",
    role: "Front-end Web Developer",
    year: "2024",
    company: "Lawencon Internasional",
    description: "Scholarship management engine handling employee applications, university partner rosters, and open registration periods.",
    details: "Delivered unified master data tables with bulk actions, validation rules, application status checks, and data export features.",
    stack: ["React.js", "Tailwind CSS", "Zustand"],
  },
  {
    id: "mx-solution",
    name: "MX Solution Ecosystem",
    category: "Web Apps",
    categoryLabel: "Web Applications",
    role: "Full-Stack Web Developer",
    year: "2023",
    company: "MX Indonesia",
    description: "Flagship product platform featuring company solutions, dynamic editorial articles, interactive client assessments, and CMS admin.",
    details: "Engineered from scratch using Next.js, Prisma ORM, and MySQL. Implemented smooth interactive transitions with Framer Motion, performant state management with Zustand, and Dockerized production deployment.",
    stack: ["Next.js", "React.js", "Zustand", "Tailwind CSS", "Framer Motion", "Prisma", "MySQL", "Docker"],
    url: "https://mxindonesia.com/",
    featured: true,
  },
  {
    id: "pd-mercubuana",
    name: "Pangkalan Data UMB",
    category: "Web Apps",
    categoryLabel: "Web Applications",
    role: "Full-Stack Developer",
    year: "2022 — 2023",
    company: "Universitas Mercu Buana",
    description: "Centralized university institutional data warehouse with role-based auth, academic metrics, and embedded Microsoft Power BI.",
    details: "Built the full stack with Node.js/Express and MongoDB. Crafted a responsive React dashboard, synchronized university data endpoints, and integrated Power BI interactive analytics.",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux"],
    url: "https://pd.mercubuana.ac.id/",
    featured: true,
  },
  {
    id: "umb-career",
    name: "UMB Career & Alumni",
    category: "Web Apps",
    categoryLabel: "Web Applications",
    role: "Front-end Web Developer",
    year: "2022",
    company: "Universitas Mercu Buana",
    description: "University career hub connecting thousands of graduates with job postings, campus recruitment drives, and alumni networks.",
    details: "Built job application filters, resume upload workflows, and event registration interfaces with React, Axios, and React Hook Form.",
    stack: ["React.js", "React Bootstrap", "Material UI", "Axios", "React Hook Form"],
    url: "https://umbcan.mercubuana.ac.id/",
  },
  {
    id: "jakarta-creative-hub",
    name: "Jakarta Creative Hub",
    category: "Practice",
    categoryLabel: "Exploration & Practice",
    role: "Web Developer Intern",
    year: "2020",
    company: "Jakarta Creative Hub",
    description: "Public portal promoting the government-backed co-working space, workshops, maker facilities, and creative community events.",
    details: "Collaborated with lead designers on visual layouts, developed custom WordPress themes, optimized performance, and managed server deployment.",
    stack: ["WordPress", "CSS3", "JavaScript"],
    url: "https://jakartacreativehub.jakarta.go.id/",
  },
  {
    id: "furniture-figma",
    name: "Furniture Studio Concept",
    category: "Practice",
    categoryLabel: "Exploration & Practice",
    role: "Frontend Developer",
    year: "2023",
    description: "High-craft editorial furniture catalog recreated with pixel precision from AR Shakir's renowned Figma design system.",
    details: "Focused on micro-interactions, editorial typography spacing, smooth product carousel states, and modern Tailwind composition.",
    stack: ["React.js", "Vite", "Tailwind CSS"],
  },
  {
    id: "youtube-clone",
    name: "YouTube Media Platform",
    category: "Practice",
    categoryLabel: "Exploration & Practice",
    role: "Frontend Developer",
    year: "2023",
    description: "Full-featured streaming practice app with live YouTube v3 API integration, video playback, search filtering, and related video feeds.",
    details: "Implemented asynchronous video querying via RapidAPI, responsive video viewport layouts, category switching, and channel metric previews.",
    stack: ["React.js", "Vite", "RapidAPI", "Axios", "Tailwind CSS"],
  },
];

type CategoryFilter = "ALL" | "Enterprise" | "Web Apps" | "Practice";

export function ProjectShowcase() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("ALL");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedProject && !isClosing) {
        closeProjectDetails();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject, isClosing]);

  const filteredProjects =
    activeFilter === "ALL"
      ? ALL_PROJECTS
      : ALL_PROJECTS.filter((p) => p.category === activeFilter);

  const handleCardMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleCardMouseLeave = () => {
    // No 3D transform
  };

  const openProjectDetails = (project: ProjectItem) => {
    soundManager.playClick();
    setIsClosing(false);
    setSelectedProject(project);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "hidden";
    }
  };

  const closeProjectDetails = () => {
    soundManager.playClick();
    setIsClosing(true);
    setTimeout(() => {
      setSelectedProject(null);
      setIsClosing(false);
      if (typeof document !== "undefined") {
        document.body.style.overflow = "";
      }
    }, 360);
  };

  return (
    <div className="project-showcase-container">
      {/* Filter and View Bar */}
      <div className="showcase-controls">
        <div className="category-filters" role="tablist" aria-label="Filter projects">
          <button
            type="button"
            className={`filter-btn ${activeFilter === "ALL" ? "filter-active" : ""}`}
            onClick={() => {
              soundManager.playClick();
              setActiveFilter("ALL");
            }}
          >
            All Work <span className="filter-count">{ALL_PROJECTS.length}</span>
          </button>
          <button
            type="button"
            className={`filter-btn ${activeFilter === "Enterprise" ? "filter-active" : ""}`}
            onClick={() => {
              soundManager.playClick();
              setActiveFilter("Enterprise");
            }}
          >
            Enterprise Platforms <span className="filter-count">8</span>
          </button>
          <button
            type="button"
            className={`filter-btn ${activeFilter === "Web Apps" ? "filter-active" : ""}`}
            onClick={() => {
              soundManager.playClick();
              setActiveFilter("Web Apps");
            }}
          >
            Web Apps <span className="filter-count">3</span>
          </button>
          <button
            type="button"
            className={`filter-btn ${activeFilter === "Practice" ? "filter-active" : ""}`}
            onClick={() => {
              soundManager.playClick();
              setActiveFilter("Practice");
            }}
          >
            Practice <span className="filter-count">3</span>
          </button>
        </div>

        <div className="view-mode-toggle">
          <button
            type="button"
            className={`view-toggle-btn ${viewMode === "grid" ? "view-active" : ""}`}
            onClick={() => {
              soundManager.playClick();
              setViewMode("grid");
            }}
            title="Grid view"
            aria-label="Grid view"
          >
            <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor">
              <rect x="1" y="1" width="6" height="6" rx="1" />
              <rect x="9" y="1" width="6" height="6" rx="1" />
              <rect x="1" y="9" width="6" height="6" rx="1" />
              <rect x="9" y="9" width="6" height="6" rx="1" />
            </svg>
            <span>GRID</span>
          </button>
          <button
            type="button"
            className={`view-toggle-btn ${viewMode === "list" ? "view-active" : ""}`}
            onClick={() => {
              soundManager.playClick();
              setViewMode("list");
            }}
            title="Index list view"
            aria-label="Index view"
          >
            <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor">
              <rect x="1" y="2" width="14" height="2.5" rx="0.5" />
              <rect x="1" y="7" width="14" height="2.5" rx="0.5" />
              <rect x="1" y="12" width="14" height="2.5" rx="0.5" />
            </svg>
            <span>INDEX</span>
          </button>
        </div>
      </div>

      {/* Grid View */}
      {viewMode === "grid" ? (
        <div className="project-grid-interactive">
          {filteredProjects.map((project, idx) => (
            <article
              key={project.id}
              className="project-card-interactive"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              onClick={() => openProjectDetails(project)}
              data-cursor="VIEW"
            >
              <div className="card-spotlight" aria-hidden="true" />

              <div className="project-topline">
                <span className="project-number">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="project-badge">{project.categoryLabel}</span>
                <span className="project-year">{project.year}</span>
              </div>

              <div className="project-main-info">
                <h3>{project.name}</h3>
                {project.company && <p className="project-company">{project.company}</p>}
                <p className="project-desc">{project.description}</p>
              </div>

              <div className="project-footer">
                <ul className="stack-interactive">
                  {project.stack.slice(0, 4).map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                  {project.stack.length > 4 && (
                    <li className="stack-more">+{project.stack.length - 4}</li>
                  )}
                </ul>

                <div className="project-action-row">
                  <span className="peek-action">
                    Details <span>→</span>
                  </span>
                  {project.url && (
                    <span className="live-indicator">
                      ● LIVE
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        /* Clean, robust Index View that never overflows */
        <div className="project-list-interactive">
          <div className="list-header" aria-hidden="true">
            <span className="col-idx">NO.</span>
            <span className="col-name">PROJECT</span>
            <span className="col-cat">CATEGORY</span>
            <span className="col-stack">STACK</span>
            <span className="col-action">LINK</span>
          </div>

          <div className="list-rows">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                className="list-row"
                onClick={() => openProjectDetails(project)}
                data-cursor="VIEW"
              >
                <span className="col-idx row-num">{String(idx + 1).padStart(2, "0")}</span>
                <span className="col-name row-title">
                  <strong>{project.name}</strong>
                  {project.company && <small>{project.company}</small>}
                </span>
                <span className="col-cat row-category">{project.categoryLabel}</span>
                <span className="col-stack row-stack">
                  {project.stack.slice(0, 3).join(", ")}
                </span>
                <span className="col-action row-action">
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="index-link-pill"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Visit ↗
                    </a>
                  ) : (
                    <span className="index-peek-btn">Details →</span>
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className={`modal-backdrop ${isClosing ? "modal-backdrop-closing" : ""}`}
          onClick={closeProjectDetails}
          role="dialog"
          aria-modal="true"
        >
          <div
            className={`modal-panel ${isClosing ? "modal-panel-closing" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <div className="modal-tag-group">
                <span className="modal-tag">{selectedProject.categoryLabel}</span>
                <span className="modal-tag">{selectedProject.year}</span>
                {selectedProject.company && (
                  <span className="modal-tag tag-accent">{selectedProject.company}</span>
                )}
              </div>
              <button
                type="button"
                className="modal-close-btn"
                onClick={closeProjectDetails}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <div className="modal-body">
              <h2 className="modal-title">{selectedProject.name}</h2>
              <p className="modal-role">
                Role: <strong>{selectedProject.role}</strong>
              </p>

              <div className="modal-divider" />

              <div className="modal-section">
                <h3>Executive Summary</h3>
                <p>{selectedProject.description}</p>
              </div>

              {selectedProject.details && (
                <div className="modal-section">
                  <h3>Key Engineering & Architecture</h3>
                  <p>{selectedProject.details}</p>
                </div>
              )}

              <div className="modal-section">
                <h3>Technologies & Tools</h3>
                <ul className="modal-tech-list">
                  {selectedProject.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              {selectedProject.url && (
                <div className="modal-footer">
                  <a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noreferrer"
                    className="modal-external-link"
                    onClick={() => soundManager.playClick()}
                  >
                    <span>Launch Live Website</span>
                    <span className="arrow-icon">↗</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
