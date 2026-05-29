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
      title="Nao basta deixar bonito. Eu quero deixar convincente, utilizavel e tecnicamente solido."
      description="Esta secao responde o que realmente pesa em recrutamento: como penso, como executo e por que meu front-end agrega alem da estetica."
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
            <p className="principles-card__label">Principios de interface</p>
            <ul className="principles-card__list">
              {interfacePrinciples.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="panel quality-card-v2">
            <p className="quality-card-v2__label">O que meu front-end precisa sustentar</p>
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
