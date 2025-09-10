"use client";

import { Separator } from "@/components/ui/separator";
import { DrawerMenu } from "@/components/drawer/drawerMenu";

export function Header() {
  return (
    <header className="fixed w-screen flex justify-center items-center gap-3 overflow-x-hidden mt-5 z-50">
      <Separator
        orientation="horizontal"
        className="data-[orientation=horizontal]:w-[3%] bg-foreground"
      />

      <h1 className="text-4xl">Connective</h1>
      <Separator
        orientation="horizontal"
        className="data-[orientation=horizontal]:w-[30%] bg-foreground"
      />
      <DrawerMenu />
      <Separator
        orientation="horizontal"
        className="data-[orientation=horizontal]:w-[40%] bg-foreground"
      />
    </header>
  );
}
