"use client";

import { Section } from "@/components/Section";
import { useI18n } from "@/lib/i18n/context";

export function ProjectsSection() {
  const { t } = useI18n();
  const section = t.sections.projects;

  return (
    <Section
      id="projetos"
      number="04"
      tag={section.tag}
      title={section.title}
      description={section.description}
    >
      <div className="projects-grid">
        {section.items.map((project) => (
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
              {project.live ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="link-arrow"
                >
                  {t.common.viewDemo}
                </a>
              ) : null}
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="link-arrow"
              >
                {t.common.repository}
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
