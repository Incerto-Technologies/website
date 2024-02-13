"use server";
import jwt from "jsonwebtoken";

import { Blog } from "@/types/Blogs";
import { UserModel } from "@/database/model/user";
import { BlogModel } from "@/database/model/blog";

interface BlogRequest extends Blog {
  token: string;
  __v: string;
}

export const editBlogAction = async ({
  token,
  _id,
  __v,
  ...editedBlog
}: BlogRequest) => {
  try {
    if (!token)
      return {
        message: "Need to login",
        success: false,
      };

    const email = jwt.verify(token, process.env.JWT_SECRET!);

    const user = await UserModel.findOne({ email });

    if (!user) {
      return {
        message: "user not found",
        success: false,
      };
    }

    if (!user.isAdmin)
      return {
        message: "Need admin access. Please contact your admin",
        success: false,
      };

    let blog = await BlogModel.findOneAndUpdate(
      {
        _id,
        createdBy: user._id,
      },
      editedBlog,
      {
        new: true,
      },
    );
    console.log(blog);

    if (!blog) {
      return {
        message: "Something went wrong try again later",
        success: false,
      };
    }

    return {
      message: "Successful updated the blog",
      success: true,
      blog: blog.toJSON(),
    };
  } catch (error) {
    console.log(error);

    return {
      message: "Something went wrong",
      success: false,
    };
  }
};
