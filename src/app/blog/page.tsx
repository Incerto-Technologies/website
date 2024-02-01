import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { BlogHero } from "@/components/templates/Blogpage/BlogHero";

export default function page() {
  return (
    <DefaultLayout>
      <BlogHero />
    </DefaultLayout>
  );
}
