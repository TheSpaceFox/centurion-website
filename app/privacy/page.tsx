import Link from "next/link"

export const metadata = {
  title: "Privacy Policy | Centurion",
  description: "Privacy Policy for Centurion Sovereign Intelligence",
}

export default function PrivacyPage() {
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
          <h1 className="font-serif text-4xl md:text-5xl tracking-wide mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground text-sm mb-12">Last updated: April 2026</p>

          <div className="space-y-12 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-foreground text-xl font-medium mb-4 tracking-wide">1. Introduction</h2>
              <p>
                Centurion Systems (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you visit our website or purchase our products.
              </p>
            </section>

            <section>
              <h2 className="text-foreground text-xl font-medium mb-4 tracking-wide">2. Information We Collect</h2>
              <p className="mb-4">We may collect information about you in a variety of ways, including:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="text-foreground">Personal Data:</span> Name, email address, shipping address, phone number, and payment information when you make a purchase.</li>
                <li><span className="text-foreground">Device Data:</span> Information about your device, browser type, and IP address collected automatically.</li>
                <li><span className="text-foreground">Usage Data:</span> Information about how you interact with our website.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-foreground text-xl font-medium mb-4 tracking-wide">3. Use of Your Information</h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Process and fulfill your orders</li>
                <li>Communicate with you about your purchase</li>
                <li>Provide customer support</li>
                <li>Improve our website and products</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-foreground text-xl font-medium mb-4 tracking-wide">4. Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your 
                personal information. However, no method of transmission over the Internet or electronic 
                storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-foreground text-xl font-medium mb-4 tracking-wide">5. Third-Party Services</h2>
              <p>
                We may share your information with third-party service providers who assist us in 
                operating our website, conducting our business, or servicing you. These parties are 
                obligated to keep your information confidential.
              </p>
            </section>

            <section>
              <h2 className="text-foreground text-xl font-medium mb-4 tracking-wide">6. Your Rights</h2>
              <p className="mb-4">Depending on your location, you may have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to or restrict processing of your data</li>
                <li>Data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-foreground text-xl font-medium mb-4 tracking-wide">7. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:privacy@centurion.systems" className="text-foreground underline hover:no-underline">
                  privacy@centurion.systems
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
