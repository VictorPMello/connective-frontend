"use client";

import { usePathname } from "next/navigation";

import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { CreateProjectDialog } from "@/components/dialog/createProjectDialog";

// import { IconSearch } from "@tabler/icons-react";
// import { Input } from "@/components/ui/input";

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
              <CreateProjectDialog />
            </>
          ) : (
            <>
              {/*
               <Input type="text" placeholder="Find ..." />
               <IconSearch />
                */}
            </>
          )}
        </div>
      </div>
    </header>
  );
}
