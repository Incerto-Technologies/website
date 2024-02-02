import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { ReduxProdiver } from "@/components/modules/ReduxProdiver";
import { BlogHero } from "@/components/templates/Blogpage/BlogHero";

export default function page() {
  return (
    <ReduxProdiver>
      <DefaultLayout>
        <BlogHero />
      </DefaultLayout>
    </ReduxProdiver>
  );
}
