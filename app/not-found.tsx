import Link from "next/link";
import { SiteHeader } from "./components/site-header";

export default function NotFound() {
  return <><SiteHeader /><main className="not-found section-shell"><p className="section-index">404 / NOT FOUND</p><h1>This route left the graph.</h1><p>The page you requested does not exist, but the rest of the portfolio is ready.</p><Link className="button button-solid" href="/">Return home ↗</Link></main></>;
}
