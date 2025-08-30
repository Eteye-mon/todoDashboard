"use client";

import { cn } from "@/lib/utils";

interface TimelineTasksProps {
  className?: string;
}

export function TimelineTasks({ className }: TimelineTasksProps) {
  const taskSteps = [
    { name: "All tasks", count: 11, status: "summary", isActive: false },
    { name: "To do", count: 4, status: "todo", isActive: false },
    { name: "In progress", count: 4, status: "progress", isActive: true },
    { name: "Done", count: 3, status: "done", isActive: false },
  ];

  return (
    <div className={cn("relative py-2", className)}>
      {/* Vertical timeline line */}
      <div className="absolute left-3 top-0 bottom-0 w-px bg-gray-300"></div>

      {taskSteps.map((step, index) => (
        <div key={index} className="relative flex items-center py-4">
          {/* Horizontal connector line */}
          <div className="absolute left-3 w-6 h-px bg-gray-300"></div>

          {/* Step content with background for active state */}
          <div
            className={cn(
              "ml-10 px-3 py-1 rounded-full flex items-center justify-between ",
              step.isActive && "bg-gray-100"
            )}
          >
            <span
              className={cn(
                "text-sm font-medium",
                step.isActive ? "text-black" : "text-gray-500"
              )}
            >
              {step.name}
            </span>
            <span className="text-sm text-gray-500">({step.count})</span>
          </div>
        </div>
      ))}
    </div>
  );
}
