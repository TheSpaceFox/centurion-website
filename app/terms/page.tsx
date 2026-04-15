import Link from "next/link"

export const metadata = {
  title: "Terms of Service | Centurion",
  description: "Terms of Service for Centurion Sovereign Intelligence",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-8 px-6 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/" 
            className="font-serif text-lg tracking-[0.15em] hover:text-muted-foreground transition-colors"
          >
            C E N T U R I O N
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl tracking-wide mb-4">Terms of Service</h1>
          <p className="text-muted-foreground text-sm mb-12">Last updated: April 2026</p>

          <div className="space-y-12 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-foreground text-xl font-medium mb-4 tracking-wide">1. Agreement to Terms</h2>
              <p>
                By accessing or using the Centurion Systems website and purchasing our products, you agree 
                to be bound by these Terms of Service. If you do not agree to these terms, please do not 
                use our services.
              </p>
            </section>

            <section>
              <h2 className="text-foreground text-xl font-medium mb-4 tracking-wide">2. Products and Services</h2>
              <p>
                Centurion offers sovereign AI hardware products designed for privacy-conscious individuals 
                and organizations. All products are sold as-is and are subject to availability. We reserve 
                the right to limit quantities and refuse service at our discretion.
              </p>
            </section>

            <section>
              <h2 className="text-foreground text-xl font-medium mb-4 tracking-wide">3. Pricing and Payment</h2>
              <p className="mb-4">
                All prices are listed in USD. We accept major credit cards and wire transfers. By providing 
                payment information, you represent that you are authorized to use the payment method.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Prices are subject to change without notice</li>
                <li>Payment is required in full at the time of order</li>
                <li>All sales are final unless otherwise specified</li>
              </ul>
            </section>

            <section>
              <h2 className="text-foreground text-xl font-medium mb-4 tracking-wide">4. Shipping and Delivery</h2>
              <p>
                Products are shipped via secure courier services. Delivery times are estimates and are not 
                guaranteed. Risk of loss passes to you upon delivery to the carrier. We are not responsible 
                for delays caused by customs or other factors outside our control.
              </p>
            </section>

            <section>
              <h2 className="text-foreground text-xl font-medium mb-4 tracking-wide">5. Warranty</h2>
              <p>
                Centurion products come with a limited one-year warranty covering defects in materials and 
                workmanship under normal use. This warranty does not cover damage from misuse, unauthorized 
                modifications, or accidents. Warranty claims must be submitted within the warranty period.
              </p>
            </section>

            <section>
              <h2 className="text-foreground text-xl font-medium mb-4 tracking-wide">6. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Centurion Systems shall not be liable for any 
                indirect, incidental, special, consequential, or punitive damages, including loss of 
                profits, data, or business opportunities, arising out of your use of our products or services.
              </p>
            </section>

            <section>
              <h2 className="text-foreground text-xl font-medium mb-4 tracking-wide">7. Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, and software, is the property 
                of Centurion Systems and is protected by intellectual property laws. You may not reproduce, 
                distribute, or create derivative works without our express written consent.
              </p>
            </section>

            <section>
              <h2 className="text-foreground text-xl font-medium mb-4 tracking-wide">8. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with applicable laws, without 
                regard to conflict of law principles. Any disputes arising from these Terms shall be resolved 
                through binding arbitration.
              </p>
            </section>

            <section>
              <h2 className="text-foreground text-xl font-medium mb-4 tracking-wide">9. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. Changes will be effective immediately 
                upon posting. Your continued use of our services after changes constitutes acceptance of the 
                modified Terms.
              </p>
            </section>

            <section>
              <h2 className="text-foreground text-xl font-medium mb-4 tracking-wide">10. Contact</h2>
              <p>
                For questions regarding these Terms, please contact us at{" "}
                <a href="mailto:legal@centurion.systems" className="text-foreground underline hover:no-underline">
                  legal@centurion.systems
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs text-muted-foreground/60">
            Centurion Systems. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}
