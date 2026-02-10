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
    <section id="about" className="py-24 sm:py-32 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-6">
            Building Cebu&apos;s AI-first community
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            Cursor Community Cebu brings together the city&apos;s most ambitious
            builders — founders, developers, designers, product managers, and
            Cursor power users — to foster learning, spark collaboration, and
            accelerate what&apos;s possible when humans and AI build together.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group p-6 bg-bg-card rounded-2xl border border-border-light hover:border-border-hover hover:bg-bg-card-hover transition-all"
              >
                <div className="w-10 h-10 bg-bg-elevated rounded-xl flex items-center justify-center mb-4 border border-border-light group-hover:bg-white group-hover:text-black transition-colors">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
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
        <div className="mt-16 p-8 bg-bg-card rounded-2xl border border-border-light text-center glow">
          <p className="text-text-muted text-sm uppercase tracking-wider font-medium mb-4">
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
              className="w-8 h-8 invert"
            />
            <span className="text-2xl font-bold text-white group-hover:text-text-secondary transition-colors">
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
    </section>
  );
}
