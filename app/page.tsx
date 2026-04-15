import { HeroSection } from "@/components/centurion/hero-section"
import { ProblemSection } from "@/components/centurion/problem-section"
import { ObjectSection } from "@/components/centurion/object-section"
import { ArchitectureSection } from "@/components/centurion/architecture-section"
import { ScarcitySection } from "@/components/centurion/scarcity-section"
import { CheckoutSection } from "@/components/centurion/checkout-section"
import { Footer } from "@/components/centurion/footer"

export default function CenturionPage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ProblemSection />
      <ObjectSection />
      <ArchitectureSection />
      <ScarcitySection />
      <CheckoutSection />
      <Footer />
    </main>
  )
}
