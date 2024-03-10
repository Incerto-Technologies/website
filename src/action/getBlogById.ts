"use server";
import { connectDb } from "@/database";
import { BlogModel } from "@/database/model/blog";
import { isValidObjectId } from "mongoose";
import { UserModel } from "@/database/model/user";
export const getBlogById = async (id: string) => {
  try {
    if (!isValidObjectId(id)) {
      return {
        message: "Bad request",
        success: false,
      };
    }

    await connectDb();
    const blog = await BlogModel.findById(id)
      .populate({ path: "author", model: UserModel })
      .exec();

    if (!blog) {
      return {
        message: "Not Found 404",
        success: false,
      };
    }
    return {
      message: "Success",
      success: true,
      blog: blog as any,
    };
  } catch (err) {
    console.log(err);
    return {
      message: "Something went wrong",
      success: false,
    };
  }
};
