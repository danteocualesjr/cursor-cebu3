"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, ExternalLink } from "lucide-react";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { SITE_NAME, NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";

const SECTION_IDS = NAV_LINKS.map((link) => link.href.slice(1));

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useScrollSpy(SECTION_IDS);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/75 backdrop-blur-xl border-b border-border-light shadow-[0_8px_30px_rgba(0,0,0,0.28)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 min-h-[56px]">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <Image
              src="/cursor-logo.png"
              alt="Cursor logo"
              width={28}
              height={28}
              className="logo-icon"
            />
            <span className="font-semibold text-text text-sm tracking-tight">
              {SITE_NAME}
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.slice(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm rounded-md hover:bg-bg-card/80 transition-colors ${
                    isActive
                      ? "text-accent font-medium"
                      : "text-text-secondary hover:text-text"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-2">
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
              className="px-4 py-2 bg-accent text-black text-sm font-semibold rounded-md hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/20 transition-all active:scale-[0.99]"
            >
              Join the Community
            </a>
          </div>

          {/* Mobile Menu Button - 44px min touch target */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 -m-2 text-text-secondary hover:text-text transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-bg/98 backdrop-blur-xl border-b border-border-light max-h-[calc(100vh-56px)] overflow-y-auto overscroll-contain">
          <div className="px-4 py-4 space-y-1">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.slice(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3.5 min-h-[48px] flex items-center text-base rounded-xl transition-colors active:bg-bg-card ${
                    isActive
                      ? "text-accent font-medium bg-accent/10"
                      : "text-text-secondary hover:text-text hover:bg-bg-card"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <div className="pt-4 border-t border-border-light mt-4 space-y-2">
              <a
                href={SOCIAL_LINKS.cursor}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3.5 min-h-[48px] text-base text-text-muted hover:text-text-secondary hover:bg-bg-card rounded-xl transition-colors"
              >
                Cursor.com
                <ExternalLink size={14} />
              </a>
              <a
                href="#get-involved"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center min-h-[48px] px-4 py-3.5 bg-accent text-black text-base font-semibold rounded-lg hover:bg-accent-hover transition-colors active:bg-accent-dim"
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
