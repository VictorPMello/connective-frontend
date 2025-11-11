import { Header } from "@/components/header/header";

import { Hero } from "@/components/sections/hero";
import { Solutions } from "@/components/sections/solutions";
import { Resources } from "@/components/sections/resources";
import { About } from "@/components/sections/about";

// import { Pricing } from "@/components/sections/pricing";
// import { FixedThemeToggle } from "@/components/ui/FixedThemeToggle";

import { Cta } from "@/components/sections/cta";
import { Footer } from "@/components/footer/footer";

import { BackgroundGradient } from "@/components/ui/BackgroundGradient";

export default function Home() {
  return (
    <>
      <BackgroundGradient />

      {/* <FixedThemeToggle /> */}
      <Header />
      <main className="w-screen">
        <Hero />

        <Solutions />
        <Resources />
        {/* <Pricing /> */}
        <About />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
