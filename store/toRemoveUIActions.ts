import { UIActions } from "@/types/uiActionsInterface";
import { KanbanStateCreator } from "@/types/toRemovekanbanStateType";

export const createUIActions: KanbanStateCreator<UIActions> = (set) => ({
  setSearchQuery: (query: string) => {
    set((state) => ({
      ...state,
      searchQuery: query,
    }));
  },
});
