import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Pen } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Project } from "@/types/project/projectType";
import { useProject } from "@/hooks/use-project";

export function EditProject({ project }: { project: Project }) {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState(project.title);
  const [description, setDescription] = useState(project.description);

  const { updateProject } = useProject();

  const handleUpdateProject = () => {
    updateProject(project.id, title, description);

    // Add Error | Success message
    setIsOpen(false);
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="cursor-pointer">
          <Pen className="text-priority-low" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-4">
        <form>
          <div className="grid gap-4">
            <div>Edit Project</div>

            <div className="grid gap-3">
              <Label htmlFor="projectTitle">Project Title</Label>
              <Input
                id="projectTitle"
                name="name"
                placeholder="Write a title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="projectDescription">Project Description</Label>
              <Input
                id="projectDescription"
                name="username"
                placeholder="Give a description of the project..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div>
              <Button
                type="button"
                variant="outline"
                className="cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </Button>
              <Button
                type="button"
                className="cursor-pointer"
                onClick={handleUpdateProject}
              >
                Edit project
              </Button>
            </div>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
