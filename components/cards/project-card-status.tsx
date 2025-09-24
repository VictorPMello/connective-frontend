import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartPercentCompleteTasks } from "@/components/chart/chartPercentCompleteTaks";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { Maximize2, SquareKanban } from "lucide-react";

export function ProjectCardStatus({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Card className="@container/card flex-row">
      <div className="flex flex-col justify-center items-end text-sm p-10">
        <DropdownMenu>
          <DropdownMenuTrigger
            className="flex justify-between items-center w-[20rem]
            border text-foreground rounded-2xl
            p-2 pl-5 cursor-pointer text-left text-xl"
          >
            <div>
              <span className="block text-xs">Project</span>
              <h5>{title}</h5>
              <p>{description}</p>
            </div>
            <div className=" bg-priority-low p-1.5 rounded-full">
              <SquareKanban className="size-8" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>
              <Input type="text" placeholder="Find ..." />
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="flex gap-3 flex-col">
              <DropdownMenuItem>
                <div className="p-2">
                  <Button
                    variant="ghost"
                    className="flex justify-start gap-5 items-center w-[20rem]
                   cursor-pointer text-left text-lg"
                  >
                    <SquareKanban className="size-8 text-priority-low" />
                    <div className="flex-1">
                      <h5>Selected Project</h5>
                      <span className="block text-xs">3 Tasks</span>
                    </div>
                    <Maximize2 className="size-6 self-center text-priority-low" />
                  </Button>
                </div>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <div className="p-2">
                  <Button
                    variant="ghost"
                    className="flex justify-start gap-5 items-center w-[20rem]
                   cursor-pointer text-left text-lg"
                  >
                    <SquareKanban className="size-8 text-priority-low" />
                    <div>
                      <h5>Selected Project</h5>
                      <span className="block text-xs">1 Tasks</span>
                    </div>
                  </Button>
                </div>
              </DropdownMenuItem>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <CardHeader className="flex flex-1 justify-center w-[16rem]">
        <CardTitle>
          <ChartPercentCompleteTasks />
        </CardTitle>
      </CardHeader>

      <CardFooter className="flex flex-col justify-start items-center gap-6 text-sm">
        <h5 className="text-xl">Tasks </h5>

        <div className="flex flex-row flex-1 flex-wrap gap-2 w-full">
          <div className="w-[48%] my-auto p-2 pl-5 rounded-2xl text-lg border">
            <span className="block">Total</span>
            <span>10</span>
          </div>
          <div className="w-[48%] my-auto p-2 pl-5 rounded-2xl text-lg border">
            <span className="block">Waiting</span>
            <span>6</span>
          </div>
          <div className="w-[48%] my-auto p-2 pl-5 rounded-2xl text-lg border">
            <span className="block">In Progress</span>
            <span>4</span>
          </div>
          <div className="w-[48%] my-auto p-2 pl-5 rounded-2xl text-lg border">
            <span className="block">Completed</span>
            <span>0</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
