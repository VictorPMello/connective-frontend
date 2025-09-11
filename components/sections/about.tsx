import { Separator } from "@/components/ui/separator";

import { Bell, ChartColumnStacked, Users, Zap } from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      className="w-screen h-screen
        flex flex-col justify-around items-center gap-3
        lg:max-w-7xl mx-auto
        relative text-center"
    >
      <h2 className="text-3xl">
        <span className="font-bold text-sidebar-ring dark:text-primary">
          Who
        </span>{" "}
        we are
      </h2>

      {
        // add any emelent 3D?
      }
      <div></div>

      <div className="flex gap-3 max-w-md text-left self-start">
        <p className="text-xl">
          At Connective, we believe that strong relationships are the foundation
          of any successful business. Our goal is to deliver a modern,
          accessible, and efficient solution that helps companies of all sizes
          increase sales and build customer loyalty
        </p>
      </div>
    </section>
  );
}
