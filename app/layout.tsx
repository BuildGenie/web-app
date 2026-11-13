import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { AnalyticsConsent } from "@/components/analytics-consent";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://buildgenielabs.com";
const siteTitle = "BuildGenie Labs: Build with clarity. Grow with intent.";
const siteDescription =
  "BuildGenie Labs helps ambitious founders turn promising ideas into enduring businesses through strategy, growth, technology and execution.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | BuildGenie Labs",
  },
  description: siteDescription,
  applicationName: "BuildGenie Labs",
  keywords: [
    "business strategy",
    "startup validation",
    "marketing and growth",
    "product development",
    "e-commerce development",
    "technology partner",
    "BuildGenie Labs",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "BuildGenie Labs",
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "BuildGenie Labs",
      url: siteUrl,
      logo: `${siteUrl}/icon.svg`,
      email: "hello@buildgenielabs.com",
      description: siteDescription,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "BuildGenie Labs",
      url: siteUrl,
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${inter.variable}`}>
        {children}
        <AnalyticsConsent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
