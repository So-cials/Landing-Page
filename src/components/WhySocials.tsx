import { AlertTriangle, DollarSign, Users } from "lucide-react";

const problems = [
  { icon: AlertTriangle, text: "Freelancing is chaotic — no structure, no accountability" },
  { icon: DollarSign, text: "Payments are risky — delays, ghosting, disputes" },
  { icon: Users, text: "Trust is informal and scattered across platforms" },
];

export default function WhySocials() {
  return (
    <section id="why" className="py-24 px-6 bg-black/70  text-primary-foreground">
      <div className="container mx-auto max-w-3xl">
        <div className="reveal text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Socials?</h2>
          <p className="text-primary-foreground/70 text-lg">The creator economy deserves better tools.</p>
        </div>

        <div className="reveal-stagger space-y-5 mb-12">
          {problems.map((p) => (
            <div key={p.text} className="reveal flex items-center gap-4 border-3 border-primary-foreground/20 rounded-xl p-5 bg-primary-foreground/5 backdrop-blur-sm">
              <p.icon className="w-5 h-5 text-accent shrink-0" />
              <span className="text-base">{p.text}</span>
            </div>
          ))}
        </div>

        <div className="reveal text-center">
          <p className="text-xl font-semibold leading-relaxed">
            Socials adds <span className="text-primary">structure</span>,{""}
            <span className="text-accent">accountability</span>, and{" "}
            <span className="text-secondary">security</span> to creator-client work.
          </p>
        </div>
      </div>
    </section>
  );
}
