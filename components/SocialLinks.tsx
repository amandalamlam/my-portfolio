import { site } from "@/data/site";

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="8.2" cy="9" r="1" fill="currentColor" />
      <path d="M7.2 12.2V17M11.2 17v-3.6a1.8 1.8 0 0 1 3.6 0V17" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 4.5a7.2 7.2 0 0 0-6.2 10.9L5 19.2l3.9-.9A7.2 7.2 0 1 0 12 4.5z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9.2 10.6c.3 2 1.8 3.4 3.6 3.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4.5 7.5 12 13l7.5-5.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

const items = [
  { label: "LinkedIn", href: site.linkedinUrl, icon: <LinkedInIcon /> },
  { label: "WhatsApp", href: site.whatsappUrl, icon: <WhatsAppIcon /> },
  { label: "Email", href: `mailto:${site.email}`, icon: <MailIcon /> },
].filter((item) => item.href);

export default function SocialLinks({ align = "center" }: { align?: "center" | "start" }) {
  return (
    <div className={`social social--${align}`}>
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          aria-label={item.label === "Email" ? `Email ${site.name}` : item.label}
          {...(item.href.startsWith("http")
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}
