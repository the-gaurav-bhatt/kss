import { Book, Heart, Users, Lightbulb, Brain } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// 1. Map your icon strings to actual Lucide icons.
const iconMap = {
  Book,
  Heart,
  Users,
  Lightbulb,
  Brain,
};

type IconName = "Book" | "Brain" | "Heart" | "Users" | "Lightbulb";

// 2. Define a type for your program data.
interface Program {
  title: string;
  description: string;
  iconName: IconName;
  image: string;
  href: string;
}
export default function ProgramCard({ program }: { program: Program }) {
  const Icon = iconMap[program.iconName];

  return (
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
          <h3 className="text-xl font-bold text-white">{program.title}</h3>
        </div>
        <p className="text-white/90">{program.description}</p>
      </div>
    </Link>
  );
}
