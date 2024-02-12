"use server";

import jwt from "jsonwebtoken";
import { connectDb } from "@/database";
import { BlogModel } from "@/database/model/blog";
import { Blog } from "@/types/Blogs";
import { UserModel } from "@/database/model/user";
import { revalidatePath } from "next/cache";

interface BlogRequest extends Blog {
  token: string;
}

export const createBlogAction = async (blog: BlogRequest) => {
  try {
    console.log(blog, "blog object");

    if (!blog)
      return {
        message: "No blog object provided",
        success: false,
      };

    if (!blog.token)
      return {
        message: "No token provided",
        success: false,
      };

    await connectDb();

    const email = jwt.verify(blog.token, process.env.JWT_SECRET!) as string;
    const user = await UserModel.findOne({
      email,
    });

    if (!user)
      return {
        message: "User not found",
        success: false,
      };

    if (!user.isAdmin)
      return {
        message: "You are not authorized to create a blog",
        success: false,
      };

    const newBlog = await BlogModel.create({
      ...blog,
      profile: user.profile,
      createdBy: user._id,
    });
    const blogJSON = newBlog.toJSON();
    revalidatePath("/blog/");
    return {
      message: "Blog created successfully",
      success: true,
      blog: blogJSON,
    };
  } catch (error) {
    console.log(error, "error in create blog action");
    return {
      message: "An error occured",
      success: false,
    };
  }
};
