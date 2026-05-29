import { experience } from "@/lib/profile";
import { Section } from "@/components/Section";

export function ExperienceSection() {
  return (
    <Section
      id="trajetoria"
      number="07"
      tag="Trajetoria"
      title="Minha evolucao combina base tecnica, entrega real e disciplina de execucao."
      description="Cada etapa adicionou uma camada util ao meu trabalho: comunicacao, organizacao, visao de produto e pratica em desenvolvimento web."
    >
      <div className="timeline-v2">
        {experience.map((item, index) => (
          <article key={`${item.period}-${item.title}`} className="timeline-v2__item">
            <div className="timeline-v2__rail" aria-hidden>
              <span className="timeline-v2__dot" />
              {index < experience.length - 1 ? (
                <span className="timeline-v2__line" />
              ) : null}
            </div>

            <div className="panel timeline-v2__card">
              <div className="timeline-v2__meta">
                <span className="timeline-v2__period">{item.period}</span>
                <span
                  className={`timeline-v2__type timeline-v2__type--${item.type === "Formacao" ? "edu" : "work"}`}
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
