export type AnalyticsEventParams = Record<string, string | number | boolean | null | undefined>;

declare global {
  interface Window {
    dataLayer?: IArguments[] | unknown[];
    gtag?: (...args: unknown[]) => void;
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

    window.gtag("event", eventName, parameters);
  } catch {
    // Tracking must never interrupt the advisor or the visitor's experience.
  }
}
