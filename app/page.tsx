import { Header } from "@/components/header/header";
import { FixedThemeToggle } from "@/components/ui/FixedThemeToggle";

export default function Home() {
  return (
    <>
      <FixedThemeToggle />
      <Header />
    </>
  );
}
