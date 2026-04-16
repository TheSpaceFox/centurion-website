"use client"

import { CheckCircle2 } from "lucide-react"

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm text-muted-foreground font-mono mb-4">Capabilities</p>
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight max-w-2xl">
          Intelligent
          <br />
          <span className="text-muted-foreground">workers.</span>
        </h2>
        
        <p className="text-muted-foreground mt-6 max-w-xl">
          Deploy autonomous AI agents that execute complex tasks across distributed infrastructure. No supervision required.
        </p>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <CapabilityCard
            number="01"
            title="Autonomous Execution"
            description="Deploy AI agents that work independently. They analyze, decide, and execute complex multi-step tasks without human intervention."
            stat="99.7%"
            statLabel="task completion"
          />
        </div>
      </div>
    </section>
  )
}

function CapabilityCard({ 
  number, 
  title, 
  description, 
  stat, 
  statLabel 
}: { 
  number: string
  title: string
  description: string
  stat: string
  statLabel: string
}) {
  return (
    <div className="p-6 border border-border rounded-lg bg-card">
      <span className="text-xs text-muted-foreground font-mono">{number}</span>
      <h3 className="text-xl font-medium mt-4 mb-3">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      
      <div className="flex items-center gap-2 mt-6 pt-6 border-t border-border">
        <CheckCircle2 className="w-4 h-4 text-accent" />
        <span className="text-sm font-mono">{stat}</span>
        <span className="text-xs text-muted-foreground">{statLabel}</span>
      </div>
    </div>
  )
}
