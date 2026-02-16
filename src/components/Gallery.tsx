"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { X, ChevronDown, ChevronUp } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";
import { galleryImages } from "@/data/gallery";

const INITIAL_COUNT = 9;

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const closeLightbox = useCallback(() => setSelectedImage(null), []);

  useEffect(() => {
    if (!selectedImage) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeLightbox();
      }
      if (e.key === "Tab") {
        const dialog = document.querySelector("[role='dialog']");
        if (!dialog) return;
        const focusables = Array.from(
          dialog.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          )
        ).filter((el) => !el.hasAttribute("disabled"));
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage, closeLightbox]);

  const displayedImages = isExpanded
    ? galleryImages
    : galleryImages.slice(0, INITIAL_COUNT);
  const hasMore = galleryImages.length > INITIAL_COUNT;

  return (
    <section id="gallery" className="relative py-16 sm:py-24 lg:py-32 bg-bg-elevated overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-30" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
        {/* Section Header */}
        <div className="section-head">
          <p className="section-kicker mb-4">Gallery</p>
          <h2 className="section-title mb-4">
            Moments from Our Events
          </h2>
          <p className="section-description">
            A glimpse into the energy, collaboration, and creativity that
            defines our community gatherings.
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 sm:gap-4 space-y-3 sm:space-y-4">
          {displayedImages.map((image, index) => (
            <div
              key={image.id}
              className={`break-inside-avoid group cursor-pointer relative rounded-lg overflow-hidden border border-border-light hover:border-accent/30 transition-all touch-manipulation ${
                index % 3 === 0 ? "aspect-[4/5]" : index % 3 === 1 ? "aspect-[4/3]" : "aspect-square"
              }`}
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-text text-sm font-medium">
                    {image.alt}
                  </p>
                  <p className="text-text/60 text-xs mt-1">{image.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all / Show less */}
        {hasMore && (
          <div className="mt-8 sm:mt-10 text-center">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[48px] rounded-lg border border-border-light hover:border-accent/30 hover:bg-bg-card-hover text-text-secondary hover:text-text transition-all font-medium active:bg-bg-card-hover"
            >
              {isExpanded ? (
                <>
                  Show less
                  <ChevronUp size={18} />
                </>
              ) : (
                <>
                  View all {galleryImages.length} moments
                  <ChevronDown size={18} />
                </>
              )}
            </button>
          </div>
        )}
        </RevealOnScroll>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <span id="lightbox-title" className="sr-only">
            Gallery photo enlarged
          </span>
          <button
            ref={closeButtonRef}
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 -m-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-text-secondary hover:text-text transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-black/50"
            aria-label="Close lightbox (Escape)"
          >
            <X size={24} />
          </button>
          <div
            className="relative w-full max-w-4xl max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Gallery photo enlarged"
              width={1200}
              height={800}
              className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}
