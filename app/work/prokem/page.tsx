import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Layers3, ShoppingBag, Target, Workflow } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { LegalLinks } from "@/components/legal-links";
import { advisorLink } from "@/components/advisor-link";

export const metadata = {
  title: "Prokem Afro-Caribbean Foods | Client Work",
  description: "How BuildGenie Labs brought brand identity, positioning, website design and e-commerce development together for Prokem Afro-Caribbean Foods.",
  alternates: { canonical: "/work/prokem" },
  openGraph: {
    title: "Prokem Afro-Caribbean Foods | BuildGenie Labs",
    description: "Brand strategy and a connected e-commerce experience for an Afro-Caribbean grocer serving customers across the UK.",
    url: "/work/prokem",
    type: "article",
  },
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <div className="eyebrow"><span className="eyebrow-line" />{children}</div>;
}

function BrandMark() {
  return <span className="brand-mark" aria-hidden="true"><span /><span /><span /><span /></span>;
}

const deliverables = [
  { number: "01", icon: Target, title: "Brand identity", description: "A visual foundation for a specialist Afro-Caribbean food retailer." },
  { number: "02", icon: Layers3, title: "Positioning & messaging", description: "A clear way to communicate the range, sourcing and role of the business for its customers." },
  { number: "03", icon: Workflow, title: "Website design & development", description: "A digital storefront that carries the brand through discovery and product browsing." },
  { number: "04", icon: ShoppingBag, title: "E-commerce platform", description: "The online shopping experience that brings the catalogue and fulfilment journey together." },
];

export default function ProkemCaseStudyPage() {
  return (
    <main>
      <SiteHeader />
      <section className="case-study-hero">
        <div className="container">
          <div className="case-study-topline"><Eyebrow>SELECTED CLIENT WORK / 01</Eyebrow><span>BRAND · DIGITAL · COMMERCE</span></div>
          <h1>Bringing the flavours<br />of home <span>closer to customers.</span></h1>
          <p className="case-study-intro">
            For Prokem Afro-Caribbean Foods, BuildGenie delivered the brand
            identity, positioning, website and e-commerce platform as one
            connected customer experience.
          </p>
          <div className="case-study-hero-actions">
            <a className="button button-orange" href="https://prokemfoods.co.uk/" target="_blank" rel="noreferrer">
              Visit Prokem <ArrowUpRight size={17} />
            </a>
            <a className="case-study-scroll" href="#the-work">Explore the work <ArrowDownRight size={17} /></a>
          </div>
        </div>
        <div className="container case-study-brand-stage">
          <div className="case-study-brand-graphic">
            <span>AFRO · CARIBBEAN · FOOD SUPPLIES</span>
            <strong>prokem<span>.</span></strong>
            <small>THE FLAVOURS OF HOME, DELIVERED ACROSS THE UK</small>
            <i>BUILDGENIE LABS / CLIENT PROJECT 001</i>
          </div>
          <div className="case-study-stage-note">
            <span>PROJECT SCOPE</span>
            <strong>Brand strategy<br />+ Digital commerce</strong>
            <small>Brand, experience and engineering delivered together.</small>
          </div>
        </div>
      </section>

      <section className="case-study-context section-pad">
        <div className="container case-study-context-grid">
          <div><Eyebrow>THE BUSINESS</Eyebrow><h2>A specialist grocer.<br /><span>A wider sense of home.</span></h2></div>
          <div>
            <p>
              Prokem is an Afro-Caribbean food retailer based in Preston and
              serving customers across the United Kingdom. Its online range
              brings together everyday staples, fresh produce, meat and
              poultry, fish, spices, pantry goods, drinks and more.
            </p>
            <p>
              The current storefront presents more than 200 products across
              clearly organised aisles, with nationwide delivery information
              and collection options helping customers understand how to shop.
            </p>
            <a className="inline-link" href="https://prokemfoods.co.uk/" target="_blank" rel="noreferrer">
              Explore the live storefront <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="case-study-work section-pad" id="the-work">
        <div className="container">
          <div className="section-heading">
            <div><Eyebrow>WHAT BUILDGENIE DELIVERED</Eyebrow><h2>One connected brief.<br /><span>Four connected disciplines.</span></h2></div>
            <p>Instead of treating brand and technology as separate projects, the work connected what Prokem says, how it looks and how customers discover and buy.</p>
          </div>
          <div className="case-study-deliverables">
            {deliverables.map((item) => {
              const Icon = item.icon;
              return (
                <article className="case-study-deliverable" key={item.number}>
                  <div><span>{item.number}</span><Icon size={21} /></div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="case-study-experience section-pad">
        <div className="container case-study-experience-grid">
          <div>
            <Eyebrow>THE DIGITAL EXPERIENCE</Eyebrow>
            <h2>From discovery<br /><span>to the doorstep.</span></h2>
            <p>
              The e-commerce journey gives shoppers a way to browse by aisle,
              understand the available range and find practical delivery and
              collection information before they place an order.
            </p>
          </div>
          <div className="case-study-experience-points">
            <div><span>01</span><p><strong>Find the right aisle</strong>Shop through familiar food categories, from fresh vegetables and fish to spices, flours and pantry essentials.</p></div>
            <div><span>02</span><p><strong>Understand the offer</strong>Clear product and sourcing information helps communicate what is available and where it comes from.</p></div>
            <div><span>03</span><p><strong>Know how fulfilment works</strong>Delivery and collection information makes the route from online basket to customer more transparent.</p></div>
          </div>
        </div>
      </section>

      <section className="case-study-scope section-pad">
        <div className="container">
          <div className="case-study-scope-card">
            <div><Eyebrow>THE BUILDGENIE APPROACH</Eyebrow><h2>Position the business.<br /><span>Build the experience.</span></h2><p>Brand, messaging, design and e-commerce were developed as parts of the same customer journey.</p></div>
            <div className="case-study-scope-stamp"><BrandMark /><span>THINK<br />BUILD<br />GROW</span></div>
          </div>
        </div>
      </section>

      <section className="case-study-cta section-pad">
        <div className="container case-study-cta-inner">
          <div><Eyebrow>HAVE A CONNECTED CHALLENGE?</Eyebrow><h2>Let&apos;s bring your<br /><span>next move together.</span></h2><p>Whether you need positioning, a digital storefront or a complete product experience, start with the challenge. We&apos;ll help shape the right engagement.</p></div>
          <Link className="button button-orange" href={advisorLink("Brand, positioning & e-commerce", "Prokem case study")}>Explore your project with BuildGenie <ArrowUpRight size={17} /></Link>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand-block"><Link className="brand brand-light" href="/"><BrandMark /><span className="brand-name">buildgenie<span>labs</span></span></Link><p>Build with clarity.<br />Grow with intent.</p></div>
          <div className="footer-links"><div><span>EXPLORE</span><Link href="/services">Services</Link><Link href="/about">About BuildGenie</Link></div><div><span>CONNECT</span><Link href={advisorLink("Start a project")}>Work with us</Link><Link href="mailto:hello@buildgenielabs.com">Email us</Link></div></div>
          <div className="footer-note"><span>AN INDEPENDENT BUILDING PARTNER</span><p>For founders with somewhere<br />meaningful to go.</p></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} BuildGenie Labs. All rights reserved.</span><LegalLinks /><span>MADE FOR WHAT&apos;S NEXT</span></div>
      </footer>
    </main>
  );
}
