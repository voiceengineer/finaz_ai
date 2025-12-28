export function StatsSection() {
  return (
    <section className="py-20 px-6 border-y border-border">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-px lg:bg-border">
          <div className="bg-background space-y-3 lg:p-10 animate-fade-in">
            <div className="w-12 h-px bg-accent" />
            <div className="text-5xl md:text-6xl font-bold tracking-tight">$2.5B+</div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Loans Processed</div>
          </div>
          <div className="bg-background space-y-3 lg:p-10 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="w-12 h-px bg-accent" />
            <div className="text-5xl md:text-6xl font-bold tracking-tight">50K+</div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Active Users</div>
          </div>
          <div className="bg-background space-y-3 lg:p-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="w-12 h-px bg-accent" />
            <div className="text-5xl md:text-6xl font-bold tracking-tight">98%</div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Satisfaction</div>
          </div>
          <div className="bg-background space-y-3 lg:p-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="w-12 h-px bg-accent" />
            <div className="text-5xl md:text-6xl font-bold tracking-tight">10x</div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Speed Increase</div>
          </div>
        </div>
      </div>
    </section>
  )
}
