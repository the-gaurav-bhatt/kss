// ProgramPage.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import { fetchProgramBySlug } from "@/lib/data";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@/components/ui/breadcrumb";
import { ChevronRight, Target, Trophy, Users, Calendar } from "lucide-react";
import dynamic from "next/dynamic";

// Dynamically load our client-side Gallery component
const Gallery = dynamic(() => import("./gallery"), { ssr: false });

export default async function ProgramPage({
  params,
}: {
  params: { slug: string };
}) {
  const program = await fetchProgramBySlug(params.slug);
  if (!program) {
    notFound();
  }

  return (
    <>
      <main className="min-h-screen bg-gray-50">
        {/* Modern Hero Section */}
        <div className="relative h-[55vh] lg:h-[65vh]">
          <Image
            src={program.image}
            alt={program.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-4">
                  {program.title}
                </h1>
                <p className="text-xl text-gray-200 drop-shadow-md">
                  {program.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-16">
          {/* Breadcrumb Navigation */}
          <Breadcrumb className="mb-10 text-sm">
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="hover:text-primary">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <ChevronRight className="h-4 w-4" />
              <BreadcrumbLink href="/programs" className="hover:text-primary">
                Programs
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <ChevronRight className="h-4 w-4" />
              <span className="font-medium text-gray-800">{program.title}</span>
            </BreadcrumbItem>
          </Breadcrumb>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Objectives Section */}
              <section className="bg-white p-8 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-4">
                  <Target className="w-6 h-6 text-primary" />
                  Objectives
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  {program.objectives.map((objective, index) => (
                    <li key={index}>{objective}</li>
                  ))}
                </ul>
              </section>

              {/* Impact & Achievements Section */}
              <section className="bg-white p-8 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-4">
                  <Trophy className="w-6 h-6 text-secondary" />
                  Impact & Achievements
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  {program.impact.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </section>

              {/* Gallery Section */}
              {program.galleryImages && program.galleryImages.length > 0 && (
                <section>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                    <img
                      src="/icons/gallery.svg"
                      alt="Gallery Icon"
                      width={24}
                      height={24}
                    />
                    Gallery
                  </h2>
                  <Gallery images={program.galleryImages} />
                </section>
              )}
            </div>

            {/* Sidebar with Program Details */}
            <aside className="lg:col-span-1">
              <div className="bg-white/90 backdrop-blur-lg p-8 rounded-xl shadow-lg sticky top-24">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">
                  Program Details
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-600">Open for Registration</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-600">Year-round Program</span>
                  </div>
                  <button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-lg transition-colors">
                    Register Interest
                  </button>
                  <button className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold py-3 rounded-lg transition-colors">
                    Volunteer with Us
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
