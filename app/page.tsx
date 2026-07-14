import Link from "next/link";
import { ContactForm } from "./components/contact-form";
import { ProjectVisual } from "./components/project-visual";
import { SiteHeader } from "./components/site-header";
import { certificates, education, experience, profile, projects, skillGroups } from "./data/portfolio";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  email: `mailto:${profile.email}`,
  url: profile.website,
  address: { "@type": "PostalAddress", addressLocality: "Dhaka", addressCountry: "Bangladesh" },
  sameAs: [profile.github, profile.linkedin],
  knowsAbout: ["Generative AI", "Agentic AI", "Voice AI", "Retrieval-Augmented Generation", "LangGraph", "FastAPI", "Next.js"],
};

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero section-shell" id="home">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="availability"><span /> Generative AI · Agentic systems · Voice</div>
              <p className="kicker">Hello, I’m {profile.shortName}.</p>
              <h1>I build AI systems that <em>work beyond the demo.</em></h1>
              <p className="hero-intro">Generative AI Engineer building low-latency voice agents, multi-agent workflows, RAG pipelines and secure full-stack AI products.</p>
              <div className="hero-actions">
                <a className="button button-solid" href="#projects">View my work <span aria-hidden="true">↓</span></a>
                <a className="button button-ghost" href={profile.resume} download>Download resume <span aria-hidden="true">↗</span></a>
              </div>
              <div className="hero-links" aria-label="Professional profiles">
                <a href={profile.github} target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
                <a href={`mailto:${profile.email}`}>Email <span>↗</span></a>
              </div>
            </div>
            <figure className="hero-portrait">
              <img
                src="/sabbir-azim-professional.jpg"
                alt="Sabbir Azim, Generative AI Engineer"
                width="1430"
                height="1704"
              />
              <div className="portrait-status"><i /> Available for AI engineering opportunities</div>
              <figcaption>
                <span>GENERATIVE AI ENGINEER</span>
                <strong>{profile.name}</strong>
                <small>{profile.location} · {profile.timezone}</small>
              </figcaption>
            </figure>
          </div>
          <div className="hero-proof" aria-label="Professional highlights">
            <p>Building across the full AI product lifecycle</p>
            <div><span>VOICE AI</span><span>AGENTIC WORKFLOWS</span><span>RAG & SEMANTIC SEARCH</span><span>AI SAAS</span><span>MLOPS</span></div>
          </div>
        </section>

        <section className="section-shell about-section" id="about">
          <div className="section-index">01 / ABOUT</div>
          <div className="section-heading split-heading">
            <h2>Engineering intelligent products from <em>model to production.</em></h2>
            <div>
              <p>I work where applied AI meets product engineering: orchestrating agents, grounding models in private knowledge, designing secure APIs and shipping reliable interfaces around them.</p>
              <p>My experience spans real-time voice infrastructure, full-stack SaaS, NLP and computer vision research, with a focus on measurable latency, testability and deployment quality.</p>
            </div>
          </div>
          <div className="snapshot-grid">
            <article><span>01</span><b>Real-time systems</b><p>Multilingual voice pipelines built for sub-second interactions and live client deployments.</p></article>
            <article><span>02</span><b>Grounded AI</b><p>RAG, semantic retrieval and citation-aware outputs that keep AI connected to source knowledge.</p></article>
            <article><span>03</span><b>Production ownership</b><p>APIs, data models, frontend workflows, testing, containers and cloud delivery - handled as one system.</p></article>
          </div>
        </section>

        <section className="section-shell projects-section" id="projects">
          <div className="section-index">02 / SELECTED WORK</div>
          <div className="section-heading project-heading"><h2>Selected systems, built with <em>depth and intent.</em></h2><p>Three projects that show agent orchestration, product thinking and end-to-end engineering.</p></div>
          <div className="projects-list">
            {projects.map((project, index) => (
              <article className="project-card" key={project.slug}>
                <div className="project-card-copy">
                  <div className="project-number">0{index + 1} · {project.eyebrow}</div>
                  <h3>{project.name}</h3>
                  <p className="project-impact">{project.impact}</p>
                  <p>{project.summary}</p>
                  <div className="tag-list">{project.stack.slice(0, 6).map((item) => <span key={item}>{item}</span>)}</div>
                  <div className="project-links">
                    <Link href={`/projects/${project.slug}`} className="text-link">Read case study <span>↗</span></Link>
                    {project.live && <a href={project.live} target="_blank" rel="noreferrer" className="text-link live-link">Open live app <span>↗</span></a>}
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-link muted-link">View repository <span>↗</span></a>
                  </div>
                </div>
                <ProjectVisual type={project.visual} compact />
              </article>
            ))}
          </div>
          <a className="github-strip" href={profile.github} target="_blank" rel="noreferrer"><span><b>26</b> public repositories on GitHub</span><span>Explore the complete body of work ↗</span></a>
        </section>

        <section className="section-shell experience-section" id="experience">
          <div className="section-index">03 / EXPERIENCE</div>
          <div className="section-heading"><h2>Applied AI experience with a <em>delivery mindset.</em></h2></div>
          <div className="timeline">
            {experience.map((item) => (
              <article key={item.company}>
                <div className="timeline-meta"><span>{item.dates}</span><span>{item.location}</span></div>
                <div className="timeline-role"><h3>{item.role}</h3><p>{item.company}</p></div>
                <div className="timeline-detail"><p>{item.summary}</p><ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul><div className="tag-list">{item.stack.map((tech) => <span key={tech}>{tech}</span>)}</div></div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell skills-section" id="skills">
          <div className="section-index">04 / CAPABILITIES</div>
          <div className="section-heading split-heading"><h2>A practical stack for building <em>AI-native products.</em></h2><p>Skills are organized by how I use them in shipped systems and research - not arbitrary proficiency scores.</p></div>
          <div className="skills-grid">
            {skillGroups.map((group, index) => <article key={group.title}><div><span>0{index + 1}</span><small>{group.level}</small></div><h3>{group.title}</h3><div className="skill-list">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></article>)}
          </div>
        </section>

        <section className="section-shell education-section" id="education">
          <div className="section-index">05 / EDUCATION & CREDENTIALS</div>
          <div className="education-grid">
            <div><p className="mini-label">EDUCATION</p><h2>{education.degree}</h2><p>{education.institution}</p><span>{education.location} · {education.dates}</span></div>
            <div><p className="mini-label">CERTIFICATES</p>{certificates.map((certificate) => <article key={certificate.name}><div><h3>{certificate.name}</h3><p>{certificate.issuer}</p></div><span>{certificate.dates}</span></article>)}</div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-shell">
            <div className="section-index">06 / CONTACT</div>
            <div className="contact-grid">
              <div className="contact-copy"><p className="kicker">Have a role or product in mind?</p><h2>Let’s build AI that earns its place in <em>production.</em></h2><p>I’m interested in Generative AI, Agentic AI, AI/ML and product engineering conversations where technical depth and delivery both matter.</p><div className="contact-direct"><a href={`mailto:${profile.email}`}>{profile.email} <span>↗</span></a><p>{profile.location} · {profile.timezone}</p></div></div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer"><div className="section-shell"><div><b>{profile.name}</b><span>{profile.title} · {profile.positioning}</span></div><div className="footer-links"><a href={profile.github}>GitHub</a><a href={profile.linkedin}>LinkedIn</a><a href={`mailto:${profile.email}`}>Email</a><a href="#home">Back to top ↑</a></div><p>© 2026 {profile.name}. Built with Next.js & TypeScript.</p></div></footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
