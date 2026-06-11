"use client";

import { Section } from "@/components/Section";
import { useI18n } from "@/lib/i18n/context";

export function AboutSection() {
  const { t } = useI18n();
  const about = t.sections.about;

  return (
    <Section
      id="sobre"
      number="01"
      tag={about.tag}
      title="Building Digital Experiences"
      description="Frontend development focused on performance, usability and modern interfaces."
    >
      <div className="about-v4">

        <div className="about-v4__headline">
          <span>Frontend Developer</span>

          <div className="about-v4__line" />
        </div>

        <div className="about-v4__metrics">

          <article className="about-metric">
            <span className="about-metric__number">
              03+
            </span>

            <span className="about-metric__label">
              Years Learning
            </span>
          </article>

          <article className="about-metric">
            <span className="about-metric__number">
              UI
            </span>

            <span className="about-metric__label">
              Interface Design
            </span>
          </article>

          <article className="about-metric">
            <span className="about-metric__number">
              UX
            </span>

            <span className="about-metric__label">
              User Experience
            </span>
          </article>

        </div>

        <div className="about-v4__stack">

          <span>React</span>
          <span>Next.js</span>
          <span>TypeScript</span>
          <span>JavaScript</span>
          <span>Responsive</span>
          <span>Git</span>

        </div>

        <div className="about-v4__statement">

          Building interfaces focused on clarity,
          performance and usability.

        </div>

        <div className="about-v4__grid">

          <div className="about-v4__card">
            <span className="about-v4__card-number">
              01
            </span>

            <h3>
              Interface
            </h3>

            <p>
              Minimal and modern visual systems with strong hierarchy.
            </p>
          </div>

          <div className="about-v4__card">
            <span className="about-v4__card-number">
              02
            </span>

            <h3>
              Performance
            </h3>

            <p>
              Fast experiences focused on responsiveness and fluidity.
            </p>
          </div>

          <div className="about-v4__card">
            <span className="about-v4__card-number">
              03
            </span>

            <h3>
              Frontend
            </h3>

            <p>
              React and Next.js applications with scalable architecture.
            </p>
          </div>

        </div>

      </div>
    </Section>
  );
}