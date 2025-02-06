import { Book, Heart, Users, Lightbulb, Brain } from "lucide-react";

export interface Program {
  title: string;
  description: string;
  iconName: keyof typeof iconMap;
  image: string;
  href: string;
}

const iconMap = {
  Book,
  Heart,
  Users,
  Lightbulb,
  Brain,
};
