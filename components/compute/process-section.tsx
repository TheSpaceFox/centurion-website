"use client"

export function ProcessSection() {
  return (
    <section className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm text-muted-foreground font-mono mb-4">Process</p>
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight">
          Define. Deploy. <span className="text-muted-foreground">Scale.</span>
        </h2>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <ProcessStep
            number="01"
            title="Define"
            subtitle="your agent"
            description="Describe what your agent should do. Set its capabilities, constraints, and goals in natural language or code."
          />
          <ProcessStep
            number="02"
            title="Assign"
            subtitle="the task"
            description="Give your agent a mission. It breaks down complex tasks into steps and executes them autonomously."
          />
          <ProcessStep
            number="03"
            title="Monitor"
            subtitle="& scale"
            description="Track progress in real-time. Spin up more agents as needed. Pay only for compute used."
          />
        </div>
      </div>
    </section>
  )
}

function ProcessStep({ 
  number, 
  title, 
  subtitle, 
  description 
}: { 
  number: string
  title: string
  subtitle: string
  description: string
}) {
  return (
    <div className="relative">
      <span className="text-xs text-muted-foreground font-mono">{number}</span>
      <h3 className="text-xl font-medium mt-4">
        {title}
        <span className="text-muted-foreground ml-2">{subtitle}</span>
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed mt-3">{description}</p>
    </div>
  )
}
