import { useMemo } from "react";
import { format, subDays, parseISO } from "date-fns";

import { ChartConfig } from "@/components/ui/chart";

import { Project } from "@/types/project/projectType";
import { Client } from "@/types/client/clientType";

type ChartItem = Project | Client;

export const chartConfig = {
  total: {
    label: "Total clients",
    color: "var(--primary)",
  },
  new: {
    label: "New CLients",
    color: "var(--sidebar-ring)",
  },
} satisfies ChartConfig;

export function UseChartData<T extends ChartItem>(
  items: T[],
  dateField: keyof T,
  timeRange: "7d" | "30d" | "90d",
) {
  const chartData = useMemo(() => {
    const today = new Date();
    const days = timeRange === "7d" ? 7 : timeRange === "30d" ? 30 : 90;
    const startDateStr = format(subDays(today, days), "yyyy-MM-dd");

    const itemsByDate = new Map<string, number>();
    let totalBeforeRange = 0;

    items.forEach((item) => {
      const dateValue = item[dateField];
      if (!dateValue) return;

      const date =
        typeof dateValue === "string"
          ? parseISO(dateValue)
          : dateValue instanceof Date
            ? dateValue
            : new Date(dateValue as string | number | Date);

      const dateKey = format(date, "yyyy-MM-dd");

      if (dateKey < startDateStr) {
        totalBeforeRange++;
      } else {
        itemsByDate.set(dateKey, (itemsByDate.get(dateKey) || 0) + 1);
      }
    });
    let runningTotal = totalBeforeRange;

    return Array.from({ length: days + 1 }, (_, i) => {
      const date = format(subDays(today, days - i), "yyyy-MM-dd");
      const newItems = itemsByDate.get(date) || 0;
      runningTotal += newItems;

      return { date, total: runningTotal, new: newItems };
    });
  }, [items, dateField, timeRange]);

  const stats = useMemo(() => {
    const lastDay = chartData[chartData.length - 1];

    return {
      total: items.length,
      new: lastDay?.total - (chartData[0]?.total - chartData[0]?.new || 0),
    };
  }, [items.length, chartData]);

  return { chartData, stats };
}
