import { getBlogs } from "@/action/getBlogs";
import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { Footer } from "@/components/modules/Footer";
import { ReduxProdiver } from "@/components/modules/ReduxProdiver";
import { BlogHero } from "@/components/templates/Blog/BlogHero";
import { BlogsContainer } from "@/components/templates/Blog/BlogsContainer";
import { connectDb } from "@/database";
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

export default async function Blog() {
  const blogs = await getBlogs();
  await connectDb();

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
