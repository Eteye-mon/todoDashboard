"use client";

import { Search, Bell, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";

export function DashboardHeader() {
    const [value, setValue] = useState("");

  return (
    <div className="flex items-center justify-between p-4 bg-background">
      <h1 className="text-2xl font-semibold text-foreground">
        Welcome back, Vincent 👋
      </h1>

      <div className="flex items-center space-x-4">
        {/* Search */}
        <div
          className={`
        relative overflow-hidden 
        rounded-full flex items-center duration-300 group
        ${value ? "w-[270px]" : "w-[60px] hover:w-[270px]"}
      `}
        >
          <Search className={`absolute top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground transition-all duration-300 ${value? "left-3": "left-1/2 -translate-x-1/2 group-hover:left-3 group-hover:translate-x-0"
          }
        `}
          />

          <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search..."
            className={`
          pl-10 bg-muted/50 border-0 focus-visible:ring-0 transition-all duration-300
          ${
            value
              ? "w-64 opacity-100"
              : "w-0 opacity-0 group-hover:w-64 group-hover:opacity-100"
          }
        `}
          />
        </div>

        {/* Notifications */}
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>

        {/* Date */}
        <div className="flex items-center space-x-2 text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span className="text-sm">19 May 2022</span>
        </div>

        {/* User Avatar */}
        <Avatar className="h-8 w-8">
          <AvatarImage src="/images/profile-img.png" alt="Vincent" />
          <AvatarFallback>V</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
