"use client";

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
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronsDown, ChevronsRight, ChevronsUp } from "lucide-react";

import { useState } from "react";

export function AddTaskDialog() {
  const [value, setValue] = useState("low");

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button className="font-bold cursor-pointer rounded-2xl">
            Add New Task
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Task</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="taskTitle">Task Title</Label>
              <Input
                id="taskTitle"
                name="name"
                placeholder="Write a title..."
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="taskPriority">Task Description</Label>
              <Input
                id="taskPriority"
                name="username"
                placeholder="Give a description of the task..."
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="priority">Priority</Label>
              <Select value={value} onValueChange={setValue}>
                <SelectTrigger
                  id="priority"
                  className={`w-full text-priority-${value}`}
                >
                  <SelectValue
                    placeholder={
                      <span
                        className={`flex gap-2 items-center text-priority-${value}`}
                      >
                        <ChevronsDown className="text-priority-low" />
                        Low
                      </span>
                    }
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem
                    value="low"
                    className="text-priority-low focus:text-priority-low cursor-pointer"
                  >
                    <ChevronsDown className="text-priority-low" />
                    Low
                  </SelectItem>
                  <SelectItem
                    value="medium"
                    className="text-priority-medium focus:text-priority-medium cursor-pointer"
                  >
                    <ChevronsRight className="text-priority-medium" />
                    Medium
                  </SelectItem>
                  <SelectItem
                    value="high"
                    className="text-priority-high focus:text-priority-high cursor-pointer"
                  >
                    <ChevronsUp className="text-priority-high" />
                    High
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="destructive" className="cursor-pointer">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" className="cursor-pointer">
              Add Task
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
