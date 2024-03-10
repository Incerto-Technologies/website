import { connectDb } from "@/database";
import { BlogModel } from "@/database/model/blog";
import { UserModel } from "@/database/model/user";
export const getBlogs = async () => {
  try {
    await connectDb();
    const blogs = await BlogModel.find({})
      .populate({ path: "author", model: UserModel })
      .exec();

    if (!blogs) {
      return [];
    }

    let sortedBlogs = blogs.sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      }
      return -1;
    });

    sortedBlogs = sortedBlogs.map((blog) => JSON.parse(JSON.stringify(blog)));
    return sortedBlogs;
  } catch (error) {
    console.log(error);
    return [];
  }
};
