import { GOOGLE_ANALYTICS_MEASUREMENT_ID } from "@/components/analytics-config";

export type AnalyticsEventParams = Record<string, string | number | boolean | null | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __buildgenieGtmLoaded?: boolean;
  }
}

export function trackEvent(
  eventName: string,
  parameters: AnalyticsEventParams = {},
) {
  if (typeof window === "undefined") return;

  try {
    if (window.localStorage.getItem("buildgenie-analytics-consent") !== "accepted") {
      return;
    }

    window.dataLayer = window.dataLayer ?? [];
    window.gtag =
      window.gtag ??
      ((...args: unknown[]) => {
        window.dataLayer?.push(args);
      });

    // The event name is intentionally generic: GTM can route it to GA4
    // without receiving advisor message contents or personal contact details.
    window.gtag("event", eventName, {
      ...parameters,
      send_to: GOOGLE_ANALYTICS_MEASUREMENT_ID,
    });
  } catch {
    // Tracking must never interrupt the advisor or the visitor's experience.
  }
}
