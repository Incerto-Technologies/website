import { AppMarkDown } from "@/components/modules/AppMarkDown";
import { connectDb } from "@/database";
import { BlogModel } from "@/database/model/blog";

export default async function page({ params }: { params: { slug: string } }) {
  await connectDb();
  const blog = await BlogModel.findOne({
    title: { $regex: new RegExp(params.slug.replaceAll("-", " "), "i") },
  });

  console.log(blog);

  return (
    <section>
      <div className=""></div>
      <div className="">
        <AppMarkDown markdown={blog?.markdown || ""} />
      </div>
    </section>
  );
}
