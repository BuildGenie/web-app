import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { LegalLinks } from "@/components/legal-links";

function BrandMark() {
  return <span className="brand-mark" aria-hidden="true"><span /><span /><span /><span /></span>;
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand-block">
          <Link className="brand brand-light" href="/">
            <BrandMark />
            <span className="brand-name">BuildGenie <span>Labs</span></span>
          </Link>
          <p>Build with clarity.<br />Grow with intent.</p>
        </div>
        <div className="footer-links">
          <div><span>EXPLORE</span><Link href="/services">Services</Link><Link href="/work">Client work</Link><Link href="/ventures">Ventures</Link><Link href="/about">About</Link></div>
          <div><span>CONNECT</span><Link href="/contact">Contact</Link><Link href="mailto:hello@buildgenielabs.com">Email us <ArrowUpRight size={12} /></Link></div>
        </div>
        <div className="footer-note"><span>AN INDEPENDENT BUILDING PARTNER</span><p>For founders with somewhere<br />meaningful to go.</p></div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} BuildGenie Labs. All rights reserved.</span>
        <LegalLinks />
        <span>MADE FOR WHAT&apos;S NEXT</span>
      </div>
    </footer>
  );
}
