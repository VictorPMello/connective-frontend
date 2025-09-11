import { FixedThemeToggle } from "@/components/ui/FixedThemeToggle";
import { Header } from "@/components/header/header";
import { PricingTable } from "@/components/table/pricingTable";

export default function Pricing() {
  return (
    <>
      <FixedThemeToggle />
      <Header />
      <main className="w-screen max-w-3xl mx-auto h-screen flex justify-center items-center">
        <PricingTable />
      </main>
      <footer id="about" className="w-screen p-3"></footer>
    </>
  );
}
