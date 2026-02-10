"use client";

import { useState } from "react";
import { Building2, MapPin, Briefcase, ArrowRight } from "lucide-react";
import {
  opportunities,
  OPPORTUNITY_TYPE_LABELS,
  WORK_MODE_LABELS,
  type JobOpportunity,
  type OpportunityType,
  type WorkMode,
} from "@/data/opportunities";

const typeFilters: { label: string; value: OpportunityType | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Full-time", value: "full-time" },
  { label: "Part-time", value: "part-time" },
  { label: "Contract", value: "contract" },
  { label: "Internship", value: "internship" },
];

const workModeFilters: { label: string; value: WorkMode | "all" }[] = [
  { label: "All Locations", value: "all" },
  { label: "Remote", value: "remote" },
  { label: "Hybrid", value: "hybrid" },
  { label: "On-site", value: "onsite" },
];

function OpportunityCard({ job }: { job: JobOpportunity }) {
  return (
    <div className="group bg-bg-card rounded-2xl border border-border-light overflow-hidden hover:border-border-hover hover:bg-bg-card-hover transition-all">
      <div className="p-5 sm:p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-[#22c55e]/15 text-[#22c55e]">
            {OPPORTUNITY_TYPE_LABELS[job.type]}
          </span>
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-text-secondary">
            {WORK_MODE_LABELS[job.workMode]}
          </span>
        </div>

        <h3 className="text-lg font-semibold text-text mb-2 group-hover:text-accent-hover transition-colors">
          {job.title}
        </h3>
        <p className="text-sm text-text-muted flex items-center gap-2 mb-3">
          <Building2 size={14} className="shrink-0" />
          {job.company}
        </p>
        <p className="text-sm text-text-secondary leading-relaxed mb-4 line-clamp-2">
          {job.description}
        </p>

        <div className="flex items-center gap-2 text-sm text-text-muted mb-4">
          <MapPin size={14} className="shrink-0" />
          <span>{job.location}</span>
        </div>

        <a
          href={job.applyUrl}
          target={job.applyUrl.startsWith("http") ? "_blank" : undefined}
          rel={job.applyUrl.startsWith("http") ? "noopener noreferrer" : undefined}
          className="inline-flex items-center gap-2 py-2 text-sm font-medium text-text hover:text-accent-hover transition-colors group/link min-h-[44px]"
        >
          Apply Now
          <ArrowRight
            size={14}
            className="group-hover/link:translate-x-0.5 transition-transform"
          />
        </a>
      </div>
    </div>
  );
}

export default function Opportunities() {
  const [typeFilter, setTypeFilter] = useState<OpportunityType | "all">("all");
  const [workModeFilter, setWorkModeFilter] = useState<WorkMode | "all">("all");

  const filteredOpportunities = opportunities.filter((job) => {
    const typeMatch = typeFilter === "all" || job.type === typeFilter;
    const workModeMatch = workModeFilter === "all" || job.workMode === workModeFilter;
    return typeMatch && workModeMatch;
  });

  return (
    <section id="opportunities" className="py-16 sm:py-24 lg:py-32 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text tracking-tight mb-4">
            Opportunities
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
            Job openings from Cursor and partner companies. Find your next role
            in the Cebu tech community — remote, hybrid, or on-site.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-col gap-4 mb-10 sm:mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            <span className="sr-only">Filter by type:</span>
            {typeFilters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setTypeFilter(filter.value)}
                className={`px-4 py-3 min-h-[44px] text-sm font-medium rounded-full transition-colors ${
                  typeFilter === filter.value
                    ? "bg-[#22c55e] text-black"
                    : "bg-bg-card text-text-secondary border border-border-light hover:text-text hover:border-border-hover"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            <span className="sr-only">Filter by work mode:</span>
            {workModeFilters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setWorkModeFilter(filter.value)}
                className={`px-4 py-3 min-h-[44px] text-sm font-medium rounded-full transition-colors ${
                  workModeFilter === filter.value
                    ? "bg-[#22c55e] text-black"
                    : "bg-bg-card text-text-secondary border border-border-light hover:text-text hover:border-border-hover"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Opportunity Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredOpportunities.map((job) => (
            <OpportunityCard key={job.id} job={job} />
          ))}
        </div>

        {/* Empty State */}
        {filteredOpportunities.length === 0 && (
          <div className="text-center py-16">
            <Briefcase size={48} className="mx-auto text-text-muted mb-4" />
            <p className="text-text-muted">
              No opportunities match this filter. Check back soon!
            </p>
          </div>
        )}

        {/* Post a Job CTA */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 bg-bg-card rounded-2xl text-center border border-border-light">
          <h3 className="text-xl font-semibold text-text mb-2">
            Hiring? Post your opportunity
          </h3>
          <p className="text-text-secondary max-w-xl mx-auto mb-6 text-sm leading-relaxed">
            Have a job opening at Cursor or another company? Reach out and we
            can add it to the board for the community.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[48px] bg-bg-elevated text-text font-medium rounded-full border border-border-light hover:border-border-hover hover:bg-bg-card-hover transition-colors"
          >
            Get in Touch
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
