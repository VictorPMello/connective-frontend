"use client";

import { HeaderDashboard } from "@/components/header/headerDashboard";
import { ClientsTable } from "@/components/table/clientsTable/clientsTable";

import { UseClient } from "@/hooks/use-client";

export default function Home() {
  const { clients } = UseClient();

  const clientsTest =
    clients.length !== 0
      ? clients
      : [
          {
            id: "hadjhasdjkhdsaj",
            name: "Teste company",
            contactPerson: "contactPerson Teste",
            email: "teste@hotmail.com",
            phone: "Invalid phone format",
            status: "active",
            category: "basic",
            manager: "Manager teste",
          },
          {
            id: "jhgfkjhfgkj",
            name: "Teste company 1",
            contactPerson: "contactPerson Teste",
            email: "teste@hotmail.com",
            phone: "Invalid phone format",
            status: "active",
            category: "basic",
            manager: "Manager teste",
          },
          {
            id: "uiourtiourteoiret",
            name: "Teste company 2",
            contactPerson: "contactPerson Teste",
            email: "teste@hotmail.com",
            phone: "Invalid phone format",
            status: "active",
            category: "basic",
            manager: "Manager teste",
          },
        ];

  return (
    <>
      <HeaderDashboard />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <ClientsTable data={clientsTest} />
          </div>
        </div>
      </div>
    </>
  );
}
