"use server";
import { connectDb } from "@/database";
import { User, UserModel } from "@/database/model/user";
import jwt from "jsonwebtoken";

export const getUser = async (token: string) => {
  try {
    const email = jwt.verify(token, process.env.JWT_SECRET!);

    console.log(email, "email");

    await connectDb();

    const user = await UserModel.findOne({
      email,
    }).lean();

    if (!user) {
      return null;
    }

    return { user: user as User, token };
    // return null;
  } catch (error) {
    console.log(error, "error");

    return null;
  }
};
