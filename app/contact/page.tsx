import type { Metadata } from "next";
import Portrait from "@/components/Portrait";
import SocialLinks from "@/components/SocialLinks";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contacts",
  description:
    "Contact Amanda Lam about freelance and contract IT project management work. Open to discuss opportunities from May 2026.",
};

export default function ContactPage() {
  return (
    <div className="contact-page">
      <section className="contact-grid">
        <div className="contact-grid__visual" aria-hidden="true">
          <div className="disc">
            <Portrait className="portrait--inset" />
          </div>
        </div>
        <div className="contact-grid__copy">
          <h1>Get In Touch</h1>
          {site.availability.map((line) => (
            <p key={line} className="lede">
              {line}
            </p>
          ))}
          <dl className="contact-list">
            <div>
              <dt>Email</dt>
              <dd>
                <a className="text-link" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt>Mobile</dt>
              <dd>
                <a className="text-link" href={site.mobileTel}>
                  {site.mobileDisplay}
                </a>
              </dd>
            </div>
          </dl>
          <SocialLinks align="start" />
        </div>
      </section>
      <svg className="contact-wave" viewBox="0 0 1440 180" preserveAspectRatio="none" aria-hidden="true">
        <path
          fill="#FFD000"
          d="M0 92c160 48 280-56 470-28 190 28 250 78 430 42 180-36 250-86 540-28v102H0V92z"
        />
      </svg>
    </div>
  );
}
