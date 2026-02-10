"use client";

import { useState } from "react";
import { Menu, X, ExternalLink } from "lucide-react";
import { SITE_NAME, NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-xl border-b border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <img
              src="/cursor-logo.png"
              alt="Cursor logo"
              className="w-7 h-7 invert"
            />
            <span className="font-semibold text-text text-sm tracking-tight">
              {SITE_NAME}
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-text-secondary hover:text-text transition-colors rounded-lg hover:bg-bg-card"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={SOCIAL_LINKS.cursor}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-2 text-sm text-text-muted hover:text-text-secondary transition-colors"
            >
              Cursor.com
              <ExternalLink size={12} />
            </a>
            <a
              href="#get-involved"
              className="px-4 py-2 bg-white text-black text-sm font-medium rounded-full hover:bg-white/90 transition-colors"
            >
              Join the Community
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-text-secondary hover:text-text transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-bg/95 backdrop-blur-xl border-b border-border-light">
          <div className="px-4 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2.5 text-sm text-text-secondary hover:text-text hover:bg-bg-card rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-border-light mt-3">
              <a
                href={SOCIAL_LINKS.cursor}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-3 py-2.5 text-sm text-text-muted hover:text-text-secondary transition-colors"
              >
                Cursor.com
                <ExternalLink size={12} />
              </a>
              <a
                href="#get-involved"
                onClick={() => setIsOpen(false)}
                className="block mt-2 px-4 py-2.5 bg-white text-black text-sm font-medium rounded-full text-center hover:bg-white/90 transition-colors"
              >
                Join the Community
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
