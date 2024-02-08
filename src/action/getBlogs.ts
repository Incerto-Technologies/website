import { connectDb } from "@/database";
import { BlogModel } from "@/database/model/blog";
import { Blog } from "@/types/Blogs";

export const getBlogs = async () => {
  await connectDb();
  const blogs = (await BlogModel.find().lean()) as Blog[];

  if (!blogs) {
    return [];
  }

  const sortedBlogs = blogs.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    }
    return -1;
  });

  return sortedBlogs;
};
