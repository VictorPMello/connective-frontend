"use client";

import { SectionCards } from "@/components/cards/section-cards";
import { ChartClients } from "@/components/chart/chartClients";
import { ChartProjects } from "@/components/chart/chartPojects";
// import { HeaderDashboard } from "@/components/header/headerDashboard";

import { UseClient } from "@/hooks/use-client";
import { useProject } from "@/hooks/use-project";

export default function Home() {
  const { clients } = UseClient();
  const { projects } = useProject();

  return (
    <>
      {/* <HeaderDashboard /> */}
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <SectionCards clients={clients} projects={projects} />
            <div className="px-4 lg:px-6 flex flex-col gap-5">
              <ChartClients clients={clients} />
              <ChartProjects projects={projects} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
