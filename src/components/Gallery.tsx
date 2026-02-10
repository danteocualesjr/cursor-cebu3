"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { galleryImages } from "@/data/gallery";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Moments from Our Events
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            A glimpse into the energy, collaboration, and creativity that
            defines our community gatherings.
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`break-inside-avoid group cursor-pointer relative rounded-2xl overflow-hidden border border-border-light hover:border-border-hover transition-all ${
                index % 3 === 0 ? "aspect-[4/5]" : index % 3 === 1 ? "aspect-[4/3]" : "aspect-square"
              }`}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
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
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
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
