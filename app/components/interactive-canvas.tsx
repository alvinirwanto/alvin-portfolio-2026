"use client";

import { useEffect, useRef } from "react";

export function InteractiveHeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const monogramRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let isVisible = true;
    let width = (canvas.width = container.clientWidth);
    let height = (canvas.height = container.clientHeight);

    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      isHovered: false,
    };

    // Particles constellation
    const particleCount = 28;
    const particles = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      baseRadius: Math.random() * 1.5 + 1,
      color: Math.random() > 0.85 ? "rgba(199, 91, 40, 0.7)" : "rgba(23, 24, 21, 0.25)",
    }));

    let angle1 = 0;
    let angle2 = Math.PI / 4;
    let angle3 = Math.PI / 2;

    const resize = () => {
      if (!container || !canvas) return;
      const dpr = window.devicePixelRatio || 1;
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        mouse.targetX = e.clientX - rect.left;
        mouse.targetY = e.clientY - rect.top;
        mouse.isHovered = true;
      } else {
        mouse.isHovered = false;
        mouse.targetX = width / 2;
        mouse.targetY = height / 2;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // IntersectionObserver to pause rendering when not in viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    const render = () => {
      if (isVisible) {
        // Smooth mouse lerp
        mouse.x += (mouse.targetX - mouse.x) * 0.08;
        mouse.y += (mouse.targetY - mouse.y) * 0.08;

        ctx.clearRect(0, 0, width, height);

        const centerX = width / 2;
        const centerY = height / 2;
        const shiftX = (mouse.x - centerX) * 0.12;
        const shiftY = (mouse.y - centerY) * 0.12;

        // Draw orbital ring 1
        ctx.save();
        ctx.translate(centerX + shiftX, centerY + shiftY);
        ctx.rotate(-0.5);
        ctx.beginPath();
        ctx.ellipse(0, 0, width * 0.38, height * 0.28, 0, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(23, 24, 21, 0.15)";
        ctx.lineWidth = 1;
        ctx.stroke();

        // Orbital Satellite 1 (accent orange dot)
        angle1 += 0.008;
        const sat1X = Math.cos(angle1) * (width * 0.38);
        const sat1Y = Math.sin(angle1) * (height * 0.28);
        ctx.beginPath();
        ctx.arc(sat1X, sat1Y, 4, 0, Math.PI * 2);
        ctx.fillStyle = "#c75b28";
        ctx.fill();
        ctx.restore();

        // Draw orbital ring 2
        ctx.save();
        ctx.translate(centerX + shiftX * 0.6, centerY + shiftY * 0.6);
        ctx.rotate(0.55);
        ctx.beginPath();
        ctx.ellipse(0, 0, width * 0.28, height * 0.44, 0, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(23, 24, 21, 0.12)";
        ctx.setLineDash([4, 6]);
        ctx.lineWidth = 1;
        ctx.stroke();

        // Orbital Satellite 2 (ink dot)
        angle2 -= 0.006;
        const sat2X = Math.cos(angle2) * (width * 0.28);
        const sat2Y = Math.sin(angle2) * (height * 0.44);
        ctx.beginPath();
        ctx.arc(sat2X, sat2Y, 3, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(23, 24, 21, 0.4)";
        ctx.fill();
        ctx.restore();

        // Draw orbital ring 3 (outer boundary ring)
        ctx.save();
        ctx.translate(centerX + shiftX * 0.3, centerY + shiftY * 0.3);
        ctx.rotate(-0.15);
        ctx.beginPath();
        ctx.ellipse(0, 0, width * 0.46, height * 0.36, 0, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(199, 91, 40, 0.14)";
        ctx.setLineDash([2, 10]);
        ctx.stroke();

        // Satellite 3
        angle3 += 0.004;
        const sat3X = Math.cos(angle3) * (width * 0.46);
        const sat3Y = Math.sin(angle3) * (height * 0.36);
        ctx.beginPath();
        ctx.arc(sat3X, sat3Y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = "#c75b28";
        ctx.fill();
        ctx.restore();

        // Draw & update constellation particles
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;

          // Mouse proximity reaction
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          let r = p.baseRadius;
          if (dist < 120) {
            r += (1 - dist / 120) * 2;
            // Draw link to mouse
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(199, 91, 40, ${0.2 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }

          ctx.beginPath();
          ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();

          // Connect nearby particles
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const pDist = Math.hypot(p.x - p2.x, p.y - p2.y);
            if (pDist < 85) {
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(23, 24, 21, ${0.08 * (1 - pDist / 85)})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="hero-art interactive-art-container"
      data-cursor="INTERACT"
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="hero-interactive-canvas" />
      <span ref={monogramRef} className="hero-monogram hero-monogram-3d">
        AI
      </span>
    </div>
  );
}
