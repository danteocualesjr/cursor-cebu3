export type EventType = "workshop" | "cafe" | "hackathon" | "meetup";
export type EventStatus = "past" | "upcoming";

export interface CommunityEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: EventType;
  status: EventStatus;
  image: string;
  capacity?: number;
  registrationUrl?: string;
}

export const EVENT_TYPE_LABELS: Record<EventType, string> = {
  workshop: "Workshop",
  cafe: "Cafe Cursor",
  hackathon: "Hackathon",
  meetup: "Meetup",
};

export const events: CommunityEvent[] = [
  {
    id: "cursor-workshop-cebu-feb-2026",
    title: "Cursor Workshop Cebu",
    description:
      "A beginner-friendly, hands-on introduction to Cursor. Learn what Cursor is, set it up properly, use it effectively, and build a simple web app live. No prior coding experience required.",
    date: "February 28, 2026",
    time: "Online (Zoom link sent after registration)",
    location: "Zoom",
    type: "workshop",
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop",
    capacity: 132,
    registrationUrl: "https://luma.com/rphafsri",
  },
  {
    id: "cursor-workshop-jan-2025",
    title: "Cursor Workshop: Build Anything with AI",
    description:
      "Our inaugural community event featured hands-on workshops on using Cursor, sessions on building with Cursor for non-technical users, and talks from Cursor power users sharing their best practices, projects, and workflows.",
    date: "January 17, 2025",
    time: "1:00 PM - 6:00 PM",
    location: "Cebu City, Philippines",
    type: "workshop",
    status: "past",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop",
  },
  {
    id: "cafe-cursor-mar-2026",
    title: "Cafe Cursor: Coffee & Code",
    description:
      "A relaxed afternoon of coding with Cursor over great coffee. Bring your laptop, bring your project, and build alongside fellow Cursor enthusiasts. Whether you're debugging or dreaming up something new — all levels welcome.",
    date: "March 15, 2026",
    time: "2:00 PM - 5:00 PM",
    location: "The Good Cup, IT Park, Cebu City",
    type: "cafe",
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&h=500&fit=crop",
    capacity: 30,
    registrationUrl: "#get-involved",
  },
  {
    id: "hackathon-apr-2026",
    title: "Cursor Hackathon: Ship in 24 Hours",
    description:
      "A 24-hour hackathon where teams build real products using Cursor. From idea to deployment — compete for prizes, learn from mentors, and push the boundaries of what you can build with AI-assisted development.",
    date: "April 26-27, 2026",
    time: "9:00 AM Day 1 - 9:00 AM Day 2",
    location: "The Company, Cebu Business Park",
    type: "hackathon",
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=500&fit=crop",
    capacity: 100,
    registrationUrl: "#get-involved",
  },
  {
    id: "meetup-may-2026",
    title: "Cursor Community Meetup: Show & Tell",
    description:
      "An evening of demos and lightning talks. Community members showcase what they've built with Cursor — side projects, startup MVPs, automations, and creative experiments. Followed by networking and pizza.",
    date: "May 10, 2026",
    time: "6:00 PM - 9:00 PM",
    location: "Lamac Park, Cebu City",
    type: "meetup",
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=500&fit=crop",
    capacity: 60,
    registrationUrl: "#get-involved",
  },
  {
    id: "workshop-jun-2026",
    title: "Cursor for Founders: From Idea to MVP",
    description:
      "A hands-on workshop designed for non-technical founders and aspiring builders. Learn how to leverage Cursor's AI capabilities to prototype, iterate, and ship your product — no prior coding experience required.",
    date: "June 14, 2026",
    time: "10:00 AM - 4:00 PM",
    location: "QA Cebu, IT Park",
    type: "workshop",
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=500&fit=crop",
    capacity: 40,
    registrationUrl: "#get-involved",
  },
  {
    id: "cafe-cursor-jul-2026",
    title: "Cafe Cursor: Weekend Build Session",
    description:
      "Our monthly casual co-working session returns. Grab a coffee, open Cursor, and build alongside the community. Mentors on hand to help with questions. Perfect for starting that project you've been putting off.",
    date: "July 12, 2026",
    time: "1:00 PM - 5:00 PM",
    location: "Bo's Coffee, Ayala Center Cebu",
    type: "cafe",
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800&h=500&fit=crop",
    capacity: 25,
    registrationUrl: "#get-involved",
  },
];
