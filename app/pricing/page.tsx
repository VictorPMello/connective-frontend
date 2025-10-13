import { FixedThemeToggle } from "@/components/ui/FixedThemeToggle";
import { Header } from "@/components/header/header";
import { PricingTable } from "@/components/table/pricingTable";
import { Footer } from "@/components/footer/footer";
import { Background3D } from "@/components/ui/background3D";

export default function Pricing() {
  return (
    <>
      <Background3D />
      <FixedThemeToggle />
      <Header />
      <main className="w-screen px-32 mx-auto h-screen flex flex-col justify-center items-center">
        <PricingTable />
      </main>
      <Footer />
    </>
  );
}
