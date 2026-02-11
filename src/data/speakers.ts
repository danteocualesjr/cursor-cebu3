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
    name: "Neilson Navarrete",
    role: "Industrial Designer",
    company: "Xerox–Lexmark",
    topic: "Design and Development with AI Tools",
    bio: "Industrial designer bringing design thinking to AI-assisted development workflows.",
    image: "/speakers/neilson-navarrete.png",
    event: "Cursor Workshop: Build Anything with AI",
    status: "past",
  },
  {
    id: "speaker-2",
    name: "Marnelle Apat",
    role: "Full-Stack Laravel Web Dev",
    company: "Independent",
    topic: "Building Full-Stack Applications with Cursor",
    bio: "Full-stack developer specializing in Laravel and modern web development with AI assistance.",
    image: "/speakers/marnelle-apat.png",
    event: "Cursor Workshop: Build Anything with AI",
    status: "past",
  },
  {
    id: "speaker-3",
    name: "Jhon Cabalejo",
    role: "Software Engineer",
    company: "Full Scale",
    topic: "Shipping Production Code with Cursor",
    bio: "Software engineer building scalable solutions with AI-powered development tools.",
    image: "/speakers/jhon-cabalejo.png",
    event: "Cursor Workshop: Build Anything with AI",
    status: "past",
  },
  {
    id: "speaker-4",
    name: "Dante O. Cuales, Jr.",
    role: "Founder",
    company: "NativeStack AI",
    topic: "Building Products at Lightning Speed with Cursor",
    bio: "Community organizer and founder building at the intersection of AI and product development. Passionate about making Cursor accessible to everyone in Cebu.",
    image: "/speakers/dante-cuales.png",
    event: "Cursor Workshop: Build Anything with AI",
    status: "past",
    social: {
      x: "https://x.com/dantecuales",
      linkedin: "https://linkedin.com/in/dantecuales",
    },
  },
  {
    id: "speaker-5",
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
    id: "speaker-6",
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
    id: "speaker-7",
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
