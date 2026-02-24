import { useEffect, useRef } from "react";

export default function ParallaxGrid() {
  const gridRef = useRef<HTMLDivElement>(null);
  const scrollY = useRef(0);
  const currentY = useRef(0);
  const rafId = useRef(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const grid = gridRef.current;
    if (!grid) return;

    const SPEED = 0.35; // parallax speed relative to scroll
    const LERP = 0.08; // smoothing factor — lower = bouncier

    const onScroll = () => {
      scrollY.current = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    let running = true;
    const tick = () => {
      if (!running) return;
      // spring-like lerp for bouncy feel
      currentY.current += (scrollY.current * SPEED - currentY.current) * LERP;
      grid.style.transform = `translateY(${-currentY.current}px)`;
      rafId.current = requestAnimationFrame(tick);
    };

    const handleVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(rafId.current);
      } else {
        running = true;
        tick();
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    tick();

    return () => {
      running = false;
      cancelAnimationFrame(rafId.current);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <div
      ref={gridRef}
      className="absolute inset-0 w-full pointer-events-none"
      style={{ height: "200%", willChange: "transform" }}
      aria-hidden="true"
    >
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="parallax-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="hsl(40 20% 88%)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#parallax-grid)" />
      </svg>
    </div>
  );
}
