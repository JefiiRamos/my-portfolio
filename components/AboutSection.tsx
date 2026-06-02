"use client";

import { Section } from "@/components/Section";
import { useI18n } from "@/lib/i18n/context";

export function AboutSection() {
  const { t } = useI18n();
  const about = t.sections.about;

  return (
    <Section
      id="sobre"
      number="01"
      tag={about.tag}
      title={about.title}
      description={about.description}
    >
      <div className="about-grid">
        <article className="panel panel--accent about-intro">
          <p className="about-intro__label">{about.whoAmI}</p>
          <p className="about-intro__text">{about.intro1}</p>
          <p className="about-intro__text">{about.intro2}</p>
        </article>

        <div className="about-facts">
          {t.facts.map((fact) => (
            <article key={fact.label} className="panel fact-card">
              <p className="fact-card__label">{fact.label}</p>
              <p className="fact-card__value">{fact.value}</p>
              <p className="fact-card__detail">{fact.detail}</p>
            </article>
          ))}
        </div>

        <div className="about-pillars">
          {t.pillars.map((pillar, index) => (
            <article key={pillar.title} className="panel pillar-card">
              <span className="pillar-card__index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="pillar-card__title">{pillar.title}</h3>
              <p className="pillar-card__text">{pillar.description}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
