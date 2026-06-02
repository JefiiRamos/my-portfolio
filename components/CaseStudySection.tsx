"use client";

import { Section } from "@/components/Section";
import { useI18n } from "@/lib/i18n/context";
import { profile } from "@/lib/profile";

export function CaseStudySection() {
  const { t } = useI18n();
  const section = t.sections.caseStudy;

  return (
    <Section
      id="case"
      number="06"
      tag={section.tag}
      title={section.title}
      description={section.description}
    >
      <div className="case-study-grid">
        <article className="panel panel--accent case-study-card case-study-card--intro">
          <p className="case-study-card__label">{section.projectLabel}</p>
          <h3 className="case-study-card__title">{section.project}</h3>
          <p className="case-study-card__text">{section.summary}</p>
          <div className="project-card-v2__links">
            <a
              href={profile.caseStudyLinks.live}
              target="_blank"
              rel="noreferrer"
              className="link-arrow"
            >
              {t.common.viewDemo}
            </a>
            <a
              href={profile.caseStudyLinks.repo}
              target="_blank"
              rel="noreferrer"
              className="link-arrow"
            >
              {t.common.repository}
            </a>
          </div>
        </article>

        <article className="panel case-study-card">
          <p className="case-study-card__label">{section.problemLabel}</p>
          <h3 className="case-study-card__title">{section.problemTitle}</h3>
          <p className="case-study-card__text">{section.problem}</p>
        </article>

        <article className="panel case-study-card">
          <p className="case-study-card__label">{section.solutionLabel}</p>
          <h3 className="case-study-card__title">{section.solutionTitle}</h3>
          <p className="case-study-card__text">{section.solution}</p>
        </article>

        <article className="panel case-study-card">
          <p className="case-study-card__label">{section.criteriaLabel}</p>
          <h3 className="case-study-card__title">{section.criteriaTitle}</h3>
          <p className="case-study-card__text">{section.criteria}</p>
        </article>
      </div>
    </Section>
  );
}
