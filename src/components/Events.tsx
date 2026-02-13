"use client";

import { useState } from "react";
import Image from "next/image";
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";
import {
  events,
  EVENT_TYPE_LABELS,
  type EventType,
  type CommunityEvent,
} from "@/data/events";

const filters: { label: string; value: EventType | "all" }[] = [
  { label: "All Events", value: "all" },
  { label: "Workshops", value: "workshop" },
  { label: "Cafe Cursor", value: "cafe" },
  { label: "Hackathons", value: "hackathon" },
  { label: "Meetups", value: "meetup" },
];

function EventCard({ event }: { event: CommunityEvent }) {
  const badgeClass = `badge-${event.type}`;

  return (
    <div className="group surface-card rounded-lg overflow-hidden">
      {/* Image */}
      <div className="relative h-40 sm:h-48 overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent" />
        <div className="absolute top-3 left-3 flex gap-2">
          <span
            className={`px-2.5 py-1 text-xs font-medium rounded-md ${badgeClass}`}
          >
            {EVENT_TYPE_LABELS[event.type]}
          </span>
          <span
            className={`px-2.5 py-1 text-xs font-medium rounded-md ${
              event.status === "upcoming"
                ? "bg-accent text-black"
                : "bg-black/30 text-text-secondary border border-border-light/80 backdrop-blur-sm"
            }`}
          >
            {event.status === "upcoming" ? "Upcoming" : "Past"}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        <h3 className="text-lg font-semibold text-text mb-2 group-hover:text-accent-hover transition-colors">
          {event.title}
        </h3>
        <p className="text-sm text-text-secondary leading-relaxed mb-4 line-clamp-2">
          {event.description}
        </p>

        {/* Meta */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-text-muted">
            <Calendar size={14} className="shrink-0" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-text-muted">
            <Clock size={14} className="shrink-0" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-text-muted">
            <MapPin size={14} className="shrink-0" />
            <span>{event.location}</span>
          </div>
          {event.capacity && (
            <div className="flex items-center gap-2 text-sm text-text-muted">
              <Users size={14} className="shrink-0" />
              <span>{event.capacity} spots</span>
            </div>
          )}
        </div>

        {/* CTA */}
        {event.status === "upcoming" && event.registrationUrl && (
          <a
            href={event.registrationUrl}
            className="btn-tertiary group/link"
          >
            Register Now
            <ArrowRight
              size={14}
              className="group-hover/link:translate-x-0.5 transition-transform"
            />
          </a>
        )}
      </div>
    </div>
  );
}

export default function Events() {
  const [activeFilter, setActiveFilter] = useState<EventType | "all">("all");

  const filteredEvents =
    activeFilter === "all"
      ? events
      : events.filter((e) => e.type === activeFilter);

  // Sort: upcoming first, then past
  const sortedEvents = [...filteredEvents].sort((a, b) => {
    if (a.status === "upcoming" && b.status === "past") return -1;
    if (a.status === "past" && b.status === "upcoming") return 1;
    return 0;
  });

  return (
    <section id="events" className="relative py-16 sm:py-24 lg:py-32 bg-bg-elevated overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-30" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
        {/* Section Header */}
        <div className="section-head">
          <p className="section-kicker mb-4">What&apos;s Happening</p>
          <h2 className="section-title mb-4">
            Events
          </h2>
          <p className="section-description">
            From casual coffee-and-code sessions to intense hackathons — there&apos;s
            always something happening in the Cursor Community Cebu.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 sm:mb-12">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`chip-filter ${
                activeFilter === filter.value
                  ? "chip-filter is-active"
                  : ""
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Event Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {sortedEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {/* Empty State */}
        {sortedEvents.length === 0 && (
          <div className="text-center py-16">
            <p className="text-text-muted">
              No events found for this category. Check back soon!
            </p>
          </div>
        )}
        </RevealOnScroll>
      </div>
    </section>
  );
}
