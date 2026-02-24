export default function ProgressSection() {
  // For demo, let's say 7/12 points complete
  const totalPoints = 12;
  const completed = 7;

  return (
    <section className="py-16 px-6 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4 text-foreground">Project Progress</h2>
      <div className="flex gap-2 mb-2">
        {[...Array(totalPoints)].map((_, i) => (
          <div
            key={i}
            className={`w-6 h-6 rounded-full border-2 border-foreground transition-colors ${i < completed ? 'bg-primary' : 'bg-muted'}`}
            title={`Step ${i + 1}`}
          />
        ))}
      </div>
      <span className="text-sm text-muted-foreground">{completed} of {totalPoints} milestones complete</span>
    </section>
  );
}
