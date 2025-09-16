import { AddTaskDialog } from "@/components/dialog/addTaskDialog";
import { HeaderDashboard } from "@/components/header/headerDashboard";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IconTrendingUp } from "@tabler/icons-react";

export default function Projects() {
  return (
    <>
      <HeaderDashboard />
      <div className="flex flex-1 flex-col px-3">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <Card className="@container/card">
              <CardHeader>
                <CardDescription>Total Revenue</CardDescription>
                <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                  $1,250.00
                </CardTitle>
                <CardAction>
                  <Badge variant="outline">
                    <IconTrendingUp />
                    +12.5%
                  </Badge>
                </CardAction>
              </CardHeader>
              <CardFooter className="flex-col items-start gap-1.5 text-sm">
                <div className="line-clamp-1 flex gap-2 font-medium">
                  Trending up this month <IconTrendingUp className="size-4" />
                </div>
                <div className="text-muted-foreground">
                  Visitors for the last 6 months
                </div>
              </CardFooter>
            </Card>

            <div>
              <Card className="@container/card">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                    Projects
                  </CardTitle>
                  <CardAction>
                    <AddTaskDialog />
                  </CardAction>
                </CardHeader>

                <CardFooter className="flex-col items-start gap-1.5 text-sm">
                  <div className="line-clamp-1 flex gap-2 font-medium">
                    Trending up this month <IconTrendingUp className="size-4" />
                  </div>
                  <div className="text-muted-foreground">
                    Visitors for the last 6 months
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
