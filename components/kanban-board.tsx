"use client";

import { Button } from "@/components/ui/button";
import { CirclePlus, Plus } from "lucide-react";
import { TaskCard } from "./task-card";

const tasks = {
  todo: [
    {
      title: "Design new ui presentation",
      description: "Dribbble marketing",
      progress: 7,
      progressColor: "orange" as const,
      date: "24 Aug 2022",
      comments: 7,
      views: 2,
      avatars: [],
    },
    {
      title: "Add more ui/ux mockups",
      description: "Pinterest promotion",
      progress: 4,
      progressColor: "orange" as const,
      date: "25 Aug 2022",
      avatars: ["/images/avatar1.png", "/images/avatar2.png"],
    },
    {
      title: "Design few mobile screens",
      description: "Dropbox mobile app",
      progress: 3,
      progressColor: "red" as const,
      date: "26 Aug 2022",
      comments: 6,
      views: 4,
      avatars: [],
    },
    {
      title: "Create a tweet and promote",
      description: "Twitter marketing",
      progress: 2,
      progressColor: "red" as const,
      date: "27 Aug 2022",
      avatars: ["/images/avatar1.png", "/images/avatar2.png"],
    },
  ],
  inProgress: [
    {
      title: "Design system update",
      description: "Oreo website project",
      progress: 3,
      progressColor: "orange" as const,
      date: "12 Nov 2022",
      avatars: ["/images/avatar1.png", "/images/avatar2.png"],
    },
    {
      title: "Create brand guideline",
      description: "Oreo branding project",
      progress: 7,
      progressColor: "orange" as const,
      date: "13 Nov 2022",
      comments: 2,
      users: 13,
      avatars: [],
    },
    {
      title: "Create wireframe for ios app",
      description: "Oreo ios app project",
      progress: 4,
      progressColor: "red" as const,
      date: "14 Nov 2022",
      avatars: ["/images/avatar1.png", "/images/avatar2.png"],
    },
    {
      title: "Create ui kit for layout",
      description: "Crypto mobile app",
      progress: 3,
      progressColor: "red" as const,
      date: "15 Nov 2022",
      comments: 23,
      views: 12,
      avatars: [],
    },
  ],
  done: [
    {
      title: "Add product to the market",
      description: "UI8 marketplace",
      progress: 10,
      progressColor: "green" as const,
      date: "6 Jan 2022",
      comments: 1,
      views: 5,
      avatars: [],
    },
    {
      title: "Launch product promotion",
      description: "Kickstarter campaign",
      progress: 10,
      progressColor: "green" as const,
      date: "7 Jan 2022",
      comments: 17,
      views: 3,
      avatars: [],
    },
    {
      title: "Make twitter banner",
      description: "Twitter marketing",
      progress: 10,
      progressColor: "green" as const,
      date: "8 Jan 2022",
      avatars: ["/images/avatar1.png", "/images/avatar2.png"],
    },
  ],
};

export function KanbanBoard() {
  return (
    <div className="p-6">
      {/* Board Header */}
      <div className="flex items-center justify-between mb-6 border-b-2 py-2">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="font-medium">Board view</span>
          </div>
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            <Plus className="h-4 w-4 mr-1" />
            Add view
          </Button>
        </div>

        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            Filter
          </Button>
          <Button variant="outline" size="sm">
            Sort
          </Button>
          <Button
            size="sm"
            className="bg-foreground text-background hover:bg-foreground/90 rounded-full"
          >
            New template
          </Button>
        </div>
      </div>

      {/* Kanban Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* To Do Column */}
        <div className="border-[2px] border-dashed border-muted-foreground/25 rounded-[12px] p-3 max-w-[352px]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-[#1C1D2280] dark:text-foreground text-[14px]">
              To do (4)
            </h3>
            <div className="flex items-center gap-1 cursor-pointer">
              <CirclePlus className=" text-[#1C1D2214] w-[18px] h-[18px]" />
              <span className="text-[14px] text-[#1C1D22]">Add New Task</span>
            </div>
          </div>
          <div className="space-y-3">
            {tasks.todo.map((task, index) => (
              <TaskCard key={index} {...task} />
            ))}
          </div>
        </div>

        {/* In Progress Column */}
        <div className="border-[2px] border-dashed border-muted-foreground/25 rounded-[12px] p-3 max-w-[352px]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-[#1C1D2280] dark:text-foreground text-[14px]">
              In progress (4)
            </h3>
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-3">
            {tasks.inProgress.map((task, index) => (
              <TaskCard key={index} {...task} />
            ))}
          </div>
        </div>

        <div className="border-[2px] border-dashed border-muted-foreground/25 rounded-[12px] p-3  max-w-[352px]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-[#1C1D2280] dark:text-foreground text-[14px]">
              Done (3)
            </h3>
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-3">
            {tasks.done.map((task, index) => (
              <TaskCard key={index} {...task} />
            ))}
            <div className="py-8 border-2 border-dashed border-muted-foreground/25 rounded-lg flex items-center justify-center text-muted-foreground h-[178px]">
              Drag your task here...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
