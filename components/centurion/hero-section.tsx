"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const scrollToCheckout = () => {
    document.getElementById("checkout")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-10" />
      
      {/* Hero image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/centurion-vault.jpg"
          alt="Centurion Tactical Vault"
          fill
          className="object-cover opacity-60"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-6 max-w-5xl mx-auto">
        <p className="text-muted-foreground tracking-[0.4em] text-xs uppercase mb-8">
          Sovereign AI Hardware
        </p>
        
        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-[0.15em] font-light mb-6 whitespace-nowrap">
          C E N T U R I O N
        </h1>
        
        <p className="font-serif text-xl md:text-2xl lg:text-3xl font-light text-foreground/90 mb-4 italic">
          Sovereign Intelligence. No Compromise.
        </p>
        
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mb-12 leading-relaxed">
          The ultimate advantage is an intelligence you can actually trust.
        </p>

        <Button
          onClick={scrollToCheckout}
          size="lg"
          className="bg-foreground text-background hover:bg-foreground/90 tracking-[0.2em] text-xs uppercase px-10 py-6 h-auto transition-all duration-300"
        >
          Initiate Protocol
        </Button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  )
}
