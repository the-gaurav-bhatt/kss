// Gallery.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

interface GalleryProps {
  images: string[];
}

export default function Gallery({ images }: GalleryProps) {
  // Only show 10 images initially
  const displayedImages = images.slice(0, 10);

  // State for individual image modal
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  // State for the "View All" overlay modal
  const [isViewAllOpen, setIsViewAllOpen] = useState(false);
  // To ensure we only prefetch once on hover
  const [prefetched, setPrefetched] = useState(false);

  // Function to prefetch all images (using the browser's Image object)
  const prefetchImages = () => {
    if (!prefetched) {
      images.forEach((src) => {
        const img = new window.Image();
        img.src = src;
      });
      setPrefetched(true);
    }
  };

  return (
    <>
      {/* Gallery Grid: Always display the first 10 images */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {displayedImages.map((src, idx) => (
          <div
            key={idx}
            className="relative w-full aspect-square overflow-hidden rounded-lg cursor-pointer"
            onClick={() => setSelectedImage(src)}
          >
            <Image
              src={src}
              alt={`Gallery image ${idx + 1}`}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* "View All" Button (only show if there are more than 10 images) */}
      {images.length > 10 && (
        <div className="mt-4 text-center">
          <button
            onMouseEnter={prefetchImages}
            onClick={() => setIsViewAllOpen(true)}
            className="text-primary font-semibold underline hover:text-primary-dark transition-colors"
          >
            View All
          </button>
        </div>
      )}

      {/* Individual Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-3xl w-full mx-4">
            <Image
              src={selectedImage}
              alt="Enlarged gallery image"
              width={1200}
              height={800}
              className="rounded-lg"
            />
            <button
              className="absolute top-4 right-4 bg-white text-gray-800 rounded-full p-2 hover:bg-gray-200 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* "View All" Modal Overlay */}
      {isViewAllOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 overflow-auto"
          onClick={() => setIsViewAllOpen(false)}
        >
          <div
            className="relative bg-white p-8 rounded-lg max-w-5xl w-full mx-4 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <h3 className="text-xl font-bold mb-4">All Images</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {images.map((src, idx) => (
                <div
                  key={idx}
                  className="relative w-full aspect-square overflow-hidden rounded-lg cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Close the overlay and open the individual modal
                    setIsViewAllOpen(false);
                    setSelectedImage(src);
                  }}
                >
                  <Image
                    src={src}
                    alt={`Gallery image ${idx + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
            <button
              className="absolute top-4 right-4 bg-gray-200 text-gray-800 rounded-full p-2 hover:bg-gray-300 transition-colors"
              onClick={() => setIsViewAllOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
