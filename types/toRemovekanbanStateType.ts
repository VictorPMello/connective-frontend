import { StateCreator } from "zustand";

import { Kanban } from "@/types/kanbanInterface";
import { ProjectActions } from "@/types/projectActionsInterface";
import { TaskActions } from "@/types/taskActionsInterface";
import { UIActions } from "@/types/uiActionsInterface";

export type KanbanStore = Kanban & ProjectActions & TaskActions & UIActions;

export type KanbanStateCreator<T> = StateCreator<
  KanbanStore,
  [["zustand/devtools", never], ["zustand/persist", unknown]],
  [],
  T
>;
