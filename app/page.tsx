import { HeroSection } from "@/components/compute/hero-section"
import { CapabilitiesSection } from "@/components/compute/capabilities-section"
import { ProcessSection } from "@/components/compute/process-section"
import { InfrastructureSection } from "@/components/compute/infrastructure-section"
import { MetricsSection } from "@/components/compute/metrics-section"
import { IntegrationsSection } from "@/components/compute/integrations-section"
import { SecuritySection } from "@/components/compute/security-section"
import { SDKSection } from "@/components/compute/sdk-section"
import { TestimonialsSection } from "@/components/compute/testimonials-section"
import { PricingSection } from "@/components/compute/pricing-section"
import { CTASection } from "@/components/compute/cta-section"
import { Footer } from "@/components/compute/footer"

export default function ComputePage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <CapabilitiesSection />
      <ProcessSection />
      <InfrastructureSection />
      <MetricsSection />
      <IntegrationsSection />
      <SecuritySection />
      <SDKSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </main>
  )
}
