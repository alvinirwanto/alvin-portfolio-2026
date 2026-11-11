"use client";

import { useEffect } from "react";
import { soundManager } from "./components/sound-effects";

export function MotionEnhancements() {
  useEffect(() => {
    document.documentElement.classList.add("motion-ready");

    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
        el.classList.add("is-visible");
        el.setAttribute("data-revealed", "true");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ isIntersecting, target }) => {
          if (!isIntersecting) return;
          target.classList.add("is-visible");
          target.setAttribute("data-revealed", "true");
          observer.unobserve(target);
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" },
    );

    const observeNodes = () => {
      document
        .querySelectorAll<HTMLElement>("[data-reveal]:not([data-revealed='true'])")
        .forEach((element) => {
          const siblings = element.parentElement
            ? Array.from(element.parentElement.querySelectorAll<HTMLElement>(":scope > [data-reveal]"))
            : [];
          const siblingIndex = Math.max(0, siblings.indexOf(element));
          element.style.setProperty("--reveal-delay", `${Math.min(siblingIndex * 40, 160)}ms`);
          observer.observe(element);
        });
    };

    observeNodes();

    const mutObserver = new MutationObserver(() => {
      observeNodes();
    });
    mutObserver.observe(document.body, { childList: true, subtree: true });

    // Handle smooth internal navigation clicks
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!target) return;

      const hash = target.getAttribute("href");
      if (!hash || hash === "#") return;

      const dest = document.querySelector(hash);
      if (dest) {
        e.preventDefault();
        soundManager.playClick();
        dest.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", hash);
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      observer.disconnect();
      mutObserver.disconnect();
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return null;
}
