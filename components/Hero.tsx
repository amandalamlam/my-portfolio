import Link from "next/link";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero__grid">
        <div className="hero__copy">
          <p className="eyebrow">{site.role}</p>
          <h1 id="hero-heading">
            Hello, I&apos;m
            <br />
            Amanda Lam!
          </h1>
          <p className="hero__lede">{site.heroText}</p>
          <div className="hero__actions">
            <a className="btn btn-fill" href="#projects">
              Projects
            </a>
            <Link className="btn btn-outline" href="/about">
              About Me
            </Link>
          </div>
        </div>
        <div className="hero__art" aria-hidden="true">
          <img className="hero__shape" src="/yellow-triangle.png" alt="" />
          <div className="hero__photo">
            <img src="/profile_2.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
