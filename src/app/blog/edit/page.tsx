import { getBlogs } from "@/action/getBlogs";
import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { Footer } from "@/components/modules/Footer";
import { ReduxProdiver } from "@/components/modules/ReduxProdiver";
import { BlogHero } from "@/components/templates/Blog/BlogHero";
import { BlogsContainer } from "@/components/templates/Blog/BlogsContainer";
import { Blog } from "@/types/Blogs";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Incerto Blogs: Know more about our work. ",
  description:
    "Learn using open-source tools to achieve the most flexible observability and real impact.",
  openGraph: {
    title: "Incerto Blogs: Know more about our work. ",
    description:
      "Learn using open-source tools to achieve the most flexible observability and real impact.",
  },
};
export const revalidate = 30;
export async function generateStaticParams() {
  const blogs = await getBlogs();
  return blogs.map((blog) => ({
    slug: blog._id.toString(),
  }));
}
export default async function page() {
  const blogs = await getBlogs();
  return (
    <DefaultLayout>
      <ReduxProdiver>
        <BlogHero />
        <BlogsContainer blogs={blogs as Blog[]} />
        <Footer isBackground={false} />
      </ReduxProdiver>
    </DefaultLayout>
  );
}
