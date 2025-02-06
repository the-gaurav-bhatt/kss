import { fetchProgramsData } from "@/lib/data";
import { ProgramCardList } from "@/components/program-card-list";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@/components/ui/breadcrumb";
import { ChevronRight, BookOpen, Users, Heart, Award } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const stats = [
  {
    icon: BookOpen,
    number: "5+",
    label: "Core Programs",
  },
  {
    icon: Users,
    number: "50,000+",
    label: "Lives Impacted",
  },
  {
    icon: Heart,
    number: "20+",
    label: "Years of Service",
  },
  {
    icon: Award,
    number: "15+",
    label: "Awards Received",
  },
];

export default async function ProgramsPage() {
  const programs = await fetchProgramsData();

  return (
    <>
      {/* <Navbar /> */}
      <main className="min-h-screen">
        {/* Hero Section */}
        <div className="relative h-[40vh] lg:h-[50vh] bg-primary">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/90" />
          <div className="relative container mx-auto px-4 h-full flex items-center justify-center text-center">
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Transforming Lives Through Action
              </h1>
              <p className="text-lg text-white/90">
                Our comprehensive programs address critical needs in education,
                healthcare, and community development, creating lasting positive
                change.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white py-12 -mt-16 relative z-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg text-center"
                >
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Programs Section */}
        <div className="container mx-auto px-4 py-16">
          <Breadcrumb className="mb-8">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <ChevronRight className="h-4 w-4" />
              <span className="font-medium text-foreground">Programs</span>
            </BreadcrumbItem>
          </Breadcrumb>

          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Our Programs
            </h2>
            <p className="text-lg text-gray-600">
              Each program is carefully designed to address specific community
              needs and create sustainable impact. Explore our initiatives
              below.
            </p>
          </div>

          <ProgramCardList programs={programs} />
        </div>
      </main>
      {/* <Footer /> */}
    </>
  );
}
