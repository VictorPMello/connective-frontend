import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Pen, SquareKanban, SquarePlus, Trash } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";

export function AllProjectsDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <SquarePlus />
      </DialogTrigger>
      <DialogContent className=" sm:max-w-[425px]">
        <DialogHeader className="flex fle-col">
          <DialogTitle>All Projects</DialogTitle>
          <Separator className="my-3" />
          <div className="flex justify-between gap-4">
            <Input
              type="text"
              className="w-1/2"
              placeholder="Search your project"
            />
            <Button className="font-bold cursor-pointer">Create Project</Button>
          </div>
        </DialogHeader>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-4 p-2 border rounded-lg">
            <div className="bg-priority-low p-1 rounded-lg">
              <SquareKanban className="text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-bold flex gap-2 items-center">
                Project Name
                <span className="text-sm bg-muted-foreground text-muted p-1.5 rounded-2xl">
                  Select?
                </span>
              </h3>
              <span className="text-sm">number of task</span>
            </div>
            <div className="flex flex-1 justify-end gap-3">
              <Button variant="ghost" className="cursor-pointer">
                <Pen className="text-priority-low" />
              </Button>
              <Button variant="ghost" className="cursor-pointer">
                <Trash className="text-destructive" />
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-4 p-2 border rounded-lg">
            <div className="bg-priority-low p-1 rounded-lg">
              <SquareKanban className="text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-bold flex gap-2 items-center">
                Project Name
              </h3>
              <span className="text-sm">number of task</span>
            </div>
            <div className="flex flex-1 justify-end gap-3">
              <Button variant="ghost" className="cursor-pointer">
                <Pen className="text-priority-low" />
              </Button>
              <Button variant="ghost" className="cursor-pointer">
                <Trash className="text-destructive" />
              </Button>
            </div>
          </div>
        </div>
        <DialogFooter className="flex !justify-between items-center">
          <span className="text-sm">number of all task</span>
          <Button variant="destructive" className="cursor-pointer">
            Delete all
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
