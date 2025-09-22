import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { KanbanStore } from "@/types/toRemovekanbanStateType";
import { createProjectActions } from "@/store/projectActions";
import { createTaskActions } from "@/store/toRemoveTaskActions";
import { createUIActions } from "@/store/uiActions";

export const useKanbanStore = create<KanbanStore>()(
  devtools(
    persist(
      immer((...args) => ({
        projects: [],
        tasks: [],
        selectedProject: null,
        isLoading: false,
        searchQuery: "",

        // Combinar todas as ações
        ...createProjectActions(...args),
        ...createTaskActions(...args),
        ...createUIActions(...args),
      })),
      {
        name: "kanban-storage",
      },
    ),
    {
      name: "kanban-store",
    },
  ),
);
