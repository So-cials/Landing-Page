import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? "bg-background/95 backdrop-blur-sm border-b-3 border-foreground" : ""
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="p-0">
          <img src="/logo.png" alt="Socials logo" className="h-8 w-auto" />
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo("features")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Features
          </button>
          <button onClick={() => scrollTo("why")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Why Socials
          </button>
          <button onClick={() => scrollTo("beta")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Beta
          </button>
          <button
            onClick={() => scrollTo("beta")}
            className="border-3 border-foreground bg-primary text-primary-foreground px-5 py-2 rounded-lg font-semibold text-sm shadow-solid snap-hover"
          >
            Join Beta
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-foreground transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-foreground transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-foreground transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t-3 border-foreground bg-background px-6 pb-6 flex flex-col gap-4">
          <button onClick={() => scrollTo("features")} className="text-left font-medium py-2">Features</button>
          <button onClick={() => scrollTo("why")} className="text-left font-medium py-2">Why Socials</button>
          <button onClick={() => scrollTo("beta")} className="text-left font-medium py-2">Beta</button>
          <button
            onClick={() => scrollTo("beta")}
            className="border-3 border-foreground bg-primary text-primary-foreground px-5 py-3 rounded-lg font-semibold text-sm shadow-solid text-center"
          >
            Join Beta
          </button>
        </div>
      )}
    </nav>
  );
}
