import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { CreateProjectActions } from "@/store/actions/project";
import { CreateTaskActions } from "@/store/actions/task";
import { CreateUIActions } from "@/store/actions/UI";
import { KanbanStore } from "@/types/kanban/kanbanStateType";

export const useKanbanStore = create<KanbanStore>()(
  devtools(
    persist(
      immer((...args) => ({
        projects: [],
        tasks: [],
        selectedProject: {},
        isLoading: false,

        ...CreateProjectActions(...args),
        ...CreateTaskActions(...args),
        ...CreateUIActions(...args),
      })),
      {
        name: "kanban-store",
      },
    ),
    {
      name: "kanban-store",
    },
  ),
);
