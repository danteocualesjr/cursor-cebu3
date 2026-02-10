# Cursor Community Cebu

The official landing page for **Cursor Community Cebu** — a community of founders, developers, designers, and builders in Cebu, Philippines, officially supported by the [Cursor](https://cursor.com) team.

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Tech Stack

- **Next.js 16** (App Router)
- **Tailwind CSS v4**
- **TypeScript**
- **Lucide React** (icons)

## Project Structure

```
src/
  app/
    layout.tsx       # Root layout, fonts, metadata
    page.tsx         # Main landing page
    globals.css      # Tailwind config + custom styles
  components/
    Navbar.tsx       # Sticky navigation with mobile menu
    Hero.tsx         # Hero section with gradient text
    Mission.tsx      # About / mission pillars
    Events.tsx       # Events with filter tabs
    Gallery.tsx      # Photo gallery with lightbox
    Speakers.tsx     # Past & upcoming speakers
    GetInvolved.tsx  # Attend / Speak / Sponsor cards
    Contact.tsx      # Contact form + social links
    Footer.tsx       # Footer with links
  data/
    events.ts        # Event data (easy to update)
    speakers.ts      # Speaker data
    gallery.ts       # Gallery image data
  lib/
    constants.ts     # Site config, social links, nav
```

## Updating Content

All content is stored in TypeScript files under `src/data/` for easy editing:

- **Events**: Edit `src/data/events.ts` to add/update events
- **Speakers**: Edit `src/data/speakers.ts` to add/update speakers
- **Gallery**: Edit `src/data/gallery.ts` to add/update photos
- **Site Config**: Edit `src/lib/constants.ts` for social links, contact email, etc.

## Deployment

This project is ready for deployment on [Vercel](https://vercel.com):

```bash
npx vercel
```

## Contact

For questions about Cursor Community Cebu, reach out to [dante@nativestack.ai](mailto:dante@nativestack.ai).

## Links

- [Cursor](https://cursor.com)
- [Discord](#) (placeholder)
- [X (Twitter)](#) (placeholder)
- [LinkedIn](#) (placeholder)
