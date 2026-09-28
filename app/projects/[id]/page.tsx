import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects, type Challenge } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = getProject(id);
  if (!project) {
    return { title: "Project" };
  }
  return {
    title: project.title,
    description: project.caseStudy?.context[0] ?? project.teaser,
  };
}

function ChallengeItem({ challenge }: { challenge: Challenge }) {
  return (
    <li>
      {challenge.title ? <strong>{challenge.title}: </strong> : null}
      {challenge.detail}
    </li>
  );
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = getProject(id);
  if (!project) {
    notFound();
  }

  const study = project.caseStudy;

  return (
    <div className="subpage">
      <article className="case">
        <Link className="back-link" href="/#projects">
          ← Back to Projects
        </Link>
        <p className="eyebrow">{project.industry}</p>
        <h1>{project.title}</h1>

        {study ? (
          <>
            <dl className="facts">
              <div>
                <dt>Company scale</dt>
                <dd>{study.scale}</dd>
              </div>
              <div>
                <dt>Role</dt>
                <dd>{study.role}</dd>
              </div>
            </dl>

            <section className="case-section" aria-labelledby="context-heading">
              <h2 id="context-heading">Context</h2>
              {study.context.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {study.contextList ? (
                <>
                  <p>{study.contextListIntro}</p>
                  <ul className="case-list">
                    {study.contextList.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </>
              ) : null}
            </section>

            <section className="case-section" aria-labelledby="challenges-heading">
              <h2 id="challenges-heading">Key challenges</h2>
              <ul className="case-list">
                {study.challenges.map((challenge) => (
                  <ChallengeItem key={challenge.detail} challenge={challenge} />
                ))}
              </ul>
            </section>

            <section className="case-section" aria-labelledby="role-heading">
              <h2 id="role-heading">Role and contributions</h2>
              <ul className="case-list">
                {study.contributions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="case-section" aria-labelledby="outcome-heading">
              <h2 id="outcome-heading">Outcome</h2>
              <ul className="case-list">
                {study.outcomes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </>
        ) : (
          <p className="lede">{project.teaser}</p>
        )}

        <Link className="back-link" href="/#projects">
          ← Back to Projects
        </Link>
      </article>
    </div>
  );
}
