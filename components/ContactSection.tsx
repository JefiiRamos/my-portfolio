"use client";

import { Section } from "@/components/Section";
import { useI18n } from "@/lib/i18n/context";
import { profile } from "@/lib/profile";

export function ContactSection() {
  const { t } = useI18n();
  const section = t.sections.contact;

  const contactMethods = [
    {
      label: section.methods[0].label,
      value: profile.email,
      href: `mailto:${profile.email}`,
      description: section.methods[0].description,
    },
    {
      label: section.methods[1].label,
      value: profile.phoneDisplay,
      href: `https://wa.me/${profile.phone.replace(/\D/g, "")}`,
      description: section.methods[1].description,
    },
    {
      label: section.methods[2].label,
      value: profile.linkedinHandle,
      href: profile.links.linkedin,
      description: section.methods[2].description,
    },
    {
      label: section.methods[3].label,
      value: profile.instagramHandle,
      href: profile.links.instagram,
      description: section.methods[3].description,
    },
  ];

  return (
    <Section
      id="contato"
      number="09"
      tag={section.tag}
      title={section.title}
      description={t.profile.availability}
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
          <p className="contact-cta__tag">{section.lookingFor}</p>
          <ul className="contact-cta__goals">
            {t.sections.github.goals.map((goal) => (
              <li key={goal}>{goal}</li>
            ))}
          </ul>
          <div className="contact-cta__actions">
            <a className="button-primary" href={`mailto:${profile.email}`}>
              {section.sendEmail}
            </a>
            <a
              className="button-secondary"
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
            >
              {section.reviewGithub}
            </a>
          </div>
        </article>
      </div>
    </Section>
  );
}
