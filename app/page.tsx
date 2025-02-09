// "use client";

// import { motion } from "framer-motion";
import { Heart, Stethoscope } from "lucide-react";
import Navbar from "@/components/navbar";
// import HeroCarousel from "@/components/hero-carousel";
// import ImpactSection from "@/components/impact-section";
// import ProgramsSection from "@/components/programs-section";
// import EventsSection from "@/components/events-section";
import Footer from "@/components/footer";
import ProgramsPage from "@/components/program-page";
import dynamic from 'next/dynamic';
import ImpactSectionSkeleton from "@/components/impact-section-skeleton";
import ProgramsSectionSkeleton from "@/components/programs-section-skeleton";
import EventsSectionSkeleton from "@/components/events-section-skeleton";
import HeroCarouselSkeleton from "@/components/hero-carousel-skeleton";

const HeroCarousel = dynamic(() => import('@/components/hero-carousel'), {
  loading: () => <HeroCarouselSkeleton />,
  ssr: true,
});

const ImpactSection = dynamic(() => import('@/components/impact-section'), {
  loading: () => <ImpactSectionSkeleton />,
  ssr: true,
});

const ProgramsSection = dynamic(() => import('@/components/programs-section'), {
  loading: () => <ProgramsSectionSkeleton />,
  ssr: true,
});

const EventsSection = dynamic(() => import('@/components/events-section'), {
  loading: () => <EventsSectionSkeleton />,
  ssr: true,
});
// Move this to a separate data file, e.g., lib/data.ts
const carouselData = [
  {
    title: "Education",
    description:
      "Empowering children through quality education and after-school programs",
    iconName: "Heart", // Changed from component to string
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80",
  },
  {
    title: "Healthcare",
    description: "Providing accessible healthcare services to slum communities",
    iconName: "Heart",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80",
  },
  {
    title: "Women Empowerment",
    description:
      "Supporting women with skills training and entrepreneurship opportunities",
    iconName: "Stethoscope",
    image:
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&q=80",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroCarousel slides={carouselData} />
      <ImpactSection />
      <ProgramsPage />
      <EventsSection />
      <Footer />
    </main>
  );
}
