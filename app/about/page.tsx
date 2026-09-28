import type { Metadata } from "next";
import { aboutProfile, experience, projectTypes, strengths, tools } from "@/data/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "Amanda Lam is a freelance IT project manager based in Hong Kong, with about three years in IT project and digital delivery.",
};

export default function AboutPage() {
  return (
    <div className="subpage">
      <section className="about-intro">
        <div>
          <p className="eyebrow">About Me</p>
          <h1 className="about-name">{aboutProfile.name}</h1>
          <p className="lede">{aboutProfile.title}</p>
          <p>{aboutProfile.summary}</p>
          <dl className="profile-facts">
            <div>
              <dt>Location and work mode</dt>
              <dd>{aboutProfile.location}</dd>
            </div>
            <div>
              <dt>Credentials and certification</dt>
              <dd>{aboutProfile.certification}</dd>
            </div>
            <div>
              <dt>Languages</dt>
              <dd>{aboutProfile.languages}</dd>
            </div>
          </dl>
        </div>
        <div className="about-intro__visual">
          <img className="about-frame" src="/profile_1.jpg" alt="Amanda Lam" />
        </div>
      </section>

      <section className="about-section" aria-labelledby="summary-heading">
        <h2 id="summary-heading">Professional summary</h2>
        <h3 className="about-label">Years of experience</h3>
        <ul className="case-list">
          {experience.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h3 className="about-label">Types of projects delivered</h3>
        <ul className="pill-list">
          {projectTypes.map((type) => (
            <li key={type}>{type}</li>
          ))}
        </ul>
        <h3 className="about-label">Core strengths as an IT project manager</h3>
        <ul className="info-grid">
          {strengths.map((item) => (
            <li key={item.title} className="info-card">
              <h4>{item.title}</h4>
              <p>{item.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="about-section" aria-labelledby="tools-heading">
        <h2 id="tools-heading">Project management tools</h2>
        <ul className="info-grid">
          {tools.map((tool) => (
            <li key={tool.name} className="info-card">
              <h3>{tool.name}</h3>
              <p>{tool.detail}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
