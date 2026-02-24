import { useState } from "react";
import { Sparkles, Rocket, HeartHandshake } from "lucide-react";

const perks = [
  { icon: Sparkles, text: "Early access before public launch" },
  { icon: HeartHandshake, text: "Shape the product roadmap" },
  { icon: Rocket, text: "Priority onboarding & support" },
];

export default function BetaSignup() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<"creator" | "client" | "">("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section id="beta" className="py-24 px-6">
      <div className="container mx-auto max-w-2xl">
        <div className="reveal border-3 border-foreground bg-card rounded-2xl p-8 sm:p-12 shadow-solid-lg pulse-border">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <Rocket className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">You're on the list!</h2>
              <p className="text-muted-foreground">We'll reach out when it's your turn. Thanks for believing early.</p>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Get Early Access</h2>
                <p className="text-muted-foreground text-lg">Be among the first to try Socials.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border-3 border-foreground rounded-lg px-4 py-3 bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">I am a…</label>
                  <div className="flex gap-3">
                    {(["creator", "client"] as const).map((r) => (
                      <button
                        key={r}
                        type="button"
                        onClick={() => setRole(r)}
                        className={`flex-1 border-3 border-foreground rounded-lg px-4 py-3 font-medium text-sm capitalize transition-colors ${
                          role === r
                            ? "bg-primary text-primary-foreground shadow-solid-sm"
                            : "bg-card text-foreground hover:bg-muted"
                        }`}
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full border-3 border-foreground bg-primary text-primary-foreground py-3.5 rounded-lg font-bold text-base shadow-solid-lg snap-hover"
                >
                  Request Beta Access
                </button>

                <p className="text-center text-xs text-muted-foreground">No spam. Early access invites first.</p>
              </form>

              <div className="mt-8 pt-6 border-t border-muted">
                <div className="grid sm:grid-cols-3 gap-4">
                  {perks.map((p) => (
                    <div key={p.text} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                      <p.icon className="w-4 h-4 text-primary shrink-0" />
                      {p.text}
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
