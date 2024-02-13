import { getBlogs } from "@/action/getBlogs";
import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { Footer } from "@/components/modules/Footer";
import { ReduxProdiver } from "@/components/modules/ReduxProdiver";
import { BlogHero } from "@/components/templates/Blog/BlogHero";
import { BlogsContainer } from "@/components/templates/Blog/BlogsContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Incerto | Edit Blog",
  openGraph: {
    title: "Incerto | Edit Blog",
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
