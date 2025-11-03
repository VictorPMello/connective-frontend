import { KanBanState } from "@/types/kanban/kanbanInterface";
import { KanbanStateCreator } from "@/types/kanban/kanbanStateType";

import { CreateTaskSchema } from "@/lib/schemas/taskSchema";
import { TaskActions } from "@/types/task/taskActions";
import { TaskPriority, TaskStatus } from "@/types/task/taskType";

import { api } from "@/lib/api";

export const CreateTaskActions: KanbanStateCreator<TaskActions> = (set) => ({
  createTask: async (
    title: string,
    projectId: string,
    priority: TaskPriority,
    description?: string,
  ) => {
    try {
      const validateTask = CreateTaskSchema.parse({
        title,
        description,
        status: "TODO",
        priority,
        projectId,
      });

      const newTask = await api.post("/task", validateTask);

      set((state: KanBanState) => ({
        ...state,
        tasks: [...state.tasks, newTask.data.data],
      }));
    } catch (error) {
      throw new Error(`Error to create a task: ${error}`);
    }
  },

  updateTask: async (
    id: string,
    title: string,
    priority: TaskPriority,
    description?: string,
  ) => {
    try {
      set((state: KanBanState) => ({
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === id) {
            return {
              ...task,
              title,
              description,
              priority,
              updatedAt: new Date(),
            };
          }
          return task;
        }),
      }));
    } catch (error) {
      throw new Error(`error to create a task: ${error}`);
    }
  },

  updateTaskStatus: async (id: string, newStatus: TaskStatus) => {
    try {
      set((state: KanBanState) => ({
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === id) {
            return {
              ...task,
              status: newStatus,
              updatedAt: new Date(),
            };
          }
          return task;
        }),
      }));
    } catch (error) {
      throw new Error(`error to create a task: ${error}`);
    }
  },

  deleteTask: async (id: string) => {
    try {
      set((state: KanBanState) => ({
        ...state,
        tasks: state.tasks.filter((task) => task.id !== id),
      }));
    } catch (error) {
      throw new Error(`Error to create a task: ${error}`);
    }
  },
});
