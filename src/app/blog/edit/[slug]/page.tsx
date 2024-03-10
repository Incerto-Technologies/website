import { getBlogById } from "@/action/getBlogById";
import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { AddBlogForm } from "@/components/modules/AddBlogForm";
import { BlogNotFound } from "@/components/modules/BlogNotFound";
import { ReduxProdiver } from "@/components/modules/ReduxProdiver";

export const revalidate = 30;

export default async function page({ params }: { params: { slug: string } }) {
  const data = await getBlogById(params.slug);

  console.log(data);
  if (!data.success) {
    return <BlogNotFound />;
  }

  const blog = data.blog;

  return (
    <DefaultLayout>
      <ReduxProdiver>
        <section className="flex h-full min-h-screen items-center justify-center bg-primary py-36">
          {/* @ts-ignore */}
          <AddBlogForm isEdit blog={blog} />
        </section>
      </ReduxProdiver>
    </DefaultLayout>
  );
}
