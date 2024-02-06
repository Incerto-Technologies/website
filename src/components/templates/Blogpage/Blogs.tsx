import { getBlogs } from "@/action/getBlogs";
import { BlogsContainer } from "./BlogsContainer";

export const Blogs = async () => {
  const blogs = await getBlogs();
  return (
    <div>
      {/* @ts-ignore */}
      <BlogsContainer blogs={blogs} />
    </div>
  );
};
