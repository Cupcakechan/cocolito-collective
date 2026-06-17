// app/robots.ts
// Generates https://cocolitocollective.com/robots.txt.
// Allows all search engines to crawl everything, and points them
// at the sitemap so they can find every page.
import type { MetadataRoute } from "next";

const BASE_URL = "https://cocolitocollective.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
