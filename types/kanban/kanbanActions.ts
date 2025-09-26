import { ProjectActions } from "@/types/project/projectActions";
import { TaskActions } from "@/types/task/taskActions";
import { UIActions } from "@/types/kanban/uiActions";

export interface KanbanActions extends ProjectActions, TaskActions, UIActions {}
