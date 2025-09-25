"use client";

import { useTask } from "@/hooks/use-task";

export function TaskCount({ projectId }: { projectId: string }) {
  const { tasks } = useTask(projectId);

  return <span className="block text-xs">{tasks.length} Tasks</span>;
}
