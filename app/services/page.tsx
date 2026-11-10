import Link from "next/link";
import {
  ArrowUpRight,
  Blocks,
  ChartNoAxesCombined,
  Check,
  Compass,
  Lightbulb,
  Workflow,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";

export const metadata = {
  title: "Services | BuildGenie Labs",
  description:
    "Explore strategy, validation, marketing, growth, technology and specialist execution services from BuildGenie Labs.",
};

const capabilities = [
  {
    number: "01",
    icon: Compass,
    name: "Strategy & validation",
    intro: "Make better decisions before committing time and capital.",
    offerings: [
      ["Idea validation", "Test the problem, audience and appetite before building further."],
      ["Market & customer research", "Understand the landscape, alternatives and people you need to reach."],
      ["Business & product strategy", "Turn what you learn into focused direction and practical priorities."],
      ["Go-to-market planning", "Define positioning, channels, launch sequence and measures of progress."],
    ],
  },
  {
    number: "02",
    icon: ChartNoAxesCombined,
    name: "Marketing & growth",
    intro: "Build a repeatable path from discovery to adoption and retention.",
    offerings: [
      ["Growth subscriptions", "Ongoing planning and execution with clear monthly deliverables and reporting."],
      ["User acquisition", "Campaigns and experiments designed to reach the right customers."],
      ["Brand & content", "Build a distinct voice and useful content across the channels that matter."],
      ["Social media management", "Consistent publishing, community presence and channel management."],
    ],
    href: "/services/marketing",
    linkLabel: "Explore marketing & growth",
  },
  {
    number: "03",
    icon: Blocks,
    name: "Technology & products",
    intro: "Use technology to solve real problems and create better experiences.",
    offerings: [
      ["Product design & development", "Shape and deliver digital products from first release to scale."],
      ["Web & mobile engineering", "Build reliable web and mobile experiences for your customers."],
      ["AI & automation", "Apply AI and automation where they create practical business value."],
      ["Technical advisory", "Get experienced guidance on architecture, teams and technical decisions."],
    ],
  },
  {
    number: "04",
    icon: Workflow,
    name: "Specialist execution",
    intro: "Bring focused expertise into the business when it is needed.",
    offerings: [
      ["Design & creative", "Campaign assets, visual systems and product communication."],
      ["Customer support", "Support workflows, help content and customer feedback loops."],
      ["Performance marketing", "Campaign architecture, testing, optimisation and reporting."],
      ["Operations support", "Improve the workflows and coordination behind consistent delivery."],
    ],
    href: "/services/specialist",
    linkLabel: "Explore specialist services",
  },
];

const engagementTypes = [
  {
    number: "01",
    title: "Validate",
    description:
      "A focused, one-off engagement to test an idea, proposition or market before making a bigger commitment.",
  },
  {
    number: "02",
    title: "Strategise",
    description:
      "A structured strategy engagement that creates direction, priorities and an actionable roadmap.",
  },
  {
    number: "03",
    title: "Grow",
    description:
      "Monthly subscriptions for consistent marketing execution, acquisition activity and learning.",
  },
  {
    number: "04",
    title: "Specialist",
    description:
      "Clearly scoped projects for a specific capability, deliverable or operational need.",
  },
  {
    number: "05",
    title: "Support",
    description:
      "Customer support services that can be included in a plan or engaged as an add-on.",
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <div className="eyebrow"><span className="eyebrow-line" />{children}</div>;
}

export default function ServicesPage() {
  return (
    <main>
      <SiteHeader />

      <section className="services-hero">
        <div className="container services-hero-inner">
          <Eyebrow>OUR CAPABILITIES</Eyebrow>
          <h1>From the first question<br />to <span>what comes next.</span></h1>
          <p>
            BuildGenie Labs brings strategy, marketing, technology and execution
            together. Start with the challenge in front of you; we'll help work
            out what it takes to move forward.
          </p>
          <div className="services-hero-meta">
            <span>THINK CLEARLY</span><i /><span>BUILD INTENTIONALLY</span><i /><span>GROW CONSISTENTLY</span>
          </div>
        </div>
      </section>

      <section className="capability-list section-pad">
        <div className="container">
          <div className="section-heading">
            <div>
              <Eyebrow>WHAT WE CAN HELP WITH</Eyebrow>
              <h2>Connected capabilities.<br /><span>Practical outcomes.</span></h2>
            </div>
            <p>
              We assemble the right mix of thinking and execution around your
              goals. You don't need to buy everything to get started.
            </p>
          </div>

          <div className="capability-stack">
            {capabilities.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  className="capability-row"
                  id={item.number === "02" ? "marketing-growth" : undefined}
                  key={item.number}
                >
                  <div className="capability-heading">
                    <span className="capability-number">{item.number}</span>
                    <span className="capability-icon"><Icon size={22} /></span>
                    <h3>{item.name}</h3>
                    <p>{item.intro}</p>
                    {item.href && (
                      <Link className="capability-link" href={item.href}>
                        {item.linkLabel} <ArrowUpRight size={15} />
                      </Link>
                    )}
                  </div>
                  <div className="capability-offerings">
                    {item.offerings.map(([title, detail]) => (
                      <div className="offering" key={title}>
                        <span className="offering-check"><Check size={14} /></span>
                        <div><h4>{title}</h4><p>{detail}</p></div>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="engagements section-pad">
        <div className="container">
          <div className="section-heading">
            <div>
              <Eyebrow>HOW TO WORK WITH US</Eyebrow>
              <h2>Start where you are.<br /><span>Choose what you need.</span></h2>
            </div>
            <p>
              Engagements are designed around the stage of your business and
              the kind of support that will make the biggest difference.
            </p>
          </div>

          <div className="engagement-grid">
            {engagementTypes.map((item) => (
              <article className="engagement-card" key={item.number}>
                <div className="engagement-top"><span>{item.number}</span></div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {item.title === "Grow" ? (
                  <Link href="/services/marketing">Explore subscriptions <ArrowUpRight size={16} /></Link>
                ) : item.title === "Specialist" ? (
                  <Link href="/services/specialist">Explore specialist menu <ArrowUpRight size={16} /></Link>
                ) : (
                  <Link href="/contact">Discuss this engagement <ArrowUpRight size={16} /></Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="services-cta section-pad">
        <div className="container services-cta-inner">
          <div>
            <Eyebrow>LET'S FIND THE RIGHT STARTING POINT</Eyebrow>
            <h2>Not sure what you need<br /><span>just yet?</span></h2>
            <p>
              That's a good place to start. Tell us what you're working on and
              we'll help you identify the next practical step.
            </p>
          </div>
          <Link className="button button-orange" href="/contact">
            Talk to BuildGenie <ArrowUpRight size={17} />
          </Link>
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
            <div><span>EXPLORE</span><Link href="/services">Services</Link><Link href="/#approach">Our approach</Link><Link href="/#ventures">Ventures</Link></div>
            <div><span>CONNECT</span><Link href="/contact">Email us</Link><Link href="/contact">Start a project</Link></div>
          </div>
          <div className="footer-note"><span>AN INDEPENDENT BUILDING PARTNER</span><p>For founders with somewhere<br />meaningful to go.</p></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} BuildGenie Labs. All rights reserved.</span><span>MADE FOR WHAT'S NEXT</span></div>
      </footer>
    </main>
  );
}
