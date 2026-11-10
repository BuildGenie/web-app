import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  Headset,
  Layers3,
  Megaphone,
  Palette,
  PenTool,
  Search,
  Settings2,
  UsersRound,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";

export const metadata = {
  title: "Specialist Services | BuildGenie Labs",
  description:
    "Commission focused design, content, performance marketing, research, customer support and operational services from BuildGenie Labs.",
};

const services = [
  {
    icon: Palette,
    number: "01",
    title: "Brand & visual design",
    bestFor: "Startups that need a clearer, more consistent brand presence.",
    scope: [
      "Brand direction and visual refinement",
      "Campaign and social media creative",
      "Presentation and sales collateral",
      "Marketing graphics and digital assets",
    ],
    deliverables: "Approved creative files, editable source assets where agreed, and usage-ready exports.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Content & copywriting",
    bestFor: "Teams that need to communicate their value clearly and consistently.",
    scope: [
      "Messaging and content direction",
      "Website and landing-page copy",
      "Campaign and advert copy",
      "Email, social and product communication",
    ],
    deliverables: "A defined copy set, content document or channel-ready content batch.",
  },
  {
    icon: Megaphone,
    number: "03",
    title: "Social media management",
    bestFor: "Founders who need consistent channel operations and community presence.",
    scope: [
      "Channel and audience review",
      "Monthly content calendar",
      "Content preparation and publishing",
      "Community monitoring and monthly reporting",
    ],
    deliverables: "Approved calendar, published content within the agreed volume, and channel report.",
  },
  {
    icon: BarChart3,
    number: "04",
    title: "Performance marketing",
    bestFor: "Products ready to test paid acquisition with clear measurement.",
    scope: [
      "Campaign and account structure",
      "Audience, offer and creative testing",
      "Budget pacing and optimisation",
      "Conversion tracking and performance analysis",
    ],
    deliverables: "Campaign setup, experiment log, optimisation actions and performance report.",
  },
  {
    icon: Search,
    number: "05",
    title: "Customer & market research",
    bestFor: "Teams that need evidence before making product or growth decisions.",
    scope: [
      "Research questions and methodology",
      "Competitor and category review",
      "Customer interviews or surveys",
      "Insight synthesis and prioritised recommendations",
    ],
    deliverables: "Research brief, findings summary, supporting evidence and recommended next steps.",
  },
  {
    icon: Headset,
    number: "06",
    title: "Customer support operations",
    bestFor: "Products that need a more reliable customer experience after acquisition.",
    scope: [
      "Support channel and workflow setup",
      "Response guidelines and escalation paths",
      "FAQ and help-content development",
      "Ticket handling and recurring issue reporting",
    ],
    deliverables: "Support playbook, response templates, agreed coverage and issue insights.",
  },
  {
    icon: Layers3,
    number: "07",
    title: "Launch & campaign operations",
    bestFor: "Teams preparing a product release, campaign or important market moment.",
    scope: [
      "Launch planning and workback schedule",
      "Campaign asset and channel coordination",
      "Partner and stakeholder coordination",
      "Launch monitoring and post-launch review",
    ],
    deliverables: "Launch plan, asset checklist, activity tracker and retrospective.",
  },
  {
    icon: Settings2,
    number: "08",
    title: "Marketing systems & analytics",
    bestFor: "Teams that need better visibility into where leads and users come from.",
    scope: [
      "Analytics and conversion event planning",
      "Campaign tagging and attribution basics",
      "Lead capture and CRM workflow support",
      "Dashboard and reporting setup",
    ],
    deliverables: "Tracking plan, configured reports or dashboard, and measurement notes.",
  },
];

const pricingModels = [
  {
    title: "Fixed-scope project",
    description:
      "Best when the output is clearly defined, such as a research brief, campaign kit, landing page or launch plan.",
  },
  {
    title: "Monthly service add-on",
    description:
      "Best for recurring needs such as social media management, creative production or customer support capacity.",
  },
  {
    title: "Scoped specialist sprint",
    description:
      "Best when you need focused expertise for a short, agreed period with a clear outcome and handover.",
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <div className="eyebrow"><span className="eyebrow-line" />{children}</div>;
}

function BrandMark() {
  return <span className="brand-mark" aria-hidden="true"><span /><span /><span /><span /></span>;
}

export default function SpecialistServicesPage() {
  return (
    <main>
      <SiteHeader />

      <section className="specialist-hero">
        <div className="container specialist-hero-inner">
          <Eyebrow>SPECIALIST SERVICES</Eyebrow>
          <h1>The right expertise<br />for <span>the work at hand.</span></h1>
          <p>
            Some challenges need a focused skill, not a full monthly programme.
            Commission a clearly scoped deliverable or add specialist capacity
            to an existing BuildGenie engagement.
          </p>
          <div className="specialist-hero-note">
            <span /> INTERNAL DELIVERY FIRST <i /> SPECIALISTS WHEN THEY ADD VALUE
          </div>
        </div>
      </section>

      <section className="specialist-catalogue section-pad">
        <div className="container">
          <div className="section-heading">
            <div>
              <Eyebrow>THE SERVICE CATALOGUE</Eyebrow>
              <h2>Specific skills.<br /><span>Clearly scoped outputs.</span></h2>
            </div>
            <p>
              Every engagement starts with a brief. We agree on the output,
              volume, timeline, review process and ownership before work begins.
            </p>
          </div>

          <div className="specialist-catalogue-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article className="specialist-detail-card" key={service.number}>
                  <div className="specialist-detail-top">
                    <span>{service.number}</span>
                    <span className="specialist-detail-icon"><Icon size={20} /></span>
                  </div>
                  <h3>{service.title}</h3>
                  <p className="specialist-best-for">{service.bestFor}</p>
                  <div className="specialist-scope-label">POTENTIAL SCOPE</div>
                  <ul>
                    {service.scope.map((scope) => <li key={scope}>{scope}</li>)}
                  </ul>
                  <div className="specialist-deliverable">
                    <span>EXAMPLE OUTPUT</span>
                    <p>{service.deliverables}</p>
                  </div>
                  <Link href="/#contact">Discuss this service <ArrowUpRight size={15} /></Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="specialist-pricing section-pad">
        <div className="container">
          <div className="section-heading">
            <div>
              <Eyebrow>HOW SPECIALIST WORK IS PRICED</Eyebrow>
              <h2>Pay for a defined<br /><span>piece of progress.</span></h2>
            </div>
            <p>
              We don't force every requirement into a subscription. The
              commercial model follows the shape of the work.
            </p>
          </div>
          <div className="pricing-model-grid">
            {pricingModels.map((model, index) => (
              <article className="pricing-model" key={model.title}>
                <span>0{index + 1}</span>
                <h3>{model.title}</h3>
                <p>{model.description}</p>
              </article>
            ))}
          </div>
          <div className="pricing-clarity">
            <div><strong>Every quote makes the boundaries clear.</strong><p>You'll see the deliverables, assumptions, number of review rounds, timeline, responsibilities and exclusions before approving the work.</p></div>
            <div><strong>External costs stay separate.</strong><p>Media budgets, paid tools, stock assets, creator fees, printing and other third-party costs are itemised and approved before commitment.</p></div>
          </div>
        </div>
      </section>

      <section className="specialist-delivery section-pad">
        <div className="container specialist-delivery-grid">
          <div>
            <Eyebrow>HOW WE STAFF THE WORK</Eyebrow>
            <h2>One accountable team.<br /><span>Specialist support by design.</span></h2>
            <p>
              BuildGenie prefers to deliver through its internal team. Where a
              brief requires niche expertise or temporary capacity, we may
              bring in a carefully selected specialist under BuildGenie
              direction. You have one point of accountability throughout.
            </p>
          </div>
          <div className="specialist-delivery-points">
            <div><UsersRound size={19} /><span><b>Internal team first</b>Core planning, coordination and delivery stay with BuildGenie.</span></div>
            <div><Search size={19} /><span><b>Specialists for a reason</b>External support is used selectively when it improves the work.</span></div>
            <div><CheckCircle2Fallback /><span><b>Clear ownership</b>One agreed scope, delivery lead and route for feedback.</span></div>
          </div>
        </div>
      </section>

      <section className="specialist-cta section-pad">
        <div className="container specialist-cta-inner">
          <div>
            <Eyebrow>HAVE A SPECIFIC REQUIREMENT?</Eyebrow>
            <h2>Let's scope the work<br /><span>before we start.</span></h2>
            <p>Share the outcome you need. We'll come back with a practical scope and a clear commercial proposal.</p>
          </div>
          <Link className="button button-orange" href="/#contact">Request a proposal <ArrowUpRight size={17} /></Link>
        </div>
      </section>

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
            <div><span>EXPLORE</span><Link href="/services">Services</Link><Link href="/services/marketing">Marketing & growth</Link><Link href="/#approach">Our approach</Link></div>
            <div><span>CONNECT</span><Link href="mailto:hello@buildgenielabs.com">Email us</Link><Link href="/#contact">Start a project</Link></div>
          </div>
          <div className="footer-note"><span>AN INDEPENDENT BUILDING PARTNER</span><p>For founders with somewhere<br />meaningful to go.</p></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} BuildGenie Labs. All rights reserved.</span><span>MADE FOR WHAT'S NEXT</span></div>
      </footer>
    </main>
  );
}

function CheckCircle2Fallback() {
  return <span className="specialist-ownership-check">✓</span>;
}
