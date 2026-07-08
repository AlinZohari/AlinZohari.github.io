import type { Project } from "@/data/portfolio";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-header">
        <div>
          <h3>{project.title}</h3>
          <p className="project-subtitle">{project.subtitle}</p>
        </div>
        <a href={project.repoUrl} target="_blank" rel="noreferrer" className="project-link">
          View Repo
        </a>
      </div>

      <p className="project-description">{project.description}</p>

      <ul className="highlights">
        {project.highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className="project-gallery">
        {project.images.map((image) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            width={600}
            height={360}
            loading="eager"
            decoding="async"
          />
        ))}
      </div>
    </article>
  );
}
