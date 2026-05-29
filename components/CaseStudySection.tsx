import { Section } from "@/components/Section";
import { featuredCaseStudy } from "@/lib/profile";

export function CaseStudySection() {
  return (
    <Section
      id="case"
      number="06"
      tag="Case em foco"
      title="Projeto, para mim, tambem e argumento. Ele precisa provar leitura de produto, decisao visual e execucao."
      description="Em vez de so exibir stack, este bloco mostra como raciocino quando uma interface precisa parecer melhor e funcionar melhor."
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
              Repositorio
            </a>
          </div>
        </article>

        <article className="panel case-study-card">
          <p className="case-study-card__label">Problema</p>
          <h3 className="case-study-card__title">{featuredCaseStudy.problemTitle}</h3>
          <p className="case-study-card__text">{featuredCaseStudy.problem}</p>
        </article>

        <article className="panel case-study-card">
          <p className="case-study-card__label">Solucao</p>
          <h3 className="case-study-card__title">{featuredCaseStudy.solutionTitle}</h3>
          <p className="case-study-card__text">{featuredCaseStudy.solution}</p>
        </article>

        <article className="panel case-study-card">
          <p className="case-study-card__label">Criterios</p>
          <h3 className="case-study-card__title">{featuredCaseStudy.criteriaTitle}</h3>
          <p className="case-study-card__text">{featuredCaseStudy.criteria}</p>
        </article>
      </div>
    </Section>
  );
}
