import Image from "next/image";
import { BookOpen, Rocket, Users, Zap } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

const pillars = [
  {
    icon: BookOpen,
    title: "Learn",
    accent: "from-blue-500/20 to-blue-500/0",
    iconAccent: "group-hover:border-blue-400/60 group-hover:text-blue-400 group-hover:shadow-[0_0_20px_rgba(96,165,250,0.15)]",
    description:
      "Workshops and sessions that make AI-assisted development accessible to everyone — from first-time coders to seasoned engineers.",
  },
  {
    icon: Rocket,
    title: "Build",
    accent: "from-accent/20 to-accent/0",
    iconAccent: "group-hover:border-accent/60 group-hover:text-accent group-hover:shadow-[0_0_20px_rgba(249,115,22,0.15)]",
    description:
      "Hackathons and build sessions where ideas become real products. Bring a napkin sketch, leave with a working prototype.",
  },
  {
    icon: Users,
    title: "Collaborate",
    accent: "from-emerald-500/20 to-emerald-500/0",
    iconAccent: "group-hover:border-emerald-400/60 group-hover:text-emerald-400 group-hover:shadow-[0_0_20px_rgba(52,211,153,0.15)]",
    description:
      "A space where founders meet developers, designers find engineers, and everyone learns from each other's Cursor workflows.",
  },
  {
    icon: Zap,
    title: "Ship",
    accent: "from-amber-500/20 to-amber-500/0",
    iconAccent: "group-hover:border-amber-400/60 group-hover:text-amber-400 group-hover:shadow-[0_0_20px_rgba(251,191,36,0.15)]",
    description:
      "We celebrate shipping. From side projects to startup MVPs, our community is about turning ideas into products that reach users.",
  },
];

export default function Mission() {
  return (
    <section id="about" className="relative py-16 sm:py-24 lg:py-32 bg-bg overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-50" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
        {/* Section Header */}
        <div className="section-head">
          <p className="section-kicker mb-4">About Us</p>
          <h2 className="section-title mb-5">
            Building Cebu&apos;s AI-first community
          </h2>
          <p className="section-description">
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
                className="group relative p-5 sm:p-6 pillar-card rounded-xl overflow-hidden"
              >
                {/* Colored top glow on hover */}
                <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${pillar.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-px pillar-top-line" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-11 h-11 bg-bg-elevated rounded-lg flex items-center justify-center border border-border-light transition-all duration-300 ${pillar.iconAccent}`}>
                      <Icon size={20} strokeWidth={1.8} />
                    </div>
                    <span className="text-[11px] text-text-faint font-mono tracking-widest uppercase">0{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-text mb-2.5 tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
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
              <Image
                src="/cursor-logo.png"
                alt="Cursor logo"
                width={32}
                height={32}
                className="logo-icon"
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
        </RevealOnScroll>
      </div>
    </section>
  );
}
