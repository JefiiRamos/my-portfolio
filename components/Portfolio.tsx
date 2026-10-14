"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useI18n } from "@/lib/i18n/context";
import { getRepoDescription, type GitHubRepo, type GitHubUser } from "@/lib/github";
import { personality } from "@/lib/personality";
import { profile } from "@/lib/profile";
function Arrow({ diagonal = false }: {
  diagonal?: boolean;
}) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" className="arrow">
    <path d={diagonal ? "M5 19 19 5M5 5h14v14" : "M4 12h16m-6-6 6 6-6 6"} />
  </svg>;
}
function Asterisk({ className = "" }: {
  className?: string;
}) {
  return <svg className={`asterisk ${className}`} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="12" aria-hidden="true">
    <path d="M50 3v94M3 50h94M17 17l66 66M17 83l66-66" />
  </svg>;
}
function Brand({ footer = false }: {
  footer?: boolean;
}) {
  return <a className={`brand${footer ? " brand--footer" : ""}`} href="#inicio" aria-label="Jefii — início">
    <span className="brand__symbol" aria-hidden="true">j<span>r</span></span>
    <span>jefii<span className="brand__dot">.</span></span>
  </a>;
}
function SectionHeading({ number, label, title, description }: {
  number: string;
  label: string;
  title: string;
  description?: string;
}) {
  return <div className="section-heading">
    <p className="eyebrow"><span>{number} /</span> {label}</p>
    <div className="section-heading__row">
      <h2>
        {title}
      </h2>
      {description && <p className="section-description">
        {description}
      </p>}
    </div>
  </div>;
}
function ProjectPreview({ index }: {
  index: number;
}) {
  const { locale, t } = useI18n();
  const p = personality[locale];
  const [shot, setShot] = useState(0);
  const project = t.sections.projects.items[index];
  const visuals = t.sections.prints.projects[index];
  const name = visuals.name;
  const activeShot = visuals.shots[shot];
  const isPortrait = (activeShot.height ?? 906) > (activeShot.width ?? 1898);
  const isFlowFinance = project.title === "Flow Finance";
  return <article className={`featured-project featured-project--${index}${isFlowFinance ? " featured-project--flow" : ""}`}>
    <div className="project-preview">
      <div className="preview-top">
        <span className="browser-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span>
          {isPortrait ? `${name} / App` : project.live ? new URL(project.live).hostname : name}
        </span>
        <Arrow diagonal />
      </div>
      <div className={`project-preview__image${isPortrait ? " project-preview__image--portrait" : ""}`}>
        <Image key={activeShot.src} src={activeShot.src} alt={activeShot.alt} width={activeShot.width ?? 1898} height={activeShot.height ?? 906} sizes={isPortrait ? "200px" : "(max-width: 760px) 100vw, 60vw"} />
      </div>
      {visuals.caption && <p className="preview-caption">{visuals.caption}</p>}
      <div className="preview-controls" role="group" aria-label={`${p.screens}: ${name}`}>
        <span>
          {visuals.shots[shot].label}
        </span>
        <div>
          {visuals.shots.map((item, i) => <button key={item.src} type="button" aria-pressed={i === shot} aria-label={`${name}: ${item.label}`} onClick={() => setShot(i)}>
            {String(i + 1).padStart(2, "0")}
          </button>)}
        </div>
      </div>
    </div>
    <div className="project-info">
      <div className="project-info__top">
        <p className="eyebrow">0{index + 1} / {project.category}</p>
        <span className="project-year">
          {project.year}
        </span>
      </div>
      <h3>
        {name}
        <span aria-hidden="true">↗</span>
      </h3>
      <p className="project-description">
        {p.projectCopy[index]}
      </p>
      <div className="tech-list">
        {project.tech.map(tech => <span key={tech}>
          {tech}
        </span>)}
      </div>
      <div className="project-actions">
        {project.live && <a href={project.live} target="_blank" rel="noreferrer" className="text-link">
          {p.live}
          <Arrow diagonal />
        </a>}
        <a href={project.repo} target="_blank" rel="noreferrer" className="subtle-link">
          {p.source}
          <span aria-hidden="true">↗</span>
        </a>
        {project.appRepo && <a href={project.appRepo} target="_blank" rel="noreferrer" className="subtle-link">
          {p.appCode}
          <span aria-hidden="true">↗</span>
        </a>}
      </div>
      {index === 0 && <details className="project-details">
        <summary>
          {p.behind}
          <span aria-hidden="true">+</span>
        </summary>
        <div>
          <p>
            <strong>
              {t.sections.caseStudy.problemLabel}
            </strong>
            {t.sections.caseStudy.problem}
          </p>
          <p>
            <strong>
              {t.sections.caseStudy.solutionLabel}
            </strong>
            {t.sections.caseStudy.solution}
          </p>
        </div>
      </details>}
    </div>
  </article>;
}
export function Portfolio({ user, repos }: {
  user: GitHubUser | null;
  repos: GitHubRepo[];
}) {
  const { locale, t } = useI18n();
  const p = personality[locale];
  const [menuOpen, setMenuOpen] = useState(false);
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">("idle");
  const copyAttempt = useRef(0);
  const menuButton = useRef<HTMLButtonElement>(null);
  const links = ["#projetos", "#sobre", "#trajetoria", "#contato"];
  async function copyEmail() {
    const attempt = ++copyAttempt.current;
    try {
      await navigator.clipboard.writeText(profile.email);
      if (attempt === copyAttempt.current)
        setCopyState("copied");
    }
    catch {
      if (attempt === copyAttempt.current)
        setCopyState("error");
    }
  }
  return <>
    <a className="skip-link" href="#conteudo">
      {p.skip}
    </a>
    <header className="header">
      <div className="container header__inner">
        <Brand />
        <nav className="desktop-nav" aria-label={locale === "pt" ? "Navegação principal" : "Main navigation"}>
          {p.nav.map((label, i) => <a href={links[i]} key={label}>
            {label}
            {i === 3 && <Arrow diagonal />}
          </a>)}
        </nav>
        <div className="header__actions">
          <LanguageSwitcher />
          <button type="button" ref={menuButton} className="menu-button" aria-expanded={menuOpen} aria-controls="mobile-nav" aria-label={menuOpen ? p.close : p.menu} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "×" : <>
              <span />
              <span />
            </>}
          </button>
        </div>
      </div>
      <nav id="mobile-nav" className="mobile-nav container" hidden={!menuOpen} aria-label={locale === "pt" ? "Navegação móvel" : "Mobile navigation"} onKeyDown={e => {
        if (e.key === "Escape") {
          setMenuOpen(false);
          menuButton.current?.focus();
        }
      }}>
        {p.nav.map((label, i) => <a href={links[i]} key={label} onClick={() => setMenuOpen(false)}>
          <span>0{i + 1}</span>
          {label}
          <Arrow diagonal />
        </a>)}
      </nav>
    </header>
    <main id="conteudo">
      <section className="hero container" id="inicio" aria-labelledby="hero-title">
        <div className="hero-topline">
          <p className="eyebrow">
            <span className="status-dot" />
            {p.role}
          </p>
          <span className="hero-location">Curitiba, BR <span aria-hidden="true">↗</span></span>
        </div>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="hero-hello">
              {p.hello}
            </p>
            <h1 id="hero-title">
              {p.line1}
              <br />
              <span className="hero-outline">
                {p.line2}
              </span>
              <br />
              {p.line3}
              <br />
              <span className="hero-accent">
                {p.line4}
                <svg viewBox="0 0 600 25" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M4 17Q275 0 594 15M40 23Q320 8 555 20" />
                </svg>
              </span>
            </h1>
            <p className="hero-intro">
              {p.intro}
            </p>
            <div className="hero-actions">
              <a className="button-primary" href="#projetos">
                {p.work}
                <Arrow diagonal />
              </a>
              <a className="text-link" href="#contato">
                {p.talk}
                <Arrow />
              </a>
            </div>
          </div>
          <div className="hero-art">
            <div className="art-grid" aria-hidden="true" />
            <span className="art-coordinate art-coordinate--top" aria-hidden="true">JR — PERSONAL SPACE</span>
            <div className="avatar-disc">
              <span className="avatar-disc__orbit" aria-hidden="true" />
              <Image src="/jefao-icon.webp" width={510} height={490} alt={locale === "pt" ? "Avatar ilustrado do Jefii fazendo um sinal de positivo" : "Jefii's illustrated avatar giving a thumbs-up"} className="hero-avatar" priority sizes="(max-width: 760px) 75vw, 38vw" />
            </div>
            <span className="art-sticker">
              <Asterisk />
              {p.sticker}
            </span>
            <span className="art-code" aria-hidden="true">&lt;ideia /&gt;</span>
            <span className="art-caption">
              {p.based}
              <br />
              <span>
                {p.orbit}
              </span>
            </span>
            <Asterisk className="art-star" />
            <span className="art-coordinate art-coordinate--bottom" aria-hidden="true">25°25′ S / 49°16′ W</span>
          </div>
        </div>
        <div className="hero-bottom">
          <a href="#projetos">
            <span aria-hidden="true">↓</span>
            {p.scroll}
          </a>
          <span>React · Next.js · TypeScript</span>
        </div>
      </section>
      <div className="signature-strip" aria-label={p.strip.join(", ")}>
        <div>
          {p.strip.map(word => <span key={word}>
            {word}
            <Asterisk />
          </span>)}
        </div>
      </div>
      <section id="projetos" className="section container">
        <SectionHeading number="01" label={p.projectTag} title={p.projectTitle} description={p.projectIntro} />
        <div className="projects-note">
          <span className="status-dot" />
          {p.projectCaption}
          <span aria-hidden="true">↓</span>
        </div>
        <div className="featured-grid">
          {t.sections.prints.projects.map((project, index) => <ProjectPreview index={index} key={project.name} />)}
        </div>
        <div className="other-projects">
          <p className="eyebrow">
            {p.other}
          </p>
          {t.sections.projects.items.slice(t.sections.prints.projects.length).map((project, i) => <a className="project-row" href={project.repo} target="_blank" rel="noreferrer" key={project.title}>
            <span className="project-row__index">{String(i + t.sections.prints.projects.length + 1).padStart(2, "0")}</span>
            <h3>
              {project.title}
            </h3>
            <span className="project-row__category">
              {project.category}
            </span>
            <span className="project-row__tech">
              {project.tech.slice(0, 2).join(" / ")}
            </span>
            <Arrow diagonal />
          </a>)}
          <a className="text-link other-projects__all" href={`${profile.links.github}?tab=repositories`} target="_blank" rel="noreferrer">
            {p.all}
            <Arrow diagonal />
          </a>
        </div>
      </section>
      <section id="sobre" className="about-section">
        <div className="container">
          <SectionHeading number="02" label={p.aboutTag} title={p.aboutTitle} />
          <div className="about-grid">
            <div className="about-art">
              <span className="about-art__label">JEFERSON RAMOS / {p.role}</span>
              <span className="about-art__word" aria-hidden="true">jefii.</span>
              <Image src="/jefao-icon.webp" alt="" width={510} height={490} sizes="(max-width: 760px) 65vw, 26vw" />
              <Asterisk />
              <span className="about-art__signature">
                {p.note}
              </span>
            </div>
            <div className="about-copy">
              <p className="about-intro">
                {p.aboutIntro}
              </p>
              <p>
                {p.aboutBody}
              </p>
              <div className="traits">
                {p.traits.map(trait => <span key={trait}>
                  <span aria-hidden="true">↗</span>
                  {trait}
                </span>)}
              </div>
              <a className="text-link" href="#contato">
                {p.aboutLink}
                <Arrow diagonal />
              </a>
            </div>
          </div>
          <div className="principles">
            {p.principles.map((item, i) => <article key={item.title}>
              <span className="eyebrow">/ 0{i + 1}</span>
              <h3>
                {item.title}
              </h3>
              <p>
                {item.text}
              </p>
            </article>)}
          </div>
        </div>
      </section>
      <section id="stack" className="section container">
        <SectionHeading number="03" label={p.stackTag} title={p.stackTitle} description={p.stackIntro} />
        <div className="toolbox">
          {t.sections.stack.groups.map((group, i) => <article className="tool-group" key={group.category}>
            <div className="tool-group__heading">
              <span aria-hidden="true">
                {["</>", "{ }", "⌘"][i]}
              </span>
              <h3>
                {group.category}
              </h3>
            </div>
            <div className="tool-tags">
              {group.items.map(item => <span key={item.name}>
                {item.name}
              </span>)}
            </div>
          </article>)}
        </div>
      </section>
      <section id="trajetoria" className="section journey-section container">
        <SectionHeading number="04" label={p.journeyTag} title={p.journeyTitle} description={p.journeyIntro} />
        <div className="journey-list">
          {t.sections.experience.items.map(item => <article className="journey-item" key={item.title}>
            <div className="journey-date">
              <span>
                {item.period}
              </span>
              <span className={`journey-type journey-type--${item.typeKey}`}>
                {item.type}
              </span>
            </div>
            <div className="journey-body">
              <p className="eyebrow">
                {item.company}
              </p>
              <h3>
                {item.title}
              </h3>
              <p>
                {item.description}
              </p>
              <div className="journey-highlights">
                {item.highlights.map(h => <span key={h}>
                  {h}
                </span>)}
              </div>
            </div>
            <Arrow diagonal />
          </article>)}
        </div>
      </section>
      <section id="github" className="section github-section container">
        <SectionHeading number="05" label={p.gitTag} title={p.gitTitle} description={p.gitIntro} />
        <div className="github-banner">
          <div className="github-handle">
            <span aria-hidden="true">↳</span>
            <a href={profile.links.github} target="_blank" rel="noreferrer">@JefiiRamos<Arrow diagonal /></a>
          </div>
          {user && <div className="github-stats">
            <p>
              <strong>
                {user.public_repos}
              </strong>
              {p.repos}
            </p>
            <p>
              <strong>
                {user.followers}
              </strong>
              {p.followers}
            </p>
          </div>}
        </div>
        {repos.length > 0 ? <div className="repo-grid">
          {repos.map(repo => <a className="repo" href={repo.html_url} target="_blank" rel="noreferrer" key={repo.id}>
            <div className="repo__top">
              <span className="repo__icon" aria-hidden="true">⌘</span>
              <span>
                {repo.language}
              </span>
              <Arrow diagonal />
            </div>
            <h3>
              {repo.name}
            </h3>
            <p>
              {getRepoDescription(repo, locale)}
            </p>
            <span className="repo__date">{p.updated} {new Intl.DateTimeFormat(locale === "pt" ? "pt-BR" : "en", { month: "short", year: "numeric" }).format(new Date(repo.pushed_at))}</span>
          </a>)}
        </div> : <p className="github-unavailable">
          {p.unavailable}
        </p>}
        <a href={profile.links.github} target="_blank" rel="noreferrer" className="text-link github-more">
          {p.profile}
          <Arrow diagonal />
        </a>
      </section>
      <section id="contato" className="contact-section">
        <div className="container">
          <p className="eyebrow">
            <span className="status-dot" />
            {p.contactTag}
          </p>
          <div className="contact-heading">
            <h2>
              {p.contact1}
              <br />
              {p.contact2}
              <br />
              <a href={`mailto:${profile.email}`}>
                {p.contact3}
                <Arrow diagonal />
              </a>
            </h2>
            <Asterisk />
          </div>
          <div className="contact-bottom">
            <p>
              {p.contactIntro}
            </p>
            <div className="contact-email">
              <a href={`mailto:${profile.email}`} aria-label={`${p.email}: ${profile.email}`}>
                {profile.email}
                <Arrow diagonal />
              </a>
              <button type="button" onClick={copyEmail}>
                {copyState === "copied" ? <span aria-hidden="true">✓</span> : <span aria-hidden="true">⧉</span>}
                {p.copy}
              </button>
              <span className="copy-status" role="status">
                {copyState === "copied" ? p.copied : copyState === "error" ? p.copyError : ""}
              </span>
            </div>
          </div>
          <div className="socials">
            <a href={profile.links.github} target="_blank" rel="noreferrer">GitHub<Arrow diagonal /></a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn<Arrow diagonal /></a>
            <a href={`https://wa.me/${profile.phone.replace(/\D/g, "")}`} target="_blank" rel="noreferrer">WhatsApp<Arrow diagonal /></a>
            <a href={profile.links.instagram} target="_blank" rel="noreferrer">Instagram<Arrow diagonal /></a>
          </div>
        </div>
      </section>
    </main>
    <footer className="footer container">
      <Brand footer />
      <p>© {new Date().getFullYear()} · {p.footer}</p>
      <a href="#inicio" className="back-top">
        {p.back}
        <span aria-hidden="true">↑</span>
      </a>
    </footer>
  </>;
}
