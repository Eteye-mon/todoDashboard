"use client";

import { Search, Bell, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function DashboardHeader() {
  return (
    <div className="flex items-center justify-between p-4 bg-background">
      <h1 className="text-2xl font-semibold text-foreground">
        Welcome back, Vincent 👋
      </h1>

      <div className="flex items-center space-x-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search..." className="pl-10 w-64 bg-muted/50" />
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
          <AvatarImage src="/diverse-user-avatars.png" alt="Vincent" />
          <AvatarFallback>V</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
