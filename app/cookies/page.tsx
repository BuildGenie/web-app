import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { PreferencesButton } from "./preferences-button";

export const metadata = {
  title: "Cookies & Analytics | BuildGenie Labs",
  description: "Information about browser storage and optional analytics on the BuildGenie Labs website.",
  alternates: { canonical: "/cookies" },
};

function Eyebrow() {
  return <div className="eyebrow"><span className="eyebrow-line" />SITE PREFERENCES</div>;
}

export default function CookiesPage() {
  const analyticsConfigured = Boolean(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID);

  return (
    <main>
      <SiteHeader />
      <section className="legal-hero">
        <div className="container">
          <Eyebrow />
          <h1>Your choices.<br /><span>Clearly explained.</span></h1>
          <p>Last reviewed: 10 November 2026</p>
        </div>
      </section>
      <section className="legal-content section-pad">
        <div className="container legal-document">
          <p className="legal-lead">
            BuildGenie keeps the website light. The Project Advisor runs in your
            browser and does not need an account or an analytics cookie to work.
          </p>
          <h2>Essential browser storage</h2>
          <p>
            The site uses local browser storage to remember your optional
            analytics choice. The advisor&apos;s conversation is held in page
            memory and is not retained after the page session ends.
          </p>
          <h2>Optional analytics</h2>
          <p>
            {analyticsConfigured
              ? "Google Analytics is configured but will only load after you choose “Allow analytics”. You can reject it and still use the entire website."
              : "Google Analytics is not currently configured for this deployment. No optional analytics script is loaded."}
          </p>
          <p>
            If analytics is enabled, it helps us understand which pages and
            website actions are useful. The Project Advisor&apos;s message
            contents, name and email address are not sent as analytics data.
          </p>
          <div className="cookie-preferences-card">
            <div>
              <strong>Analytics preference</strong>
              <p>Change whether this browser allows optional website analytics.</p>
            </div>
            {analyticsConfigured && <PreferencesButton />}
          </div>
          <h2>Change your choice</h2>
          <p>
            You can accept or reject optional analytics using the preference
            panel. Your choice is saved in this browser. Clearing browser
            storage also clears that saved preference.
          </p>
          <div className="legal-next">
            <Link className="inline-link" href="/privacy">Read our privacy information <ArrowUpRight size={16} /></Link>
            <Link className="button button-orange" href="/contact">Open Project Advisor <ArrowUpRight size={16} /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
