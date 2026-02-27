import { ArrowRight, Calendar, Sparkles, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-bg dot-grid" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full blur-[120px] hero-bg-glow animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] hero-bg-glow-2 animate-glow-drift" />
      <div className="absolute top-1/3 right-1/3 w-[300px] h-[300px] rounded-full blur-[90px] hero-bg-glow-3 animate-glow-pulse-slow" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="hero-particle hero-particle-1" />
        <div className="hero-particle hero-particle-2" />
        <div className="hero-particle hero-particle-3" />
        <div className="hero-particle hero-particle-4" />
        <div className="hero-particle hero-particle-5" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-12 sm:pt-24 sm:pb-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 surface-card rounded-md mb-6 sm:mb-8 animate-fade-in-up animate-delay-0">
          <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
          <span className="text-xs sm:text-sm text-text-secondary font-medium tracking-wide">
            Officially supported by Cursor
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tight-heading leading-[1.1] mb-5 sm:mb-6 animate-fade-in-up animate-delay-100">
          <span className="text-text">Where Cebu Builds</span>
          <br />
          <span className="gradient-text">with Cursor</span>
        </h1>

        {/* Subtitle with inline stats */}
        <p className="text-base sm:text-lg lg:text-xl text-text-secondary max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed animate-fade-in-up animate-delay-200 px-1">
          A community of founders, developers, designers, and builders in Cebu
          — <span className="font-semibold text-text">1</span> event behind us, <span className="font-semibold text-text">5+</span> coming. Learning, creating, and shipping together with the world&apos;s best AI code editor.
        </p>

        {/* Upcoming Event Banner */}
        <a
          href="https://luma.com/rphafsri"
          target="_blank"
          rel="noopener noreferrer"
          className="event-banner-link block max-w-lg mx-auto mb-8 sm:mb-10 animate-fade-in-up animate-delay-250"
        >
          <div className="event-banner group">
            <div className="event-banner-glow" />
            <div className="event-banner-shimmer" />
            <div className="relative z-10 flex items-center gap-4 sm:gap-5">
              <div className="shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-accent/30 to-accent/10 border border-accent/20 flex flex-col items-center justify-center">
                <span className="text-[10px] uppercase tracking-wider text-accent/80 font-medium leading-none">Feb</span>
                <span className="text-accent font-bold text-xl sm:text-2xl leading-none mt-0.5">28</span>
              </div>
              <div className="flex-1 min-w-0 text-left">
                <div className="flex items-center gap-2 mb-1">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-accent/15 text-[11px] font-semibold text-accent uppercase tracking-wider">
                    <Zap size={10} className="fill-accent" />
                    Next Event
                  </span>
                </div>
                <p className="text-lg sm:text-xl font-bold text-text group-hover:text-accent transition-colors duration-300">
                  Cursor Workshop Cebu
                </p>
                <div className="flex items-center gap-3 mt-1.5 text-sm text-text-secondary">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} className="text-text-muted" />
                    Feb 28, 2026
                  </span>
                  <span className="text-text-faint">·</span>
                  <span>Zoom</span>
                  <span className="text-text-faint">·</span>
                  <span className="text-accent/80 font-medium">Free</span>
                </div>
              </div>
              <div className="shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                <ArrowRight
                  size={16}
                  className="text-accent group-hover:translate-x-0.5 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </a>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 animate-fade-in-up animate-delay-300">
          <a
            href="https://luma.com/rphafsri"
            target="_blank"
            rel="noopener noreferrer"
            className="group btn-primary btn-glow"
          >
            <Sparkles size={16} className="opacity-80" />
            Register for Workshop
            <ArrowRight
              size={16}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </a>
          <a
            href="#events"
            className="btn-secondary"
          >
            Explore All Events
          </a>
        </div>
      </div>
    </section>
  );
}
