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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Project } from "@/types/project/projectType";

import { useProject } from "@/hooks/use-project";

export function AllProjectsDialog({
  projectId,
  projects,
}: {
  projectId: string;
  projects: Project[];
}) {
  const { deleteProject, deleteAllProjects } = useProject();

  // Add Error | Success message
  const handleDeleteProject = (id: string) => deleteProject(id);
  const handleDeleteAllProjects = () => deleteAllProjects();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <SquarePlus className="lg:size-6" />
      </DialogTrigger>
      <DialogContent className=" sm:max-w-[425px]">
        <DialogHeader className="flex fle-col">
          <DialogTitle>All Projects</DialogTitle>
          <Separator className="my-3" />
          <div className="flex flex-col lg:flex-row justify-between gap-4">
            <Input
              type="text"
              className="lg:w-1/2"
              placeholder="Search your project"
            />
            <CreateProjectDialog />
          </div>
        </DialogHeader>
        <div className="flex flex-col gap-3 truncate">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex items-center gap-4 p-2 border rounded-lg"
            >
              <div className="bg-priority-low p-1 rounded-lg">
                <SquareKanban className="text-primary-foreground" />
              </div>
              <div className="truncate">
                <h3 className="font-bold flex gap-2 items-center">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <h5 className="truncate">{project.title}</h5>
                    </TooltipTrigger>
                    <TooltipContent className="text-lg text-foreground">
                      <h5>{project.title}</h5>
                    </TooltipContent>
                  </Tooltip>

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
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="ghost" className="cursor-pointer">
                      <Trash className="text-destructive" />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Delete This Project?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete this project and tasks from our servers.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel className="cursor-pointer">
                        Cancel
                      </AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => handleDeleteProject(project.id)}
                        className="bg-destructive hover:bg-destructive/80 cursor-pointer"
                      >
                        Delete
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          ))}
        </div>
        <DialogFooter className="flex !justify-between items-center">
          <span className="text-sm">{projects.length} Projects</span>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="destructive"
                className="cursor-pointer w-full lg:w-auto"
              >
                Delete all
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Delete All Projects?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete all
                  your projects and tasks from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="cursor-pointer">
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction
                  onClick={handleDeleteAllProjects}
                  className="bg-destructive hover:bg-destructive/80 cursor-pointer"
                >
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
