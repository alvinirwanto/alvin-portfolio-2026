"use client";

import React, { useRef } from "react";
import { soundManager } from "./sound-effects";

interface MagneticProps {
  children: React.ReactNode;
  strength?: number;
  playHoverSound?: boolean;
  className?: string;
}

export function Magnetic({
  children,
  strength = 0.28,
  playHoverSound = true,
  className = "",
}: MagneticProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    ref.current.style.transform = `translate3d(${x * strength}px, ${y * strength}px, 0)`;
  };

  const handleMouseEnter = () => {
    if (playHoverSound) {
      soundManager.playHover();
    }
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "translate3d(0, 0, 0)";
    ref.current.style.transition = "transform 450ms cubic-bezier(0.23, 1, 0.32, 1)";
    setTimeout(() => {
      if (ref.current) ref.current.style.transition = "";
    }, 450);
  };

  return (
    <div
      ref={ref}
      className={`magnetic-wrap ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}
