import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectVisual } from "../../components/project-visual";
import { SiteHeader } from "../../components/site-header";
import { profile, projects } from "../../data/portfolio";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  return { title: `${project.name} Case Study`, description: project.summary, alternates: { canonical: `/projects/${project.slug}` } };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const index = projects.findIndex((item) => item.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <SiteHeader />
      <main className="case-main">
        <section className="case-hero section-shell">
          <Link href="/#projects" className="back-link">← Selected work</Link>
          <div className="case-title"><div><p className="section-index">CASE STUDY · 0{index + 1}</p><h1>{project.name}</h1><p>{project.impact}</p></div><div className="case-meta"><span>TYPE</span><b>{project.eyebrow}</b><span>ROLE</span><b>Full-stack AI engineering</b></div></div>
          <ProjectVisual type={project.visual} />
        </section>
        <section className="case-content section-shell">
          <aside><p>ON THIS PAGE</p><a href="#overview">Overview</a><a href="#architecture">Architecture</a><a href="#decisions">Key decisions</a><a href="#results">Results</a></aside>
          <div className="case-copy">
            <section id="overview"><p className="mini-label">01 / OVERVIEW</p><h2>The problem</h2><p className="case-lead">{project.problem}</p><h3>My contribution</h3><p>{project.role}</p></section>
            <section id="architecture"><p className="mini-label">02 / ARCHITECTURE</p><h2>How the system works</h2><p>{project.architecture}</p><div className="architecture-flow"><div><span>01</span><b>Interface</b><p>Responsive, role-aware user experience</p></div><i>→</i><div><span>02</span><b>Orchestration</b><p>Typed APIs and controlled AI workflows</p></div><i>→</i><div><span>03</span><b>Knowledge & state</b><p>Persistent data and grounded retrieval</p></div></div></section>
            <section id="decisions"><p className="mini-label">03 / ENGINEERING DECISIONS</p><h2>What matters under the surface</h2><div className="decision-grid">{project.highlights.map((item, itemIndex) => <article key={item}><span>0{itemIndex + 1}</span><p>{item}</p></article>)}</div><h3>Technology stack</h3><div className="tag-list large-tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></section>
            <section id="results"><p className="mini-label">04 / VERIFIED RESULTS</p><h2>Evidence, not theatre</h2><div className="result-grid">{project.results.map((result) => <div key={result}><b>{result.split(" ")[0]}</b><span>{result.substring(result.indexOf(" ") + 1)}</span></div>)}</div><div className="case-actions">{project.live && <a className="button button-solid" href={project.live} target="_blank" rel="noreferrer">Open live app ↗</a>}<a className={project.live ? "button button-ghost" : "button button-solid"} href={project.github} target="_blank" rel="noreferrer">View repository ↗</a><a className="button button-ghost" href={`mailto:${profile.email}?subject=${encodeURIComponent(`Question about ${project.name}`)}`}>Discuss this project ↗</a></div></section>
          </div>
        </section>
        <section className="next-project"><div className="section-shell"><p>NEXT CASE STUDY</p><Link href={`/projects/${next.slug}`}><span>{next.name}</span><b>↗</b></Link></div></section>
      </main>
      <footer className="site-footer"><div className="section-shell"><div><b>{profile.name}</b><span>{profile.title}</span></div><div className="footer-links"><a href={profile.github}>GitHub</a><a href={profile.linkedin}>LinkedIn</a><a href={`mailto:${profile.email}`}>Email</a></div><p>© 2026 {profile.name}.</p></div></footer>
    </>
  );
}
