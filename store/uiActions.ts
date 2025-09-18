import { StateCreator } from "zustand";
import { Kanban } from "@/types/kanbanInterface";
import { UIActions } from "@/types/uiActionsInterface";

export const createUIActions: StateCreator<Kanban, [], [], UIActions> = (
  set,
) => ({
  setSearchQuery: (query: string) => {
    set((state) => ({
      ...state,
      searchQuery: query,
    }));
  },
});
