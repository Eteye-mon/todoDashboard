"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CirclePlus, MoreHorizontal, Plus, Server } from "lucide-react";
import { TaskCard } from "./task-card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";

const initialTasks = {
  todo: [
    {
      id: "1",
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
      id: "2",
      title: "Add more ui/ux mockups",
      description: "Pinterest promotion",
      progress: 4,
      progressColor: "orange" as const,
      date: "25 Aug 2022",
      avatars: ["/images/avatar1.png", "/images/avatar2.png"],
    },
    {
      id: "3",
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
      id: "4",
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
      id: "5",
      title: "Design system update",
      description: "Oreo website project",
      progress: 3,
      progressColor: "orange" as const,
      date: "12 Nov 2022",
      avatars: ["/images/avatar1.png", "/images/avatar2.png"],
    },
    {
      id: "6",
      title: "Create brand guideline",
      description: "Oreo branding project",
      progress: 7,
      progressColor: "orange" as const,
      date: "13 Nov 2022",
      comments: 2,
      views: 13,
      avatars: [],
    },
    {
      id: "7",
      title: "Create wireframe for ios app",
      description: "Oreo ios app project",
      progress: 4,
      progressColor: "red" as const,
      date: "14 Nov 2022",
      avatars: ["/images/avatar1.png", "/images/avatar2.png"],
    },
    {
      id: "8",
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
      id: "9",
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
      id: "10",
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
      id: "11",
      title: "Make twitter banner",
      description: "Twitter marketing",
      progress: 10,
      progressColor: "green" as const,
      date: "8 Jan 2022",
      avatars: ["/images/avatar1.png", "/images/avatar2.png"],
    },
  ],
};

export default function KanbanBoard() {
  const [columns, setColumns] = useState(initialTasks);
  const [position, setPosition] = useState("bottom");

 function handleDragEnd(result: DropResult) {
   const { source, destination } = result;
   if (!destination) return;

   if (source.droppableId === destination.droppableId) {
     // clone array properly
     const items = [...columns[source.droppableId as keyof typeof columns]];
     const [reorderedItem] = items.splice(source.index, 1);
     items.splice(destination.index, 0, reorderedItem);

     setColumns({
       ...columns,
       [source.droppableId]: items,
     });
   } else {
     const sourceItems = [
       ...columns[source.droppableId as keyof typeof columns],
     ];
     const [movedItem] = sourceItems.splice(source.index, 1);

     const destItems = [
       ...columns[destination.droppableId as keyof typeof columns],
     ];
     destItems.splice(destination.index, 0, movedItem);

     setColumns({
       ...columns,
       [source.droppableId]: sourceItems,
       [destination.droppableId]: destItems,
     });
   }
 }


  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6 border-b-2 py-2">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Server size={10} />
            <span className="font-medium">Board view</span>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="h-[18px] w-[18px]  rounded-full bg-[#1C1D2214] dark:bg-white dark:text-muted-foreground"
            >
              <Plus className="h-2 w-2 text-gray-400 dark:text-black" />
            </Button>
            <span>Add View</span>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm">
            Filter
          </Button>
          <div className="flex items-center gap-3 text-[16px]">
            Sort
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-[26px] w-[26px] -mt-1 border-[#1C1D221A] border-2 rounded-full"
                >
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Sort By</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={position}
                  onValueChange={setPosition}
                >
                  <DropdownMenuRadioItem value="top">Z-A</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="bottom">
                    A-Z
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="right">
                    Latest
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <Button
            size="sm"
            className="bg-foreground dark:text-white dark:bg-[#4B69FF] text-background hover:bg-foreground/90 rounded-full"
          >
            New template
          </Button>
        </div>
      </div>

      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(columns).map(([colId, colTasks]) => (
            <Droppable key={colId} droppableId={colId}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="border-[2px] border-dashed border-muted-foreground/25 rounded-[12px] p-3 max-w-[352px]"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium text-[#1C1D2280] dark:text-foreground text-[14px] capitalize">
                      {colId.replace(/([A-Z])/g, " $1")} ({colTasks.length})
                    </h3>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-[18px] w-[18px]  rounded-full bg-[#1C1D2214] dark:bg-white dark:text-muted-foreground"
                      >
                        <Plus className="h-2 w-2 text-gray-400 dark:text-black" />
                      </Button>
                      <span>Add Task</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {colTasks.map((task, index) => (
                      <Draggable
                        key={task.id}
                        draggableId={task.id}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <TaskCard {...task} />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                    {colId === "done" && (
                      <div className="py-8 border-2 border-dashed border-muted-foreground/25 rounded-lg flex items-center justify-center text-muted-foreground h-[178px]">
                        Drag your task here...
                      </div>
                    )}
                  </div>
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}
