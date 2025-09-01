"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Box,
  Grid3X3,
  User,
  Calendar,
  BarChart3,
  Cloud,
  BookOpen,
  Settings,
  Plus,
  ChevronRight,
  ChevronDown,
  Sun,
  Moon,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { TimelineTasks } from "./timeline-desg";

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [projectsOpen, setProjectsOpen] = useState(true);
  const [tasksOpen, setTasksOpen] = useState(true);
  const [activeNavItem, setActiveNavItem] = useState("Projects");
  const [activeItem, setActiveItem] = useState("Design system");
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; 
  }

  const activeTheme = resolvedTheme;

  const navigationItems = [
    { icon: Box, label: "Projects" },
    { icon: Grid3X3, label: "Dashboard" },
    { icon: User, label: "Team" },
    { icon: Calendar, label: "Calendar" },
    { icon: BarChart3, label: "Analytics" },
    { icon: Cloud, label: "Storage" },
    { icon: BookOpen, label: "Documentation" },
    { icon: Settings, label: "Settings" },
  ];

  const getContentForNavItem = (navItem: string) => {
    switch (navItem) {
      case "Projects":
        return {
          title: "Projects",
          sections: [
            {
              name: "Team",
              type: "single",
              hasChevron: true,
            },
            {
              name: "Projects",
              type: "timeline",
              items: [
                { name: "All projects", count: 3, type: "summary" },
                { name: "Design system", type: "project" },
                { name: "User flow", type: "project" },
                { name: "Ux research", type: "project" },
              ],
            },
            {
              name: "Tasks",
              type: "timeline",
              items: [
                { name: "All tasks", count: 11, type: "summary" },
                { name: "To do", count: 4, type: "status" },
                { name: "In progress", count: 4, type: "status" },
                { name: "Done", count: 3, type: "status" },
              ],
            },
            {
              name: "Reminders",
              type: "single",
              hasChevron: true,
            },
            {
              name: "Messengers",
              type: "single",
              hasChevron: true,
            },
          ],
        };
      case "Dashboard":
        return {
          title: "Dashboard",
          sections: [
            {
              name: "Overview",
              type: "single",
              hasChevron: true,
            },
            {
              name: "Analytics",
              type: "collapsible",
              items: [
                { name: "Traffic", type: "metric" },
                { name: "Conversions", type: "metric" },
                { name: "Revenue", type: "metric" },
                { name: "Users", type: "metric" },
              ],
            },
            {
              name: "Reports",
              type: "collapsible",
              items: [
                { name: "Weekly report", type: "report" },
                { name: "Monthly report", type: "report" },
                { name: "Custom reports", type: "report" },
              ],
            },
          ],
        };
      case "Team":
        return {
          title: "Team",
          sections: [
            {
              name: "Members",
              type: "collapsible",
              items: [
                { name: "All members", count: 12, type: "summary" },
                { name: "Designers", count: 4, type: "role" },
                { name: "Developers", count: 6, type: "role" },
                { name: "Managers", count: 2, type: "role" },
              ],
            },
            {
              name: "Permissions",
              type: "single",
              hasChevron: true,
            },
            {
              name: "Invitations",
              type: "single",
              hasChevron: true,
            },
          ],
        };
      case "Calendar":
        return {
          title: "Calendar",
          sections: [
            {
              name: "My Calendar",
              type: "single",
              hasChevron: true,
            },
            {
              name: "Events",
              type: "collapsible",
              items: [
                { name: "Upcoming", count: 5, type: "summary" },
                { name: "Today", count: 2, type: "time" },
                { name: "This week", count: 8, type: "time" },
                { name: "This month", count: 24, type: "time" },
              ],
            },
            {
              name: "Meeting rooms",
              type: "single",
              hasChevron: true,
            },
          ],
        };
      case "Analytics":
        return {
          title: "Analytics",
          sections: [
            {
              name: "Performance",
              type: "collapsible",
              items: [
                { name: "Page views", type: "metric" },
                { name: "Bounce rate", type: "metric" },
                { name: "Session duration", type: "metric" },
              ],
            },
            {
              name: "User behavior",
              type: "single",
              hasChevron: true,
            },
            {
              name: "Conversion tracking",
              type: "single",
              hasChevron: true,
            },
          ],
        };
      case "Storage":
        return {
          title: "Storage",
          sections: [
            {
              name: "Files",
              type: "collapsible",
              items: [
                { name: "Recent files", type: "file" },
                { name: "Shared files", type: "file" },
                { name: "Archived files", type: "file" },
              ],
            },
            {
              name: "Usage",
              type: "single",
              hasChevron: true,
            },
            {
              name: "Backup",
              type: "single",
              hasChevron: true,
            },
          ],
        };
      case "Documentation":
        return {
          title: "Documentation",
          sections: [
            {
              name: "Guides",
              type: "collapsible",
              items: [
                { name: "Getting started", type: "doc" },
                { name: "API reference", type: "doc" },
                { name: "Best practices", type: "doc" },
              ],
            },
            {
              name: "Tutorials",
              type: "single",
              hasChevron: true,
            },
            {
              name: "FAQ",
              type: "single",
              hasChevron: true,
            },
          ],
        };
      case "Settings":
        return {
          title: "Settings",
          sections: [
            {
              name: "Account",
              type: "single",
              hasChevron: true,
            },
            {
              name: "Preferences",
              type: "collapsible",
              items: [
                { name: "Notifications", type: "setting" },
                { name: "Privacy", type: "setting" },
                { name: "Security", type: "setting" },
              ],
            },
            {
              name: "Billing",
              type: "single",
              hasChevron: true,
            },
          ],
        };
      default:
        return { title: "Projects", sections: [] };
    }
  };

  const currentContent = getContentForNavItem(activeNavItem);

  return (
    <div className={cn("flex h-screen bg-background", className)}>
      <div className="w-[90px] bg-[#000] border-r border-sidebar-border flex flex-col items-center py-4 space-y-4">
        <div className="flex space-x-1 mb-4">
          <div className="w-[6px] h-[6px] rounded-full bg-[#ffffff]"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-gray-400"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-gray-400"></div>
        </div>
        <div className="py-10">
          <Logo />
        </div>
        {navigationItems.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            size="icon"
            onClick={() => setActiveNavItem(item.label)}
            className={cn(
              "w-10 h-10 text-muted-foreground hover:bg-gray-500 rounded-full hover:text-white",
              activeNavItem === item.label && "bg-gray-500 text-white"
            )}
          >
            <item.icon className="h-[22px] w-[22px]" />
          </Button>
        ))}

        <div className="mt-auto">
          <Button
            variant="ghost"
            size="icon"
            className="w-10 h-10 text-muted-foreground hover:bg-gray-500 rounded-full hover:text-white"
          >
            <LogOut className="h-[22px] w-[22px]" />
          </Button>
        </div>
      </div>

      <div className="flex-1 bg-background p-6 overflow-y-auto w-[318px]">
        <div className="flex items-center justify-between mb-3">
          <h1 className="text-[30px] font-bold text-foreground">
            {currentContent.title}
          </h1>
          <Button
            variant="outline"
            className="rounded-full bg-[#1C1D2214] w-[28px] h-[28px]"
          >
            <Plus className="h-4 w-4 text-[#1C1D22]" />
          </Button>
        </div>

        {currentContent.sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-3">
            {section.type === "single" ? (
              <div className="flex items-center justify-between py-3 text-muted-foreground hover:text-foreground cursor-pointer">
                <span className="text-[16px]">{section.name}</span>
                {section.hasChevron && <ChevronRight className="h-4 w-4" />}
              </div>
            ) : section.type === "timeline" ? (
              <div>
                <div className="flex items-center justify-between w-full py-2">
                  <h2 className="text-[16px] font-semibold text-foreground">
                    {section.name}
                  </h2>
                  {tasksOpen ? (
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  )}
                </div>
                {tasksOpen && <TimelineTasks />}
              </div>
            ) : (
              <Collapsible
                open={
                  section.name === "Projects"
                    ? projectsOpen
                    : section.name === "Tasks"
                    ? tasksOpen
                    : true
                }
                onOpenChange={
                  section.name === "Projects"
                    ? setProjectsOpen
                    : section.name === "Tasks"
                    ? setTasksOpen
                    : undefined
                }
              >
                <CollapsibleTrigger className="flex items-center justify-between w-full py-2 text-left">
                  <h2 className="text-xl font-semibold text-foreground">
                    {section.name}
                  </h2>
                  {(
                    section.name === "Projects"
                      ? projectsOpen
                      : section.name === "Tasks"
                      ? tasksOpen
                      : true
                  ) ? (
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  )}
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-2 mt-4">
                  {section.items?.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className={cn(
                        "flex items-center justify-between py-2 px-3 rounded-full cursor-pointer transition-colors",
                        item.type === "summary"
                          ? "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                          : activeItem === item.name &&
                            activeNavItem === "Projects"
                          ? "bg-accent text-accent-foreground font-medium"
                          : "text-foreground hover:bg-muted/50"
                      )}
                      onClick={() =>
                        item.type === "project" && setActiveItem(item.name)
                      }
                    >
                      <span className="text-[#1C1D2280] dark:text-muted-foreground text-[16px]">
                        {item.name}
                      </span>
                      {item.count && (
                        <span className="text-sm">({item.count})</span>
                      )}
                    </div>
                  ))}
                </CollapsibleContent>
              </Collapsible>
            )}
          </div>
        ))}

        <div className="mt-auto pt-8 ">
          <div
            className="flex items-center bg-gray-100 dark:bg-[#2b2c30] rounded-full p-1 shadow cursor-pointer w-full  relative h-[42px]"
            onClick={() => setTheme(activeTheme === "light" ? "dark" : "light")}
          >
            <div
              className={`absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-white dark:bg-[#38393c] h-[34px] shadow transition-all duration-300 ease-in-out ${
                theme === "light" ? "left-1" : "left-[calc(50%+3px)]"
              }`}
            ></div>

            <div
              className={`flex-1 flex items-center justify-center gap-1 z-10 font-semibold ${
                theme === "light" ? "text-black " : "text-[#959597]"
              }`}
            >
              <Sun className="h-4 w-4" />
              <span>Light</span>
            </div>

            <div
              className={`flex-1 flex items-center justify-center gap-1 z-10 ${
                theme === "dark"
                  ? "text-black dark:text-white font-semibold"
                  : "text-gray-400"
              }`}
            >
              <Moon className="h-4 w-4" />
              <span>Dark</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Logo() {
  return (
    <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 8.88887L14 4V5.46663L22.5 9.62219L14 13.7777V26L24 21.1111V8.88887Z" fill="white"/>
      <path d="M0 17.1111L10 22V20.5334L1.49996 16.3778L10 12.2222V-7.62939e-06L0 4.88887V17.1111Z" fill="white"/>
    </svg>
  )
}
