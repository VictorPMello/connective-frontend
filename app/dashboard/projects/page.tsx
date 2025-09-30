"use client";

import { useMemo, useState } from "react";

import { ProjectCardList } from "@/components/cards/project-card-list";
import { ProjectCardStatus } from "@/components/cards/project-card-status";
import { HeaderDashboard } from "@/components/header/headerDashboard";
import { Card } from "@/components/ui/card";

import { useProject } from "@/hooks/use-project";

export default function Projects() {
  const { projects, selectedProject } = useProject();

  const [searchProject, setSearchProject] = useState("");

  const title = selectedProject.title ? selectedProject.title : "";
  const description = selectedProject.description
    ? selectedProject.description
    : "";

  const filteredProjects = useMemo(() => {
    if (!searchProject.trim()) return projects;
    return projects.filter((project) =>
      project.title.toLowerCase().includes(searchProject.toLowerCase()),
    );
  }, [projects, searchProject]);

  return (
    <>
      <HeaderDashboard />
      <div className="flex flex-1 flex-col px-3">
        <div className="@container/main flex flex-1 flex-col gap-2">
          {projects.length === 0 ? (
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <Card className="@container/card flex-row h-72"></Card>
              <Card className="@container/card h-[47rem]"></Card>
            </div>
          ) : (
            <>
              <div
                className="flex flex-col gap-4 py-4 md:gap-6 md:py-6"
                key={selectedProject.id}
              >
                <ProjectCardStatus
                  selectedProjectId={selectedProject.id}
                  projects={filteredProjects}
                  description={description}
                  title={title}
                  searchProject={searchProject}
                  setSearchProject={setSearchProject}
                />
                {selectedProject.id && (
                  <ProjectCardList
                    projectId={selectedProject.id}
                    projects={projects}
                  />
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
