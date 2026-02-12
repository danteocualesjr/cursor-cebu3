import { Calendar, Mic, Building2, ArrowRight } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

const cards = [
  {
    icon: Calendar,
    title: "Attend an Event",
    description:
      "Join our workshops, hackathons, meetups, and Cafe Cursor sessions. Whether you're a beginner or an expert — there's a seat for you.",
    cta: "Browse Events",
    href: "#events",
  },
  {
    icon: Mic,
    title: "Become a Speaker",
    description:
      "Share your Cursor workflows, projects, and insights with the community. We're always looking for passionate builders to inspire others.",
    cta: "Apply Now",
    href: "#contact",
  },
  {
    icon: Building2,
    title: "Become a Sponsor",
    description:
      "Support the growth of Cebu's AI-first developer community. Partner with us to host events, provide resources, and reach top talent.",
    cta: "Get in Touch",
    href: "#contact",
  },
];

export default function GetInvolved() {
  return (
    <section id="get-involved" className="relative py-16 sm:py-24 lg:py-32 bg-bg overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-50" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
        {/* Section Header */}
        <div className="section-head">
          <p className="section-kicker mb-4">Join Us</p>
          <h2 className="section-title mb-4">
            Get Involved
          </h2>
          <p className="section-description">
            There are many ways to be part of Cursor Community Cebu. Whether you
            want to learn, teach, or support — we&apos;d love to have you.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 stagger-children">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="group relative p-6 sm:p-8 surface-card rounded-lg"
              >
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-border-light to-transparent group-hover:via-accent/30 transition-colors" />
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 bg-bg-elevated rounded-md flex items-center justify-center border border-border-light group-hover:border-accent/50 group-hover:text-accent transition-colors">
                    <Icon size={22} />
                  </div>
                  <span className="text-xs text-text-faint font-mono">0{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-text mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-6">
                  {card.description}
                </p>
                <a
                  href={card.href}
                  className="btn-tertiary group/link"
                >
                  {card.cta}
                  <ArrowRight
                    size={14}
                    className="group-hover/link:translate-x-0.5 transition-transform"
                  />
                </a>
              </div>
            );
          })}
        </div>

        {/* Book Event Banner */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 lg:p-12 surface-card rounded-lg text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent" />
          <div className="relative z-10">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-text tight-heading mb-3 sm:mb-4">
              Want to host an event with us?
            </h3>
            <p className="text-text-secondary max-w-xl mx-auto mb-8 leading-relaxed">
              We&apos;re always open to co-organizing workshops, meetups,
              hackathons, and Cafe Cursor sessions. If you have a venue, an idea,
              or a team — let&apos;s make it happen.
            </p>
            <a
              href="#contact"
              className="btn-primary group"
            >
              Book an Event
              <ArrowRight
                size={16}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </a>
          </div>
        </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
