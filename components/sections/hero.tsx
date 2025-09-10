import { CircleDot } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="w-screen h-screen flex flex-col lg:max-w-7xl mx-auto justify-center gap-3 relative">
      <Image
        className="absolute inset-0 z-[-100] h-full object-contain"
        src="/hero/hero.webp"
        width={5000}
        height={5000}
        alt="Picture of the author"
      />

      <h1 className="text-3xl w-fit backdrop-blur-2xl dark:text-shadow-lg text-shadow-sidebar">
        Connect your team, clients, and results in one place.
      </h1>
      <h3 className="text-xl max-w-1/2 dark:text-shadow-lg text-shadow-sidebar">
        Connective is the CRM designed to simplify your workflow, organize
        opportunities, and boost sales with intelligence.
      </h3>
      <div className="flex flex-col gap-3">
        <span className="text-base font-bold dark:text-shadow-lg text-shadow-sidebar">
          <CircleDot className="inline" /> Start your free 14-day trial
        </span>
        <span className="text-base font-bold dark:text-shadow-lg text-shadow-sidebar">
          <CircleDot className="inline" /> Book a demo
        </span>
      </div>
    </section>
  );
}
