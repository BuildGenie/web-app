import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";

export const metadata = {
  title: "Privacy | BuildGenie Labs",
  description: "How BuildGenie Labs handles information when you browse the website or use the Project Advisor.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    type: "website",
    title: "Privacy | BuildGenie Labs",
    description: "How BuildGenie Labs handles information when you browse the website or use the Project Advisor.",
    url: "/privacy",
  },
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <div className="eyebrow"><span className="eyebrow-line" />{children}</div>;
}

export default function PrivacyPage() {
  return (
    <main>
      <SiteHeader />
      <section className="legal-hero">
        <div className="container">
          <Eyebrow>YOUR INFORMATION</Eyebrow>
          <h1>Privacy, without<br /><span>the guesswork.</span></h1>
          <p>Last reviewed: 10 November 2026</p>
        </div>
      </section>
      <section className="legal-content section-pad">
        <div className="container legal-document">
          <p className="legal-lead">
            This page explains what information is handled when you visit the
            BuildGenie Labs website, explore the Project Advisor or choose to
            contact our team.
          </p>

          <h2>1. Information you choose to provide</h2>
          <p>
            The Project Advisor runs in your browser. The messages and selections
            you make are held in the page session so the advisor can prepare a
            recommendation. They are not automatically uploaded to a BuildGenie
            database by the current website implementation.
          </p>
          <p>
            When you choose “Work with us”, the website asks for your name and
            email address and prepares an email draft containing those details,
            the conversation and any recommendation. Your email application
            opens so you can review and send it. Nothing is delivered to
            BuildGenie until you send that email.
          </p>

          <h2>2. Analytics</h2>
          <p>
            Google Tag Manager and the connected Google Analytics 4 measurement
            destination are loaded only after you actively allow optional
            analytics. If you reject optional analytics, the tag manager is not
            loaded.
          </p>
          <p>
            When enabled with your permission, analytics can record page views and
            selected events such as advisor goal selection, recommendations
            and request-email preparation. The contents of Project Advisor
            messages, names, email addresses and free-text descriptions are not
            included in analytics events.
          </p>

          <h2>3. Browser storage</h2>
          <p>
            The website may use browser storage to remember whether you accepted
            or rejected optional analytics. The advisor conversation itself is
            not retained after you leave or refresh the page.
          </p>

          <h2>4. Third-party services</h2>
          <p>
            If optional analytics is enabled, Google Analytics is provided by
            Google and may process information according to Google&apos;s
            applicable terms and privacy documentation. Your email application
            and email provider handle any message you choose to send to
            hello@buildgenielabs.com.
          </p>

          <h2>5. Your choices</h2>
          <p>
            You can reject optional analytics or change your preference from
            the <Link href="/cookies">Cookie preferences page</Link>. You can
            also choose not to use the advisor or not to send an email request.
          </p>

          <h2>6. Contact</h2>
          <p>
            For questions about this page or information you have chosen to
            send us, contact <a href="mailto:hello@buildgenielabs.com">hello@buildgenielabs.com</a>.
          </p>

          <div className="legal-next">
            <Link className="inline-link" href="/cookies">Read our cookie information <ArrowUpRight size={16} /></Link>
            <Link className="button button-orange" href="/contact">Open Project Advisor <ArrowUpRight size={16} /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
