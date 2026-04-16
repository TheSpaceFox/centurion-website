"use client"

import { ArrowRight } from "lucide-react"

const integrations = [
  { category: "LLM", name: "OpenAI" },
  { category: "LLM", name: "Anthropic" },
  { category: "Comms", name: "Slack" },
  { category: "Code", name: "GitHub" },
  { category: "PM", name: "Jira" },
  { category: "Storage", name: "AWS S3" },
  { category: "Docs", name: "Google Drive" },
  { category: "CRM", name: "Salesforce" },
  { category: "Marketing", name: "HubSpot" },
  { category: "Auto", name: "Zapier" },
  { category: "Data", name: "Snowflake" },
  { category: "Payments", name: "Stripe" },
]

export function IntegrationsSection() {
  return (
    <section className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm text-muted-foreground font-mono mb-4">Integrations</p>
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight">
          Connect
          <br />
          <span className="text-muted-foreground">everything.</span>
        </h2>

        <p className="text-muted-foreground mt-6 max-w-xl">
          Your agents connect to 100+ tools and services. They read, write, and act autonomously across your entire stack.
        </p>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {integrations.map((integration) => (
            <IntegrationCard
              key={integration.name}
              category={integration.category}
              name={integration.name}
            />
          ))}
        </div>

        {/* Stats row */}
        <div className="mt-12 flex flex-wrap items-center gap-6 pt-8 border-t border-border">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-mono font-medium">100+</span>
            <span className="text-sm text-muted-foreground">Integrations</span>
          </div>
          <div className="h-4 w-px bg-border" />
          <div className="flex items-center gap-2">
            <span className="text-sm font-mono">OAuth</span>
            <span className="text-xs text-muted-foreground">Auth built-in</span>
          </div>
          <div className="h-4 w-px bg-border" />
          <div className="flex items-center gap-2">
            <span className="text-sm font-mono">Webhooks</span>
            <span className="text-xs text-muted-foreground">Real-time sync</span>
          </div>
        </div>

        <a
          href="#"
          className="inline-flex items-center gap-2 mt-6 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          View all integrations
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  )
}

function IntegrationCard({ category, name }: { category: string; name: string }) {
  return (
    <div className="p-4 border border-border rounded-lg bg-card hover:bg-secondary transition-colors cursor-pointer">
      <span className="text-xs text-muted-foreground font-mono">{category}</span>
      <p className="font-medium mt-1">{name}</p>
    </div>
  )
}
