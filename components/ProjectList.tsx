import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectList() {
  return (
    <section className="projects" id="projects" aria-labelledby="projects-heading">
      <h2 id="projects-heading" className="section-title">
        <span>Projects</span>
      </h2>
      <ul className="project-list">
        {projects.map((project, index) => (
          <li key={project.id}>
            <ProjectCard project={project} flipped={index % 2 === 1} />
          </li>
        ))}
      </ul>
    </section>
  );
}
