import { Section } from "@/components/Section";
import {
  differentiators,
  frontEndQualitySignals,
  interfacePrinciples,
} from "@/lib/profile";

export function DifferentialsSection() {
  return (
    <Section
      id="diferenciais"
      number="02"
      tag="Diferenciais"
      title="Mais do que interface bonita: critério de produto, código e experiência."
      description="Esta seção existe para responder a pergunta que pesa em processo seletivo: por que me escolher para uma vaga front-end?"
    >
      <div className="differentials-layout">
        <div className="differentials-grid">
          {differentiators.map((item, index) => (
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
            <p className="principles-card__label">Princípios de interface</p>
            <ul className="principles-card__list">
              {interfacePrinciples.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="panel quality-card-v2">
            <p className="quality-card-v2__label">O que eu tento garantir no front-end</p>
            <div className="quality-card-v2__grid">
              {frontEndQualitySignals.map((item) => (
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
