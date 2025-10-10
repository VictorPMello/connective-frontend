import { format } from "date-fns";
import { DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";
import { ClientColumnCategory } from "@/components/table/clientsTable/clientColumnCategory";
import { ClientColumnStatus } from "@/components/table/clientsTable/clientColumnStatus";

import { Client } from "@/types/client/clientType";

export function ClientInfos({ client }: { client: Client }) {
  return (
    <div className="w-full max-w-md">
      <DrawerHeader className="gap-1">
        <DrawerTitle className="text-xl">CLient: {client.name}</DrawerTitle>
      </DrawerHeader>
      <div className="flex flex-col gap-4 overflow-y-auto px-4 text-base">
        <Separator />
        <span className="font-bold text-lg">Contact</span>
        <div>
          <p>{client.contactPerson}</p>
          <p>{client.phone}</p>
        </div>
        <span className="font-bold text-lg">Email</span>
        <p>{client.email}</p>
        <span className="font-bold text-lg">Manager</span>
        <p>{client.manager}</p>
        <span className="font-bold text-lg">Status and Category</span>
        <div className="flex gap-2">
          <ClientColumnStatus status={client.status} />
          <ClientColumnCategory category={client.category} />
        </div>
        <Separator />
        <div>
          <span className="font-bold text-lg">Address</span>
          <p>
            <span className="font-semibold">Country: </span>
            {client.address?.country}
          </p>
          <p>
            <span className="font-semibold">State: </span>
            {client.address?.state}
          </p>
          <p>
            <span className="font-semibold">City: </span>
            {client.address?.city}
          </p>
          <p>
            <span className="font-semibold">Street: </span>
            {client.address?.street}
          </p>
          <p>
            <span className="font-semibold">Number: </span>
            {client.address?.number}
          </p>
          <p>
            <span className="font-semibold">Complement: </span>
            {client.address?.complement}
          </p>

          <p>
            <span className="font-semibold">Neighborhood: </span>
            {client.address?.neighborhood}
          </p>
          <p>
            <span className="font-semibold">Zip Code: </span>
            {client.address?.zipCode}
          </p>
        </div>
        <Separator />

        <span className="font-bold text-lg">Tax Information</span>
        <p>
          <span className="font-semibold">CNPJ: </span>
          {client.cnpj}
        </p>
        <p>
          <span className="font-semibold">CPF: </span>
          {client.cpf}
        </p>

        <span className="font-bold text-lg">Links</span>
        <p>
          <span className="font-semibold">Website: </span>
          {client.website}
        </p>
        <p>
          <span className="font-semibold">Linkdin: </span>
          {client.linkedin}
        </p>

        <span className="font-bold text-lg">Secundary Email</span>
        <p>{client.secundaryEmail}</p>

        <span className="font-bold text-lg">Secundary phone number</span>
        <p>{client.secundaryPhone}</p>
        <Separator />

        <span className="font-bold text-lg">Payment</span>
        <p>{client.monthlyAmount}</p>
        <p>{client.paymentMethod}</p>
        <Separator />

        <span className="font-bold text-lg">Important Dates</span>
        <p>
          <span className="font-semibold">Hiring Date: </span>
          {client.hiringDate
            ? format(new Date(client.hiringDate), "PPP")
            : "Not set"}
        </p>
        <p>
          <span className="font-semibold">Next Due Date: </span>
          {client.nextDueDate
            ? format(new Date(client.nextDueDate), "PPP")
            : "Not set"}
        </p>
        <p>
          <span className="font-semibold">Last Contact: </span>
          {client.lastContact
            ? format(new Date(client.lastContact), "PPP")
            : "Not set"}
        </p>
        <Separator />

        <Separator />

        <span className="font-bold text-lg">Notes</span>
        <p>{client.notes}</p>
      </div>
    </div>
  );
}
