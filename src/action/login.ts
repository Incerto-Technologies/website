"use server";

import { connectDb } from "@/database";
import { UserModel } from "@/database/model/user";
import { validateEmail } from "@/utils/validateEmail";
import jwt from "jsonwebtoken";
import bycrpt from "bcrypt";

export const login = async (user: {
  email: string;
  password: string;
  profile?: string;
}) => {
  try {
    if (!validateEmail(user.email) || !user.password) {
      return {
        message: "Email or password is missing",
        success: false,
      };
    }

    await connectDb();

    const userExists = await UserModel.findOne({
      email: user.email,
    }).select("+password");

    // ? exists user with email and password matches then return token and user data
    if (userExists) {
      const isPasswordMatched = await bycrpt.compare(
        user.password,
        userExists.password,
      );

      if (!isPasswordMatched) {
        return {
          message: "Email or password is incorrect",
          success: false,
        };
      }

      // Update last login
      userExists.lastLogin = new Date();
      await userExists.save();
      const { password, ...userExistsWithoutPassword } = userExists.toJSON();

      const token = jwt.sign(user.email, process.env.JWT_SECRET!);

      return {
        message: "Login successful",
        success: true,
        token,
        user: userExistsWithoutPassword,
      };
    }

    if (!user.profile)
      return {
        message: "profile image is required",
        success: false,
      };

    // ? if user does not exists then create new user
    const password = await bycrpt.hash(
      user.password,
      parseInt(process.env.SALT_ROUNDS!),
    );

    const newUser = await UserModel.create({
      email: user.email,
      password: password,
      profile: user.profile,
    });

    if (!newUser) {
      return {
        message: "Failed to create user",
        success: false,
      };
    }

    const token = jwt.sign(user.email, process.env.JWT_SECRET!);

    return {
      message: "User created",
      success: true,
      token,
      user: newUser.toJSON(),
    };
  } catch (error) {
    console.log(error);
    return {
      message: "Failed to login",
      success: false,
    };
  }
};
