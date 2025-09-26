"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useProject } from "@/hooks/use-project";

export function CreateProjectDialog() {
  const [titleProject, setTitleProject] = useState("");
  const [descriptionProject, setDescriptionProject] = useState("");

  const { createProject } = useProject();

  const handleCreateProject = () => {
    createProject(titleProject, descriptionProject);

    // Add Success and Error message

    setTitleProject("");
    setDescriptionProject("");
  };

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button className="font-bold cursor-pointer">
            Create New Project
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create Project</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="projectTitle">Project Title</Label>
              <Input
                id="projectTitle"
                name="name"
                placeholder="Write a title..."
                value={titleProject}
                onChange={(e) => setTitleProject(e.target.value)}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="projectPriority">Project Description</Label>
              <Input
                id="projectPriority"
                name="username"
                placeholder="Give a description of the task..."
                value={descriptionProject}
                onChange={(e) => setDescriptionProject(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="destructive" className="cursor-pointer">
                Cancel
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button
                type="button"
                className="cursor-pointer"
                onClick={handleCreateProject}
              >
                Create
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
