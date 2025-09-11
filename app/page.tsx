import { FixedThemeToggle } from "@/components/ui/FixedThemeToggle";
import { Header } from "@/components/header/header";

import { Hero } from "@/components/sections/hero";
import { Solutions } from "@/components/sections/solutions";
import { Resources } from "@/components/sections/resources";
import { About } from "@/components/sections/about";
import { Pricing } from "@/components/sections/pricing";

import { Footer } from "@/components/footer/footer";

export default function Home() {
  return (
    <>
      <FixedThemeToggle />
      <Header />
      <main className="w-screen">
        <Hero />
        <Solutions />
        <Resources />
        <Pricing />
        <About />
      </main>
      <Footer />
    </>
  );
}
