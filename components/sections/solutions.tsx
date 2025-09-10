import { Separator } from "@/components/ui/separator";

import { Bell, ChartColumnStacked, Users, Zap } from "lucide-react";

export function Solutions() {
  return (
    <section
      id="solutions"
      className="w-screen h-screen
        flex flex-col justify-around items-center gap-3
        lg:max-w-7xl mx-auto
        relative text-center"
    >
      <h2 className="text-3xl">
        <span className="font-bold text-sidebar-ring dark:text-primary">
          Everything
        </span>{" "}
        you need to manage relationships and sales. clients, and results in one
        place.
      </h2>

      {
        // add any emelent 3D?
      }
      <div></div>

      <div className="flex gap-3">
        <p className="text-lg flex flex-col gap-2 justify-center items-center">
          <span className="font-bold flex gap-2 items-center justify-center">
            <ChartColumnStacked />
            Sales Management
          </span>
          <Separator
            orientation="horizontal"
            className="data-[orientation=horizontal]:w-[75%] bg-foreground mx-auto"
          />
          Track every stage of the pipeline and never miss an opportunity.
        </p>
        <p className="text-lg flex flex-col gap-2 justify-center">
          <span className="font-bold flex gap-2 items-center justify-center">
            <Users />
            Customer Hub
          </span>
          <Separator
            orientation="horizontal"
            className="data-[orientation=horizontal]:w-[75%] bg-foreground mx-auto"
          />
          Keep all client information in one place, with history and
          interactions.
        </p>
        <p className="text-lg flex flex-col gap-2 justify-center">
          <span className="font-bold flex gap-2 items-center justify-center">
            <Zap />
            Task Automation
          </span>
          <Separator
            orientation="horizontal"
            className="data-[orientation=horizontal]:w-[75%] bg-foreground mx-auto"
          />
          Spend less time on repetitive tasks and more time closing deals.
        </p>
        <p className="text-lg flex flex-col gap-2 justify-center">
          <span className="font-bold flex gap-2 items-center justify-center">
            <Bell />
            Smart Alerts
          </span>
          <Separator
            orientation="horizontal"
            className="data-[orientation=horizontal]:w-[75%] bg-foreground mx-auto"
          />
          Get notifications for follow-ups and important deadlines.
        </p>
      </div>
    </section>
  );
}
