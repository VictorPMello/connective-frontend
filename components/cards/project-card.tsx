import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";

import {
  ChevronsDown,
  ChevronsRight,
  ChevronsUp,
  Ellipsis,
  SquarePen,
  Trash,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ProjectCard() {
  // TODO if card empyt: "No Tasks currently. Board is empty!"
  // TODO Map to render lists
  return (
    <Card className="@container/card w-1/3 border rounded-3xl">
      <CardHeader className="flex justify-between">
        <CardTitle className="text-lg font-semibold tabular-nums @[250px]/card:text-3xl">
          To Start
        </CardTitle>
        <CardAction className="flex items-center justify-center self-center w-8 h-8 bg-primary rounded-full">
          12
        </CardAction>
      </CardHeader>

      <div className="flex flex-col gap-4 p-6">
        <div className="p-6 border rounded-2xl">
          <div className="flex justify-between">
            <p className="flex gap-2 justify-center text-priority-low bg-priority-low/30 rounded-xl py-1 px-2">
              <ChevronsDown className="text-priority-low" />
              Low
            </p>

            <DropdownMenu>
              <DropdownMenuTrigger className="cursor-pointer">
                <Ellipsis />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className="cursor-pointer">
                  <SquarePen /> Edit task
                </DropdownMenuItem>
                <DropdownMenuItem className="text-destructive cursor-pointer focus:text-destructive/80">
                  <Trash className="text-destructive" /> Delete Task
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <h4 className="mt-5 mb-2 font-bold text-lg">Name task</h4>
          <p className="opacity-65">Description</p>
        </div>

        <div className="p-6 border rounded-2xl">
          <div className="flex justify-between">
            <p className="flex gap-2 justify-center text-priority-low bg-priority-low/30 rounded-xl py-1 px-2">
              <ChevronsRight className="text-priority-medium" />
              Medium
            </p>

            <DropdownMenu>
              <DropdownMenuTrigger className="cursor-pointer">
                <Ellipsis />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className="cursor-pointer">
                  <SquarePen /> Edit task
                </DropdownMenuItem>
                <DropdownMenuItem className="text-destructive cursor-pointer focus:text-destructive/80">
                  <Trash className="text-destructive" /> Delete Task
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <h4 className="mt-5 mb-2 font-bold text-lg">Name task</h4>
          <p className="opacity-65">Description</p>
        </div>

        <div className="p-6 border rounded-2xl">
          <div className="flex justify-between">
            <p className="flex gap-2 justify-center text-priority-low bg-priority-low/30 rounded-xl py-1 px-2">
              <ChevronsUp className="text-priority-high" />
              High
            </p>

            <DropdownMenu>
              <DropdownMenuTrigger className="cursor-pointer">
                <Ellipsis />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className="cursor-pointer">
                  <SquarePen /> Edit task
                </DropdownMenuItem>
                <DropdownMenuItem className="text-destructive cursor-pointer focus:text-destructive/80">
                  <Trash className="text-destructive" /> Delete Task
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <h4 className="mt-5 mb-2 font-bold text-lg">Name task</h4>
          <p className="opacity-65">Description</p>
        </div>
      </div>
    </Card>
  );
}
