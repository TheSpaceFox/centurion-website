"use client"

import { useEffect, useState } from "react"

export function MetricsSection() {
  const [tasksCompleted, setTasksCompleted] = useState(0)
  const [latency, setLatency] = useState(0)
  const [availability, setAvailability] = useState(0.99)

  useEffect(() => {
    // Animate counter on mount
    const targetTasks = 847293
    const duration = 2000
    const steps = 60
    const increment = targetTasks / steps
    
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= targetTasks) {
        setTasksCompleted(targetTasks)
        clearInterval(timer)
      } else {
        setTasksCompleted(Math.floor(current))
      }
    }, duration / steps)

    // Animate latency
    const latencyTimer = setTimeout(() => setLatency(12), 500)
    
    return () => {
      clearInterval(timer)
      clearTimeout(latencyTimer)
    }
  }, [])

  return (
    <section className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm text-muted-foreground font-mono">LIVE</span>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight">
          Real-time
          <br />
          <span className="text-muted-foreground">agent metrics.</span>
        </h2>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {/* Tasks Completed */}
          <div className="p-6 border border-border rounded-lg bg-card">
            <span className="text-4xl md:text-5xl font-mono font-medium tabular-nums">
              {tasksCompleted.toLocaleString()}
            </span>
            <p className="text-sm text-muted-foreground mt-2">Tasks completed today</p>
            <p className="text-xs text-muted-foreground mt-1">by 23,847 active agents</p>
            <p className="text-xs text-muted-foreground">across all regions</p>
          </div>

          {/* Availability */}
          <div className="p-6 border border-border rounded-lg bg-card">
            <div className="flex items-baseline gap-1">
              <span className="text-4xl md:text-5xl font-mono font-medium">{availability.toFixed(2)}</span>
              <span className="text-2xl font-mono text-muted-foreground">%</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">Availability</p>
            <p className="text-xs text-muted-foreground mt-1">p99 latency</p>
          </div>

          {/* Latency */}
          <div className="p-6 border border-border rounded-lg bg-card">
            <div className="flex items-baseline gap-1">
              <span className="text-4xl md:text-5xl font-mono font-medium">&lt;{latency}</span>
              <span className="text-2xl font-mono text-muted-foreground">ms</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">Average execution</p>
          </div>
        </div>

        {/* Model badges */}
        <div className="mt-8 flex flex-wrap gap-3">
          <ModelBadge name="OpenAI GPT-4 Turbo" />
          <ModelBadge name="Anthropic Claude 3" />
          <ModelBadge name="Mistral Large" />
          <ModelBadge name="Llama 3" />
          <span className="px-3 py-1.5 text-xs font-mono text-muted-foreground border border-border rounded-full">
            +12 more models
          </span>
        </div>
      </div>
    </section>
  )
}

function ModelBadge({ name }: { name: string }) {
  return (
    <span className="px-3 py-1.5 text-xs font-mono border border-border rounded-full bg-secondary">
      {name}
    </span>
  )
}
