import SocialLinks from "@/components/SocialLinks";
import { site } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <SocialLinks />
      <p className="copyright">
        {site.name} © {year}
      </p>
    </footer>
  );
}
