import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { EditClient } from "@/components/form/editClient";
import { ClientInfos } from "@/components/cards/clientInfos";

import { Client } from "@/types/client/clientType";
import { Plus } from "lucide-react";

export function ClientsTableCellViewer({ client }: { client: Client }) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <Drawer direction={isMobile ? "bottom" : "right"}>
      <DrawerTrigger asChild>
        <Button
          variant="link"
          className="underline flex justify-between text-foreground w-full px-0  cursor-pointer"
        >
          {client.name}
          <Plus />
        </Button>
      </DrawerTrigger>

      <DrawerContent>
        {!isFormOpen ? (
          <>
            <div className="flex flex-col gap-4 overflow-y-auto px-4 text-sm">
              <ClientInfos client={client} />
            </div>
            <DrawerFooter>
              <Button
                variant="outline"
                className="cursor-pointer text-base font-bold"
                onClick={() => setIsFormOpen(true)}
              >
                Edit
              </Button>
            </DrawerFooter>
          </>
        ) : (
          <>
            <div className="flex flex-col gap-4 overflow-y-auto px-4 text-sm">
              <EditClient client={client} id={client.id} />
            </div>
            <DrawerFooter>
              <Button
                variant="outline"
                className="cursor-pointer text-base font-bold"
                onClick={() => setIsFormOpen(false)}
              >
                Close
              </Button>
            </DrawerFooter>
          </>
        )}
      </DrawerContent>
    </Drawer>
  );
}
