import dynamic from "next/dynamic";
import AppMarkDown from "@/components/modules/AppMarkDown";

import { UserModel } from "@/database/model/user";
const GoPreviousPageButton = dynamic(
  () => import("@/components/elements/GoPreviousPageButton"),
  {
    ssr: false,
  },
);

const BlogCard = dynamic(
  () => import("@/components/modules/BlogCard").then((mod) => mod.BlogCard),
  {
    ssr: false,
  },
);

const BlogCardMobile = dynamic(
  () =>
    import("@/components/modules/BlogCardMobile").then(
      (mod) => mod.BlogCardMobile,
    ),
  {
    ssr: false,
  },
);

import { BlogHeader } from "@/components/modules/BlogHeader";
import { BlogNotFound } from "@/components/modules/BlogNotFound";
import { BookDemo } from "@/components/modules/BookDemo";
import { Footer } from "@/components/modules/Footer";
import { connectDb } from "@/database";
import { BlogModel } from "@/database/model/blog";
import { Heebo } from "next/font/google"

import { Metadata } from "next";
import { getBlogs } from "@/action/getBlogs";
import { getBlogByTitle } from "@/action/getBlogByTitle";
import { Blog } from "@/types/Blogs";

type Props = {
  params: { blog: string };
};


const heebo = Heebo({
  weight: '400', subsets: ['latin']
})

export const revalidate = 30;

export async function generateStaticParams() {
  const blogs = await getBlogs();
  return blogs.map((blog) => ({
    blog: encodeURIComponent(
      blog.title.replace(/\s+/g, "-").replace(/\./g, "").toLowerCase(),
    ),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { blog } = await getBlogByTitle(params.blog);

  if (!blog) {
    return {
      title: "Blog not found",
    };
  }

  return {
    title: blog.title as string,
    description: blog.description as string,
    openGraph: {
      images: [blog.image],
      description: blog.description,
      title: blog.title,
      authors: blog.author.userName,
    },
  };
}

export default async function page({ params }: Props) {
  await connectDb();

  const [data, blogs] = await Promise.all([
    getBlogByTitle(params.blog),
    BlogModel.find({})
      .populate({ path: "author", model: UserModel })
      .limit(3)
      .lean(),
  ]);

  if (!data.success || !data.blog || blogs.length === 0) {
    return <BlogNotFound />;
  }

  const blog = data.blog as Blog;

  return (
    <main className={"h-full w-full bg-gray-200 " + heebo.className}>
      <div className="w-container">
        <GoPreviousPageButton />
      </div>
      <section className="mx-auto w-full max-w-[740px] px-4 md:px-0">
        <BlogHeader blog={blog} />
        <div className="overflow-x  text-black">
          <AppMarkDown markdown={blog.markdown || ""} />
        </div>
        <div>
          <BookDemo />
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
        <div className="mx-auto hidden w-5/6 grid-cols-2  gap-11 text-black md:grid xl:grid-cols-3">
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
