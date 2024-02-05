import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { Footer } from "@/components/modules/Footer";
import { ReduxProdiver } from "@/components/modules/ReduxProdiver";
import { RrwebProvider } from "@/components/modules/RrwebProvider";
import { BlogHero } from "@/components/templates/Blogpage/BlogHero";
import { BlogsContainer } from "@/components/templates/Blogpage/BlogsContainer";

export default function page() {
  return (
    <RrwebProvider>
      <ReduxProdiver>
        <DefaultLayout>
          <BlogHero />
          <BlogsContainer />
          <Footer isBackground={false} />
        </DefaultLayout>
      </ReduxProdiver>
    </RrwebProvider>
  );
}
