import { getBlogs } from "@/action/getBlogs";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs = await getBlogs();

  const blogsSiteMap: MetadataRoute.Sitemap = blogs.map((blog) => ({
    url: `https://incerto.in/blog/${blog._id}`,
    lastModified: blog.date.toString(),
    changeFrequency: "weekly",
    priority: 1,
  }));

  return [
    {
      url: "https://incerto.in",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://incerto.in/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://incerto.in/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://incerto.in/product?product_name=host_metrics",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://incerto.in/product?product_name=trace_and_logs",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://incerto.in/product?product_name=anomaly_detection",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...blogsSiteMap,
  ];
}
