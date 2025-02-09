"use client";
import { ProgramCardList } from "./program-card-list"; // a client component
import { Program } from "./types"; // an interface (optional)
import { useInView } from "framer-motion";
import { useRef } from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";

const MotionSection = m.section;

const animationVariants = {
  fadeScale: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: "easeInOut",
        staggerChildren: 0.1,
        delayChildren: 0.2
      } 
    },
    exit: { 
      opacity: 0, 
      scale: 0.95,
      transition: { 
        duration: 0.6 
      } 
    }
  },
  slideFade: {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeInOut",
        staggerChildren: 0.1,
        delayChildren: 0.2
      } 
    },
    exit: { 
      opacity: 0, 
      y: -50,
      transition: { 
        duration: 0.6 
      } 
    }
  },
  flip3D: {
    hidden: { opacity: 0, rotateX: -90 },
    visible: { 
      opacity: 1, 
      rotateX: 0,
      transition: { 
        duration: 0.8,
        ease: "easeInOut",
        staggerChildren: 0.1,
        delayChildren: 0.2
      } 
    },
    exit: { 
      opacity: 0, 
      rotateX: 90,
      transition: { 
        duration: 0.6 
      } 
    }
  }
};

interface ProgramsSectionProps {
  programs: Program[];
  animation?: "fadeScale" | "slideFade" | "flip3D";
}

export default function ProgramsSection({ 
  programs,
  animation = "fadeScale"
}: ProgramsSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  return (
    <LazyMotion features={domAnimation}>
      <MotionSection
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "exit"}
        variants={animationVariants[animation]}
        className="py-20 bg-gradient-to-b from-white to-primary/5 will-change-transform"
      >
        <div className="container mx-auto px-4">
          <m.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}
          >
            <h2 className="text-4xl font-bold text-primary mb-4 text-center">
              Our Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center">
              Transforming lives through comprehensive programs focused on
              education, healthcare, and community development.
            </p>
          </m.div>
          <m.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}
          >
            <ProgramCardList programs={programs} />
          </m.div>
        </div>
      </MotionSection>
    </LazyMotion>
  );
}
