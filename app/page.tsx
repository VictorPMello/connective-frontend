import { FixedThemeToggle } from "@/components/ui/FixedThemeToggle";
import { Header } from "@/components/header/header";

import { Hero } from "@/components/sections/hero";
import { Solutions } from "@/components/sections/solutions";

export default function Home() {
  return (
    <>
      <FixedThemeToggle />
      <Header />
      <main className="w-screen">
        <Hero />
        <Solutions />
      </main>
      <footer id="about" className="w-screen p-3"></footer>
    </>
  );
}
