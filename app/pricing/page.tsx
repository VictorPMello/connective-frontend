import { FixedThemeToggle } from "@/components/ui/FixedThemeToggle";
import { Header } from "@/components/header/header";
import { PricingTable } from "@/components/table/pricingTable";
import { Footer } from "@/components/footer/footer";
import { BackgroundGradient } from "@/components/ui/BackgroundGradient";

export default function Pricing() {
  return (
    <>
      <BackgroundGradient />
      <FixedThemeToggle />
      <Header />
      <main className="w-screen px-32 mx-auto h-screen flex flex-col justify-center items-center">
        <PricingTable />
      </main>
      <Footer />
    </>
  );
}
