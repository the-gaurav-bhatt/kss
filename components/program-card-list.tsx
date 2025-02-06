// app/programs/program-card-list.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Book, Heart, Users, Lightbulb, Brain } from "lucide-react";
import { Program } from "./types";
const iconMap = {
  Book,
  Heart,
  Users,
  Lightbulb,
  Brain,
};

// Variants for Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // Stagger the child card animations
      staggerChildren: 0.15,
      when: "beforeChildren",
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};
export function ProgramCardList({ programs }: { programs: Program[] }) {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {programs.map((program) => {
        const Icon = iconMap[program.iconName];

        return (
          <motion.div key={program.title} variants={cardVariants}>
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
    </motion.div>
  );
}
