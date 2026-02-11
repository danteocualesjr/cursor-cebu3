import { BookOpen, Rocket, Users, Zap } from "lucide-react";

const pillars = [
  {
    icon: BookOpen,
    title: "Learn",
    description:
      "Workshops and sessions that make AI-assisted development accessible to everyone — from first-time coders to seasoned engineers.",
  },
  {
    icon: Rocket,
    title: "Build",
    description:
      "Hackathons and build sessions where ideas become real products. Bring a napkin sketch, leave with a working prototype.",
  },
  {
    icon: Users,
    title: "Collaborate",
    description:
      "A space where founders meet developers, designers find engineers, and everyone learns from each other's Cursor workflows.",
  },
  {
    icon: Zap,
    title: "Ship",
    description:
      "We celebrate shipping. From side projects to startup MVPs, our community is about turning ideas into products that reach users.",
  },
];

export default function Mission() {
  return (
    <section id="about" className="relative py-16 sm:py-24 lg:py-32 bg-bg overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-50" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <p className="section-kicker mb-4">About Us</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text tight-heading mb-4 sm:mb-6">
            Building Cebu&apos;s AI-first community
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
            Cursor Community Cebu brings together the city&apos;s most ambitious
            builders — founders, developers, designers, product managers, and
            Cursor power users — to foster learning, spark collaboration, and
            accelerate what&apos;s possible when humans and AI build together.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 stagger-children">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group relative p-5 sm:p-6 surface-card rounded-lg"
              >
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-border-light to-transparent group-hover:via-accent/30 transition-colors" />
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 bg-bg-elevated rounded-md flex items-center justify-center border border-border-light group-hover:border-accent/50 group-hover:text-accent transition-colors">
                    <Icon size={18} />
                  </div>
                  <span className="text-xs text-text-faint font-mono">0{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-text mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Cursor Support Callout */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 surface-card rounded-lg text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent" />
          <div className="relative z-10">
            <p className="section-kicker mb-4">
              Officially Supported By
            </p>
            <a
              href="https://cursor.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 group"
            >
              <img
                src="/cursor-logo.png"
                alt="Cursor logo"
                className="w-8 h-8 logo-icon"
              />
              <span className="text-2xl font-bold text-text group-hover:text-accent transition-colors">
                Cursor
              </span>
            </a>
            <p className="mt-3 text-sm text-text-secondary max-w-lg mx-auto">
              Cursor Community Cebu is officially recognized and supported by the
              Cursor team, making us part of a global network of communities
              pushing the boundaries of AI-assisted development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
