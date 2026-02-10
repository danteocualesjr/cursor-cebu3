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
    id: "cursor-eng-2025",
    title: "Software Engineer",
    company: "Cursor",
    description:
      "Join Cursor and help build the future of AI-assisted development. We're looking for engineers passionate about developer tools and AI who want to shape how millions of developers write code.",
    type: "full-time",
    workMode: "remote",
    location: "Remote",
    applyUrl: "https://cursor.com/careers",
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
  {
    id: "startup-frontend-2025",
    title: "Frontend Developer",
    company: "Tech Startup Cebu",
    description:
      "Join an early-stage startup building developer tools. You'll work with React, TypeScript, and Cursor in a fast-paced, remote-first environment.",
    type: "full-time",
    workMode: "remote",
    location: "Remote (Philippines)",
    applyUrl: "#contact",
    postedAt: "2025-02-08",
  },
  {
    id: "intern-cursor-community-2025",
    title: "Community Intern",
    company: "Cursor Community Cebu",
    description:
      "Help organize events, engage with the community, and grow the Cursor Community Cebu. Great for students or recent grads who want to learn and connect.",
    type: "internship",
    workMode: "hybrid",
    location: "Cebu City",
    applyUrl: "#contact",
    postedAt: "2025-02-10",
  },
];
