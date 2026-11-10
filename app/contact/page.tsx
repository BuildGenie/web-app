import Link from "next/link";
import { ArrowUpRight, Compass, Mail, MessageSquareText } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { ContactForm } from "./contact-form";

export const metadata = {
  title: "Contact | BuildGenie Labs",
  description:
    "Tell BuildGenie Labs what you are building and where you need support. Start a conversation about strategy, growth, technology or execution.",
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <div className="eyebrow"><span className="eyebrow-line" />{children}</div>;
}

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />

      <section className="contact-page-hero">
        <div className="container contact-page-hero-inner">
          <Eyebrow>LET&apos;S TALK</Eyebrow>
          <h1>Every meaningful build<br />starts with <span>a conversation.</span></h1>
          <p>
            Tell us what you are working towards. Whether you have a clear brief
            or are still working out the problem, we will help you identify a
            sensible next step.
          </p>
        </div>
      </section>

      <section className="contact-page-content section-pad">
        <div className="container contact-page-grid">
          <div className="contact-page-aside">
            <Eyebrow>START HERE</Eyebrow>
            <h2>Bring the context.<br /><span>We&apos;ll bring the questions.</span></h2>
            <p>
              A useful first conversation is about understanding your business,
              the people you serve and what is getting in the way of progress.
              You do not need a polished brief to get started.
            </p>
            <div className="contact-methods">
              <a href="mailto:hello@buildgenielabs.com">
                <span><Mail size={18} /></span>
                <div><small>EMAIL</small><b>hello@buildgenielabs.com</b></div>
                <ArrowUpRight size={16} />
              </a>
              <Link href="/services">
                <span><Compass size={18} /></span>
                <div><small>NOT SURE WHAT YOU NEED?</small><b>Explore our services</b></div>
                <ArrowUpRight size={16} />
              </Link>
            </div>
            <div className="contact-note">
              <MessageSquareText size={19} />
              <p>We prefer a clear conversation and a realistic scope over a one-size-fits-all pitch.</p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <section className="contact-bottom section-pad">
        <div className="container contact-bottom-inner">
          <div><Eyebrow>GOOD THINGS GET BUILT TOGETHER</Eyebrow><h2>Start with what&apos;s<br /><span>in front of you.</span></h2></div>
          <Link className="button button-orange" href="/services">Explore what we do <ArrowUpRight size={17} /></Link>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand-block">
            <Link className="brand brand-light" href="/">
              <span className="brand-mark" aria-hidden="true"><span /><span /><span /><span /></span>
              <span className="brand-name">buildgenie<span>labs</span></span>
            </Link>
            <p>Build with clarity.<br />Grow with intent.</p>
          </div>
          <div className="footer-links">
            <div><span>EXPLORE</span><Link href="/services">Services</Link><Link href="/about">About us</Link><Link href="/#approach">Our approach</Link></div>
            <div><span>CONNECT</span><Link href="mailto:hello@buildgenielabs.com">Email us</Link><Link href="/contact">Contact</Link></div>
          </div>
          <div className="footer-note"><span>AN INDEPENDENT BUILDING PARTNER</span><p>For founders with somewhere<br />meaningful to go.</p></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} BuildGenie Labs. All rights reserved.</span><span>MADE FOR WHAT&apos;S NEXT</span></div>
      </footer>
    </main>
  );
}
