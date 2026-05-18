import { facts, pillars, profile } from "@/lib/profile";
import { Section } from "@/components/Section";

export function AboutSection() {
  return (
    <Section
      id="sobre"
      number="01"
      tag="Sobre mim"
      title="Tecnologia com olhar de produto e cuidado visual."
      description="Do ensino técnico à engenharia, construí uma base que une front-end, back-end e organização — com foco em interfaces que comunicam bem e funcionam de verdade."
    >
      <div className="about-grid">
        <article className="panel panel--accent about-intro">
          <p className="about-intro__label">Quem sou</p>
          <p className="about-intro__text">
            Sou <strong>{profile.fullName}</strong>, {profile.role.toLowerCase()}{" "}
            em {profile.location.split("—")[0].trim()}. Estudo Engenharia de
            Software na Universidade Positivo e venho do técnico em
            Desenvolvimento de Sistemas, onde aprendi lógica, web design, banco
            de dados e a base do que aplico hoje em React e Next.js.
          </p>
          <p className="about-intro__text">
            No GitHub publico projetos reais — do protótipo ao deploy. Na Solid
            Tech trabalhei com interfaces responsivas, Prisma ORM, MySQL e APIs.
            Busco oportunidade como desenvolvedor front-end ou estágio em times
            que valorizem interface, performance e evolução contínua.
          </p>
        </article>

        <div className="about-facts">
          {facts.map((fact) => (
            <article key={fact.label} className="panel fact-card">
              <p className="fact-card__label">{fact.label}</p>
              <p className="fact-card__value">{fact.value}</p>
              <p className="fact-card__detail">{fact.detail}</p>
            </article>
          ))}
        </div>

        <div className="about-pillars">
          {pillars.map((pillar, index) => (
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
