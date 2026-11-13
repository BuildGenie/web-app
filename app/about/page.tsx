
import Link from "next/link";
import { ArrowUpRight, Compass, Layers3, Lightbulb, Target, Workflow } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { LegalLinks } from "@/components/legal-links";
import { advisorLink } from "@/components/advisor-link";

export const metadata = {
  title: "About | BuildGenie Labs",
  description: "BuildGenie Labs is a building partner for founders, connecting business strategy, marketing, technology and execution.",
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    title: "About BuildGenie Labs | Building Partner for Founders",
    description: "Get to know BuildGenie Labs: a building partner connecting business strategy, marketing, technology and execution.",
    url: "/about",
  },
};

const principles = [
  { icon: Target, title: "Start with the outcome", description: "We begin with the change the business needs, not a list of activities to fill a retainer." },
  { icon: Layers3, title: "Connect the moving parts", description: "Positioning, product, marketing and customer experience work better when they inform one another." },
  { icon: Workflow, title: "Stay close to execution", description: "We work alongside founders and teams, taking responsibility for turning plans into tangible work." },
  { icon: Lightbulb, title: "Learn as we build", description: "We use feedback, evidence and performance to improve the work and decide what should happen next." },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <div className="eyebrow"><span className="eyebrow-line" />{children}</div>;
}
function BrandMark() {
  return <span className="brand-mark" aria-hidden="true"><span /><span /><span /><span /></span>;
}

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <section className="about-hero">
        <div className="container about-hero-grid">
          <div>
            <Eyebrow>ABOUT BUILDGENIE LABS</Eyebrow>
            <h1>Built for founders.<br /><span>Committed to the work.</span></h1>
            <p>BuildGenie Labs is a building partner for ambitious businesses. We bring together strategy, marketing, technology and execution to help founders move from a promising idea to meaningful progress.</p>
            <Link className="button button-orange" href={advisorLink("Start a project")}>Work with us <ArrowUpRight size={17} /></Link>
          </div>
          <div className="about-hero-art" aria-label="BuildGenie Labs connected capabilities">
            <div className="about-art-ring about-ring-one" /><div className="about-art-ring about-ring-two" />
            <div className="about-art-core"><BrandMark /><span>BUILD<br />WITH INTENT</span></div>
            <div className="about-art-label label-one">STRATEGY</div><div className="about-art-label label-two">GROWTH</div>
            <div className="about-art-label label-three">TECHNOLOGY</div><div className="about-art-label label-four">EXECUTION</div>
          </div>
        </div>
      </section>

      <section className="about-belief section-pad">
        <div className="container about-belief-grid">
          <div><Eyebrow>WHY WE EXIST</Eyebrow><h2>Good ideas are everywhere.<br /><span>Getting them moving is the hard part.</span></h2></div>
          <div>
            <p>Founders often have to coordinate strategy, customer discovery, marketing, product development and day-to-day execution across disconnected people and providers. The gaps between those activities can slow progress and make it harder to see what is actually working.</p>
            <p>BuildGenie Labs exists to close those gaps. We combine business thinking with practical delivery, so the work stays connected to the outcome it is meant to create.</p>
          </div>
        </div>
      </section>

      <section className="about-principles section-pad">
        <div className="container">
          <div className="section-heading">
            <div><Eyebrow>HOW WE THINK</Eyebrow><h2>Clear thinking.<br /><span>Useful work.</span></h2></div>
            <p>These principles shape how we scope engagements, organise teams and make decisions with the people we work alongside.</p>
          </div>
          <div className="about-principles-grid">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return <article className="about-principle-card" key={principle.title}>
                <div><span>0{index + 1}</span><Icon size={21} /></div>
                <h3>{principle.title}</h3><p>{principle.description}</p>
              </article>;
            })}
          </div>
        </div>
      </section>

      <section className="about-model section-pad">
        <div className="container about-model-grid">
          <div>
            <Eyebrow>OUR MODEL</Eyebrow><h2>One partner.<br /><span>Several ways to make progress.</span></h2>
            <p>We are not only a marketing agency and we are not a consultancy that stops at the recommendation. Our work can begin with validation or strategy, continue into marketing and growth, and extend into product, technology or specialist execution.</p>
          </div>
          <div className="about-model-list">
            <div><Compass size={19} /><span><b>Think</b>Research, validation, strategy and direction.</span></div>
            <div><Target size={19} /><span><b>Reach</b>Positioning, marketing, acquisition and customer insight.</span></div>
            <div><Layers3 size={19} /><span><b>Build</b>Digital products, technology and connected systems.</span></div>
            <div><Workflow size={19} /><span><b>Deliver</b>Specialist execution, operations and customer support.</span></div>
          </div>
        </div>
      </section>

      <section className="about-ventures section-pad">
        <div className="container about-ventures-inner">
          <div><Eyebrow>BUILDER MINDSET</Eyebrow><h2>We build alongside<br /><span>the businesses we support.</span></h2>
            <p>Our own ventures keep us close to the practical realities of building products, earning trust, finding customers and improving an experience over time.</p>
          </div>
          <div className="about-venture-links">
            <Link href="/ventures/maigie"><span><b>Maigie</b><small>An intelligent learning environment.</small></span><ArrowUpRight size={18} /></Link>
            <Link href="/ventures/cakkie"><span><b>Cakkie</b><small>A social platform for cake enthusiasts.</small></span><ArrowUpRight size={18} /></Link>
            <Link className="about-ventures-all" href="/ventures">Explore all ventures <ArrowUpRight size={15} /></Link>
            <p>BuildGenie-led ventures, not commissioned client case studies.</p>
          </div>
        </div>
      </section>

      <section className="about-cta section-pad">
        <div className="container about-cta-inner">
          <div><Eyebrow>LET&apos;S BUILD WHAT&apos;S NEXT</Eyebrow><h2>Bring us the challenge.<br /><span>Let&apos;s find the next move.</span></h2></div>
          <Link className="button button-orange" href="/contact">Start a conversation <ArrowUpRight size={17} /></Link>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand-block"><Link className="brand brand-light" href="/"><BrandMark /><span className="brand-name">BuildGenie <span>Labs</span></span></Link><p>Build with clarity.<br />Grow with intent.</p></div>
          <div className="footer-links">
            <div><span>EXPLORE</span><Link href="/services">Services</Link><Link href="/services/marketing">Marketing & growth</Link><Link href="/#approach">Our approach</Link></div>
            <div><span>CONNECT</span><Link href="/contact">Contact</Link><Link href="mailto:hello@buildgenielabs.com">Email us</Link></div>
          </div>
          <div className="footer-note"><span>AN INDEPENDENT BUILDING PARTNER</span><p>For founders with somewhere<br />meaningful to go.</p></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} BuildGenie Labs. All rights reserved.</span><LegalLinks /><span>MADE FOR WHAT&apos;S NEXT</span></div>
      </footer>
    </main>
  );
}
