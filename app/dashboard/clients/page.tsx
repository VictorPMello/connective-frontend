import { HeaderDashboard } from "@/components/header/headerDashboard";
import { ClientsTable } from "@/components/table/clientsTable/clientsTable";

import data from "@/data/data.json";

export default function Home() {
  return (
    <>
      <HeaderDashboard />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <ClientsTable data={data} />
          </div>
        </div>
      </div>
    </>
  );
}
