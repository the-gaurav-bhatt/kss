import { ProgramCardList } from "./program-card-list"; // a client component
import { Program } from "./types"; // an interface (optional)
import { fetchProgramsData } from "./program-card-api";
export default async function ProgramsPage() {
  // 1. Fetch data on the server
  const programsData: Program[] = await fetchProgramsData();

  // 2. Pass it to the client component
  return (
    <section className="py-20 bg-gradient-to-b from-white to-primary/5">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary mb-4 text-center">
          Our Programs
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center">
          Transforming lives through comprehensive programs focused on
          education, healthcare, and community development.
        </p>
        <ProgramCardList programs={programsData} />
      </div>
    </section>
  );
}
