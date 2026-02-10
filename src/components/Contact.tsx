"use client";

import { useState } from "react";
import { Send, Mail, MessageCircle } from "lucide-react";
import { CONTACT_EMAIL, SOCIAL_LINKS } from "@/lib/constants";

const subjects = [
  "General Inquiry",
  "Event Booking",
  "Speaker Application",
  "Sponsorship",
  "Partnership",
  "Other",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: subjects[0],
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      `[Cursor Community Cebu] ${formData.subject}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.open(mailtoUrl, "_blank");
  };

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32 bg-bg-elevated">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16">
          {/* Left: Info */}
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4">
              Get in Touch
            </h2>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-6 sm:mb-8">
              Have a question, idea, or proposal? We&apos;d love to hear from
              you. Reach out and we&apos;ll get back to you as soon as we can.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-bg-card rounded-xl flex items-center justify-center shrink-0 border border-border-light">
                  <Mail size={18} className="text-text-muted" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Email</h3>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-sm text-text-secondary hover:text-white transition-colors"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>

              {/* Social */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-bg-card rounded-xl flex items-center justify-center shrink-0 border border-border-light">
                  <MessageCircle size={18} className="text-text-muted" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-2">
                    Connect With Us
                  </h3>
                  <div className="flex gap-3">
                  <a
                    href={SOCIAL_LINKS.discord}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 min-h-[44px] flex items-center bg-bg-card border border-border-light rounded-lg text-sm text-text-secondary hover:text-white hover:border-border-hover transition-colors"
                  >
                    Discord
                  </a>
                  <a
                    href={SOCIAL_LINKS.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 min-h-[44px] flex items-center bg-bg-card border border-border-light rounded-lg text-sm text-text-secondary hover:text-white hover:border-border-hover transition-colors"
                  >
                    X (Twitter)
                  </a>
                  <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 min-h-[44px] flex items-center bg-bg-card border border-border-light rounded-lg text-sm text-text-secondary hover:text-white hover:border-border-hover transition-colors"
                  >
                    LinkedIn
                  </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-text-secondary mb-1.5"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3.5 min-h-[48px] bg-bg-card border border-border-light rounded-xl text-base text-text placeholder:text-text-muted focus:outline-none focus:border-border-hover focus:ring-1 focus:ring-border-hover transition-colors"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-text-secondary mb-1.5"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3.5 min-h-[48px] bg-bg-card border border-border-light rounded-xl text-base text-text placeholder:text-text-muted focus:outline-none focus:border-border-hover focus:ring-1 focus:ring-border-hover transition-colors"
                  placeholder="you@example.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-text-secondary mb-1.5"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full px-4 py-3.5 min-h-[48px] bg-bg-card border border-border-light rounded-xl text-base text-text focus:outline-none focus:border-border-hover focus:ring-1 focus:ring-border-hover transition-colors appearance-none"
                >
                  {subjects.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-text-secondary mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3.5 min-h-[120px] bg-bg-card border border-border-light rounded-xl text-base text-text placeholder:text-text-muted focus:outline-none focus:border-border-hover focus:ring-1 focus:ring-border-hover transition-colors resize-none"
                  placeholder="Tell us what's on your mind..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 sm:py-3.5 min-h-[48px] bg-white text-black font-medium rounded-full hover:bg-white/90 transition-colors active:bg-white/80"
              >
                Send Message
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
