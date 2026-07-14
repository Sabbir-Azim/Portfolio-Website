import type { MetadataRoute } from "next";
import { projects } from "./data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://sabbir-azim.github.io";
  return [{ url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 }, ...projects.map((project) => ({ url: `${base}/projects/${project.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 }))];
}
