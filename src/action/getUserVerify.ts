"use server";

import { connectDb } from "@/database";
import { UserModel } from "@/database/model/user";

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

    return {
      message: "Verified successfully",
      success: true,
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
