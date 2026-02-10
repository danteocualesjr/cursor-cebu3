import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-bg" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full blur-3xl hero-bg-glow" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full blur-3xl hero-bg-glow-2" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-12 sm:pt-24 sm:pb-16">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 sm:px-5 bg-bg-card border border-border rounded-full mb-6 sm:mb-8 animate-fade-in-up">
          <span className="text-xs sm:text-sm text-text-secondary font-medium">
            Officially supported by the Cursor team
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.15] mb-5 sm:mb-6 animate-fade-in-up">
          <span className="text-text">Where Cebu Builds</span>
          <br />
          <span className="gradient-text">with Cursor</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg lg:text-xl text-text-secondary max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed animate-fade-in-up px-1">
          A community of founders, developers, designers, and builders in Cebu
          — learning, creating, and shipping together with the world&apos;s best
          AI code editor.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 animate-fade-in-up">
          <a
            href="#events"
            className="group flex items-center justify-center gap-2 px-8 py-4 sm:py-3.5 min-h-[48px] bg-[#22c55e] text-black font-medium rounded-full hover:bg-[#4ade80] transition-all hover:gap-3 active:bg-[#16a34a]"
          >
            Explore Events
            <ArrowRight
              size={16}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </a>
          <a
            href="#get-involved"
            className="flex items-center justify-center gap-2 px-8 py-4 sm:py-3.5 min-h-[48px] bg-transparent border border-border text-text font-medium rounded-full hover:bg-bg-card hover:border-border-hover transition-colors active:bg-bg-card"
          >
            Apply to Speak
          </a>
        </div>

        {/* Stats */}
        <div className="mt-12 sm:mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-md mx-auto animate-fade-in-up">
          <div>
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-text">1</div>
            <div className="text-xs sm:text-sm text-text-muted mt-1">Event Held</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-text">100+</div>
            <div className="text-xs sm:text-sm text-text-muted mt-1">Attendees</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-text">5+</div>
            <div className="text-xs sm:text-sm text-text-muted mt-1">Upcoming Events</div>
          </div>
        </div>
      </div>
    </section>
  );
}
