import { ColumnDef } from "@tanstack/react-table";

import { ClientsDragTable } from "@/components/table/clientsTable/clientsDragTable";

import { ClientsTableCellViewer } from "@/components/table/clientsTable/clientsTableCellViewer";

import { Client } from "@/types/client/clientType";
import { ClientsTableActions } from "./clientsTableActions";
import { ClientColumnStatus } from "./clientColumnStatus";
import { ClientColumnCategory } from "./clientColumnCategory";

export const columns: ColumnDef<Client>[] = [
  {
    id: "drag",
    header: () => null,
    cell: ({ row }) => <ClientsDragTable id={row.original.id} />,
  },
  {
    accessorKey: "clientName",
    header: "Client/Enterprise",
    cell: ({ row }) => {
      return <ClientsTableCellViewer client={row.original} />;
    },
    enableHiding: false,
  },
  {
    accessorKey: "contact",
    header: "Contact",
    cell: ({ row }) => (
      <div className="w-32 flex flex-col">
        <span>{row.original.contactPerson}</span>
        <span>{row.original.phone}</span>
      </div>
    ),
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => <div className="w-32">{row.original.email}</div>,
  },
  // Create Status Column
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <ClientColumnStatus status={row.original.status} />,
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => (
      <ClientColumnCategory category={row.original.category} />
    ),
  },
  {
    accessorKey: "manager",
    header: "Manager",
    cell: ({ row }) => <div className="w-32">{row.original.manager}</div>,
  },
  {
    id: "actions",
    cell: ({ row }) => <ClientsTableActions id={row.original.id} />,
  },
];
