"use client";

import { useState } from "react";
import { soundManager } from "./sound-effects";

interface SkillItem {
  name: string;
  category: "Frontend" | "State" | "Backend" | "Tools";
  level?: string;
  projectsCount: number;
}

const SKILLS_DATA: SkillItem[] = [
  { name: "React", category: "Frontend", projectsCount: 12 },
  { name: "Next.js", category: "Frontend", projectsCount: 4 },
  { name: "Tailwind CSS", category: "Frontend", projectsCount: 11 },
  { name: "JavaScript (ES6+)", category: "Frontend", projectsCount: 14 },
  { name: "TypeScript", category: "Frontend", projectsCount: 8 },
  { name: "HTML5 / CSS3", category: "Frontend", projectsCount: 14 },
  { name: "Framer Motion", category: "Frontend", projectsCount: 5 },
  { name: "Zustand", category: "State", projectsCount: 9 },
  { name: "Redux", category: "State", projectsCount: 2 },
  { name: "TanStack Query", category: "State", projectsCount: 4 },
  { name: "Axios / Fetch", category: "State", projectsCount: 10 },
  { name: "Node.js", category: "Backend", projectsCount: 5 },
  { name: "Express.js", category: "Backend", projectsCount: 3 },
  { name: "Prisma ORM", category: "Backend", projectsCount: 2 },
  { name: "MySQL", category: "Backend", projectsCount: 3 },
  { name: "MongoDB", category: "Backend", projectsCount: 2 },
  { name: "Docker", category: "Backend", projectsCount: 4 },
  { name: "Figma UI/UX", category: "Tools", projectsCount: 10 },
  { name: "Git / GitHub", category: "Tools", projectsCount: 14 },
  { name: "WordPress", category: "Tools", projectsCount: 3 },
];

export function SkillsCloud() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const filtered =
    activeCategory === "ALL"
      ? SKILLS_DATA
      : SKILLS_DATA.filter((s) => s.category === activeCategory);

  const handleCategoryClick = (cat: string) => {
    soundManager.playClick();
    setActiveCategory(cat);
  };

  const handleSkillHover = (name: string) => {
    setSelectedSkill(name);
    soundManager.playHover();
  };

  return (
    <div className="skills-interactive-container" data-reveal>
      <div className="skills-filter-row">
        {["ALL", "Frontend", "State", "Backend", "Tools"].map((cat) => (
          <button
            key={cat}
            type="button"
            className={`skills-cat-btn ${activeCategory === cat ? "cat-active" : ""}`}
            onClick={() => handleCategoryClick(cat)}
          >
            {cat === "ALL" ? "All Technologies" : cat}
          </button>
        ))}
      </div>

      <div className="skills-pill-matrix">
        {filtered.map((skill) => {
          const isSelected = selectedSkill === skill.name;
          return (
            <div
              key={skill.name}
              className={`skill-pill ${isSelected ? "skill-pill-active" : ""}`}
              onMouseEnter={() => handleSkillHover(skill.name)}
              onMouseLeave={() => setSelectedSkill(null)}
              data-cursor="TECH"
            >
              <span className="skill-pill-name">{skill.name}</span>
              <span className="skill-pill-badge">{skill.projectsCount} projects</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
