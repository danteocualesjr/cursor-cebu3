"use client";

import { useState } from "react";
import { X, ChevronDown, ChevronUp } from "lucide-react";
import { galleryImages } from "@/data/gallery";

const INITIAL_COUNT = 9;

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const displayedImages = isExpanded
    ? galleryImages
    : galleryImages.slice(0, INITIAL_COUNT);
  const hasMore = galleryImages.length > INITIAL_COUNT;

  return (
    <section id="gallery" className="py-16 sm:py-24 lg:py-32 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4">
            Moments from Our Events
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
            A glimpse into the energy, collaboration, and creativity that
            defines our community gatherings.
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 sm:gap-4 space-y-3 sm:space-y-4">
          {displayedImages.map((image, index) => (
            <div
              key={image.id}
              className={`break-inside-avoid group cursor-pointer relative rounded-xl sm:rounded-2xl overflow-hidden border border-border-light hover:border-border-hover transition-all touch-manipulation ${
                index % 3 === 0 ? "aspect-[4/5]" : index % 3 === 1 ? "aspect-[4/3]" : "aspect-square"
              }`}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm font-medium">
                    {image.alt}
                  </p>
                  <p className="text-white/60 text-xs mt-1">{image.date}</p>
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
              className="inline-flex items-center justify-center gap-2 px-6 py-4 sm:py-3 min-h-[48px] rounded-full border border-border-light hover:border-border-hover hover:bg-bg-card-hover text-text-secondary hover:text-white transition-all font-medium active:bg-bg-card-hover"
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
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 -m-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-white/60 hover:text-white transition-colors"
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>
          <img
            src={selectedImage.replace("w=600&h=400", "w=1200&h=800")}
            alt="Gallery photo enlarged"
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
