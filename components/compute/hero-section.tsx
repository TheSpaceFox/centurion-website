"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-foreground rounded-sm" />
          <span className="font-mono text-sm font-medium tracking-tight">COMPUTE</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#capabilities" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Capabilities</a>
          <a href="#infrastructure" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Infrastructure</a>
          <a href="#security" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Security</a>
          <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
        </nav>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="text-sm">
            Sign in
          </Button>
          <Button size="sm" className="text-sm">
            Get started
          </Button>
        </div>
      </header>

      {/* Hero Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center">
        <p className="text-sm text-muted-foreground mb-6 font-mono">
          Autonomous AI agents for distributed computing
        </p>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight max-w-4xl text-balance leading-[1.1]">
          Distributed compute,
          <br />
          <span className="text-muted-foreground">agents that automate</span>
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-8 mt-16">
          <StatBlock value="3500+" label="autonomous agents active" />
          <StatBlock value="99.7%" label="distributed uptime" />
          <StatBlock value="<50ms" label="execution latency" />
        </div>
      </div>

      {/* Bottom border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  )
}

function StatBlock({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-2xl md:text-3xl font-mono font-medium">{value}</span>
      <span className="text-xs text-muted-foreground mt-1">{label}</span>
    </div>
  )
}
