import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  Check,
  CheckCircle2,
  ClipboardList,
  Headset,
  Lightbulb,
  Megaphone,
  Palette,
  Search,
  Target,
  UsersRound,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { LegalLinks } from "@/components/legal-links";
import { advisorLink } from "@/components/advisor-link";

export const metadata = {
  title: "Marketing & Growth | BuildGenie Labs",
  description:
    "Practical marketing, validation and growth execution for startups. BuildGenie Labs helps founders find customers and build momentum.",
  alternates: { canonical: "/services/marketing" },
  openGraph: {
    type: "website",
    title: "Marketing & Growth | BuildGenie Labs",
    description: "Practical marketing, validation and growth execution for startups. BuildGenie helps founders find customers and build momentum.",
    url: "/services/marketing",
  },
};

const engagements = [
  {
    number: "01",
    label: "Validate",
    type: "One-off engagement",
    fee: "₦250,000",
    timeline: "10–15 working days",
    icon: Search,
    headline: "Test the opportunity before you scale it.",
    description:
      "For founders who need evidence about the problem, audience or offer before investing more heavily in a product or campaign.",
    deliverables: [
      "Customer and audience discovery",
      "Competitor and alternative landscape",
      "Problem, proposition and message testing",
      "Targeted outreach to a cohort of up to 25 qualified product-trial participants",
      "Feedback summary with key assumptions",
      "Clear next-step recommendation",
    ],
  },
  {
    number: "02",
    label: "Growth Strategy",
    type: "One-off engagement",
    fee: "₦250,000",
    timeline: "10 working days",
    icon: Lightbulb,
    headline: "Turn insight into a focused growth plan.",
    description:
      "For teams that need a coherent marketing direction, stronger positioning or a practical route to market.",
    deliverables: [
      "Audience segments and ideal customer profile",
      "Positioning and value proposition",
      "Messaging and channel strategy",
      "Go-to-market or campaign roadmap",
      "90-day priorities and measurement framework",
    ],
  },
  {
    number: "03",
    label: "Go-to-Market Strategy",
    type: "One-off engagement",
    icon: Megaphone,
    fee: "₦450,000",
    timeline: "15–20 working days",
    headline: "Plan a launch with a clear route to market.",
    description:
      "For teams preparing to introduce a product, enter a market or coordinate a focused launch campaign.",
    deliverables: [
      "Market and competitor analysis",
      "Audience, positioning and launch messaging",
      "Channel mix and launch sequence",
      "Campaign plan, budget and activity roadmap",
      "Measurement framework and launch priorities",
    ],
  },
];

const subscriptions = [
  {
    number: "01",
    name: "Launch",
    fee: "₦350,000",
    capacity: "One product · one audience · up to two channels",
    audience: "For startups building their first repeatable acquisition motion",
    summary:
      "A focused monthly programme that helps you get in front of the right people, bring them into the product and learn from their response.",
    outcomes: [
      "Monthly growth plan and campaign calendar",
      "Execution across an agreed channel mix",
      "Audience, offer and message experiments",
      "A monthly user-acquisition target agreed before kickoff, with transparent tracking",
      "User feedback and friction insights",
      "Monthly performance review and next actions",
    ],
  },
  {
    number: "02",
    name: "Growth",
    fee: "₦650,000",
    capacity: "Up to two audience segments · up to three channels",
    audience: "For products with early traction ready to improve and expand",
    summary:
      "A broader growth partnership that builds on what is already working and improves the full path from first touch to retained customer.",
    outcomes: [
      "Multi-channel growth roadmap and prioritisation",
      "Campaign planning, execution and optimisation",
      "Continuous acquisition and conversion experiments",
      "Activation and retention improvement initiatives",
      "Customer feedback synthesis and insight",
      "Acquisition, activation and retention scorecard",
      "Performance dashboard, monthly review and quarterly direction",
    ],
  },
];

const specialists = [
  {
    icon: Palette,
    title: "Brand, design & creative",
    description:
      "Campaign concepts, brand assets, social creative, presentation design and visual communication.",
    outputs: "Creative direction, design assets, campaign kits",
  },
  {
    icon: Megaphone,
    title: "Social media & content",
    description:
      "Social Media Lite is ₦50,000/month for one platform, up to eight client-supplied content items and scheduling/publishing only. Full management, including creative coordination and community activity, is scoped separately.",
    outputs: "Content calendar, copy, creative and channel reports",
  },
  {
    icon: BarChart3,
    title: "Performance marketing",
    description:
      "Paid campaign strategy, account and campaign setup, audience testing, optimisation and reporting.",
    outputs: "Campaign structure, optimisation log, performance report",
  },
  {
    icon: UsersRound,
    title: "Research & customer insight",
    description:
      "Customer interviews, surveys, competitor reviews, feedback analysis and customer journey insight.",
    outputs: "Research plan, findings, recommendations",
  },
  {
    icon: Headset,
    title: "Customer support",
    description:
      "Support workflows, help content, ticket handling and customer feedback loops.",
    outputs: "Support playbook, response workflows, issue insights",
  },
  {
    icon: ClipboardList,
    title: "Campaign & launch support",
    description:
      "Launch coordination, campaign operations, partner coordination and post-launch learning.",
    outputs: "Launch checklist, campaign assets, retrospective",
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="eyebrow">
      <span className="eyebrow-line" />
      {children}
    </div>
  );
}

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <span /><span /><span /><span />
    </span>
  );
}

function Footer() {
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
          <div>
            <span>EXPLORE</span>
            <Link href="/services">All services</Link>
            <Link href="/#approach">Our approach</Link>
            <Link href="/#ventures">Ventures</Link>
          </div>
          <div>
            <span>CONNECT</span>
            <Link href="/contact">Email us</Link>
            <Link href={advisorLink("Start a project")}>Start a project</Link>
          </div>
        </div>
        <div className="footer-note">
          <span>AN INDEPENDENT BUILDING PARTNER</span>
          <p>For founders with somewhere<br />meaningful to go.</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} BuildGenie Labs. All rights reserved.</span>
        <LegalLinks />
        <span>MADE FOR WHAT&apos;S NEXT</span>
      </div>
    </footer>
  );
}

export default function MarketingGrowthPage() {
  return (
    <main>
      <SiteHeader />

      <section className="marketing-hero">
        <div className="container marketing-hero-grid">
          <div className="marketing-hero-copy">
            <Eyebrow>MARKETING & GROWTH</Eyebrow>
            <h1>Get your product<br />in front of <span>the right people.</span></h1>
            <p>
              We help startups move from scattered marketing activity to a
              clearer growth system, combining customer insight, strategy and
              hands-on execution.
            </p>
            <div className="marketing-hero-actions">
              <Link className="button button-orange" href={advisorLink("Marketing & growth")}>
                Talk about growth <ArrowUpRight size={17} />
              </Link>
              <Link className="text-link" href="#subscriptions">
                Explore subscriptions <ArrowUpRight size={16} />
              </Link>
            </div>
            <div className="marketing-hero-note">
              <span /> STRATEGY, EXECUTION AND LEARNING IN ONE TEAM
            </div>
          </div>

          <div className="marketing-visual" aria-label="Illustration of a continuous growth cycle">
            <div className="marketing-visual-top">
              <span>THE GROWTH LOOP</span><span>BG / 02</span>
            </div>
            <div className="growth-loop">
              <div className="growth-loop-ring" />
              <div className="growth-loop-center"><Target size={27} /><span>BETTER<br />GROWTH</span></div>
              <div className="growth-loop-node loop-discover"><Search size={17} /><span>Discover</span></div>
              <div className="growth-loop-node loop-acquire"><UsersRound size={17} /><span>Acquire</span></div>
              <div className="growth-loop-node loop-learn"><Lightbulb size={17} /><span>Learn</span></div>
              <div className="growth-loop-node loop-improve"><BarChart3 size={17} /><span>Improve</span></div>
            </div>
            <div className="marketing-visual-bottom">
              <span>INSIGHT</span><span>EXPERIMENT</span><span>EXECUTION</span><span>ITERATION</span>
            </div>
          </div>
        </div>
      </section>

      <section className="marketing-principles section-pad">
        <div className="container marketing-principles-grid">
          <div>
            <Eyebrow>OUR POINT OF VIEW</Eyebrow>
            <h2>Marketing should create<br /><span>momentum you can measure.</span></h2>
          </div>
          <p>
            We don&apos;t treat marketing as a list of posts or isolated campaigns.
            We connect what a business promises, who it needs to reach, how
            people experience the product and what the data tells us to do next.
            The aim is not activity for its own sake; it is better decisions and
            meaningful customer growth.
          </p>
        </div>
      </section>

      <section className="validation-section section-pad">
        <div className="container">
          <div className="section-heading">
            <div>
              <Eyebrow>BEFORE THE MONTHLY WORK</Eyebrow>
              <h2>Get the thinking right<br /><span>before turning up the volume.</span></h2>
            </div>
            <p>
              These focused engagements help establish what to say, who to
              reach and which assumptions deserve to be tested first.
            </p>
          </div>

          <div className="sprint-grid">
            {engagements.map((item) => {
              const Icon = item.icon;
              return (
                <article className="sprint-card" key={item.number}>
                  <div className="sprint-card-top">
                    <span>{item.number} / {item.type.toUpperCase()}</span>
                    <Icon size={22} />
                  </div>
                  <div className="sprint-card-pricing">
                    <div><span>PROJECT FEE</span><strong>{item.fee}</strong></div>
                    <span>{item.timeline}</span>
                  </div>
                  <h3>{item.label}</h3>
                  <h4>{item.headline}</h4>
                  <p>{item.description}</p>
                  <div className="sprint-deliverables-title">WHAT YOU RECEIVE</div>
                  <ul>
                    {item.deliverables.map((deliverable) => (
                      <li key={deliverable}><Check size={15} />{deliverable}</li>
                    ))}
                  </ul>
                  <Link href={advisorLink("Marketing & growth", item.label)} className="inline-link">
                    Scope this engagement <ArrowUpRight size={16} />
                  </Link>
                </article>
              );
            })}
          </div>
          <p className="sprint-pricing-note">The cohort size is a planning ceiling, not a guaranteed number of activated users. Recruitment depends on audience availability and product readiness; paid media and participant incentives are budgeted separately.</p>
        </div>
      </section>

      <section className="subscription-section section-pad" id="subscriptions">
        <div className="container">
          <div className="section-heading">
            <div>
              <Eyebrow>ONGOING GROWTH PARTNERSHIP</Eyebrow>
              <h2>Consistency beats<br /><span>occasional bursts.</span></h2>
            </div>
            <p>
              Monthly subscriptions give your business a consistent team,
              operating rhythm and set of deliverables, without having to
              assemble a marketing department from scratch.
            </p>
          </div>

          <div className="subscription-grid">
            {subscriptions.map((plan) => (
              <article className="subscription-card" key={plan.number}>
                <div className="subscription-card-top">
                  <span>{plan.number} / MONTHLY SUBSCRIPTION</span>
                  <span className="subscription-status">IN-HOUSE DELIVERY</span>
                </div>
                <h3>{plan.name}</h3>
                <div className="subscription-price"><strong>{plan.fee}</strong><span>/ month</span></div>
                <p className="subscription-capacity">{plan.capacity}</p>
                <p className="subscription-audience">{plan.audience}</p>
                <p className="subscription-summary">{plan.summary}</p>
                <div className="subscription-divider" />
                <span className="subscription-includes">MONTHLY DELIVERY INCLUDES</span>
                <ul>
                  {plan.outcomes.map((outcome) => (
                    <li key={outcome}><CheckCircle2 size={16} />{outcome}</li>
                  ))}
                </ul>
                <div className="subscription-footer">
                  <span>Three-month initial term · Paid monthly in advance</span>
                  <Link href={advisorLink("Marketing & growth", `${plan.name} plan`)} aria-label={`Discuss the ${plan.name} plan`}>
                    Discuss {plan.name} <ArrowUpRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="subscription-note">
            <strong>Clear scope. Clear spend.</strong>
            <span>
              Both plans begin with a three-month commitment and are paid monthly in advance. Save 5% with quarterly prepayment or 10% with annual prepayment. Advertising spend, creator fees, paid tools, incentives and other third-party costs are separate and approved with you before commitment. Acquisition targets are agreed from the starting baseline and channel economics, then tracked transparently; they are not unconditional guarantees of user numbers.
            </span>
          </div>
        </div>
      </section>

      <section className="specialist-section section-pad">
        <div className="container">
          <div className="section-heading">
            <div>
              <Eyebrow>ON-DEMAND SPECIALIST SERVICES</Eyebrow>
              <h2>Bring in the skill<br /><span>the work actually needs.</span></h2>
            </div>
            <p>
              Need a specific capability rather than a monthly programme?
              Commission a defined piece of work or add a specialist service to
              an existing engagement.
            </p>
          </div>

          <div className="specialist-grid">
            {specialists.map((item) => {
              const Icon = item.icon;
              return (
                <article className="specialist-card" key={item.title}>
                  <div className="specialist-icon"><Icon size={20} /></div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="specialist-output">
                    <span>EXAMPLE OUTPUTS</span>
                    <strong>{item.outputs}</strong>
                  </div>
                  <Link href={advisorLink("Marketing & growth", item.title)}>Request a scope <ArrowUpRight size={15} /></Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>


      <section className="marketing-addons section-pad">
        <div className="container marketing-addons-grid">
          <div>
            <Eyebrow>EXTEND YOUR GROWTH TEAM</Eyebrow>
            <h2>Add the support<br /><span>your next stage needs.</span></h2>
            <p>Some capabilities are best included in a monthly plan; others work better as a clearly scoped add-on. We agree the capacity and outputs before the month begins.</p>
          </div>
          <div className="marketing-addon-list">
            <div><span>01</span><div><h3>Social media management</h3><p>Content calendar, creative coordination, publishing and community activity.</p></div></div>
            <div><span>02</span><div><h3>Customer support</h3><p>Defined support coverage, response workflows, escalation and recurring issue insights.</p></div></div>
            <div><span>03</span><div><h3>Creative production</h3><p>Campaign concepts, graphics, short-form content and conversion-focused assets.</p></div></div>
            <div><span>04</span><div><h3>Landing pages & conversion assets</h3><p>Focused landing pages, lead capture and onboarding touchpoints that support campaigns.</p></div></div>
          </div>
        </div>
      </section>

      <section className="delivery-section section-pad">
        <div className="container delivery-grid">
          <div>
            <Eyebrow>HOW WE DELIVER</Eyebrow>
            <h2>One accountable team.<br /><span>Close to the work.</span></h2>
            <p>
              Your work is led and executed by our internal team. We bring in
              external specialist partners selectively when a project calls
              for niche expertise that is better served by a dedicated
              specialist.
            </p>
          </div>
          <div className="delivery-steps">
            <div><span>01</span><div><h3>Align on the outcome</h3><p>Agree on the business goal, audience, scope and measures.</p></div></div>
            <div><span>02</span><div><h3>Plan the work</h3><p>Turn the brief into clear activities, ownership and deliverables.</p></div></div>
            <div><span>03</span><div><h3>Execute and learn</h3><p>Deliver consistently, share what we learn and improve the next cycle.</p></div></div>
          </div>
        </div>
      </section>

      <section className="marketing-cta section-pad">
        <div className="container marketing-cta-inner">
          <div>
            <Eyebrow>READY TO MOVE FORWARD?</Eyebrow>
            <h2>Let&apos;s make growth<br /><span>part of the plan.</span></h2>
            <p>Tell us what you&apos;re building, what you&apos;ve tried and where you&apos;d like to go next.</p>
          </div>
          <Link className="button button-orange" href={advisorLink("Marketing & growth")}>
            Start a conversation <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
