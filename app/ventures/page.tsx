import Link from "next/link";
import { ArrowUpRight, Layers3 } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata = {
  title: "Our Ventures | BuildGenie Labs",
  description: "Explore the products and businesses being built by BuildGenie Labs, including Maigie and Cakkie.",
  alternates: { canonical: "/ventures" },
  openGraph: {
    type: "website",
    title: "Our Ventures | BuildGenie Labs",
    description: "Meet the ventures we're building and learning from at BuildGenie Labs.",
    url: "/ventures",
  },
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <div className="eyebrow"><span className="eyebrow-line" />{children}</div>;
}

export default function VenturesPage() {
  return (
    <main>
      <SiteHeader />
      <section className="ventures-index-hero">
        <div className="container">
          <Eyebrow>BUILT BY BUILDGENIE</Eyebrow>
          <h1>We don&apos;t just help<br /><span>others build.</span></h1>
          <p>We build, test, learn and grow our own ventures, too. They keep us close to the realities of creating products, serving communities and earning trust.</p>
          <div className="ventures-index-meta"><span>OUR PRODUCT VENTURES</span><span>THINK · BUILD · LEARN</span></div>
        </div>
      </section>

      <section className="ventures-index-list section-pad">
        <div className="container">
          <div className="ventures-index-heading">
            <div><Eyebrow>THE VENTURE PORTFOLIO</Eyebrow><h2>Different problems.<br /><span>One builder&apos;s mindset.</span></h2></div>
            <p>Each venture has its own audience, ambition and product direction. Explore what we&apos;re building and the thinking behind it.</p>
          </div>
          <div className="ventures-index-grid">
            <Link href="/ventures/maigie" className="ventures-index-card">
              <div className="ventures-index-art maigie-index-art">
                <div className="maigie-index-orbit one" /><div className="maigie-index-orbit two" /><div className="maigie-index-orbit three" />
                <strong>maigie<span>.</span></strong><small>LEARNING SHOULD HAPPEN, NOT BE MANAGED.</small>
              </div>
              <div className="ventures-index-card-copy">
                <div className="ventures-index-card-meta"><span>01 / LEARNING TECHNOLOGY</span><span>PRODUCT VENTURE</span></div>
                <h3>Maigie <ArrowUpRight size={20} /></h3>
                <p>An intelligent learning environment that carries context across learning, questions, preparation, practice and reflection.</p>
                <span className="ventures-index-card-cta">Explore Maigie <ArrowUpRight size={15} /></span>
              </div>
            </Link>
            <Link href="/ventures/cakkie" className="ventures-index-card">
              <div className="ventures-index-art cakkie-index-art">
                <div className="cakkie-index-cake"><i /><i /><i /><span>✳</span></div>
                <strong>cakkie<span>!</span></strong><small>A COMMUNITY FOR CAKE PEOPLE</small>
              </div>
              <div className="ventures-index-card-copy">
                <div className="ventures-index-card-meta"><span>02 / FOOD & COMMUNITY</span><span>PRODUCT VENTURE</span></div>
                <h3>Cakkie <ArrowUpRight size={20} /></h3>
                <p>A social platform for cake enthusiasts, bringing people who love cakes, create them and share their craft closer together.</p>
                <span className="ventures-index-card-cta">Explore Cakkie <ArrowUpRight size={15} /></span>
              </div>
            </Link>
          </div>
          <div className="ventures-index-note"><Layers3 size={18} /><p>These are BuildGenie-led ventures. They are separate from commissioned client engagements and case studies.</p></div>
        </div>
      </section>

      <section className="ventures-index-cta section-pad">
        <div className="container">
          <Eyebrow>BUILD SOMETHING OF YOUR OWN</Eyebrow>
          <h2>Have a promising idea<br /><span>you&apos;re ready to move forward?</span></h2>
          <p>Bring us the challenge. We can help you validate the opportunity, shape the strategy, build the product and find your customers.</p>
          <Link className="button button-orange" href="/contact">Talk to BuildGenie <ArrowUpRight size={16} /></Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
