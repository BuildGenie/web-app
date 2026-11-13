import type { MetadataRoute } from "next";

const siteUrl = "https://buildgenielabs.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/work",
    "/work/prokem",
    "/ventures",
    "/ventures/maigie",
    "/ventures/cakkie",
    "/services",
    "/services/validate",
    "/services/strategy",
    "/services/marketing",
    "/services/specialist",
    "/services/technology",
    "/services/support",
    "/contact",
    "/privacy",
    "/cookies",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/contact" || route === "/services" ? 0.9 : 0.7,
  }));
}
