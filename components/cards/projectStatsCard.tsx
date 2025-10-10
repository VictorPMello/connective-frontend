import {
  getProjectsCreatedThisMonth,
  calculateProjectGrowthPercentage,
} from "@/lib/projects-utils";

import { format } from "date-fns";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Project } from "@/types/project/projectType";

export function ProjectStatsCard({ projects }: { projects: Project[] }) {
  const newProjects = getProjectsCreatedThisMonth(projects);
  const newProjectsCount = newProjects.length;
  const projectGrowthPercentage = calculateProjectGrowthPercentage(projects);
  const isProjectGrowing = projectGrowthPercentage >= 0;

  return (
    <>
      <Card className="@container/card flex flex-col justify-center">
        <CardHeader>
          <CardDescription>Total Projects</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {projects.length}
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="text-muted-foreground">Active Kanban boards</div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>New Projects This Month</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {newProjectsCount}
          </CardTitle>
          <CardAction>
            <Badge
              className={
                isProjectGrowing ? "bg-priority-low" : "bg-destructive"
              }
            >
              {isProjectGrowing ? "↑" : "↓"} {Math.abs(projectGrowthPercentage)}
              %
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <p className="text-xs text-muted-foreground">
            {isProjectGrowing ? "Growing this month" : "Down from last month"}
          </p>
          <p className="text-xs text-muted-foreground">
            Created in {format(new Date(), "MMMM yyyy")}
          </p>
        </CardFooter>
      </Card>
    </>
  );
}
