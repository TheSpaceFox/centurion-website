"use client"

import { Shield, Lock, FileText, Key } from "lucide-react"

const securityFeatures = [
  {
    icon: Shield,
    title: "Isolated execution",
    description: "Each agent runs in its own secure sandbox.",
  },
  {
    icon: Lock,
    title: "Encrypted memory",
    description: "Data encrypted at rest and in transit.",
  },
  {
    icon: FileText,
    title: "Full audit trails",
    description: "Every action logged and inspectable.",
  },
  {
    icon: Key,
    title: "Permission boundaries",
    description: "Principle of least privilege by design.",
  },
]

const certifications = ["SOC 2", "ISO 27001", "HIPAA", "GDPR"]

export function SecuritySection() {
  return (
    <section id="security" className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm text-muted-foreground font-mono mb-4">Security</p>
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight">
          Autonomous,
          <br />
          <span className="text-muted-foreground">not uncontrolled.</span>
        </h2>

        <p className="text-muted-foreground mt-6 max-w-xl">
          Your agents are powerful but constrained. Enterprise-grade security ensures they only do what you allow.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {/* Left column - stats */}
          <div className="space-y-6">
            <div className="p-6 border border-border rounded-lg bg-card">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-xs text-muted-foreground">Active protection</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-mono font-medium">0</span>
                <span className="text-muted-foreground">Security incidents this year</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="px-3 py-1.5 text-xs font-mono border border-border rounded-full bg-secondary"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Right column - features */}
          <div className="grid grid-cols-2 gap-4">
            {securityFeatures.map((feature) => (
              <div key={feature.title} className="p-4 border border-border rounded-lg bg-card">
                <feature.icon className="w-5 h-5 text-muted-foreground mb-3" />
                <h3 className="font-medium text-sm">{feature.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
