import { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://vilayura.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/facilities",
    "/gallery",
    "/contact",
    "/journal",
    "/privacy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
