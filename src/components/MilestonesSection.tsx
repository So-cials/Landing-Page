export default function MilestonesSection() {
  const total = 12;
  const completed = 3; // Adjust as needed

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold mb-4 text-foreground">Milestones</h2>
        <p className="text-lg text-muted-foreground mb-8">See our progress as we build Socials. Each milestone brings us closer to launch.</p>
        <div className="flex justify-center gap-3 mb-2">
          {[...Array(total)].map((_, i) => (
            <div
              key={i}
              className={`w-6 h-6 rounded-full border-3 border-foreground shadow-solid transition-colors ${i < completed ? 'bg-primary' : 'bg-muted'}`}
              title={`Milestone ${i + 1}`}
            />
          ))}
        </div>
        <span className="text-sm text-muted-foreground">{completed} of {total} milestones complete</span>
      </div>
    </section>
  );
}
