import { getBlogById } from "@/action/getBlogById";
import { getBlogByTitle } from "@/action/getBlogByTitle";
import { getBlogs } from "@/action/getBlogs";
import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { AddBlogForm } from "@/components/modules/AddBlogForm";
import { BlogNotFound } from "@/components/modules/BlogNotFound";
import { ReduxProdiver } from "@/components/modules/ReduxProdiver";
import { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export const revalidate = 30;

export async function generateStaticParams() {
  const blogs = await getBlogs();
  return blogs.map((blog) => ({
    slug: encodeURIComponent(
      blog.title.replace(/\s+/g, "-").replace(/\./g, "").toLowerCase(),
    ),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { blog } = await getBlogByTitle(params.slug);

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

export default async function page({ params }: { params: { slug: string } }) {
  const data = await getBlogByTitle(params.slug);

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
