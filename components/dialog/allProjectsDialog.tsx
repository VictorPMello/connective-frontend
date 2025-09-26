import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { SquareKanban, SquarePlus, Trash } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { CreateProjectDialog } from "@/components/dialog/createProjectDialog";
import { TaskCount } from "@/components/cards/taskCount";
import { EditProject } from "@/components/popover/editProject";

import { Project } from "@/types/project/projectType";

import { useProject } from "@/hooks/use-project";

export function AllProjectsDialog({
  projectId,
  projects,
}: {
  projectId: string;
  projects: Project[];
}) {
  const { deleteProject } = useProject();

  const handleDeleteProject = (id: string) => deleteProject(id);

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
            <CreateProjectDialog />
          </div>
        </DialogHeader>
        <div className="flex flex-col gap-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex items-center gap-4 p-2 border rounded-lg"
            >
              <div className="bg-priority-low p-1 rounded-lg">
                <SquareKanban className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-bold flex gap-2 items-center">
                  {project.title}
                  {project.id === projectId && (
                    <span className="text-sm bg-muted-foreground text-muted p-1.5 rounded-2xl">
                      Select?
                    </span>
                  )}
                </h3>

                <span className="text-sm">
                  <TaskCount projectId={project.id} />
                </span>
              </div>
              <div className="flex flex-1 justify-end gap-3">
                <EditProject project={project} />
                <Button
                  variant="ghost"
                  className="cursor-pointer"
                  onClick={() => handleDeleteProject(project.id)}
                >
                  <Trash className="text-destructive" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        <DialogFooter className="flex !justify-between items-center">
          <span className="text-sm">{projects.length} Projects</span>
          <Button variant="destructive" className="cursor-pointer">
            Delete all
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
