import { projects } from "@/lib/profile";
import { Section } from "@/components/Section";

export function ProjectsSection() {
  return (
    <Section
      id="projetos"
      number="04"
      tag="Projetos"
      title="Entregas reais publicadas no GitHub e em produção."
      description="Seleção dos principais repositórios — com demos ao vivo quando disponíveis. A lista completa está na seção GitHub, atualizada pela API."
    >
      <div className="projects-grid">
        {projects.map((project) => (
          <article
            key={project.title}
            className={`panel project-card-v2${project.featured ? " project-card-v2--featured" : ""}`}
          >
            <div className="project-card-v2__head">
              <div>
                <p className="project-card-v2__category">{project.category}</p>
                <h3 className="project-card-v2__title">{project.title}</h3>
              </div>
              <span className="project-card-v2__year">{project.year}</span>
            </div>

            <p className="project-card-v2__description">{project.description}</p>

            <div className="project-card-v2__techs">
              {project.tech.map((tech) => (
                <span key={tech} className="chip">
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-card-v2__links">
              {"live" in project && project.live ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="link-arrow"
                >
                  Ver demo
                </a>
              ) : null}
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="link-arrow"
              >
                Repositório
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
