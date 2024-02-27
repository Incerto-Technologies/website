"use server";

import { connectDb } from "@/database";
import UserModel from "@/database/model/user";
import { sendMail } from "@/utils/sendMail";

export const getUserVerify = async (token: string) => {
  try {
    if (!token) {
      return {
        message: "Token is required",
        success: false,
      };
    }

    await connectDb();
    const updatedUser = await UserModel.findOneAndUpdate(
      { verificationToken: token },
      {
        verified: true,
        verificationToken: "",
        isAdmin: true,
      },
      { new: true },
    );

    if (!updatedUser)
      return {
        message: "Already Verified!",
        success: false,
      };
    (await sendMail(
      "Your account is Verified",
      `
  Hi ${updatedUser?.email.split("@")[0]},
  Your account is successfully verified. Now you can add your blog.
  Blog Link: https://${process.env.WEB_URL!}/blog/add
  `,
      updatedUser?.email,
    )) as boolean;

    return {
      message: "Verified successfully",
      success: true,
      isMailSent: false,
      user: updatedUser,
    };
  } catch (err) {
    console.log(err);
    return {
      message: "Something went wrong! try again later",
      success: false,
    };
  }
};
