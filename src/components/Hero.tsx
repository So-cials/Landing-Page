import CanvasBackground from "./CanvasBackground";
import ParallaxGrid from "./ParallaxGrid";
import { CheckCircle, Shield, BarChart3 } from "lucide-react";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <CanvasBackground />
      <ParallaxGrid />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Copy */}
          <div className="hero-stagger">
            <h1 className="hero-animate text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight text-foreground mb-6">
              Trust is the<br />new currency
            </h1>
            <p className="hero-animate text-lg sm:text-xl text-muted-foreground max-w-lg mb-8 leading-relaxed">
              Socials helps creators manage projects, secure payments with escrow, and build reputation with transparent trust metrics — all in one place.
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
                className="border-3 border-foreground bg-card text-foreground px-7 py-3.5 rounded-lg font-semibold text-base shadow-solid snap-hover"
              >
                See Features
              </button>
            </div>
          </div>

          {/* Right — Product Cards */}
          <div className="hero-stagger flex flex-col gap-5 lg:pl-8">
            <div className="hero-animate float-drift border-3 border-foreground bg-card rounded-xl p-5 shadow-solid-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <span className="font-semibold text-foreground">Milestones</span>
                <span className="ml-auto text-xs font-medium bg-primary/10 text-primary px-2.5 py-1 rounded-md">3 of 5 complete</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2.5 border border-foreground/10">
                <div className="bg-primary h-full rounded-full" style={{ width: "60%" }} />
              </div>
            </div>

            <div className="hero-animate float-drift border-3 border-foreground bg-card rounded-xl p-5 shadow-solid" style={{ animationDelay: "1.2s" }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <span className="font-semibold text-foreground block">Escrow Protected</span>
                  <span className="text-sm text-muted-foreground">$2,400 held securely</span>
                </div>
                <span className="ml-auto text-xs font-medium bg-accent/10 text-accent px-2.5 py-1 rounded-md">Active</span>
              </div>
            </div>

            <div className="hero-animate float-drift border-3 border-foreground bg-card rounded-xl p-5 shadow-solid-sm" style={{ animationDelay: "2.4s" }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary/15 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <span className="font-semibold text-foreground block">Trust Score</span>
                  <span className="text-sm text-muted-foreground">92 / 100</span>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className={`w-2 h-6 rounded-sm ${i <= 4 ? "bg-secondary" : "bg-muted"}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
