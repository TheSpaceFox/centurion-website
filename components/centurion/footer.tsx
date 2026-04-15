import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="text-center md:text-left">
            <p className="font-serif text-lg tracking-[0.15em]">C E N T U R I O N</p>
            <p className="text-xs text-muted-foreground mt-1">Sovereign Intelligence</p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8 text-xs text-muted-foreground tracking-wider">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms
            </Link>
            <a href="mailto:contact@centurion.systems" className="hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 text-center">
          <p className="text-xs text-muted-foreground/60">
            Centurion Systems. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
