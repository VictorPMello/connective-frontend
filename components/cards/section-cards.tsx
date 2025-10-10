import { Client } from "@/types/client/clientType";
import { Project } from "@/types/project/projectType";

import { ProjectStatsCard } from "@/components/cards/projectStatsCard";
import { ClientsStatsCard } from "@/components/cards/clientsStatsCard";

interface SectionCardsProps {
  clients: Client[];
  projects: Project[];
}

export function SectionCards({ clients, projects }: SectionCardsProps) {
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <ClientsStatsCard clients={clients} />
      <ProjectStatsCard projects={projects} />
    </div>
  );
}
