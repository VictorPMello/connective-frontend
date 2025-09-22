import { useKanbanStore } from "@/store/kanbanStore";

export const useUi = () => {
  const searchQuery = useKanbanStore((state) => state.searchQuery);
  const setSearchQuery = useKanbanStore((state) => state.setSearchQuery);
  const isLoading = useKanbanStore((state) => state.isLoading);

  return {
    searchQuery,
    setSearchQuery,
    isLoading,
  };
};
