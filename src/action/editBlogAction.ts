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

    const isAminEmail = process.env
      .SEND_MAILS_TO!.split(",")
      .findIndex((email) => email == user.email);
    let blog;
    if (isAminEmail >= 0)
      blog = await BlogModel.findOneAndUpdate(
        {
          _id,
        },
        editedBlog,
        {
          new: true,
        },
      );
    else {
      blog = await BlogModel.findOneAndUpdate(
        {
          _id,
          createdBy: user._id,
        },
        editedBlog,
        {
          new: true,
        },
      );
    }

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
