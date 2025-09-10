import { Header } from "@/components/header/header";
import { FixedThemeToggle } from "@/components/ui/FixedThemeToggle";

export default function Home() {
  return (
    <>
      <FixedThemeToggle />
      <Header />
      <main className="bg-blue-600 w-screen h-screen"></main>
      <main className="bg-blue-500 w-screen h-screen"></main>
      <main className="bg-blue-100 w-screen h-screen"></main>
      <main className="bg-blue-800 w-screen h-screen"></main>
      <main className="bg-blue-300 w-screen h-screen"></main>
      <footer id="about" className="bg-amber-50  h-screen w-screen"></footer>
    </>
  );
}
