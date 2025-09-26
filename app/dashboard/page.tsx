import { SectionCards } from "@/components/cards/section-cards";
import { ChartAreaInteractive } from "@/components/chart/chartAreaInteractive";
import { HeaderDashboard } from "@/components/header/headerDashboard";

import { DataTable } from "@/components/table/dataTable";

import data from "@/data/data.json";

export default function Home() {
  return (
    <>
      <HeaderDashboard />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <SectionCards />
            <div className="px-4 lg:px-6">
              <ChartAreaInteractive />
            </div>
            <DataTable data={data} />
          </div>
        </div>
      </div>
    </>
  );
}
