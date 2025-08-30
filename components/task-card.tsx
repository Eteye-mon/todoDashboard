"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MoreHorizontal, MessageSquare, Eye, Users } from "lucide-react";
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
    <Card
      className={cn(
        "hover:shadow-md transition-shadow h-[178px] py-0 hover:-translate-y-2 duration-300 transform-3d ",
        className
      )}
    >
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-medium text-foreground text-sm leading-tight">
            {title}
          </h3>
          <Button variant="ghost" size="icon" className="h-6 w-6 -mt-1">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>

        <p className="text-xs text-muted-foreground mb-4">{description}</p>

        {/* Progress */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-muted-foreground">Progress</span>
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
                  <MessageSquare className="h-3 w-3" />
                  <span>{comments}</span>
                </div>
              )}
              {views && (
                <div className="flex items-center space-x-1">
                  <Eye className="h-3 w-3" />
                  <span>{views}</span>
                </div>
              )}
            </div>

            ) : (
            <div className="flex -space-x-2">
              {avatars.slice(0, 2).map((avatar, index) => (
                <Avatar
                  key={index}
                  className="h-6 w-6 border-2 border-background"
                >
                  <AvatarImage src={avatar || "/placeholder.svg"} />
                  <AvatarFallback className="text-xs">U</AvatarFallback>
                </Avatar>
              ))}
              {avatars.length > 2 && (
                <div className="h-6 w-6 rounded-full bg-muted border-2 border-background flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">
                    +{avatars.length - 2}
                  </span>
                </div>
              )}
            </div>
                
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
