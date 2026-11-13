import Link from "next/link";
import { ArrowUpRight, Layers3, ShoppingBag, Target, Workflow } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata = {
  title: "Selected Client Work | BuildGenie Labs",
  description: "Explore selected BuildGenie Labs client work across brand identity, positioning, digital experiences and e-commerce.",
  alternates: { canonical: "/work" },
  openGraph: {
    type: "website",
    title: "Selected Client Work | BuildGenie Labs",
    description: "See how BuildGenie connects strategy, brand and technology in practical client engagements.",
    url: "/work",
  },
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <div className="eyebrow"><span className="eyebrow-line" />{children}</div>;
}

const deliverables = [
  { icon: Target, title: "Brand identity", description: "A clearer visual foundation for how the business presents itself." },
  { icon: Layers3, title: "Positioning & messaging", description: "A connected story for the products, customers and value the business serves." },
  { icon: Workflow, title: "Website design & development", description: "A digital experience built to carry the brand into the customer journey." },
  { icon: ShoppingBag, title: "E-commerce platform", description: "An online storefront that brings product discovery and shopping together." },
];

export default function WorkPage() {
  return (
    <main>
      <SiteHeader />
      <section className="work-index-hero">
        <div className="container">
          <Eyebrow>SELECTED CLIENT WORK</Eyebrow>
          <h1>Thoughtful work.<br /><span>Built to move businesses forward.</span></h1>
          <p>We connect the decisions behind a business with the experiences customers actually see. Here is a closer look at a client engagement that brought brand, positioning and commerce together.</p>
          <div className="work-index-meta"><span>CLIENT ENGAGEMENTS</span><span>STRATEGY · BRAND · DIGITAL · EXECUTION</span></div>
        </div>
      </section>

      <section className="work-featured section-pad">
        <div className="container">
          <article className="work-featured-card">
            <div className="work-featured-art">
              <span>AFRO · CARIBBEAN · FOOD SUPPLIES</span>
              <strong>prokem<span>.</span></strong>
              <small>THE FLAVOURS OF HOME, DELIVERED ACROSS THE UK</small>
              <i>BUILDGENIE LABS / CLIENT PROJECT 001</i>
            </div>
            <div className="work-featured-copy">
              <div className="work-featured-topline"><span>01 / FOOD & E-COMMERCE</span><span>FEATURED CASE STUDY</span></div>
              <h2>Prokem Afro-Caribbean Foods</h2>
              <p>We brought the brand foundation and digital storefront together for an Afro-Caribbean food retailer serving customers across the United Kingdom.</p>
              <div className="work-featured-deliverables">
                {deliverables.map((item) => {
                  const Icon = item.icon;
                  return <div key={item.title}><Icon size={17} /><span><strong>{item.title}</strong><small>{item.description}</small></span></div>;
                })}
              </div>
              <div className="work-featured-actions">
                <Link className="button button-orange" href="/work/prokem">Explore the case study <ArrowUpRight size={16} /></Link>
                <a href="https://prokemfoods.co.uk/" target="_blank" rel="noreferrer">Visit Prokem <ArrowUpRight size={15} /></a>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="work-proof section-pad">
        <div className="container work-proof-grid">
          <div><Eyebrow>HOW WE THINK ABOUT DELIVERY</Eyebrow><h2>Not isolated outputs.<br /><span>A connected experience.</span></h2></div>
          <div>
            <p>For Prokem, the work was not limited to making a website or refreshing a visual identity. The engagement brought brand identity, positioning and messaging, website design and e-commerce development into one joined-up customer experience.</p>
            <p>That is how we approach client work: understand the business first, connect the right disciplines and deliver what the customer needs to experience.</p>
            <Link className="inline-link" href="/services">Explore BuildGenie capabilities <ArrowUpRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="work-ventures section-pad">
        <div className="container work-ventures-inner">
          <div><Eyebrow>OUR OWN BUILDING JOURNEY</Eyebrow><h2>We build our own<br /><span>ventures, too.</span></h2><p>Our ventures keep us close to the challenges of product decisions, customer discovery and growing a community around something useful.</p></div>
          <Link className="button button-dark" href="/ventures">Explore our ventures <ArrowUpRight size={16} /></Link>
        </div>
      </section>

      <section className="work-index-cta section-pad">
        <div className="container">
          <Eyebrow>HAVE A PROJECT IN MIND?</Eyebrow>
          <h2>Let&apos;s make the work<br /><span>matter to the outcome.</span></h2>
          <p>Tell us what you are building, where you want to go and what is getting in the way. We&apos;ll help you find the next useful step.</p>
          <Link className="button button-orange" href="/contact">Start a conversation <ArrowUpRight size={16} /></Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
