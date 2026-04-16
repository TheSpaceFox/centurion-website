"use client"

const companies = ["Meridian Labs", "Flux Systems", "Beacon AI", "Prism Analytics"]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm text-muted-foreground font-mono mb-4">Testimonials</p>
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight">
          Trusted by teams <span className="text-muted-foreground">worldwide.</span>
        </h2>

        <div className="mt-12">
          <div className="p-8 border border-border rounded-lg bg-card max-w-2xl">
            <blockquote className="text-lg leading-relaxed">
              &ldquo;Our agents handle 80% of our customer support tickets autonomously. The ROI was immediate.&rdquo;
            </blockquote>
            
            <div className="flex items-center gap-4 mt-6 pt-6 border-t border-border">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <span className="text-sm font-medium">S</span>
              </div>
              <div>
                <p className="font-medium">Sarah Chen</p>
                <p className="text-sm text-muted-foreground">CTO, Meridian Labs</p>
              </div>
              <div className="ml-auto text-right">
                <span className="text-2xl font-mono font-medium">80%</span>
                <p className="text-xs text-muted-foreground">Ticket resolution</p>
              </div>
            </div>
          </div>
        </div>

        {/* Featured companies */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground mb-4">Featured companies</p>
          <div className="flex flex-wrap gap-8">
            {companies.map((company) => (
              <span key={company} className="text-sm text-muted-foreground font-mono">
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
