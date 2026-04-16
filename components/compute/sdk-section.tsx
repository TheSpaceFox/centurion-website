"use client"

const codeExample = `import { Agent } from '@compute/sdk'

const agent = new Agent({
  name: 'data-processor',
  model: 'gpt-4-turbo',
  tools: ['read', 'write', 'analyze']
})

agent.on('task', async (task) => {
  const result = await agent.execute(task)
  return result
})

await agent.deploy({ 
  regions: ['us-east', 'eu-west'],
  replicas: 3 
})`

const features = [
  {
    title: "TypeScript native",
    description: "Full type safety for agent configs and responses.",
  },
  {
    title: "Streaming results",
    description: "Watch your agents think and act in real-time.",
  },
  {
    title: "Multi-model support",
    description: "OpenAI, Anthropic, Mistral, or bring your own.",
  },
  {
    title: "Local debugging",
    description: "Test agents locally before deploying to cloud.",
  },
]

export function SDKSection() {
  return (
    <section className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm text-muted-foreground font-mono mb-4">Developer SDK</p>
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight">
          Code your agents.
          <br />
          <span className="text-muted-foreground">Or let them code.</span>
        </h2>

        <p className="text-muted-foreground mt-6 max-w-xl">
          A powerful SDK for building, deploying, and orchestrating AI agents. Define behaviors in code or natural language.
        </p>

        <div className="mt-12 grid lg:grid-cols-2 gap-8">
          {/* Code block */}
          <div className="border border-border rounded-lg bg-card overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
              <div className="w-3 h-3 rounded-full bg-muted" />
              <div className="w-3 h-3 rounded-full bg-muted" />
              <div className="w-3 h-3 rounded-full bg-muted" />
              <span className="text-xs text-muted-foreground ml-2 font-mono">agent.ts</span>
            </div>
            <pre className="p-4 text-sm font-mono text-muted-foreground overflow-x-auto">
              <code>{codeExample}</code>
            </pre>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature) => (
              <div key={feature.title} className="p-4 border border-border rounded-lg bg-card">
                <h3 className="font-medium text-sm">{feature.title}</h3>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
