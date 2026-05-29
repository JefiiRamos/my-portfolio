import { stackGroups } from "@/lib/profile";
import { Section } from "@/components/Section";

export function StackSection() {
  return (
    <Section
      id="stack"
      number="03"
      tag="Stack & ferramentas"
      title="O que uso para construir produtos web completos."
      description="Front-end como foco principal, com base sólida em back-end e dados para entregar features de ponta a ponta quando o projeto pede."
    >
      <div className="stack-grid">
        {stackGroups.map((group) => (
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
