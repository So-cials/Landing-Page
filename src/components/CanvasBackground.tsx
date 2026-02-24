import { useEffect, useRef } from "react";

interface Shape {
  x: number;
  y: number;
  z: number;
  size: number;
  color: string;
  speedX: number;
  speedY: number;
  type: "circle" | "rect";
}

const COLORS = [
  "rgba(20, 153, 254, 0.12)",  // primary blue
  "rgba(128, 147, 223, 0.10)", // purple
  "rgba(238, 159, 61, 0.08)",  // orange
];

export default function CanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    // Respect reduced motion
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 6 : 14;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Generate shapes
    const shapes: Shape[] = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      z: Math.random() * 0.6 + 0.4, // depth 0.4–1
      size: Math.random() * 60 + 30,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.2,
      type: Math.random() > 0.5 ? "circle" : "rect",
    }));

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouse);

    let running = true;
    const draw = () => {
      if (!running) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const s of shapes) {
        s.x += s.speedX;
        s.y += s.speedY;

        // wrap
        if (s.x < -s.size) s.x = canvas.width + s.size;
        if (s.x > canvas.width + s.size) s.x = -s.size;
        if (s.y < -s.size) s.y = canvas.height + s.size;
        if (s.y > canvas.height + s.size) s.y = -s.size;

        // parallax offset
        const parallaxX = (mouseRef.current.x / canvas.width - 0.5) * 12 * s.z;
        const parallaxY = (mouseRef.current.y / canvas.height - 0.5) * 12 * s.z;

        const drawX = s.x + parallaxX;
        const drawY = s.y + parallaxY;
        const drawSize = s.size * s.z;

        ctx.save();
        ctx.globalAlpha = s.z * (isMobile ? 0.5 : 0.8);
        ctx.fillStyle = s.color;
        ctx.filter = `blur(${(1 - s.z) * 6}px)`;

        if (s.type === "circle") {
          ctx.beginPath();
          ctx.arc(drawX, drawY, drawSize / 2, 0, Math.PI * 2);
          ctx.fill();
        } else {
          const r = 10;
          const w = drawSize * 1.2;
          const h = drawSize * 0.8;
          ctx.beginPath();
          ctx.moveTo(drawX - w / 2 + r, drawY - h / 2);
          ctx.lineTo(drawX + w / 2 - r, drawY - h / 2);
          ctx.quadraticCurveTo(drawX + w / 2, drawY - h / 2, drawX + w / 2, drawY - h / 2 + r);
          ctx.lineTo(drawX + w / 2, drawY + h / 2 - r);
          ctx.quadraticCurveTo(drawX + w / 2, drawY + h / 2, drawX + w / 2 - r, drawY + h / 2);
          ctx.lineTo(drawX - w / 2 + r, drawY + h / 2);
          ctx.quadraticCurveTo(drawX - w / 2, drawY + h / 2, drawX - w / 2, drawY + h / 2 - r);
          ctx.lineTo(drawX - w / 2, drawY - h / 2 + r);
          ctx.quadraticCurveTo(drawX - w / 2, drawY - h / 2, drawX - w / 2 + r, drawY - h / 2);
          ctx.closePath();
          ctx.fill();
        }
        ctx.restore();
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    // Pause when tab not visible
    const handleVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(rafRef.current);
      } else {
        running = true;
        draw();
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    draw();

    return () => {
      running = false;
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
