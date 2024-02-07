import { GoPreviousPageButton } from "@/components/elements/GoPreviousPageButton";
import { AppMarkDown } from "@/components/modules/AppMarkDown";
import { BlogHeader } from "@/components/modules/BlogHeader";
import { BlogNotFound } from "@/components/modules/BlogNotFound";
import { connectDb } from "@/database";
import { BlogModel } from "@/database/model/blog";

export default async function page({ params }: { params: { slug: string } }) {
  await connectDb();
  const data = await BlogModel.findOne({
    title: {
      $regex: new RegExp(params.slug.replaceAll("-", " "), "i"),
    },
  });

  if (!data) {
    return <BlogNotFound />;
  }

  const blog = data.toJSON();

  return (
    <main className="h-full bg-[#D5E5DF] font-manrope text-[#000]">
      <GoPreviousPageButton />
      <section className="mx-auto w-full max-w-[740px] px-5 md:px-0">
        {/* @ts-ignore */}
        <BlogHeader {...blog} />
        <div>
          <AppMarkDown markdown={blog.markdown || ""} />
        </div>
      </section>
    </main>
  );
}
