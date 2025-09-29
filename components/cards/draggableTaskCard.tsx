import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  ChevronsDown,
  ChevronsRight,
  ChevronsUp,
  Ellipsis,
  SquarePen,
  Trash,
} from "lucide-react";

import { Task } from "@/types/task/taskType";

export function DraggableTaskCard({
  task,
  onEdit,
  onDelete,
}: {
  task: Task;
  onEdit: () => void;
  onDelete: () => void;
}) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: task.id,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    opacity: isDragging ? 0 : 1,
    cursor: isDragging ? "grabbing" : "grab",
  };

  const getPriorityTask = (priority: string) => {
    switch (priority) {
      case "low":
        return "text-priority-low bg-priority-low/30";
      case "medium":
        return "text-priority-medium bg-priority-medium/30";
      case "high":
        return "text-priority-high bg-priority-high/30";
    }
  };
  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`p-6 border rounded-2xl transition-all ${
        isDragging ? "shadow-2xl ring-2 ring-primary" : ""
      }`}
    >
      <div className="flex justify-between">
        <p
          className={`flex gap-2 justify-center ${getPriorityTask(task.priority)} rounded-xl py-1 px-2`}
        >
          {task.priority === "low" ? (
            <ChevronsDown />
          ) : task.priority === "medium" ? (
            <ChevronsRight />
          ) : (
            <ChevronsUp />
          )}
          {task.priority}
        </p>

        <DropdownMenu>
          <DropdownMenuTrigger
            className="cursor-pointer"
            onClick={(e) => e.stopPropagation()}
            onPointerDown={(e) => e.stopPropagation()}
          >
            <Ellipsis />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className="cursor-pointer" onClick={onEdit}>
              <SquarePen /> Edit Task
            </DropdownMenuItem>
            <DropdownMenuItem
              className="text-destructive cursor-pointer focus:text-destructive/80"
              onClick={onDelete}
            >
              <Trash className="text-destructive" /> Delete Task
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Tooltip>
        <TooltipTrigger asChild>
          <div>
            <h4 className="mt-5 mb-2 font-bold text-lg truncate">
              {task.title}
            </h4>
            <p className="opacity-65 truncate">{task.description}</p>
          </div>
        </TooltipTrigger>
        <TooltipContent className="text-lg text-foreground">
          <h4 className="mt-5 mb-2 font-bold text-lg">{task.title}</h4>
          <p className="opacity-65">{task.description}</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
