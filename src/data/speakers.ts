export interface Speaker {
  id: string;
  name: string;
  role: string;
  company: string;
  topic: string;
  bio: string;
  image: string;
  event: string;
  status: "past" | "upcoming";
  social?: {
    x?: string;
    linkedin?: string;
    github?: string;
  };
}

export const speakers: Speaker[] = [
  {
    id: "speaker-1",
    name: "Dante Cuales",
    role: "Founder & CEO",
    company: "NativeStack",
    topic: "Building Products at Lightning Speed with Cursor",
    bio: "Community organizer and founder building at the intersection of AI and product development. Passionate about making Cursor accessible to everyone in Cebu.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    event: "Cursor Workshop: Build Anything with AI",
    status: "past",
    social: {
      x: "https://x.com/dantecuales",
      linkedin: "https://linkedin.com/in/dantecuales",
    },
  },
  {
    id: "speaker-2",
    name: "Maria Santos",
    role: "Senior Developer",
    company: "Accenture Cebu",
    topic: "Cursor Power User Workflows That 10x Your Productivity",
    bio: "Full-stack developer with 8 years of experience. Early Cursor adopter who has transformed her team's development workflow.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    event: "Cursor Workshop: Build Anything with AI",
    status: "past",
    social: {
      linkedin: "https://linkedin.com/in/mariasantos",
    },
  },
  {
    id: "speaker-3",
    name: "James Rodriguez",
    role: "CTO",
    company: "TechStartup.ph",
    topic: "Non-Technical Founders: How to Build Your MVP with Cursor",
    bio: "Former non-technical founder who learned to build with Cursor. Now helps other founders ship their ideas faster.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    event: "Cursor Workshop: Build Anything with AI",
    status: "past",
    social: {
      x: "https://x.com/jamesrodriguez",
      github: "https://github.com/jamesrodriguez",
    },
  },
  {
    id: "speaker-4",
    name: "Angela Lim",
    role: "Product Designer",
    company: "Canva",
    topic: "Designers Who Code: Using Cursor to Bridge the Gap",
    bio: "Product designer exploring the intersection of design and AI-assisted development. Advocates for designers learning to build with Cursor.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    event: "Cursor Community Meetup: Show & Tell",
    status: "upcoming",
    social: {
      linkedin: "https://linkedin.com/in/angelalim",
    },
  },
  {
    id: "speaker-5",
    name: "Miguel Garcia",
    role: "Lead Engineer",
    company: "Lexagle",
    topic: "Building Enterprise Apps with Cursor: Lessons from Production",
    bio: "Engineering lead building legal tech products. Uses Cursor daily for complex enterprise application development.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    event: "Cursor for Founders: From Idea to MVP",
    status: "upcoming",
    social: {
      github: "https://github.com/miguelgarcia",
      linkedin: "https://linkedin.com/in/miguelgarcia",
    },
  },
  {
    id: "speaker-6",
    name: "Sofia Reyes",
    role: "Indie Hacker",
    company: "Self-employed",
    topic: "From Zero to SaaS: Shipping a Product Every Month with Cursor",
    bio: "Solo founder who ships fast. Has launched 6 SaaS products in 6 months using Cursor as her primary development tool.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
    event: "Cursor Hackathon: Ship in 24 Hours",
    status: "upcoming",
    social: {
      x: "https://x.com/sofiareyes",
      github: "https://github.com/sofiareyes",
    },
  },
];
