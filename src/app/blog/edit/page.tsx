import { getBlogs } from "@/action/getBlogs";
import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { Footer } from "@/components/modules/Footer";
import { ReduxProdiver } from "@/components/modules/ReduxProdiver";
import { BlogHero } from "@/components/templates/Blog/BlogHero";
import { BlogsContainer } from "@/components/templates/Blog/BlogsContainer";

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
