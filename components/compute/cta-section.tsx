"use client"

import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight">
          Ready to delegate
          <br />
          <span className="text-muted-foreground">to AI agents?</span>
        </h2>

        <p className="text-muted-foreground mt-6 max-w-xl mx-auto">
          Join teams automating complex workflows with COMPUTE agents. Deploy your first agent in minutes.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <Button size="lg">
            Deploy your first agent
          </Button>
          <Button size="lg" variant="outline">
            Book a demo
          </Button>
        </div>

        <p className="text-sm text-muted-foreground mt-8">
          1,000 free tasks with COMPUTE
        </p>
      </div>
    </section>
  )
}
