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
          Choose the plan
        </span>{" "}
        that fits your moment — and scale seamlessly as your business evolves.
      </h2>

      <div className="flex gap-16">
        <div className="flex flex-col gap-4 text-xl">
          <p className="flex flex-col gap-2 justify-center items-center max-w-sm">
            <span className="font-bold flex gap-2 items-center justify-center">
              Starter
            </span>
            <Separator
              orientation="horizontal"
              className="data-[orientation=horizontal]:w-[75%] bg-foreground mx-auto"
            />
            Organize your clients and projects with simple tools and real-time
            insights.
          </p>

          <h4 className=" font-bold">Includes:</h4>
          <ul>
            <li>• Kanban projects</li>
            <li>• Client management table</li>
            <li>• Basic analytics</li>
            <li>• Email & WhatsApp integration</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 text-xl">
          <p className="text-xl flex flex-col gap-2 justify-center items-center max-w-sm">
            <span className="font-bold flex gap-2 items-center justify-center">
              Professional
            </span>
            <Separator
              orientation="horizontal"
              className="data-[orientation=horizontal]:w-[75%] bg-foreground mx-auto"
            />
            Optimize your workflow with advanced reports, automations, and
            collaborative tools.
          </p>

          <h4 className="font-bold">Includes:</h4>
          <ul>
            <li>• Everything in Starter</li>
            <li>• Team collaboration</li>
            <li>• Advanced analytics</li>
            <li>• Custom dashboards</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 text-xl">
          <p className="text-xl flex flex-col gap-2 justify-center items-center max-w-sm">
            <span className="font-bold flex gap-2 items-center justify-center">
              Enterprise
            </span>
            <Separator
              orientation="horizontal"
              className="data-[orientation=horizontal]:w-[75%] bg-foreground mx-auto"
            />
            Scale your operations with custom integrations, priority support,
            and unlimited users.
          </p>

          <h4 className="font-bold">Includes:</h4>
          <ul>
            <li>• Everything in Professional</li>
            <li>• API & advanced integrations</li>
            <li>• Unlimited users</li>
            <li>• Dedicated support</li>
          </ul>
        </div>
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
