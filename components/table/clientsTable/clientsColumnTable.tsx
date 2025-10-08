import { IconCircleCheckFilled, IconLoader } from "@tabler/icons-react";
import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { ClientsDragTable } from "@/components/table/clientsTable/clientsDragTable";

import { ClientsTableCellViewer } from "@/components/table/clientsTable/clientsTableCellViewer";

import { Client } from "@/types/client/clientType";
import { ClientsTableActions } from "./clientsTableActions";

export const columns: ColumnDef<Client>[] = [
  // Create Drag Column
  {
    id: "drag",
    header: () => null,
    // Header is the title column
    cell: ({ row }) => <ClientsDragTable id={row.original.id} />,
    // Cell is the content column
  },
  // Create Select checkbox Column
  {
    id: "select",
    header: ({ table }) => (
      <div className="flex items-center justify-center">
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      </div>
    ),
    cell: ({ row }) => (
      <div className="flex items-center justify-center">
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  // Create Header Column
  {
    accessorKey: "clientName",
    header: "Client/Enterprise",
    cell: ({ row }) => {
      return <ClientsTableCellViewer item={row.original} />;
    },
    enableHiding: false,
  },
  // Create Contact Column
  {
    accessorKey: "contact",
    header: "Contact",
    cell: ({ row }) => (
      <div className="w-32">
        <Badge variant="outline" className="text-muted-foreground px-1.5">
          {row.original.contactPerson}
          {row.original.phone}
        </Badge>
      </div>
    ),
  },

  // Create Email Column
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => (
      <div className="w-32">
        <Badge variant="outline" className="text-muted-foreground px-1.5">
          {row.original.email}
        </Badge>
      </div>
    ),
  },
  // Create Status Column
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge variant="outline" className="text-muted-foreground px-1.5">
        {row.original.status === "active" ? (
          <IconCircleCheckFilled className="fill-green-500 dark:fill-green-400" />
        ) : (
          <IconLoader />
        )}
        {row.original.status}
      </Badge>
    ),
  },
  // Create Category Column
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => (
      <Badge variant="outline" className="text-muted-foreground px-1.5">
        {row.original.category === "basic" ? (
          <IconCircleCheckFilled className="fill-green-500 dark:fill-green-400" />
        ) : (
          <IconLoader />
        )}
        {row.original.category}
      </Badge>
    ),
  },
  // Create Manager Column
  {
    accessorKey: "manager",
    header: "Manager",
    cell: ({ row }) => (
      <>
        <div className="w-32">
          <Badge variant="outline" className="text-muted-foreground px-1.5">
            {row.original.manager}
          </Badge>
        </div>
      </>
    ),
  },
  // Create Actions Column
  {
    id: "actions",
    cell: ({ row }) => <ClientsTableActions id={row.original.id} />,
  },
];
