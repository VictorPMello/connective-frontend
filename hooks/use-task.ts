import { useKanbanStore } from "@/store/kanbanStore";

import { Task } from "@/types/task/taskType";

export const useTask = (projectId?: string) => {
  const tasks = useKanbanStore((state) => state.tasks);
  const createTask = useKanbanStore((state) => state.createTask);

  const projectTasks = projectId
    ? tasks.filter((task: Task) => task.projectId === projectId)
    : [];

  const todoTasks = projectTasks.filter((task: Task) => task.status === "todo");
  const doingTasks = projectTasks.filter(
    (task: Task) => task.status === "doing",
  );
  const doneTasks = projectTasks.filter((task: Task) => task.status === "done");

  return {
    tasks: projectTasks,
    todoTasks,
    doingTasks,
    doneTasks,
    createTask,
  };
};
