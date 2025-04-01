'use client'
import Image from "next/image";
import Link from "next/link";
import { Book, Heart, Users, Lightbulb, Brain } from "lucide-react";
import { Program } from "./types";
import { motion, useInView } from "framer-motion"; // Import useInView
import { useRef } from "react";

const iconMap = {
  Book,
  Heart,
  Users,
  Lightbulb,
  Brain,
};

const cardVariants = {
    fadeScale: {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeInOut" } },
        exit: { opacity: 0, scale: 0.9, transition: { duration: 0.3, ease: "easeInOut" } }
    },
    slideFade: {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
        exit: { opacity: 0, y: 20, transition: { duration: 0.3, ease: "easeInOut" } }
    },
    flip3D: {  // More complex, might need adjustment
        hidden: { opacity: 0, rotateY: -90 },
        visible: { opacity: 1, rotateY: 0, transition: { duration: 0.6, ease: "easeInOut" } },
        exit: { opacity: 0, rotateY: 90, transition: { duration: 0.4, ease: "easeInOut" } }
    },
     bounceFade: {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 260,
                damping: 20,
              duration: 0.5
            }
        },
        exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } }
    }
};

type AnimationType = "fadeScale" | "slideFade" | "flip3D" | "bounceFade";

interface ProgramCardListProps {
    programs: Program[];
    animation?: AnimationType;
}
export function ProgramCardList({ programs, animation = "fadeScale" }: ProgramCardListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
      {programs.map((program) => {
        const Icon = iconMap[program.iconName];
        const ref = useRef(null);
        const isInView = useInView(ref, { once: false, amount: 0.1 }); // Key change: useInView for each card

        return (
          <motion.div
            key={program.title}
            ref={ref} // Attach the ref to each card
            initial="hidden"
            animate={isInView ? "visible" : "exit"} // Animate based on inView state
            variants={cardVariants[animation]}
            className="will-change-transform"
          >
            <Link
              href={program.href}
              aria-label={`Read more about ${program.title}`}
              className="relative h-64 rounded-2xl shadow-lg overflow-hidden group block"
            >
              <div className="relative w-full h-full">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center space-x-3 mb-2">
                  <Icon className="w-6 h-6 text-secondary" />
                  <h3 className="text-xl font-bold text-white">
                    {program.title}
                  </h3>
                </div>
                <p className="text-white/90">{program.description}</p>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
