import type { Metadata } from "next";
import { aboutProfile, projectTypes, strengths, tools } from "@/data/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "Amanda Lam is a freelance IT project manager based in Hong Kong, with about three years in IT project and digital delivery.",
};

export default function AboutPage() {
  return (
    <div className="subpage">
      <section className="about-intro">
        <div className="about-intro__visual">
          <img className="about-frame" src="/profile_1.jpg" alt="Amanda Lam" />
        </div>
        <div className="about-intro__copy">
          <p className="eyebrow">About Me</p>
          <h1 className="about-name">{aboutProfile.name}</h1>
          <p className="lede">{aboutProfile.title}</p>
          <dl className="profile-facts">
            <div>
              <dt>Years of experience</dt>
              <dd>{aboutProfile.experience}</dd>
            </div>
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
      </section>

      <section className="about-section" aria-labelledby="summary-heading">
        <h2 id="summary-heading">Professional Summary</h2>
        <h3 className="about-label">Types of Projects Delivered</h3>
        <ul className="pill-list">
          {projectTypes.map((type) => (
            <li key={type}>{type}</li>
          ))}
        </ul>
        <h3 className="about-label">Core Strengths as an IT Project Manager & BA</h3>
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
