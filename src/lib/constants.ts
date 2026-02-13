export const SITE_NAME = "Cursor Community Cebu";
export const SITE_TAGLINE = "Where Cebu Builds with Cursor";

export const CONTACT_EMAIL = "dante@nativestack.ai";

// Formspree form ID for contact form submissions.
// Create a form at https://formspree.io and add the ID to .env.local
export const FORMSPREE_FORM_ID =
  process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || "";

export const SOCIAL_LINKS = {
  discord: "https://discord.gg/cursor-community-cebu",
  x: "https://x.com/cursorcommunitycebu",
  linkedin: "https://linkedin.com/company/cursor-community-cebu",
  cursor: "https://cursor.com",
} as const;

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Events", href: "#events" },
  { label: "Gallery", href: "#gallery" },
  { label: "Speakers", href: "#speakers" },
  { label: "Get Involved", href: "#get-involved" },
  { label: "Opportunities", href: "#opportunities" },
  { label: "Contact", href: "#contact" },
] as const;
