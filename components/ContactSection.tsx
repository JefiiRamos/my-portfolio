import { goals, profile } from "@/lib/profile";
import { Section } from "@/components/Section";

const contactMethods = [
  {
    label: "E-mail",
    value: profile.email,
    href: `mailto:${profile.email}`,
    description: "Melhor canal para propostas e oportunidades",
  },
  {
    label: "Telefone / WhatsApp",
    value: profile.phoneDisplay,
    href: `https://wa.me/${profile.phone.replace(/\D/g, "")}`,
    description: "Resposta rápida para conversas diretas",
  },
  {
    label: "LinkedIn",
    value: "jeferson-ramos",
    href: profile.links.linkedin,
    description: "Perfil profissional e networking",
  },
  {
    label: "Instagram",
    value: "@_jefiibss",
    href: profile.links.instagram,
    description: "Contato mais informal e pessoal",
  },
];

export function ContactSection() {
  return (
    <Section
      id="contato"
      number="06"
      tag="Contato"
      title="Vamos construir algo com identidade e propósito."
      description={profile.availability}
    >
      <div className="contact-grid">
        <div className="contact-methods">
          {contactMethods.map((method) => (
            <a
              key={method.label}
              href={method.href}
              target={method.href.startsWith("http") ? "_blank" : undefined}
              rel={method.href.startsWith("http") ? "noreferrer" : undefined}
              className="panel contact-card"
            >
              <p className="contact-card__label">{method.label}</p>
              <p className="contact-card__value">{method.value}</p>
              <p className="contact-card__description">{method.description}</p>
            </a>
          ))}
        </div>

        <article className="panel panel--accent contact-cta">
          <p className="contact-cta__tag">Objetivos</p>
          <ul className="contact-cta__goals">
            {goals.map((goal) => (
              <li key={goal}>{goal}</li>
            ))}
          </ul>
          <div className="contact-cta__actions">
            <a className="button-primary" href={`mailto:${profile.email}`}>
              Enviar e-mail
            </a>
            <a
              className="button-secondary"
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
            >
              Ver portfólio no GitHub
            </a>
          </div>
        </article>
      </div>
    </Section>
  );
}
