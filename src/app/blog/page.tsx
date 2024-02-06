import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { Footer } from "@/components/modules/Footer";
import { ReduxProdiver } from "@/components/modules/ReduxProdiver";
import { RrwebProvider } from "@/components/modules/RrwebProvider";
import { BlogHero } from "@/components/templates/Blogpage/BlogHero";
import { Blogs } from "@/components/templates/Blogpage/Blogs";
import { seedBlogs } from "@/data/seeds/blogs.seeds";
export default function page() {
  seedBlogs();
  return (
    <RrwebProvider>
      <ReduxProdiver>
        <DefaultLayout>
          <BlogHero />
          <Blogs />
          <Footer isBackground={false} />
        </DefaultLayout>
      </ReduxProdiver>
    </RrwebProvider>
  );
}
