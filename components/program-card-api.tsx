// app/programs/api.ts
import { Book, Heart, Users, Lightbulb, Brain } from "lucide-react";

// Mock data
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

const programsData: Program[] = [
  {
    title: "Vidhya Bhagya",
    description:
      "Ensuring quality education for underprivileged children through scholarships and support",
    iconName: "Book",
    image:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80",
    href: "/programs/vidhya-bhagya",
  },
  {
    title: "Bala Sangama",
    description:
      "Holistic child development program combining academics with extracurricular activities",
    iconName: "Brain",
    image:
      "https://images.unsplash.com/photo-1602975299039-0b56b7c1a537?auto=format&fit=crop&q=80",
    href: "/programs/bala-sangama",
  },
  {
    title: "Arogya Bhagya",
    description:
      "Comprehensive healthcare services including medical camps and wellness programs",
    iconName: "Heart",
    image:
      "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&q=80",
    href: "/programs/arogya-bhagya",
  },
  {
    title: "Swavalambana",
    description:
      "Women empowerment through vocational training and entrepreneurship support",
    iconName: "Users",
    image:
      "https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?auto=format&fit=crop&q=80",
    href: "/programs/swavalambana",
  },
  {
    title: "Vidhya Vahini",
    description:
      "Mobile library and educational resource center bringing knowledge to communities",
    iconName: "Lightbulb",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80",
    href: "/programs/vidhya-vahini",
  },
];

// Simulates fetching data from a database or external API
export async function fetchProgramsData(): Promise<Program[]> {
  // You can add actual fetch/DB logic here if needed
  return new Promise((resolve) => {

      resolve(programsData);

  });
}
