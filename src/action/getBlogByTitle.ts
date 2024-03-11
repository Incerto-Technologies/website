"use server";

import { connectDb } from "@/database";
import { BlogModel } from "@/database/model/blog";
import { UserModel } from "@/database/model/user";

export const getBlogByTitle = async (title: string) => {
  try {
    await connectDb();
    const originalTitle = decodeURIComponent(title.replace(/-/g, " "))
      .replace(/\./g, "")
      .replace(/\s/g, ".*")
      .trim();

    let blog = await BlogModel.findOne({
      title: {
        $regex: `^${originalTitle}.*$`,
        $options: "i",
      },
    })
      .populate({ path: "author", model: UserModel })
      .lean();

    if (!blog) {
      return {
        message: "Blog not found",
        success: false,
      };
    }

    return {
      message: "Successfully fetch the Blog",
      success: true,
      blog,
    };
  } catch (err) {
    console.log(err);

    return {
      message: "Blog not found",
      success: false,
    };
  }
};
