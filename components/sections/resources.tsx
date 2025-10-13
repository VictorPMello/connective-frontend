import { Separator } from "@/components/ui/separator";

export function Resources() {
  return (
    <section
      id="resources"
      className="w-screen h-screen
        flex flex-col justify-around items-center gap-3
        lg:max-w-7xl mx-auto
        relative text-center"
    >
      <h2 className="text-4xl">
        Why choose{" "}
        <span className="font-bold text-sidebar-ring dark:text-primary">
          Connective?
        </span>
      </h2>

      <div className="flex gap-3">
        <p className="text-lg flex gap-2 justify-center items-center">
          Manage your projects, clients, and data easily — without needing
          tutorials.
          <Separator
            orientation="vertical"
            className="data-[orientation=vertical]:h-[150%] bg-foreground mx-auto"
          />
        </p>
        <p className="text-lg flex gap-2 justify-center items-center">
          Stay organized with visual boards and detailed client tables that keep
          everything clear.
          <Separator
            orientation="vertical"
            className="data-[orientation=vertical]:h-[150%] bg-foreground mx-auto"
          />
        </p>
        <p className="text-lg flex gap-2 justify-center items-center">
          Make smarter decisions with visual dashboards and performance charts.
          <Separator
            orientation="vertical"
            className="data-[orientation=vertical]:h-[150%] bg-foreground mx-auto"
          />
        </p>
        <p className="text-lg flex gap-2 justify-center items-center">
          Work 100% online, with encrypted data and instant access from any
          device.
        </p>
      </div>
    </section>
  );
}
