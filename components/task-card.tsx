"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  MoreHorizontal,
  MessageSquare,
  Eye,
  Users,
  User,
  List,
  Paperclip,
  MessageSquareText,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface TaskCardProps {
  title: string;
  description: string;
  progress: number;
  progressColor: "orange" | "green" | "red";
  date: string;
  comments?: number;
  views?: number;
  users?: number;
  avatars: string[];
  className?: string;
}

export function TaskCard({
  title,
  description,
  progress,
  progressColor,
  date,
  comments,
  views,
  users,
  avatars,
  className,
}: TaskCardProps) {
  const progressColorClass = {
    orange: "bg-[#FFA048]",
    green: "bg-[#78D700]",
    red: "bg-red-500",
  }[progressColor];

  return (
    <div className=" border-[#1C1D220F] dark:hover:border-muted-foreground/25  text-card-foreground flex flex-col gap-6 rounded-xl border-[2px]  hover:border-dashed">
      <Card
        className={cn(
          " hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-8 hover:translate-x-5 hover:z-10 transition-all duration-300 relative shadow-sm h-[178px] max-w-[320px] py-0  transform-3d cursor-pointer border-0",
          className
        )}
      >
        <CardContent className="p-4">
          <div className="flex items-start justify-between">
            <h3 className="font-medium text-foreground text-[16px] leading-tight">
              {title}
            </h3>
            <Button
              variant="outline"
              size="icon"
              className="h-[26px] w-[26px] -mt-1 border-[#1C1D221A] border-2 rounded-full"
            >
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>

          <p className="text-[14px] text-[#1C1D2280] dark:text-muted-foreground mb-4">
            {description}
          </p>

          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex gap-2 items-center">
                <List
                  size={16}
                  className="text-[#1C1D2280] dark:text-muted-foreground"
                />
                <span className="text-[14px] text-[#1C1D2280] dark:text-muted-foreground">
                  Progress
                </span>
              </div>
              <span className="text-xs font-medium">{progress}/10</span>
            </div>
            <div className="w-full bg-muted rounded-full h-1.5">
              <div
                className={cn("h-1.5 rounded-full", progressColorClass)}
                style={{ width: `${(progress / 10) * 100}%` }}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">{date}</span>

            <div className="flex items-center space-x-3">
              {avatars.length < 1 ? (
                <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                  {comments && (
                    <div className="flex items-center space-x-1">
                      <MessageSquareText className="h-3 w-3" />
                      <span>{comments}</span>
                    </div>
                  )}
                  {views && (
                    <div className="flex items-center space-x-1">
                      <Paperclip className="h-3 w-3" />
                      <span>{views}</span>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex -space-x-2">
                  {avatars.map((avatar, index) => (
                    <Avatar key={index} className="ring-background ring-2">
                      <AvatarImage src={avatar} alt={avatar} />
                      <AvatarFallback className="text-xs">
                        <User size={12} />
                      </AvatarFallback>
                    </Avatar>
                  ))}
                  <Avatar className="ring-background ring-2">
                    <AvatarFallback className="text-[12px]  bg-white  dark:bg-white/10  dark:backdrop-blur-md dark:border dark:border-white/20">
                      +{avatars.length}
                    </AvatarFallback>
                  </Avatar>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
