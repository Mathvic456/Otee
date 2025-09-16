export function StatsSection() {
  const stats = [
    { number: "100+", label: "Successful Projects", description: "Brand campaigns delivered" },
    { number: "10K+", label: "Community Members", description: "Built across platforms" },
    { number: "4x", label: "Growth Achieved", description: "Average ROI increase" },
    { number: "5+", label: "Years Experience", description: "In brand marketing" },
  ]

  return (
    <section className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-foreground mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
