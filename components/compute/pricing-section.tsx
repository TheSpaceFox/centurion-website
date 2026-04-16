"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    number: "01",
    name: "Explorer",
    description: "For tinkering and small automations",
    price: "$0",
    period: "/month",
    features: [
      "3 concurrent agents",
      "1,000 tasks/month",
      "Community support",
      "Basic logging",
      "Public integrations",
    ],
    cta: "Start free",
    popular: false,
  },
  {
    number: "02",
    name: "Builder",
    description: "For teams shipping with agents",
    price: "$65",
    period: "/month",
    note: "billed annually",
    features: [
      "25 concurrent agents",
      "50,000 tasks/month",
      "Priority support",
      "Full audit trails",
      "Private integrations",
      "Team workspaces",
      "Custom agent roles",
    ],
    cta: "Start trial",
    popular: true,
  },
  {
    number: "03",
    name: "Scale",
    description: "For agent-first organizations",
    price: "Custom",
    period: "",
    features: [
      "Unlimited agents",
      "Unlimited tasks",
      "24/7 dedicated support",
      "On-premise deployment",
      "SLA guarantee",
      "Custom LLM routing",
      "Advanced security",
      "Dedicated compute",
    ],
    cta: "Contact sales",
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm text-muted-foreground font-mono mb-4">Pricing</p>
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight">
          Pay for
          <br />
          <span className="text-muted-foreground">results.</span>
        </h2>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-6 border rounded-lg ${
                plan.popular
                  ? "border-accent bg-card"
                  : "border-border bg-card"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-4 px-2 py-1 text-xs font-mono bg-accent text-accent-foreground rounded">
                  Most Popular
                </span>
              )}
              
              <span className="text-xs text-muted-foreground font-mono">{plan.number}</span>
              <h3 className="text-xl font-medium mt-2">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>

              <div className="mt-6">
                <span className="text-3xl font-mono font-medium">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
                {plan.note && (
                  <p className="text-xs text-muted-foreground mt-1">{plan.note}</p>
                )}
              </div>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className="w-full mt-6"
                variant={plan.popular ? "default" : "outline"}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom features */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 pt-8 border-t border-border">
          <span className="text-sm text-muted-foreground">Encrypted execution</span>
          <span className="text-sm text-muted-foreground">Full audit logs</span>
          <span className="text-sm text-muted-foreground">Multi-model routing</span>
        </div>

        <p className="text-center mt-4">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Compare all features
          </a>
        </p>
      </div>
    </section>
  )
}
