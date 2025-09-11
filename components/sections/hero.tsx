import { CircleDot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="w-screen h-screen flex flex-col lg:max-w-7xl mx-auto justify-center gap-3 relative">
      <Image
        className="absolute inset-0 z-[-50] h-full object-contain"
        src="/hero/hero.webp"
        width={5000}
        height={5000}
        alt="Picture of the author"
      />

      <h1 className="text-4xl w-fit backdrop-blur-2xl dark:text-shadow-lg text-shadow-sidebar">
        <span className="font-bold text-sidebar-ring dark:text-primary">
          Connect your team
        </span>{" "}
        , clients, and results in one place.
      </h1>
      <h3 className="text-xl max-w-1/2 dark:text-shadow-lg text-shadow-sidebar">
        Connective is the CRM designed to simplify your workflow, organize
        opportunities, and boost sales with intelligence.
      </h3>
      <div className="flex flex-col gap-3">
        <span className="text-base font-bold dark:text-shadow-lg text-shadow-sidebar">
          <CircleDot className="inline" />
          <Link
            href="/login"
            className="text-lg cursor-pointer p-2 bg-background rounded-xl hover:bg-background/80"
          >
            Start your free 14-day trial
          </Link>
        </span>
        <span className="text-base font-bold dark:text-shadow-lg text-shadow-sidebar">
          <CircleDot className="inline" /> Book a demo
        </span>
      </div>
    </section>
  );
}
