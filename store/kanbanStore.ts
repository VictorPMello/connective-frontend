import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { KanbanStore } from "@/types/kanbanStateType";
import { createProjectActions } from "@/store/projectActions";
import { createTaskActions } from "@/store/taskActions";
import { createUIActions } from "@/store/uiActions";

export const useKanbanStore = create<KanbanStore>()(
  devtools(
    persist(
      (...args) => ({
        projects: [],
        tasks: [],
        selectedProject: null,
        isLoading: false,
        searchQuery: "",

        // Combinar todas as ações
        ...createProjectActions(...args),
        ...createTaskActions(...args),
        ...createUIActions(...args),
      }),
      {
        name: "kanban-storage",
      },
    ),
    {
      name: "kanban-store",
    },
  ),
);
