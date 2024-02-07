import { AppMarkDown } from "@/components/modules/AppMarkDown";
import { BlogNotFound } from "@/components/modules/BlogNotFound";
import { connectDb } from "@/database";
import { BlogModel } from "@/database/model/blog";

export default async function page({ params }: { params: { slug: string } }) {
  await connectDb();
  const blog = await BlogModel.findOne({
    title: {
      $regex: new RegExp(`\b${params.slug.replaceAll("-", " ")}\b`, "i"),
    },
  });

  if (!blog) {
    return <BlogNotFound />;
  }

  return (
    <section>
      <div className=""></div>
      <div className="">
        <AppMarkDown markdown={blog.toJSON().markdown || ""} />
      </div>
    </section>
  );
}
