import Link from "next/link";
import ProjectVisual from "@/components/ProjectVisual";
import type { Project } from "@/data/projects";

export default function ProjectCard({
  project,
  flipped,
}: {
  project: Project;
  flipped: boolean;
}) {
  return (
    <article className={`project-card${flipped ? " project-card--flip" : ""}`}>
      <div className="project-card__body">
        <h3>{project.title}</h3>
        <p>{project.teaser}</p>
        <Link className="btn btn-outline" href={`/projects/${project.id}`}>
          View Project
          <span className="sr-only">: {project.title}</span>
        </Link>
      </div>
      <div className="project-card__media" aria-hidden="true">
        <ProjectVisual id={project.id} />
      </div>
    </article>
  );
}
