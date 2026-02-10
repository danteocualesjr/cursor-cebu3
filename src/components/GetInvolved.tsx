import { Calendar, Mic, Building2, ArrowRight } from "lucide-react";

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
    <section id="get-involved" className="py-16 sm:py-24 lg:py-32 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4">
            Get Involved
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
            There are many ways to be part of Cursor Community Cebu. Whether you
            want to learn, teach, or support — we&apos;d love to have you.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 stagger-children">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="group relative p-6 sm:p-8 bg-bg-card rounded-2xl border border-border-light hover:border-border-hover hover:bg-bg-card-hover transition-all"
              >
                <div className="w-12 h-12 bg-bg-elevated rounded-xl flex items-center justify-center mb-6 border border-border-light group-hover:bg-white group-hover:text-black transition-colors">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-6">
                  {card.description}
                </p>
                <a
                  href={card.href}
                  className="inline-flex items-center gap-2 py-2 text-sm font-medium text-white hover:text-accent-hover transition-colors group/link min-h-[44px]"
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
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 lg:p-12 bg-white rounded-2xl text-center">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-3 sm:mb-4">
            Want to host an event with us?
          </h3>
          <p className="text-black/60 max-w-xl mx-auto mb-8 leading-relaxed">
            We&apos;re always open to co-organizing workshops, meetups,
            hackathons, and Cafe Cursor sessions. If you have a venue, an idea,
            or a team — let&apos;s make it happen.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 sm:py-3.5 min-h-[48px] bg-black text-white font-medium rounded-full hover:bg-black/80 transition-colors group active:bg-black/70"
          >
            Book an Event
            <ArrowRight
              size={16}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
