export function ProblemSection() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-muted-foreground tracking-[0.4em] text-xs uppercase mb-8">
          The Value of Trust
        </p>
        
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-12 text-balance">
          You Are Being Listened To.
        </h2>
        
        <div className="space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          <p>
            Public AI functions as a global data capture layer. Every time you input a Q3 projection, 
            a clandestine acquisition target, or the intricacies of a private family trust, it becomes training data.
          </p>
          <p>
            The cloud is not a fortress. It is a library.
          </p>
          <p className="text-foreground font-medium">
            Centurion is the solution for the executive who requires an AI they can absolutely trust. 
            No backdoors. No telemetry.
          </p>
        </div>

        {/* Decorative line */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <div className="h-px w-16 bg-border" />
          <div className="w-2 h-2 rotate-45 border border-muted-foreground" />
          <div className="h-px w-16 bg-border" />
        </div>
      </div>
    </section>
  )
}
