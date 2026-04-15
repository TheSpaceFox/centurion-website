import { Shield, Plane, Brain } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "The Iron Vault",
    description:
      "No cloud. No logs. No subpoena can touch it. Cryptographically and physically dead to the world, except for you.",
  },
  {
    icon: Plane,
    title: "The Doomsday Protocol",
    description:
      "When the fiber line is cut or you are on a Gulfstream at 40,000 feet, Centurion operates flawlessly.",
  },
  {
    icon: Brain,
    title: "The Consigliere",
    description:
      "A completely bespoke intellectual partner. We dedicate 40 hours to training your core model to absorb your rhetorical style and decision-making calculus.",
  },
]

export function ArchitectureSection() {
  return (
    <section className="py-32 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-muted-foreground tracking-[0.4em] text-xs uppercase mb-6">
            The Architecture of Sovereignty
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-balance">
            Built for Absolute Control
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-8 lg:p-10 bg-card border border-border hover:border-muted-foreground/50 transition-all duration-500"
            >
              {/* Index number */}
              <span className="absolute top-6 right-6 text-xs text-muted-foreground/50 tracking-wider">
                0{index + 1}
              </span>

              <feature.icon className="w-8 h-8 mb-8 text-foreground/80" strokeWidth={1} />
              
              <h3 className="font-serif text-xl lg:text-2xl font-light mb-4">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
