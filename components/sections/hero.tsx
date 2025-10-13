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

      <h1 className="text-4xl w-fit - dark:text-shadow-lg text-shadow-sidebar">
        <span className="font-bold text-sidebar-ring dark:text-primary">
          Connect your clients, goals, and growth
        </span>{" "}
        all in one place.
      </h1>
      <h3 className="text-xl max-w-1/2 dark:text-shadow-lg text-shadow-sidebar">
        Connective helps freelancers and small teams simplify their workflow,
        organize opportunities, and grow smarter — not harder.
      </h3>
      <div className="flex flex-col gap-3">
        <span className="text-base font-bold dark:text-shadow-lg text-shadow-sidebar">
          <Link
            href="/login"
            className="bg-primary text-lg cursor-pointer p-2 rounded-xl hover:bg-primary/80"
          >
            Start your free 14-day trial
          </Link>
        </span>
      </div>
    </section>
  );
}
