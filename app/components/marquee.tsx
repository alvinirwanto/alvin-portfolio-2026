"use client";

interface MarqueeProps {
  items?: string[];
  reverse?: boolean;
  speed?: number; // seconds
  className?: string;
}

const DEFAULT_ITEMS = [
  "FRONTEND WEB DEVELOPER",
  "REACT & NEXT.JS SPECIALIST",
  "HIGH PERFORMANCE ARCHITECTURE",
  "INTERACTIVE DESIGN & UI/UX",
  "ACCESSIBILITY & CLEAN CODE",
  "BASED IN TANGERANG, ID",
  "CREATIVE CODING & MOTION",
];

export function Marquee({
  items = DEFAULT_ITEMS,
  reverse = false,
  speed = 28,
  className = "",
}: MarqueeProps) {
  return (
    <div className={`marquee-strip ${className}`} aria-hidden="true">
      <div
        className={`marquee-track ${reverse ? "marquee-track-reverse" : ""}`}
        style={{ animationDuration: `${speed}s` }}
      >
        <div className="marquee-content">
          {items.map((item, idx) => (
            <span key={idx} className="marquee-item">
              <span className="marquee-symbol">✦</span>
              <span className="marquee-text">{item}</span>
            </span>
          ))}
        </div>
        <div className="marquee-content" aria-hidden="true">
          {items.map((item, idx) => (
            <span key={`clone-${idx}`} className="marquee-item">
              <span className="marquee-symbol">✦</span>
              <span className="marquee-text">{item}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
