"use client";

import Image from "next/image";
import { Section } from "@/components/Section";
import { useI18n } from "@/lib/i18n/context";

export function VisualShowcaseSection() {
  const { t } = useI18n();
  const section = t.sections.prints;

  return (
    <Section
      id="prints"
      number="05"
      tag={section.tag}
      title={section.title}
      description={section.description}
      className="visual-showcase-section"
    >
      <div className="visual-showcase">
        {section.projects.map((project, projectIndex) => (
          <article
            key={project.name}
            className={`visual-case visual-case--${projectIndex + 1}`}
          >
            <div className="visual-case__copy">
              <p className="visual-case__eyebrow">{project.eyebrow}</p>
              <h3 className="visual-case__title">{project.name}</h3>
              <p className="visual-case__thesis">{project.thesis}</p>
              <div
                className="visual-case__notes"
                aria-label={section.visualDecisions}
              >
                {project.notes.map((note) => (
                  <span key={note}>{note}</span>
                ))}
              </div>
            </div>

            <div className="visual-case__stage">
              {project.shots.map((shot, shotIndex) => (
                <figure
                  key={shot.src}
                  className={`visual-shot visual-shot--${shotIndex + 1}`}
                >
                  <div className="visual-shot__chrome" aria-hidden>
                    <span />
                    <span />
                    <span />
                  </div>
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={1900}
                    height={911}
                    className="visual-shot__image"
                    sizes="(min-width: 1024px) 46rem, 92vw"
                  />
                  <figcaption>{shot.label}</figcaption>
                </figure>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
