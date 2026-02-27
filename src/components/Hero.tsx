import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-bg dot-grid" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full blur-[120px] hero-bg-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] hero-bg-glow-2" />

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
          className="block max-w-md mx-auto mb-6 sm:mb-8 animate-fade-in-up animate-delay-250"
        >
          <div className="surface-card rounded-lg p-4 sm:p-5 border border-border-light/50 hover:border-accent/50 transition-colors group">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="shrink-0 w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                <span className="text-accent font-bold text-sm">28</span>
              </div>
              <div className="flex-1 min-w-0 text-left">
                <p className="text-xs font-medium text-accent mb-0.5">Feb 28, 2026</p>
                <p className="text-base font-semibold text-text group-hover:text-accent transition-colors">
                  Cursor Workshop Cebu
                </p>
                <p className="text-sm text-text-secondary mt-1">
                  Beginner-friendly intro to Cursor · Zoom · Register free
                </p>
              </div>
              <ArrowRight
                size={18}
                className="shrink-0 text-text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-all"
              />
            </div>
          </div>
        </a>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 animate-fade-in-up animate-delay-300">
          <a
            href="https://luma.com/rphafsri"
            target="_blank"
            rel="noopener noreferrer"
            className="group btn-primary"
          >
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
