import { CheckCircle, Shield, BarChart3 } from "lucide-react";

const cards = [
  {
    icon: CheckCircle,
    title: "Project Tracking",
    color: "primary",
    bullets: [
      "Set clear milestones & deliverables",
      "Real-time progress visibility",
      "Keep both sides aligned",
      "Structured timelines, not DMs",
    ],
  },
  {
    icon: Shield,
    title: "Escrow & Secure Payments",
    color: "accent",
    bullets: [
      "Funds held until work is approved",
      "Protects creators and clients equally",
      "Reduces payment disputes",
      "Transparent release triggers",
    ],
  },
  {
    icon: BarChart3,
    title: "Trust Metrics",
    color: "secondary",
    bullets: [
      "On-chain reputation scores",
      "Completion & reliability history",
      "Credibility at a glance",
      "Earn trust, attract better work",
    ],
  },
];

const colorMap: Record<string, { bg: string; text: string; badge: string }> = {
  primary: { bg: "bg-primary/10", text: "text-primary", badge: "bg-primary" },
  accent: { bg: "bg-accent/15", text: "text-accent", badge: "bg-accent" },
  secondary: { bg: "bg-secondary/15", text: "text-secondary", badge: "bg-secondary" },
};

export default function Features() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="reveal text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Core Features</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">Everything creators and clients need to work together with confidence.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 reveal-stagger">
          {cards.map((card) => {
            const c = colorMap[card.color];
            return (
              <div
                key={card.title}
                className="reveal border-3 border-foreground bg-card rounded-xl p-7 shadow-solid snap-hover"
              >
                <div className={`w-12 h-12 rounded-lg ${c.bg} flex items-center justify-center mb-5`}>
                  <card.icon className={`w-6 h-6 ${c.text}`} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{card.title}</h3>
                <ul className="space-y-2.5">
                  {card.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${c.badge} shrink-0`} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
