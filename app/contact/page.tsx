import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { ProjectAdvisor } from "./project-advisor";

export const metadata = {
  title: "Project Advisor | BuildGenie Labs",
  description:
    "Think through your next business move with BuildGenie. Explore practical recommendations, relevant services and transparent guide pricing before deciding what to do next.",
};

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <span /><span /><span /><span />
    </span>
  );
}

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <ProjectAdvisor />
      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand-block">
            <Link className="brand brand-light" href="/">
              <BrandMark />
              <span className="brand-name">buildgenie<span>labs</span></span>
            </Link>
            <p>Build with clarity.<br />Grow with intent.</p>
          </div>
          <div className="footer-links">
            <div><span>EXPLORE</span><Link href="/services">Services</Link><Link href="/about">About us</Link><Link href="/#approach">Our approach</Link></div>
            <div><span>CONNECT</span><Link href="mailto:hello@buildgenielabs.com">Email us</Link><Link href="/contact">Project Advisor</Link></div>
          </div>
          <div className="footer-note"><span>AN INDEPENDENT BUILDING PARTNER</span><p>For founders with somewhere<br />meaningful to go.</p></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} BuildGenie Labs. All rights reserved.</span><span>MADE FOR WHAT&apos;S NEXT</span></div>
      </footer>
    </main>
  );
}
