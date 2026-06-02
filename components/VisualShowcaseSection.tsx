import Image from "next/image";
import { Section } from "@/components/Section";

const visualProjects = [
  {
    name: "Triply",
    eyebrow: "Produto de viagens",
    thesis:
      "Interface com foco em desejo, clareza de leitura e sensacao de produto premium.",
    shots: [
      {
        src: "/triply-1.png",
        alt: "Tela principal do projeto Triply",
        label: "Primeira impressao",
      },
      {
        src: "/triply-2.png",
        alt: "Tela interna do projeto Triply",
        label: "Fluxo visual",
      },
    ],
    notes: ["Hero com presenca", "Hierarquia limpa", "Ritmo editorial"],
  },
  {
    name: "Jef Entregas",
    eyebrow: "Logistica local",
    thesis:
      "Experiencia objetiva para serviço real, com leitura rápida e chamada de ação direta.",
    shots: [
      {
        src: "/jef-entregas-1.png",
        alt: "Tela principal do projeto Jef Entregas",
        label: "Oferta clara",
      },
      {
        src: "/jef-entregas-2.png",
        alt: "Tela de detalhe do projeto Jef Entregas",
        label: "Conversao",
      },
    ],
    notes: ["Serviço evidente", "Layout responsivo", "Contato sem atrito"],
  },
] as const;

export function VisualShowcaseSection() {
  return (
    <Section
      id="prints"
      number="05"
      tag="Prints de interface"
      title="Não mostro so o código. Mostro a percepção visual que ele entrega."
      description="Esses recortes funcionam como evidência de front-end: composição, hierarquia, contraste e intenção aplicados em projetos publicados."
      className="visual-showcase-section"
    >
      <div className="visual-showcase">
        {visualProjects.map((project, projectIndex) => (
          <article
            key={project.name}
            className={`visual-case visual-case--${projectIndex + 1}`}
          >
            <div className="visual-case__copy">
              <p className="visual-case__eyebrow">{project.eyebrow}</p>
              <h3 className="visual-case__title">{project.name}</h3>
              <p className="visual-case__thesis">{project.thesis}</p>
              <div className="visual-case__notes" aria-label="Decisoes visuais">
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
