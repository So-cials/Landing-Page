import { useState } from "react";
import { Sparkles, Rocket, HeartHandshake } from "lucide-react";

const perks = [
  {
    icon: Sparkles,
    text: "Early access before public launch",
    iconClassName: "text-primary",
  },
  {
    icon: HeartHandshake,
    text: "Shape the product roadmap",
    iconClassName: "text-secondary",
  },
  {
    icon: Rocket,
    text: "Priority onboarding & support",
    iconClassName: "text-accent",
  },
];

export default function BetaSignup() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<"creator" | "client" | "">("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const encode = (data: Record<string, string>) =>
    Object.keys(data)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join("&");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setError("");

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "beta-signup",
          email,
          role: role || "unspecified",
        }),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setSubmitted(true);
      setEmail("");
      setRole("");
    } catch {
      setError("Could not submit right now. Please try again.");
    }
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

              <form
                name="beta-signup"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <input type="hidden" name="form-name" value="beta-signup" />
                <p className="hidden">
                  <label>
                    Don't fill this out:
                    <input name="bot-field" />
                  </label>
                </p>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border-3 border-foreground rounded-lg px-4 py-3 bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">I am a...</label>
                  <div className="flex gap-3">
                    {(["creator", "client"] as const).map((r) => {
                      const selectedClass =
                        r === "creator"
                          ? "bg-secondary text-secondary-foreground shadow-solid-sm"
                          : "bg-accent text-accent-foreground shadow-solid-sm";

                      return (
                        <button
                          key={r}
                          type="button"
                          onClick={() => setRole(r)}
                          className={`flex-1 border-3 border-foreground rounded-lg px-4 py-3 font-medium text-sm capitalize transition-colors duration-200 hover:scale-105 ${
                            role === r
                              ? selectedClass
                              : "bg-card text-foreground hover:bg-muted"
                          }`}
                        >
                          {r}
                        </button>
                      );
                    })}
                  </div>
                </div>
                <input type="hidden" name="role" value={role || "unspecified"} />

                <button
                  type="submit"
                  className="w-full border-3 border-foreground bg-primary text-primary-foreground py-3.5 rounded-lg font-bold text-base shadow-solid-lg transition-colors duration-200 hover:scale-105"
                >
                  Request Beta Access
                </button>

                {error ? <p className="text-center text-xs text-destructive">{error}</p> : null}

                <p className="text-center text-xs text-muted-foreground">No spam. Early access invites first.</p>
              </form>

              <div className="mt-8 pt-6 border-t border-muted">
                <div className="grid sm:grid-cols-3 gap-4">
                  {perks.map((p) => (
                    <div key={p.text} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                      <p.icon className={`w-4 h-4 shrink-0 ${p.iconClassName}`} />
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
