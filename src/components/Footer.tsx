import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { SITE_NAME, SOCIAL_LINKS, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative bg-bg border-t border-border-light overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 sm:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                src="/cursor-logo.png"
                alt="Cursor logo"
                width={28}
                height={28}
                className="logo-icon"
              />
              <span className="font-semibold text-text">{SITE_NAME}</span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed max-w-sm mb-6">
              Cebu&apos;s official Cursor community. We bring together founders,
              developers, designers, and builders to learn, collaborate, and ship
              with the world&apos;s best AI code editor.
            </p>
            <a
              href={SOCIAL_LINKS.cursor}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-text-secondary transition-colors"
            >
              Powered by Cursor
              <ExternalLink size={12} />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-mono text-text-muted uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xs font-mono text-text-muted uppercase tracking-wider mb-4">Connect</h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={SOCIAL_LINKS.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-secondary hover:text-text transition-colors"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-secondary hover:text-text transition-colors"
                >
                  X (Twitter)
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-secondary hover:text-text transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.cursor}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-text-secondary hover:text-text transition-colors"
                >
                  Cursor.com
                  <ExternalLink size={10} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-border-light flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs text-text-muted font-mono">
            &copy; {new Date().getFullYear()} Cursor Community Cebu
          </p>
          <p className="text-xs text-text-muted font-mono">
            Built with{" "}
            <a
              href={SOCIAL_LINKS.cursor}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent transition-colors"
            >
              Cursor
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
