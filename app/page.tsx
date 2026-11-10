import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { LegalLinks } from "@/components/legal-links";
import { advisorLink } from "@/components/advisor-link";
import {
  ArrowDown,
  ArrowUpRight,
  Blocks,
  ChartNoAxesCombined,
  CircleDot,
  Compass,
  Layers3,
  Lightbulb,
  MoveUpRight,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Compass,
    title: "Strategy & direction",
    href: "/services/strategy",
    description:
      "Make the important decisions with a clearer view of your market, customers and next move.",
    tags: ["Business strategy", "Go-to-market", "Product direction"],
  },
  {
    number: "02",
    icon: ChartNoAxesCombined,
    title: "Marketing & growth",
    href: "/services/marketing",
    description:
      "Turn a good product into a business people discover, understand, trust and choose.",
    tags: ["User acquisition", "Growth marketing", "Brand & content"],
  },
  {
    number: "03",
    icon: Blocks,
    title: "Technology & products",
    href: "/services/technology",
    description:
      "Shape and build useful digital products, platforms and systems that move the business forward.",
    tags: ["Product development", "Engineering", "AI & automation"],
  },
  {
    number: "04",
    icon: Workflow,
    title: "Execution & operations",
    href: "/services/specialist",
    description:
      "Bring the right people, processes and specialist capabilities together to get meaningful work done.",
    tags: ["Specialist services", "Customer experience", "Operations"],
  },
];

const steps = [
  ["01", "Understand", "We get close to your business, your customers and the challenge in front of you."],
  ["02", "Find the signal", "We separate what matters from what is noise, then agree on a direction."],
  ["03", "Make it happen", "We bring strategy and execution together, with clear ownership and momentum."],
  ["04", "Learn and improve", "We measure what changes, learn from the market and keep moving forward."],
];

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <span />
      <span />
      <span />
      <span />
    </span>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="eyebrow">
      <span className="eyebrow-line" />
      {children}
    </div>
  );
}

export const metadata = {
  title: "BuildGenie Labs | Strategy, Growth, Technology & Execution",
  description: "A hands-on building partner for ambitious founders. BuildGenie connects business strategy, marketing, technology and execution.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: "BuildGenie Labs | Strategy, Growth, Technology & Execution",
    description: "A hands-on building partner for ambitious founders. BuildGenie connects business strategy, marketing, technology and execution.",
    url: "/",
  },
};

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero">
        <div className="hero-grid container">
          <div className="hero-copy">
            <h1>Good ideas deserve <span>great execution.</span></h1>
            <p className="hero-description">
              We help ambitious founders turn promising ideas into businesses
              that move forward — with the right strategy, growth and technology.
            </p>
            <div className="hero-actions">
              <Link href={advisorLink("Start a project")} className="button button-orange">
                Build with us <ArrowUpRight size={17} />
              </Link>
              <Link href="#what-we-do" className="text-link">
                Explore what we do <ArrowDown size={16} />
              </Link>
            </div>
            <div className="hero-footnote">
              <span className="footnote-rule" />
              A hands-on partner for the work that matters.
            </div>
          </div>

          <div className="hero-art" aria-label="Abstract illustration representing connected business capabilities">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-orbit orbit-three" />
            <div className="art-core">
              <BrandMark />
              <span>BUILD<br />WHAT&apos;S NEXT</span>
            </div>
            <div className="orbit-node node-strategy"><Compass size={19} /><span>Strategy</span></div>
            <div className="orbit-node node-growth"><ChartNoAxesCombined size={19} /><span>Growth</span></div>
            <div className="orbit-node node-tech"><Blocks size={19} /><span>Technology</span></div>
            <div className="orbit-node node-execution"><Workflow size={19} /><span>Execution</span></div>
            <div className="art-caption"><span /> ONE CONNECTED PARTNER</div>
          </div>
        </div>
        <div className="hero-bottom container">
          <span>STRATEGY</span><i /> <span>GROWTH</span><i /> <span>TECHNOLOGY</span><i /> <span>EXECUTION</span>
          <span className="hero-bottom-note">From first question to meaningful progress.</span>
        </div>
      </section>

      <section className="intro section-pad" id="about">
        <div className="container intro-grid">
          <div>
            <SectionEyebrow>THE BUILDGENIE IDEA</SectionEyebrow>
            <h2>Building a business is hard.<br /><span>You shouldn&apos;t have to figure it all out alone.</span></h2>
          </div>
          <div className="intro-body">
            <p>
              The distance between a promising idea and a thriving business is
              filled with decisions, experiments and a lot of work. Most founders
              don&apos;t need another presentation. They need a partner who can
              think alongside them and help make progress real.
            </p>
            <p>
              That&apos;s where we come in. BuildGenie Labs brings business thinking,
              creative problem-solving and technical capability into one place.
            </p>
            <Link className="inline-link" href="#approach">Get to know our approach <ArrowUpRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="services section-pad" id="what-we-do">
        <div className="container">
          <div className="section-heading">
            <div>
              <SectionEyebrow>WHAT WE DO</SectionEyebrow>
              <h2>Everything connected.<br /><span>Nothing in isolation.</span></h2>
            </div>
            <p>Businesses grow when the right things work together. We bring the capabilities you need into one coordinated effort.</p>
          </div>
          <div className="service-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article className="service-card" key={service.number}>
                  <div className="service-card-top">
                    <span className="service-number">{service.number}</span>
                    <span className="service-icon"><Icon size={21} strokeWidth={1.7} /></span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="tag-list">
                    {service.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <Link href={service.href} className="card-link" aria-label={`Explore ${service.title}`}>
                    Explore capability <ArrowUpRight size={16} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="growth-band">
        <div className="container growth-grid">
          <div className="growth-visual">
            <div className="growth-visual-top"><span>GROWTH IS A SYSTEM</span><span>BG / 01</span></div>
            <div className="growth-bars">
              <div className="bar bar-one"><span>01</span></div>
              <div className="bar bar-two"><span>02</span></div>
              <div className="bar bar-three"><span>03</span></div>
              <div className="bar bar-four"><span>04</span></div>
              <div className="bar bar-five"><span>05</span></div>
            </div>
            <div className="growth-visual-bottom"><span>LEARN</span><span>TEST</span><span>IMPROVE</span><span>REPEAT</span></div>
          </div>
          <div className="growth-copy">
            <SectionEyebrow>OUR CURRENT FOCUS</SectionEyebrow>
            <h2>Make growth<br /><span>less of a guessing game.</span></h2>
            <p>
              Great products still need to find their people. We help startups
              build a consistent path to discovery, adoption and retention —
              combining clear strategy with hands-on marketing execution.
            </p>
            <ul className="check-list">
              <li><CircleDot size={16} /> Validate before you scale</li>
              <li><CircleDot size={16} /> Build a repeatable acquisition engine</li>
              <li><CircleDot size={16} /> Turn customer insight into better decisions</li>
            </ul>
            <Link href="/services/marketing" className="button button-orange">Explore growth services <ArrowUpRight size={17} /></Link>
          </div>
        </div>
      </section>

      <section className="approach section-pad" id="approach">
        <div className="container">
          <div className="section-heading approach-heading">
            <div>
              <SectionEyebrow>HOW WE WORK</SectionEyebrow>
              <h2>Clarity first.<br /><span>Momentum always.</span></h2>
            </div>
            <p>No unnecessary complexity. We work in focused steps, keep communication open and make sure every activity connects to a business outcome.</p>
          </div>
          <div className="steps-grid">
            {steps.map(([number, title, description]) => (
              <article className="step" key={number}>
                <div className="step-number">{number}<span /></div>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ventures section-pad" id="ventures">
        <div className="container">
          <div className="section-heading">
            <div>
              <SectionEyebrow>SELECTED VENTURES</SectionEyebrow>
              <h2>We believe in building.<br /><span>We do it ourselves, too.</span></h2>
            </div>
            <p>Our work is informed by the realities of building products, finding customers and growing businesses from the ground up.</p>
          </div>
          <div className="venture-grid">
            <article className="venture-card venture-maigie">
              <div className="venture-top"><span>01 / LEARNING TECHNOLOGY</span><span className="venture-arrow"><ArrowUpRight size={19} /></span></div>
              <div className="venture-art maigie-art">
                <div className="maigie-orb orb-a" /><div className="maigie-orb orb-b" /><div className="maigie-orb orb-c" />
                <span className="maigie-word">maigie<span>.</span></span>
                <span className="maigie-caption">LEARNING THAT MOVES WITH YOU</span>
              </div>
              <div className="venture-info"><div><h3>Maigie</h3><p>An intelligent learning environment designed to keep learning moving.</p></div><span>PRODUCT VENTURE</span></div>
            </article>
            <article className="venture-card venture-cakkie">
              <div className="venture-top"><span>02 / FOOD & COMMUNITY</span><span className="venture-arrow"><ArrowUpRight size={19} /></span></div>
              <div className="venture-art cakkie-art">
                <div className="cake-shape"><div /><div /><div /></div>
                <span className="cakkie-word">cakkie<span>!</span></span>
                <span className="cakkie-caption">A LITTLE MORE ICING, A LOT MORE COMMUNITY</span>
              </div>
              <div className="venture-info"><div><h3>Cakkie</h3><p>A social platform bringing cake enthusiasts and creators together.</p></div><span>PRODUCT VENTURE</span></div>
            </article>
          </div>
          <p className="venture-disclaimer">These are BuildGenie-led ventures, included to show our builder mindset — not presented as commissioned client work.</p>
        </div>
      </section>


      <section className="client-work section-pad" id="clients">
        <div className="container">
          <div className="section-heading">
            <div>
              <SectionEyebrow>SELECTED CLIENT WORK</SectionEyebrow>
              <h2>Brands built with intent.<br /><span>Experiences built to connect.</span></h2>
            </div>
            <p>
              We work with ambitious businesses to shape how they show up,
              communicate their value and serve customers through thoughtful
              digital experiences.
            </p>
          </div>

          <article className="client-project-card">
            <div className="client-project-art" aria-label="Prokem Afro-Caribbean Foods featured client project">
              <span className="client-project-category">AFRO · CARIBBEAN · FOOD SUPPLIES</span>
              <div className="client-project-wordmark">prokem<span>.</span></div>
              <span className="client-project-art-note">THE FLAVOURS OF HOME,<br />DELIVERED ACROSS THE UK</span>
              <span className="client-project-art-index">BG / CLIENT 01</span>
            </div>
            <div className="client-project-content">
              <div className="client-project-meta">
                <span>01 / FOOD & E-COMMERCE</span>
                <span>CLIENT PROJECT</span>
              </div>
              <h3>Prokem Afro-Caribbean Foods</h3>
              <p>
                An Afro-Caribbean food retailer bringing authentic ingredients
                and pantry essentials to customers across the United Kingdom.
              </p>
              <div className="client-project-deliveries">
                <span>WHAT WE DELIVERED</span>
                <div><i>01</i><strong>Branding & brand identity</strong></div>
                <div><i>02</i><strong>Brand positioning & messaging</strong></div>
                <div><i>03</i><strong>Website design & development</strong></div>
                <div><i>04</i><strong>E-commerce platform development</strong></div>
              </div>
              <div className="client-project-actions">
                <Link href="/work/prokem">
                  Read the case study <ArrowUpRight size={16} />
                </Link>
                <a href="https://prokemfoods.co.uk/" target="_blank" rel="noreferrer">
                  Visit Prokem <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="belief section-pad">
        <div className="container belief-grid">
          <div className="belief-mark"><Sparkles size={25} /><span>BUILT AROUND<br />YOUR NEXT MOVE</span></div>
          <div>
            <SectionEyebrow>WHY BUILDGENIE</SectionEyebrow>
            <h2>Not another vendor.<br /><span>A partner in the work.</span></h2>
            <p>We bring the perspective to ask better questions, the capability to do the work and the commitment to stay close to the outcome.</p>
          </div>
          <div className="belief-points">
            <div><Target size={19} /><span><b>Outcome-minded</b>Work tied to what matters.</span></div>
            <div><Layers3 size={19} /><span><b>Connected capability</b>Strategy and execution together.</span></div>
            <div><Lightbulb size={19} /><span><b>Built to learn</b>Progress through real feedback.</span></div>
          </div>
        </div>
      </section>

      <section className="contact section-pad" id="contact">
        <div className="container contact-inner">
          <div className="contact-orbit"><div /><div /><div /></div>
          <div className="contact-content">
            <SectionEyebrow>LET&apos;S BUILD SOMETHING MEANINGFUL</SectionEyebrow>
            <h2>What are you<br /><span>working towards?</span></h2>
            <p>Tell us where you are, what you&apos;re trying to achieve and what&apos;s getting in the way. We&apos;ll take it from there.</p>
            <Link href="/contact" className="button button-orange">Start a conversation <ArrowUpRight size={17} /></Link>
          </div>
          <div className="contact-side-note">GOOD THINGS<br />GET BUILT<br /><span>TOGETHER.</span></div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand-block">
            <Link className="brand brand-light" href="/"><BrandMark /><span className="brand-name">buildgenie<span>labs</span></span></Link>
            <p>Build with clarity.<br />Grow with intent.</p>
          </div>
          <div className="footer-links">
            <div><span>EXPLORE</span><Link href="/services">Services</Link><Link href="#approach">Our approach</Link><Link href="#ventures">Ventures</Link></div>
            <div><span>CONNECT</span><Link href="/contact">Email us</Link><Link href={advisorLink("Start a project")}>Start a project</Link></div>
          </div>
          <div className="footer-note"><span>AN INDEPENDENT BUILDING PARTNER</span><p>For founders with somewhere<br />meaningful to go.</p></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} BuildGenie Labs. All rights reserved.</span><LegalLinks /><span>MADE FOR WHAT&apos;S NEXT <MoveUpRight size={13} /></span></div>
      </footer>
    </main>
  );
}
