"use client"

import { CheckCircle2 } from "lucide-react"

export function InfrastructureSection() {
  return (
    <section id="infrastructure" className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm text-muted-foreground font-mono mb-4">Global infrastructure</p>
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight">
          Global by
          <br />
          <span className="text-muted-foreground">default.</span>
        </h2>

        <p className="text-muted-foreground mt-6 max-w-xl">
          Your agents run on distributed infrastructure across 29 regions. Sub-50ms latency to 99% of the world.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {/* Stats */}
          <div className="space-y-6">
            <div className="p-6 border border-border rounded-lg bg-card">
              <span className="text-4xl font-mono font-medium">29</span>
              <span className="text-muted-foreground ml-2">regions</span>
              <p className="text-sm text-muted-foreground mt-2">
                Compute nodes distributed globally for maximum redundancy and minimum latency.
              </p>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-1 p-4 border border-border rounded-lg bg-card">
                <span className="text-2xl font-mono font-medium">99.99%</span>
                <p className="text-xs text-muted-foreground mt-1">Uptime SLA</p>
              </div>
              <div className="flex-1 p-4 border border-border rounded-lg bg-card">
                <span className="text-2xl font-mono font-medium">&lt;50ms</span>
                <p className="text-xs text-muted-foreground mt-1">Global latency</p>
              </div>
            </div>
          </div>

          {/* Regions */}
          <div className="space-y-3">
            <RegionStatus region="North America" nodes={12} status="operational" />
            <RegionStatus region="Europe" nodes={8} status="operational" />
            <RegionStatus region="Asia Pacific" nodes={6} status="operational" />
            <RegionStatus region="South America" nodes={3} status="operational" />
          </div>
        </div>
      </div>
    </section>
  )
}

function RegionStatus({ 
  region, 
  nodes, 
  status 
}: { 
  region: string
  nodes: number
  status: string
}) {
  return (
    <div className="flex items-center justify-between p-4 border border-border rounded-lg bg-card">
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
        <span className="text-xs text-muted-foreground">{status}</span>
      </div>
      <span className="font-medium">{region}</span>
      <span className="text-sm text-muted-foreground">{nodes} nodes</span>
    </div>
  )
}
