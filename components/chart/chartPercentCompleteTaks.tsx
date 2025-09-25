"use client";

import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { Task } from "@/types/task/taskType";

const chartConfig = {
  completedPercentage: {
    label: "Completed",
  },
  project: {
    label: "Project",
    color: "var(--primary)",
  },
} satisfies ChartConfig;

export function ChartPercentCompleteTasks({
  totalTasks,
  doneTasks,
}: {
  totalTasks: Task[];
  doneTasks: Task[];
}) {
  const calculateCompletionPercentage = (): number => {
    if (totalTasks.length === 0) return 0;
    return Math.round((doneTasks.length / totalTasks.length) * 100);
  };

  const completionPercentage = calculateCompletionPercentage();

  const chartData = [
    {
      browser: "project",
      visitors: completionPercentage,
      fill: "var(--primary)",
    },
  ];

  const endAngle = (completionPercentage / 100) * 360;

  return (
    <Card className="border-none shadow-none w-[16rem]">
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="aspect-square max-h-[250px]"
        >
          <RadialBarChart
            data={chartData}
            startAngle={90}
            endAngle={90 + endAngle}
            innerRadius={80}
            outerRadius={110}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-background "
              polarRadius={[86, 74]}
            />
            <RadialBar dataKey="visitors" background cornerRadius={10} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-4xl font-bold"
                        >
                          {completionPercentage}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground text-2xl"
                        >
                          %
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
