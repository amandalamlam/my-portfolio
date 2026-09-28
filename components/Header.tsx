"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";

const links = [
  { href: "/", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contacts" },
];

function isCurrent(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/" || pathname.startsWith("/projects");
  }
  return pathname === href;
}

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="logo">
          {site.name}
        </Link>
        <nav className="nav" aria-label="Primary">
          {links.map((link) => {
            const current = isCurrent(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link"
                aria-current={current ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
