import { GoPreviousPageButton } from "@/components/elements/GoPreviousPageButton";
import { AppMarkDown } from "@/components/modules/AppMarkDown";
import { BlogCard } from "@/components/modules/BlogCard";
import { BlogCardMobile } from "@/components/modules/BlogCardMobile";
import { BlogHeader } from "@/components/modules/BlogHeader";
import { BlogNotFound } from "@/components/modules/BlogNotFound";
import { Footer } from "@/components/modules/Footer";
import { connectDb } from "@/database";
import { BlogModel } from "@/database/model/blog";

export default async function page({ params }: { params: { slug: string } }) {
  await connectDb();

  const [data, blogs] = await Promise.all([
    BlogModel.findOne({
      title: {
        $regex: new RegExp(params.slug.replaceAll("-", " "), "i"),
      },
    }).lean(),
    BlogModel.find({}).limit(3).lean(),
  ]);

  if (!data || blogs.length === 0) {
    return <BlogNotFound />;
  }

  const blog = data;
  // const blogsJSON = blogs.map((blog) => blog.toJSON());

  return (
    <main className="h-full w-full bg-[#D5E5DF]  font-manrope">
      <div className="w-container">
        <GoPreviousPageButton />
      </div>
      <section className="mx-auto w-full max-w-[740px] px-4 md:px-0">
        {/* @ts-ignore */}
        <BlogHeader {...blog} />
        <div className="overflow text-black">
          <AppMarkDown markdown={blog.markdown || ""} />
        </div>
        <div className="mt-[94px] md:mt-[144px]">
          <h3 className="text-center text-[22px] font-bold leading-10 tracking-tighter text-black md:text-[32px]">
            Read other articles
          </h3>
        </div>
      </section>
      <div className="w-container mt-[24px] text-black md:mt-[40px]">
        <div className="md:hidden">
          {/* @ts-ignore */}
          <BlogCardMobile {...blogs[0]} />
        </div>
        <div className="hidden grid-cols-3 text-black md:grid">
          {blogs.map((blog, index) => (
            <div key={index}>
              {/* @ts-ignore */}
              <BlogCard {...blog} />
            </div>
          ))}
        </div>
      </div>
      <Footer isBackground isTextWhite />
    </main>
  );
}
