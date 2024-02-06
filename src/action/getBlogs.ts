import { Blog } from "@/data/Blogs";
import { connectDb } from "@/database";
import { BlogModel } from "@/database/model/blog";

export const getBlogs = async () => {
  await connectDb();
  const blogs = await BlogModel.find().lean();

  if (!blogs) {
    return [];
  }

  return blogs;
};
