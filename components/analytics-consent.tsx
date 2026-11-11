"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  GOOGLE_ANALYTICS_MEASUREMENT_ID,
  GOOGLE_TAG_MANAGER_ID,
  ANALYTICS_CONFIGURED,
} from "@/components/analytics-config";
import { trackEvent } from "@/components/analytics";

type ConsentChoice = "accepted" | "rejected" | null;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __buildgenieGtmLoaded?: boolean;
  }
}

function setGoogleConsent(granted: boolean) {
  window.dataLayer = window.dataLayer ?? [];
  window.gtag =
    window.gtag ??
    ((...args: unknown[]) => {
      window.dataLayer?.push(args);
    });

  window.gtag("consent", "update", {
    analytics_storage: granted ? "granted" : "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}

function loadGoogleTagManager() {
  if (typeof window === "undefined" || !ANALYTICS_CONFIGURED) return;

  window.dataLayer = window.dataLayer ?? [];
  window.gtag =
    window.gtag ??
    ((...args: unknown[]) => {
      window.dataLayer?.push(args);
    });

  if (!window.__buildgenieGtmLoaded) {
    // Basic consent mode: no Google tag is loaded until the visitor opts in.
    window.gtag("consent", "default", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
    window.gtag("js", new Date());
    // Route site events to the supplied GA4 stream without an automatic
    // page_view; the app sends its own page views for client-side navigation.
    window.gtag("config", GOOGLE_ANALYTICS_MEASUREMENT_ID, {
      send_page_view: false,
    });
    window.__buildgenieGtmLoaded = true;

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${GOOGLE_TAG_MANAGER_ID}`;
    script.dataset.buildgenieTagManager = "true";
    document.head.appendChild(script);
  }

  setGoogleConsent(true);
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
    if (choice === "accepted") loadGoogleTagManager();
  }, [choice]);

  useEffect(() => {
    if (choice === "accepted") {
      trackEvent("page_view", { page_path: pathname });
    }
  }, [choice, pathname]);

  function saveChoice(next: Exclude<ConsentChoice, null>) {
    try {
      window.localStorage.setItem("buildgenie-analytics-consent", next);
    } catch {
      // A blocked storage API simply means the preference lasts for this visit.
    }

    if (next === "accepted") {
      loadGoogleTagManager();
    } else if (window.__buildgenieGtmLoaded) {
      setGoogleConsent(false);
    }

    setChoice(next);
    setSettingsOpen(false);

    if (next === "accepted") {
      trackEvent("analytics_consent_granted");
    }
  }

  if (!ANALYTICS_CONFIGURED) return null;

  const showPanel = choice === null || settingsOpen;

  return (
    <>
      {showPanel && (
        <aside className="analytics-consent" role="dialog" aria-label="Analytics preferences">
          <div className="analytics-consent-copy">
            <strong>Help us improve BuildGenie</strong>
            <p>
              With your permission, we use Google Analytics to understand visits
              and useful actions on this site. The Project Advisor conversation
              and your contact details are not sent to analytics.
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
