"use client";

import * as React from "react";
import {
  // IconCamera,
  // IconChartBar,
  IconDashboard,
  IconDatabase,
  // IconFileAi,
  // IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  // IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { NavMain } from "@/components/nav/navMain";
// import { NavDocuments } from "@/components/nav/navDocuments";
// import { NavSecondary } from "@/components/nav/navSecondary";
import { NavUser } from "@/components/nav/navUser";
import { useAccount } from "@/hooks/use-account";

import { redirect, RedirectType } from "next/navigation";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { account } = useAccount();

  const handleChange = () => {
    redirect("/", RedirectType.replace);
  };

  const data = {
    user: {
      name: account.name,
      email: account.email,
      avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: IconDashboard,
      },
      // {
      //   title: "Lifecycle",
      //   url: "#",
      //   icon: IconListDetails,
      // },
      {
        title: "Clients",
        url: "/dashboard/clients",
        icon: IconUsers,
      },
      {
        title: "Projects",
        url: "/dashboard/projects",
        icon: IconFolder,
      },
      // {
      //   title: "Team",
      //   url: "#",
      //   icon: IconUsers,
      // },
    ],
    navSecondary: [
      {
        title: "Settings",
        url: "#",
        icon: IconSettings,
      },
      {
        title: "Get Help",
        url: "#",
        icon: IconHelp,
      },
      {
        title: "Search",
        url: "#",
        icon: IconSearch,
      },
    ],
    documents: [
      {
        name: "Data Library",
        url: "#",
        icon: IconDatabase,
      },
      {
        name: "Reports",
        url: "#",
        icon: IconReport,
      },
      {
        name: "Word Assistant",
        url: "#",
        icon: IconFileWord,
      },
    ],
  };

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <IconInnerShadowTop className="!size-5" />
                <span
                  className="text-base font-semibold"
                  onClick={handleChange}
                >
                  Connective
                </span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/*
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
        */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
