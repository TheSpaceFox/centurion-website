import Image from "next/image"

export function ObjectSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] lg:aspect-square">
            <div className="absolute inset-0 bg-gradient-to-br from-card/50 to-transparent rounded-sm" />
            <Image
              src="/images/centurion-open.jpg"
              alt="Centurion computation engine with billet aluminium chassis and carbon fiber paneling"
              fill
              className="object-cover rounded-sm"
            />
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-muted-foreground/30" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-muted-foreground/30" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p className="text-muted-foreground tracking-[0.4em] text-xs uppercase mb-6">
              Materials & Build Quality
            </p>
            
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-8 text-balance">
              Meet Centurion.
            </h2>
            
            <p className="font-serif text-xl text-foreground/90 italic mb-8">
              A sovereign physical asset.
            </p>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                This is not a server rack. This is a briefcase for a king. Built to uncompromising 
                military specifications using billet aluminium, carbon fibre, and leather.
              </p>
              <p className="text-foreground">
                It looks like a piece of art. It feels like a weapon.
              </p>
            </div>

            {/* Material specs */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              {[
                { label: "Chassis", value: "Billet Aluminium" },
                { label: "Panels", value: "Carbon Fibre" },
                { label: "Touchpoints", value: "Premium Leather" },
              ].map((spec) => (
                <div key={spec.label} className="text-center">
                  <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-2">
                    {spec.label}
                  </p>
                  <p className="text-sm font-medium">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
