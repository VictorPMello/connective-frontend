"use client";

import { usePathname } from "next/navigation";

import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { IconSearch } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

export function HeaderDashboard() {
  const pathname = usePathname();

  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <div className="ml-auto flex items-center gap-2">
          {pathname === "/dashboard/projects" ? (
            <>
              <Button className="font-bold cursor-pointer">
                Create Project
              </Button>
            </>
          ) : (
            <>
              <Input type="text" placeholder="Find ..." />
              <IconSearch />
            </>
          )}
        </div>
      </div>
    </header>
  );
}
