import { useKanbanStore } from "@/store/kanbanStore";

export const useTasks = (projectId?: string) => {
  const tasks = useKanbanStore((state) => state.tasks);
  const createdTask = useKanbanStore((state) => state.createdTask);
  const updateTask = useKanbanStore((state) => state.updateTask);
  const deleteTask = useKanbanStore((state) => state.deleteTask);
  const moveTask = useKanbanStore((state) => state.moveTask);
  const getTaskById = useKanbanStore((state) => state.getTaskById);
  const getTaskByProject = useKanbanStore((state) => state.getTasksByProject);

  // const getProjectStatus = useKanbanStore((state) => state.getProjectStatus);
  // Mudar logica do status

  const projectsTasks = projectId ? getTaskByProject(projectId) : tasks;

  //   const tasksByStatus = projectId ? {
  //     toStart: projectTasks.filter(t => t.status === "toStart"),
  //     inProgress: projectTasks.filter(t => t.status === "inProgress"),
  //     completed: projectTasks.filter(t => t.status === "completed"),
  //   } : null;
  //
  //   const projectStats = projectId ? getProjectStatus(projectId) : null;

  return {
    tasks: projectsTasks,
    createdTask,
    updateTask,
    deleteTask,
    moveTask,
    getTaskById,
    getTaskByProject,
  };
};
