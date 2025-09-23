import { useKanbanStore } from "@/store/kanbanStore";

export const useTask = (projectId?: string) => {
  const tasks = useKanbanStore((state) => state.tasks);
  const createTask = useKanbanStore((state) => state.createTask);

  const projectTasks = projectId
    ? tasks.filter((task) => task.projectId === projectId)
    : [];

  const todoTasks = projectTasks.filter((task) => task.status === "todo");
  const doingTasks = projectTasks.filter((task) => task.status === "doing");
  const doneTasks = projectTasks.filter((task) => task.status === "done");

  return {
    tasks: projectTasks,
    todoTasks,
    doingTasks,
    doneTasks,
    createTask,
  };
};
