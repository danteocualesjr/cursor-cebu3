import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-bg" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-white/[0.04] to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-bg-card border border-border rounded-full mb-8 animate-fade-in-up">
          <Sparkles size={14} className="text-text-secondary" />
          <span className="text-sm text-text-secondary font-medium">
            Officially supported by the Cursor team
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 animate-fade-in-up">
          <span className="text-white">Where Cebu Builds</span>
          <br />
          <span className="gradient-text">with Cursor</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up">
          A community of founders, developers, designers, and builders in Cebu
          — learning, creating, and shipping together with the world&apos;s best
          AI code editor.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up">
          <a
            href="#events"
            className="group flex items-center gap-2 px-8 py-3.5 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-all hover:gap-3"
          >
            Explore Events
            <ArrowRight
              size={16}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </a>
          <a
            href="#get-involved"
            className="flex items-center gap-2 px-8 py-3.5 bg-transparent border border-border text-text font-medium rounded-full hover:bg-bg-card hover:border-border-hover transition-colors"
          >
            Apply to Speak
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto animate-fade-in-up">
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-white">1</div>
            <div className="text-sm text-text-muted mt-1">Event Held</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-white">100+</div>
            <div className="text-sm text-text-muted mt-1">Attendees</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-white">5+</div>
            <div className="text-sm text-text-muted mt-1">Upcoming Events</div>
          </div>
        </div>
      </div>
    </section>
  );
}
