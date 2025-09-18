import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import type { Kanban } from "@/types/kanbanInterface";
import type {
  ProjectType,
  CreateProjectDataType,
  UpdateProjectDataType,
} from "@/types/projectTypes";
import type {
  TaskType,
  CreateTaskDataType,
  UpdateTaskDataType,
  TaskStatusType,
} from "@/types/taskTypes";

import { ProjectSchema } from "@/lib/schemas/project";
import { TaskSchema } from "@/lib/schemas/task";

const updateProjectCounts = (project: ProjectType, tasks: TaskType[]) => {
  const projectTasks = tasks.filter(
    (task: TaskType) => task.projectId === project.id,
  );

  project.toStartTasks = projectTasks
    .filter((t: TaskType) => t.status === "toStart")
    .map((t: TaskType) => t.id);

  project.inProgress = projectTasks
    .filter((t: TaskType) => t.status === "inProgress")
    .map((t: TaskType) => t.id);

  project.completed = projectTasks
    .filter((t: TaskType) => t.status === "completed")
    .map((t: TaskType) => t.id);

  project.toStartTasksCount = project.toStartTasks.length;
  project.inProgressCount = project.inProgress.length;
  project.completedCount = project.completed.length;
  project.totalTasks = projectTasks.length;
};

export const useKanbanStore = create<Kanban>()(
  devtools(
    persist(
      immer((set, get) => ({
        // Estado inicial
        projects: [],
        tasks: [],
        selectedProjectId: null,
        isLoading: false,
        searchQuery: "",
        sortBy: "createdAt",
        sortOrder: "desc",

        // ===== AÇÕES PARA PROJETOS =====
        createProject: (data: CreateProjectDataType) => {
          set((state) => {
            const now = new Date();
            const newProject: ProjectType = {
              id: generateId(),
              title: data.title,
              toStartTasks: [],
              inProgress: [],
              completed: [],
              totalTasks: 0,
              toStartTasksCount: 0,
              inProgressCount: 0,
              completedCount: 0,
              createdAt: now,
              updatedAt: now,
            };

            // Validar com schema
            const validatedProject = ProjectSchema.parse(newProject);
            state.projects.push(validatedProject);

            // Selecionar automaticamente o novo projeto
            state.selectedProjectId = newProject.id;
          });
        },

        updateProject: (id: string, data: UpdateProjectDataType) => {
          set((state) => {
            const projectIndex = state.projects.findIndex((p) => p.id === id);
            if (projectIndex !== -1) {
              state.projects[projectIndex] = {
                ...state.projects[projectIndex],
                ...data,
                updatedAt: new Date(),
              };
            }
          });
        },

        deleteProject: (id: string) => {
          set((state) => {
            // Remover todas as tasks do projeto
            state.tasks = state.tasks.filter((task) => task.projectId !== id);

            // Remover o projeto
            state.projects = state.projects.filter(
              (project) => project.id !== id,
            );

            // Se o projeto selecionado foi deletado, limpar seleção
            if (state.selectedProjectId === id) {
              state.selectedProjectId = null;
            }
          });
        },

        selectProject: (id: string | null) => {
          set((state) => {
            state.selectedProjectId = id;
          });
        },

        // ===== AÇÕES PARA TASKS =====
        createTask: (data: CreateTaskDataType) => {
          set((state) => {
            const now = new Date();
            const newTask: TaskType = {
              id: generateId(),
              title: data.title,
              description: data.description || "",
              priority: data.priority,
              projectId: data.projectId,
              status: "toStart", // Sempre inicia como waiting
              createdAt: now,
              updatedAt: now,
            };

            // Validar com schema
            const validatedTask = TaskSchema.parse(newTask);
            state.tasks.push(validatedTask);

            // Atualizar contadores do projeto
            const project = state.projects.find((p) => p.id === data.projectId);
            if (project) {
              updateProjectCounts(project, state.tasks);
            }
          });
        },

        updateTask: (id: string, data: UpdateTaskDataType) => {
          set((state) => {
            const taskIndex = state.tasks.findIndex((t) => t.id === id);
            if (taskIndex !== -1) {
              const currentTask = state.tasks[taskIndex];
              state.tasks[taskIndex] = {
                ...currentTask,
                ...data,
                updatedAt: new Date(),
              };

              // Se o status mudou, atualizar contadores do projeto
              if (data.status && data.status !== currentTask.status) {
                const project = state.projects.find(
                  (p) => p.id === currentTask.projectId,
                );
                if (project) {
                  updateProjectCounts(project, state.tasks);
                }
              }
            }
          });
        },

        deleteTask: (id: string) => {
          set((state) => {
            const task = state.tasks.find((t) => t.id === id);
            if (task) {
              // Remover a task
              state.tasks = state.tasks.filter((t) => t.id !== id);

              // Atualizar contadores do projeto
              const project = state.projects.find(
                (p) => p.id === task.projectId,
              );
              if (project) {
                updateProjectCounts(project, state.tasks);
              }
            }
          });
        },

        moveTask: (taskId: string, newStatus: TaskStatusType) => {
          set((state) => {
            const taskIndex = state.tasks.findIndex((t) => t.id === taskId);
            if (taskIndex !== -1) {
              state.tasks[taskIndex].status = newStatus;
              state.tasks[taskIndex].updatedAt = new Date();

              // Atualizar contadores do projeto
              const project = state.projects.find(
                (p) => p.id === state.tasks[taskIndex].projectId,
              );
              if (project) {
                updateProjectCounts(project, state.tasks);
              }
            }
          });
        },

        // ===== AÇÕES UTILITÁRIAS =====
        setSearchQuery: (query: string) => {
          set((state) => {
            state.searchQuery = query;
          });
        },

        // ===== GETTERS COMPUTADOS =====
        getProjectById: (id: string) => {
          return get().projects.find((project) => project.id === id);
        },

        getTaskById: (id: string) => {
          return get().tasks.find((task) => task.id === id);
        },

        getTasksByProject: (projectId: string) => {
          return get().tasks.filter((task) => task.projectId === projectId);
        },

        getTasksByStatus: (projectId: string, status: TaskStatusType) => {
          return get().tasks.filter(
            (task) => task.projectId === projectId && task.status === status,
          );
        },

        getProjectStats: (projectId: string) => {
          const tasks = get().tasks.filter(
            (task) => task.projectId === projectId,
          );
          const waiting = tasks.filter((t) => t.status === "toStart").length;
          const inProgress = tasks.filter(
            (t) => t.status === "inProgress",
          ).length;
          const completed = tasks.filter(
            (t) => t.status === "completed",
          ).length;
          const total = tasks.length;
          const completedPercentage =
            total > 0 ? Math.round((completed / total) * 100) : 0;

          return {
            total,
            waiting,
            inProgress,
            completed,
            completedPercentage,
          };
        },
      })),
      {
        name: "kanban-storage", // Nome para localStorage
        // Você pode adicionar outras opções de persistência aqui
      },
    ),
    {
      name: "kanban-store", // Nome para DevTools
    },
  ),
);
