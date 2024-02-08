import { getBlogs } from "@/action/getBlogs";
import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { Footer } from "@/components/modules/Footer";
import { ReduxProdiver } from "@/components/modules/ReduxProdiver";
import { BlogHero } from "@/components/templates/Blog/BlogHero";
import { BlogsContainer } from "@/components/templates/Blog/BlogsContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Incerto | Blogs",
  description:
    "Explore the world of observability with our insightful blog articles. Learn about the latest trends, best practices, and tools in observability, empowering you to monitor, analyze, and optimize your systems for peak performance. Stay informed and enhance your observability expertise with our comprehensive blog series.",
  openGraph: {
    title: "Incerto | Blogs",
    description:
      "Explore the world of observability with our insightful blog articles. Learn about the latest trends, best practices, and tools in observability, empowering you to monitor, analyze, and optimize your systems for peak performance. Stay informed and enhance your observability expertise with our comprehensive blog series.",
  },
};

export default async function page() {
  const blogs = await getBlogs();
  return (
    <DefaultLayout>
      <ReduxProdiver>
        <BlogHero />
        <BlogsContainer blogs={blogs} />
        <Footer isBackground={false} />
      </ReduxProdiver>
    </DefaultLayout>
  );
}
