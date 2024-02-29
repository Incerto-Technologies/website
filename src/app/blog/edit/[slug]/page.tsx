import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { AddBlogForm } from "@/components/modules/AddBlogForm";
import { BlogNotFound } from "@/components/modules/BlogNotFound";
import { ReduxProdiver } from "@/components/modules/ReduxProdiver";
import { connectDb } from "@/database";
import BlogModel from "@/database/model/blog";
import { isValidObjectId } from "mongoose";

export default async function page({ params }: { params: { slug: string } }) {
  if (!isValidObjectId(params.slug)) {
    return <BlogNotFound />;
  }

  await connectDb();

  const [data] = await Promise.all([
    BlogModel.findById(params.slug).populate("author").lean(),
  ]);

  if (!data) {
    return <BlogNotFound />;
  }

  const blog = data;

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
