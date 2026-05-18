import { Section } from "@/components/Section";
import { featuredCaseStudy } from "@/lib/profile";

export function CaseStudySection() {
  return (
    <Section
      id="case"
      number="05"
      tag="Case em foco"
      title="Projeto não é só vitrine. Também é raciocínio, decisão e intenção."
      description="Em vez de apenas listar tecnologia, este bloco mostra como penso produto e interface em um projeto real."
    >
      <div className="case-study-grid">
        <article className="panel panel--accent case-study-card case-study-card--intro">
          <p className="case-study-card__label">Projeto</p>
          <h3 className="case-study-card__title">{featuredCaseStudy.project}</h3>
          <p className="case-study-card__text">{featuredCaseStudy.summary}</p>
          <div className="project-card-v2__links">
            <a
              href={featuredCaseStudy.live}
              target="_blank"
              rel="noreferrer"
              className="link-arrow"
            >
              Ver demo
            </a>
            <a
              href={featuredCaseStudy.repo}
              target="_blank"
              rel="noreferrer"
              className="link-arrow"
            >
              Repositório
            </a>
          </div>
        </article>

        <article className="panel case-study-card">
          <p className="case-study-card__label">Problema</p>
          <h3 className="case-study-card__title">{featuredCaseStudy.problemTitle}</h3>
          <p className="case-study-card__text">{featuredCaseStudy.problem}</p>
        </article>

        <article className="panel case-study-card">
          <p className="case-study-card__label">Solução</p>
          <h3 className="case-study-card__title">{featuredCaseStudy.solutionTitle}</h3>
          <p className="case-study-card__text">{featuredCaseStudy.solution}</p>
        </article>

        <article className="panel case-study-card">
          <p className="case-study-card__label">Critérios</p>
          <h3 className="case-study-card__title">{featuredCaseStudy.criteriaTitle}</h3>
          <p className="case-study-card__text">{featuredCaseStudy.criteria}</p>
        </article>
      </div>
    </Section>
  );
}
