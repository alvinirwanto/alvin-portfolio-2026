"use client";

import { useEffect, useState } from "react";
import { soundManager } from "./sound-effects";
import { Magnetic } from "./magnetic";

export function ScrollHUD() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = docHeight > 0 ? Math.min(100, Math.round((scrollTop / docHeight) * 100)) : 0;
      setScrollPercent(percent);
      setVisible(scrollTop > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    soundManager.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div
        className="hud-progress-bar"
        style={{ transform: `scaleX(${scrollPercent / 100})` }}
        aria-hidden="true"
      />

      {visible && (
        <div className="floating-hud-btn" data-cursor="TOP">
          <Magnetic strength={0.4}>
            <button
              type="button"
              onClick={scrollToTop}
              className="back-to-top-hud"
              aria-label="Scroll back to top"
            >
              <span className="hud-arrow">↑</span>
              <span className="hud-val">{scrollPercent}%</span>
            </button>
          </Magnetic>
        </div>
      )}
    </>
  );
}
