import { Book, Heart, Users, Lightbulb, Brain } from "lucide-react";

export interface Program {
  title: string;
  description: string;
  iconName: keyof typeof iconMap;
  image: string;
  href: string;
  slug: string;
  objectives: string[];
  impact: string[];
  galleryImages?: string[]; // Add this line
}

const iconMap = {
  Book,
  Heart,
  Users,
  Lightbulb,
  Brain,
};

export const programs: Program[] = [
  {
    title: "Vidhya Bhagya",
    description:
      "Ensuring quality education for underprivileged children through scholarships and support",
    iconName: "Book",
    image:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80",
    href: "/programs/vidhya-bhagya",
    slug: "vidhya-bhagya",
    objectives: [
      "Provide scholarships to deserving students from underprivileged backgrounds",
      "Support students with educational materials and resources",
      "Offer mentoring and guidance for academic excellence",
      "Create a conducive learning environment for all students",
    ],
    impact: [
      "Over 1000 students supported through scholarships",
      "90% of supported students showing improved academic performance",
      "100+ students placed in higher education institutions",
      "Reduced dropout rates in partner schools by 60%",
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1522661067900-ab829854a57f?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1522661067900-ab829854a57f?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1522661067900-ab829854a57f?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1522661067900-ab829854a57f?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1522661067900-ab829854a57f?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80",
    ],
  },
  {
    title: "Swavalambana",
    description:
      "Women empowerment through vocational training and entrepreneurship support",
    iconName: "Users",
    image:
      "https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?auto=format&fit=crop&q=80",
    href: "/programs/swavalambana",
    slug: "swavalambana",
    objectives: [
      "Provide vocational training to women from underprivileged communities",
      "Support women entrepreneurs with business guidance and resources",
      "Create sustainable livelihood opportunities",
      "Build a supportive network for women entrepreneurs",
    ],
    impact: [
      "500+ women trained in various vocational skills",
      "200+ successful women entrepreneurs created",
      "Average income increase of 150% among participants",
      "Created 1000+ indirect employment opportunities",
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&q=80",
    ],
  },
  {
    title: "Vidhya Vahini",
    description:
      "Mobile library and educational resource center bringing knowledge to communities",
    iconName: "Lightbulb",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80",
    href: "/programs/vidhya-vahini",
    slug: "vidhya-vahini",
    objectives: [
      "Bring educational resources to remote communities",
      "Promote reading habits among children",
      "Provide access to digital learning resources",
      "Conduct educational workshops and activities",
    ],
    impact: [
      "Reached 50+ remote communities",
      "10,000+ books distributed",
      "5000+ children benefited from mobile library",
      "Conducted 200+ educational workshops",
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1526721940322-10fb6e3ae94a?auto=format&fit=crop&q=80",
    ],
  },
];

export async function fetchProgramsData(): Promise<Program[]> {
  return programs;
}

export async function fetchProgramBySlug(
  slug: string
): Promise<Program | undefined> {
  return programs.find((program) => program.slug === slug);
}
