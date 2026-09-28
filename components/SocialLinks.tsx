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

const items = [{ label: "LinkedIn", href: site.linkedinUrl, icon: <LinkedInIcon /> }].filter(
  (item) => item.href,
);

export default function SocialLinks({ align = "center" }: { align?: "center" | "start" }) {
  if (items.length === 0) {
    return null;
  }

  return (
    <div className={`social social--${align}`}>
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          aria-label={item.label}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}
