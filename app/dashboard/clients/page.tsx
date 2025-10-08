"use client";

import { HeaderDashboard } from "@/components/header/headerDashboard";
import { ClientsTable } from "@/components/table/clientsTable/clientsTable";

import { UseClient } from "@/hooks/use-client";

export default function Home() {
  const { clients } = UseClient();

  return (
    <>
      <HeaderDashboard />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <ClientsTable data={clients} />
          </div>
        </div>
      </div>
    </>
  );
}
