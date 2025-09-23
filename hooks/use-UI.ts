import { useKanbanStore } from "@/store/kanbanStore";

export const useUI = () => {
  const isLoading = useKanbanStore((state) => state.isLoading);
  const setLoading = useKanbanStore((state) => state.setLoading);

  return { isLoading, setLoading };
};
