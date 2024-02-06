import { connectDb } from "@/database";
import { Blogs } from "../Blogs";
import { BlogModel } from "@/database/model/blog";
let isRun = false;
export const seedBlogs = async () => {
  if (isRun) return;
  isRun = true;
  await connectDb();
  await BlogModel.insertMany(Blogs);
  console.log("Done seeding blogs.");
};
