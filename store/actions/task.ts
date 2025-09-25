import { KanBanState } from "@/types/kanban/kanbanInterface";
import { KanbanStateCreator } from "@/types/kanban/kanbanStateType";

import { CreateTaskSchema } from "@/lib/schemas/taskSchema";
import { TaskActions } from "@/types/task/taskActions";
import { TaskPriority } from "@/types/task/taskType";

import { generateId } from "@/utils/helpers";

export const CreateTaskActions: KanbanStateCreator<TaskActions> = (set) => ({
  createTask: (
    title: string,
    projectId: string,
    priority: TaskPriority,
    description?: string,
  ) => {
    try {
      const validateTask = CreateTaskSchema.parse({
        title,
        description,
        status: "todo",
        priority,
        projectId,
      });

      const newTask = {
        ...validateTask,
        id: generateId(),
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      set((state: KanBanState) => ({
        ...state,
        tasks: [...state.tasks, newTask],
      }));
    } catch (error) {
      throw new Error(`Error to create a task: ${error}`);
    }
  },

  updateTask: (
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
              id: task.id,
              title,
              description,
              status: task.status,
              priority,
              projectId: task.projectId,
              createdAt: task.createdAt,
              updatedAt: new Date(),
            };
          }
          return task;
        }),
      }));
    } catch (error) {
      throw new Error(`Error to create a task: ${error}`);
    }
  },
});
