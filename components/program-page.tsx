import ProgramsSection from "@/components/programs-section";
import { fetchProgramsData } from "@/components/program-card-api";

export default async function ProgramsPage() {
  const programsData = await fetchProgramsData();

  return <ProgramsSection animation="slideFade" programs={programsData} />;
}