"use client";

import { Section } from "@/components/Section";
import { useI18n } from "@/lib/i18n/context";

export function DifferentialsSection() {
  const { t } = useI18n();
  const section = t.sections.differentials;

  return (
    <Section
      id="diferenciais"
      number="02"
      tag={section.tag}
      title={section.title}
      description={section.description}
    >
      <div className="differentials-layout">
        <div className="differentials-grid">
          {section.items.map((item, index) => (
            <article key={item.title} className="panel differential-card">
              <span className="differential-card__index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="differential-card__title">{item.title}</h3>
              <p className="differential-card__text">{item.description}</p>
            </article>
          ))}
        </div>

        <div className="differentials-side">
          <article className="panel panel--accent principles-card">
            <p className="principles-card__label">{section.principlesLabel}</p>
            <ul className="principles-card__list">
              {section.principles.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="panel quality-card-v2">
            <p className="quality-card-v2__label">{section.qualityLabel}</p>
            <div className="quality-card-v2__grid">
              {section.qualitySignals.map((item) => (
                <div key={item} className="quality-card-v2__item">
                  <span className="quality-card-v2__dot" aria-hidden />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </Section>
  );
}
