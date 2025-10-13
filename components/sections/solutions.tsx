import { Separator } from "@/components/ui/separator";

import {
  // Bell,
  ChartColumnStacked,
  ClipboardList,
  FolderClosed,
  //   Users,
  //   Zap,
} from "lucide-react";

export function Solutions() {
  return (
    <section
      id="solutions"
      className="w-screen h-screen
        flex flex-col justify-around items-center gap-3
        lg:max-w-7xl mx-auto
        relative text-center"
    >
      <h2 className="text-4xl">
        <span className="font-bold text-sidebar-ring dark:text-primary">
          Everything
        </span>{" "}
        you need to organize your clients and projects all in one place.
      </h2>

      <div className="flex gap-3 p-3">
        <div className="flex flex-col gap-6">
          <p className="text-xl flex flex-col gap-2 justify-center w-2/3 mx-auto">
            <span className="font-bold flex gap-2 items-center justify-center">
              <ChartColumnStacked />
              Client Insights
            </span>
            <Separator
              orientation="horizontal"
              className="data-[orientation=horizontal]:w-[75%] bg-foreground mx-auto my-3"
            />
            See total clients and project metrics at a glance, track your growth
            over time.
          </p>
          <p className="mt-3 text-xl flex flex-col gap-2 justify-center w-2/3 mx-auto">
            <span className="font-bold flex gap-2 items-center justify-center">
              <ClipboardList />
              Organized Client List
            </span>
            <Separator
              orientation="horizontal"
              className="data-[orientation=horizontal]:w-[75%] bg-foreground mx-auto my-3"
            />
            Manage all your client details in one simple table, from contact
            info to history.
          </p>

          <p className="mt-3 text-xl flex flex-col gap-2 justify-center w-2/3 mx-auto">
            <span className="font-bold flex gap-2 items-center justify-center">
              <FolderClosed />
              Visual Project Board
            </span>
            <Separator
              orientation="horizontal"
              className="data-[orientation=horizontal]:w-[75%] bg-foreground mx-auto my-3"
            />
            Use an intuitive Kanban to follow every task, status, and progress
            in real time.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {/*
          
          <p className="text-lg flex flex-col gap-2 justify-center w-2/3 mx-auto">
            <span className="font-bold flex gap-2 items-center justify-center">
              <Bell />
              Smart Alerts
            </span>
            <Separator
              orientation="horizontal"
              className="data-[orientation=horizontal]:w-[75%] bg-foreground mx-auto my-3"
            />
            Get notifications for follow-ups and important deadlines.
          </p>

          */}
        </div>
      </div>
    </section>
  );
}
