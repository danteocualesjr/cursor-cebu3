import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cursor Community Cebu — Where Cebu Builds with Cursor",
  description:
    "The official Cursor community in Cebu, Philippines. Join workshops, hackathons, meetups, and Cafe Cursor events. Learn, build, and collaborate with founders, developers, designers, and Cursor power users.",
  keywords: [
    "Cursor",
    "Cebu",
    "community",
    "AI coding",
    "workshops",
    "hackathons",
    "meetups",
  ],
  openGraph: {
    title: "Cursor Community Cebu",
    description:
      "Where Cebu builds with Cursor. Join our workshops, hackathons, meetups, and more.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-bg text-text`}
      >
        {children}
      </body>
    </html>
  );
}
