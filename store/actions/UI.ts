import { KanBanState } from "@/types/kanban/kanbanInterface";
import { KanbanStateCreator } from "@/types/kanban/kanbanStateType";

import { UIActions } from "@/types/kanban/uiActions";

export const CreateUIActions: KanbanStateCreator<UIActions> = (set) => ({
  setLoading: (loading: boolean) => {
    set((state: KanBanState) => ({
      ...state,
      isLoading: loading,
    }));
  },
});
