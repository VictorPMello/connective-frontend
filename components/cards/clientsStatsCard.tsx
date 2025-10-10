import {
  getClientsAddedThisMonth,
  calculateClientGrowthPercentage,
} from "@/lib/client-utils";
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

import { Client } from "@/types/client/clientType";

export function ClientsStatsCard({ clients }: { clients: Client[] }) {
  const newClients = getClientsAddedThisMonth(clients);
  const newClientsCount = newClients.length;
  const growthPercentage = calculateClientGrowthPercentage(clients);
  const isGrowing = growthPercentage >= 0;

  return (
    <>
      <Card className="@container/card flex flex-col justify-center">
        <CardHeader>
          <CardDescription>Total Clientsa</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {clients.length}
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col  items-start gap-1.5 text-sm">
          <div className="text-muted-foreground">Total active accounts</div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>New Clients This Month</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {newClientsCount}
          </CardTitle>
          <CardAction>
            <Badge className={isGrowing ? "bg-priority-low" : "bg-destructive"}>
              {isGrowing ? "↑" : "↓"} {Math.abs(growthPercentage)}%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <p className="text-xs text-muted-foreground mt-2">
            {isGrowing ? "Growing this month" : "Down from last month"}
          </p>
          <p className="text-xs text-muted-foreground">
            Added in {format(new Date(), "MMMM yyyy")}
          </p>
        </CardFooter>
      </Card>
    </>
  );
}
