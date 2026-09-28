import Link from "next/link";

export default function NotFound() {
  return (
    <div className="subpage">
      <div className="subpage__inner">
        <h1>Page not found</h1>
        <p className="lede">That page is not part of this site.</p>
        <Link className="btn btn-fill" href="/">
          Back to Projects
        </Link>
      </div>
    </div>
  );
}
