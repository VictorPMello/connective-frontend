import { useState } from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { UseClient } from "@/hooks/use-client";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

export function ClientsTableActions({ id }: { id: string }) {
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const { deleteCLient } = UseClient();

  // Add Error | Success message
  const handleDeleteClient = (id: string) => deleteCLient(id);

  return (
    <>
      <Button
        variant="ghost"
        className="cursor-pointer"
        onClick={() => setIsAlertOpen(true)}
      >
        <Trash className="text-destructive" />
      </Button>

      {isAlertOpen && (
        <AlertDialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete This Client?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete this
                project and tasks from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="cursor-pointer">
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction
                onClick={() => handleDeleteClient(id)}
                className="bg-destructive hover:bg-destructive/ cursor-pointer"
              >
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </>
  );
}
