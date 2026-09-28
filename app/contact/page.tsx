import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
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
        <div className="contact-grid__copy">
          <h1>Get In Touch</h1>
          <h1>With Me!</h1>
          {site.availability.map((line) => (
            <p key={line} className="lede">
              {line}
            </p>
          ))}
          <a
            className="contact-whatsapp"
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Message on WhatsApp
          </a>
        </div>
        <div className="contact-grid__form">
          <ContactForm />
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
