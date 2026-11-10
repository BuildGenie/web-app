"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { trackEvent } from "@/components/analytics";

const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
type ConsentChoice = "accepted" | "rejected" | null;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function AnalyticsConsent() {
  const pathname = usePathname();
  const [choice, setChoice] = useState<ConsentChoice>(null);
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem("buildgenie-analytics-consent");
      if (stored === "accepted" || stored === "rejected") setChoice(stored);
    } catch {
      setChoice("rejected");
    }

    const openSettings = () => setSettingsOpen(true);
    window.addEventListener("buildgenie:open-analytics-settings", openSettings);
    return () => window.removeEventListener("buildgenie:open-analytics-settings", openSettings);
  }, []);

  useEffect(() => {
    if (choice === "accepted" && measurementId) {
      trackEvent("page_view", { page_path: pathname });
    }
  }, [choice, pathname]);

  function saveChoice(next: Exclude<ConsentChoice, null>) {
    try {
      window.localStorage.setItem("buildgenie-analytics-consent", next);
    } catch {
      // A blocked storage API simply means the preference lasts for this visit.
    }

    setChoice(next);
    setSettingsOpen(false);

    if (next === "rejected" && window.gtag) {
      window.gtag("consent", "update", { analytics_storage: "denied" });
    }

    if (next === "accepted" && measurementId) {
      trackEvent("analytics_consent_granted");
    }
  }

  if (!measurementId) return null;

  const showPanel = choice === null || settingsOpen;

  return (
    <>
      {choice === "accepted" && (
        <>
          <Script id="buildgenie-ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              window.gtag = window.gtag || function(){ window.dataLayer.push(arguments); };
              window.gtag('js', new Date());
              window.gtag('config', '${measurementId}', { send_page_view: false });
            `}
          </Script>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
            strategy="afterInteractive"
          />
        </>
      )}

      {showPanel && (
        <aside className="analytics-consent" role="dialog" aria-label="Analytics preferences">
          <div className="analytics-consent-copy">
            <strong>Help us improve BuildGenie</strong>
            <p>
              With your permission, we use Google Analytics to understand visits
              and useful actions on this site. The Project Advisor conversation
              is not sent to analytics.
              <Link href="/cookies">Cookie details</Link>
            </p>
          </div>
          <div className="analytics-consent-actions">
            <button type="button" className="analytics-reject" onClick={() => saveChoice("rejected")}>
              {choice === "rejected" ? "Keep optional analytics off" : "Reject optional"}
            </button>
            <button type="button" className="analytics-accept" onClick={() => saveChoice("accepted")}>
              Allow analytics
            </button>
            {settingsOpen && (
              <button type="button" className="analytics-close" onClick={() => setSettingsOpen(false)} aria-label="Close preferences">
                Close
              </button>
            )}
          </div>
        </aside>
      )}
    </>
  );
}
