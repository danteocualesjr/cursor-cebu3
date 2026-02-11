export type OpportunityType = "full-time" | "part-time" | "contract" | "internship";
export type WorkMode = "remote" | "hybrid" | "onsite";

export interface JobOpportunity {
  id: string;
  title: string;
  company: string;
  description: string;
  type: OpportunityType;
  workMode: WorkMode;
  location: string;
  applyUrl: string;
  postedAt?: string;
}

export const OPPORTUNITY_TYPE_LABELS: Record<OpportunityType, string> = {
  "full-time": "Full-time",
  "part-time": "Part-time",
  contract: "Contract",
  internship: "Internship",
};

export const WORK_MODE_LABELS: Record<WorkMode, string> = {
  remote: "Remote",
  hybrid: "Hybrid",
  onsite: "On-site",
};

export const opportunities: JobOpportunity[] = [
  {
    id: "billing-support-associate-2025",
    title: "Billing Support Associate",
    company: "Cursor Philippines",
    description:
      "Handle billing, payments, and subscriptions. Explain usage-based pricing clearly to customers via email and chat. Remote role.",
    type: "full-time",
    workMode: "remote",
    location: "Work from Home",
    applyUrl: "https://ph.indeed.com/job/billing-support-associate-7625fd9668269188",
    postedAt: "2025-02-01",
  },
  {
    id: "cursor-ai-researcher-2025",
    title: "AI Research Engineer",
    company: "Cursor",
    description:
      "Work on cutting-edge AI models and systems that power Cursor. We're seeking researchers and engineers to push the boundaries of code generation and understanding.",
    type: "full-time",
    workMode: "remote",
    location: "Remote",
    applyUrl: "https://cursor.com/careers",
    postedAt: "2025-02-01",
  },
  {
    id: "native-stack-dev-2025",
    title: "Full-Stack Developer",
    company: "NativeStack",
    description:
      "Build scalable web and mobile applications with modern stacks. We're a Cebu-based studio looking for developers who love shipping products and working with Cursor.",
    type: "full-time",
    workMode: "hybrid",
    location: "Cebu City",
    applyUrl: "mailto:dante@nativestack.ai",
    postedAt: "2025-02-05",
  },
];
