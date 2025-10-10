import { Project } from "@/types/project/projectType";
import { startOfMonth, endOfMonth, isWithinInterval } from "date-fns";

export function getProjectsCreatedThisMonth(projects: Project[]): Project[] {
  const now = new Date();
  const monthStart = startOfMonth(now);
  const monthEnd = endOfMonth(now);

  return projects.filter((project) => {
    if (!project.createdAt) return false;

    const createdAt = new Date(project.createdAt);

    return isWithinInterval(createdAt, {
      start: monthStart,
      end: monthEnd,
    });
  });
}

export function getProjectsCreatedLastMonth(projects: Project[]): Project[] {
  const now = new Date();
  const lastMonthDate = new Date(now.getFullYear(), now.getMonth() - 1);
  const lastMonthStart = startOfMonth(lastMonthDate);
  const lastMonthEnd = endOfMonth(lastMonthDate);

  return projects.filter((project) => {
    if (!project.createdAt) return false;

    const createdAt = new Date(project.createdAt);

    return isWithinInterval(createdAt, {
      start: lastMonthStart,
      end: lastMonthEnd,
    });
  });
}

export function calculateProjectGrowthPercentage(projects: Project[]): number {
  const thisMonthCount = getProjectsCreatedThisMonth(projects).length;
  const lastMonthCount = getProjectsCreatedLastMonth(projects).length;

  if (lastMonthCount === 0) {
    return thisMonthCount > 0 ? 100 : 0;
  }

  const growth = ((thisMonthCount - lastMonthCount) / lastMonthCount) * 100;

  return Math.round(growth * 10) / 10;
}
