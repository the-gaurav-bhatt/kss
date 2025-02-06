"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import * as Icons from "lucide-react";

interface CarouselSlide {
  title: string;
  description: string;
  iconName: string;
  image: string;
}

interface HeroCarouselProps {
  slides: CarouselSlide[];
}

export default function HeroCarousel({ slides }: HeroCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [currentSlide, setCurrentSlide] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentSlide(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);

    // Auto-play with debouncing
    const intervalId = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => {
      clearInterval(intervalId);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const IconComponent = (Icons as any)[slides[currentSlide].iconName];

  return (
    <div className="relative overflow-hidden">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div key={index} className="embla__slide relative min-h-[80vh]">
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  style={{ objectFit: "cover" }}
                  quality={75}
                  priority={index === 0} // Prioritize the first image
                />
                <div className="absolute inset-0 bg-black/50" />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: currentSlide === index ? 1 : 0, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8"
              >
                <div className="text-center max-w-3xl mx-auto">
                  <IconComponent className="w-8 h-8 mx-auto mb-6 text-secondary" />
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                    {slide.title}
                  </h1>
                  <p className="text-lg sm:text-xl text-white/90 mb-8">
                    {slide.description}
                  </p>
                  <button className="bg-secondary hover:bg-secondary/90 text-white font-semibold py-3 px-8 rounded-full transition-colors">
                    Learn More
                  </button>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              currentSlide === index ? "bg-secondary w-4" : "bg-white/50"
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
