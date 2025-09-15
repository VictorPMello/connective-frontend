import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export function Pricing() {
  return (
    <section
      id="pricing"
      className="w-screen h-screen
        flex flex-col justify-around items-center gap-3
        lg:max-w-7xl mx-auto
        relative text-center"
    >
      <h2 className="text-4xl">
        <span className="font-bold text-sidebar-ring dark:text-primary">
          Plans
        </span>{" "}
        that grow with your business
      </h2>

      <div className="flex gap-6">
        <p className="text-xl flex flex-col gap-2 justify-center items-center max-w-sm">
          <span className="font-bold flex gap-2 items-center justify-center">
            Starter
          </span>
          <Separator
            orientation="horizontal"
            className="data-[orientation=horizontal]:w-[75%] bg-foreground mx-auto"
          />
          Ideal for freelancers and small businesses.
        </p>
        <p className="text-xl flex flex-col gap-2 justify-center items-center max-w-sm">
          <span className="font-bold flex gap-2 items-center justify-center">
            Professional
          </span>
          <Separator
            orientation="horizontal"
            className="data-[orientation=horizontal]:w-[75%] bg-foreground mx-auto"
          />
          Perfect for sales and support teams.
        </p>
      </div>

      <Link
        href="/pricing"
        className="text-2xl cursor-pointer p-6 bg-primary border rounded-2xl hover:bg-primary/80"
      >
        Get Started
      </Link>
    </section>
  );
}
