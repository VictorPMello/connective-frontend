import { Calendar } from "@/components/ui/calendar";

import { DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";

import { Client } from "@/types/client/clientType";

export function ClientInfos({ client }: { client: Client }) {
  return (
    <div className="w-full max-w-md">
      <DrawerHeader className="gap-1">
        <DrawerTitle>{client.name}</DrawerTitle>
      </DrawerHeader>
      <div className="flex flex-col gap-4 overflow-y-auto px-4 text-sm">
        <Separator />
        <div>{client.contactPerson}</div>
        <div>{client.email}</div>
        <div>{client.phone}</div>
        <div>{client.manager}</div>
        <div>{client.status}</div>
        <div>{client.category}</div>
        <Separator />

        <div>{client.address?.street}</div>
        <div>{client.address?.number}</div>
        <div>{client.address?.neighborhood}</div>
        <div>{client.address?.city}</div>
        <div>{client.address?.state}</div>
        <div>{client.address?.zipCode}</div>
        <div>{client.address?.country}</div>
        <Separator />

        <div>{client.cnpj}</div>
        <div>{client.cpf}</div>
        <div>{client.website}</div>
        <div>{client.linkedin}</div>
        <div>{client.secundaryEmail}</div>
        <div>{client.secundaryPhone}</div>
        <Separator />

        <div>{client.monthlyAmount}</div>
        <div>{client.paymentMethod}</div>
        <Separator />

        <Calendar mode="single" selected={client.hiringDate} />
        <Calendar mode="single" selected={client.nextDueDate} />
        <Calendar mode="single" selected={client.lastContact} />
        <Separator />

        <div>{client.notes}</div>
      </div>
    </div>
  );
}
