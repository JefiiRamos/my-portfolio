"use client";

import { Section } from "@/components/Section";
import { useI18n } from "@/lib/i18n/context";

export function StackSection() {
  const { t } = useI18n();
  const section = t.sections.stack;

  return (
    <Section
      id="stack"
      number="03"
      tag={section.tag}
      title={section.title}
      description={section.description}
    >
      <div className="stack-grid">
        {section.groups.map((group) => (
          <article key={group.category} className="panel stack-group">
            <h3 className="stack-group__title">{group.category}</h3>
            <ul className="stack-group__list">
              {group.items.map((item) => (
                <li key={item.name} className="stack-item">
                  <span className="stack-item__name">{item.name}</span>
                  <span className="stack-item__level">{item.level}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
