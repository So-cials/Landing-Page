export default function ParallaxGrid() {
  return (
    <div
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    >
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="parallax-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="hsl(40 15% 82%)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#parallax-grid)" />
      </svg>
    </div>
  );
}
