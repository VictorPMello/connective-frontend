import {
  TaskType,
  CreateTaskDataType,
  UpdateTaskDataType,
} from "@/types/taskTypes";

import { TaskActions } from "@/types/taskActionsInterface";

import { generateId } from "@/utils/helpers";
import { KanbanStateCreator } from "@/types/kanbanStateType";

export const createTaskActions: KanbanStateCreator<TaskActions> = (
  set,
  get,
) => ({
  createdTask: (data: CreateTaskDataType) => {
    set((state) => {
      const now = new Date();

      const newTask: TaskType = {
        id: generateId(),
        title: data.title,
        description: data.description || "",
        priority: data.priority,
        projectId: data.projectId,
        status: "toStart",
        createdAt: now,
        updatedAt: now,
      };
      return {
        ...state,
        tasks: [...state.tasks, newTask],
      };
    });
  },

  updateTask: (id: string, data: UpdateTaskDataType) => {
    set((state) => ({
      ...state,
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, ...data, updatedAt: new Date() } : task,
      ),
    }));
  },

  deleteTask: (id: string) => {
    set((state) => ({
      ...state,
      tasks: state.tasks.filter((t) => t.id !== id),
    }));
  },

  moveTask: (id: string | null) => {
    // Implementação dependente do contexto - pode ser moveTask(taskId, newStatus)
    // Por enquanto deixo vazio, pois não está claro o que deveria fazer
    console.log("moveTask called with:", id);
  },

  getTaskById: (id: string) => {
    return get().tasks.find((task) => task.id === id);
  },

  getTasksByProject: (projectId: string) => {
    return get().tasks.filter((task) => task.projectId === projectId);
  },

  // Alterar esse logica do status | está com a quantidade tasks e não o status

  getProjectStatus: (projectId: string) => {
    const tasks = get().tasks.filter((task) => task.projectId === projectId);

    return {
      total: tasks.length,
      toStart: tasks.filter((t) => t.status === "toStart").length,
      inProgress: tasks.filter((t) => t.status === "inProgress").length,
      completed: tasks.filter((t) => t.status === "completed").length,
    };
  },
});
