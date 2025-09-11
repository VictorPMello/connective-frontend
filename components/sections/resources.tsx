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

      {
        // add any emelent 3D?
      }
      <div></div>

      <div className="flex gap-3">
        <p className="text-lg flex gap-2 justify-center items-center">
          Simple and intuitive interface
          <Separator
            orientation="vertical"
            className="data-[orientation=vertical]:h-[150%] bg-foreground mx-auto"
          />
        </p>
        <p className="text-lg flex gap-2 justify-center items-center">
          Integration with WhatsApp, email, and other tools
          <Separator
            orientation="vertical"
            className="data-[orientation=vertical]:h-[150%] bg-foreground mx-auto"
          />
        </p>
        <p className="text-lg flex gap-2 justify-center items-center">
          Real-time reports for strategic decisions
          <Separator
            orientation="vertical"
            className="data-[orientation=vertical]:h-[150%] bg-foreground mx-auto"
          />
        </p>
        <p className="text-lg flex gap-2 justify-center items-center">
          100% online and secure access from anywhere
        </p>
      </div>
    </section>
  );
}
