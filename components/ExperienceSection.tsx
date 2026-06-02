"use client";

import { Section } from "@/components/Section";
import { useI18n } from "@/lib/i18n/context";

export function ExperienceSection() {
  const { t } = useI18n();
  const section = t.sections.experience;

  return (
    <Section
      id="trajetoria"
      number="07"
      tag={section.tag}
      title={section.title}
      description={section.description}
    >
      <div className="timeline-v2">
        {section.items.map((item, index) => (
          <article key={`${item.period}-${item.title}`} className="timeline-v2__item">
            <div className="timeline-v2__rail" aria-hidden>
              <span className="timeline-v2__dot" />
              {index < section.items.length - 1 ? (
                <span className="timeline-v2__line" />
              ) : null}
            </div>

            <div className="panel timeline-v2__card">
              <div className="timeline-v2__meta">
                <span className="timeline-v2__period">{item.period}</span>
                <span
                  className={`timeline-v2__type timeline-v2__type--${item.typeKey}`}
                >
                  {item.type}
                </span>
              </div>

              <h3 className="timeline-v2__title">{item.title}</h3>
              <p className="timeline-v2__company">{item.company}</p>
              <p className="timeline-v2__description">{item.description}</p>

              <ul className="timeline-v2__highlights">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
