import { startOfMonth, endOfMonth, isWithinInterval } from "date-fns";

import { Client } from "@/types/client/clientType";

export function getClientsAddedThisMonth(clients: Client[]): Client[] {
  const now = new Date();
  const monthStart = startOfMonth(now);
  const monthEnd = endOfMonth(now);

  if (clients.length === 0) return [];

  const filtered = clients.filter((client) => {
    if (!client.hiringDate) return false;

    const hiringDate = new Date(client.hiringDate);

    return isWithinInterval(hiringDate, {
      start: monthStart,
      end: monthEnd,
    });
  });

  return filtered;
}

export function getClientsAddedLastMonth(clients: Client[]): Client[] {
  const now = new Date();
  const lastMonthDate = new Date(now.getFullYear(), now.getMonth() - 1);
  const lastMonthStart = startOfMonth(lastMonthDate);
  const lastMonthEnd = endOfMonth(lastMonthDate);

  return clients.filter((client) => {
    if (!client.hiringDate) return false;

    const hiringDate = new Date(client.hiringDate);

    return isWithinInterval(hiringDate, {
      start: lastMonthStart,
      end: lastMonthEnd,
    });
  });
}

export function calculateClientGrowthPercentage(clients: Client[]): number {
  const thisMonthCount = getClientsAddedThisMonth(clients).length;
  const lastMonthCount = getClientsAddedLastMonth(clients).length;

  if (lastMonthCount === 0) {
    return thisMonthCount > 0 ? 100 : 0;
  }

  const growth = ((thisMonthCount - lastMonthCount) / lastMonthCount) * 100;

  return Math.round(growth * 10) / 10;
}
