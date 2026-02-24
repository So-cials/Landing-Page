import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { ClipboardCheck, Shield, Award } from "lucide-react";
import CanvasBackground from "./CanvasBackground";

export default function Hero() {
  const typedHeadlineRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!typedHeadlineRef.current) return;

    const typed = new Typed(typedHeadlineRef.current, {
      strings: ["Trust is the<br/>new <span class='bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>currency.</span>"],
      typeSpeed: 100,
      startDelay: 500,
      backSpeed: 0,
      loop: true,
      showCursor: true,
      contentType: "html",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <CanvasBackground />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Copy */}
          <div className="hero-stagger">
            <h1 className="hero-animate text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight text-foreground mb-6">
              <span ref={typedHeadlineRef} aria-label="Trust is the new currency" />
            </h1>
            <p className="hero-animate text-lg sm:text-xl text-muted-foreground max-w-lg mb-8 leading-relaxed">
              Socials helps creators manage projects, secure payments with escrow, and build reputation with transparent trust metrics - all in one place.
            </p>
            <div className="hero-animate flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("beta")}
                className="border-3 border-foreground bg-primary text-primary-foreground px-7 py-3.5 rounded-lg font-bold text-base shadow-solid-lg snap-hover"
              >
                Join the Beta
              </button>
              <button
                onClick={() => scrollTo("features")}
                className="border-3 border-foreground bg-accent text-accent-foreground px-7 py-3.5 rounded-lg font-semibold text-base shadow-solid snap-hover"
              >
                See Features
              </button>
              <a
                href="https://forms.gle/ZUvqsc9R1mRqjTrPA"
                target="_blank"
                rel="noopener noreferrer"
                className="border-3 border-foreground bg-secondary text-secondary-foreground px-7 py-3.5 rounded-lg font-semibold text-base shadow-solid snap-hover inline-flex items-center justify-center"
              >
                Feasibility Study
              </a>
            </div>
          </div>

          {/* Right - Product Cards */}
          <div className="hero-stagger flex flex-col gap-5 lg:pl-8">
            <div className="hero-animate float-drift border-3 border-foreground bg-card rounded-xl p-5 shadow-solid-lg">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <ClipboardCheck className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="font-semibold text-foreground block">Built for Structured Work</span>
                  <span className="text-sm text-muted-foreground">Organize projects with milestones, tasks, and deliverables for predictable outcomes.</span>
                </div>
              </div>
            </div>

            <div className="hero-animate float-drift border-3 border-foreground bg-card rounded-xl p-5 shadow-solid" style={{ animationDelay: "1.2s" }}>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <span className="font-semibold text-foreground block">Escrow Protected</span>
                  <span className="text-sm text-muted-foreground">Secure payments held in escrow until delivery.</span>
                </div>
                <span className="ml-auto text-xs font-bold bg-accent/10 text-accent px-2.5 py-1 rounded-md">Launching in Beta</span>
              </div>
            </div>

            <div className="hero-animate float-drift border-3 border-foreground bg-card rounded-xl p-5 shadow-solid-sm" style={{ animationDelay: "2.4s" }}>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary/15 flex items-center justify-center">
                  <Award className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <span className="font-semibold text-foreground block">Trust Score</span>
                  <span className="text-sm text-muted-foreground">Transparent reputation metrics to showcase client reliability based on past projects.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



