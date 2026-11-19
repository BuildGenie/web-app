import Link from "next/link";
import { ArrowUpRight, CheckCircle2, type LucideIcon } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { LegalLinks } from "@/components/legal-links";
import { advisorLink } from "@/components/advisor-link";
import { getPublicServices } from "@/lib/public-api";

export type ServiceOffer = {
  name: string;
  type: string;
  price: string;
  timeline: string;
  description: string;
  deliverables: string[];
};
export type ServiceFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
};
export type ServicePageConfig = {
  eyebrow: string;
  headline: string;
  highlight: string;
  intro: string;
  note: string;
  featuresHeading: string;
  featuresIntro: string;
  features: ServiceFeature[];
  offersHeading: string;
  offersIntro: string;
  offers: ServiceOffer[];
  process: { title: string; description: string }[];
  related: { title: string; description: string; href: string }[];
  ctaTitle: string;
  ctaHighlight: string;
  ctaText: string;
  ctaLabel: string;
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <div className="eyebrow"><span className="eyebrow-line" />{children}</div>;
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand-block">
          <Link className="brand brand-light" href="/">
            <span className="brand-mark" aria-hidden="true"><span /><span /><span /><span /></span>
            <span className="brand-name">BuildGenie <span>Labs</span></span>
          </Link>
          <p>Build with clarity.<br />Grow with intent.</p>
        </div>
        <div className="footer-links">
          <div><span>EXPLORE</span><Link href="/services">All services</Link><Link href="/about">About BuildGenie</Link></div>
          <div><span>CONNECT</span><Link href="/contact">Email us</Link><Link href={advisorLink("Start a project")}>Start a project</Link></div>
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

export async function ServiceLandingPage({ config }: { config: ServicePageConfig }) {
  const backendServices = await getPublicServices().catch(() => []);
  const backendPackages = backendServices.flatMap((service) => service.packages ?? []);
  const offers = displayConfig.offers.map((offer) => {
    const match = backendPackages.find((pkg) => pkg.name.trim().toLowerCase() === offer.name.trim().toLowerCase());
    if (!match) return offer;
    const packageConfig = (match.configuration ?? {}) as Record<string, unknown>;
    return {
      ...offer,
      price: typeof packageConfig.displayPrice === "string" ? packageConfig.displayPrice : offer.price,
      timeline: typeof packageConfig.timeline === "string" ? packageConfig.timeline : offer.timeline,
      description: match.description || offer.description,
    };
  });
  const displayConfig = { ...config, offers };
  return (
    <main>
      <SiteHeader />
      <section className="service-detail-hero">
        <div className="container service-detail-hero-inner">
          <Eyebrow>{displayConfig.eyebrow}</Eyebrow>
          <h1>{displayConfig.headline}<br /><span>{displayConfig.highlight}</span></h1>
          <p>{displayConfig.intro}</p>
          <div className="service-detail-hero-bottom">
            <span><i /> BUILT AROUND YOUR OUTCOME</span>
            <Link className="button button-orange" href={advisorLink(displayConfig.eyebrow)}>Discuss your project <ArrowUpRight size={17} /></Link>
          </div>
        </div>
      </section>
      <section className="service-detail-features section-pad">
        <div className="container">
          <div className="section-heading">
            <div><Eyebrow>WHAT WE HELP YOU DO</Eyebrow><h2>{displayConfig.featuresHeading}</h2></div>
            <p>{displayConfig.featuresIntro}</p>
          </div>
          <div className="service-detail-feature-grid">
            {displayConfig.features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <article className="service-detail-feature" key={feature.title}>
                  <div className="service-detail-feature-top"><span>0{index + 1}</span><Icon size={21} /></div>
                  <h3>{feature.title}</h3><p>{feature.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className="service-detail-offers section-pad">
        <div className="container">
          <div className="section-heading">
            <div><Eyebrow>WAYS TO ENGAGE</Eyebrow><h2>{displayConfig.offersHeading}</h2></div>
            <p>{displayConfig.offersIntro}</p>
          </div>
          <div className="service-detail-offer-grid">
            {displayConfig.offers.map((offer, index) => (
              <article className="service-detail-offer" key={offer.name}>
                <div className="service-detail-offer-top"><span>0{index + 1} / {offer.type.toUpperCase()}</span><span>{offer.timeline}</span></div>
                <h3>{offer.name}</h3>
                <div className="service-detail-offer-price">{offer.price}</div>
                <p className="service-detail-offer-description">{offer.description}</p>
                <div className="service-detail-offer-includes">WHAT&apos;S INCLUDED</div>
                <ul>{offer.deliverables.map((item) => <li key={item}><CheckCircle2 size={16} />{item}</li>)}</ul>
                <Link href={advisorLink(displayConfig.eyebrow, offer.name)}>Request this engagement <ArrowUpRight size={15} /></Link>
              </article>
            ))}
          </div>
          <p className="service-detail-note">{displayConfig.note}</p>
        </div>
      </section>
      <section className="service-detail-process section-pad">
        <div className="container service-detail-process-grid">
          <div><Eyebrow>HOW WE WORK</Eyebrow><h2>Clear steps.<br /><span>Shared ownership.</span></h2><p>We keep the work transparent, practical and connected to the outcome you need.</p></div>
          <div className="service-detail-process-list">
            {displayConfig.process.map((step, index) => (
              <div key={step.title}><span>0{index + 1}</span><section><h3>{step.title}</h3><p>{step.description}</p></section></div>
            ))}
          </div>
        </div>
      </section>
      <section className="service-detail-related section-pad">
        <div className="container">
          <div className="section-heading">
            <div><Eyebrow>CONNECTED CAPABILITIES</Eyebrow><h2>More ways to move the work forward.</h2></div>
            <p>Bring in another capability when it helps you make progress. We can shape the right combination around your stage and priorities.</p>
          </div>
          <div className="service-detail-related-grid">
            {displayConfig.related.map((item) => (
              <Link href={item.href} className="service-detail-related-card" key={item.href}>
                <span><strong>{item.title}</strong><small>{item.description}</small></span><ArrowUpRight size={18} />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="service-detail-cta section-pad">
        <div className="container service-detail-cta-inner">
          <div><Eyebrow>LET&apos;S GET STARTED</Eyebrow><h2>{displayConfig.ctaTitle}<br /><span>{displayConfig.ctaHighlight}</span></h2><p>{displayConfig.ctaText}</p></div>
          <Link className="button button-orange" href={advisorLink(displayConfig.eyebrow)}>{displayConfig.ctaLabel} <ArrowUpRight size={17} /></Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
