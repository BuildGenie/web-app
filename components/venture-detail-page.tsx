import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Compass, Lightbulb, Users } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export type VentureDetail = {
  number: string;
  category: string;
  name: string;
  headline: string;
  summary: string;
  thesisEyebrow: string;
  thesisTitle: string;
  thesis: string[];
  focusEyebrow: string;
  focusTitle: string;
  focusIntro: string;
  focusAreas: { title: string; description: string }[];
  audienceEyebrow: string;
  audienceTitle: string;
  audiences: { title: string; description: string }[];
  closingLine: string;
  visual: "maigie" | "cakkie";
  externalUrl?: string;
  externalLabel?: string;
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <div className="eyebrow"><span className="eyebrow-line" />{children}</div>;
}

function VentureArtwork({ venture }: { venture: VentureDetail }) {
  if (venture.visual === "maigie") {
    return (
      <div className="venture-detail-art maigie-detail-art" aria-label="Maigie venture artwork">
        <div className="maigie-detail-orbit orbit-one" />
        <div className="maigie-detail-orbit orbit-two" />
        <div className="maigie-detail-orbit orbit-three" />
        <div className="maigie-detail-core"><span>maigie<span>.</span></span><small>LEARNING SHOULD HAPPEN, NOT BE MANAGED.</small></div>
        <span className="venture-art-index">BG VENTURE / {venture.number}</span>
      </div>
    );
  }

  return (
    <div className="venture-detail-art cakkie-detail-art" aria-label="Cakkie venture artwork">
      <div className="cakkie-detail-cake"><i /><i /><i /><span>✳</span></div>
      <strong>cakkie<span>!</span></strong>
      <small>A COMMUNITY FOR CAKE PEOPLE</small>
      <span className="venture-art-index">BG VENTURE / {venture.number}</span>
    </div>
  );
}

export function VentureDetailPage({ venture }: { venture: VentureDetail }) {
  return (
    <main>
      <SiteHeader />
      <section className="venture-detail-hero">
        <div className="container">
          <div className="venture-detail-topline">
            <Eyebrow>BUILDGENIE VENTURES / {venture.number}</Eyebrow>
            <span>{venture.category}</span>
          </div>
          <div className="venture-detail-hero-grid">
            <div>
              <Link className="venture-back-link" href="/ventures"><ArrowLeft size={15} /> All ventures</Link>
              <h1>{venture.headline}</h1>
              <p>{venture.summary}</p>
              <div className="venture-detail-actions">
                {venture.externalUrl && (
                  <a className="button button-orange" href={venture.externalUrl} target="_blank" rel="noreferrer">
                    {venture.externalLabel || "Visit website"} <ArrowUpRight size={16} />
                  </a>
                )}
                <Link className="text-link" href="/contact">Talk to BuildGenie <ArrowUpRight size={15} /></Link>
              </div>
            </div>
            <VentureArtwork venture={venture} />
          </div>
        </div>
      </section>

      <section className="venture-detail-thesis section-pad">
        <div className="container venture-detail-two-col">
          <div>
            <Eyebrow>{venture.thesisEyebrow}</Eyebrow>
            <h2>{venture.thesisTitle}</h2>
          </div>
          <div className="venture-detail-prose">
            {venture.thesis.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </section>

      <section className="venture-detail-focus section-pad">
        <div className="container">
          <div className="section-heading">
            <div><Eyebrow>{venture.focusEyebrow}</Eyebrow><h2>{venture.focusTitle}</h2></div>
            <p>{venture.focusIntro}</p>
          </div>
          <div className="venture-detail-focus-grid">
            {venture.focusAreas.map((area, index) => (
              <article key={area.title}>
                <span>0{index + 1}</span>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="venture-detail-audience section-pad">
        <div className="container venture-detail-audience-grid">
          <div>
            <Eyebrow>{venture.audienceEyebrow}</Eyebrow>
            <h2>{venture.audienceTitle}</h2>
            <p className="venture-detail-audience-note">Each venture is shaped around a real community and the needs that bring people together.</p>
          </div>
          <div className="venture-detail-audiences">
            {venture.audiences.map((audience) => (
              <div key={audience.title}>
                <span><Users size={17} /></span>
                <p><strong>{audience.title}</strong>{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="venture-detail-builder">
        <div className="container venture-detail-builder-inner">
          <div className="venture-builder-icon"><Compass size={23} /></div>
          <div><Eyebrow>BUILT WITH A BUILDER&apos;S MINDSET</Eyebrow><h2>{venture.closingLine}</h2><p>BuildGenie builds its own ventures to stay close to the decisions, trade-offs and learning involved in creating products people value.</p></div>
          <Link className="button button-orange" href="/ventures">Explore other ventures <ArrowUpRight size={16} /></Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
