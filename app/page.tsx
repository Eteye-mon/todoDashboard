import { Sidebar } from "@/components/sidebar";
import { DashboardHeader } from "@/components/dashboard-header";
import { KanbanBoard } from "@/components/kanban-board";
import { Tomas3DBackground } from "@/components/3d-style";

export default function Home() {
  return (
    <main className="h-screen flex overflow-hidden">
      {/* <Tomas3DBackground /> */}
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <DashboardHeader />
        <div className="flex-1 overflow-auto">
          <KanbanBoard />
        </div>
      </div>
    </main>
  );
}
