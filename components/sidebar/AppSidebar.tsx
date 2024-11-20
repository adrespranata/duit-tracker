"use client";

import React from "react";
import { Home, TableOfContents, Notebook } from "lucide-react";
import {
  Sidebar,
  SidebarFooter,
  SidebarContent,
} from "@/components/ui/sidebar";
import { NavUser } from "../NavUser";
import { NavMain } from "./NavMain";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: Home,
      isActive: true,
    },
    {
      title: "Transactions",
      url: "/transactions",
      icon: Notebook,
    },
    {
      title: "Manage",
      url: "/manage",
      icon: TableOfContents,
    },
  ],
};

function AppSidebar() {
  return (
    <>
      <DesktopNavbar />
    </>
  );
}

function DesktopNavbar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}

export default AppSidebar;
