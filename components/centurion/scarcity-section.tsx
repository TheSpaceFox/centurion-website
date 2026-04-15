const inclusions = [
  "Bespoke hardware built to your specifications",
  "Military-grade tactical casing",
  "40 hours of intimate model calibration",
  "1% company shareholding",
  "Lifetime software updates",
  "Direct line to Head of Deployment",
]

export function ScarcitySection() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-muted-foreground tracking-[0.4em] text-xs uppercase mb-8">
          Deliberately Limited
        </p>
        
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-balance">
          12 Clients in Year One.
        </h2>
        
        <p className="text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
          Centurion is a high-trust, high-touch ecosystem. It cannot be mass-produced. 
          Each unit is a commitment to excellence.
        </p>

        {/* Investment details */}
        <div className="inline-block border border-border p-10 lg:p-12">
          <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-4">
            Total Investment
          </p>
          <p className="font-serif text-5xl md:text-6xl font-light mb-2">
            $100,000
          </p>
          <p className="text-muted-foreground text-sm">USD</p>
        </div>

        {/* Inclusions */}
        <div className="mt-16 max-w-xl mx-auto">
          <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-8">
            Your Investment Includes
          </p>
          <ul className="space-y-4">
            {inclusions.map((item) => (
              <li key={item} className="flex items-center gap-4 text-sm text-foreground/90">
                <span className="w-1.5 h-1.5 bg-foreground/60" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
