import { StateCreator } from "zustand";

import { KanBanState } from "@/types/kanban/kanbanInterface";
import { ProjectActions } from "@/types/project/projectActions";
import { TaskActions } from "@/types/task/taskActions";
import { UIActions } from "@/types/kanban/uiActions";

export type KanbanStore = KanBanState &
  ProjectActions &
  TaskActions &
  UIActions;

export type KanbanStateCreator<T> = StateCreator<
  KanbanStore,
  [["zustand/devtools", never], ["zustand/persist", unknown]],
  [],
  T
>;
