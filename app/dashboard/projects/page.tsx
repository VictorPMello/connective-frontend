import { ProjectCardList } from "@/components/cards/project-card-list";
import { ProjectCardStatus } from "@/components/cards/project-card-status";
import { HeaderDashboard } from "@/components/header/headerDashboard";

export default function Projects() {
  return (
    <>
      <HeaderDashboard />
      <div className="flex flex-1 flex-col px-3">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <ProjectCardStatus />
            <ProjectCardList />
          </div>
        </div>
      </div>
    </>
  );
}
